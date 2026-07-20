import { describe, expect, it } from "vitest";
import { createHold, HOLD_DURATIONS, type Clock } from "./hold";

/**
 * A deterministic stand-in for requestAnimationFrame + a wall clock. Time only
 * moves when the test says so; `advance` fires the single pending frame at the
 * new time, and because the controller re-arms inside that frame, stepping is
 * just repeated `advance` calls.
 */
class FakeClock implements Clock {
  private t = 0;
  private frame: (() => void) | null = null;

  now(): number {
    return this.t;
  }

  requestFrame(tick: () => void): () => void {
    this.frame = tick;
    return () => {
      if (this.frame === tick) this.frame = null;
    };
  }

  /** Move time forward by `ms` and run the frame that was waiting, if any. */
  advance(ms: number): void {
    this.t += ms;
    const pending = this.frame;
    this.frame = null;
    pending?.();
  }

  get hasPendingFrame(): boolean {
    return this.frame !== null;
  }
}

describe("createHold", () => {
  it("advances progress 0 → 1 over the configured duration", () => {
    const clock = new FakeClock();
    const seen: number[] = [];
    const hold = createHold({
      clock,
      duration: 1000,
      onProgress: (p) => seen.push(p),
    });

    hold.begin();
    expect(hold.progress).toBe(0);

    clock.advance(250);
    expect(hold.progress).toBeCloseTo(0.25);

    clock.advance(250);
    expect(hold.progress).toBeCloseTo(0.5);

    clock.advance(500);
    expect(hold.progress).toBe(1);

    // Monotonic, bounded, and it actually moved.
    expect(seen[0]).toBe(0);
    expect(seen.at(-1)).toBe(1);
    for (let i = 1; i < seen.length; i++) {
      expect(seen[i]).toBeGreaterThanOrEqual(seen[i - 1]);
      expect(seen[i]).toBeLessThanOrEqual(1);
    }
  });

  it("fires onComplete exactly once, at completion", () => {
    const clock = new FakeClock();
    let completions = 0;
    const hold = createHold({
      clock,
      duration: 1000,
      onComplete: () => completions++,
    });

    hold.begin();
    clock.advance(500);
    expect(completions).toBe(0);

    clock.advance(500);
    expect(completions).toBe(1);

    // No frame is left pending, and further time changes nothing.
    expect(clock.hasPendingFrame).toBe(false);
    clock.advance(1000);
    expect(completions).toBe(1);
  });

  it("cancel before completion prevents onComplete and resets progress", () => {
    const clock = new FakeClock();
    let completions = 0;
    const hold = createHold({
      clock,
      duration: 1000,
      onComplete: () => completions++,
    });

    hold.begin();
    clock.advance(600);
    expect(hold.progress).toBeCloseTo(0.6);

    hold.cancel();
    expect(hold.progress).toBe(0);
    expect(hold.holding).toBe(false);

    // Time keeps moving; the abandoned hold never completes.
    clock.advance(1000);
    expect(completions).toBe(0);
    expect(hold.progress).toBe(0);
  });

  it("reset behaves like cancel — no completion, progress back to 0", () => {
    const clock = new FakeClock();
    let completions = 0;
    const hold = createHold({
      clock,
      duration: 1000,
      onComplete: () => completions++,
    });

    hold.begin();
    clock.advance(999);
    hold.reset();

    clock.advance(1000);
    expect(completions).toBe(0);
    expect(hold.progress).toBe(0);
  });

  it("can complete again after a reset", () => {
    const clock = new FakeClock();
    let completions = 0;
    const hold = createHold({
      clock,
      duration: 1000,
      onComplete: () => completions++,
    });

    hold.begin();
    clock.advance(400);
    hold.reset();

    hold.begin();
    clock.advance(1000);
    expect(completions).toBe(1);
  });

  it("a locked controller never completes, no matter how long the hold runs", () => {
    const clock = new FakeClock();
    let completions = 0;
    const hold = createHold({
      clock,
      duration: 1000,
      locked: true,
      onComplete: () => completions++,
    });

    hold.begin();
    expect(hold.progress).toBe(0);
    expect(clock.hasPendingFrame).toBe(false);

    // Even an absurd hold never trips the gate.
    clock.advance(100_000);
    expect(completions).toBe(0);
    expect(hold.progress).toBe(0);
  });

  it("honours a per-hold duration override (pointer vs keyboard)", () => {
    const clock = new FakeClock();
    let completions = 0;
    const hold = createHold({
      clock,
      duration: HOLD_DURATIONS.pointer,
      onComplete: () => completions++,
    });

    // Keyboard hold: shorter override completes before the pointer duration.
    hold.begin(HOLD_DURATIONS.keyboard);
    clock.advance(HOLD_DURATIONS.keyboard - 1);
    expect(completions).toBe(0);
    clock.advance(1);
    expect(completions).toBe(1);
  });

  it("completes the reduced-motion short duration", () => {
    const clock = new FakeClock();
    let completions = 0;
    const hold = createHold({
      clock,
      duration: HOLD_DURATIONS.reduced,
      onComplete: () => completions++,
    });

    hold.begin();
    clock.advance(HOLD_DURATIONS.reduced);
    expect(hold.progress).toBe(1);
    expect(completions).toBe(1);
  });

  it("exposes the prototype's pointer/keyboard/reduced durations", () => {
    expect(HOLD_DURATIONS.pointer).toBe(1150);
    expect(HOLD_DURATIONS.keyboard).toBe(560);
    expect(HOLD_DURATIONS.reduced).toBe(60);
  });
});
