import { CountUp } from "@/components/shared/CountUp";

const stats = [
  { value: 1.4, suffix: "M+", decimals: 1, label: "AI interactions handled per month" },
  { value: 92, suffix: "%", label: "client retention rate" },
  { value: 11, label: "industries automated end to end" },
];

// Proof, directly under the promise: three numbers, no decoration. (The
// systems-shipped count already sits in the hero — say each thing once.)
export function StatsBar() {
  return (
    <section aria-label="Nuvero in numbers" className="relative border-b border-[var(--color-border)]">
      <dl className="container-x grid grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={
              "flex flex-col gap-1.5 border-[var(--color-border)] py-6 md:gap-2 md:py-10 " +
              (i > 0 ? "border-l pl-3 sm:pl-6" : "pr-3 sm:pr-6")
            }
          >
            <dd className="order-1 font-display text-2xl font-semibold tabular-nums tracking-tight text-[var(--color-brand)] sm:text-4xl md:text-5xl">
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </dd>
            <dt className="order-2 text-[13px] leading-snug text-[var(--color-fg-muted)] sm:text-callout">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
