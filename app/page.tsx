import Link from "next/link";
import { ArrowRight, Heart, MapPin, PawPrint, ShieldCheck } from "lucide-react";
import { demoPets } from "@/lib/demo-content";

const journey = [
  ["01", "Encontrou ou resgatou", "Um caso é encontrado ou acolhido."],
  ["02", "Cadastre o animal", "Crie um registro simples e protegido."],
  ["03", "Solicite ajuda", "Indique a necessidade mais urgente."],
  ["04", "Encontre atendimento", "Localize uma possibilidade de suporte."],
  ["05", "Encontre lar temporário", "Conecte uma casa disponível."],
  ["06", "Adoção responsável", "Acompanhe a decisão com responsabilidade."],
];

const waysToHelp = [
  ["R$", "Doar", "Contribua para uma campanha de uma organização.", "/campanhas"],
  ["□", "Doar itens", "Ração, medicamentos, caixas de transporte e outros itens.", "/ajuda/doar-itens"],
  ["⌂", "Oferecer lar temporário", "Um espaço seguro enquanto o caso se estabiliza.", "/lar-temporario"],
  ["↔", "Oferecer transporte", "Ajude no deslocamento para clínica, lar ou adoção.", "/ajuda/transporte"],
  ["+", "Serviço veterinário", "Disponibilize atendimento e orientação profissional.", "/ajuda/atendimento-veterinario"],
  ["↗", "Divulgar", "Faça um caso chegar a mais pessoas da rede.", "/ajuda/divulgar"],
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-shape home-hero-shape-one" />
        <div className="home-hero-shape home-hero-shape-two" />
        <div className="container home-hero-content">
          <div className="home-hero-copy">
            <p className="eyebrow home-eyebrow">Proteção animal colaborativa · Belém/PA</p>
            <h1 className="display home-title">Um lar pode mudar uma vida.</h1>
            <p className="home-intro">
              Encontre um animal, ajude um resgate ou ofereça cuidado. O Pet Solidário conecta pessoas,
              protetores, clínicas e lares temporários.
            </p>
            <div className="home-hero-actions">
              <Link className="btn btn-cream" href="/adocao"><PawPrint size={17} /> Quero adotar</Link>
              <Link className="btn btn-hero-outline" href="/resgate"><ShieldCheck size={17} /> Resgatei um animal</Link>
              <Link className="btn btn-hero-outline" href="#ajudar"><Heart size={17} /> Quero ajudar</Link>
            </div>
            <div className="home-network-note"><span>R</span><span>L</span><span>C</span><p>Uma rede que organiza o cuidado, passo a passo.</p></div>
          </div>
          <div
            className="home-hero-photo"
            role="img"
            aria-label="Cachorro e gato acolhidos juntos"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=90')" }}
          >
            <div className="home-photo-note"><span><Heart size={17} /></span><div><b>Um caso de cada vez</b><small>Com cuidado e responsabilidade.</small></div></div>
          </div>
        </div>
        <div className="container home-stats">
          <div><strong>6</strong><span>etapas conectadas<br />num único percurso</span></div>
          <div><strong>1</strong><span>plataforma para reunir<br />ajuda de forma segura</span></div>
          <div><strong>100%</strong><span>dados apresentados como<br />demonstrativos</span></div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container">
          <p className="eyebrow">Como a rede funciona</p>
          <h2 className="section-title">Cada encontro merece um próximo passo.</h2>
          <p className="section-lead">Do primeiro pedido de ajuda à adoção responsável, mantemos o cuidado visível para quem pode colaborar.</p>
          <div className="journey-grid">
            {journey.map(([number, title, description]) => (
              <article className="journey-step" key={number}>
                <span className="journey-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pets-section" id="animais">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow">Animais à espera</p><h2 className="section-title">Conheça quem procura um novo começo.</h2><p className="section-lead">Os perfis abaixo são demonstrativos para este protótipo acadêmico.</p></div>
            <Link className="text-link" href="/adocao">Ver todos <ArrowRight size={16} /></Link>
          </div>
          <div className="demo-pet-grid">
            {demoPets.map((pet, index) => (
              <article className="demo-pet-card" key={pet.name}>
                <div className="demo-pet-photo" role="img" aria-label={`Foto demonstrativa de ${pet.name}`} style={{ backgroundImage: `url("${pet.imageUrl}")` }}>
                  <span className={`pet-status ${index === 2 ? "pet-status-waiting" : ""}`}>{index === 2 ? "Em atendimento" : "Disponível"}</span>
                  <span className="pet-code">PS-00000{index + 1}</span>
                </div>
                <div className="demo-pet-info">
                  <p className="demo-pet-species">{pet.displaySpecies}</p>
                  <div className="demo-pet-name-row"><h3>{pet.name}</h3><Heart size={18} /></div>
                  <div className="demo-pet-tags"><span>{pet.age}</span><span>{pet.size}</span></div>
                  <p className="demo-pet-location"><MapPin size={14} /> {pet.city}</p>
                  <Link href={`/adocao/${pet.id}`} className="demo-pet-link">Conhecer {pet.name}<ArrowRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section help-section" id="ajudar">
        <div className="container">
          <p className="eyebrow">A sua ajuda conta</p>
          <h2 className="section-title">Existem muitas formas de fazer parte.</h2>
          <div className="help-grid">
            {waysToHelp.map(([icon, title, description, href]) => (
              <Link href={href} className="help-card" key={title}>
                <span className="help-icon">{icon}</span><span><b>{title}</b><small>{description}</small></span><ArrowRight className="help-arrow" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section foster-section">
        <div className="container foster-card">
          <div className="foster-copy">
            <p className="eyebrow">Quer abrir espaço para um caso?</p>
            <h2>Um lar temporário pode mudar a história de uma recuperação.</h2>
            <p>Registe o que pode acolher, a estrutura que tem e o período disponível. A plataforma sugere compatibilidades simples para cada situação.</p>
            <Link className="btn" href="/lar-temporario">Oferecer lar temporário <ArrowRight size={17} /></Link>
          </div>
          <div className="foster-photo" role="img" aria-label="Dois cães brincando ao ar livre" />
        </div>
      </section>
    </>
  );
}
