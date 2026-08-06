import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CATEGORIAS } from "@/data/categorias";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-lg font-bold text-white cursor-pointer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
              RG
            </span>
            RaGi Import
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Importação direta de peças automotivas — faróis, lanternas,
            componentes de motor, lâmpadas, multimídia e itens de tunning,
            com compatibilidade verificada e entrega para todo o Brasil.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.instagram}
              className="flex h-9 items-center justify-center rounded-lg bg-white/10 px-3 text-xs font-semibold transition-colors duration-200 hover:bg-white/20 cursor-pointer"
            >
              Instagram
            </a>
            <a
              href={SITE.facebook}
              className="flex h-9 items-center justify-center rounded-lg bg-white/10 px-3 text-xs font-semibold transition-colors duration-200 hover:bg-white/20 cursor-pointer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Categorias
          </h3>
          <ul className="mt-4 space-y-2.5">
            {CATEGORIAS.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/pecas?categoria=${cat.slug}`}
                  className="text-sm transition-colors duration-200 hover:text-white cursor-pointer"
                >
                  {cat.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Links Rápidos
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/pecas" className="text-sm transition-colors duration-200 hover:text-white cursor-pointer">
                Catálogo de Peças
              </Link>
            </li>
            <li>
              <Link href="/como-funciona" className="text-sm transition-colors duration-200 hover:text-white cursor-pointer">
                Como Funciona
              </Link>
            </li>
            <li>
              <Link href="/orcamento" className="text-sm transition-colors duration-200 hover:text-white cursor-pointer">
                Solicitar Orçamento
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-sm transition-colors duration-200 hover:text-white cursor-pointer">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="text-sm transition-colors duration-200 hover:text-white cursor-pointer">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="text-sm transition-colors duration-200 hover:text-white cursor-pointer">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {SITE.telefone}
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {SITE.email}
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {SITE.endereco}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-400 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {SITE.nome}. Todos os direitos
          reservados. CNPJ {SITE.cnpj}.
        </div>
      </div>
    </footer>
  );
}
