import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// /booklet* pages are deliberately NOT disallowed: they carry a noindex meta
// tag, and a crawler can only see that tag if it's allowed to fetch the page.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
