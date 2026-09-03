import { testimonials } from "@/content/testimonials";

export type Review = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

function initialsFrom(name: string): string {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "NA";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const curated: Review[] = testimonials.map((t) => ({
  quote: t.quote,
  name: t.name,
  role: t.role,
  company: t.company,
  initials: t.initials,
}));

/**
 * Reviews shown on /reviews = the curated client testimonials plus any reviews
 * published from the Nuvero outreach agent. The agent is the source of truth
 * for new reviews; set REVIEWS_API_URL to its public reviews endpoint. If it is
 * unset or unreachable, the page still renders the curated set.
 */
const DEFAULT_REVIEWS_API =
  "https://nuvero-outreach-backend-629748840531.us-central1.run.app/api/reviews/public";

export async function getReviews(): Promise<Review[]> {
  const url = process.env.REVIEWS_API_URL || DEFAULT_REVIEWS_API;
  if (!url) return curated;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return curated;
    const data = await res.json();
    const rows: unknown[] = Array.isArray(data) ? data : (data?.reviews ?? []);
    const fetched: Review[] = rows
      .map((r) => r as Record<string, string>)
      .filter((r) => r && r.quote && r.name)
      .map((r) => ({
        quote: String(r.quote),
        name: String(r.name),
        role: r.role ? String(r.role) : "",
        company: r.company ? String(r.company) : "",
        initials: r.initials ? String(r.initials) : initialsFrom(r.name),
      }));
    return [...curated, ...fetched];
  } catch {
    return curated;
  }
}
