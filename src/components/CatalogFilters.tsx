"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { CATEGORIAS } from "@/data/categorias";
import { MARCAS, MARCAS_VEICULOS } from "@/data/veiculos";

const TIPOS = [
  { value: "original", label: "Original" },
  { value: "paralelo", label: "Paralelo" },
  { value: "esportivo", label: "Esportivo / Tunning" },
];

const DISPONIBILIDADES = [
  { value: "estoque", label: "Em estoque" },
  { value: "consulta", label: "Sob consulta" },
  { value: "encomenda", label: "Importação sob encomenda" },
];

export default function CatalogFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categoria = searchParams.get("categoria") ?? "";
  const marca = searchParams.get("marca") ?? "";
  const modelo = searchParams.get("modelo") ?? "";
  const tipo = searchParams.get("tipo") ?? "";
  const disponibilidade = searchParams.get("disponibilidade") ?? "";
  const q = searchParams.get("q") ?? "";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    if (key === "marca") params.delete("modelo");
    router.push(`/pecas?${params.toString()}`);
  }

  function limparFiltros() {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    router.push(`/pecas?${params.toString()}`);
    setDrawerOpen(false);
  }

  const temFiltroAtivo = Boolean(
    categoria || marca || modelo || tipo || disponibilidade,
  );

  const conteudo = (
    <div className="space-y-7">
      <div>
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Categoria
        </h3>
        <ul className="mt-3 space-y-1">
          <li>
            <button
              type="button"
              onClick={() => updateParam("categoria", "")}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200 cursor-pointer ${
                !categoria
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-muted"
              }`}
            >
              Todas as categorias
            </button>
          </li>
          {CATEGORIAS.map((cat) => (
            <li key={cat.slug}>
              <button
                type="button"
                onClick={() => updateParam("categoria", cat.slug)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200 cursor-pointer ${
                  categoria === cat.slug
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-muted"
                }`}
              >
                {cat.nome}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label htmlFor="filtro-marca" className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Marca do veículo
        </label>
        <select
          id="filtro-marca"
          value={marca}
          onChange={(e) => updateParam("marca", e.target.value)}
          className="mt-3 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Todas as marcas</option>
          {MARCAS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filtro-modelo" className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Modelo
        </label>
        <select
          id="filtro-modelo"
          value={modelo}
          onChange={(e) => updateParam("modelo", e.target.value)}
          disabled={!marca}
          className="mt-3 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:bg-muted"
        >
          <option value="">Todos os modelos</option>
          {(MARCAS_VEICULOS[marca] ?? []).map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filtro-tipo" className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Tipo
        </label>
        <select
          id="filtro-tipo"
          value={tipo}
          onChange={(e) => updateParam("tipo", e.target.value)}
          className="mt-3 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Todos os tipos</option>
          {TIPOS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filtro-disponibilidade" className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
          Disponibilidade
        </label>
        <select
          id="filtro-disponibilidade"
          value={disponibilidade}
          onChange={(e) => updateParam("disponibilidade", e.target.value)}
          className="mt-3 w-full rounded-lg border border-border px-3 py-2.5 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Todas</option>
          {DISPONIBILIDADES.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      {temFiltroAtivo && (
        <button
          type="button"
          onClick={limparFiltros}
          className="text-sm font-semibold text-accent underline transition-colors duration-200 hover:opacity-80 cursor-pointer"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );

  return (
    <>
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm cursor-pointer"
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          Filtros
        </button>
      </div>

      <aside className="hidden w-64 shrink-0 lg:block">{conteudo}</aside>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Filtros
              </h2>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Fechar filtros"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary hover:bg-muted cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            {conteudo}
          </div>
        </div>
      )}
    </>
  );
}
