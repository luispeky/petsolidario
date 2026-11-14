import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

const COOKIE_NAME = "pet-solidario-session";
const secret = () => {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) throw new Error("AUTH_SECRET precisa ter ao menos 32 caracteres.");
  return new TextEncoder().encode(value);
};

export async function createSession(organizationId: string) {
  const token = await new SignJWT({ sub: organizationId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret());
  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
    path: "/", maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getSessionOrganization() {
  try {
    const token = (await cookies()).get(COOKIE_NAME)?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, secret());
    if (typeof payload.sub !== "string") return null;
    return await db.organization.findUnique({
      where: { id: payload.sub },
      select: { id: true, name: true, email: true, slug: true, city: true, state: true },
    });
  } catch {
    return null;
  }
}

export async function requireOrganization() {
  const organization = await getSessionOrganization();
  if (!organization) throw new Error("UNAUTHORIZED");
  return organization;
}

export async function destroySession() {
  (await cookies()).delete(COOKIE_NAME);
}
