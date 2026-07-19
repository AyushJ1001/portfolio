/**
 * The Music world's interior content — a pure, DOM-free presentation module
 * (Seam A) so the honesty guarantees are unit-testable without mounting.
 *
 * Music is a `seed` world: thin on purpose. The one rule that is a decision,
 * not a suggestion, is that the reality tag *tracks truth* — the chip a visitor
 * reads here is {@link realityLabel} of the registry's reality, never a
 * prettier hardcoded label. Promote the world in {@link worlds} and this chip
 * follows; there is no way to dress Music up as more complete than it is.
 *
 * There is deliberately no résumé here (Music uses none) and no hard CTA — the
 * single ask is to *follow the becoming* while the world fills in over time.
 */

import { realityLabel, worlds, type World } from "./worlds";

/** The music world's id in the registry — the one place it is named. */
export const MUSIC_WORLD_ID = "music" as const;

/** The music {@link World} resolved from the registry (throws if it vanishes). */
export function musicWorld(): World {
  const world = worlds.find((w) => w.id === MUSIC_WORLD_ID);
  if (!world) {
    throw new Error(`music world "${MUSIC_WORLD_ID}" missing from registry`);
  }
  return world;
}

/** A place to watch the work become — the "follow the becoming" destination. */
export interface FollowLink {
  /** Visitor-facing action label. */
  label: string;
  /** External URL to the channel. */
  href: string;
  /** The handle shown alongside the link. */
  handle: string;
}

/**
 * The channel to follow. This is the one honest CTA of a seed world: not
 * "hire me" or "buy" — just "watch it fill in." Handle mirrors the site's other
 * social handles (LinkedIn/GitHub); the owner confirms the final URL.
 */
export const followTheBecoming: FollowLink = {
  label: "Follow on YouTube",
  href: "https://www.youtube.com/@ayushjuvekar",
  handle: "@ayushjuvekar",
};

/** The renderable Music interior, resolved from the registry. */
export interface MusicInterior {
  /** World name (from the registry). */
  title: string;
  /** Route for this interior (from the registry). */
  path: string;
  /** Visitor-facing reality chip — derived from the registry, tracks truth. */
  chip: string;
  /** True while the world's reality is `seed` — the honest-thinness gate. */
  seeded: boolean;
  /** Small label above the headline. */
  eyebrow: string;
  /** The honest opening line. */
  headline: string;
  /** Honest paragraphs presenting the world as just-seeded and thin. */
  honest: string[];
  /** The follow-the-becoming link. */
  follow: FollowLink;
  /** Back to the Confluence — the hub's only door. */
  backHref: string;
}

/** Build the Music interior from the registry so its tag can never lie. */
export function musicInterior(): MusicInterior {
  const world = musicWorld();
  return {
    title: world.title,
    path: world.path,
    chip: realityLabel(world.reality),
    seeded: world.reality === "seed",
    eyebrow: "A world just seeded",
    headline: "The music is only starting.",
    honest: [
      "This world is new — freshly seeded, and thin on purpose. There is no back catalogue to scroll, no polished discography, no reel. What you see is honestly all there is right now.",
      "I am learning it in the open. Rather than wait until there is a body of work to show, this room stays sparse and truthful: it will fill in as the work becomes, and not a moment before.",
      "If that sounds worth watching, the only thing to do here is follow the becoming — and check back as it grows.",
    ],
    follow: followTheBecoming,
    backHref: "/",
  };
}
