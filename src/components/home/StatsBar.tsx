import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";

const stats = [
  { value: 45, suffix: "+", label: "Custom AI systems shipped" },
  { value: 1.4, suffix: "M+", label: "AI interactions handled per month", decimals: 1 },
  { value: 92, suffix: "%", label: "client retention rate" },
  { value: 11, suffix: "", label: "industries served end-to-end" },
];

export function StatsBar() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-20 md:py-24">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              scale
              className="bg-[var(--color-bg)] p-8 transition-colors hover:bg-[var(--color-bg-elev)] md:p-10"
            >
              <div className="flex flex-col gap-2">
                <span className="font-display text-4xl font-semibold tracking-tight text-[var(--color-brand)] md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </span>
                <span className="text-sm text-[var(--color-fg-muted)]">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
