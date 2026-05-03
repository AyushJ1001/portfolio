import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function detectCountry(request: NextRequest) {
  const headers = request.headers;
  const country =
    headers.get("x-vercel-ip-country") ??
    headers.get("cf-ipcountry") ??
    headers.get("x-country-code") ??
    "";

  if (country) {
    return country.toUpperCase();
  }

  const acceptLanguage = headers.get("accept-language")?.toLowerCase() ?? "";

  if (
    acceptLanguage.includes("en-in") ||
    acceptLanguage.includes("hi") ||
    acceptLanguage.includes("mr")
  ) {
    return "IN";
  }

  return "US";
}

export function GET(request: NextRequest) {
  const country = detectCountry(request);

  return NextResponse.json(
    { audience: country === "IN" ? "india" : "usa" },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
