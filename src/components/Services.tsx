import {
  Ship,
  FileCheck2,
  Warehouse,
  Calculator,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Ship,
    title: "Importação Direta",
    description:
      "Gestão completa do frete internacional — marítimo, aéreo ou rodoviário — com acompanhamento em tempo real da carga.",
  },
  {
    icon: FileCheck2,
    title: "Desembaraço Aduaneiro",
    description:
      "Classificação fiscal, licenciamento e liberação na Receita Federal conduzidos por especialistas certificados.",
  },
  {
    icon: Warehouse,
    title: "Armazenagem e Distribuição",
    description:
      "Recebimento em porto seco, armazenagem alfandegada e distribuição nacional integrada à sua cadeia logística.",
  },
  {
    icon: Calculator,
    title: "Consultoria em Comércio Exterior",
    description:
      "Planejamento tributário, análise de viabilidade e simulação de custos antes de qualquer compromisso financeiro.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Uma operação completa, do fornecedor à sua porta
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Cada etapa da importação é conduzida por uma equipe dedicada, com
            visibilidade total de custos e prazos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group cursor-pointer rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
