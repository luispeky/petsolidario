import type { Metadata } from "next";
import { db } from "@/lib/db";
import { ContactForm } from "@/components/contact-form";
import { PublicDataState } from "@/components/public-data-state";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Contato e voluntariado" };
export default async function ContactPage() {
  if (!process.env.DATABASE_URL) {
    return <PublicDataState title="O formulário ainda não está conectado." description="Para não exibir um formulário que não conseguiria enviar sua mensagem, o contato será habilitado quando o banco de dados estiver configurado." linkHref="/contatos-mediados" linkLabel="Entender os contatos" />;
  }
  const organizations = await db.organization.findMany({ select: { id: true, name: true }, orderBy: { name: "asc" } });
  return <section className="container grid min-h-[65vh] items-center gap-10 py-12 md:grid-cols-2"><div><p className="eyebrow">Conexões que fazem bem</p><h1 className="mt-3 text-5xl font-black leading-tight">A gente aproxima quem quer ajudar.</h1><p className="mt-5 max-w-lg leading-7 text-[#66766e]">Quer ser voluntário, saber mais sobre uma adoção ou conversar com uma ONG? Escolha a organização e mande sua mensagem.</p><div className="mt-6 flex gap-3"><span className="pill">💚 Voluntariado</span><span className="pill">🐾 Adoção</span></div></div>
    <div className="card p-7"><h2 className="mb-5 text-2xl font-black">Envie uma mensagem</h2>{organizations.length ? <ContactForm organizations={organizations} /> : <div className="rounded-2xl bg-[#edf6ee] p-5 text-sm leading-6 text-[#66766e]">Ainda não há organizações cadastradas para contato. Volte em breve!</div>}</div></section>;
}
