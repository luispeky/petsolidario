import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Área das organizações" };

export default function LoginPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-xl rounded-3xl bg-[#edf5eb] p-8 text-center sm:p-12">
        <p className="eyebrow">Área das organizações</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-forest">Acesso indisponível nesta versão estática.</h1>
        <p className="mt-4 text-sm leading-6 text-[#66766e]">O GitHub Pages hospeda apenas páginas estáticas; login e painel precisam de um servidor e banco de dados. O código do backend foi mantido no repositório, mas não é executado pelo Pages.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3"><Link className="btn rounded-xl" href="/">Voltar ao início</Link><Link className="btn btn-outline rounded-xl" href="/organizacoes">Ver o site demonstrativo</Link></div>
      </div>
    </section>
  );
}
