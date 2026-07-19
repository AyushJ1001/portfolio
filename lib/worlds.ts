/**
 * The world registry — the thin, serializable nav manifest for the hub.
 *
 * This is a navigation spine, NOT a CMS and NOT a content/facts schema. It
 * declares which worlds exist, the order they present in, and whether each is
 * enterable yet. Presentation copy (confluence/current framing, narrator text,
 * SEO) lives in the presentation layer, never here; interiors are resolved by
 * route, so there is deliberately no `enter()` on an entry — the registry stays
 * plain data that survives a JSON round-trip.
 */

/** The closed set of worlds the hub knows about. Order below is presentation order. */
export type WorldId = "engineering" | "freelance" | "music" | "more";

/**
 * How real a world is. This is the empty-berth gate: `live`/`seed` are
 * enterable; `future`/`deferred` are declared and rendered but never navigate.
 */
export type Reality = "live" | "seed" | "future" | "deferred";

/**
 * The visitor's reason for walking a current. Constrained union — the hub sorts
 * by intent, not by geography or skill list.
 */
export type Intent = "employment" | "commission" | "follow" | "explore";

/** A single berth in the hub. Plain, serializable data — no behaviour. */
export interface World {
  id: WorldId;
  title: string;
  intent: Intent;
  reality: Reality;
  path: string;
  /** Optional one-line hook shown on the berth; still presentation-agnostic copy. */
  lure?: string;
}

/**
 * The four worlds, in presentation order (ordering === array order).
 * Typed as `readonly World[]` so consumers reason over the {@link World} shape
 * rather than the frozen literals, while the assignment still enforces it.
 */
export const worlds: readonly World[] = [
  {
    id: "engineering",
    title: "Engineering",
    intent: "employment",
    reality: "live",
    path: "/engineering",
    lure: "Size me up for the role.",
  },
  {
    id: "freelance",
    title: "Freelance",
    intent: "commission",
    reality: "live",
    path: "/freelance",
    lure: "What I can build for you.",
  },
  {
    id: "music",
    title: "Music",
    intent: "follow",
    reality: "seed",
    path: "/music",
    lure: "Watch the work become.",
  },
  {
    id: "more",
    title: "More",
    intent: "explore",
    reality: "future",
    path: "/more",
  },
];

/** Realities a visitor is allowed to navigate into. */
const ENTERABLE_REALITIES: ReadonlySet<Reality> = new Set(["live", "seed"]);

/** True when a world of this reality can be entered — the empty-berth gate. */
export function isEnterable(reality: Reality): boolean {
  return ENTERABLE_REALITIES.has(reality);
}

/** The subset of worlds a visitor can actually walk into, in registry order. */
export const enterableWorlds: readonly World[] = worlds.filter((world) =>
  isEnterable(world.reality),
);

/** Reality → the label a visitor reads on the berth. */
export function realityLabel(reality: Reality): string {
  switch (reality) {
    case "live":
      return "OPEN";
    case "seed":
      return "JUST SEEDED";
    case "future":
    case "deferred":
      return "NOT YET";
  }
}
