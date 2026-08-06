"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { PECAS } from "@/data/pecas";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const sugestoes = useMemo(() => {
    const termo = query.trim().toLowerCase();
    if (termo.length < 2) return [];
    return PECAS.filter(
      (p) =>
        p.nome.toLowerCase().includes(termo) ||
        p.codigo.toLowerCase().includes(termo) ||
        p.veiculosCompativeis.some(
          (v) =>
            v.marca.toLowerCase().includes(termo) ||
            v.modelo.toLowerCase().includes(termo),
        ),
    ).slice(0, 6);
  }, [query]);

  function irParaBusca() {
    if (!query.trim()) return;
    router.push(`/pecas?q=${encodeURIComponent(query.trim())}`);
    onClose();
  }

  return (
    <div className="absolute inset-x-0 top-full border-b border-border bg-white shadow-xl">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
        <div className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <Search size={20} className="shrink-0 text-secondary" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && irParaBusca()}
            placeholder="Buscar por peça, código ou modelo do veículo (ex: farol Civic)"
            className="w-full border-none bg-transparent text-base text-primary outline-none placeholder:text-secondary/60"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar busca"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-secondary transition-colors duration-200 hover:bg-muted cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {sugestoes.length > 0 && (
          <ul className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border">
            {sugestoes.map((peca) => (
              <li key={peca.id}>
                <a
                  href={`/pecas/${peca.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between gap-4 px-4 py-3 text-sm transition-colors duration-200 hover:bg-muted cursor-pointer"
                >
                  <span>
                    <span className="font-medium text-primary">
                      {peca.nome}
                    </span>
                    <span className="ml-2 text-secondary">
                      Cód. {peca.codigo}
                    </span>
                  </span>
                  <span className="text-xs text-secondary">
                    {peca.veiculosCompativeis[0]?.marca}{" "}
                    {peca.veiculosCompativeis[0]?.modelo}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}

        {query.trim().length >= 2 && sugestoes.length === 0 && (
          <p className="mt-4 text-sm text-secondary">
            Nenhum resultado para &ldquo;{query}&rdquo;. Tente buscar pelo
            nome da peça, código ou modelo do veículo — ou{" "}
            <a href="/orcamento" className="text-accent underline">
              solicite um orçamento
            </a>{" "}
            e nossa equipe confirma a disponibilidade.
          </p>
        )}
      </div>
    </div>
  );
}
