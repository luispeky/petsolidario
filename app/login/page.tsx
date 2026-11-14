import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Área das organizações" };

export default function LoginPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-xl rounded-3xl bg-[#edf5eb] p-8 text-center sm:p-12">
        <p className="eyebrow">Área da equipe</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-forest">Acesso restrito à equipe do Pet Solidário.</h1>
        <p className="mt-4 text-sm leading-6 text-[#66766e]">A área interna não está disponível nesta publicação do site. O GitHub Pages hospeda conteúdo informativo, mas não executa login ou painel de gestão.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3"><Link className="btn rounded-xl" href="/">Voltar ao início</Link><Link className="btn btn-outline rounded-xl" href="/organizacoes">Conheça o Pet Solidário</Link></div>
      </div>
    </section>
  );
}
