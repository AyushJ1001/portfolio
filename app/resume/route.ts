import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

// The single generalist résumé — Engineering's terminal artifact, reused as-is
// by Freelance. Any `?role=` or geo hint is ignored; this one PDF is served.
const RESUME_FILE = "ayush_juvekar_resume_india_full_stack_engineer.pdf";
const DOWNLOAD_NAME = "ayush_juvekar_resume.pdf";

export async function GET() {
  const resume = await readFile(join(process.cwd(), "public", RESUME_FILE));

  return new NextResponse(resume, {
    headers: {
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Content-Type": "application/pdf",
      "Cache-Control": "private, no-store",
    },
  });
}
