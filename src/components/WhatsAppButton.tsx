import { MessageCircle } from "lucide-react";
import { linkWhatsApp, SITE } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={linkWhatsApp(
        `Olá! Vim pelo site da ${SITE.nome} e gostaria de mais informações.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp com a ${SITE.nome}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} aria-hidden="true" fill="white" />
    </a>
  );
}
