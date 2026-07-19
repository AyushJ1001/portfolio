import { describe, expect, it } from "vitest";
import { nextTheme, resolveTheme, THEME_STORAGE_KEY } from "./theme";

describe("resolveTheme", () => {
  it("honours an explicit dark override regardless of OS preference", () => {
    expect(resolveTheme("dark", false)).toBe("dark");
  });

  it("honours an explicit light override regardless of OS preference", () => {
    expect(resolveTheme("light", true)).toBe("light");
  });

  it("falls back to the OS preference when there is no override", () => {
    expect(resolveTheme(null, true)).toBe("dark");
    expect(resolveTheme(null, false)).toBe("light");
  });

  it("ignores a garbage override and uses the OS preference", () => {
    expect(resolveTheme("sideways", true)).toBe("dark");
  });
});

describe("nextTheme", () => {
  it("flips dark to light and light to dark", () => {
    expect(nextTheme("dark")).toBe("light");
    expect(nextTheme("light")).toBe("dark");
  });
});

describe("THEME_STORAGE_KEY", () => {
  it("is a stable key so the choice survives the session", () => {
    expect(THEME_STORAGE_KEY).toBe("theme");
  });
});
