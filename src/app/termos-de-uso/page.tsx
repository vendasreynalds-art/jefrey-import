import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso do site da ${SITE.nome}.`,
};

export default function TermosDeUsoPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Termos de Uso" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary">
          Termos de Uso
        </h1>
        <p className="mt-2 text-sm text-secondary">
          Última atualização: agosto de 2026
        </p>

        <div className="prose-sm mt-8 space-y-6 text-secondary">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              1. Sobre este site
            </h2>
            <p className="mt-2">
              Este site tem como finalidade apresentar o catálogo de peças
              automotivas importadas da {SITE.nome} e permitir a
              solicitação de orçamentos. Não realizamos venda direta com
              checkout online — todo pedido é formalizado através de
              orçamento comercial.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              2. Disponibilidade e compatibilidade
            </h2>
            <p className="mt-2">
              As informações de disponibilidade e compatibilidade exibidas
              no catálogo são referenciais. A confirmação final de
              compatibilidade e disponibilidade é feita durante o processo
              de orçamento, antes da confirmação da compra.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              3. Preços
            </h2>
            <p className="mt-2">
              Este site não exibe preços fixos — todos os valores são
              informados individualmente durante o orçamento, considerando
              peça, quantidade e prazo de importação.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              4. Propriedade intelectual
            </h2>
            <p className="mt-2">
              Marca, logotipo e conteúdo deste site pertencem à {SITE.nome}{" "}
              e não podem ser reproduzidos sem autorização prévia.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              5. Contato
            </h2>
            <p className="mt-2">
              Dúvidas sobre estes termos podem ser enviadas para{" "}
              {SITE.email}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
