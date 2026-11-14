import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { campaigns, organization, pets } from "@/lib/site-content";

export default function OrganizationsPage() {
  return (
    <section className="container section">
      <p className="eyebrow">Nossa organização</p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-forest">Conheça o Pet Solidário.</h1>
      <p className="mt-3 text-[#66766e]">Atuação em Belém/PA pela proteção animal e pela adoção responsável.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Link href={`/organizacoes/${organization.slug}`} className="card p-6 transition hover:-translate-y-1">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#e6f1e7] text-3xl">🐾</div>
          <h2 className="mt-4 text-xl font-black">{organization.name}</h2>
          <p className="mt-1 flex items-center gap-1 text-sm text-[#66766e]"><MapPin size={14} /> {organization.city}, {organization.state}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#66766e]">{organization.description}</p>
          <p className="mt-5 text-sm font-bold text-forest">{pets.length} perfis de animais · {campaigns.length} campanhas <ArrowRight className="ml-1 inline" size={14} /></p>
        </Link>
      </div>
    </section>
  );
}
