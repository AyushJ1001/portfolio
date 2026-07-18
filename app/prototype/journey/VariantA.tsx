"use client";

// PROTOTYPE — Variant A: "The Current" (scroll-descent).
// Thesis: scrolling IS the walking. There is no menu and no express lane — the
// only way down is through, so the scroll distance itself is the friction filter.
// The current forks late; the world you're steered toward is the one you slow
// down beside. Honest about destination (names are visible), mysterious about
// form (you never see the whole map at once).

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ORIGIN, WORLDS, TAG_LABEL } from "./worlds";

export default function VariantA() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  // The river: a single path drawn as you descend, then forking near the end.
  const draw = useTransform(smooth, [0, 0.85], [0, 1]);
  const forkOpacity = useTransform(smooth, [0.55, 0.8], [0, 1]);
  const hint = useTransform(smooth, [0, 0.06], [1, 0]);

  return (
    <div ref={ref} className="relative bg-[var(--bg-primary)]">
      {/* the current, fixed behind everything */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMin slice"
          aria-hidden
        >
          <motion.path
            d="M50 0 C 50 22, 46 34, 48 46 S 52 66, 50 74"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.4"
            strokeLinecap="round"
            style={{ pathLength: reduce ? 1 : draw, opacity: 0.55 }}
          />
          {/* the fork — appears only near the bottom */}
          <motion.g style={{ opacity: reduce ? 1 : forkOpacity }}>
            <path
              d="M50 74 C 40 82, 22 84, 12 92"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.25"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M50 74 C 47 84, 40 88, 37 95"
              fill="none"
              stroke="#4fb0c6"
              strokeWidth="0.25"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M50 74 C 53 84, 60 88, 63 95"
              fill="none"
              stroke="#b98cd6"
              strokeWidth="0.25"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M50 74 C 60 82, 78 84, 88 92"
              fill="none"
              stroke="#6b6b74"
              strokeWidth="0.25"
              strokeLinecap="round"
              opacity="0.3"
            />
          </motion.g>
        </svg>
      </div>

      {/* scroll hint */}
      <motion.div
        style={{ opacity: reduce ? 0 : hint }}
        className="pointer-events-none fixed bottom-24 left-1/2 z-10 -translate-x-1/2 text-center text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]"
      >
        keep going ↓
      </motion.div>

      {/* ── Origin ── */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
          {ORIGIN.name}
        </p>
        <div className="max-w-xl space-y-3">
          {ORIGIN.provocations.map((line, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.5, duration: 0.9 }}
              className="font-display text-3xl font-medium leading-tight text-[var(--text-primary)] sm:text-4xl"
            >
              {line}
            </motion.h1>
          ))}
        </div>
      </section>

      {/* ── The descent: one world per screen. You must pass all of them. ── */}
      {WORLDS.map((w, i) => (
        <WorldStop key={w.key} index={i} world={w} />
      ))}

      {/* ── The confluence, restated: no door but the walk back up ── */}
      <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
          Four currents, one source. There is no map and no shortcut — only the
          walk. To change your mind is to climb back to the top and choose the
          slowing-down again.
        </p>
      </section>
    </div>
  );
}

function WorldStop({
  world,
  index,
}: {
  world: (typeof WORLDS)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Reads how long you linger: fully lit only near the middle of its screen.
  const lit = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.25, 1, 0.25]);
  const rise = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <section
      ref={ref}
      className="relative z-10 flex min-h-screen items-center px-6"
    >
      <motion.div
        style={{ opacity: reduce ? 1 : lit, y: reduce ? 0 : rise }}
        className="mx-auto w-full max-w-lg"
      >
        <div className="mb-4 flex items-center gap-3">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: world.hue }}
          />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            current {index + 1} · {TAG_LABEL[world.tag]}
          </span>
        </div>
        <h2
          className="font-display text-5xl font-semibold tracking-tight sm:text-6xl"
          style={{ color: world.hue }}
        >
          {world.name}
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--text-secondary)]">
          {world.whisper}
        </p>
        <p className="mt-6 text-sm text-[var(--text-muted)]">{world.intent}</p>
        {world.tag !== "future" ? (
          <button className="group mt-8 inline-flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <span className="link-hover">follow this current</span>
            <span
              className="transition-transform group-hover:translate-x-1"
              style={{ color: world.hue }}
            >
              →
            </span>
          </button>
        ) : (
          <p className="mt-8 text-sm italic text-[var(--text-muted)]">
            {world.arrival}
          </p>
        )}
      </motion.div>
    </section>
  );
}
