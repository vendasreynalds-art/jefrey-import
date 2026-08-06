const STEPS = [
  {
    number: "01",
    title: "Cotação e Análise",
    description:
      "Você envia a proforma invoice ou especificação do produto e recebemos a simulação completa de custos em até 24h.",
  },
  {
    number: "02",
    title: "Contratação e Documentação",
    description:
      "Formalizamos o contrato e preparamos toda a documentação exigida — licenças, certificados e classificação fiscal.",
  },
  {
    number: "03",
    title: "Embarque e Rastreamento",
    description:
      "Acompanhamento do transporte internacional com atualizações periódicas até a chegada no porto ou aeroporto de destino.",
  },
  {
    number: "04",
    title: "Desembaraço e Entrega",
    description:
      "Liberação alfandegária e entrega no endereço combinado, com nota fiscal de entrada e relatório final da operação.",
  },
];

export default function Process() {
  return (
    <section
      id="como-funciona"
      className="bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Como funciona o processo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Quatro etapas, um único ponto de contato do início ao fim.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.number} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-heading text-3xl font-bold text-accent/30">
                  {step.number}
                </span>
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-border lg:block"
                  />
                )}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
