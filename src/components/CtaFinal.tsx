import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Não encontrou a peça que procura?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondary">
          Fale com nossa equipe comercial — muitas peças são importadas sob
          encomenda, mesmo que ainda não estejam no catálogo.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/orcamento"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-primary shadow-md transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
          >
            Solicitar Orçamento
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3.5 text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white cursor-pointer"
          >
            Falar com a equipe
          </Link>
        </div>
      </div>
    </section>
  );
}
