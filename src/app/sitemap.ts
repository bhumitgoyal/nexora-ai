import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";
import { briefings } from "@/content/briefings";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/what-we-offer", "/services", "/work", "/process", "/about", "/contact", "/reviews", "/briefings", "/security"].map(
    (r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    }),
  );
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
  return [...routes, ...work, ...briefingPages];
}
