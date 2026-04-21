import nodemailer from "nodemailer";

export const runtime = "nodejs";

type StepAnswer = {
  stepId: number;
  question: string;
  answer: string;
};

type SecurityServicePayload = {
  stepAnswers?: StepAnswer[];
  name?: string;
  email?: string;
  phone?: string;
  phoneNumber?: string;
  "Phone Number"?: string;
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

function getRecipients(value: string | undefined, fallback: string) {
  const recipients = (value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return recipients.length > 0 ? recipients : [fallback];
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
  const recipients = getRecipients(getEnv("MAIL_TO"), user ?? "");
  const customerEmail = payload.email?.trim() || payload.fromEmail?.trim();
  const customerName = payload.name?.trim();
  const customerPhone =
    payload.phoneNumber?.trim() ||
    payload["Phone Number"]?.trim() ||
    payload.phone?.trim();

  if (!user || !pass || recipients.length === 0) {
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

  if (customerEmail) {
    lines.push(`Customer Email: ${customerEmail}`);
  }

  if (customerName) {
    lines.push(`Customer Name: ${customerName}`);
  }

  if (customerPhone) {
    lines.push(`Customer Phone: ${customerPhone}`);
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

  const adminSubject = payload.subject || "New Security Service Request";

  try {
    await transporter.sendMail({
      from: `"Security Service Request" <${user}>`,
      to: recipients.join(", "),
      replyTo: customerEmail,
      subject: adminSubject,
      text,
    });

    if (customerEmail) {
      await transporter.sendMail({
        from: `"Security Service Request" <${user}>`,
        to: customerEmail,
        subject: "We received your request",
        text:
          "Thanks for your request. We received your details and our team will contact you shortly.",
      });
    }
  } catch (error) {
    console.error("Failed to send security service email", error);
    return Response.json(
      {
        error:
          "Email could not be sent. Check SMTP_USER, SMTP_PASS, and MAIL_TO in your server environment.",
      },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
