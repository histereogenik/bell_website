import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  whatsapp?: string;
  service?: string;
  people?: string;
  challenge?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "email",
  "whatsapp",
  "service",
  "people",
  "challenge",
];

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function formatEmail(payload: Required<ContactPayload>) {
  return `
Novo contato pelo site Bell Nacif - Para clientes

Nome: ${payload.name}
Empresa: ${payload.company || "Não informado"}
Cargo: ${payload.role || "Não informado"}
E-mail: ${payload.email}
WhatsApp: ${payload.whatsapp}
Serviço procurado: ${payload.service}
Pessoas envolvidas: ${payload.people}

Principal desafio:
${payload.challenge}
`;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const payload = {
    name: sanitize(body.name),
    company: sanitize(body.company),
    role: sanitize(body.role),
    email: sanitize(body.email),
    whatsapp: sanitize(body.whatsapp),
    service: sanitize(body.service),
    people: sanitize(body.people),
    challenge: sanitize(body.challenge),
  };

  const missingField = requiredFields.find((field) => !payload[field]);

  if (missingField) {
    return NextResponse.json(
      { message: "Preencha todos os campos obrigatórios antes de enviar." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "bell@bellnacif.com.br";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        message:
          "Envio de e-mail ainda não configurado. Defina RESEND_API_KEY e CONTACT_FROM_EMAIL na Vercel.",
      },
      { status: 503 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `Novo contato de cliente - ${payload.name}`,
      text: formatEmail(payload),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Não foi possível enviar sua mensagem agora." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Mensagem enviada. Em breve a Bell entrará em contato.",
  });
}
