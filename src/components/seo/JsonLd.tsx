import { site } from "@/content/site";

// Organization + Person + WebSite structured data (schema.org / JSON-LD).
//
// The Person node is deliberately a first-class entity with its own @id and
// sameAs list, not a bare name nested under Organization.founder. A nested
// `{"@type":"Person","name":"Bhumit Goyal"}` is just a string to a crawler -
// there is nothing tying it to the GitHub/LinkedIn profiles, so the name stays
// ambiguous against every other Bhumit Goyal on the web. Giving the Person an
// @id and pointing sameAs at the profiles is what lets search engines resolve
// "Bhumit Goyal" to this specific person.
//
// sameAs is split by entity on purpose: profiles under /bhumitgoyal are personal
// and belong on the Person; only genuinely company-owned accounts belong on the
// Organization. Mixing them dilutes both entities.
export function JsonLd() {
  const orgId = `${site.url}/#organization`;
  const personId = `${site.url}/#bhumit-goyal`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.founder.name,
        jobTitle: site.founder.role,
        description: site.founder.bio,
        image: `${site.url}${site.founder.image}`,
        email: site.contact.email,
        url: `${site.url}/about`,
        mainEntityOfPage: `${site.url}/about`,
        knowsAbout: [...site.founder.knowsAbout],
        worksFor: { "@id": orgId },
        sameAs: [
          site.socials.linkedin,
          site.socials.github,
          site.socials.twitter,
        ],
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        // Tells search engines the previous brand is the same entity, so the
        // old name's links and mentions consolidate here rather than splitting.
        alternateName: site.formerName,
        url: site.url,
        logo: `${site.url}/logo.jpg`,
        image: `${site.url}/opengraph-image`,
        description: site.description,
        email: site.contact.email,
        founder: { "@id": personId },
        sameAs: [site.socials.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        alternateName: site.formerName,
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
