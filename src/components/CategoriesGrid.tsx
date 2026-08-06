import Link from "next/link";
import { CATEGORIAS } from "@/data/categorias";
import { CATEGORIA_ICONS } from "@/components/categoriaIcons";

export default function CategoriesGrid() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Encontre por categoria
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Navegue pelo catálogo organizado por tipo de peça.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-6">
          {CATEGORIAS.map((cat) => {
            const Icon = CATEGORIA_ICONS[cat.slug];
            return (
              <Link
                key={cat.slug}
                href={`/pecas?categoria=${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg cursor-pointer"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-semibold text-primary">
                  {cat.nome}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
