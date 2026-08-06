"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type FieldName = "name" | "email" | "phone" | "company" | "message";

type Errors = Partial<Record<FieldName, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();

  switch (name) {
    case "name":
      if (!trimmed) return "Informe seu nome completo.";
      break;
    case "email":
      if (!trimmed) return "Informe um e-mail para contato.";
      if (!EMAIL_PATTERN.test(trimmed)) return "Informe um e-mail válido.";
      break;
    case "company":
      if (!trimmed) return "Informe o nome da sua empresa.";
      break;
    case "message":
      if (!trimmed) return "Conte brevemente o que você precisa importar.";
      break;
    default:
      break;
  }

  return undefined;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null,
  );

  function handleBlur(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    const error = validateField(name as FieldName, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const fields: FieldName[] = ["name", "email", "company", "message"];
    const nextErrors: Errors = {};
    for (const field of fields) {
      const error = validateField(field, String(formData.get(field) ?? ""));
      if (error) nextErrors[field] = error;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      const firstField = fields.find((f) => nextErrors[f]);
      if (firstField) {
        const el = form.elements.namedItem(firstField);
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
          el.focus();
        }
      }
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center rounded-xl border border-border bg-white p-10 text-center shadow-sm"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={28} aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
          Recebemos sua solicitação
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-secondary">
          Nossa equipe entrará em contato em até 1 dia útil com a simulação da
          sua importação.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent transition-colors duration-200 hover:opacity-80 cursor-pointer"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      {status === "error" && Object.keys(errors).length > 0 && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>Corrija os campos destacados abaixo antes de continuar.</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary"
          >
            Nome completo <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary"
          >
            E-mail <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-primary"
          >
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            onBlur={handleBlur}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-primary"
          >
            Empresa <span className="text-destructive">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.company && (
            <p id="company-error" className="mt-1.5 text-sm text-destructive">
              {errors.company}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-primary"
          >
            O que você precisa importar? <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            className="mt-1.5 block w-full resize-none rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-sm text-destructive">
              {errors.message}
            </p>
          ) : (
            <p id="message-hint" className="mt-1.5 text-sm text-secondary">
              Inclua produto, origem e volume estimado, se souber.
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          "Solicitar Cotação Gratuita"
        )}
      </button>
    </form>
  );
}
