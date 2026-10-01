import type { MetadataRoute } from "next";
import { briefings } from "@/content/briefings";
import { sectors, sectorSlug, serviceSlug } from "@/content/sectors";
import { getDeployments } from "@/lib/deployments";
import { absoluteUrl } from "@/lib/seo";

// Every indexable route. Kept in sync with src/app/**/page.tsx by hand.
//
// Excluded on purpose:
// - /booklet* — print-layout lead magnets, marked noindex; they restate copy
//   already published on /services and /work.
// - /api/* — not pages.
//
// lastModified is only set where there is a real content date (briefings).
// A build-time `new Date()` on every URL tells crawlers everything changed on
// every deploy, which trains them to ignore the field entirely.

type Entry = MetadataRoute.Sitemap[number];

const page = (
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly",
  lastModified?: Date,
): Entry => ({
  url: absoluteUrl(path),
  changeFrequency,
  priority,
  ...(lastModified ? { lastModified } : {}),
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const latestBriefing = briefings.reduce((max, b) => (b.date > max ? b.date : max), "1970-01-01");

  const core: Entry[] = [
    page("/", 1, "weekly"),
    page("/what-we-offer", 0.9),
    page("/services", 0.9),
    page("/industries", 0.8),
    page("/work", 0.9, "weekly"),
    page("/pricing", 0.8),
    page("/process", 0.7),
    page("/about", 0.7),
    page("/contact", 0.8, "yearly"),
    page("/reviews", 0.6),
    page("/briefings", 0.7, "weekly", new Date(latestBriefing)),
    page("/security", 0.5, "yearly"),
  ];

  const sectorPages = sectors.map((s) => page(`/industries/${sectorSlug(s)}`, 0.7));

  // "AI {system} for {industry}" landing pages.
  const systemPages = sectors.flatMap((s) =>
    s.services.map((svc) => page(`/industries/${sectorSlug(s)}/${serviceSlug(svc)}`, 0.6)),
  );

  // Deployments come from the outreach feed (falls back to local content), so
  // a deployment added in the admin is discoverable without a code change.
  const deployments = await getDeployments();
  const workPages = deployments.map((d) => page(`/work/${d.slug}`, 0.7));

  const briefingPages = briefings.map((b) => page(`/briefings/${b.slug}`, 0.6, "yearly", new Date(b.date)));

  // Required to exist and be reachable, but never the page we want ranked.
  // Dates match the "Last updated" line on each page.
  const legal = [
    page("/privacy", 0.1, "yearly", new Date("2026-06-26")),
    page("/terms", 0.1, "yearly", new Date("2026-06-26")),
  ];

  return [...core, ...sectorPages, ...systemPages, ...workPages, ...briefingPages, ...legal];
}
