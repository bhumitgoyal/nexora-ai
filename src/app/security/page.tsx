import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Database, FileText, RefreshCw, Users } from "lucide-react";
import { GridBackground } from "@/components/shared/GridBackground";

export const metadata: Metadata = {
  title: "Security & Data",
  description:
    "How Nuvero AI handles your data — encryption, ownership, access controls, and compliance. You own everything we build.",
};

const pillars = [
  {
    icon: Lock,
    title: "Encryption at every layer",
    body: "All data in transit is protected with TLS 1.2+. Data at rest is encrypted with AES-256. Credentials and secrets are stored in isolated vaults — never in source code or plain config files.",
  },
  {
    icon: Database,
    title: "You own the data — always",
    body: "Every database, vector store, and model fine-tune we build is provisioned in your cloud account or handed over at project close. We never retain copies of your operational data after engagement ends.",
  },
  {
    icon: ShieldCheck,
    title: "You own the code — always",
    body: "All source code, prompts, agent logic, and integration configs are committed to a repository you control from day one. No black-box SaaS dependency, no per-seat licence, no lock-in.",
  },
  {
    icon: Users,
    title: "Minimal access, explicit scope",
    body: "We request the narrowest API permissions needed for the task. Access is revoked or rotated at project handoff. We never ask for admin credentials when read-only will do.",
  },
  {
    icon: RefreshCw,
    title: "Human-in-the-loop checkpoints",
    body: "Every agent is built with a defined escalation path. When confidence is low or an action is irreversible, the system routes to a human. No autonomous action without an agreed approval boundary.",
  },
  {
    icon: FileText,
    title: "NDA & DPA available on request",
    body: "We sign mutual NDAs before scoping calls. For engagements handling PII, health data, or financial records, a Data Processing Agreement is included in the service contract at no extra cost.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <div className="container-x relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
            <span className="size-1.5 bg-[var(--color-brand)]" />
            Security &amp; Data
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Your data stays yours. Full stop.
          </h1>
          <p className="mt-4 text-base text-[var(--color-fg-muted)]">
            We build AI systems that touch customer data, call recordings, and business operations.
            Here is exactly how we handle it — no marketing language, no vague assurances.
          </p>
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] border border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-4 bg-[var(--color-bg)] p-8 transition-colors hover:bg-[var(--color-bg-elev)]">
              <span className="inline-flex size-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-brand)]">
                <Icon className="size-5" />
              </span>
              <h2 className="font-display text-lg font-semibold tracking-tight">{title}</h2>
              <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-[var(--color-border)] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight">Healthcare &amp; sensitive data</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                We build automation for clinics, diagnostic centres, and health providers. Before any
                engagement involving patient data, we agree in writing on data handling scope, retention
                limits, and access controls. A BAA (Business Associate Agreement) is available for
                US-based clients requiring HIPAA documentation.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight">Your AI never trains on your data</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                Models we deploy use API inference — your data is never used to retrain or fine-tune
                any foundation model without your explicit written consent. If we do fine-tune a model
                for you, that model belongs to you.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 border border-[var(--color-brand)] bg-[var(--color-brand)]/[0.03] p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">Have a specific compliance requirement?</p>
            <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
              We&apos;ll review it before scoping. NDA, DPA, and custom data agreements are standard — not add-ons.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]"
          >
            Talk to us
          </Link>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8 flex gap-6">
          <Link href="/privacy" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors">
            Privacy Policy →
          </Link>
          <Link href="/terms" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors">
            Terms of Service →
          </Link>
        </div>
      </section>
    </>
  );
}
