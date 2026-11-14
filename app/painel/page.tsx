import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Painel da organização" };

export default function DashboardPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-xl rounded-3xl bg-[#edf5eb] p-8 text-center sm:p-12">
        <p className="eyebrow">Painel da organização</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-forest">O painel exige um backend.</h1>
        <p className="mt-4 text-sm leading-6 text-[#66766e]">Esta publicação no GitHub Pages é somente estática. Cadastros, atualizações e mensagens não ficam disponíveis aqui.</p>
        <Link className="btn mt-6 rounded-xl" href="/login">Voltar à área das organizações</Link>
      </div>
    </section>
  );
}
