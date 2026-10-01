import type { Metadata } from "next";
import { pageMetadata, fitTitle, fitDescription } from "@/lib/seo";
import { BriefingJsonLd } from "@/components/seo/schemas";
import Link from "next/link";
import { site } from "@/content/site";
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
  if (!b) return { title: "Briefing not found", robots: { index: false, follow: true } };
  return pageMetadata({
    title: fitTitle(b.title),
    description: fitDescription(
      b.dek,
      `A Nuvero AI briefing on building, running and owning AI infrastructure. ${b.readMins} min read.`,
    ),
    path: `/briefings/${slug}`,
    type: "article",
    image: { url: `/briefings/${slug}/opengraph-image`, alt: b.title },
    article: { publishedTime: b.date, section: b.category, tags: ["AI infrastructure", b.category] },
  });
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function BlockView({ block, section }: { block: Block; section?: number }) {
  switch (block.type) {
    case "h":
      return (
        <h2 className="mt-12 flex items-baseline gap-4 font-display text-title-2 font-semibold text-[var(--color-fg)]">
          {section ? (
            <span aria-hidden className="font-mono text-base font-bold text-[var(--color-brand)]">
              {String(section).padStart(2, "0")}
            </span>
          ) : null}
          <span>{block.text}</span>
        </h2>
      );
    case "p":
      // ~68ch measure, 1.7 leading: long-form reading rhythm, not UI rhythm
      return <p className="max-w-[68ch] text-pretty text-body leading-[1.7] text-[var(--color-fg)] md:text-lg">{block.text}</p>;
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex max-w-[68ch] items-start gap-3 text-body leading-[1.7] text-[var(--color-fg)]">
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
                      className={`border-b-2 border-[var(--color-border)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg)] ${
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
                      <span className="eyebrow mb-1 block font-normal text-[var(--color-fg-muted)]">
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
            <figcaption className="eyebrow text-[var(--color-fg-muted)]">
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
      <BriefingJsonLd briefing={b} />
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <Reveal priority>
            <Link
              href="/briefings"
              className="eyebrow inline-flex min-h-11 w-fit items-center gap-1.5 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
            >
              <ArrowLeft className="size-3.5" />
              All briefings
            </Link>
          </Reveal>

          <div className="mt-8 flex items-center gap-3">
            <span className="eyebrow border border-[var(--color-border)] px-2 py-0.5 text-[var(--color-fg-muted)]">
              {b.category}
            </span>
            <span className="eyebrow text-[var(--color-fg-muted)]">
              By {site.founder.name} · {fmt(b.date)} · {b.readMins} min read
            </span>
          </div>

          <h1 className="mt-5 text-balance font-display text-title-1 font-semibold text-[var(--color-fg)]">
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
            <BlockView
              key={i}
              block={block}
              section={block.type === "h" ? b.body.slice(0, i + 1).filter((x) => x.type === "h").length : undefined}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-2 border-[var(--color-brand)] bg-[var(--color-brand)]/[0.03] p-8">
          <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
            Want this graded for your own stack?
          </p>
          <p className="mt-2 text-callout text-[var(--color-fg-muted)]">
            A systems audit runs your operation against exactly these dimensions and hands you the report.
          </p>
          <Link
            href="/#automation-audit"
            className="press mt-5 inline-flex min-h-12 items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 text-[15px] font-semibold text-white shadow-[var(--shadow-hard-sm)] transition-colors hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)]"
          >
            Run the automation audit
          </Link>
        </div>
      </div>
    </article>
  );
}
