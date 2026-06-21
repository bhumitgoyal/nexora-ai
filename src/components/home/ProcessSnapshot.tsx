import { processSteps } from "@/content/process";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

export function ProcessSnapshot() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="How we work"
          title="We automate your pain points."
          subtitle="No theatre, no decks-as-deliverables. Just a tight cycle that ships working software every week."
        />

        <div className="relative mt-16">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative flex h-full flex-col border border-[var(--color-border)] border-b-0 last:border-b md:border-b md:border-r-0 md:last:border-r p-6 transition-all hover:bg-[var(--color-bg-elev)] hover:border-[var(--color-brand)]">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-mono text-4xl font-bold leading-none text-[var(--color-brand)]">
                      {step.number}
                    </span>
                    <span className="border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    {step.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
