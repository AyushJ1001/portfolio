"use client";

// PROTOTYPE — Variant B: "The Confluence" (hold-to-commit).
// Thesis: the origin is a single pulsing point. The currents drift around it,
// unlabeled at rest — you have to move toward one to learn what it is. Choosing
// is not a click; it is a *hold*. You press and keep pressing while a ring
// fills — that deliberate second is the friction, the thing that filters. Let go
// early and you fall back to the confluence. Committing pulls you into a world,
// and the only way to another is to return here and walk again.

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ORIGIN, WORLDS, TAG_LABEL } from "./worlds";

const HOLD_MS = 1100; // the cost of committing

// Fixed drift positions around the origin (percent of viewport).
const SLOTS = [
  { x: 26, y: 30 },
  { x: 74, y: 34 },
  { x: 32, y: 72 },
  { x: 70, y: 70 },
];

export default function VariantB() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const [entered, setEntered] = useState<string | null>(null);

  const world = WORLDS.find((w) => w.key === entered) ?? null;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[var(--bg-primary)]">
      {/* ambient glow at the source */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,73,0.10), transparent 70%)",
        }}
      />

      {/* ── The origin (the source, dead centre) ── */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div
          animate={reduce ? {} : { scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-[var(--accent)]/40"
          style={{ boxShadow: "0 0 60px rgba(232,168,73,0.25)" }}
        >
          <span className="font-display text-lg text-[var(--accent-light)]">
            {ORIGIN.name}
          </span>
        </motion.div>
        <p className="mt-6 max-w-xs text-xs leading-relaxed tracking-wide text-[var(--text-muted)]">
          {hovered
            ? "hold to follow it in"
            : "one source. four currents. move toward one."}
        </p>
      </div>

      {/* connective threads */}
      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden>
        {SLOTS.map((s, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={`${s.x}%`}
            y2={`${s.y}%`}
            stroke={hovered === WORLDS[i].key ? WORLDS[i].hue : "rgba(255,255,255,0.06)"}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* ── The currents ── */}
      {WORLDS.map((w, i) => (
        <Current
          key={w.key}
          world={w}
          slot={SLOTS[i]}
          dimmed={hovered !== null && hovered !== w.key}
          onHover={(on) => setHovered(on ? w.key : null)}
          onCommit={() => w.tag !== "future" && setEntered(w.key)}
          reduce={!!reduce}
        />
      ))}

      {/* ── Arrival takeover ── */}
      <AnimatePresence>
        {world && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
            style={{
              background: `radial-gradient(circle at 50% 40%, ${world.hue}22, var(--bg-primary) 70%)`,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                you followed the current to
              </p>
              <h2
                className="mt-3 font-display text-6xl font-semibold"
                style={{ color: world.hue }}
              >
                {world.name}
              </h2>
              <p className="mx-auto mt-5 max-w-sm text-[var(--text-secondary)]">
                {world.arrival}
              </p>
              <button
                onClick={() => setEntered(null)}
                className="mt-10 text-sm text-[var(--text-muted)] underline-offset-4 hover:text-[var(--text-primary)] hover:underline"
              >
                ← return to the confluence (and walk again)
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Current({
  world,
  slot,
  dimmed,
  onHover,
  onCommit,
  reduce,
}: {
  world: (typeof WORLDS)[number];
  slot: { x: number; y: number };
  dimmed: boolean;
  onHover: (on: boolean) => void;
  onCommit: () => void;
  reduce: boolean;
}) {
  const [progress, setProgress] = useState(0); // 0..1
  const raf = useRef<number | null>(null);
  const start = useRef<number | null>(null);
  const locked = world.tag === "future";

  const stop = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
    start.current = null;
    setProgress(0);
  };

  const begin = () => {
    if (locked) return;
    const tick = (t: number) => {
      if (start.current === null) start.current = t;
      const p = Math.min((t - start.current) / HOLD_MS, 1);
      setProgress(p);
      if (p >= 1) {
        stop();
        onCommit();
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => stop(), []);

  const ringLen = 2 * Math.PI * 30;

  return (
    <motion.div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 select-none"
      style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
      animate={{ opacity: dimmed ? 0.3 : 1 }}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      <motion.div
        animate={
          reduce ? {} : { y: [0, world.key.length % 2 ? -10 : 10, 0] }
        }
        transition={{
          duration: 6 + (world.key.length % 3),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`group relative flex flex-col items-center ${
          locked ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onPointerDown={begin}
        onPointerUp={stop}
        onPointerLeave={stop}
      >
        {/* hold ring */}
        <svg width="72" height="72" className="rotate-[-90deg]">
          <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <circle
            cx="36"
            cy="36"
            r="30"
            fill="none"
            stroke={world.hue}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={ringLen}
            strokeDashoffset={ringLen * (1 - progress)}
            opacity={locked ? 0.15 : 0.9}
          />
        </svg>
        <span
          className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full"
          style={{ background: world.hue, boxShadow: `0 0 16px ${world.hue}` }}
        />
        {/* label — hidden at rest, revealed on approach */}
        <div className="pointer-events-none mt-2 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="font-display text-lg" style={{ color: world.hue }}>
            {world.name}
          </p>
          <p className="max-w-[11rem] text-[11px] leading-snug text-[var(--text-secondary)]">
            {world.whisper}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {locked ? "not yet" : `hold · ${TAG_LABEL[world.tag]}`}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
