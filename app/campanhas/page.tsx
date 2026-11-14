import type { Metadata } from "next";
import { db } from "@/lib/db";
import { CampaignCard } from "@/components/cards";
import { PublicDataState } from "@/components/public-data-state";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Campanhas solidárias" };
export default async function CampaignsPage() {
  if (!process.env.DATABASE_URL) {
    return <PublicDataState title="As campanhas ainda não estão conectadas." description="As campanhas reais serão listadas quando o banco de dados estiver configurado. Não envie doações sem confirmar diretamente com uma organização responsável." linkHref="/ajuda/doar-itens" linkLabel="Ver outras formas de ajudar" />;
  }
  const campaigns = await db.campaign.findMany({ include: { organization: { select: { name: true, slug: true, city: true, state: true } } }, orderBy: { createdAt: "desc" } });
  return <section className="container section"><p className="eyebrow">Juntos somos mais fortes</p><h1 className="mt-3 text-4xl font-black">Campanhas que viram cuidado.</h1><p className="mt-3 max-w-2xl text-[#66766e]">Conheça as causas e veja como ajudar. Cada campanha informa diretamente as formas de doação da organização.</p>
    {campaigns.length ? <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{campaigns.map(c => <CampaignCard key={c.id} campaign={c} />)}</div> : <div className="mt-9 rounded-3xl border-2 border-dashed border-[#dce5dc] p-14 text-center"><div className="text-5xl">💛</div><h2 className="mt-4 text-2xl font-black">Nenhuma campanha ativa agora</h2><p className="mt-2 text-[#66766e]">Em breve, novas causas para apoiar.</p></div>}</section>;
}
