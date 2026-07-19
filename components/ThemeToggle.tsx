"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  THEME_ATTR,
  THEME_STORAGE_KEY,
  nextTheme,
  resolveTheme,
  type Theme,
} from "@/lib/theme";

/**
 * Manual light/dark toggle. The OS `prefers-color-scheme` is the default; a
 * click pins the opposite theme for the session via `:root[data-theme]` and
 * persists the choice so it survives navigation (see the no-flash init in the
 * root layout). Renders nothing until mounted so SSR and the OS default agree.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const override = document.documentElement.getAttribute(THEME_ATTR);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(resolveTheme(override, prefersDark));
  }, []);

  const toggle = () => {
    setTheme((current) => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const active = current ?? resolveTheme(null, prefersDark);
      const next = nextTheme(active);
      document.documentElement.setAttribute(THEME_ATTR, next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // ignore storage failures (private mode, etc.)
      }
      return next;
    });
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="fixed bottom-4 right-4 z-[60] grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/80 text-[var(--text-muted)] backdrop-blur transition-colors duration-300 hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] focus-visible:text-[var(--text-primary)]"
    >
      {theme === null ? (
        <span className="block h-[18px] w-[18px]" aria-hidden />
      ) : isDark ? (
        <Sun className="h-[18px] w-[18px]" aria-hidden />
      ) : (
        <Moon className="h-[18px] w-[18px]" aria-hidden />
      )}
    </button>
  );
}
