import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

const INDIA_RESUME = "ayush_juvekar_resume_india.pdf";
const USA_RESUME = "ayush_juvekar_resume_usa.pdf";
const DOWNLOAD_NAME = "ayush_juvekar_resume.pdf";

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

export async function GET(request: NextRequest) {
  const country = detectCountry(request);
  const resumeFile = country === "IN" ? INDIA_RESUME : USA_RESUME;
  const resume = await readFile(join(process.cwd(), "public", resumeFile));

  return new NextResponse(resume, {
    headers: {
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Content-Type": "application/pdf",
      "Cache-Control": "private, no-store",
    },
  });
}
