import { techStack } from "@/content/techStack";
import { Marquee } from "@/components/shared/Marquee";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function TechStackMarquee() {
  const rowA = techStack.slice(0, 12);
  const rowB = techStack.slice(12);

  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our toolkit"
          title="Services we automate for your business."
          subtitle="From sales follow-ups to invoice processing — we take repetitive tasks off your plate so you can focus on what matters."
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <Marquee>
          {rowA.map((t) => (
            <ServiceChip key={t.name} name={t.name} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((t) => (
            <ServiceChip key={t.name} name={t.name} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function ServiceChip({ name }: { name: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-5 py-2.5 font-display text-sm font-semibold text-[var(--color-fg)]">
      <span className="size-1.5 bg-[var(--color-brand)]" />
      {name}
    </span>
  );
}
