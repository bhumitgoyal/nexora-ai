import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Building2, MonitorPlay, KeyRound, Coins } from "lucide-react";
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

  // Demo fields: prefer the feed row, fall back to local content by slug.
  const local = curatedStudies.find((c) => c.slug === slug);
  const demoUrl = study.demoUrl ?? local?.demoUrl;
  const snapshot = study.snapshot ?? local?.snapshot;
  const passcode = study.demoPasscode ?? local?.demoPasscode ?? "nuvero.space";
  const runningCost = study.runningCost ?? local?.runningCost;
  const demoDisplayUrl = demoUrl ? demoUrl.split("?")[0] : "";
  // Show the poster (workflow diagram) beside the challenge, unless it is the same
  // image as the demo snapshot (the 3 demo-only studies), which would just repeat it.
  const posterToShow = study.image && study.image !== snapshot ? study.image : null;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <GridBackground interactive={false} />
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
                    Passcode <span className="text-[var(--color-fg-muted)]">{passcode}</span> · runs on sample data
                  </span>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      {demoUrl ? (
        <section className="container-x pt-4 md:pt-8">
          <Reveal>
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[6px_6px_0_var(--color-brand)]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {snapshot ? (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden border-b-2 border-[var(--color-border)] lg:border-b-0 lg:border-r-2"
                  >
                    <Image
                      src={snapshot}
                      alt={`${study.client} live demo screenshot`}
                      width={0}
                      height={0}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />
                  </a>
                ) : null}

                <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg)]">
                      <span className="size-1.5 animate-pulse bg-[var(--color-brand)]" />
                      Live demo · sample data only
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                      Open the running system and try it yourself. It runs on scrubbed sample
                      data behind a passcode, so nothing here is a real customer record.
                    </p>
                    {runningCost ? (
                      <span className="inline-flex w-fit items-center gap-1.5 border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                        <Coins className="size-3.5" /> Approx. running cost {runningCost}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-3">
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
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-fg-muted)]">
                      <KeyRound className="size-4 text-[var(--color-brand)]" />
                      Passcode <span className="font-semibold text-[var(--color-fg)]">{passcode}</span>
                    </span>
                    {demoDisplayUrl ? (
                      <span className="max-w-full truncate font-mono text-[11px] text-[var(--color-fg-subtle)]">
                        {demoDisplayUrl.replace("https://", "")}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

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
        {posterToShow ? (
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden border-2 border-[var(--color-border)] bg-[var(--color-surface)] shadow-[6px_6px_0_var(--color-brand)]">
                <Image
                  src={posterToShow}
                  alt={`${study.client} · AI automation workflow built by Nuvero AI`}
                  width={0}
                  height={0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                The challenge
              </span>
              <h2 className="font-display text-2xl font-semibold md:text-3xl">
                What we were up against
              </h2>
              <Reveal>
                <p className="text-pretty text-base leading-relaxed text-[var(--color-fg)] md:text-lg">
                  {study.challenge}
                </p>
              </Reveal>
            </div>
          </div>
        ) : (
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
        )}
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
