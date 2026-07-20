import type { Metadata } from "next";
import { Freelance } from "@/components/Freelance";

// The Freelance world — the borderless workshop a prospective client lands in
// after holding the Freelance current at the confluence. Client-outcome lens,
// transparent pricing, and an email-primary CTA ("Tell me about your project").
export const metadata: Metadata = {
  title: "Freelance — Ayush Juvekar",
  description:
    "A solo full-stack web-app builder in Pune, serving clients anywhere: what I can build for you, shipped proof, transparent pricing, and a direct line to start.",
};

export default function FreelancePage() {
  return <Freelance />;
}
