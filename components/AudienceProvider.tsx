"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Audience = "usa" | "india";

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

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>(inferAudienceFromLanguage);

  useEffect(() => {
    let cancelled = false;

    fetch("/visitor", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to detect visitor region");
        }
        return response.json() as Promise<{ audience?: Audience }>;
      })
      .then((data) => {
        if (!cancelled && data.audience) {
          setAudience(data.audience);
        }
      })
      .catch(() => {
        // Keep the local language fallback when server-side country headers are unavailable.
      });

    return () => {
      cancelled = true;
    };
  }, []);

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
