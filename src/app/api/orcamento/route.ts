import { NextResponse } from "next/server";

type OrcamentoPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  empresa?: string;
  peca?: string;
  marca?: string;
  modelo?: string;
  ano?: string;
  quantidade?: string;
  mensagem?: string;
  aceite?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: OrcamentoPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const { nome, email, telefone, peca, aceite } = payload;

  if (!nome?.trim() || !telefone?.trim() || !peca?.trim()) {
    return NextResponse.json(
      { error: "Campos obrigatórios ausentes." },
      { status: 422 },
    );
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 422 });
  }

  if (aceite !== "on") {
    return NextResponse.json(
      { error: "É necessário aceitar a Política de Privacidade." },
      { status: 422 },
    );
  }

  // TODO: integrar com e-mail comercial / WhatsApp Business / CRM.

  return NextResponse.json({ ok: true }, { status: 200 });
}
