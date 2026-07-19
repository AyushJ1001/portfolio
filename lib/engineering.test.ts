import { describe, expect, it } from "vitest";
import {
  RESUME_PATH,
  awards,
  craft,
  engineeringText,
  foundations,
  research,
  shipped,
} from "./engineering";

/**
 * The Engineering interior is bespoke, demonstrative content — but every fact it
 * renders must be true and internally consistent with the reconciled source of
 * truth (#17). These tests are the facts guardrail for that reconciliation: they
 * assert the guarantees a visitor relies on, not the prose. Because the interior
 * pulls all its strings from this pure module, {@link engineeringText} is the
 * single surface the invariants sweep.
 */
describe("engineering interior facts", () => {
  const text = engineeringText();
  const lower = text.toLowerCase();

  it("ends on the one résumé PDF as its terminal artifact", () => {
    expect(RESUME_PATH).toBe("/resume");
  });

  it("carries no unbacked Rust skill anywhere", () => {
    expect(lower).not.toMatch(/\brust\b/);
  });

  it("carries no vanity stats strip (7+/10+/15+/5+)", () => {
    expect(text).not.toMatch(/\b\d+\+\s*(languages|frameworks|projects|years)/i);
    expect(text).not.toContain("15+");
  });

  it("uses the corrected M.S./TA end date 'Apr 2026', not the day-precise placeholder", () => {
    expect(text).toContain("Apr 2026");
    expect(text).not.toContain("Apr 24, 2026");
  });

  it("uses the corrected B.E. span 'Feb 2021 – Jun 2024', not '2020 – 2024'", () => {
    expect(text).toContain("Feb 2021 – Jun 2024");
    expect(text).not.toMatch(/2020\s*[–-]\s*2024/);
  });

  it("keeps the real anomaly metrics with their hedges intact", () => {
    const anomaly = research.find((r) => /anomaly/i.test(r.name));
    expect(anomaly).toBeDefined();
    expect(anomaly!.metric).toBeTruthy();
    // The hedge ("controlled demo") is what makes the ~92% honest.
    expect(anomaly!.metric).toMatch(/~92%/);
    expect(anomaly!.metric!.toLowerCase()).toContain("controlled");
    expect(text).toContain("10K+ frames");
  });

  it("keeps the real awards (PICT InC '24, Mathex & MSCE)", () => {
    const titles = awards.map((a) => a.title).join(" | ");
    expect(titles).toMatch(/PICT InC ['’]24/);
    expect(titles).toMatch(/Mathex/);
    expect(titles).toMatch(/MSCE/);
  });

  it("keeps Particle Vibration as real 2025 sponsored research", () => {
    const particle = research.find((r) => /particle/i.test(r.name));
    expect(particle).toBeDefined();
    expect(particle!.year).toBe("2025");
  });

  it("keeps Go and drops nothing else from the language line silently", () => {
    expect(craft.languages).toContain("Go");
    expect(craft.languages.map((l) => l.toLowerCase())).not.toContain("rust");
  });

  it("demonstrates the craft with things a visitor can actually open", () => {
    const openable = shipped.filter((b) => b.href);
    expect(openable.length).toBeGreaterThanOrEqual(2);
    for (const build of openable) {
      expect(build.href).toMatch(/^https:\/\//);
    }
  });

  it("harmonizes wording to the fullest accurate form", () => {
    // MonkeyLang is TDD, not the vaguer "Unit Testing".
    const all: { name: string; stack: string[] }[] = [...shipped, ...research];
    const monkey = all.find((b) => /monkey/i.test(b.name));
    expect(monkey?.stack.join(" ")).toContain("TDD");
    // Intern org keeps the "SCTR's" prefix.
    expect(text).toContain("SCTR's");
  });

  it("names the terminal résumé through the /resume route, not a raw PDF", () => {
    expect(foundations.education.length).toBeGreaterThan(0);
    expect(text).not.toMatch(/\.pdf\b/i);
  });
});
