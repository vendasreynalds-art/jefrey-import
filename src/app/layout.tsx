import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Importadora | Soluções em Importação e Comércio Exterior",
  description:
    "Importadora especializada em comércio exterior, logística internacional e desembaraço aduaneiro para empresas que precisam de confiabilidade e agilidade.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
