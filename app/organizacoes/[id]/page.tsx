import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { CampaignCard, PetCard } from "@/components/cards";
import { demoCampaigns, demoOrganization, demoPets } from "@/lib/demo-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: demoOrganization.slug }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return { title: id === demoOrganization.slug ? `${demoOrganization.name} — perfil demonstrativo` : "Organização" };
}

export default async function OrganizationDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== demoOrganization.slug) notFound();

  return (
    <section className="container section">
      <Link href="/organizacoes" className="inline-flex items-center gap-2 font-bold text-forest"><ArrowLeft size={16} /> Todas as organizações</Link>
      <div className="card mt-6 p-7 md:p-10">
        <p className="eyebrow">Perfil demonstrativo</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-forest">{demoOrganization.name}</h1>
        <p className="mt-2 flex items-center gap-1 text-[#66766e]"><MapPin size={15} /> {demoOrganization.city}, {demoOrganization.state}</p>
        <p className="mt-6 max-w-3xl leading-7">{demoOrganization.description}</p>
        <p className="mt-5 rounded-xl bg-[#f8f5ed] p-4 text-sm leading-6 text-[#66766e]">Este perfil é ilustrativo. Não envie mensagens nem doações para uma organização real com base nestes dados.</p>
        <Link href="/contatos-mediados" className="btn btn-outline mt-5 gap-2">Sobre os contatos <ArrowRight size={16} /></Link>
      </div>
      <div className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-forest">Perfis demonstrativos de animais</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{demoPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}</div>
      </div>
      <div className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-forest">Campanhas demonstrativas</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{demoCampaigns.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} />)}</div>
      </div>
    </section>
  );
}
