"use client";

// PROTOTYPE — throwaway route for the journey prototype (#16).
// Three radically different takes on "what the journey literally is", switchable
// via ?variant=A|B|C and the floating bar. Placeholder content throughout.
// This route and its switcher are NOT meant to ship — the winner gets folded
// into real code and the rest go to the throwaway branch.

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import VariantA from "./VariantA";
import VariantB from "./VariantB";
import VariantC from "./VariantC";
import { PrototypeSwitcher } from "./PrototypeSwitcher";

function Journey() {
  const params = useSearchParams();
  const variant = (params.get("variant") ?? "A").toUpperCase();

  return (
    <main className="noise-bg min-h-screen bg-[var(--bg-primary)]">
      {variant === "A" && <VariantA />}
      {variant === "B" && <VariantB />}
      {variant === "C" && <VariantC />}
      {!["A", "B", "C"].includes(variant) && <VariantA />}
      <PrototypeSwitcher current={["A", "B", "C"].includes(variant) ? variant : "A"} />
    </main>
  );
}

export default function JourneyPrototypePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--bg-primary)]" />}>
      <Journey />
    </Suspense>
  );
}
