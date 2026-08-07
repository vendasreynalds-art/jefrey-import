"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur relative">
      <div className="border-b border-border bg-primary">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 px-4 py-1.5 text-center text-[11px] font-medium text-white sm:justify-start sm:gap-2 sm:px-6 sm:text-xs lg:px-8">
          <ShieldCheck size={14} className="shrink-0" aria-hidden="true" />
          Garantia em todas as peças — entrega para todo o Brasil
        </div>
      </div>

      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="RaGi Parts"
            width={166}
            height={50}
            priority
            className="h-9 w-auto sm:h-11"
          />
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
            className="inline-flex items-center rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-primary shadow-md transition-[opacity,transform] duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
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
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-white px-4 pb-6 pt-2 lg:hidden"
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
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-secondary/80">
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
                className="block rounded-lg bg-accent px-3 py-3 text-center text-base font-semibold text-primary shadow-md transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
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
