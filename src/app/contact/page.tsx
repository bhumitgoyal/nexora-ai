import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Linkedin, Github, Instagram, MapPin, Clock } from "lucide-react";
import { site } from "@/content/site";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { Reveal } from "@/components/shared/Reveal";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with Nexora AI. We'll walk through your workflows, surface the top 3 AI opportunities, and tell you whether we're the right fit.",
};

const channels = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: Mail,
  },
  {
    label: "Call",
    value: site.contact.phone,
    href: `tel:${site.contact.phoneRaw}`,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Message us directly",
    href: `https://wa.me/${site.contact.whatsapp.replace(/[^0-9]/g, "")}`,
    icon: MessageCircle,
  },
];

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin, handle: "@bhumitgoyal" },
  { label: "GitHub", href: site.socials.github, icon: Github, handle: "@bhumitgoyal" },
  { label: "Instagram", href: site.socials.instagram, icon: Instagram, handle: "@bhumitgoyal" },
];

export default function ContactPage() {
  return (
    <>
      <section id="book" className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <GradientOrb tone="brand" size={520} className="left-[-160px] top-[-100px]" />
        <GradientOrb tone="accent" size={420} className="right-[-100px] top-[10%]" />

        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border-strong)] glass px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
                <span className="size-1.5 rounded-full bg-[var(--color-success)] shadow-[0_0_8px_var(--color-success)]" />
                Booking discovery calls
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Let's <span className="text-gradient">build</span> something that compounds.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                Tell us about the workflow you want AI to own. We'll reply within one
                business day with a no-fluff perspective on whether — and how — we can help.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  Reach us directly
                </h2>
                <ul className="flex flex-col gap-3">
                  {channels.map((c) => {
                    const Icon = c.icon;
                    return (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          target={c.label === "WhatsApp" ? "_blank" : undefined}
                          rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                          className="group flex items-center gap-4 card-surface p-4"
                        >
                          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(34,211,238,0.18))] text-[var(--color-accent)]">
                            <Icon className="size-4" />
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                              {c.label}
                            </span>
                            <span className="text-sm text-[var(--color-fg)] group-hover:text-[var(--color-accent)]">
                              {c.value}
                            </span>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex flex-col gap-4 card-surface p-6">
                <h2 className="font-display text-base font-semibold tracking-tight">
                  Find us online
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                        >
                          <Icon className="size-4" />
                          <span>{s.label}</span>
                          <span className="font-mono text-xs text-[var(--color-fg-subtle)]">{s.handle}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 text-sm text-[var(--color-fg-muted)]">
                <div className="flex items-center gap-3">
                  <MapPin className="size-4 text-[var(--color-brand-strong)]" />
                  <span>{site.founder.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-4 text-[var(--color-brand-strong)]" />
                  <span>Replies within 1 business day</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="card-surface p-7 md:p-10">
              <div className="mb-7 flex flex-col gap-1">
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  Tell us about your project
                </h2>
                <p className="text-sm text-[var(--color-fg-muted)]">
                  The more context, the sharper the first reply.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
