import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Entenda o passo a passo do processo de cotação e importação de peças automotivas da JefRey Import.",
};

const ETAPAS = [
  {
    numero: "01",
    titulo: "Você encontra a peça",
    descricao:
      "Busque no catálogo por categoria, código ou modelo do veículo — ou fale direto com nossa equipe se não encontrar o que precisa.",
  },
  {
    numero: "02",
    titulo: "Verificamos a compatibilidade",
    descricao:
      "Conferimos marca, modelo e ano do seu veículo antes de confirmar qualquer orçamento, para evitar peças incompatíveis.",
  },
  {
    numero: "03",
    titulo: "Você recebe o orçamento",
    descricao:
      "Enviamos preço, prazo de entrega e condições de pagamento em até 4 horas úteis após a solicitação.",
  },
  {
    numero: "04",
    titulo: "Importação e envio",
    descricao:
      "Peças em estoque são enviadas imediatamente; peças sob encomenda seguem prazo de importação informado no orçamento.",
  },
  {
    numero: "05",
    titulo: "Entrega em todo o Brasil",
    descricao:
      "Acompanhamento do envio até a chegada, com nota fiscal e garantia da peça.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Como Funciona" }]}
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Como funciona o processo
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondary">
            Transparência do primeiro contato até a entrega — sem prazos
            vagos ou condições escondidas.
          </p>
        </div>

        <ol className="mt-14 space-y-8">
          {ETAPAS.map((etapa) => (
            <li key={etapa.numero} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                {etapa.numero}
              </span>
              <div>
                <h2 className="font-heading text-lg font-semibold text-primary">
                  {etapa.titulo}
                </h2>
                <p className="mt-1.5 leading-relaxed text-secondary">
                  {etapa.descricao}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
          >
            Solicitar Orçamento
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
