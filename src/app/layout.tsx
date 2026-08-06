import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.nome} | Peças Automotivas Importadas`,
    template: `%s | ${SITE.nome}`,
  },
  description:
    "Importação direta de faróis, lanternas, peças de motor, lâmpadas, multimídia e itens de tunning, com compatibilidade verificada e entrega para todo o Brasil.",
  openGraph: {
    title: `${SITE.nome} | Peças Automotivas Importadas`,
    description:
      "Importação direta de peças automotivas com compatibilidade verificada. Solicite seu orçamento.",
    url: SITE.url,
    siteName: SITE.nome,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
