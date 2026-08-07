"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { MARCAS, MARCAS_VEICULOS } from "@/data/veiculos";

type FieldName =
  | "nome"
  | "email"
  | "telefone"
  | "peca"
  | "mensagem"
  | "aceite";

type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  switch (name) {
    case "nome":
      if (!trimmed) return "Informe seu nome completo.";
      break;
    case "email":
      if (!trimmed) return "Informe um e-mail para contato.";
      if (!EMAIL_PATTERN.test(trimmed)) return "Informe um e-mail válido.";
      break;
    case "telefone":
      if (!trimmed) return "Informe um telefone ou WhatsApp para contato.";
      break;
    case "peca":
      if (!trimmed) return "Informe a peça de interesse.";
      break;
    case "aceite":
      if (value !== "on")
        return "É necessário aceitar a Política de Privacidade.";
      break;
    default:
      break;
  }
  return undefined;
}

export default function QuoteForm({
  pecaInicial,
  codigoInicial,
}: {
  pecaInicial?: string;
  codigoInicial?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [marca, setMarca] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const pecaValorInicial = codigoInicial
    ? `${pecaInicial} (Cód. ${codigoInicial})`
    : (pecaInicial ?? "");

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const target = event.target;
    const isCheckbox =
      target instanceof HTMLInputElement && target.type === "checkbox";
    const error = validateField(
      target.name as FieldName,
      isCheckbox ? (target.checked ? "on" : "") : target.value,
    );
    setErrors((prev) => ({ ...prev, [target.name]: error }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const fields: FieldName[] = ["nome", "email", "telefone", "peca", "aceite"];
    const nextErrors: Errors = {};
    for (const field of fields) {
      const raw = formData.get(field);
      const value =
        field === "aceite" ? (raw ? "on" : "") : String(raw ?? "");
      const error = validateField(field, value);
      if (error) nextErrors[field] = error;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      const firstField = fields.find((f) => nextErrors[f]);
      if (firstField) {
        const el = form.elements.namedItem(firstField);
        if (
          el instanceof HTMLInputElement ||
          el instanceof HTMLTextAreaElement
        ) {
          el.focus();
        }
      }
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/orcamento", {
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
          Orçamento recebido
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-secondary">
          Respondemos em até 4 horas úteis com preço, prazo e condições de
          pagamento.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent transition-colors duration-200 hover:opacity-80 cursor-pointer"
        >
          Solicitar outro orçamento
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
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
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-primary">
            Nome completo <span className="text-destructive">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? "nome-error" : undefined}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.nome && (
            <p id="nome-error" className="mt-1.5 text-sm text-destructive">
              {errors.nome}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">
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
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-primary">
            Telefone / WhatsApp <span className="text-destructive">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.telefone)}
            aria-describedby={errors.telefone ? "telefone-error" : undefined}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.telefone && (
            <p id="telefone-error" className="mt-1.5 text-sm text-destructive">
              {errors.telefone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-primary">
            Empresa <span className="text-secondary">(opcional)</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="peca" className="block text-sm font-medium text-primary">
            Peça(s) de interesse <span className="text-destructive">*</span>
          </label>
          <input
            id="peca"
            name="peca"
            type="text"
            defaultValue={pecaValorInicial}
            required
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.peca)}
            aria-describedby={errors.peca ? "peca-error" : "peca-hint"}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-destructive"
          />
          {errors.peca ? (
            <p id="peca-error" className="mt-1.5 text-sm text-destructive">
              {errors.peca}
            </p>
          ) : (
            <p id="peca-hint" className="mt-1.5 text-sm text-secondary">
              Nome da peça, código ou descrição do que você precisa.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="marca" className="block text-sm font-medium text-primary">
            Marca do veículo
          </label>
          <select
            id="marca"
            name="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Selecione</option>
            {MARCAS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="modelo" className="block text-sm font-medium text-primary">
            Modelo
          </label>
          <select
            id="modelo"
            name="modelo"
            disabled={!marca}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:bg-muted"
          >
            <option value="">Selecione</option>
            {(MARCAS_VEICULOS[marca] ?? []).map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="ano" className="block text-sm font-medium text-primary">
            Ano do veículo
          </label>
          <input
            id="ano"
            name="ano"
            type="text"
            inputMode="numeric"
            placeholder="Ex: 2019"
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="quantidade" className="block text-sm font-medium text-primary">
            Quantidade
          </label>
          <input
            id="quantidade"
            name="quantidade"
            type="number"
            min={1}
            defaultValue={1}
            className="mt-1.5 block w-full rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="block text-sm font-medium text-primary">
            Detalhes adicionais <span className="text-secondary">(opcional)</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="mt-1.5 block w-full resize-none rounded-lg border border-border px-4 py-3 text-base text-primary transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-2.5 text-sm text-secondary">
            <input
              type="checkbox"
              name="aceite"
              required
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.aceite)}
              aria-describedby={errors.aceite ? "aceite-error" : undefined}
              className="mt-1 h-4 w-4 shrink-0 rounded border-border text-accent focus:ring-2 focus:ring-primary/20"
            />
            Li e aceito a{" "}
            <a href="/politica-de-privacidade" className="text-accent underline">
              Política de Privacidade
            </a>{" "}
            <span className="text-destructive">*</span>
          </label>
          {errors.aceite && (
            <p id="aceite-error" className="mt-1.5 text-sm text-destructive">
              {errors.aceite}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-primary shadow-md transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          "Enviar Solicitação de Orçamento"
        )}
      </button>
      <p className="mt-3 text-xs text-secondary">
        Respondemos em até 4 horas úteis.
      </p>
    </form>
  );
}
