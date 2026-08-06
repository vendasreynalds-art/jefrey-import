import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${SITE.nome}.`,
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Política de Privacidade" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-secondary">
          Última atualização: agosto de 2026
        </p>

        <div className="prose-sm mt-8 space-y-6 text-secondary">
          <p>
            A {SITE.nome} respeita sua privacidade e está comprometida com a
            proteção dos dados pessoais coletados através deste site, em
            conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº
            13.709/2018).
          </p>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              1. Quais dados coletamos
            </h2>
            <p className="mt-2">
              Coletamos os dados que você fornece voluntariamente em nossos
              formulários de orçamento e contato: nome, e-mail, telefone,
              empresa (quando aplicável) e informações sobre a peça e o
              veículo de interesse.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              2. Para que usamos seus dados
            </h2>
            <p className="mt-2">
              Utilizamos seus dados exclusivamente para responder às suas
              solicitações de orçamento e contato, incluindo o envio de
              informações comerciais relacionadas à peça solicitada.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              3. Compartilhamento de dados
            </h2>
            <p className="mt-2">
              Não vendemos nem compartilhamos seus dados pessoais com
              terceiros para fins de marketing. Seus dados podem ser
              compartilhados apenas com prestadores de serviço estritamente
              necessários para viabilizar o atendimento (ex: transportadoras,
              quando aplicável ao processo de entrega).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              4. Seus direitos
            </h2>
            <p className="mt-2">
              Você pode solicitar a qualquer momento a confirmação,
              correção, anonimização ou exclusão dos seus dados pessoais,
              entrando em contato pelo e-mail {SITE.email}.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              5. Contato
            </h2>
            <p className="mt-2">
              Dúvidas sobre esta política podem ser enviadas para{" "}
              {SITE.email} ou pelo telefone {SITE.telefone}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
