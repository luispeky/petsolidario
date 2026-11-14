import { db } from "@/lib/db";
import Link from "next/link";
import { PublicDataState } from "@/components/public-data-state";
export const dynamic = "force-dynamic";
export default async function OrganizationsPage() {
  if (!process.env.DATABASE_URL) {
    return <PublicDataState title="A lista de organizações ainda não está conectada." description="Os perfis das organizações serão exibidos aqui quando o banco de dados estiver configurado. Este protótipo não inventa contatos ou cadastros reais." linkHref="/contatos-mediados" linkLabel="Como funcionam os contatos" />;
  }
  const organizations = await db.organization.findMany({ include: { _count: { select: { pets: { where: { status: "AVAILABLE" } }, campaigns: true } } }, orderBy: { name: "asc" } });
  return <section className="container section"><p className="eyebrow">Quem faz acontecer</p><h1 className="mt-3 text-4xl font-black">ONGs e protetores.</h1><p className="mt-3 text-[#66766e]">Conheça quem dedica tempo e carinho a mudar vidas.</p>
    {organizations.length ? <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{organizations.map(org => <Link href={`/organizacoes/${org.slug}`} key={org.id} className="card p-6 transition hover:-translate-y-1">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#e6f1e7] text-3xl">{org.imageUrl ? <span className="h-full w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url("${org.imageUrl}")` }} /> : "🐾"}</div><h2 className="mt-4 text-xl font-black">{org.name}</h2><p className="mt-1 text-sm text-[#66766e]">📍 {org.city}, {org.state}</p><p className="mt-4 line-clamp-3 text-sm leading-6 text-[#66766e]">{org.description}</p><p className="mt-5 text-sm font-bold text-forest">{org._count.pets} animais · {org._count.campaigns} campanhas →</p>
    </Link>)}</div> : <div className="mt-9 rounded-3xl border-2 border-dashed border-[#dce5dc] p-14 text-center"><div className="text-5xl">🌱</div><h2 className="mt-4 text-2xl font-black">Seja a primeira organização</h2><Link href="/login" className="btn mt-5">Cadastrar ONG ou protetor(a)</Link></div>}</section>;
}
