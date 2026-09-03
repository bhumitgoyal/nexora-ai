import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { briefings, getBriefing, type Block } from "@/content/briefings";

export function generateStaticParams() {
  return briefings.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBriefing(slug);
  if (!b) return { title: "Briefing not found" };
  return { title: b.title, description: b.dek };
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h":
      return (
        <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight text-[var(--color-fg)] md:text-3xl">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">{block.text}</p>;
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[var(--color-fg-muted)]">
              <span className="mt-2.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="border-l-4 border-[var(--color-brand)] bg-[var(--color-bg-elev)] px-5 py-4 font-display text-lg font-semibold tracking-tight text-[var(--color-fg)] md:text-xl">
          {block.text}
        </p>
      );
    case "ledger":
      return (
        <figure className="my-4 flex flex-col gap-2">
          <div className="overflow-x-auto border-2 border-[var(--color-border)] shadow-[6px_6px_0_var(--color-border)]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--color-surface)]">
                  {block.columns.map((col, i) => (
                    <th
                      key={col}
                      className={`border-b-2 border-[var(--color-border)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg)] ${
                        i > 0 ? "border-l border-[var(--color-border)]" : ""
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={row.label} className={r < block.rows.length - 1 ? "border-b border-[var(--color-border)]" : ""}>
                    <th
                      scope="row"
                      className="bg-[var(--color-bg-elev)] px-4 py-4 align-top font-display text-sm font-semibold tracking-tight text-[var(--color-fg)]"
                    >
                      <span className="mb-1 block font-mono text-[9px] font-normal uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                        {row.score}
                      </span>
                      {row.label}
                    </th>
                    {row.cells.map((cell, c) => (
                      <td
                        key={c}
                        className="border-l border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4 align-top text-sm leading-relaxed text-[var(--color-fg-muted)]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? (
            <figcaption className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}

export default async function BriefingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBriefing(slug);
  if (!b) notFound();

  return (
    <article className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/briefings"
              className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-fg-subtle)] transition-colors hover:text-[var(--color-brand)]"
            >
              <ArrowLeft className="size-3.5" />
              All briefings
            </Link>
          </Reveal>

          <div className="mt-8 flex items-center gap-3">
            <span className="border border-[var(--color-border)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-fg-muted)]">
              {b.category}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
              {fmt(b.date)} · {b.readMins} min read
            </span>
          </div>

          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-fg)] md:text-5xl">
            {b.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)] md:text-xl">
            {b.dek}
          </p>

          <div className="mt-6 h-0.5 w-full bg-[var(--color-border)]" />
        </div>

        {/* wider column so the ledger table can breathe */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-6">
          {b.body.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-2 border-[var(--color-brand)] bg-[var(--color-brand)]/[0.03] p-8">
          <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
            Want this graded for your own stack?
          </p>
          <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
            A systems audit runs your operation against exactly these dimensions and hands you the report.
          </p>
          <Link
            href="/#automation-audit"
            className="mt-5 inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]"
          >
            Request a systems audit
          </Link>
        </div>
      </div>
    </article>
  );
}
