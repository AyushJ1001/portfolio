"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Audience } from "@/lib/audience";

const AudienceContext = createContext<Audience>("usa");

function inferAudienceFromLanguage() {
  if (typeof navigator === "undefined") {
    return "usa";
  }

  const languages = [navigator.language, ...navigator.languages]
    .filter(Boolean)
    .join(",")
    .toLowerCase();

  if (
    languages.includes("en-in") ||
    languages.includes("hi") ||
    languages.includes("mr")
  ) {
    return "india";
  }

  return "usa";
}

export function AudienceProvider({
  children,
  initialAudience,
  enableClientLanguageFallback = false,
}: {
  children: ReactNode;
  initialAudience: Audience;
  enableClientLanguageFallback?: boolean;
}) {
  const [audience, setAudience] = useState<Audience>(initialAudience);

  useEffect(() => {
    setAudience(
      enableClientLanguageFallback
        ? inferAudienceFromLanguage()
        : initialAudience
    );
  }, [enableClientLanguageFallback, initialAudience]);

  const value = useMemo(() => audience, [audience]);

  return (
    <AudienceContext.Provider value={value}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  return useContext(AudienceContext);
}
