import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const { name, email, company, message } = payload;

  if (!name?.trim() || !company?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Campos obrigatórios ausentes." },
      { status: 422 },
    );
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "E-mail inválido." },
      { status: 422 },
    );
  }

  // TODO: integrate with CRM / email delivery provider.

  return NextResponse.json({ ok: true }, { status: 200 });
}
