import type { Metadata } from "next";
import { Engineering } from "@/components/Engineering";

// The Engineering world — the interior a hiring visitor lands in after holding
// the Engineering current at the confluence. Its terminal artifact is the one
// résumé PDF at /resume.
export const metadata: Metadata = {
  title: "Engineering — Ayush Juvekar",
  description:
    "The employable shape of the craft: things you can open and use, the research behind them, and the résumé at the end.",
};

export default function EngineeringPage() {
  return <Engineering />;
}
