import { NextResponse } from "next/server";

type ContatoPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContatoPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const { nome, email, mensagem } = payload;

  if (!nome?.trim() || !mensagem?.trim()) {
    return NextResponse.json(
      { error: "Campos obrigatórios ausentes." },
      { status: 422 },
    );
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 422 });
  }

  // TODO: integrar com e-mail comercial / CRM.

  return NextResponse.json({ ok: true }, { status: 200 });
}
