import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { detectAudienceFromHeaders } from "@/lib/audience";

export const dynamic = "force-dynamic";

const INDIA_RESUME = "ayush_juvekar_resume_india.pdf";
const USA_RESUME = "ayush_juvekar_resume_usa.pdf";
const DOWNLOAD_NAME = "ayush_juvekar_resume.pdf";

export async function GET(request: NextRequest) {
  const { audience } = detectAudienceFromHeaders(request.headers);
  const resumeFile = audience === "india" ? INDIA_RESUME : USA_RESUME;
  const resume = await readFile(join(process.cwd(), "public", resumeFile));

  return new NextResponse(resume, {
    headers: {
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Content-Type": "application/pdf",
      "Cache-Control": "private, no-store",
    },
  });
}
