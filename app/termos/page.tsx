import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Termos de uso" };

export default function TermsPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Transparência</p>
        <h1 className="mt-3 font-serif text-5xl font-bold text-forest">Termos de uso</h1>
        <p className="mt-4 text-sm text-[#78847e]">Condições de uso do site institucional do Pet Solidário.</p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-[#53665d]">
          <section><h2 className="text-lg font-black text-forest">Finalidade</h2><p className="mt-2">Este site divulga informações sobre o trabalho do Pet Solidário em Belém/PA, animais para adoção, campanhas e formas de apoiar a proteção animal. As informações podem mudar; confirme a situação atual com a organização antes de tomar decisões.</p></section>
          <section><h2 className="text-lg font-black text-forest">Adoção e acolhimento</h2><p className="mt-2">A adoção e o acolhimento temporário dependem de avaliação e combinação com a organização responsável pelo animal. A publicação de um perfil não garante disponibilidade ou aprovação de uma adoção.</p></section>
          <section><h2 className="text-lg font-black text-forest">Doações e pagamentos</h2><p className="mt-2">Este site não recebe pedidos, doações ou pagamentos. Confirme as necessidades e as formas oficiais de contribuição diretamente com o Pet Solidário antes de enviar dinheiro ou itens.</p></section>
        </div>
        <Link className="btn mt-8 rounded-xl" href="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
