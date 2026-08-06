import { ArrowRight, ShieldCheck, Clock, Globe2 } from "lucide-react";

const TRUST_POINTS = [
  { icon: Globe2, label: "40+ países de origem" },
  { icon: ShieldCheck, label: "100% conformidade aduaneira" },
  { icon: Clock, label: "Prazo médio de 12 dias" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(3,105,161,0.35),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
            Comércio Exterior &amp; Logística Internacional
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Importar com segurança, sem surpresas no processo.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Cuidamos de toda a operação de importação da sua empresa — da
            cotação ao desembaraço aduaneiro — com transparência de custos e
            prazos previsíveis em cada etapa.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              Solicitar Cotação
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              Conhecer Serviços
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <dd className="text-sm font-medium text-slate-200">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
