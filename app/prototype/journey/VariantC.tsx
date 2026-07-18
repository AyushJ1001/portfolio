"use client";

// PROTOTYPE — Variant C: "The Threshold" (the origin asks).
// Thesis: the origin is not a picture, it's a *presence* that feels you out.
// One line at a time, it asks — and your answers narrow you toward a world.
// There are no world names on the choices, only intents; you self-select without
// being told where the door is until you've reached it. The friction is
// patience: the lines arrive slowly, there is no skip, and impatience is just
// the filter doing its job. Honest about destination, mysterious about form.

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ORIGIN, WORLDS, TAG_LABEL } from "./worlds";

type Choice = { label: string; worldKey: string };

type Step = {
  line: string;
  choices: Choice[];
};

// A tiny narrowing tree. Placeholder — the point is the *shape* of the exchange.
const OPENING: Step = {
  line: ORIGIN.ask,
  choices: [
    { label: "I'm weighing whether to trust you with work.", worldKey: "_work" },
    { label: "I brought something I need made.", worldKey: "freelance" },
    { label: "I'm just following the sound.", worldKey: "music" },
    { label: "I don't know yet. I'm wandering.", worldKey: "_wander" },
  ],
};

const BRANCHES: Record<string, Step> = {
  _work: {
    line: "Trust is earned in the specifics. What are you actually staffing?",
    choices: [
      { label: "A team. I want to employ the person.", worldKey: "engineering" },
      { label: "A one-off. I want it built, then I'm gone.", worldKey: "freelance" },
    ],
  },
  _wander: {
    line: "Wandering is allowed. But everything here points somewhere. Lean one way.",
    choices: [
      { label: "Toward the work he's paid to do.", worldKey: "engineering" },
      { label: "Toward the things he does for their own sake.", worldKey: "music" },
      { label: "Toward whatever isn't finished.", worldKey: "more" },
    ],
  },
};

export default function VariantC() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState<Step>(OPENING);
  const [trail, setTrail] = useState<string[]>([]);
  const [arrived, setArrived] = useState<string | null>(null);
  const [lineShown, setLineShown] = useState(false);

  // The deliberate pause before the line resolves — patience as friction.
  useEffect(() => {
    setLineShown(false);
    const t = setTimeout(() => setLineShown(true), reduce ? 0 : 900);
    return () => clearTimeout(t);
  }, [step, reduce]);

  const pick = (c: Choice) => {
    setTrail((t) => [...t, c.label]);
    if (c.worldKey.startsWith("_")) {
      setStep(BRANCHES[c.worldKey]);
    } else {
      setArrived(c.worldKey);
    }
  };

  const world = WORLDS.find((w) => w.key === arrived) ?? null;

  const reset = () => {
    setArrived(null);
    setTrail([]);
    setStep(OPENING);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-6">
      {/* breathing ambient field */}
      <motion.div
        aria-hidden
        animate={reduce ? {} : { opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,73,0.08), transparent 70%)",
        }}
      />

      {/* the trail so far — a faint memory of how you narrowed */}
      {trail.length > 0 && !world && (
        <div className="pointer-events-none absolute left-6 top-6 max-w-[16rem] space-y-1">
          {trail.map((t, i) => (
            <p key={i} className="text-[11px] leading-snug text-[var(--text-muted)]">
              — {t}
            </p>
          ))}
        </div>
      )}

      <div className="relative z-10 w-full max-w-xl text-center">
        <AnimatePresence mode="wait">
          {!world ? (
            <motion.div
              key={step.line}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.4em] text-[var(--accent)]">
                {ORIGIN.name}
              </p>
              <h1 className="font-display text-3xl font-medium leading-snug text-[var(--text-primary)] sm:text-4xl">
                {step.line}
              </h1>

              {/* choices arrive only after the line has settled */}
              <div className="mt-10 flex flex-col items-stretch gap-3">
                <AnimatePresence>
                  {lineShown &&
                    step.choices.map((c, i) => (
                      <motion.button
                        key={c.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.35, duration: 0.5 }}
                        onClick={() => pick(c)}
                        className="group rounded-xl border border-[var(--border)] bg-white/[0.02] px-5 py-4 text-left text-[var(--text-secondary)] transition-all hover:border-[var(--accent)]/30 hover:bg-white/[0.04] hover:text-[var(--text-primary)]"
                      >
                        <span className="mr-2 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
                          →
                        </span>
                        {c.label}
                      </motion.button>
                    ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="arrived"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                the questions led you to
              </p>
              <h1
                className="mt-3 font-display text-6xl font-semibold"
                style={{ color: world.hue }}
              >
                {world.name}
              </h1>
              <p className="mx-auto mt-5 max-w-sm text-[var(--text-secondary)]">
                {world.arrival}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {TAG_LABEL[world.tag]}
              </p>
              <button
                onClick={reset}
                className="mt-10 text-sm text-[var(--text-muted)] underline-offset-4 hover:text-[var(--text-primary)] hover:underline"
              >
                ← be asked again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
