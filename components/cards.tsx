import Link from "next/link";
import { money } from "@/lib/format";

type Pet = { id: string; name: string; species: string; breed: string | null; age: string; city: string; state: string; imageUrl: string | null; organization: { name: string; slug: string } };
type Campaign = { id: string; title: string; description: string; goalCents: number; raisedCents: number; imageUrl: string | null; organization: { name: string; slug: string; city: string; state: string } };
const fallback = "linear-gradient(145deg,#d9eee0,#f1c56b)";
export function PetCard({ pet }: { pet: Pet }) {
  return <Link href={`/adocao/${pet.id}`} className="card group block">
    <div className="relative grid h-56 place-items-center overflow-hidden bg-[#edf6ee]" role="img" aria-label={`Imagem ilustrativa de ${pet.name}`} style={pet.imageUrl ? { backgroundImage: `url("${pet.imageUrl}")`, backgroundPosition: "center", backgroundSize: "cover" } : { background: fallback }}>
      {!pet.imageUrl && <span className="text-8xl transition group-hover:scale-110">{pet.species.toLowerCase().includes("gato") ? "🐈" : "🐕"}</span>}<span className="absolute left-4 top-4 pill">Para adoção</span>
    </div>
    <div className="p-5"><div className="flex items-start justify-between"><div><h3 className="text-xl font-extrabold">{pet.name}</h3><p className="mt-1 text-sm text-[#66766e]">{pet.breed || pet.species} · {pet.age}</p></div><span className="text-2xl">♡</span></div>
      <p className="mt-4 border-t border-[#edf0e9] pt-4 text-sm text-[#66766e]">📍 {pet.city}, {pet.state} · {pet.organization.name}</p></div>
  </Link>;
}
export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const progress = Math.min(100, Math.round(campaign.raisedCents / campaign.goalCents * 100));
  return <Link href={`/campanhas/${campaign.id}`} className="card block">
    <div className="grid h-48 place-items-center bg-[#f7e6bd]" role="img" aria-label={`Imagem ilustrativa da campanha ${campaign.title}`} style={campaign.imageUrl ? { backgroundImage: `url("${campaign.imageUrl}")`, backgroundPosition: "center", backgroundSize: "cover" } : undefined}>{!campaign.imageUrl && <span className="text-7xl">💛</span>}</div>
    <div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-forest">{campaign.organization.name} · {campaign.organization.city}</p><h3 className="mt-2 text-xl font-extrabold">{campaign.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#66766e]">{campaign.description}</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#edf0e9]"><div className="h-full rounded-full bg-coral" style={{ width: `${progress}%` }} /></div>
      <div className="mt-2 flex justify-between text-xs text-[#66766e]"><span><b className="text-ink">{money(campaign.raisedCents)}</b> arrecadados</span><span>meta {money(campaign.goalCents)}</span></div>
    </div>
  </Link>;
}
