import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Contato e voluntariado" };

export default function ContactPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Conexões que fazem bem</p>
        <h1 className="mt-3 font-serif text-5xl font-bold leading-tight text-forest">A gente aproxima quem quer ajudar.</h1>
        <p className="mt-5 max-w-2xl leading-7 text-[#66766e]">Esta versão estática é uma demonstração visual. Os formulários não enviam mensagens; por isso, não pedimos dados pessoais nesta página.</p>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <Link href="/organizacoes" className="card p-6 transition hover:-translate-y-1">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#edf5ec] text-forest"><Mail size={22} /></span>
          <h2 className="mt-4 text-xl font-black text-forest">Conheça as organizações</h2>
          <p className="mt-2 text-sm leading-6 text-[#66766e]">Veja o perfil ilustrativo e saiba como contatos mediados funcionarão quando houver uma instalação com backend.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-forest">Ver organizações <ArrowRight size={16} /></span>
        </Link>
        <Link href="/contatos-mediados" className="card p-6 transition hover:-translate-y-1">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#edf5ec] text-forest"><ShieldCheck size={22} /></span>
          <h2 className="mt-4 text-xl font-black text-forest">Como funcionam os contatos</h2>
          <p className="mt-2 text-sm leading-6 text-[#66766e]">Entenda como adoção, voluntariado e pedidos de ajuda devem ser combinados com responsabilidade.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-forest">Saiba mais <ArrowRight size={16} /></span>
        </Link>
      </div>
    </section>
  );
}
