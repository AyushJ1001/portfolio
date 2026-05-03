export type Audience = "usa" | "india";

export type AudienceSource = "country" | "language" | "default";

type HeaderReader = {
  get(name: string): string | null;
};

export function detectAudienceFromHeaders(headers: HeaderReader): {
  audience: Audience;
  source: AudienceSource;
} {
  const country =
    headers.get("x-vercel-ip-country") ??
    headers.get("cf-ipcountry") ??
    headers.get("x-country-code") ??
    "";

  if (country) {
    return {
      audience: country.toUpperCase() === "IN" ? "india" : "usa",
      source: "country",
    };
  }

  const acceptLanguage = headers.get("accept-language")?.toLowerCase() ?? "";

  if (
    acceptLanguage.includes("en-in") ||
    acceptLanguage.includes("hi") ||
    acceptLanguage.includes("mr")
  ) {
    return { audience: "india", source: "language" };
  }

  return { audience: "usa", source: "default" };
}
