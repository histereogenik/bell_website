import { NextResponse } from "next/server";

type PartnerPayload = {
  name?: string;
  company?: string;
  specialty?: string;
  email?: string;
  whatsapp?: string;
  opportunity?: string;
};

const requiredFields: Array<keyof PartnerPayload> = [
  "name",
  "specialty",
  "email",
  "whatsapp",
  "opportunity",
];

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function formatEmail(payload: Required<PartnerPayload>) {
  return `
Novo contato pelo site Bell Nacif - Parcerias e projetos

Nome: ${payload.name}
Empresa: ${payload.company || "Não informado"}
Especialidade: ${payload.specialty}
E-mail: ${payload.email}
WhatsApp: ${payload.whatsapp}

Como acredita que podemos gerar valor juntos:
${payload.opportunity}
`;
}

export async function POST(request: Request) {
  const body = (await request.json()) as PartnerPayload;
  const payload = {
    name: sanitize(body.name),
    company: sanitize(body.company),
    specialty: sanitize(body.specialty),
    email: sanitize(body.email),
    whatsapp: sanitize(body.whatsapp),
    opportunity: sanitize(body.opportunity),
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
      subject: `Novo contato de parceria - ${payload.name}`,
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
