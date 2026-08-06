import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContatoForm from "@/components/ContatoForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description: `Entre em contato com a equipe da ${SITE.nome}. Respondemos em até 1 dia útil.`,
};

const INFOS = [
  { icon: Phone, label: SITE.telefone },
  { icon: Mail, label: SITE.email },
  { icon: MapPin, label: SITE.endereco },
  { icon: Clock, label: SITE.horario },
];

export default function ContatoPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Fale Conosco" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Fale Conosco
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondary">
            Dúvidas sobre compatibilidade, prazos ou formas de pagamento?
            Nossa equipe responde em até 1 dia útil.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <ul className="space-y-4">
              {INFOS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/50 p-10 text-center">
              <MapPin size={28} className="text-secondary/50" aria-hidden="true" />
              <p className="text-sm font-medium text-primary">
                {SITE.endereco}
              </p>
              <p className="text-xs text-secondary">
                Mapa disponível na versão final do site.
              </p>
            </div>
          </div>

          <ContatoForm />
        </div>
      </div>
    </>
  );
}
