import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Política de privacidade" };

export default function PrivacyPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Transparência</p>
        <h1 className="mt-3 font-serif text-5xl font-bold text-forest">Privacidade</h1>
        <p className="mt-4 text-sm text-[#78847e]">Como este site institucional trata informações pessoais.</p>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-[#53665d]">
          <section><h2 className="text-lg font-black text-forest">Informações fornecidas neste site</h2><p className="mt-2">As páginas públicas não possuem formulários, login ou pagamentos e não recebem mensagens ou cadastros. Não envie dados pessoais em páginas públicas ou comentários de terceiros.</p></section>
          <section><h2 className="text-lg font-black text-forest">Canais externos</h2><p className="mt-2">Se você entrar em contato com o Pet Solidário por redes sociais, telefone ou outro serviço externo, o uso de seus dados seguirá também as regras do canal utilizado. Confirme se está falando com um perfil oficial antes de compartilhar informações.</p></section>
          <section><h2 className="text-lg font-black text-forest">Dúvidas e solicitações</h2><p className="mt-2">Para dúvidas sobre privacidade, procure os canais oficiais do Pet Solidário. Não compartilhe informações sensíveis até confirmar a identidade do destinatário e a necessidade do envio.</p></section>
        </div>
        <Link className="btn mt-8 rounded-xl" href="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
