import Link from "next/link";
import { ArrowRight, Heart, MapPin, PawPrint, ShieldCheck } from "lucide-react";
import { pets } from "@/lib/site-content";

const journey = [
  ["01", "Proteção animal", "Promovemos o respeito e o cuidado com os animais em Belém."],
  ["02", "Apoio aos resgates", "Mobilizamos a comunidade para ajudar animais em situação de risco."],
  ["03", "Acolhimento", "Buscamos alternativas seguras para o cuidado e a recuperação."],
  ["04", "Saúde e bem-estar", "Incentivamos o acompanhamento veterinário responsável."],
  ["05", "Adoção consciente", "Divulgamos animais e orientamos famílias interessadas."],
  ["06", "Participação comunitária", "Cada pessoa pode contribuir de uma forma diferente."],
];

const waysToHelp = [
  ["R$", "Apoiar campanhas", "Conheça as necessidades e consulte os canais oficiais para contribuir.", "/campanhas"],
  ["□", "Doar itens", "Ração, medicamentos, caixas de transporte e produtos de higiene.", "/ajuda/doar-itens"],
  ["⌂", "Oferecer lar temporário", "Acolha um animal com orientação e responsabilidade.", "/lar-temporario"],
  ["↔", "Oferecer transporte", "Ajude em deslocamentos combinados com a organização.", "/ajuda/transporte"],
  ["+", "Apoiar a saúde", "Colabore com atendimento e orientação veterinária.", "/ajuda/atendimento-veterinario"],
  ["↗", "Divulgar", "Compartilhe informações autorizadas para ampliar o alcance dos casos.", "/ajuda/divulgar"],
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
              Somos uma organização de proteção animal com atuação em Belém/PA. Apoiamos resgates,
              adoções responsáveis e iniciativas comunitárias de cuidado.
            </p>
            <div className="home-hero-actions">
              <Link className="btn btn-cream" href="/adocao"><PawPrint size={17} /> Quero adotar</Link>
              <Link className="btn btn-hero-outline" href="/resgate"><ShieldCheck size={17} /> Resgatei um animal</Link>
              <Link className="btn btn-hero-outline" href="#ajudar"><Heart size={17} /> Quero ajudar</Link>
            </div>
            <div className="home-network-note"><span>P</span><span>E</span><span>T</span><p>Cuidado e proteção animal em Belém.</p></div>
          </div>
          <div
            className="home-hero-photo"
            role="img"
            aria-label="Imagem ilustrativa de um cachorro e um gato"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=90')" }}
          >
            <div className="home-photo-note"><span><Heart size={17} /></span><div><b>Um caso de cada vez</b><small>Com cuidado e responsabilidade.</small></div></div>
          </div>
        </div>
        <div className="container home-stats">
          <div><strong>Belém</strong><span>atuação local<br />no Pará</span></div>
          <div><strong>Adoção</strong><span>responsável e<br />consciente</span></div>
          <div><strong>Rede</strong><span>cuidado feito<br />em comunidade</span></div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container">
          <p className="eyebrow">Nosso compromisso</p>
          <h2 className="section-title">Proteção animal se constrói com cuidado coletivo.</h2>
          <p className="section-lead">Trabalhamos para aproximar a comunidade de iniciativas de resgate, acolhimento e adoção responsável.</p>
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
            <div><p className="eyebrow">Adoção responsável</p><h2 className="section-title">Conheça os animais divulgados pela nossa rede.</h2><p className="section-lead">Consulte cada perfil e confirme com a organização as condições e a disponibilidade para adoção.</p></div>
            <Link className="text-link" href="/adocao">Ver todos <ArrowRight size={16} /></Link>
          </div>
          <div className="demo-pet-grid">
            {pets.map((pet, index) => (
              <article className="demo-pet-card" key={pet.name}>
                <div className="demo-pet-photo" role="img" aria-label={`Imagem ilustrativa de ${pet.name}`} style={{ backgroundImage: `url("${pet.imageUrl}")` }}>
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
            <p>Um lar temporário oferece segurança e afeto enquanto a organização acompanha os próximos passos de cuidado. Cada acolhimento deve ser combinado conforme as necessidades do animal e a disponibilidade da família.</p>
            <Link className="btn" href="/lar-temporario">Oferecer lar temporário <ArrowRight size={17} /></Link>
          </div>
          <div className="foster-photo" role="img" aria-label="Imagem ilustrativa de dois cães brincando ao ar livre" />
        </div>
      </section>
    </>
  );
}
