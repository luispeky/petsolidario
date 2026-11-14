import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireOrganization } from "@/lib/auth";
import { campaignSchema } from "@/lib/validation";

type Context = { params: Promise<{ id: string }> };
export async function PATCH(request: Request, { params }: Context) {
  try {
    const org = await requireOrganization();
    const { id } = await params;
    const parsed = campaignSchema.partial().safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    const data = { ...parsed.data, goalCents: parsed.data.goalCents === undefined ? undefined : Math.round(parsed.data.goalCents), imageUrl: parsed.data.imageUrl || null, endsAt: parsed.data.endsAt ? new Date(parsed.data.endsAt) : undefined };
    const result = await db.campaign.updateMany({ where: { id, organizationId: org.id }, data });
    if (!result.count) return NextResponse.json({ error: "Campanha não encontrada." }, { status: 404 });
    return NextResponse.json(await db.campaign.findUnique({ where: { id } }));
  } catch { return NextResponse.json({ error: "Não autorizado ou dados inválidos." }, { status: 401 }); }
}
export async function DELETE(_: Request, { params }: Context) {
  try {
    const org = await requireOrganization();
    const { id } = await params;
    const result = await db.campaign.deleteMany({ where: { id, organizationId: org.id } });
    return NextResponse.json({ deleted: result.count > 0 }, { status: result.count ? 200 : 404 });
  } catch { return NextResponse.json({ error: "Não autorizado." }, { status: 401 }); }
}
