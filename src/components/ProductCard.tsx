import Link from "next/link";
import { CheckCircle2, Clock, PackageSearch } from "lucide-react";
import type { Peca } from "@/types/peca";
import { CATEGORIA_ICONS } from "@/components/categoriaIcons";
import { getCategoria } from "@/data/categorias";

const DISPONIBILIDADE_INFO: Record<
  Peca["disponibilidade"],
  { label: string; className: string; icon: typeof CheckCircle2 }
> = {
  estoque: {
    label: "Em estoque",
    className: "bg-success/10 text-success",
    icon: CheckCircle2,
  },
  consulta: {
    label: "Sob consulta",
    className: "bg-warning/10 text-warning",
    icon: Clock,
  },
  encomenda: {
    label: "Importação sob encomenda",
    className: "bg-primary-light/10 text-primary-light",
    icon: PackageSearch,
  },
};

export default function ProductCard({ peca }: { peca: Peca }) {
  const Icon = CATEGORIA_ICONS[peca.categoria];
  const disponibilidade = DISPONIBILIDADE_INFO[peca.disponibilidade];
  const DispIcon = disponibilidade.icon;
  const categoria = getCategoria(peca.categoria);

  return (
    <Link
      href={`/pecas/${peca.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white">
        <Icon size={48} strokeWidth={1.5} aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary-light">
          {categoria?.nome}
        </span>
        <h3 className="mt-1.5 font-heading text-base font-semibold text-primary">
          {peca.nome}
        </h3>
        <p className="mt-1 text-xs text-secondary">Cód. {peca.codigo}</p>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-secondary">
          {peca.resumo}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {peca.veiculosCompativeis.slice(0, 2).map((v) => (
            <span
              key={`${v.marca}-${v.modelo}`}
              className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-secondary"
            >
              {v.marca} {v.modelo}
            </span>
          ))}
          {peca.veiculosCompativeis.length > 2 && (
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-secondary">
              +{peca.veiculosCompativeis.length - 2}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${disponibilidade.className}`}
          >
            <DispIcon size={13} aria-hidden="true" />
            {disponibilidade.label}
          </span>
          <span className="text-sm font-semibold text-accent transition-colors duration-200 group-hover:text-accent/80">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}
