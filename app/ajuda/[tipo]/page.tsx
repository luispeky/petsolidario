import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";

const helpPages = {
  "doar-itens": {
    title: "Doe itens para apoiar o cuidado",
    intro: "Itens de uso diário ajudam organizações e protetores a manter o acolhimento com mais segurança.",
    suggestions: ["Ração adequada à espécie e à idade", "Medicamentos dentro do prazo e com embalagem identificada", "Caixas de transporte, guias, cobertores e produtos de higiene"],
    next: "Confirme com a organização quais itens são necessários antes de combinar a entrega.",
  },
  transporte: {
    title: "Ofereça transporte solidário",
    intro: "Uma carona segura pode aproximar um animal de uma consulta, de um local de acolhimento ou de uma família adotante.",
    suggestions: ["Informe a região em que pode atender", "Combine horário, origem e destino com antecedência", "Use caixa de transporte ou contenção adequada ao animal"],
    next: "Combine cada deslocamento diretamente com a organização responsável pelo caso.",
  },
  "atendimento-veterinario": {
    title: "Ofereça atendimento veterinário",
    intro: "Profissionais e clínicas podem ajudar com avaliação, orientação e atendimento conforme sua disponibilidade.",
    suggestions: ["Indique especialidades e serviços disponíveis", "Informe horários e região de atendimento", "Alinhe custos, urgências e condições diretamente com o responsável"],
    next: "A disponibilidade de atendimento deve ser confirmada diretamente com a clínica ou profissional.",
  },
  divulgar: {
    title: "Ajude a divulgar um caso",
    intro: "Compartilhar informações claras pode fazer um pedido de ajuda chegar a pessoas próximas que consigam colaborar.",
    suggestions: ["Use informações recentes e autorizadas pela pessoa responsável", "Inclua bairro ou ponto de referência, sem expor endereço residencial", "Atualize a publicação quando o caso mudar ou for resolvido"],
    next: "Confira os perfis e campanhas publicados para compartilhar informações corretas.",
  },
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(helpPages).map((tipo) => ({ tipo }));
}

export async function generateMetadata({ params }: { params: Promise<{ tipo: string }> }): Promise<Metadata> {
  const { tipo } = await params;
  const page = helpPages[tipo as keyof typeof helpPages];
  return { title: page?.title ?? "Formas de ajudar" };
}

export default async function HelpDetailPage({ params }: { params: Promise<{ tipo: string }> }) {
  const { tipo } = await params;
  const page = helpPages[tipo as keyof typeof helpPages];
  if (!page) notFound();

  return (
    <section className="container section">
      <Link href="/#ajudar" className="inline-flex items-center gap-2 text-sm font-bold text-forest"><ArrowLeft size={16} /> Todas as formas de ajudar</Link>
      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_.8fr]">
        <div>
          <p className="eyebrow">Participe da rede</p>
          <h1 className="mt-3 font-serif text-5xl font-bold leading-tight tracking-tight text-forest">{page.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#66766e]">{page.intro}</p>
          <Link className="btn mt-7 gap-2 rounded-xl" href="/contato">Falar com uma organização <ArrowRight size={16} /></Link>
        </div>
        <aside className="card p-6 sm:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#edf5ec] text-forest"><HeartHandshake size={23} /></span>
          <h2 className="mt-5 text-xl font-black text-forest">Como contribuir</h2>
          <ul className="mt-4 grid gap-3">
            {page.suggestions.map((suggestion) => <li className="flex gap-3 text-sm leading-6 text-[#66766e]" key={suggestion}><span className="mt-2 h-2 w-2 flex-none rounded-full bg-forest" />{suggestion}</li>)}
          </ul>
          <p className="mt-5 border-t border-[#edf0e9] pt-4 text-xs leading-5 text-[#78847e]">{page.next}</p>
        </aside>
      </div>
    </section>
  );
}
