import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { detectAudienceFromHeaders } from "@/lib/audience";

export const dynamic = "force-dynamic";

const DEFAULT_ROLE = "full-stack-engineer";

const ROLE_RESUMES = {
  "backend-engineer": "backend_engineer",
  "frontend-engineer": "frontend_engineer",
  "full-stack-engineer": "full_stack_engineer",
  "ml-data-scientist": "ml_data_scientist",
  "computer-vision-edge-ai": "computer_vision_edge_ai",
  "iot-embedded-engineer": "iot_embedded_engineer",
} as const;

type ResumeRole = keyof typeof ROLE_RESUMES;

function getResumeRole(request: NextRequest): ResumeRole {
  const requestedRole = request.nextUrl.searchParams.get("role");

  if (requestedRole && requestedRole in ROLE_RESUMES) {
    return requestedRole as ResumeRole;
  }

  return DEFAULT_ROLE;
}

export async function GET(request: NextRequest) {
  const { audience } = detectAudienceFromHeaders(request.headers);
  const country = audience === "india" ? "india" : "usa";
  const role = getResumeRole(request);
  const roleFileName = ROLE_RESUMES[role];
  const resumeFile = `ayush_juvekar_resume_${country}_${roleFileName}.pdf`;
  const downloadName = `ayush_juvekar_${roleFileName}_resume.pdf`;
  const resume = await readFile(join(process.cwd(), "public", resumeFile));

  return new NextResponse(resume, {
    headers: {
      "Content-Disposition": `attachment; filename="${downloadName}"`,
      "Content-Type": "application/pdf",
      "Cache-Control": "private, no-store",
    },
  });
}
