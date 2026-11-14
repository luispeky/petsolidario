import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Contatos mediados" };

export default function MediatedContactsPage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl rounded-3xl bg-[#edf5eb] p-8 sm:p-12">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-forest"><ShieldCheck size={26} /></span>
        <p className="eyebrow mt-6">Comunicação responsável</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-forest">Orientações de contato</h1>
        <p className="mt-5 text-sm leading-7 text-[#66766e]">O site divulga informações, mas não encaminha mensagens nem solicitações. Para falar sobre adoção, acolhimento, campanhas ou atendimento, utilize os canais oficiais do Pet Solidário e confirme a disponibilidade e os detalhes diretamente com a equipe.</p>
        <p className="mt-4 text-xs leading-6 text-[#78847e]">Não envie pagamentos por meio deste site. Verifique a identidade do destinatário e as formas oficiais de contribuição antes de compartilhar dados ou recursos.</p>
        <Link className="btn mt-7 gap-2 rounded-xl" href="/organizacoes">Conhecer organizações <ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}
