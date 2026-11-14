import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Termos de uso" };

export default function TermsPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Transparência</p>
        <h1 className="mt-3 font-serif text-5xl font-bold text-forest">Termos de uso</h1>
        <p className="mt-4 text-sm text-[#78847e]">Informações sobre o uso do protótipo Pet Solidário.</p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-[#53665d]">
          <section><h2 className="text-lg font-black text-forest">Sobre a plataforma</h2><p className="mt-2">O Pet Solidário é um protótipo acadêmico para demonstrar formas de conectar pessoas, organizações de proteção animal e pedidos de apoio. Os perfis e indicadores identificados no site como demonstrativos não representam casos reais confirmados.</p></section>
          <section><h2 className="text-lg font-black text-forest">Informações e contatos</h2><p className="mt-2">Quando o serviço estiver configurado para uso real, as informações de animais, campanhas e organizações deverão ser mantidas atualizadas por seus responsáveis. Confirme dados e condições diretamente com a organização antes de tomar decisões.</p></section>
          <section><h2 className="text-lg font-black text-forest">Doações e decisões</h2><p className="mt-2">A plataforma não processa pagamentos. Doações são combinadas diretamente com a organização responsável. A adoção e o acolhimento temporário devem ser avaliados com responsabilidade pelas pessoas envolvidas.</p></section>
        </div>
        <Link className="btn mt-8 rounded-xl" href="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
