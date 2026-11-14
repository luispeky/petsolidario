import { NextResponse } from "next/server";
import { requireOrganization } from "@/lib/auth";
import { storeImage } from "@/lib/blob";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    await requireOrganization();
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) return NextResponse.json({ error: "Envie um arquivo de imagem." }, { status: 400 });
    return NextResponse.json({ url: await storeImage(file) }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Falha no envio.";
    return NextResponse.json({ error: message === "UNAUTHORIZED" ? "Faça login para continuar." : message }, { status: message === "UNAUTHORIZED" ? 401 : 400 });
  }
}
