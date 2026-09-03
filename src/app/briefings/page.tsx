import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { briefings } from "@/content/briefings";

export const metadata: Metadata = {
  title: "Intelligence Briefings",
  description:
    "Nuvero AI's briefings on AI infrastructure: readiness rubrics, field notes, and positions on building the intelligence layer your business runs on.",
};

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BriefingsPage() {
  const sorted = [...briefings].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                <span className="size-1.5 bg-[var(--color-brand)]" />
                Intelligence briefings
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Notes from the <span className="text-[var(--color-brand)]">infrastructure</span> layer.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                Rubrics, field notes, and positions on what it actually takes to run AI in
                production. Written for the people who have to own the result.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[6px_6px_0_var(--color-border)]">
          <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg)]">
              Briefing log
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              {sorted.length} entries
            </span>
          </div>

          <ul className="flex flex-col">
            {sorted.map((b, i) => (
              <li key={b.slug} className={i < sorted.length - 1 ? "border-b border-[var(--color-border)]" : ""}>
                <Link
                  href={`/briefings/${b.slug}`}
                  className="group flex flex-col gap-3 px-5 py-6 transition-colors hover:bg-[var(--color-surface)] md:flex-row md:items-center md:gap-6"
                >
                  <div className="flex shrink-0 items-center gap-3 md:w-56">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                      {fmt(b.date)}
                    </span>
                    <span className="border border-[var(--color-border)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-fg-muted)]">
                      {b.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <h2 className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-[var(--color-fg)] md:text-xl">
                      {b.title}
                      {b.featured ? (
                        <span className="border border-[var(--color-brand)] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--color-brand)]">
                          Flagship
                        </span>
                      ) : null}
                    </h2>
                    <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{b.dek}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                      {b.readMins} min
                    </span>
                    <ArrowUpRight className="size-4 text-[var(--color-fg-subtle)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
