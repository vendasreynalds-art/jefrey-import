import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Reduzimos o custo de importação em 22% no primeiro semestre só com o replanejamento tributário sugerido pela equipe.",
    name: "Marina Costa",
    role: "Diretora de Suprimentos, Grupo Altavia",
    metric: "-22% em custos",
  },
  {
    quote:
      "O prazo de desembaraço caiu de 20 para 9 dias em média. Isso mudou completamente nosso planejamento de estoque.",
    name: "Ricardo Fontes",
    role: "Gerente de Operações, Nortec Equipamentos",
    metric: "9 dias de desembaraço",
  },
  {
    quote:
      "Ter um único ponto de contato para toda a operação — do fornecedor ao CD — eliminou retrabalho entre nossas áreas.",
    name: "Juliana Prado",
    role: "Head de Logística, Vetta Componentes",
    metric: "1 ponto de contato",
  },
];

export default function Testimonials() {
  return (
    <section id="resultados" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Resultados que nossos clientes medem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Não é sobre promessas — é sobre números que aparecem no seu
            balanço.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              <Quote
                size={24}
                className="text-accent/40"
                aria-hidden="true"
              />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-primary">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <figcaption>
                  <p className="font-heading text-sm font-semibold text-primary">
                    {item.name}
                  </p>
                  <p className="text-xs text-secondary">{item.role}</p>
                </figcaption>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.metric}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
