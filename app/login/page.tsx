import { redirect } from "next/navigation";
import { getSessionOrganization } from "@/lib/auth";
import { AuthForm } from "@/components/auth-form";
export const dynamic = "force-dynamic";
export default async function LoginPage() {
  if (await getSessionOrganization()) redirect("/painel");
  return <section className="container grid min-h-[70vh] items-center gap-10 py-12 md:grid-cols-2"><div><p className="eyebrow">Área de quem cuida</p><h1 className="mt-3 text-5xl font-black leading-tight">Sua causa merece um espaço.</h1><p className="mt-5 max-w-md leading-7 text-[#66766e]">Cadastre animais para adoção, conte sua história e compartilhe campanhas com pessoas que querem ajudar.</p><div className="mt-7 flex flex-wrap gap-3"><span className="pill">🐾 Perfil da organização</span><span className="pill">💛 Campanhas</span><span className="pill">📨 Contatos</span></div></div>
    <div className="card mx-auto w-full max-w-md p-7"><h2 className="text-2xl font-black">Bem-vindo(a)!</h2><p className="mb-6 mt-2 text-sm text-[#66766e]">Entre ou crie uma conta para sua organização.</p><AuthForm /></div></section>;
}
