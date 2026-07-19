import { describe, expect, it } from "vitest";
import { shipped } from "./engineering";
import {
  EMAIL,
  cta,
  fit,
  fiverr,
  freelanceInterior,
  freelanceText,
  freelanceWorld,
  proof,
  tiers,
  trust,
} from "./freelance";
import { realityLabel, worlds } from "./worlds";

/**
 * The Freelance interior is demonstrative content, but the promises it makes to
 * a paying client must be true and honest. These tests are the guardrail for the
 * #21 acceptance criteria: client-outcome lens, web-only fit, reused proof,
 * transparent pricing, email-primary CTA, and the explicit no-vanity-no-fake
 * rule. {@link freelanceText} is the single surface the invariants sweep.
 */
describe("freelance interior", () => {
  const interior = freelanceInterior();
  const text = freelanceText();
  const lower = text.toLowerCase();

  it("resolves the freelance world from the registry with a truth-tracking chip", () => {
    const fromRegistry = worlds.find((w) => w.id === "freelance");
    expect(freelanceWorld()).toEqual(fromRegistry);
    expect(interior.title).toBe(fromRegistry!.title);
    expect(interior.path).toBe("/freelance");
    // The chip is derived, not a hardcoded label — it tracks the registry.
    expect(interior.chip).toBe(realityLabel(fromRegistry!.reality));
    expect(interior.chip).toBe("OPEN");
  });

  it("moves through promise · proof · offer · trust · CTA", () => {
    expect(interior.promise.headline.trim().length).toBeGreaterThan(0);
    expect(interior.proof.length).toBeGreaterThanOrEqual(2);
    expect(interior.tiers.length).toBe(3);
    expect(interior.trust).toBe(trust);
    expect(interior.trust.points.length).toBeGreaterThan(0);
    expect(interior.cta.label.trim().length).toBeGreaterThan(0);
  });

  it("frames the offer as a focused full-stack web-app builder, not a generalist", () => {
    for (const tech of ["Next.js", "TypeScript", "React", "PostgreSQL", "Vercel"]) {
      expect(fit.building).toContain(tech);
    }
    // Honest scope: it must NOT pitch the web+ML+IoT generalist surface here.
    expect(lower).not.toMatch(/\btensorflow\b/);
    expect(lower).not.toMatch(/\barduino\b/);
    expect(lower).not.toMatch(/\bmatlab\b/);
    expect(lower).not.toMatch(/\bmachine learning\b/);
    // The honest limit is stated, not hidden.
    expect(fit.honest.trim().length).toBeGreaterThan(0);
  });

  it("reuses Mind Point / YayCamp by reference under an outcome lens — no duplicated capability copy", () => {
    const names = proof.map((p) => p.build.name);
    expect(names).toContain("The Mind Point");
    expect(names).toContain("YayCamp");
    for (const p of proof) {
      // The build is the SAME object Engineering ships — one source of truth.
      expect(shipped).toContain(p.build);
      // The framing is a distinct client-outcome line, not Engineering's copy.
      expect(p.outcome).not.toBe(p.build.outcome);
      expect(p.outcome.trim().length).toBeGreaterThan(0);
    }
  });

  it("publishes transparent 3-tier pricing (₹35k / ₹86k / ₹177k, ascending)", () => {
    expect(tiers.map((t) => t.name)).toEqual([
      "MVP Launch",
      "Product Core",
      "Launch Platform",
    ]);
    expect(tiers.map((t) => t.price)).toEqual([
      "₹35,000",
      "₹86,000",
      "₹1,77,000",
    ]);
    const numbers = tiers.map((t) => Number(t.price.replace(/[^0-9]/g, "")));
    expect(numbers).toEqual([...numbers].sort((a, b) => a - b));
    for (const t of tiers) {
      expect(t.includes.length).toBeGreaterThan(0);
    }
  });

  it("makes email the primary CTA and Fiverr the honest secondary", () => {
    expect(cta.href).toContain(`mailto:${EMAIL}`);
    expect(cta.label.toLowerCase()).toContain("project");
    expect(fiverr.href).toMatch(/^https:\/\/(www\.)?fiverr\.com\//);
    // Fiverr is framed as a channel, not a trust anchor.
    expect(fiverr.note.toLowerCase()).toMatch(/not a|structure|channel/);
  });

  it("carries no vanity metrics and no fabricated testimonials", () => {
    // No "12+ clients / 50+ projects / 5+ years" style vanity strip.
    expect(text).not.toMatch(/\b\d+\+\s*(clients?|projects?|years?|reviews?)/i);
    // No fake social proof.
    expect(lower).not.toContain("testimonial");
    expect(lower).not.toMatch(/5[\s-]?stars?/);
    expect(text).not.toContain("★");
  });

  it("keeps honest solo-in-Pune-serving-globally framing", () => {
    expect(lower).toContain("pune");
    expect(lower).toMatch(/solo|one person|one pair of hands|directly with/);
  });

  it("offers a way back to the confluence — the only door", () => {
    expect(interior.backHref).toBe("/");
  });
});
