import nodemailer from "nodemailer";

export const runtime = "nodejs";

type StepAnswer = {
  stepId: number;
  question: string;
  answer: string;
};

type SecurityServicePayload = {
  stepAnswers?: StepAnswer[];
  address?: string;
  location?: string;
  fromEmail?: string;
  subject?: string;
  details?: string;
};

function getEnv(name: "SMTP_USER" | "SMTP_PASS" | "MAIL_TO") {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

export async function POST(request: Request) {
  let payload: SecurityServicePayload | null = null;

  try {
    payload = (await request.json()) as SecurityServicePayload;
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!payload) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS");
  const to = getEnv("MAIL_TO") ?? user;

  if (!user || !pass || !to) {
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const lines = (payload.stepAnswers ?? []).map(
    (answer) => `${answer.question}\n- ${answer.answer}`
  );

  if (payload.fromEmail) {
    lines.push(`From: ${payload.fromEmail}`);
  }

  if (payload.subject) {
    lines.push(`Subject: ${payload.subject}`);
  }

  if (payload.details) {
    lines.push(`Details:\n${payload.details}`);
  }

  if (payload.address) {
    lines.push(`Address: ${payload.address}`);
  }

  if (payload.location) {
    lines.push(`ZIP/Location: ${payload.location}`);
  }

  const text = lines.join("\n\n");

  if (!text.trim()) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  await transporter.sendMail({
    from: `"Security Service Request" <${user}>`,
    to,
    replyTo: payload.fromEmail,
    subject: payload.subject || "New Security Service Request",
    text,
  });

  return Response.json({ ok: true });
}
