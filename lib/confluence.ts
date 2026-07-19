/**
 * The Confluence presentation layer — the bridge from the plain world registry
 * to the currents rendered at `/`.
 *
 * The registry ({@link worlds}) is a navigation spine: it says which worlds
 * exist, their order, and whether each is enterable. It deliberately holds no
 * layout, no hues, and no confluence framing. This module is where that
 * presentation lives, kept pure and DOM-free (Seam A) so the flow-field
 * mapping is unit-testable without mounting the component: it turns each
 * {@link World} into a {@link Current} with a placed slot, a hue custom
 * property, the visitor-facing reality chip, and an enterable/locked
 * `aria-label`. The React component consumes this and wires the DOM + rAF.
 *
 * Slots and hues are graduated verbatim from the approved prototype
 * (rivers.round4): the four nodes sit at the corners of the field and every
 * current flows inward to {@link CONFLUENCE_CENTER}, the single source.
 */

import { HOLD_DURATIONS } from "./hold";
import {
  isEnterable,
  realityLabel,
  worlds,
  type Reality,
  type World,
  type WorldId,
} from "./worlds";

/** A single current in the Confluence: a registry world plus its presentation. */
export interface Current {
  id: WorldId;
  /** World name shown on the current (from the registry). */
  title: string;
  /** One-line hook shown under the name. Never empty — see the fallback below. */
  lure: string;
  /** Route the current navigates to on a completed hold. */
  path: string;
  reality: Reality;
  /** Visitor-facing reality chip: OPEN / JUST SEEDED / NOT YET. */
  chip: string;
  /** True when a completed hold navigates; false gates the empty berth. */
  enterable: boolean;
  /** The inverse of {@link Current.enterable}; a locked current never fills. */
  locked: boolean;
  /** Accessible button label conveying world name + enterable/locked state. */
  ariaLabel: string;
  /** CSS custom property carrying this world's hue (e.g. `--eng`). */
  hueVar: string;
  /** Node position in the flow field, in `0–100` field units. */
  slot: { x: number; y: number };
}

/** The single source every current flows toward, in field units. */
export const CONFLUENCE_CENTER = { x: 50, y: 46 } as const;

/**
 * Per-world confluence presentation — position + hue, and a fallback lure only
 * for worlds the registry leaves without one (the locked berth). Registry
 * lures win when present.
 */
const PRESENTATION: Record<
  WorldId,
  { hueVar: string; slot: { x: number; y: number }; lure?: string }
> = {
  engineering: { hueVar: "--eng", slot: { x: 25, y: 27 } },
  freelance: { hueVar: "--free", slot: { x: 75, y: 29 } },
  music: { hueVar: "--music", slot: { x: 27, y: 74 } },
  more: {
    hueVar: "--more",
    slot: { x: 73, y: 72 },
    lure: "Something is being stitched. Not ready to be seen.",
  },
};

/** The accessible label read on a current, by enterable/locked state. */
function currentAriaLabel(world: World, enterable: boolean): string {
  return enterable
    ? `${world.title} — hold, or press Enter, to enter`
    : `${world.title} — not open yet`;
}

/**
 * The ordered list of currents to render, derived from the registry. Order is
 * registry order; presentation (slot/hue/fallback lure) is layered on here so
 * the registry stays plain data.
 */
export function confluenceCurrents(): Current[] {
  return worlds.map((world) => {
    const preset = PRESENTATION[world.id];
    const enterable = isEnterable(world.reality);
    return {
      id: world.id,
      title: world.title,
      lure: world.lure ?? preset.lure ?? "",
      path: world.path,
      reality: world.reality,
      chip: realityLabel(world.reality),
      enterable,
      locked: !enterable,
      ariaLabel: currentAriaLabel(world, enterable),
      hueVar: preset.hueVar,
      slot: preset.slot,
    };
  });
}

/** The input modality a hold was begun with — it sets the fill duration. */
export type HoldModality = "pointer" | "keyboard";

/**
 * The hold duration for a given modality, collapsing to the near-instant
 * reduced-motion duration when the visitor prefers reduced motion (so the ring
 * resolves almost immediately instead of animating).
 */
export function holdDurationFor(
  modality: HoldModality,
  prefersReducedMotion: boolean,
): number {
  if (prefersReducedMotion) return HOLD_DURATIONS.reduced;
  return modality === "keyboard"
    ? HOLD_DURATIONS.keyboard
    : HOLD_DURATIONS.pointer;
}
