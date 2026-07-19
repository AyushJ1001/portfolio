export type Theme = "light" | "dark";

/**
 * Attribute on <html> that pins the session theme, overriding the OS default.
 * Kept in sync with localStorage[THEME_STORAGE_KEY] so a manual choice survives
 * navigation without re-reading `prefers-color-scheme`.
 */
export const THEME_ATTR = "data-theme";
export const THEME_STORAGE_KEY = "theme";

/**
 * The active theme. An explicit `data-theme` override always wins; otherwise we
 * fall back to the OS `prefers-color-scheme` preference (the default).
 */
export function resolveTheme(
  override: string | null | undefined,
  prefersDark: boolean,
): Theme {
  if (override === "light" || override === "dark") return override;
  return prefersDark ? "dark" : "light";
}

/** The theme the manual toggle should switch to from the current one. */
export function nextTheme(current: Theme): Theme {
  return current === "dark" ? "light" : "dark";
}
