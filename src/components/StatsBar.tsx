const STATS = [
  { value: "18 anos", label: "de atuação em comércio exterior" },
  { value: "+2.400", label: "processos de importação concluídos" },
  { value: "40+", label: "países de origem atendidos" },
  { value: "98%", label: "de embarques dentro do prazo" },
];

export default function StatsBar() {
  return (
    <section
      aria-label="Números da Importadora"
      className="border-b border-border bg-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm leading-snug text-secondary">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
