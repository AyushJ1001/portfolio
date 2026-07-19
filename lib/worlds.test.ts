import { describe, expect, it } from "vitest";
import {
  worlds,
  enterableWorlds,
  isEnterable,
  realityLabel,
  type Reality,
  type World,
} from "./worlds";

describe("world registry", () => {
  it("declares the four worlds in fixed array order", () => {
    expect(worlds.map((w) => w.id)).toEqual([
      "engineering",
      "freelance",
      "music",
      "more",
    ]);
  });

  it("enterable worlds are exactly the live/seed ones", () => {
    const expected = worlds
      .filter((w) => w.reality === "live" || w.reality === "seed")
      .map((w) => w.id);
    expect(enterableWorlds.map((w) => w.id)).toEqual(expected);
  });

  it("future/deferred worlds are present but never enterable", () => {
    const gated = worlds.filter(
      (w) => w.reality === "future" || w.reality === "deferred",
    );
    // The empty berth is declared...
    expect(gated.length).toBeGreaterThan(0);
    // ...but never navigable.
    for (const w of gated) {
      expect(isEnterable(w.reality)).toBe(false);
      expect(enterableWorlds).not.toContain(w);
    }
  });

  it("only live and seed realities are enterable", () => {
    const realities: Reality[] = ["live", "seed", "future", "deferred"];
    for (const reality of realities) {
      const enterable = reality === "live" || reality === "seed";
      expect(isEnterable(reality)).toBe(enterable);
    }
  });

  it("maps each reality to its visitor label", () => {
    expect(realityLabel("live")).toBe("OPEN");
    expect(realityLabel("seed")).toBe("JUST SEEDED");
    expect(realityLabel("future")).toBe("NOT YET");
    expect(realityLabel("deferred")).toBe("NOT YET");
  });

  it("gives every world a unique, well-formed path", () => {
    const paths = worlds.map((w) => w.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const path of paths) {
      expect(path).toMatch(/^\/[a-z0-9-/]*$/);
    }
  });

  it("stays plain serializable data — no enter() and no seo/narrator field", () => {
    for (const world of worlds) {
      const keys = Object.keys(world);
      expect(keys).not.toContain("enter");
      expect(keys).not.toContain("seo");
      expect(keys).not.toContain("narrator");
      for (const value of Object.values(world)) {
        expect(typeof value).not.toBe("function");
      }
    }
    // Survives a JSON round-trip unchanged.
    expect(JSON.parse(JSON.stringify(worlds))).toEqual(worlds);
  });

  it("ships engineering and freelance live, music seeded, more gated", () => {
    const byId = Object.fromEntries(worlds.map((w) => [w.id, w])) as Record<
      World["id"],
      World
    >;
    expect(byId.engineering.reality).toBe("live");
    expect(byId.freelance.reality).toBe("live");
    expect(byId.music.reality).toBe("seed");
    expect(isEnterable(byId.more.reality)).toBe(false);
  });
});
