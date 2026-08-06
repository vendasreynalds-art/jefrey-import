import Link from "next/link";
import { SearchX, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-secondary">
        <SearchX size={32} aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-heading text-3xl font-bold text-primary">
        Página não encontrada
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-secondary">
        A página que você procura não existe ou foi movida. Que tal buscar a
        peça que você precisa no nosso catálogo?
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/pecas"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 cursor-pointer"
        >
          Ver Catálogo de Peças
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3.5 text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white cursor-pointer"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
