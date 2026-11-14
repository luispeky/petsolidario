import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireOrganization } from "@/lib/auth";
import { petSchema } from "@/lib/validation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const where: Record<string, unknown> = {};
  if (searchParams.get("species")) where.species = { equals: searchParams.get("species"), mode: "insensitive" };
  if (searchParams.get("q")) where.name = { contains: searchParams.get("q"), mode: "insensitive" };
  const pets = await db.pet.findMany({
    where: { ...where, status: "AVAILABLE" },
    include: { organization: { select: { id: true, name: true, slug: true, city: true, state: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(pets);
}
export async function POST(request: Request) {
  try {
    const org = await requireOrganization();
    const parsed = petSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Dados do pet inválidos.", details: parsed.error.flatten() }, { status: 400 });
    const pet = await db.pet.create({ data: { ...parsed.data, breed: parsed.data.breed || null, imageUrl: parsed.data.imageUrl || null, state: parsed.data.state.toUpperCase(), organizationId: org.id } });
    return NextResponse.json(pet, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") return NextResponse.json({ error: "Faça login para continuar." }, { status: 401 });
    return NextResponse.json({ error: "Não foi possível cadastrar o pet." }, { status: 400 });
  }
}
