"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShieldCheck } from "lucide-react";
import { CATEGORIAS } from "@/data/categorias";
import SearchOverlay from "./SearchOverlay";

const NAV_LINKS = [
  { href: "/pecas", label: "Peças" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur relative">
      <div className="hidden border-b border-border bg-primary sm:block">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1.5 text-xs font-medium text-white sm:px-6 lg:px-8">
          <ShieldCheck size={14} aria-hidden="true" />
          Importação Direta — compatibilidade verificada em todas as peças
        </div>
      </div>

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-sm font-heading text-lg font-bold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-on-primary">
            RG
          </span>
          <span>
            RaGi <span className="text-accent">Import</span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-secondary transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Buscar peça"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-primary transition-colors duration-200 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
          >
            <Search size={20} aria-hidden="true" />
          </button>

          <Link
            href="/orcamento"
            className="hidden items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-[opacity,transform] duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex cursor-pointer"
          >
            Solicitar Orçamento
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-primary transition-colors duration-200 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden cursor-pointer"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação móvel"
          className="border-t border-border bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-secondary transition-colors duration-200 hover:bg-muted hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-border pt-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Categorias
              </p>
              {CATEGORIAS.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/pecas?categoria=${cat.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-secondary transition-colors duration-200 hover:bg-muted hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
                >
                  {cat.nome}
                </Link>
              ))}
            </li>
            <li className="mt-2">
              <Link
                href="/orcamento"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-accent px-3 py-3 text-center text-base font-semibold text-white shadow-md transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
              >
                Solicitar Orçamento
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {searchOpen && (
        <SearchOverlay onClose={() => setSearchOpen(false)} />
      )}
    </header>
  );
}
