import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t-2 border-[var(--color-border)] bg-[var(--color-bg-elev)]">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm text-[var(--color-fg-muted)]">
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
              <SocialLink href={site.socials.twitter} label="Twitter">
                <Twitter className="size-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Company">
            <FooterLink href="/what-we-offer">What We Offer</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/process">Process</FooterLink>
            <FooterLink href="/work">Work</FooterLink>
            <FooterLink href="/booklet">Services booklet</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Services">
            {services.slice(0, 4).map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
            <FooterLink href="/what-we-offer#realestate">Real Estate AI</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
            >
              <Mail className="size-3.5" />
              {site.contact.email}
            </a>
            <a
              href={`tel:${site.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
            >
              <Phone className="size-3.5" />
              {site.contact.phone}
            </a>
            <p className="text-xs text-[var(--color-fg-subtle)]">
              {site.founder.location}
            </p>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-fg-subtle)] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Nuvero AI. Built to run while you sleep.</span>
          <div className="flex items-center gap-5">
            <Link href="/security" className="hover:text-[var(--color-brand)] transition-colors">Security & Data</Link>
            <Link href="/privacy" className="hover:text-[var(--color-brand)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-brand)] transition-colors">Terms of Service</Link>
            <span className="font-mono">shipping_at_velocity()</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
      >
        {children}
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
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
    >
      {children}
    </a>
  );
}
