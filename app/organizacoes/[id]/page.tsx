import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { PetCard, CampaignCard } from "@/components/cards";
import { ContactForm } from "@/components/contact-form";
export const dynamic = "force-dynamic";
export default async function OrganizationDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const org = await db.organization.findUnique({ where: { slug: id }, include: { pets: { where: { status: "AVAILABLE" }, include: { organization: { select: { name: true, slug: true } } }, orderBy: { createdAt: "desc" } }, campaigns: { include: { organization: { select: { name: true, slug: true, city: true, state: true } } }, orderBy: { createdAt: "desc" } } } });
  if (!org) notFound();
  return <section className="container section"><Link href="/organizacoes" className="font-bold text-forest">← Todas as organizações</Link><div className="card mt-6 p-7 md:p-10"><p className="eyebrow">Organização parceira</p><h1 className="mt-3 text-4xl font-black">{org.name}</h1><p className="mt-2 text-[#66766e]">📍 {org.city}, {org.state}{org.phone ? ` · ${org.phone}` : ""}</p><p className="mt-6 max-w-3xl whitespace-pre-wrap leading-7">{org.description}</p></div>
    <div className="mt-12"><h2 className="text-2xl font-black">Animais para adoção</h2>{org.pets.length ? <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{org.pets.map(p => <PetCard key={p.id} pet={p} />)}</div> : <p className="mt-3 text-[#66766e]">Nenhum animal disponível no momento.</p>}</div>
    <div className="mt-12"><h2 className="text-2xl font-black">Campanhas</h2>{org.campaigns.length ? <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{org.campaigns.map(c => <CampaignCard key={c.id} campaign={c} />)}</div> : <p className="mt-3 text-[#66766e]">Nenhuma campanha publicada no momento.</p>}</div>
    <div className="mt-12 grid gap-8 md:grid-cols-2"><div><p className="eyebrow">Vamos conversar?</p><h2 className="mt-2 text-3xl font-black">Entre em contato.</h2><p className="mt-3 text-[#66766e]">Dúvidas, voluntariado ou vontade de ajudar? Mande uma mensagem para a equipe.</p></div><div className="card p-6"><ContactForm organizationId={org.id} /></div></div>
  </section>;
}
