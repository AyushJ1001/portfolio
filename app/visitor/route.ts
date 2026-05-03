import { NextRequest, NextResponse } from "next/server";
import { detectAudienceFromHeaders } from "@/lib/audience";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const { audience } = detectAudienceFromHeaders(request.headers);

  return NextResponse.json(
    { audience },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
