import type { Metadata } from "next";
import { ShieldCheck, Globe2, Wrench } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a JefRey Import, especialista em importação direta de peças automotivas com compatibilidade verificada.",
};

const PILARES = [
  {
    icon: Globe2,
    titulo: "Importação direta",
    descricao:
      "Compramos diretamente de fornecedores internacionais, sem intermediários — o que garante melhor custo-benefício.",
  },
  {
    icon: ShieldCheck,
    titulo: "Compatibilidade verificada",
    descricao:
      "Toda peça é conferida com marca, modelo e ano do veículo antes do envio, para eliminar o risco de incompatibilidade.",
  },
  {
    icon: Wrench,
    titulo: "Atendimento técnico",
    descricao:
      "Equipe com conhecimento automotivo real, pronta para tirar dúvidas técnicas sobre instalação e aplicação.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sobre Nós" }]} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Sobre a {SITE.nome}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-secondary">
          A {SITE.nome} nasceu para resolver um problema comum de oficinas,
          lojas de peças e proprietários de veículos: encontrar peças
          automotivas importadas com procedência, compatibilidade garantida
          e prazo real de entrega. Trabalhamos com faróis, lanternas, peças
          de motor, lâmpadas, multimídia e itens de tunning, sempre com
          verificação técnica antes de qualquer envio.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-secondary">
          Nosso modelo é orientado a cotação: você encontra a peça, confirma
          a compatibilidade com nossa equipe e recebe um orçamento
          transparente — sem letras miúdas.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PILARES.map(({ icon: Icon, titulo, descricao }) => (
            <div
              key={titulo}
              className="rounded-xl border border-border bg-white p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-heading text-base font-semibold text-primary">
                {titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
