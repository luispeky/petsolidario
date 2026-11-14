import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireOrganization } from "@/lib/auth";
const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(30).optional().nullable(),
  city: z.string().trim().min(2).max(100),
  state: z.string().trim().length(2),
  description: z.string().trim().min(20).max(3000),
  imageUrl: z.string().url().optional().nullable().or(z.literal("")),
});
export async function PATCH(request: Request) {
  try {
    const org = await requireOrganization();
    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Confira os dados do perfil." }, { status: 400 });
    const updated = await db.organization.update({ where: { id: org.id }, data: { ...parsed.data, state: parsed.data.state.toUpperCase(), imageUrl: parsed.data.imageUrl || null, phone: parsed.data.phone || null } });
    return NextResponse.json({ id: updated.id, name: updated.name, slug: updated.slug });
  } catch { return NextResponse.json({ error: "Não autorizado ou dados inválidos." }, { status: 401 }); }
}
