import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { demoCampaigns, demoOrganization, demoPets } from "@/lib/demo-content";

export default function OrganizationsPage() {
  return (
    <section className="container section">
      <p className="eyebrow">Quem faz acontecer</p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-forest">Organizações parceiras.</h1>
      <p className="mt-3 text-[#66766e]">Conheça quem dedica tempo e carinho a mudar vidas.</p>
      <p className="mt-5 rounded-xl bg-[#f8f5ed] p-4 text-sm leading-6 text-[#66766e]">O perfil abaixo é demonstrativo e não representa uma organização real.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Link href={`/organizacoes/${demoOrganization.slug}`} className="card p-6 transition hover:-translate-y-1">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#e6f1e7] text-3xl">🐾</div>
          <h2 className="mt-4 text-xl font-black">{demoOrganization.name}</h2>
          <p className="mt-1 flex items-center gap-1 text-sm text-[#66766e]"><MapPin size={14} /> {demoOrganization.city}, {demoOrganization.state}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#66766e]">{demoOrganization.description}</p>
          <p className="mt-5 text-sm font-bold text-forest">{demoPets.length} perfis de animais · {demoCampaigns.length} campanhas <ArrowRight className="ml-1 inline" size={14} /></p>
        </Link>
      </div>
    </section>
  );
}
