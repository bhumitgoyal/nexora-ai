import type { Metadata } from "next";
import Link from "next/link";
import { GridBackground } from "@/components/shared/GridBackground";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Nuvero AI website and the conditions under which we deliver AI automation services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <div className="container-x relative z-10 max-w-3xl mx-auto">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] mb-4">
            Last updated: June 26, 2026
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-[var(--color-fg-muted)]">
            By accessing or using nuveroai.com (&ldquo;the Website&rdquo;), you agree to be bound by
            these Terms of Service. If you do not agree, please do not use this Website.
          </p>
        </div>
      </section>

      <section className="container-x pb-32 max-w-3xl mx-auto">
        <div className="flex flex-col gap-12 text-[var(--color-fg-muted)]">

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              1. Use of the Website
            </h2>
            <p className="text-sm leading-relaxed">
              You may use this Website for lawful purposes only. You agree not to:
            </p>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed">
              {[
                "Use the Website in any way that violates applicable laws or regulations",
                "Attempt to gain unauthorised access to any part of the Website or its infrastructure",
                "Submit false, misleading, or fraudulent information through any form on the Website",
                "Reproduce, duplicate, or resell any part of the Website without our express written permission",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              2. Services
            </h2>
            <p className="text-sm leading-relaxed">
              This Website is a marketing and inquiry platform for Nuvero AI&rsquo;s custom AI
              development and automation services. Enquiries submitted through the contact form
              do not constitute a binding service agreement.
            </p>
            <p className="text-sm leading-relaxed">
              All paid engagements are governed by a separate Service Agreement signed by both
              parties prior to any work commencing. That agreement supersedes any information
              on this Website regarding deliverables, timelines, and pricing.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              3. Intellectual Property
            </h2>
            <p className="text-sm leading-relaxed">
              All content on this Website — including text, design, graphics, case study
              summaries, and code — is the property of Nuvero AI and is protected by applicable
              intellectual property laws. You may not reproduce or redistribute any content
              without prior written consent.
            </p>
            <p className="text-sm leading-relaxed">
              Ownership of custom software, AI systems, and workflows delivered under a client
              engagement is governed by the terms of the relevant Service Agreement.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              4. Accuracy of Information
            </h2>
            <p className="text-sm leading-relaxed">
              We make reasonable efforts to keep the information on this Website accurate and
              up to date. However, we make no warranties — express or implied — regarding the
              completeness, accuracy, or suitability of any information on this Website for any
              particular purpose.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              5. Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed">
              To the fullest extent permitted by applicable law, Nuvero AI shall not be liable
              for any indirect, incidental, special, or consequential damages arising from your
              use of this Website or reliance on any information contained herein. Our total
              liability to you for any claim arising from your use of the Website shall not
              exceed INR 1,000.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              6. Third-Party Links
            </h2>
            <p className="text-sm leading-relaxed">
              This Website may contain links to third-party websites. These links are provided
              for convenience only. We have no control over those sites and accept no
              responsibility for their content, privacy practices, or availability.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              7. Governing Law
            </h2>
            <p className="text-sm leading-relaxed">
              These Terms are governed by the laws of India. Any disputes arising out of or in
              connection with these Terms shall be subject to the exclusive jurisdiction of the
              courts located in India.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              8. Changes to These Terms
            </h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to update these Terms at any time. The &ldquo;Last updated&rdquo; date
              at the top of this page reflects the most recent revision. Continued use of the
              Website after any changes constitutes your acceptance of the updated Terms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              9. Contact
            </h2>
            <p className="text-sm leading-relaxed">
              For any questions about these Terms, contact us at{" "}
              <a
                href="mailto:hello@nuvero.space"
                className="text-[var(--color-brand)] hover:underline"
              >
                hello@nuvero.space
              </a>
              .
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-8">
            <Link
              href="/privacy"
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors"
            >
              View Privacy Policy →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
