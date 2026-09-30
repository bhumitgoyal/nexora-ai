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
      <dl className="container-x grid grid-cols-1 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={
              "flex flex-col gap-2 border-[var(--color-border)] py-7 md:py-10 " +
              (i > 0 ? "border-t sm:border-l sm:border-t-0 sm:pl-6" : "sm:pr-6")
            }
          >
            <dd className="order-1 font-display text-4xl font-semibold tabular-nums tracking-tight text-[var(--color-brand)] md:text-5xl">
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </dd>
            <dt className="order-2 text-callout text-[var(--color-fg-muted)]">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
