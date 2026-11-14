import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { money } from "@/lib/format";
import { campaigns } from "@/lib/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return campaigns.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const campaign = campaigns.find((item) => item.id === id);
  return { title: campaign ? `${campaign.title} — Pet Solidário` : "Campanha solidária" };
}

export default async function CampaignDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const campaign = campaigns.find((item) => item.id === id);
  if (!campaign) notFound();

  const progress = Math.min(100, Math.round(campaign.raisedCents / campaign.goalCents * 100));
  return (
    <section className="container section">
      <Link href="/campanhas" className="inline-flex items-center gap-2 font-bold text-forest"><ArrowLeft size={16} /> Todas as campanhas</Link>
      <div className="mt-6 grid items-start gap-8 md:grid-cols-[1fr_.8fr]">
        <div>
          <div className="min-h-[350px] rounded-3xl bg-[#f7e6bd] bg-cover bg-center" role="img" aria-label="Imagem ilustrativa da campanha" style={{ backgroundImage: `url("${campaign.imageUrl}")` }} />
          <p className="eyebrow mt-6">{campaign.organization.name} · {campaign.organization.city}/{campaign.organization.state}</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-forest">{campaign.title}</h1>
          <p className="mt-5 leading-7 text-[#40564c]">{campaign.description}</p>
          <p className="mt-5 rounded-xl bg-[#f8f5ed] p-4 text-sm leading-6 text-[#66766e]">Confirme o andamento da campanha e as formas oficiais de contribuição diretamente com a organização. Este site não processa pagamentos.</p>
        </div>
        <aside className="card p-6">
          <h2 className="text-xl font-black text-forest">Sobre os valores</h2>
          <div className="mt-5 flex justify-between"><b className="text-2xl">{money(campaign.raisedCents)}</b><span className="text-sm text-[#66766e]">de {money(campaign.goalCents)}</span></div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#edf0e9]"><div className="h-full bg-coral" style={{ width: `${progress}%` }} /></div>
          <p className="mt-2 text-sm text-[#66766e]">{progress}% da meta informada</p>
          <div className="mt-6 rounded-2xl bg-[#edf6ee] p-5"><h3 className="font-extrabold">Como ajudar</h3><p className="mt-2 text-sm leading-6">{campaign.donationInstructions}</p></div>
          <Link href={`/organizacoes/${campaign.organization.slug}`} className="btn btn-outline mt-5 w-full gap-2">Conheça a organização <ArrowRight size={16} /></Link>
        </aside>
      </div>
    </section>
  );
}
