import { NextResponse } from "next/server";
import { getSessionOrganization } from "@/lib/auth";
export async function GET() {
  const organization = await getSessionOrganization();
  return NextResponse.json({ organization }, { status: organization ? 200 : 401 });
}
