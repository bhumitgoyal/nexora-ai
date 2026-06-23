import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Select Agency — ${site.name}`,
  robots: { index: false, follow: false },
};

const agencies = [
  {
    label: "Marketing Agency",
    description: "Client acquisition, campaign automation, and AI-driven growth for agencies.",
    href: "/bookletmarketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 1 8.835-2.535m0 0A23.74 23.74 0 0 1 18.795 3c1.303 0 2.533.516 3.434 1.434a4.49 4.49 0 0 1-.001 6.349m-15.93 0a4.5 4.5 0 0 0 6.362 6.362" />
      </svg>
    ),
  },
  {
    label: "Manufacturing Agency",
    description: "Production ops, supply chain intelligence, and automated quality control.",
    href: "/booklet/view",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.655m5.83-1.225c-.33.198-.694.316-1.07.36-1.16.13-2.387-.47-3.005-1.502M5.828 9.172A4.5 4.5 0 0 1 12 5.35c.44 0 .875.05 1.295.145" />
      </svg>
    ),
  },
  {
    label: "D2C Brands",
    description: "Retention automation, personalised commerce, and conversion intelligence.",
    href: "/bookletD2C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
      </svg>
    ),
  },
  {
    label: "Restaurant Operators",
    description: "Staff scheduling, reservation intelligence, and demand forecasting for food businesses.",
    href: "/booklet/view",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
      </svg>
    ),
  },
];

export default function BookletSelectorPage() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center bg-[var(--color-bg)] px-6 py-24">
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)] hover:text-[var(--color-brand-strong)] transition-colors duration-200"
      >
        <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
          <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H3.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L3.56 7.25H13.25A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
        </svg>
        Back
      </Link>
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
            Agency Booklet
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--color-fg)] md:text-4xl">
            Select your agency type
          </h1>
          <p className="mt-3 text-sm text-[var(--color-fg-muted)]">
            Pick the booklet that matches your industry for a tailored overview.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {agencies.map((agency) => (
            <Link
              key={agency.label}
              href={agency.href}
              className="group flex flex-col gap-4 border border-[var(--color-border)] bg-[var(--color-bg)] p-7 transition-all duration-200 hover:border-[var(--color-brand)] hover:bg-[var(--color-bg-elev)]"
            >
              <span className="text-[var(--color-brand)] transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 inline-block">
                {agency.icon}
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-fg)]">
                  {agency.label}
                </span>
                <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {agency.description}
                </p>
              </div>
              <span className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                View booklet
                <svg viewBox="0 0 16 16" fill="currentColor" className="size-3">
                  <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
