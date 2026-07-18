"use client";

// PROTOTYPE — throwaway floating variant switcher for the journey prototype (#16).
// Hidden in production builds so a stray merge can't ship it.

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const VARIANTS = [
  { key: "A", name: "The Current — scroll-descent" },
  { key: "B", name: "The Confluence — hold-to-commit" },
  { key: "C", name: "The Threshold — the origin asks" },
];

export function PrototypeSwitcher({ current }: { current: string }) {
  const router = useRouter();

  const go = useCallback(
    (dir: 1 | -1) => {
      const i = VARIANTS.findIndex((v) => v.key === current);
      const next = VARIANTS[(i + dir + VARIANTS.length) % VARIANTS.length];
      router.replace(`?variant=${next.key}`);
    },
    [current, router]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el as HTMLElement | null)?.isContentEditable
      )
        return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (process.env.NODE_ENV === "production") return null;

  const active = VARIANTS.find((v) => v.key === current) ?? VARIANTS[0];

  return (
    <div className="fixed bottom-5 left-1/2 z-[200] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/80 px-1.5 py-1.5 text-sm text-white shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <button
          onClick={() => go(-1)}
          aria-label="Previous variant"
          className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="min-w-[15rem] select-none px-2 text-center">
          <span className="font-semibold text-[var(--accent-light)]">
            {active.key}
          </span>
          <span className="mx-2 text-white/25">·</span>
          <span className="text-white/80">{active.name}</span>
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next variant"
          className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <p className="mt-1.5 text-center text-[10px] uppercase tracking-[0.2em] text-white/25">
        prototype · ← → to switch
      </p>
    </div>
  );
}
