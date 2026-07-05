import {
  KeyRound,
  Server,
  ScrollText,
  UserCheck,
  Lock,
  FileSignature,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

type Plate = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PLATES: Plate[] = [
  {
    icon: KeyRound,
    title: "You own everything",
    body: "Code, prompts, data, models — handed over with runbooks at every milestone. No vendor lock-in, no per-seat tax.",
  },
  {
    icon: Server,
    title: "Your data never leaves your stack",
    body: "The layer deploys inside your cloud accounts. Customer data stays where it already lives.",
  },
  {
    icon: ScrollText,
    title: "Every action logged",
    body: "The switchboard isn't a metaphor — every call, message, and decision is timestamped and auditable.",
  },
  {
    icon: UserCheck,
    title: "Humans stay in the loop",
    body: "High-stakes actions wait for a signature. You decide where the layer stops and your team starts.",
  },
  {
    icon: Lock,
    title: "Encrypted end to end",
    body: "In transit and at rest, with least-privilege access from day one. Built with SOC 2 / GDPR / HIPAA considerations where relevant.",
  },
  {
    icon: FileSignature,
    title: "DPA & NDA on request",
    body: "Signed before kickoff when you need it. Paperwork should never be the blocker.",
  },
];

// Trust as an outcome: black-box AI asks for faith — the layer shows its work.
export function GlassBox() {
  return (
    <section id="security" className="relative scroll-mt-24 border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Glass box, not black box"
          title="Infrastructure you can read."
          subtitle="Black-box AI asks for trust. The layer shows its work — every decision inspectable, every outcome auditable, and all of it yours."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {PLATES.map((plate, i) => {
            const Icon = plate.icon;
            return (
              <Reveal key={plate.title} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-3 bg-[var(--color-bg)] p-6 transition-colors hover:bg-[var(--color-bg-elev)] md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-9 items-center justify-center border-[1.5px] border-[var(--color-brand)] text-[var(--color-brand)]">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {plate.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    {plate.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-md text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            Questions on data handling? Ask before kickoff — we&apos;ll put it in writing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
