"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type FieldName = "nome" | "email" | "mensagem";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  switch (name) {
    case "nome":
      if (!trimmed) return "Informe seu nome.";
      break;
    case "email":
      if (!trimmed) return "Informe um e-mail para contato.";
      if (!EMAIL_PATTERN.test(trimmed)) return "Informe um e-mail válido.";
      break;
    case "mensagem":
      if (!trimmed) return "Escreva sua mensagem.";
      break;
    default:
      break;
  }
  return undefined;
}

export default function ContatoForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as FieldName, value),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const fields: FieldName[] = ["nome", "email", "mensagem"];
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
      const response = await fetch("/api/contato", {
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
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 size={28} aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-heading text-xl font-semibold text-primary">
          Mensagem enviada
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-secondary">
          Nossa equipe responde em até 1 dia útil.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent transition-colors duration-200 hover:opacity-80 cursor-pointer"
        >
          Enviar outra mensagem
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

      <div className="space-y-5">
        <div>
          <label htmlFor="c-nome" className="block text-sm font-medium text-primary">
            Nome <span className="text-destructive">*</span>
          </label>
          <input
            id="c-nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? "c-nome-error" : undefined}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.nome && (
            <p id="c-nome-error" className="mt-1.5 text-sm text-destructive">
              {errors.nome}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="c-email" className="block text-sm font-medium text-primary">
            E-mail <span className="text-destructive">*</span>
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "c-email-error" : undefined}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.email && (
            <p id="c-email-error" className="mt-1.5 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="c-telefone" className="block text-sm font-medium text-primary">
            Telefone <span className="text-secondary">(opcional)</span>
          </label>
          <input
            id="c-telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="c-mensagem" className="block text-sm font-medium text-primary">
            Mensagem <span className="text-destructive">*</span>
          </label>
          <textarea
            id="c-mensagem"
            name="mensagem"
            rows={5}
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.mensagem)}
            aria-describedby={errors.mensagem ? "c-mensagem-error" : undefined}
            className="mt-1.5 block w-full resize-none rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.mensagem && (
            <p id="c-mensagem-error" className="mt-1.5 text-sm text-destructive">
              {errors.mensagem}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </button>
    </form>
  );
}
