import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

const DIFERENCIAIS = [
  "Importação direta de fornecedores oficiais",
  "Compatibilidade verificada com seu veículo",
  "Melhor custo-benefício em peças automotivas",
  "Garantia em todas as peças",
  "Atendimento técnico especializado",
  "Entrega para todo o Brasil",
];

export default function TrustBanner() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Por que importar peças com a {SITE.nome.split(" ")[0]}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Know-how em comércio exterior aplicado ao mercado automotivo, do
            fornecedor internacional até a sua oficina.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-white/5 p-5"
            >
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-success"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-100">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
