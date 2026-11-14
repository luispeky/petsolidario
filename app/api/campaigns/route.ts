import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireOrganization } from "@/lib/auth";
import { campaignSchema } from "@/lib/validation";

export async function GET() {
  return NextResponse.json(await db.campaign.findMany({
    include: { organization: { select: { id: true, name: true, slug: true, city: true, state: true } } },
    orderBy: { createdAt: "desc" },
  }));
}
export async function POST(request: Request) {
  try {
    const org = await requireOrganization();
    const parsed = campaignSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Dados da campanha inválidos.", details: parsed.error.flatten() }, { status: 400 });
    const campaign = await db.campaign.create({
      data: { ...parsed.data, goalCents: Math.round(parsed.data.goalCents), imageUrl: parsed.data.imageUrl || null, endsAt: parsed.data.endsAt ? new Date(parsed.data.endsAt) : null, organizationId: org.id },
    });
    return NextResponse.json(campaign, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") return NextResponse.json({ error: "Faça login para continuar." }, { status: 401 });
    return NextResponse.json({ error: "Não foi possível criar a campanha." }, { status: 400 });
  }
}
