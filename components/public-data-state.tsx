import Link from "next/link";
import { ArrowRight, Database } from "lucide-react";

export function PublicDataState({
  title,
  description,
  linkHref = "/",
  linkLabel = "Voltar ao início",
}: {
  title: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
}) {
  return (
    <section className="container section">
      <div className="mx-auto max-w-2xl rounded-3xl border border-[#e1e9e1] bg-white p-8 text-center shadow-card sm:p-12">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#edf5ec] text-forest">
          <Database size={25} />
        </span>
        <p className="eyebrow mt-6">Pet Solidário · Protótipo acadêmico</p>
        <h1 className="mt-3 font-serif text-3xl font-bold text-forest">{title}</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#66766e]">{description}</p>
        <Link className="btn mt-6 gap-2 rounded-xl" href={linkHref}>{linkLabel}<ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}
