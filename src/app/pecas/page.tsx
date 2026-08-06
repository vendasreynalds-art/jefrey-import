import { Suspense } from "react";
import type { Metadata } from "next";
import { PECAS } from "@/data/pecas";
import { getCategoria } from "@/data/categorias";
import ProductCard from "@/components/ProductCard";
import CatalogFilters from "@/components/CatalogFilters";
import SortSelect from "@/components/SortSelect";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SearchX } from "lucide-react";

export const metadata: Metadata = {
  title: "Catálogo de Peças Automotivas Importadas",
  description:
    "Busque faróis, lanternas, peças de motor, lâmpadas, multimídia e itens de tunning por categoria, marca e modelo do veículo.",
};

type SearchParams = {
  categoria?: string;
  marca?: string;
  modelo?: string;
  tipo?: string;
  disponibilidade?: string;
  q?: string;
  sort?: string;
};

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const { categoria, marca, modelo, tipo, disponibilidade, q, sort } = params;

  let resultados = PECAS.filter((peca) => {
    if (categoria && peca.categoria !== categoria) return false;
    if (tipo && peca.tipo !== tipo) return false;
    if (disponibilidade && peca.disponibilidade !== disponibilidade)
      return false;
    if (marca && !peca.veiculosCompativeis.some((v) => v.marca === marca))
      return false;
    if (
      modelo &&
      !peca.veiculosCompativeis.some((v) => v.modelo === modelo)
    )
      return false;
    if (q) {
      const termo = q.toLowerCase();
      const combina =
        peca.nome.toLowerCase().includes(termo) ||
        peca.codigo.toLowerCase().includes(termo) ||
        peca.veiculosCompativeis.some(
          (v) =>
            v.marca.toLowerCase().includes(termo) ||
            v.modelo.toLowerCase().includes(termo),
        );
      if (!combina) return false;
    }
    return true;
  });

  if (sort === "nome") {
    resultados = [...resultados].sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (sort === "recentes") {
    resultados = [...resultados].sort((a, b) => Number(b.id) - Number(a.id));
  }

  const categoriaAtual = categoria ? getCategoria(categoria) : undefined;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: categoriaAtual ? categoriaAtual.nome : "Peças",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-primary">
            {categoriaAtual ? categoriaAtual.nome : "Catálogo de Peças"}
          </h1>
          <p className="mt-2 text-secondary">
            {categoriaAtual?.descricao ??
              "Encontre a peça certa por categoria, marca e modelo do veículo."}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <Suspense fallback={null}>
            <CatalogFilters />
          </Suspense>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-secondary">
                {resultados.length}{" "}
                {resultados.length === 1
                  ? "peça encontrada"
                  : "peças encontradas"}
              </p>
              <Suspense fallback={null}>
                <SortSelect />
              </Suspense>
            </div>

            {resultados.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {resultados.map((peca) => (
                  <ProductCard key={peca.id} peca={peca} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center rounded-xl border border-dashed border-border bg-white py-16 text-center">
                <SearchX size={40} className="text-secondary/50" aria-hidden="true" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-primary">
                  Nenhuma peça encontrada
                </h2>
                <p className="mt-2 max-w-sm text-sm text-secondary">
                  Tente remover alguns filtros ou{" "}
                  <a href="/orcamento" className="text-accent underline">
                    solicite um orçamento
                  </a>{" "}
                  — muitas peças são importadas sob encomenda.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
