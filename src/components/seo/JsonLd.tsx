import { site } from "@/content/site";
import { ORG_ID, PERSON_ID, WEBSITE_ID, absoluteUrl } from "@/lib/seo";
import { JsonLdScript } from "./JsonLdScript";

// Organization + Person + WebSite structured data (schema.org / JSON-LD),
// rendered once from the root layout on every page.
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
//
// Per-page schemas (Article, BreadcrumbList, FAQPage, Service…) live in
// ./schemas.tsx and reference these nodes by @id.
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.founder.name,
        jobTitle: site.founder.role,
        description: site.founder.bio,
        image: absoluteUrl(site.founder.image),
        email: site.contact.email,
        url: absoluteUrl("/about"),
        mainEntityOfPage: absoluteUrl("/about"),
        knowsAbout: [...site.founder.knowsAbout],
        worksFor: { "@id": ORG_ID },
        sameAs: [site.socials.linkedin, site.socials.github, site.socials.twitter],
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: site.name,
        // Tells search engines the previous brand is the same entity, so the
        // old name's links and mentions consolidate here rather than splitting.
        alternateName: site.formerName,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${site.url}/#logo`,
          url: absoluteUrl("/icon.png"),
          contentUrl: absoluteUrl("/icon.png"),
          width: 512,
          height: 512,
          caption: site.name,
        },
        image: [absoluteUrl("/opengraph-image"), absoluteUrl("/logo.jpg")],
        description: site.description,
        slogan: site.tagline,
        email: site.contact.email,
        telephone: site.contact.phoneRaw,
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        areaServed: "Worldwide",
        founder: { "@id": PERSON_ID },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: site.contact.email,
            telephone: site.contact.phoneRaw,
            url: absoluteUrl("/contact"),
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          },
        ],
        knowsAbout: [
          "AI infrastructure",
          "Agentic AI systems",
          "AI voice agents",
          "Conversational AI",
          "Workflow automation",
          "Retrieval-augmented generation",
        ],
        sameAs: [site.socials.instagram],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: site.name,
        alternateName: site.formerName,
        url: site.url,
        description: site.description,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };

  return <JsonLdScript data={graph} />;
}
