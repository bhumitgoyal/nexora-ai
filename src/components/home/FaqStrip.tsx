import Link from "next/link";
import { faqs } from "@/content/faqs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Reveal } from "@/components/shared/Reveal";

export function FaqStrip() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Common questions"
              title="Answers to the things founders usually ask first."
              align="left"
              className="max-w-md"
            />
            <Reveal>
              <p className="text-sm text-[var(--color-fg-muted)]">
                Still have questions? Drop us a line Bhumit replies personally to every inquiry.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]"
              >
                Ask anything
              </Link>
            </Reveal>
          </div>

          <FaqAccordion items={faqs.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}
