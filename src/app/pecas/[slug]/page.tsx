import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  PackageSearch,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { PECAS, getPecaBySlug, getPecasRelacionadas } from "@/data/pecas";
import { getCategoria } from "@/data/categorias";
import { CATEGORIA_ICONS } from "@/components/categoriaIcons";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { SITE, linkWhatsApp, mensagemOrcamentoPeca } from "@/lib/site";

const DISPONIBILIDADE_INFO = {
  estoque: { label: "Em estoque", className: "bg-success/10 text-success", icon: CheckCircle2 },
  consulta: { label: "Sob consulta", className: "bg-warning/10 text-warning", icon: Clock },
  encomenda: {
    label: "Importação sob encomenda",
    className: "bg-primary-light/10 text-primary-light",
    icon: PackageSearch,
  },
} as const;

export function generateStaticParams() {
  return PECAS.map((peca) => ({ slug: peca.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const peca = getPecaBySlug(slug);
  if (!peca) return {};

  return {
    title: peca.nome,
    description: peca.resumo,
  };
}

export default async function PecaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const peca = getPecaBySlug(slug);
  if (!peca) notFound();

  const categoria = getCategoria(peca.categoria);
  const Icon = CATEGORIA_ICONS[peca.categoria];
  const disponibilidade = DISPONIBILIDADE_INFO[peca.disponibilidade];
  const DispIcon = disponibilidade.icon;
  const relacionadas = getPecasRelacionadas(peca);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: peca.nome,
    sku: peca.codigo,
    category: categoria?.nome,
    description: peca.descricao,
    brand: { "@type": "Brand", name: SITE.nome },
    offers: {
      "@type": "Offer",
      availability:
        peca.disponibilidade === "estoque"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "Sob consulta",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Peças", href: "/pecas" },
          {
            label: categoria?.nome ?? "Peças",
            href: `/pecas?categoria=${peca.categoria}`,
          },
          { label: peca.nome },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white">
            <Icon size={96} strokeWidth={1.25} aria-hidden="true" />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-primary-light">
              {categoria?.nome}
            </span>
            <h1 className="mt-1.5 font-heading text-3xl font-bold text-primary">
              {peca.nome}
            </h1>
            <p className="mt-1 text-sm text-secondary">
              Código de referência: <strong>{peca.codigo}</strong>
            </p>

            <span
              className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ${disponibilidade.className}`}
            >
              <DispIcon size={15} aria-hidden="true" />
              {disponibilidade.label}
            </span>

            <p className="mt-6 leading-relaxed text-secondary">
              {peca.descricao}
            </p>

            <div className="mt-6">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                Especificações
              </h2>
              <ul className="mt-3 space-y-2">
                {peca.especificacoes.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-2.5 text-sm text-secondary"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-white p-5">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                Veículos compatíveis
              </h2>
              <ul className="mt-3 divide-y divide-border">
                {peca.veiculosCompativeis.map((v) => (
                  <li
                    key={`${v.marca}-${v.modelo}`}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <span className="font-medium text-primary">
                      {v.marca} {v.modelo}
                    </span>
                    <span className="text-secondary">
                      {v.anoInicio}–{v.anoFim}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-secondary">
                Não encontrou seu veículo? Fale com a gente — verificamos a
                compatibilidade antes de confirmar o orçamento.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/orcamento?peca=${encodeURIComponent(peca.nome)}&codigo=${encodeURIComponent(peca.codigo)}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
              >
                Solicitar Orçamento
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href={linkWhatsApp(mensagemOrcamentoPeca(peca.nome, peca.codigo))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-success px-6 py-3.5 text-base font-semibold text-success transition-all duration-200 hover:bg-success hover:text-white cursor-pointer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {relacionadas.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-primary">
              Peças relacionadas
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relacionadas.map((p) => (
                <ProductCard key={p.id} peca={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
