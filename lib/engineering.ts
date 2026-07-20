/**
 * The Engineering world's interior — its content, kept as pure, DOM-free data
 * (Seam A) so the facts can be unit-tested without mounting the route.
 *
 * This world is a bespoke, demonstrative interior ("show, don't tell"): it makes
 * a hiring visitor *feel* the employable shape of the craft rather than read a
 * résumé-shaped list, and it ends on the one public résumé PDF via {@link
 * RESUME_PATH}. The old single-scroll's Projects/Experience/Skills content is
 * salvaged here under a demonstrative lens.
 *
 * Every string below is reconciled to the single source of truth (#17): the
 * vanity stats strip and the unbacked "Rust" skill are gone; the M.S./TA end
 * date reads "Apr 2026" and the B.E. span "Feb 2021 – Jun 2024"; the anomaly
 * metrics keep their hedges ("~92% … in controlled demo runs", "10K+ frames");
 * PICT/Mathex-MSCE awards, Particle "2025" (sponsored MTU research) and Go are
 * kept; wording is harmonized to the fullest accurate form (TDD, SCTR's, …).
 */

/** The Engineering world's terminal artifact: the one generalist résumé PDF. */
export const RESUME_PATH = "/resume";

/** The opening statement — who the engineer is, honestly and provisionally. */
export const craft = {
  /** Accurate-but-provisional self-label (owner keeps SWE and ML/DS résumés). */
  label: "Software engineer & ML researcher",
  lede:
    "I build things people actually use, and I do the research that makes the hard parts work. Below is the craft in the open — open what's live, read how it was made, and take the résumé at the end.",
  /** Languages backed by real, shown work. No Rust (unbacked) — see #17. */
  languages: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C++", "C#"],
} as const;

/** A shipped build a visitor can look at — ideally open and use right now. */
export interface ShippedBuild {
  name: string;
  /** What it does for a person using it — the outcome, not a feature dump. */
  outcome: string;
  /** The stack it was built on (harmonized to the fullest accurate form). */
  stack: string[];
  /** A live URL a visitor can open, when the product is public. */
  href?: string;
  /** Public source, when available. */
  source?: string;
  /** Short reality note (e.g. client production work with no public URL). */
  note?: string;
}

/** A piece of research or systems work, shown through what it contributed. */
export interface ResearchBuild {
  name: string;
  contribution: string;
  /** A real, hedged metric where one exists — the hedge is the honesty. */
  metric?: string;
  stack: string[];
  year: string;
  link?: string;
}

/**
 * Things you can open right now — the most direct "show, don't tell": real,
 * running products a visitor can click into and use. Outcome-framed.
 */
export const shipped: ShippedBuild[] = [
  {
    name: "YayCamp",
    outcome:
      "A live campground-discovery app: browse sites on an interactive map, sign in, and manage listings — a full production full-stack build, not a demo.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "React Leaflet",
    ],
    href: "https://yaycamp.ayushjuvekar.com",
    source: "https://github.com/AyushJ1001/yaycamp",
  },
  {
    name: "Ranking",
    outcome:
      "A preference-ranking tool that reads your decision latency as a confidence signal — close calls count for less than decisive ones — and normalizes the final ranking to 100.",
    stack: ["TypeScript", "React", "Next.js", "Redis"],
    href: "https://ranking.ayushjuvekar.com",
    source: "https://github.com/AyushJ1001/ranking",
  },
  {
    name: "The Mind Point",
    outcome:
      "A production course-commerce platform for a mental-health education business: paid enrollments over Razorpay, authenticated accounts, email confirmations, and analytics — built solo, end to end.",
    stack: [
      "Next.js",
      "React",
      "Clerk",
      "Razorpay",
      "PostHog",
      "Resend",
      "Vercel",
    ],
    note: "Client production build — private codebase.",
  },
  {
    name: "MonkeyLang-CS",
    outcome:
      "A from-scratch C# interpreter — lexer, parser, AST, evaluator, closures, and a REPL — built test-first the whole way down.",
    stack: ["C#", ".NET", "TDD"],
    source: "https://github.com/AyushJ1001/MonkeyLang-CS",
  },
];

/**
 * The research and systems work behind the products — shown through its
 * contribution and, where one is real, a hedged metric (#17 keeps the hedges).
 */
export const research: ResearchBuild[] = [
  {
    name: "Anomaly Detection in Crowd Surveillance",
    contribution:
      "Final-year team project for edge crowd-anomaly detection: led the model research and data collection, then optimized a TensorFlow prototype with TensorFlow Lite to run on a Jetson Nano.",
    metric: "~92% test accuracy in controlled demo runs over 10K+ frames.",
    stack: ["Python", "TensorFlow", "TensorFlow Lite", "OpenCV", "Jetson Nano"],
    year: "2023–24",
  },
  {
    name: "Particle Vibration Analysis",
    contribution:
      "Sponsored research for a Michigan Tech professor: MATLAB computer-vision scripts that recover particle vibration from ZED 2 camera video, feeding analysis outputs into downstream PhD work.",
    stack: ["MATLAB", "Computer Vision", "Object Detection", "ZED 2"],
    year: "2025",
  },
  {
    name: "IoT Air Quality Monitoring System",
    contribution:
      "An IEEE-published CO/gas monitoring prototype: Arduino sensing over MQTT/Zigbee with Node-RED flows automating air-filter behavior from live readings.",
    stack: ["C++", "Arduino Uno", "MQTT", "Zigbee", "Node-RED"],
    year: "2022–23",
    link: "https://doi.org/10.1109/ESCI56872.2023.10100144",
  },
  {
    name: "Encryption Efficiency Study",
    contribution:
      "A four-month academic internship analyzing RSA and related encryption approaches in Python/Jupyter, comparing implementation tradeoffs for computational cost and efficiency.",
    stack: ["Python", "Pandas", "NumPy", "Jupyter", "RSA"],
    year: "2023",
  },
];

/** A school-and-degree row for the foundations panel. */
export interface EducationEntry {
  school: string;
  degree: string;
  /** Corrected, reconciled span/date (#17). */
  period: string;
  detail?: string;
}

/** A recognition kept as real per the reconciliation (#17). */
export interface Award {
  title: string;
  detail: string;
  year: string;
}

/**
 * The foundations — education and teaching, with reconciled dates. Present but
 * deliberately brief: it grounds the craft, it is not the point of the world.
 */
export const foundations = {
  education: [
    {
      school: "Michigan Technological University",
      degree: "M.S. Computer Science",
      period: "Apr 2026",
      detail: "CGPA 3.9 / 4.0",
    },
    {
      school: "SCTR's Pune Institute of Computer Technology",
      degree: "B.E. Computer Engineering",
      period: "Feb 2021 – Jun 2024",
      detail: "GPA 8.14 / 10",
    },
  ] satisfies EducationEntry[],
  teaching: {
    role: "Teaching Assistant — Physics Department",
    org: "Michigan Technological University",
    period: "Sep 2024 – Apr 2026",
    detail:
      "Supervised and graded physics labs for 100+ students across four semesters, running five lab sections per semester.",
  },
} as const;

/** Recognition — real, site-only, kept as truth (#17). */
export const awards: Award[] = [
  {
    title: "2nd Place — PICT InC '24",
    detail: "Data Structures Competition",
    year: "2024",
  },
  {
    title: "Academic Scholarships — Mathex & MSCE Awards",
    detail: "Merit awards across four undergraduate years",
    year: "2021–24",
  },
  {
    title: "IEEE Publication — ESCI 2023",
    detail:
      "A. Juvekar et al., \"Carbon Monoxide Concentration Monitoring System\", presented Mar 2023",
    year: "2023",
  },
];

/**
 * Every visitor-facing string in the interior, flattened into one blob. This is
 * the surface the facts-reconciliation invariants sweep — the whole point of
 * keeping the content in a pure module.
 */
export function engineeringText(): string {
  const parts: string[] = [craft.label, craft.lede, ...craft.languages];

  for (const b of shipped) {
    parts.push(b.name, b.outcome, ...b.stack);
    if (b.note) parts.push(b.note);
  }
  for (const r of research) {
    parts.push(r.name, r.contribution, r.year, ...r.stack);
    if (r.metric) parts.push(r.metric);
  }
  for (const e of foundations.education) {
    parts.push(e.school, e.degree, e.period);
    if (e.detail) parts.push(e.detail);
  }
  const t = foundations.teaching;
  parts.push(t.role, t.org, t.period, t.detail);
  for (const a of awards) {
    parts.push(a.title, a.detail, a.year);
  }

  return parts.join("\n");
}
