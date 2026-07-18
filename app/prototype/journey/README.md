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
