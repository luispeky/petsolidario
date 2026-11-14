import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { money } from "@/lib/format";
export const dynamic = "force-dynamic";
export default async function CampaignDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const campaign = await db.campaign.findUnique({ where: { id }, include: { organization: true } });
  if (!campaign) notFound();
  const progress = Math.min(100, Math.round(campaign.raisedCents / campaign.goalCents * 100));
  return <section className="container section"><Link href="/campanhas" className="font-bold text-forest">← Todas as campanhas</Link><div className="mt-6 grid items-start gap-8 md:grid-cols-[1fr_.8fr]">
    <div><div className="grid min-h-[350px] place-items-center rounded-3xl bg-[#f7e6bd]" style={campaign.imageUrl ? { backgroundImage: `url("${campaign.imageUrl}")`, backgroundPosition: "center", backgroundSize: "cover" } : undefined}>{!campaign.imageUrl && <span className="text-8xl">💛</span>}</div><p className="eyebrow mt-6">{campaign.organization.name} · {campaign.organization.city}/{campaign.organization.state}</p><h1 className="mt-2 text-4xl font-black">{campaign.title}</h1><p className="mt-5 whitespace-pre-wrap leading-7 text-[#40564c]">{campaign.description}</p>{campaign.endsAt && <p className="mt-4 text-sm text-[#66766e]">Campanha até {campaign.endsAt.toLocaleDateString("pt-BR")}</p>}</div>
    <aside className="card p-6"><h2 className="text-xl font-black">Ajude essa causa</h2><div className="mt-5 flex justify-between"><b className="text-2xl">{money(campaign.raisedCents)}</b><span className="text-sm text-[#66766e]">de {money(campaign.goalCents)}</span></div><div className="mt-3 h-3 overflow-hidden rounded-full bg-[#edf0e9]"><div className="h-full bg-coral" style={{ width: `${progress}%` }} /></div><p className="mt-2 text-sm text-[#66766e]">{progress}% da meta alcançada</p><div className="mt-6 rounded-2xl bg-[#edf6ee] p-5"><h3 className="font-extrabold">Como doar</h3><p className="mt-2 whitespace-pre-wrap text-sm leading-6">{campaign.donationInstructions}</p></div><p className="mt-5 text-xs text-[#66766e]">As doações são realizadas diretamente com a organização. Esta plataforma não processa pagamentos.</p><Link href={`/organizacoes/${campaign.organization.slug}`} className="btn btn-outline mt-5 w-full">Conheça a organização</Link></aside>
  </div></section>;
}
