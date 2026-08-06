"use client";

import { useState } from "react";
import { Menu, X, Ship } from "lucide-react";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-heading text-lg font-semibold text-primary cursor-pointer"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-on-primary">
            <Ship size={18} aria-hidden="true" />
          </span>
          Importadora
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary transition-colors duration-200 hover:text-primary cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
          >
            Solicitar Cotação
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-primary transition-colors duration-200 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden cursor-pointer"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação móvel"
          className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-secondary transition-colors duration-200 hover:bg-muted hover:text-primary cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-accent px-3 py-3 text-center text-base font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 cursor-pointer"
              >
                Solicitar Cotação
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
