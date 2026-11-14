import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Encontrei um animal" };

const steps = [
  ["01", "Priorize a segurança", "Observe o local e aproxime-se com calma. Evite movimentar o animal se ele estiver ferido."],
  ["02", "Procure atendimento", "Uma avaliação veterinária ajuda a identificar urgências e os próximos cuidados."],
  ["03", "Peça apoio à rede", "Compartilhe a localização e a situação para encontrar ajuda, transporte ou acolhimento."],
];

export default function RescuePage() {
  return (
    <section className="container section">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Encontrou ou resgatou um animal?</p>
        <h1 className="mt-3 font-serif text-5xl font-bold leading-tight tracking-tight text-forest">O cuidado começa com um próximo passo.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#66766e]">
          Reunir informações claras ajuda protetores e pessoas da comunidade a entender o que está acontecendo e como podem colaborar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn gap-2 rounded-xl" href="/contato">Pedir apoio <ArrowRight size={17} /></Link>
          <Link className="btn btn-outline gap-2 rounded-xl" href="/lar-temporario"><HeartHandshake size={17} /> Conhecer lares temporários</Link>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map(([number, title, description]) => (
          <article className="card p-6" key={number}>
            <span className="journey-number">{number}</span>
            <h2 className="mt-5 text-xl font-black text-forest">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#66766e]">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-5 rounded-3xl bg-[#edf5eb] p-7 md:grid-cols-[auto_1fr] md:items-center md:p-9">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-forest"><ShieldCheck size={26} /></span>
        <div>
          <h2 className="text-xl font-black text-forest">Compartilhe informações úteis</h2>
          <p className="mt-2 text-sm leading-6 text-[#66766e]"><MapPin className="mr-1 inline" size={15} /> Informe o bairro ou um ponto de referência, descreva o estado do animal e, se for seguro, inclua uma foto recente.</p>
        </div>
      </div>
      <p className="mt-5 text-xs leading-5 text-[#78847e]">Se houver risco imediato para pessoas ou para o animal, procure os serviços locais de emergência e atendimento veterinário.</p>
    </section>
  );
}
