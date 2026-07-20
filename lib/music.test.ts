import { describe, expect, it } from "vitest";
import { followTheBecoming, musicInterior, musicWorld } from "./music";
import { realityLabel, worlds } from "./worlds";

describe("music interior", () => {
  const interior = musicInterior();

  it("resolves the music world straight from the registry", () => {
    const fromRegistry = worlds.find((w) => w.id === "music");
    expect(musicWorld()).toEqual(fromRegistry);
    expect(interior.title).toBe(fromRegistry!.title);
    expect(interior.path).toBe(fromRegistry!.path);
  });

  it("shows the reality chip derived from the registry — never upgraded", () => {
    const music = musicWorld();
    // The tag tracks truth: it is derived, not a hardcoded prettier label.
    expect(interior.chip).toBe(realityLabel(music.reality));
    expect(interior.chip).toBe("JUST SEEDED");
    // Guards against silently promoting the world to look more complete.
    expect(interior.chip).not.toBe(realityLabel("live"));
    expect(music.reality).toBe("seed");
    expect(interior.seeded).toBe(true);
  });

  it("presents itself honestly as just-seeded and thin", () => {
    expect(interior.honest.length).toBeGreaterThan(0);
    for (const line of interior.honest) {
      expect(line.trim().length).toBeGreaterThan(0);
    }
    const prose = interior.honest.join(" ").toLowerCase();
    // Honest thinness — not dressed up as a full world.
    expect(prose).toMatch(/seed|new|becom|thin|begin|start/);
  });

  it("offers a follow-the-becoming link to a real destination", () => {
    expect(interior.follow).toEqual(followTheBecoming);
    expect(interior.follow.href).toMatch(/^https?:\/\//);
    expect(interior.follow.label.trim().length).toBeGreaterThan(0);
  });

  it("carries no résumé artifact anywhere in the interior", () => {
    const haystack = collectStrings(interior).join(" ").toLowerCase();
    expect(haystack).not.toContain("resume");
    expect(haystack).not.toContain("résumé");
    expect(haystack).not.toContain("/resume");
  });

  it("offers a way back to the confluence — the only door", () => {
    expect(interior.backHref).toBe("/");
  });
});

/** Every string reachable in a plain object/array tree, for content scans. */
function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectStrings);
  }
  return [];
}
