import type { Metadata } from "next";
import { db } from "@/lib/db";
import { PetCard } from "@/components/cards";
import { PublicDataState } from "@/components/public-data-state";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Animais para adoção" };
export default async function AdoptionPage() {
  if (!process.env.DATABASE_URL) {
    return <PublicDataState title="A lista de adoção ainda não está conectada." description="Os perfis reais aparecerão aqui quando o banco de dados for configurado. Enquanto isso, veja os perfis demonstrativos da página inicial." linkHref="/#animais" linkLabel="Ver perfis demonstrativos" />;
  }
  const pets = await db.pet.findMany({ where: { status: "AVAILABLE" }, include: { organization: { select: { name: true, slug: true } } }, orderBy: { createdAt: "desc" } });
  return <section className="container section"><p className="eyebrow">Amigos esperando por você</p><div className="mt-3 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-4xl font-black">Adote com o coração.</h1><p className="mt-3 text-[#66766e]">Cada perfil é uma chance de começar uma história nova.</p></div><span className="pill">{pets.length} {pets.length === 1 ? "animal" : "animais"}</span></div>
    {pets.length ? <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{pets.map(p => <PetCard key={p.id} pet={p} />)}</div> : <div className="mt-9 rounded-3xl border-2 border-dashed border-[#dce5dc] p-14 text-center"><div className="text-5xl">🐕</div><h2 className="mt-4 text-2xl font-black">Em breve, novos amigos por aqui!</h2><p className="mt-2 text-[#66766e]">Conheça as ONGs parceiras ou volte mais tarde.</p></div>}
  </section>;
}
