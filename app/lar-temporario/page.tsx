import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, House, PawPrint } from "lucide-react";

export const metadata: Metadata = { title: "Ofereça um lar temporário" };

const essentials = [
  ["Um espaço seguro", "Um ambiente protegido e adequado ao porte e às necessidades do animal."],
  ["Disponibilidade combinada", "Um período de acolhimento alinhado com a organização responsável."],
  ["Rede de apoio", "Orientação e contato para combinar alimentação, cuidados e acompanhamento."],
];

export default function FosterHomePage() {
  return (
    <section className="container section">
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="eyebrow">Acolhimento com responsabilidade</p>
          <h1 className="mt-3 font-serif text-5xl font-bold leading-tight tracking-tight text-forest">Um lar temporário pode mudar uma recuperação.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#66766e]">
            Oferecer um espaço seguro por um período combinado ajuda um animal a sair de uma situação difícil enquanto uma solução permanente é organizada.
          </p>
          <Link className="btn mt-7 gap-2 rounded-xl" href="/contato">Quero oferecer acolhimento <ArrowRight size={17} /></Link>
        </div>
        <div className="grid min-h-[300px] place-items-center rounded-[28px] bg-[#e6f1e7] p-8 text-center">
          <div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-forest"><House size={30} /></span>
            <p className="mx-auto mt-5 max-w-sm font-serif text-2xl font-bold leading-snug text-forest">Um espaço temporário pode ser o começo de uma nova história.</p>
            <p className="mt-3 text-sm text-[#66766e]">Cada acolhimento é combinado com cuidado.</p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <p className="eyebrow">Antes de acolher</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-forest">Combine o que funciona para você.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {essentials.map(([title, description], index) => (
            <article className="card p-6" key={title}>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf5ec] text-forest">
                {index === 0 ? <House size={20} /> : index === 1 ? <Heart size={20} /> : <PawPrint size={20} />}
              </span>
              <h3 className="mt-4 text-lg font-black text-forest">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#66766e]">{description}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-8 rounded-2xl bg-[#f8f5ed] p-5 text-sm leading-6 text-[#66766e]">
        O Pet Solidário é um protótipo acadêmico. Os exemplos e números exibidos no site são demonstrativos; disponibilidade de acolhimento deve ser confirmada diretamente com a organização responsável.
      </p>
    </section>
  );
}
