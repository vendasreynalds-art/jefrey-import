"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") ?? "relevancia";

  function onChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "relevancia") params.set("sort", value);
    else params.delete("sort");
    router.push(`/pecas?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="ordenar" className="text-sm text-secondary">
        Ordenar por
      </label>
      <select
        id="ordenar"
        value={sort}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-border px-3 py-2 text-sm text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <option value="relevancia">Relevância</option>
        <option value="nome">Nome (A-Z)</option>
        <option value="recentes">Mais recentes</option>
      </select>
    </div>
  );
}
