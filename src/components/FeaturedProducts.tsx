import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPecasDestaque } from "@/data/pecas";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const destaques = getPecasDestaque();

  return (
    <section className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Peças em destaque
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Itens mais procurados por oficinas e entusiastas.
            </p>
          </div>
          <Link
            href="/pecas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:opacity-80 cursor-pointer"
          >
            Ver catálogo completo
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((peca) => (
            <ProductCard key={peca.id} peca={peca} />
          ))}
        </div>
      </div>
    </section>
  );
}
