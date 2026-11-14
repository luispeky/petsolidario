import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { CampaignCard, PetCard } from "@/components/cards";
import { campaigns, organization, pets } from "@/lib/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: organization.slug }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return { title: id === organization.slug ? `${organization.name} — proteção animal` : "Organização" };
}

export default async function OrganizationDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== organization.slug) notFound();

  return (
    <section className="container section">
      <Link href="/organizacoes" className="inline-flex items-center gap-2 font-bold text-forest"><ArrowLeft size={16} /> Todas as organizações</Link>
      <div className="card mt-6 p-7 md:p-10">
        <p className="eyebrow">Proteção animal em Belém/PA</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-forest">{organization.name}</h1>
        <p className="mt-2 flex items-center gap-1 text-[#66766e]"><MapPin size={15} /> {organization.city}, {organization.state}</p>
        <p className="mt-6 max-w-3xl leading-7">{organization.description}</p>
        <Link href="/contatos-mediados" className="btn btn-outline mt-5 gap-2">Orientações para contato <ArrowRight size={16} /></Link>
      </div>
      <div className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-forest">Animais divulgados para adoção</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{pets.map((pet) => <PetCard key={pet.id} pet={pet} />)}</div>
      </div>
      <div className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-forest">Campanhas de apoio</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{campaigns.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} />)}</div>
      </div>
    </section>
  );
}
