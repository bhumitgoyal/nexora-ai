import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, KeyRound } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Live Demos",
  description:
    "Click into the real systems Nuvero AI has built — ERPs, AI agents, chatbots, connectors, and automations — running live on sample data.",
};

const PASSCODE = "nuvero.space";
const B = "-629748840531.us-central1.run.app";

type Demo = {
  name: string;
  tag: string;
  blurb: string;
  thumb: string;
  href: string;
};

const demos: Demo[] = [
  {
    name: "Southwest Gases ERP",
    tag: "Energy · Operations",
    blurb:
      "A full order-to-cash ERP: order entry, a drag-and-drop delivery board, cylinder rent ledgers, and invoices that sync to QuickBooks.",
    thumb: "/demos/swg-erp.png",
    href: `https://swg-erp-demo${B}/?k=${PASSCODE}`,
  },
  {
    name: "Southwest Gases Delivery Board",
    tag: "Energy · Logistics",
    blurb:
      "The live, shared delivery schedule the office and drivers run the day on — statuses, routes, and a full change history.",
    thumb: "/demos/swg-delivery.png",
    href: `https://swg-delivery-demo${B}/?k=${PASSCODE}`,
  },
  {
    name: "Nuvero Outreach Engine",
    tag: "Sales · Outreach",
    blurb:
      "Discovers prospects, resolves verified contacts, and drafts every email — with a human approving each send before it goes out.",
    thumb: "/demos/nuvero-outreach.png",
    href: `https://nuvero-outreach-frontend-demo${B}/?k=${PASSCODE}`,
  },
  {
    name: "VITopia AI",
    tag: "Chatbot · Education",
    blurb:
      "A multilingual campus copilot for VIT students, answering from a knowledge base with retrieval-grounded replies.",
    thumb: "/demos/vit-chatbot.png",
    href: `https://vit-chatbot-demo${B}/?k=${PASSCODE}`,
  },
  {
    name: "GoHappy Club Assistant",
    tag: "Chatbot · Senior Wellness",
    blurb:
      "A patient, multilingual support assistant for a senior-citizen membership club that knows when to escalate to a human.",
    thumb: "/demos/gohappy.png",
    href: `https://gohappy-demo${B}/?k=${PASSCODE}`,
  },
  {
    name: "SWG Delivery AI Connector",
    tag: "AI Connector · MCP",
    blurb:
      "A read-only MCP connector that lets ChatGPT and Claude answer 'is it scheduled?' straight from the delivery board.",
    thumb: "/demos/swg-mcp.png",
    href: `https://swg-mcp-demo${B}/?k=${PASSCODE}`,
  },
  {
    name: "Automation Workflows",
    tag: "Automation · n8n",
    blurb:
      "A visual canvas of the workflow automations we run — content generation, distribution, lead intake, and payment follow-ups — node by node.",
    thumb: "/demos/n8n.png",
    href: `https://n8n-workflows-demo${B}/?k=${PASSCODE}`,
  },
];

export default function DemosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-fg-subtle)] transition-colors hover:text-[var(--color-brand)]"
              >
                <ArrowLeft className="size-3.5" />
                Back home
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="inline-flex w-fit items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                <span className="size-1.5 bg-[var(--color-brand)]" />
                Live demos
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Don&apos;t take our word for it. <span className="text-[var(--color-brand)]">Click in.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                The actual systems we&apos;ve shipped, running live on sample data so you can use
                them yourself. Nothing real sits behind them — no customer data, no live sending.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="inline-flex w-fit items-center gap-2 border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2 text-sm text-[var(--color-fg-muted)] shadow-[3px_3px_0_var(--color-border)]">
                <KeyRound className="size-4 text-[var(--color-brand)]" />
                Passcode <code className="font-mono font-semibold text-[var(--color-fg)]">nuvero.space</code> — applied automatically when you click through.
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.06}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[5px_5px_0_var(--color-border)] transition-all hover:shadow-[7px_7px_0_var(--color-brand)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-[var(--color-border)] bg-[var(--color-bg)]">
                  <Image
                    src={d.thumb}
                    alt={`${d.name} — live demo screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-fg-muted)]">
                    {d.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-display text-lg font-semibold tracking-tight text-[var(--color-fg)]">
                      {d.name}
                    </h2>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[var(--color-fg-subtle)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" />
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{d.blurb}</p>
                  <span className="mt-auto pt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                    Open live demo →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
