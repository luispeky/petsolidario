import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { pets } from "@/lib/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return pets.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const pet = pets.find((item) => item.id === id);
  return { title: pet ? `${pet.name} — adoção responsável` : "Animal para adoção" };
}

export default async function PetDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pet = pets.find((item) => item.id === id);
  if (!pet) notFound();

  return (
    <section className="container section">
      <Link href="/adocao" className="inline-flex items-center gap-2 font-bold text-forest"><ArrowLeft size={16} /> Voltar para adoção</Link>
      <div className="mt-6 grid items-start gap-8 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="min-h-[380px] rounded-3xl bg-[#e6f1e7] bg-cover bg-center" role="img" aria-label={`Imagem ilustrativa de ${pet.name}`} style={{ backgroundImage: `url("${pet.imageUrl}")` }} />
          <div className="mt-6">
            <p className="eyebrow">Perfil de adoção</p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-forest">{pet.name}</h1>
            <p className="mt-2 text-lg text-[#66766e]">{pet.breed} · {pet.age} · {pet.sex} · porte {pet.size}</p>
            <p className="mt-4 leading-7">{pet.description}</p>
            <p className="mt-4 flex items-center gap-1 text-sm text-[#66766e]"><MapPin size={15} /> {pet.city}, {pet.state} · {pet.organization.name}</p>
            <p className="mt-5 rounded-xl bg-[#f8f5ed] p-4 text-sm leading-6 text-[#66766e]">A disponibilidade pode mudar. Confirme com a organização responsável as condições e as etapas para adoção.</p>
          </div>
        </div>
        <aside className="card p-6">
          <h2 className="text-2xl font-black text-forest">Adoção responsável</h2>
          <p className="mt-3 text-sm leading-6 text-[#66766e]">Uma adoção deve ser combinada diretamente com a organização responsável, com tempo para conversar sobre rotina, cuidados e adaptação.</p>
          <Link className="btn mt-6 w-full gap-2 rounded-xl" href="/contatos-mediados">Orientações para contato <ArrowRight size={16} /></Link>
          <Link className="mt-4 block text-center text-sm font-bold text-forest" href={`/organizacoes/${pet.organization.slug}`}>Conhecer a organização</Link>
        </aside>
      </div>
    </section>
  );
}
