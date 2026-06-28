const stats = [
  { value: "45+", label: "AI systems shipped — owned by clients forever" },
  { value: "1.4M+", label: "AI interactions handled per month" },
  { value: "92%", label: "client retention rate" },
  { value: "11", label: "industries automated end-to-end" },
];

export function StatsBar() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-20 md:py-24">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-bg)] p-8 transition-colors hover:bg-[var(--color-bg-elev)] md:p-10"
            >
              <div className="flex flex-col gap-2">
                <span className="font-display text-4xl font-semibold tracking-tight text-[var(--color-brand)] md:text-5xl">
                  {s.value}
                </span>
                <span className="text-sm text-[var(--color-fg-muted)]">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
