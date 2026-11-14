import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { createSession } from "@/lib/auth";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  password: z.string().min(10).max(100),
  city: z.string().trim().min(2).max(100),
  state: z.string().trim().length(2),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Confira os dados. A senha deve ter ao menos 10 caracteres." }, { status: 400 });
  const { name, email, password, city, state } = parsed.data;
  const slugBase = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  try {
    const organization = await db.organization.create({
      data: { name, email: email.toLowerCase(), passwordHash: await hash(password, 12), city, state: state.toUpperCase(), slug: `${slugBase}-${Math.random().toString(36).slice(2, 7)}`, description: "Conte um pouco sobre o trabalho da sua organização." },
    });
    await createSession(organization.id);
    return NextResponse.json({ id: organization.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Não foi possível criar a conta. Esse e-mail pode já estar cadastrado." }, { status: 409 });
  }
}
