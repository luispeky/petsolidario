import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { ContactForm } from "@/components/contact-form";
export const dynamic = "force-dynamic";
export default async function PetDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pet = await db.pet.findUnique({ where: { id }, include: { organization: true } });
  if (!pet) notFound();
  return <section className="container section"><Link href="/adocao" className="font-bold text-forest">← Voltar para adoção</Link><div className="mt-6 grid items-start gap-8 md:grid-cols-[1.1fr_.9fr]">
    <div><div className="grid min-h-[380px] place-items-center rounded-3xl bg-[#e6f1e7]" style={pet.imageUrl ? { backgroundImage: `url("${pet.imageUrl}")`, backgroundPosition: "center", backgroundSize: "cover" } : undefined}>{!pet.imageUrl && <span className="text-9xl">{pet.species.toLowerCase().includes("gato") ? "🐈" : "🐕"}</span>}</div><div className="mt-6"><p className="eyebrow">Conheça essa história</p><h1 className="mt-2 text-4xl font-black">{pet.name}</h1><p className="mt-2 text-lg text-[#66766e]">{pet.breed || pet.species} · {pet.age} · {pet.sex} · porte {pet.size}</p><p className="mt-4 leading-7">{pet.description}</p><p className="mt-4 text-sm text-[#66766e]">📍 {pet.city}, {pet.state} · <Link className="font-bold text-forest underline" href={`/organizacoes/${pet.organization.slug}`}>{pet.organization.name}</Link></p></div></div>
    <div className="card p-6"><h2 className="text-2xl font-black">Quer conhecer o {pet.name}?</h2><p className="mb-5 mt-2 text-sm text-[#66766e]">Envie uma mensagem para {pet.organization.name} e dê o primeiro passo.</p><ContactForm petId={pet.id} organizationId={pet.organizationId} /></div>
  </div></section>;
}
