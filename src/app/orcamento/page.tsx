import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento",
  description:
    "Solicite um orçamento de peças automotivas importadas. Respondemos em até 4 horas úteis com preço, prazo e condições.",
};

export default async function OrcamentoPage({
  searchParams,
}: {
  searchParams: Promise<{ peca?: string; codigo?: string }>;
}) {
  const { peca, codigo } = await searchParams;

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Solicitar Orçamento" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Solicitar Orçamento
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondary">
            Preencha os dados abaixo e nossa equipe comercial responde com
            preço, prazo e condições de pagamento.
          </p>
        </div>

        <div className="mt-10">
          <QuoteForm pecaInicial={peca} codigoInicial={codigo} />
        </div>
      </div>
    </>
  );
}
