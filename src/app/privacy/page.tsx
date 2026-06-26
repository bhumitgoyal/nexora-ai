import type { Metadata } from "next";
import Link from "next/link";
import { GridBackground } from "@/components/shared/GridBackground";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nuvero AI collects, uses, and protects information submitted through our website and contact forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <div className="container-x relative z-10 max-w-3xl mx-auto">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-4">
            Last updated: June 26, 2026
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-[var(--color-fg-muted)]">
            Nuvero AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this website. This page
            explains what information we collect, how we use it, and your rights regarding it.
          </p>
        </div>
      </section>

      <section className="container-x pb-32 max-w-3xl mx-auto">
        <div className="flex flex-col gap-12 text-[var(--color-fg-muted)]">

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              1. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed">
              We collect information you voluntarily provide through our contact form, including:
            </p>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed">
              {[
                "Your name and email address",
                "Your company name and phone number",
                "A description of your project or workflow",
                "Your estimated budget range",
                "The service(s) you are interested in",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed">
              We do not collect any information automatically beyond what standard hosting providers
              (Vercel) log for security and performance purposes (e.g. IP address, browser type,
              pages visited).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              2. How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed">
              Information you submit through the contact form is used exclusively to:
            </p>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed">
              {[
                "Respond to your inquiry and scope your project",
                "Send you relevant information about Nuvero AI services you have requested",
                "Schedule and conduct discovery calls",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed">
              We will never use your information for unsolicited marketing, and we will never
              sell, rent, or share your personal information with third parties for their own
              marketing purposes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              3. Third-Party Services
            </h2>
            <p className="text-sm leading-relaxed">
              We use the following third-party services in operating this website:
            </p>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed">
              {[
                "Vercel — website hosting and infrastructure",
                "Resend — transactional email delivery for contact form submissions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed">
              These services may process your data as part of delivering their services. They
              are bound by their own privacy policies and data processing agreements.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              4. Cookies
            </h2>
            <p className="text-sm leading-relaxed">
              This website uses only functional cookies necessary for the site to operate
              correctly. We do not use advertising or tracking cookies. No cookie consent
              banner is displayed because no non-essential cookies are set.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              5. Data Retention
            </h2>
            <p className="text-sm leading-relaxed">
              Contact form submissions are retained in our email inbox for as long as needed to
              manage the business relationship with you. You may request deletion of your data
              at any time by contacting us.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              6. Your Rights
            </h2>
            <p className="text-sm leading-relaxed">
              You have the right to access, correct, or request deletion of personal information
              we hold about you. To exercise any of these rights, email us at{" "}
              <a
                href="mailto:nuveroai@gmail.com"
                className="text-[var(--color-brand)] hover:underline"
              >
                nuveroai@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              7. Changes to This Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at
              the top of this page reflects the most recent revision. Continued use of this
              website after any changes constitutes your acceptance of the updated policy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              8. Contact
            </h2>
            <p className="text-sm leading-relaxed">
              For any privacy-related questions, contact us at{" "}
              <a
                href="mailto:nuveroai@gmail.com"
                className="text-[var(--color-brand)] hover:underline"
              >
                nuveroai@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-8">
            <Link
              href="/terms"
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors"
            >
              View Terms of Service →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
