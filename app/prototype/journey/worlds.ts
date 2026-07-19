// PROTOTYPE — throwaway. Placeholder content for the journey prototype (#16).
// The *worlds* the journey empties into, per map decision #11.
// Copy here is evocative placeholder to make form/feel judgeable — NOT final.

export type WorldTag = "live" | "seed" | "future";

export type World = {
  key: string;
  name: string;
  // The intent that bounds the world (a world is bounded by the visitor's
  // *intent*, not Ayush's skill — decision #11).
  intent: string;
  // What the current *whispers* before you arrive — honest about destination,
  // mysterious about form.
  whisper: string;
  // A one-line sense of the place once you're there.
  arrival: string;
  tag: WorldTag;
  // Muted hue per world, layered over the site's amber. Placeholder.
  hue: string;
};

export const ORIGIN = {
  // The origin is Ayush the person — the single source, never a dwellable world.
  name: "Ayush",
  provocations: [
    "You came looking for a person.",
    "Everything past this point is one.",
    "The way you leave depends on why you came.",
  ],
  // The question the origin uses to feel you out (used by Variant C).
  ask: "Why are you here?",
};

export const WORLDS: World[] = [
  {
    key: "engineering",
    name: "Engineering",
    intent: "You want to hire the mind.",
    whisper: "Systems that hold when it matters.",
    arrival: "Roles, the work, the résumé — the employable shape of the craft.",
    tag: "live",
    hue: "#e8a849",
  },
  {
    key: "freelance",
    name: "Freelance",
    intent: "You want something built.",
    whisper: "Bring a problem. Leave with a thing that works.",
    arrival: "Commissions, scope, the Fiverr bridge — the borderless workshop.",
    tag: "live",
    hue: "#4fb0c6",
  },
  {
    key: "music",
    name: "Music",
    intent: "You want to hear it becoming.",
    whisper: "A sound that isn't finished — and neither is he.",
    arrival: "A channel just seeded. Thin on purpose. Watch it fill in.",
    tag: "seed",
    hue: "#b98cd6",
  },
  {
    key: "more",
    name: "…and more",
    intent: "You want what isn't here yet.",
    whisper: "Something is being stitched. Not ready to be seen.",
    arrival: "An empty berth, deliberately. Embroidery and whatever follows.",
    tag: "future",
    hue: "#6b6b74",
  },
];

export const TAG_LABEL: Record<WorldTag, string> = {
  live: "open",
  seed: "just seeded",
  future: "not yet",
};
