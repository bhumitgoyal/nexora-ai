import type { Metadata } from "next";
import { pageMetadata, fitTitle, fitDescription } from "@/lib/seo";
import { SectorJsonLd } from "@/components/seo/schemas";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { getSectorBySlug, sectorPaths, sectorSlug, serviceSlug } from "@/content/sectors";
import { sectorIcons } from "@/content/sectorIcons";

export function generateStaticParams() {
  return sectorPaths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: "Industry not found", robots: { index: false, follow: true } };

  // Skip system names containing "tools"/"services" (positioning rule: copy says
  // systems/infrastructure, never tools or services).
  const systems = sector.services
    .map((s) => s.name.replace(/^AI /, ""))
    .filter((name) => !/\b(tools?|services?)\b/i.test(name))
    .slice(0, 3);
  return pageMetadata({
    title: fitTitle(`AI Infrastructure for ${sector.label}`, `AI Automation for ${sector.label}`),
    description: fitDescription(
      `AI infrastructure for ${sector.label}: ${systems.join(", ")} and more.`,
      "Agents trained on your workflows, wired into your stack, owned by you.",
      "Built and shipped in weeks.",
    ),
    path: `/industries/${slug}`,
    image: { url: `/industries/${slug}/opengraph-image`, alt: `AI infrastructure for ${sector.label}` },
  });
}

export default async function SectorPage({ params }: { params: Promise<{ sector: string }> }) {
  const { sector: slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const Icon = sectorIcons[sector.id];

  return (
    <>
      <SectorJsonLd sector={sector} />
      <section className="section-y relative isolate overflow-hidden ">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <Reveal priority>
            <Link
              href="/industries"
              className="eyebrow inline-flex w-fit items-center gap-1.5 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
            >
              <ArrowLeft className="size-3.5" />
              All industries
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6">
            <Reveal priority delay={0.05}>
              <span className="eyebrow inline-flex w-fit items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 text-[var(--color-fg-muted)]">
                {Icon ? <Icon className="size-3 text-[var(--color-brand)]" /> : null}
                {sector.label}
              </span>
            </Reveal>
            <Reveal priority delay={0.1}>
              <h1 className="max-w-3xl text-balance font-display font-semibold text-title-1">
                AI automation for{" "}
                <span className="text-[var(--color-brand)]">{sector.label}</span>.
              </h1>
            </Reveal>
            <Reveal priority delay={0.15}>
              <p className="max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                {sector.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="container-x">
          <Reveal>
            <h2 className="eyebrow text-[var(--color-fg-muted)]">
              {sector.services.length} systems we build for {sector.label}
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {sector.services.map((service, index) => (
              <Reveal key={service.name} delay={index * 0.04}>
                <Link
                  href={`/industries/${sectorSlug(sector)}/${serviceSlug(service)}`}
                  className="group flex h-full flex-col border-2 border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-[6px_6px_0_var(--color-border)] transition-colors hover:border-[var(--color-brand)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-brand)]">
                      {service.name}
                    </h3>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-[var(--color-fg-subtle)] transition-colors group-hover:text-[var(--color-brand)]" />
                  </div>

                  <p className="mt-3 text-pretty text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    {service.tagline}
                  </p>

                  {service.stat ? (
                    <span className="eyebrow mt-5 inline-flex w-fit items-center border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-1 text-[var(--color-fg)]">
                      {service.stat}
                    </span>
                  ) : null}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 border-2 border-[var(--color-brand)] bg-[var(--color-brand)]/[0.03] p-8">
              <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
                Which of these should you build first?
              </p>
              <p className="mt-2 max-w-2xl text-sm text-[var(--color-fg-muted)]">
                A systems audit runs your {sector.label.toLowerCase()} operation against every
                system on this page and hands you the sequence.
              </p>
              <Link
                href="/#automation-audit"
                className="mt-5 inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)]"
              >
                Request a systems audit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
