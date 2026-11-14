import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireOrganization } from "@/lib/auth";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Confira os campos e tente novamente." }, { status: 400 });
  let organizationId = parsed.data.organizationId || null;
  if (parsed.data.petId) {
    const pet = await db.pet.findUnique({ where: { id: parsed.data.petId }, select: { organizationId: true } });
    if (!pet) return NextResponse.json({ error: "Pet não encontrado." }, { status: 404 });
    organizationId = pet.organizationId;
  }
  if (organizationId && !(await db.organization.findUnique({ where: { id: organizationId }, select: { id: true } })))
    return NextResponse.json({ error: "Organização não encontrada." }, { status: 404 });
  const result = await db.contactRequest.create({ data: { ...parsed.data, email: parsed.data.email.toLowerCase(), organizationId } });
  return NextResponse.json({ id: result.id, message: "Mensagem enviada com sucesso!" }, { status: 201 });
}
export async function GET() {
  try {
    const org = await requireOrganization();
    return NextResponse.json(await db.contactRequest.findMany({ where: { organizationId: org.id }, orderBy: { createdAt: "desc" } }));
  } catch { return NextResponse.json({ error: "Não autorizado." }, { status: 401 }); }
}
export async function PATCH(request: Request) {
  try {
    const org = await requireOrganization();
    const body = await request.json();
    const schema = (await import("zod")).z.object({ id: (await import("zod")).z.string(), status: (await import("zod")).z.enum(["NEW", "IN_PROGRESS", "CLOSED"]) });
    const parsed = schema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    const result = await db.contactRequest.updateMany({ where: { id: parsed.data.id, organizationId: org.id }, data: { status: parsed.data.status } });
    return NextResponse.json({ updated: result.count > 0 }, { status: result.count ? 200 : 404 });
  } catch { return NextResponse.json({ error: "Não autorizado." }, { status: 401 }); }
}
