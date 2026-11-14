import type { Metadata } from "next";
import { PetCard } from "@/components/cards";
import { demoPets } from "@/lib/demo-content";

export const metadata: Metadata = { title: "Animais para adoção" };

export default function AdoptionPage() {
  return (
    <section className="container section">
      <p className="eyebrow">Amigos esperando por você</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div><h1 className="font-serif text-4xl font-bold text-forest">Adote com o coração.</h1><p className="mt-3 text-[#66766e]">Cada perfil é uma chance de começar uma história nova.</p></div>
        <span className="pill">{demoPets.length} perfis demonstrativos</span>
      </div>
      <p className="mt-5 rounded-xl bg-[#f8f5ed] p-4 text-sm leading-6 text-[#66766e]">Este protótipo usa perfis de exemplo. Eles não representam animais reais disponíveis para adoção.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{demoPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}</div>
    </section>
  );
}
