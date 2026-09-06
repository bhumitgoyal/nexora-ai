import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Building2, MonitorPlay } from "lucide-react";
import { getDeployments } from "@/lib/deployments";
import { caseStudies as curatedStudies } from "@/content/caseStudies";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { Reveal } from "@/components/shared/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Progress } from "@/components/ui/progress";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function parsePercent(metric: string): number | null {
  const m = metric.replace(/[~<>+]/g, "").match(/(\d+)%/);
  return m ? Math.min(100, parseInt(m[1], 10)) : null;
}

// No generateStaticParams: the deployment list is now editable at
// manage.nuvero.space/deployments without a rebuild, so slugs can't be enumerated at
// build time. dynamicParams defaults to true, so each page still renders on first
// request and is then cached/revalidated like any other page here (see getDeployments).

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deployments = await getDeployments();
  const study = deployments.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.client} · ${study.industry}`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudies = await getDeployments();
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  // Demo links live in the local content (the deployments feed doesn't carry them).
  const demoUrl = study.demoUrl ?? curatedStudies.find((c) => c.slug === slug)?.demoUrl;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <GridBackground />
        <GradientOrb tone="brand" size={560} className="left-[-160px] top-[-100px]" />
        <GradientOrb tone="accent" size={460} className="right-[-120px] top-[10%]" />

        <div className="container-x relative z-10 pt-12 md:pt-16">
          <Breadcrumb>
            <BreadcrumbList className="text-xs text-[var(--color-fg-muted)]">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="hover:text-[var(--color-fg)]">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/work" className="hover:text-[var(--color-fg)]">Work</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[var(--color-fg)]">{study.client}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container-x relative z-10 py-16 md:py-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
                <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1">
                  <Building2 className="size-3" /> {study.industry}
                </span>
                <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1">
                  <Calendar className="size-3" /> {study.duration} · {study.year}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-mono text-sm text-[var(--color-brand)]">{study.client}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-4xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {study.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-3xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                {study.summary}
              </p>
            </Reveal>
            {demoUrl ? (
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-2">
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]"
                  >
                    <MonitorPlay className="size-4" />
                    Open the live demo
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                    Interactive · runs on sample data only
                  </span>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      <section className="container-x">
        <Reveal>
          <div className="relative overflow-hidden bg-[var(--color-brand)] border-4 border-[var(--color-brand)]">
            {study.image ? (
              <Image
                src={study.image}
                alt={`${study.client} · AI automation workflow built by Nuvero AI`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
            ) : (
              <div className="aspect-[16/7]">
                <div className="absolute inset-0 grid-bg opacity-20" />
              </div>
            )}
          </div>
        </Reveal>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {study.results.map((r) => {
              const pct = parsePercent(r.metric);
              return (
                <div key={r.label} className="card-surface flex flex-col gap-3 p-7">
                  <span className="font-display text-4xl font-bold leading-none tracking-tight text-[var(--color-brand)] [overflow-wrap:anywhere] md:text-5xl">
                    {r.metric}
                  </span>
                  <span className="text-sm text-[var(--color-fg-muted)]">{r.label}</span>
                  {pct !== null && (
                    <Progress
                      value={pct}
                      className="h-1 rounded-none bg-[var(--color-border)] [&>div]:bg-[var(--color-brand)] [&>div]:rounded-none"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              The challenge
            </span>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              What we were up against
            </h2>
          </div>
          <Reveal>
            <p className="text-pretty text-base leading-relaxed text-[var(--color-fg)] md:text-lg">
              {study.challenge}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-brand-strong)]">
              Our approach
            </span>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              How we got from zero to live
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {study.approach.map((a, i) => (
              <Reveal key={a} delay={i * 0.06}>
                <li className="flex items-start gap-4 card-surface p-5">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center border-2 border-[var(--color-brand)] bg-[var(--color-brand)] font-mono text-xs font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-[var(--color-fg)] md:text-base">
                    {a}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              The solution
            </span>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              What we shipped
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {study.solution.map((s, i) => (
              <Reveal key={s} delay={i * 0.06}>
                <li className="flex items-start gap-3 border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 text-sm leading-relaxed text-[var(--color-fg)] md:text-base">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                  {s}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <Reveal>
          <div className="flex flex-col gap-5 card-surface p-7 md:p-10">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
              Tech stack
            </span>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-fg-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex items-center justify-between gap-4 card-surface p-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                Previous
              </span>
              <span className="font-display text-base font-semibold tracking-tight md:text-lg">
                {prev.client}
              </span>
            </div>
            <ArrowLeft className="size-5 text-[var(--color-fg-muted)] transition-all group-hover:-translate-x-0.5 group-hover:text-[var(--color-fg)]" />
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-4 card-surface p-6 text-right"
          >
            <ArrowRight className="size-5 order-2 text-[var(--color-fg-muted)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--color-fg)]" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                Next
              </span>
              <span className="font-display text-base font-semibold tracking-tight md:text-lg">
                {next.client}
              </span>
            </div>
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
