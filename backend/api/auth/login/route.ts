import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { createSession } from "@/lib/auth";

const schema = z.object({ email: z.string().email(), password: z.string().min(1) });
export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "E-mail ou senha inválidos." }, { status: 400 });
  const organization = await db.organization.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  if (!organization || !(await compare(parsed.data.password, organization.passwordHash)))
    return NextResponse.json({ error: "E-mail ou senha inválidos." }, { status: 401 });
  await createSession(organization.id);
  return NextResponse.json({ ok: true });
}
