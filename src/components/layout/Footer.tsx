import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin, Instagram, Twitter } from "@/components/shared/brand-icons";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { MotionToggle } from "./MotionToggle";
import { FooterWordmark } from "./FooterWordmark";
import { RollText } from "@/components/fx/RollText";

const outcomeLabel: Record<string, string> = {
  "custom-ai-workflows": "Workflow automation",
  "ai-voice-agents": "Voice agents",
  "ai-lead-generation": "Lead generation",
};

export function Footer() {
  return (
    <footer className="relative mt-20 border-t-2 border-[var(--color-border)] bg-[var(--color-bg-elev)]">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-callout text-[var(--color-fg-muted)]">
              {site.tagline}
            </p>
            <div className="flex items-center gap-2">
              <SocialLink href={site.socials.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialLink>
              <SocialLink href={site.socials.github} label="GitHub">
                <Github className="size-4" />
              </SocialLink>
              <SocialLink href={site.socials.instagram} label="Instagram">
                <Instagram className="size-4" />
              </SocialLink>
              <SocialLink href={site.socials.twitter} label="X (Twitter)">
                <Twitter className="size-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Company">
            <FooterLink href="/what-we-offer">Infrastructure</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/process">Process</FooterLink>
            <FooterLink href="/work">Deployments</FooterLink>
            <FooterLink href="/briefings">Briefings</FooterLink>
            <FooterLink href="/reviews">Reviews</FooterLink>
            <FooterLink href="/booklet">Infrastructure booklet</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Systems">
            <FooterLink href="/industries">Industries</FooterLink>
            {services.slice(0, 4).map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {outcomeLabel[s.slug] ?? s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex min-h-11 items-center gap-2 text-callout text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
              >
                <Mail className="size-3.5" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="inline-flex min-h-11 items-center gap-2 text-callout text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
              >
                <Phone className="size-3.5" />
                {site.contact.phone}
              </a>
            </li>
            <li className="pt-2 text-callout text-[var(--color-fg-subtle)]">{site.founder.location}</li>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-callout text-[var(--color-fg-subtle)] lg:flex-row lg:items-center">
          <span>© {new Date().getFullYear()} Nuvero AI. Built to run while you sleep.</span>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5">
            <Link href="/security" className="inline-flex min-h-11 items-center whitespace-nowrap transition-colors hover:text-[var(--color-brand)]">Security &amp; data</Link>
            <Link href="/privacy" className="inline-flex min-h-11 items-center whitespace-nowrap transition-colors hover:text-[var(--color-brand)]">Privacy policy</Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center whitespace-nowrap transition-colors hover:text-[var(--color-brand)]">Terms of service</Link>
            <MotionToggle />
          </nav>
        </div>
      </div>
      <FooterWordmark />
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="eyebrow text-[var(--color-fg-muted)]">{title}</h2>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex min-h-11 items-center text-callout text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
      >
        {typeof children === "string" ? <RollText>{children}</RollText> : children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
    >
      {children}
    </a>
  );
}
