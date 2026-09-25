import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";
import { briefings } from "@/content/briefings";
import { sectors, sectorSlug, serviceSlug } from "@/content/sectors";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Static routes, kept in sync with src/app/**/page.tsx by hand.
  //
  // /industries is listed here deliberately: nothing in the site links to it,
  // so the sitemap is the only way a crawler can discover it at all.
  //
  // The /booklet* routes are intentionally excluded. They are print-layout
  // lead magnets that restate copy already published on /services and /work,
  // so indexing them competes with those pages instead of adding reach.
  const routes = [
    "",
    "/what-we-offer",
    "/services",
    "/work",
    "/pricing",
    "/process",
    "/about",
    "/contact",
    "/reviews",
    "/briefings",
    "/security",
    "/industries",
  ].map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  // Required to exist and be reachable, but never the page we want ranked.
  const legal = ["/privacy", "/terms"].map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.1,
  }));
  const work = caseStudies.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const briefingPages = briefings.map((b) => ({
    url: `${site.url}/briefings/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  // Sector hubs: /industries/real-estate, /industries/ecommerce, …
  const sectorPages = sectors.map((sector) => ({
    url: `${site.url}/industries/${sectorSlug(sector)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  // Service landing pages: /industries/real-estate/lead-nurturing-agent, …
  // These are the B1 pages meant to rank for specific "AI {service} for {industry}" queries.
  const serviceLandingPages = sectors.flatMap((sector) =>
    sector.services.map((service) => ({
      url: `${site.url}/industries/${sectorSlug(sector)}/${serviceSlug(service)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  );
  return [...routes, ...sectorPages, ...serviceLandingPages, ...work, ...briefingPages, ...legal];
}
