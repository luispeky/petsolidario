import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Política de privacidade" };

export default function PrivacyPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Transparência</p>
        <h1 className="mt-3 font-serif text-5xl font-bold text-forest">Privacidade</h1>
        <p className="mt-4 text-sm text-[#78847e]">Como este protótipo trata informações enviadas pelo site.</p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-[#53665d]">
          <section><h2 className="text-lg font-black text-forest">Dados enviados</h2><p className="mt-2">Os formulários do projeto podem solicitar nome, e-mail, telefone, mensagem e informações relacionadas a uma organização ou animal. Evite enviar dados pessoais sensíveis; os exemplos desta versão são demonstrativos.</p></section>
          <section><h2 className="text-lg font-black text-forest">Finalidade</h2><p className="mt-2">Em uma instalação conectada, os dados dos formulários são usados para encaminhar solicitações às organizações responsáveis. Dados de acesso das organizações são usados para autenticação e gestão dos próprios cadastros.</p></section>
          <section><h2 className="text-lg font-black text-forest">Limites deste protótipo</h2><p className="mt-2">Esta versão acadêmica não substitui uma política de privacidade revisada para produção. Antes de coletar dados reais, a equipe responsável deve definir prazos de retenção, canal para solicitações de titulares e controles operacionais aplicáveis.</p></section>
        </div>
        <Link className="btn mt-8 rounded-xl" href="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
