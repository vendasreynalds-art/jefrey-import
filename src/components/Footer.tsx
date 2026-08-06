import { Ship } from "lucide-react";

const FOOTER_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a
            href="#top"
            className="flex items-center gap-2 font-heading text-lg font-semibold text-primary cursor-pointer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-on-primary">
              <Ship size={18} aria-hidden="true" />
            </span>
            Importadora
          </a>

          <nav aria-label="Rodapé" className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary transition-colors duration-200 hover:text-primary cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-8 text-sm text-secondary">
          © {new Date().getFullYear()} Importadora. Todos os direitos
          reservados. CNPJ 00.000.000/0001-00.
        </p>
      </div>
    </footer>
  );
}
