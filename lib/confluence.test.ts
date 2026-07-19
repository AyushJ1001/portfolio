import { describe, expect, it } from "vitest";
import {
  CONFLUENCE_CENTER,
  confluenceCurrents,
  holdDurationFor,
} from "./confluence";
import { HOLD_DURATIONS } from "./hold";
import { isEnterable, realityLabel, worlds } from "./worlds";

describe("confluenceCurrents", () => {
  const currents = confluenceCurrents();

  it("derives one current per registry world, in registry order", () => {
    expect(currents.map((c) => c.id)).toEqual(worlds.map((w) => w.id));
  });

  it("carries the registry title, path, and reality unchanged", () => {
    currents.forEach((c, i) => {
      expect(c.title).toBe(worlds[i].title);
      expect(c.path).toBe(worlds[i].path);
      expect(c.reality).toBe(worlds[i].reality);
    });
  });

  it("shows the visitor-facing reality chip for each world", () => {
    currents.forEach((c) => {
      expect(c.chip).toBe(realityLabel(c.reality));
    });
    // The three visitor labels the ticket names, mapped from the registry.
    expect(currents.map((c) => c.chip)).toContain("OPEN");
    expect(currents.map((c) => c.chip)).toContain("JUST SEEDED");
    expect(currents.map((c) => c.chip)).toContain("NOT YET");
  });

  it("gates enterability on the reality tag (empty-berth gate)", () => {
    currents.forEach((c) => {
      expect(c.enterable).toBe(isEnterable(c.reality));
      expect(c.locked).toBe(!isEnterable(c.reality));
    });
  });

  it("always has a non-empty lure, even for the locked berth", () => {
    currents.forEach((c) => {
      expect(c.lure.length).toBeGreaterThan(0);
    });
  });

  it("builds an aria-label conveying name + enterable/locked state", () => {
    const eng = currents.find((c) => c.id === "engineering")!;
    expect(eng.ariaLabel).toContain("Engineering");
    expect(eng.ariaLabel.toLowerCase()).toContain("enter");

    const more = currents.find((c) => c.id === "more")!;
    expect(more.ariaLabel).toContain("More");
    expect(more.ariaLabel.toLowerCase()).toContain("not open yet");
  });

  it("gives each current a hue custom property and a placed slot", () => {
    currents.forEach((c) => {
      expect(c.hueVar).toMatch(/^--/);
      expect(c.slot.x).toBeGreaterThanOrEqual(0);
      expect(c.slot.x).toBeLessThanOrEqual(100);
      expect(c.slot.y).toBeGreaterThanOrEqual(0);
      expect(c.slot.y).toBeLessThanOrEqual(100);
    });
  });

  it("exposes the source position all currents flow toward", () => {
    expect(CONFLUENCE_CENTER.x).toBeGreaterThan(0);
    expect(CONFLUENCE_CENTER.y).toBeGreaterThan(0);
  });
});

describe("holdDurationFor", () => {
  it("uses the pointer duration for a pointer hold", () => {
    expect(holdDurationFor("pointer", false)).toBe(HOLD_DURATIONS.pointer);
  });

  it("uses the shorter keyboard duration for a key hold", () => {
    expect(holdDurationFor("keyboard", false)).toBe(HOLD_DURATIONS.keyboard);
  });

  it("collapses to the near-instant reduced duration regardless of modality", () => {
    expect(holdDurationFor("pointer", true)).toBe(HOLD_DURATIONS.reduced);
    expect(holdDurationFor("keyboard", true)).toBe(HOLD_DURATIONS.reduced);
  });
});
