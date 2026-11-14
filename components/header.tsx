import Link from "next/link";
import { Heart, PawPrint, ShieldCheck } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Pet Solidário - início">
          <span className="brand-mark"><PawPrint size={20} /></span>
          <span className="brand-name">pet<small>solidário</small></span>
        </Link>
        <nav className="site-nav" aria-label="Navegação principal">
          <Link href="/adocao">Adote</Link>
          <Link href="/resgate">Resgate</Link>
          <Link href="/#ajudar">Quero ajudar</Link>
          <Link href="/lar-temporario">Lar temporário</Link>
          <Link href="/campanhas">Campanhas</Link>
        </nav>
        <div className="header-actions">
          <Link className="header-login" href="/login">Entrar</Link>
          <Link className="btn header-cta" href="/adocao">Encontrar um lar</Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="brand footer-brand" aria-label="Pet Solidário - início">
              <span className="brand-mark"><PawPrint size={20} /></span>
              <span className="brand-name">pet<small>solidário</small></span>
            </Link>
            <p>Da rua para um cuidado seguro. Ligamos pessoas, casos e possibilidades de apoio em Belém/PA.</p>
            <span className="demo-badge">Dados demonstrativos <i /> Protótipo acadêmico</span>
          </div>
          <div className="footer-column"><h2>Encontre</h2><Link href="/adocao">Adotar</Link><Link href="/resgate">Perdidos e encontrados</Link><Link href="/organizacoes">Organizações parceiras</Link></div>
          <div className="footer-column"><h2>Participe</h2><Link href="/resgate">Registar um resgate</Link><Link href="/lar-temporario">Oferecer lar temporário</Link><Link href="/#ajudar">Outras formas de ajudar</Link></div>
          <div className="footer-column"><h2>Transparência</h2><Link href="/termos">Termos de uso</Link><Link href="/privacidade">Política de privacidade</Link><Link href="/contatos-mediados"><ShieldCheck size={14} /> Contatos mediados</Link></div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pet Solidário — Protótipo acadêmico.</p>
          <p><Heart size={14} /> Feito para mobilizar cuidado.</p>
        </div>
      </div>
    </footer>
  );
}
