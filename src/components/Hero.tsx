"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, ShieldCheck, Truck, Award } from "lucide-react";
import { MARCAS, MARCAS_VEICULOS } from "@/data/veiculos";

const DESTAQUES = [
  { icon: ShieldCheck, label: "Compatibilidade verificada" },
  { icon: Award, label: "Garantia em todas as peças" },
  { icon: Truck, label: "Entrega para todo o Brasil" },
];

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");

  function buscarPorTexto(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/pecas?q=${encodeURIComponent(query.trim())}`);
  }

  function buscarPorVeiculo(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (marca) params.set("marca", marca);
    if (modelo) params.set("modelo", modelo);
    router.push(`/pecas?${params.toString()}`);
  }

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,102,0,0.15),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
            Importação Direta de Peças Automotivas
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            A peça certa para o seu carro, com{" "}
            <span className="text-accent">compatibilidade garantida</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Faróis, lanternas, peças de motor, lâmpadas, multimídia e itens
            de tunning importados diretamente, com verificação de
            compatibilidade antes do envio.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {DESTAQUES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <dd className="text-sm font-medium text-slate-200">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          <h2 className="font-heading text-lg font-semibold text-primary">
            Encontre sua peça
          </h2>

          <form onSubmit={buscarPorTexto} className="mt-4">
            <label htmlFor="hero-search" className="sr-only">
              Buscar por peça, código ou modelo
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-border px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <Search size={18} className="shrink-0 text-secondary" aria-hidden="true" />
              <input
                id="hero-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: farol Civic, LT-CO-2023…"
                autoComplete="off"
                className="w-full border-none bg-transparent text-sm text-primary outline-none placeholder:text-secondary/60"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
            >
              Buscar peça
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium uppercase tracking-wide text-secondary/70">
              ou busque pelo veículo
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={buscarPorVeiculo} className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <label htmlFor="hero-marca" className="mb-1.5 block text-xs font-medium text-secondary">
                Marca
              </label>
              <select
                id="hero-marca"
                value={marca}
                onChange={(e) => {
                  setMarca(e.target.value);
                  setModelo("");
                }}
                className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Selecione</option>
                {MARCAS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1">
              <label htmlFor="hero-modelo" className="mb-1.5 block text-xs font-medium text-secondary">
                Modelo
              </label>
              <select
                id="hero-modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                disabled={!marca}
                className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:bg-muted"
              >
                <option value="">Selecione</option>
                {(MARCAS_VEICULOS[marca] ?? []).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="col-span-2 mt-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
            >
              Ver peças compatíveis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
