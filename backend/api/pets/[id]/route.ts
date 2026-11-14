import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireOrganization } from "@/lib/auth";
import { petSchema } from "@/lib/validation";

type Context = { params: Promise<{ id: string }> };
export async function PATCH(request: Request, { params }: Context) {
  try {
    const org = await requireOrganization();
    const { id } = await params;
    const parsed = petSchema.partial().safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    const result = await db.pet.updateMany({
      where: { id, organizationId: org.id },
      data: { ...parsed.data, state: parsed.data.state?.toUpperCase(), breed: parsed.data.breed || null, imageUrl: parsed.data.imageUrl || null },
    });
    if (!result.count) return NextResponse.json({ error: "Pet não encontrado." }, { status: 404 });
    return NextResponse.json(await db.pet.findUnique({ where: { id } }));
  } catch { return NextResponse.json({ error: "Não autorizado ou dados inválidos." }, { status: 401 }); }
}
export async function DELETE(_: Request, { params }: Context) {
  try {
    const org = await requireOrganization();
    const { id } = await params;
    const result = await db.pet.deleteMany({ where: { id, organizationId: org.id } });
    return NextResponse.json({ deleted: result.count > 0 }, { status: result.count ? 200 : 404 });
  } catch { return NextResponse.json({ error: "Não autorizado." }, { status: 401 }); }
}
