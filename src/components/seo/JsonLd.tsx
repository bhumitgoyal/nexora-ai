import { site } from "@/content/site";

// Organization + WebSite structured data (schema.org / JSON-LD). Helps Google
// understand Nuvero as an entity: name, logo, socials, founder, contact — which
// powers the knowledge panel and richer search results. Rendered once, site-wide.
export function JsonLd() {
  const orgId = `${site.url}/#organization`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        url: site.url,
        logo: `${site.url}/logo.jpg`,
        image: `${site.url}/opengraph-image`,
        description: site.description,
        email: site.contact.email,
        founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.role },
        sameAs: [
          site.socials.linkedin,
          site.socials.github,
          site.socials.instagram,
          site.socials.twitter,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        publisher: { "@id": orgId },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (no user input); this is the standard
      // Next.js pattern for injecting JSON-LD.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
