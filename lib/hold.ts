/**
 * Hold-to-commit controller — the timing spine behind "hold to enter".
 *
 * This is the second Seam-A unit: the flakiest part of the journey (a
 * progress ring that must fill over time and fire exactly once) lifted out of
 * the DOM/E2E layer into a pure, deterministic module. There is no React, no
 * pointer/keyboard wiring, and no timer globals here — the clock is injected,
 * so the confluence component supplies a requestAnimationFrame-backed clock in
 * production while tests supply a fake one.
 *
 * Ported from the approved prototype's `makeHold` (rivers.round4): progress is
 * `elapsed / duration` clamped to 1, so it is a function of wall-clock time,
 * not of how many frames happened to tick.
 */

/**
 * The minimal time source the controller needs. `now` is a monotonic-ish
 * millisecond reading; `requestFrame` schedules a single future tick and
 * returns a canceller for it (one pending frame at a time, like rAF).
 */
export interface Clock {
  now(): number;
  requestFrame(tick: () => void): () => void;
}

/** How the controller is wired up for the lifetime of one berth. */
export interface HoldConfig {
  /** Injected time source (rAF-backed in the browser, fake in tests). */
  clock: Clock;
  /** Default fill duration in ms; a `begin(duration)` call can override it. */
  duration: number;
  /** Called with fill progress `0 → 1` on every frame (and on reset, with 0). */
  onProgress?: (progress: number) => void;
  /** Called exactly once when the hold reaches `1`. */
  onComplete?: () => void;
  /** A locked berth renders but never advances or completes. */
  locked?: boolean;
}

/** The imperative handle the consumer drives from its pointer/key events. */
export interface HoldController {
  /** Start (or restart) a hold, optionally with a one-off duration. */
  begin(duration?: number): void;
  /** Abort an in-flight hold: no completion, progress back to 0. */
  cancel(): void;
  /** Alias of {@link HoldController.cancel} — release without committing. */
  reset(): void;
  /** Current fill, `0 → 1`. */
  readonly progress: number;
  /** True while a hold is in flight (begun, not yet completed or reset). */
  readonly holding: boolean;
}

/**
 * The prototype's hold durations, in milliseconds. The consumer picks which
 * one to pass to {@link HoldController.begin} based on the input modality and
 * the visitor's reduced-motion preference.
 */
export const HOLD_DURATIONS = {
  pointer: 1150,
  keyboard: 560,
  reduced: 60,
} as const;

/** Build a hold-to-commit controller bound to an injected {@link Clock}. */
export function createHold(config: HoldConfig): HoldController {
  const { clock, onProgress, onComplete, locked = false } = config;
  const defaultDuration = config.duration;

  let activeDuration = defaultDuration;
  let start: number | null = null;
  let cancelFrame: (() => void) | null = null;
  let progress = 0;
  let completed = false;

  function render(p: number): void {
    progress = p;
    onProgress?.(p);
  }

  function stop(): void {
    cancelFrame?.();
    cancelFrame = null;
    start = null;
  }

  function tick(): void {
    if (start === null) return;
    const elapsed = clock.now() - start;
    const p = activeDuration <= 0 ? 1 : Math.min(elapsed / activeDuration, 1);
    render(p);
    if (p >= 1) {
      stop();
      if (!completed) {
        completed = true;
        onComplete?.();
      }
      return;
    }
    cancelFrame = clock.requestFrame(tick);
  }

  function begin(duration: number = defaultDuration): void {
    if (locked) {
      // Locked berths render an empty ring and never advance — the gate holds
      // no matter how long the visitor presses.
      render(0);
      return;
    }
    stop();
    completed = false;
    activeDuration = duration;
    start = clock.now();
    render(0);
    cancelFrame = clock.requestFrame(tick);
  }

  function reset(): void {
    stop();
    completed = false;
    render(0);
  }

  return {
    begin,
    cancel: reset,
    reset,
    get progress() {
      return progress;
    },
    get holding() {
      return start !== null;
    },
  };
}
