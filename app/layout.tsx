import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/header";

export const metadata: Metadata = {
  title: { default: "Pet Solidário | Um lar muda tudo", template: "%s | Pet Solidário" },
  description: "Organização de proteção animal em Belém/PA. Conheça iniciativas de resgate, adoção responsável e formas de apoiar o cuidado.",
  applicationName: "Pet Solidário",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header /><main>{children}</main><Footer /></body></html>;
}
