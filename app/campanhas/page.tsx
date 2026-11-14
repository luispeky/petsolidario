import type { Metadata } from "next";
import { CampaignCard } from "@/components/cards";
import { demoCampaigns } from "@/lib/demo-content";

export const metadata: Metadata = { title: "Campanhas solidárias" };

export default function CampaignsPage() {
  return (
    <section className="container section">
      <p className="eyebrow">Juntos somos mais fortes</p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-forest">Campanhas que viram cuidado.</h1>
      <p className="mt-3 max-w-2xl text-[#66766e]">Conheça como organizações podem apresentar suas causas e formas de apoio.</p>
      <p className="mt-5 rounded-xl bg-[#f8f5ed] p-4 text-sm leading-6 text-[#66766e]">As campanhas desta versão são demonstrativas. Não faça transferências nem envie doações com base nestes exemplos.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{demoCampaigns.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} />)}</div>
    </section>
  );
}
