import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const CONTACT_DETAILS = [
  { icon: Mail, label: "contato@importadora.com.br" },
  { icon: Phone, label: "+55 (11) 4000-0000" },
  { icon: MapPin, label: "Porto de Santos, SP — Brasil" },
];

export default function ContactSection() {
  return (
    <section id="contato" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-white">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Peça uma simulação sem compromisso
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">
            Envie os detalhes da sua importação e receba uma simulação de
            custos e prazos em até 24 horas úteis.
          </p>

          <ul className="mt-10 space-y-4">
            {CONTACT_DETAILS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
