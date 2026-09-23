import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { sectors, sectorSlug, serviceSlug } from "@/content/sectors";
import { sectorIcons } from "@/content/sectorIcons";

// This route used to redirect straight to /what-we-offer, which meant nothing
// linked to it and it had no reason to exist. It is now the hub: the one page
// that connects to every sector and every sector-service landing page.
export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries",
  description:
    "The systems we build, by industry. Real estate, e-commerce, marketing agencies, restaurants, and B2B SaaS — each with the workflows we automate end to end.",
};

export default function IndustriesPage() {
  const systemCount = sectors.reduce((total, sector) => total + sector.services.length, 0);

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                <span className="size-1.5 bg-[var(--color-brand)]" />
                Industries
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                The same layer, built for{" "}
                <span className="text-[var(--color-brand)]">your industry</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                Every operation has a different set of workflows worth automating. These are the{" "}
                {systemCount} systems we build most often, grouped by the industry they were shaped
                for — each one a real workflow, wired into the tools you already run.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="container-x">
          <div className="flex flex-col gap-6">
            {sectors.map((sector, index) => {
              const Icon = sectorIcons[sector.id];
              const slug = sectorSlug(sector);

              return (
                <Reveal key={sector.id} delay={index * 0.05}>
                  <article className="border-2 border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-[6px_6px_0_var(--color-border)] md:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-3">
                          {Icon ? (
                            <span className="grid size-9 shrink-0 place-items-center border border-[var(--color-border)] bg-[var(--color-bg-elev)]">
                              <Icon className="size-4 text-[var(--color-brand)]" />
                            </span>
                          ) : null}
                          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-fg)] md:text-3xl">
                            <Link
                              href={`/industries/${slug}`}
                              className="transition-colors hover:text-[var(--color-brand)]"
                            >
                              {sector.label}
                            </Link>
                          </h2>
                        </div>
                        <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--color-fg-muted)] md:text-base">
                          {sector.description}
                        </p>
                      </div>

                      <Link
                        href={`/industries/${slug}`}
                        className="inline-flex w-fit shrink-0 items-center gap-1.5 border-2 border-[var(--color-border)] px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-fg)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                      >
                        All {sector.services.length} systems
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>

                    <ul className="mt-7 grid gap-x-6 gap-y-1 border-t border-[var(--color-border)] pt-5 sm:grid-cols-2 lg:grid-cols-3">
                      {sector.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            href={`/industries/${slug}/${serviceSlug(service)}`}
                            className="group flex items-start gap-2.5 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-border)] transition-colors group-hover:bg-[var(--color-brand)]" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-16 border-2 border-[var(--color-brand)] bg-[var(--color-brand)]/[0.03] p-8">
              <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
                Not sure which of these your operation needs?
              </p>
              <p className="mt-2 max-w-2xl text-sm text-[var(--color-fg-muted)]">
                A systems audit maps your workflows against the ones above and tells you which
                system to build first, and which to leave alone.
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
