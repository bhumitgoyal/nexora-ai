import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/content/site";
import {
  getSectorBySlug,
  getServiceBySlug,
  sectorSlug,
  serviceSlug,
  solutionPaths,
} from "@/content/sectors";

export function generateStaticParams() {
  return solutionPaths;
}

type Params = Promise<{ sector: string; service: string }>;

async function resolve(params: Params) {
  const { sector: sectorParam, service: serviceParam } = await params;
  const sector = getSectorBySlug(sectorParam);
  if (!sector) return null;
  const service = getServiceBySlug(sector, serviceParam);
  if (!service) return null;
  return { sector, service, sectorParam, serviceParam };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const found = await resolve(params);
  if (!found) return { title: "System not found" };
  const { sector, service, sectorParam, serviceParam } = found;

  return {
    // The title carries the sector because that pairing is the search this page
    // is meant to answer, e.g. "AI Lead Nurturing Agent for Real Estate".
    title: `${service.name} for ${sector.label}`,
    description: service.tagline,
    alternates: { canonical: `/industries/${sectorParam}/${serviceParam}` },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const found = await resolve(params);
  if (!found) notFound();
  const { sector, service, sectorParam, serviceParam } = found;

  const related = sector.services.filter((candidate) => candidate.name !== service.name).slice(0, 4);
  const pageUrl = `${site.url}/industries/${sectorParam}/${serviceParam}`;

  // Service + breadcrumb structured data. `provider` points at the same
  // Organization @id declared in components/seo/JsonLd, so these pages attach
  // to the existing entity instead of describing an unrelated company.
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: `${service.name} for ${sector.label}`,
        serviceType: service.name,
        description: service.how,
        url: pageUrl,
        provider: { "@id": `${site.url}/#organization` },
        audience: { "@type": "BusinessAudience", audienceType: sector.label },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Industries", item: `${site.url}/industries` },
          {
            "@type": "ListItem",
            position: 2,
            name: sector.label,
            item: `${site.url}/industries/${sectorParam}`,
          },
          { "@type": "ListItem", position: 3, name: service.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <article className="py-20 md:py-24">
        <div className="container-x">
          {/* ── Header ─────────────────────────────────────────────── */}
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Link
                href={`/industries/${sectorParam}`}
                className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-fg-subtle)] transition-colors hover:text-[var(--color-brand)]"
              >
                <ArrowLeft className="size-3.5" />
                {sector.label}
              </Link>
            </Reveal>

            <h1 className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-fg)] md:text-5xl">
              {service.name} for{" "}
              <span className="text-[var(--color-brand)]">{sector.label}</span>
            </h1>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)] md:text-xl">
              {service.tagline}
            </p>

            {service.stat ? (
              <span className="mt-6 inline-flex w-fit items-center gap-2 border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg)]">
                <span className="size-1.5 bg-[var(--color-brand)]" />
                {service.stat}
              </span>
            ) : null}

            <div className="mt-8 h-0.5 w-full bg-[var(--color-border)]" />
          </div>

          {/* ── How it works ───────────────────────────────────────── */}
          <div className="mx-auto mt-10 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-fg)] md:text-3xl">
              How it works
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
              {service.how}
            </p>
          </div>

          {/* ── The workflow ───────────────────────────────────────── */}
          <div className="mx-auto mt-14 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-fg)] md:text-3xl">
              The workflow
            </h2>
            <p className="mt-3 text-sm text-[var(--color-fg-muted)]">
              Every step below runs unattended. Your team is involved only where the system is
              designed to hand off.
            </p>

            <ol className="mt-7 flex flex-col">
              {service.steps.map((step, index) => (
                <li key={step.name} className="flex gap-4">
                  {/* rail: index marker + connector */}
                  <div className="flex flex-col items-center">
                    <span className="grid size-9 shrink-0 place-items-center border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] font-mono text-[11px] font-semibold text-[var(--color-brand)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < service.steps.length - 1 ? (
                      <span aria-hidden className="w-0.5 flex-1 bg-[var(--color-border)]" />
                    ) : null}
                  </div>

                  <div className={index < service.steps.length - 1 ? "pb-7" : ""}>
                    <p className="font-display text-base font-semibold tracking-tight text-[var(--color-fg)]">
                      {step.name}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                      {step.sub}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ── CTA ────────────────────────────────────────────────── */}
          <div className="mx-auto mt-16 max-w-3xl border-2 border-[var(--color-brand)] bg-[var(--color-brand)]/[0.03] p-8">
            <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
              Want this running on your stack?
            </p>
            <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
              A systems audit maps this against how your {sector.label.toLowerCase()} operation
              actually works, and scopes it as a fixed piece of work.
            </p>
            <Link
              href="/#automation-audit"
              className="mt-5 inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)]"
            >
              Request a systems audit
            </Link>
          </div>

          {/* ── Related ────────────────────────────────────────────── */}
          {related.length > 0 ? (
            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                Also built for {sector.label}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((candidate) => (
                  <Link
                    key={candidate.name}
                    href={`/industries/${sectorSlug(sector)}/${serviceSlug(candidate)}`}
                    className="group flex items-start justify-between gap-3 border-2 border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-colors hover:border-[var(--color-brand)]"
                  >
                    <div>
                      <p className="font-display text-base font-semibold tracking-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-brand)]">
                        {candidate.name}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                        {candidate.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[var(--color-fg-subtle)] transition-colors group-hover:text-[var(--color-brand)]" />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
