/**
 * The Freelance world's interior — its content as pure, DOM-free data (Seam A)
 * so every claim it makes can be unit-tested without mounting the route.
 *
 * Freelance is a borderless workshop shown through a *client-outcome* lens: not
 * "here are my capabilities" but "here is what I can build *for you*." The world
 * is framed narrowly and honestly — a focused **full-stack production web-app
 * builder** (Next.js / TypeScript / React / PostgreSQL / Vercel), not a
 * web+ML+IoT generalist — and moves through five parts: **promise · proof ·
 * offer · trust · CTA**.
 *
 * Two decisions here are load-bearing, not stylistic:
 *  1. Proof {@link proof} *reuses* Engineering's shipped builds by reference
 *     ({@link "./engineering".shipped}) so a fact stated in two worlds can never
 *     drift — Freelance only re-frames them under a client-outcome line, it
 *     never re-declares the stack/links.
 *  2. Trust is shipped-proof + transparent pricing + honest solo-in-Pune framing
 *     — **no vanity metrics and no fabricated testimonials** (audited out in #13;
 *     they must not return). The CTA is **email-primary**; Fiverr is the honest
 *     secondary (milestone structure), never the trust anchor.
 */

import { shipped, type ShippedBuild } from "./engineering";
import { realityLabel, worlds, type World } from "./worlds";

/** The freelance world's id in the registry — the one place it is named. */
export const FREELANCE_WORLD_ID = "freelance" as const;

/** The freelance {@link World} resolved from the registry (throws if it vanishes). */
export function freelanceWorld(): World {
  const world = worlds.find((w) => w.id === FREELANCE_WORLD_ID);
  if (!world) {
    throw new Error(`freelance world "${FREELANCE_WORLD_ID}" missing from registry`);
  }
  return world;
}

/** The email a project conversation starts from — the primary channel. */
export const EMAIL = "ayushjuvekar@gmail.com";

/** The primary CTA: start a real conversation over email. */
export const cta = {
  label: "Tell me about your project",
  /** mailto with a subject that carries the visitor straight into a thread. */
  href: `mailto:${EMAIL}?subject=${encodeURIComponent("A project I'd like built")}`,
  note: "Straight to my inbox — you'll hear back from the person who'll write the code.",
} as const;

/**
 * The honest secondary path. Fiverr gives a milestone-payment *structure* for
 * clients who want it — but it is a brand-new gig with no reviews, so it is a
 * channel, never a trust signal. Structure ≠ trust; the proof above is.
 */
export const fiverr = {
  label: "Prefer milestone payments? Book on Fiverr",
  href: "https://www.fiverr.com/ayushjuvekar",
  note: "A structured, escrow-backed option — not a reviews badge. The trust is the shipped work, not the channel.",
} as const;

/** The opening promise — what the visitor gets, in their terms. */
export const promise = {
  label: "Work with me.",
  headline: "I'll build your web app, end to end.",
  lede:
    "You have a product in your head and no team to ship it. I'm a solo full-stack builder who takes it from an empty repo to something real people log into and pay for — designed, built, and deployed by one pair of hands.",
} as const;

/**
 * The fit — stated narrowly on purpose. This is where a client self-qualifies:
 * a production web app is a yes; an ML pipeline or a firmware build is an honest
 * no. Kept web-only so the framing never over-promises a generalist.
 */
export const fit = {
  lede:
    "One focus, done properly: production web applications. If your project looks like the stack below, we're a fit — and I'll say so plainly if it isn't.",
  building: ["Next.js", "TypeScript", "React", "PostgreSQL", "Vercel"],
  honest:
    "Not a do-everything shop: no mobile apps, no ML/data-science contracting, no embedded work. A sharp tool for one job beats a blunt one for all of them.",
} as const;

/**
 * A shipped build re-framed for a client. The build itself is a reference into
 * {@link "./engineering".shipped} — same name, stack, and links — so the fact
 * lives in one place; only the {@link outcome} line changes lens.
 */
export interface ClientProof {
  /** The underlying shipped build, reused by reference from Engineering. */
  build: ShippedBuild;
  /** The client-outcome framing: what this proves I can build *for you*. */
  outcome: string;
}

/** Resolve a shipped build by name from the Engineering source of truth. */
function reuse(name: string): ShippedBuild {
  const build = shipped.find((b) => b.name === name);
  if (!build) {
    throw new Error(`freelance proof reuses missing shipped build "${name}"`);
  }
  return build;
}

/**
 * Proof — the same shipped work Engineering shows, re-lensed to the outcome a
 * paying client cares about. No new facts, no duplicated capability copy.
 */
export const proof: ClientProof[] = [
  {
    build: reuse("The Mind Point"),
    outcome:
      "A real business takes paid enrollments through this every day: I built the whole platform solo — payments over Razorpay, accounts, receipts, analytics — and handed over something that just runs. This is what your revenue path can look like.",
  },
  {
    build: reuse("YayCamp"),
    outcome:
      "A full production app — interactive maps, sign-in, listings a user creates and manages — shipped and live, not a demo. If your idea needs real users doing real things, this is the shape of it working.",
  },
];

/** A single transparent pricing tier — a client self-qualifies on budget here. */
export interface PricingTier {
  name: string;
  /** Display price in INR. */
  price: string;
  /** The one-line promise of the tier. */
  summary: string;
  /** What's inside — concrete, not aspirational. */
  includes: string[];
}

/**
 * Transparent 3-tier pricing (MVP Launch ₹35k · Product Core ₹86k · Launch
 * Platform ₹177k). Published up front so a client qualifies themselves before
 * reaching out — the opposite of a "contact us for a quote" wall.
 */
export const tiers: PricingTier[] = [
  {
    name: "MVP Launch",
    price: "₹35,000",
    summary: "One core flow, shipped and live.",
    includes: [
      "A single-purpose web app around your core idea",
      "Clean responsive UI, built and deployed to Vercel",
      "One integration (auth or a form/DB) where it's needed",
    ],
  },
  {
    name: "Product Core",
    price: "₹86,000",
    summary: "The real product — accounts, data, payments.",
    includes: [
      "Authenticated multi-user app on a PostgreSQL database",
      "Payments and email/receipts wired end to end",
      "The full flow a paying user actually walks through",
    ],
  },
  {
    name: "Launch Platform",
    price: "₹1,77,000",
    summary: "A production platform built to grow on.",
    includes: [
      "Everything in Product Core, at platform scale",
      "Roles, dashboards, third-party integrations, analytics",
      "Hardened, documented, and handed over ready to run",
    ],
  },
];

/**
 * Trust — built from what's real. Honest solo-in-Pune-serving-globally framing,
 * and an explicit refusal of the vanity-metric / fake-testimonial playbook.
 */
export const trust = {
  points: [
    "You work directly with the one person who writes the code. No account managers, no offshore handoff, no telephone game — Pune-based, serving clients anywhere.",
    "The trust here is the work you can open above, not a wall of glowing quotes or a big-number stat strip. I don't run vanity metrics and I won't invent praise I didn't earn.",
    "Fixed, published prices and a scope agreed before we start — you know what you're paying and what you're getting, in writing, before any money moves.",
  ],
} as const;

/**
 * The renderable Freelance interior, resolved from the registry so its reality
 * chip tracks truth and can never be dressed up.
 */
export interface FreelanceInterior {
  title: string;
  path: string;
  /** Visitor-facing reality chip — derived from the registry. */
  chip: string;
  backHref: string;
  promise: typeof promise;
  fit: typeof fit;
  proof: ClientProof[];
  tiers: PricingTier[];
  trust: typeof trust;
  cta: typeof cta;
  fiverr: typeof fiverr;
}

/** Build the Freelance interior from the registry. */
export function freelanceInterior(): FreelanceInterior {
  const world = freelanceWorld();
  return {
    title: world.title,
    path: world.path,
    chip: realityLabel(world.reality),
    backHref: "/",
    promise,
    fit,
    proof,
    tiers,
    trust,
    cta,
    fiverr,
  };
}

/**
 * Every visitor-facing string in the interior, flattened into one blob — the
 * single surface the honesty invariants (no vanity metrics, no fake reviews,
 * web-only framing) sweep.
 */
export function freelanceText(): string {
  const parts: string[] = [
    promise.label,
    promise.headline,
    promise.lede,
    fit.lede,
    ...fit.building,
    fit.honest,
    cta.label,
    cta.note,
    fiverr.label,
    fiverr.note,
    ...trust.points,
  ];

  for (const p of proof) {
    parts.push(p.build.name, p.outcome, ...p.build.stack);
  }
  for (const t of tiers) {
    parts.push(t.name, t.price, t.summary, ...t.includes);
  }

  return parts.join("\n");
}
