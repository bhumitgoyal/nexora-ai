import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Where enquiries land. Override in the environment once the domain is live.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "bhumit@nuvero.space";
// Must be an address on a domain verified at resend.com/domains.
// Falls back to Resend's shared test sender only if nothing is configured.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Nuvero AI <noreply@nuvero.space>";

// Simple in-memory rate limiter: max 5 requests per IP per 5 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 5 * 60 * 1000; // 5 minutes
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + window });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count += 1;
  return false;
}

function sanitize(value: string): string {
  return String(value).trim().slice(0, 2000);
}

// Escape before interpolating user input into the notification email's HTML.
// sanitize() only trims/caps length, so without this a submitter could inject
// markup (spoofed links, hidden content) into the inbox that receives these.
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Cloud Run appends "<client-ip>, <load-balancer-ip>" to whatever the request
// already carried, so the trustworthy client IP is the second-to-last entry -
// not the first (attacker-supplied, trivially spoofed - anyone could send
// their own X-Forwarded-For to dodge the rate limiter entirely) and not the
// last (that's the load balancer's own IP, not the caller's).
function clientIp(req: NextRequest): string {
  const chain = req.headers.get("x-forwarded-for")?.split(",").map((s) => s.trim()) ?? [];
  return chain.length >= 2 ? chain[chain.length - 2] : (chain[0] ?? "unknown");
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = sanitize(body.name ?? "");
  const email = sanitize(body.email ?? "");
  const phone = sanitize(body.phone ?? "");
  const company = sanitize(body.company ?? "");
  const service = sanitize(body.service ?? "");
  const budget = sanitize(body.budget ?? "");
  const message = sanitize(body.message ?? "");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const html = `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#003049">
  <h2 style="color:#C1121F;margin-bottom:4px">New contact form submission</h2>
  <hr style="border:none;border-top:1px solid #003049;margin:12px 0" />

  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:6px 0;font-weight:600;width:140px">Name</td><td style="padding:6px 0">${esc(name)}</td></tr>
    <tr><td style="padding:6px 0;font-weight:600">Email</td><td style="padding:6px 0"><a href="mailto:${esc(email)}" style="color:#C1121F">${esc(email)}</a></td></tr>
    ${phone ? `<tr><td style="padding:6px 0;font-weight:600">Phone</td><td style="padding:6px 0"><a href="tel:${esc(phone)}" style="color:#C1121F">${esc(phone)}</a></td></tr>` : ""}
    ${company ? `<tr><td style="padding:6px 0;font-weight:600">Company</td><td style="padding:6px 0">${esc(company)}</td></tr>` : ""}
    ${service ? `<tr><td style="padding:6px 0;font-weight:600">Service</td><td style="padding:6px 0">${esc(service)}</td></tr>` : ""}
    ${budget ? `<tr><td style="padding:6px 0;font-weight:600">Budget</td><td style="padding:6px 0">${esc(budget)}</td></tr>` : ""}
  </table>

  <hr style="border:none;border-top:1px solid #003049;margin:12px 0" />
  <p style="font-weight:600;margin-bottom:4px">Message</p>
  <p style="background:#F5E4C0;padding:12px;white-space:pre-wrap">${esc(message)}</p>
</div>
`;

  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form: RESEND_API_KEY is not set in this environment.");
    return NextResponse.json(
      { error: "Email is not configured. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const { error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
