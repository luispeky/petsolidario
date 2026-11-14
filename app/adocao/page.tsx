import type { Metadata } from "next";
import { PetCard } from "@/components/cards";
import { pets } from "@/lib/site-content";

export const metadata: Metadata = { title: "Animais para adoção" };

export default function AdoptionPage() {
  return (
    <section className="container section">
      <p className="eyebrow">Adoção responsável</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div><h1 className="font-serif text-4xl font-bold text-forest">Encontre um novo companheiro.</h1><p className="mt-3 text-[#66766e]">Conheça os animais divulgados pelo Pet Solidário e considere uma adoção consciente.</p></div>
        <span className="pill">{pets.length} perfis para conhecer</span>
      </div>
      <p className="mt-5 rounded-xl bg-[#f8f5ed] p-4 text-sm leading-6 text-[#66766e]">As imagens são ilustrativas. Confirme com a organização responsável a disponibilidade do animal e as etapas para adoção.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{pets.map((pet) => <PetCard key={pet.id} pet={pet} />)}</div>
    </section>
  );
}
