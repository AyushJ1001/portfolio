"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  CONFLUENCE_CENTER,
  confluenceCurrents,
  holdDurationFor,
  type Current,
} from "@/lib/confluence";
import { HOLD_DURATIONS, createHold, type Clock, type HoldController } from "@/lib/hold";
import styles from "./Confluence.module.css";

/** Progress-ring geometry — a circle of radius `R`, its full circumference. */
const RING_R = 32;
const RING_LEN = 2 * Math.PI * RING_R;

/** A requestAnimationFrame-backed clock — the browser wiring the pure hold lacks. */
const rafClock: Clock = {
  now: () => performance.now(),
  requestFrame: (tick) => {
    const id = requestAnimationFrame(() => tick());
    return () => cancelAnimationFrame(id);
  },
};

/**
 * The Confluence — the hub's single origin and only door.
 *
 * An origin portrait sits at the source; four currents flow inward from the
 * corners with marching-ants river-flow. Each current is a real `button` that
 * commits on a *hold* (not a click): pointer-down or Enter/Space begins a fill
 * that, on completion, navigates to the world's route. Releasing early cancels
 * and resets. The locked "…and more" berth renders its current but never fills
 * and never navigates. The timing lives in the pure {@link createHold}
 * controller; this component supplies its clock, the DOM, and the event wiring.
 */
export function Confluence() {
  const currents = useMemo(() => confluenceCurrents(), []);
  const router = useRouter();

  /** Which current is hovered/focused — dims its siblings and lifts it forward. */
  const [activeId, setActiveId] = useState<Current["id"] | null>(null);

  const progRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const holdsRef = useRef<Record<string, HoldController>>({});
  const reducedRef = useRef(false);
  const keyHeldRef = useRef<Record<string, boolean>>({});

  // Build one hold controller per current, bound to the rAF clock. Completing a
  // hold navigates; a locked controller renders 0 and never completes. Runs once
  // (currents/router are stable) so a hover-driven re-render never resets a hold.
  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const holds: Record<string, HoldController> = {};
    for (const current of currents) {
      holds[current.id] = createHold({
        clock: rafClock,
        duration: HOLD_DURATIONS.pointer,
        locked: current.locked,
        onProgress: (p) => {
          progRefs.current[current.id]?.setAttribute(
            "stroke-dashoffset",
            String(RING_LEN * (1 - p)),
          );
        },
        onComplete: () => router.push(current.path),
      });
    }
    holdsRef.current = holds;
    return () => {
      for (const hold of Object.values(holds)) hold.reset();
    };
  }, [currents, router]);

  const begin = useCallback(
    (id: Current["id"], modality: "pointer" | "keyboard") => {
      holdsRef.current[id]?.begin(
        holdDurationFor(modality, reducedRef.current),
      );
    },
    [],
  );

  const reset = useCallback((id: Current["id"]) => {
    holdsRef.current[id]?.reset();
  }, []);

  return (
    <main className={styles.confluence}>
      <div className={styles.room} aria-hidden>
        <div className={styles.floor} />
        <div className={`${styles.bloom} ${styles.b3}`} />
        <div className={`${styles.bloom} ${styles.b2}`} />
        <div className={`${styles.bloom} ${styles.b1}`} />
      </div>

      <svg
        className={styles.streams}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          {currents.map((c) => (
            <linearGradient
              key={c.id}
              id={`cf-grad-${c.id}`}
              gradientUnits="userSpaceOnUse"
              x1={c.slot.x}
              y1={c.slot.y}
              x2={CONFLUENCE_CENTER.x}
              y2={CONFLUENCE_CENTER.y}
            >
              <stop
                offset="0%"
                stopColor={`var(${c.hueVar})`}
                stopOpacity={c.locked ? 0.3 : 0.55}
              />
              <stop
                offset="100%"
                stopColor="var(--ink)"
                stopOpacity={c.locked ? 0.45 : 0.9}
              />
            </linearGradient>
          ))}
        </defs>
        {currents.map((c) => (
          <line
            key={`bed-${c.id}`}
            className={styles.bed}
            x1={c.slot.x}
            y1={c.slot.y}
            x2={CONFLUENCE_CENTER.x}
            y2={CONFLUENCE_CENTER.y}
          />
        ))}
        {currents.map((c, i) => (
          <line
            key={`flow-${c.id}`}
            className={`${styles.stream} ${activeId === c.id ? styles.lit : ""}`}
            stroke={`url(#cf-grad-${c.id})`}
            style={{ animationDelay: `${-i * 0.5}s` }}
            x1={c.slot.x}
            y1={c.slot.y}
            x2={CONFLUENCE_CENTER.x}
            y2={CONFLUENCE_CENTER.y}
          />
        ))}
      </svg>

      <div className={styles.origin}>
        <div className={styles.disc}>
          <Image
            src="/photo.png"
            alt=""
            fill
            sizes="132px"
            className={styles.portraitImg}
            priority
          />
        </div>
        <p className={styles.sub}>four currents run from one source</p>
      </div>

      <p className={styles.intro}>
        The&nbsp;Confluence — <b>hold a current</b> to follow it in
      </p>

      {currents.map((c) => {
        const dim = activeId !== null && activeId !== c.id;
        const isActive = activeId === c.id;
        const nodeClass = [
          styles.node,
          c.locked ? styles.locked : "",
          dim ? styles.dim : "",
          isActive ? styles.active : "",
        ]
          .filter(Boolean)
          .join(" ");

        const onEnter = () => setActiveId(c.id);

        return (
          <button
            key={c.id}
            type="button"
            className={nodeClass}
            style={
              {
                left: `${c.slot.x}%`,
                top: `${c.slot.y}%`,
                "--hue": `var(${c.hueVar})`,
              } as CSSProperties
            }
            aria-label={c.ariaLabel}
            aria-disabled={c.locked || undefined}
            onPointerDown={(e: PointerEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.currentTarget.focus();
              setActiveId(c.id);
              begin(c.id, "pointer");
            }}
            onPointerUp={() => reset(c.id)}
            onPointerEnter={onEnter}
            onPointerLeave={(e: PointerEvent<HTMLButtonElement>) => {
              reset(c.id);
              if (document.activeElement !== e.currentTarget) setActiveId(null);
            }}
            onFocus={onEnter}
            onBlur={() => {
              reset(c.id);
              setActiveId(null);
            }}
            onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              if (c.locked || keyHeldRef.current[c.id]) return;
              keyHeldRef.current[c.id] = true;
              setActiveId(c.id);
              begin(c.id, "keyboard");
            }}
            onKeyUp={(e: KeyboardEvent<HTMLButtonElement>) => {
              if (e.key !== "Enter" && e.key !== " ") return;
              keyHeldRef.current[c.id] = false;
              reset(c.id);
            }}
          >
            <span className={styles.ringwrap}>
              <svg className={styles.ring} viewBox="0 0 76 76">
                <circle
                  cx="38"
                  cy="38"
                  r={RING_R}
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="2"
                />
                <circle
                  ref={(el) => {
                    progRefs.current[c.id] = el;
                  }}
                  cx="38"
                  cy="38"
                  r={RING_R}
                  fill="none"
                  stroke="var(--hue)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={RING_LEN}
                  strokeDashoffset={RING_LEN}
                  opacity={c.locked ? 0.2 : 0.95}
                  transform="rotate(-90 38 38)"
                />
              </svg>
              <span className={styles.core} />
            </span>
            <span className={styles.lbl}>
              <span className={`${styles.name} font-display`}>{c.title}</span>
              <span className={styles.chip}>{c.chip}</span>
              <span className={styles.ws}>{c.lure}</span>
            </span>
          </button>
        );
      })}
    </main>
  );
}
