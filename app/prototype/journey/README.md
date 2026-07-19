# Journey prototype — throwaway (wayfinder #16)

Three **radically different** takes on *what the journey literally is* — the
guided, single-origin, self-selecting experience that carries a willing visitor
from the origin (Ayush the person) toward a world. Placeholder content
throughout; this is about **form and feel**, not final copy. The visual/motion
language for the real hub graduates *from* whichever of these wins (or from the
mashup the owner wants — "the confluence of B with the honesty of C").

## Run it

```bash
npm run dev        # Turbopack; the site is Turbopack-only
# then open:
#   /prototype/journey?variant=A
#   /prototype/journey?variant=B
#   /prototype/journey?variant=C
```

Use the floating bar at the bottom (or ← / → keys) to switch variants. The bar
is hidden in production builds.

## The three theses

| | Name | The journey *is*… | Where the friction lives | Mystery ↔ signposting |
|---|---|---|---|---|
| **A** | **The Current** | a single scroll-descent — scrolling *is* the walking; you pass every world, and the one you slow down beside is the one you're steered toward | the scroll distance itself; no menu, no jump | **most signposted** — world names visible as you pass |
| **B** | **The Confluence** | a spatial field — the origin pulses at centre, currents drift unlabeled around it; you must *press and hold* to commit, and re-entry means returning here | the deliberate ~1s **hold** to commit | **middle** — you sense a current before you learn it; committing costs |
| **C** | **The Threshold** | a slow dialogue — the origin *asks*, one line at a time, and your answers narrow you into a world you were never shown by name | **patience**; lines arrive slowly, no skip | **most mysterious** — no world names on the choices, only intents |

## The question this settles

Which felt-shape of the journey does the owner want to build the real hub
around — and, specifically, **where on the mystery↔signposting axis** it should
sit (decision #11 handed that balance to this prototype). The resolution is the
owner's reaction, not a vote.

## Note on the incidental CSS fix

`app/globals.css` line ~211 (`.tag:hover`) used
`@apply border-[var(--accent)]/30`, which **fails a clean compile** under this
Tailwind version (opacity modifier on an arbitrary CSS-var border color). Every
route 500s from a cold `.next` cache because of it — the running site only
survives on a warm cache. Replaced with an equivalent
`border-color: rgba(232,168,73,0.3)` so the prototype (and the site) build
cleanly. Pre-existing bug, unrelated to #16 — flagged here so it isn't mistaken
for prototype scope.

---

## Round 2 — narrowing to The Confluence (owner reaction)

Owner reacted to round 1: **B (The Confluence) won**; A and C were cut (their explicit
provocation/dialogue text read as too crude). The **hold-to-commit ring-fill** is the
loved mechanic. Locked base going forward: **origin at centre · currents around it ·
hold-to-commit ring-fill · return-to-re-enter · spatial/gestural, no prose** (hover
reveals one short whisper).

`confluence.round2.html` is a self-contained (no-build) capture of three *ways of forming
a confluence* on that base — open it directly in a browser, or see the live Artifact:

1. **Orbit** — currents circle the source in slow motion; holding catches a passing current.
2. **Rivers** — particle streams flow inward to the confluence; holding draws a stream in.
3. **Iris** — currents are arcs of a ring; holding dilates the source's aperture toward one.

Switch with the bottom bar or ← / →. Round-1 `VariantA/B/C.tsx` are kept for history but
superseded by this round.

---

## Round 3 — Rivers, redesigned after an /impeccable critique

A dual-agent impeccable critique (design review + deterministic detector) scored the
round-2 confluence **23/40** and confirmed the owner's read ("generic/sloppy"): the palette
was a categorical-chart rainbow, the glow was flat centered haze (not lighting), the type
was the Playfair/Georgia reflex (and never even loaded), and the hold-to-enter was
keyboard-inaccessible. Full snapshot in `.impeccable/critique/`.

Owner picked: **refine the concept in place · develop Rivers · full scope**. `rivers.round3.html`
is the result (self-contained, no build; also the live Artifact):

- **Palette** — four worlds recast as one OKLCH family (equalized L/C, shared warm undertone:
  ember/verdigris/plum/ash); brand accent (`#efc98b` candle-light) decoupled from every world;
  warm near-black neutrals; all colors pass WCAG AA.
- **Lighting** — the flat radial replaced by a layered, screen-blended bloom (hot core + falloff
  + scatter); streams carry a directional gradient (dim at the world, bright at the confluence);
  focusing a current **floods the whole room with its hue** and tints the origin.
- **Type** — Young Serif (organic display) + Bricolage Grotesque (UI), both embedded as data-URI
  `@font-face` so they actually render; no Playfair/Georgia.
- **Accessibility** — currents are real `<button>`s: Tab to focus, Enter/Space to enter, visible
  focus rings, persistent world names (no hover-to-discover), `aria-label`s.
- **Responsive + reduced-motion** — no mobile clipping; transitions and the hold-fill gated.

Rounds 1–2 (`VariantA/B/C.tsx`, `confluence.round2.html`) are kept for history.

---

## Round 4 — portrait origin, streams-reach-center, light mode

Owner feedback on round 3: streams didn't reach the circle centers; wanted the illustrated
self-portrait (from `public/photo.png`) as the origin, turning toward the cursor; and asked
how it works in light mode. `rivers.round4.html`:

- **Streams reach center** — the node was a flex column, so its transform-center sat at the
  label, not the ring; re-anchored each node on its ring centre and added a solid faint
  "riverbed" line under the animated flow so every stream visibly runs core→confluence.
- **Illustrated portrait origin** — `public/photo.png` (already a cartoon illustration) is
  background-keyed to transparent (ImageMagick), embedded as a WebP data-URI, circular-masked,
  and **tilts in 3D toward the cursor** (perspective + rotateX/Y, eased) — reduced-motion disables it.
- **Light mode** — a real inversion, not a flip: dark = light gathering in a warm room (screen
  blend); light = ink/pigment pooling on warm paper (multiply blend), with its own token set,
  darker AA-passing world hues, and a sun/moon toggle. Respects `prefers-color-scheme`.
- Type still Young Serif + Bricolage (embedded); all text AA in both themes; no mobile clipping.
