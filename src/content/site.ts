export const site = {
  name: "Nuvero AI",
  shortName: "Nuvero",
  // Former trading name. Surfaced as schema.org alternateName so search engines
  // fold the old brand's accumulated authority into the current entity instead
  // of treating "Nexora AI" and "Nuvero AI" as two unrelated companies.
  formerName: "Nexora AI",
  tagline: "The AI infrastructure your business runs on.",
  description:
    "Nuvero AI builds custom AI infrastructure: agentic systems trained on how your business actually works, wired into your stack to automate real workflows end to end.",
  // Must match the hostname the server actually serves on. Vercel 308-redirects
  // the bare domain to www, so canonical tags, OG urls, the sitemap and robots
  // all have to say www too — otherwise every declared URL is a redirect hop and
  // ranking signals split across two hostnames.
  url: "https://www.nuvero.space",
  ogImage: "/og.png",
  founder: {
    name: "Bhumit Goyal",
    role: "Founder & Principal AI Engineer",
    bio: "AI engineer obsessed with shipping agentic systems that move real business metrics. I partner with founders and operators to design, build, and integrate AI into the messy real-world workflows that actually compound.",
    location: "Remote · India",
    image: "/bhumit.png",
    // Topics the Person entity is claimed to be authoritative on. Feeds
    // schema.org knowsAbout, which is how search engines associate a person
    // with a subject area rather than just a name string.
    knowsAbout: [
      "Agentic AI systems",
      "AI voice agents",
      "Workflow automation",
      "Conversational AI",
      "Retrieval-augmented generation",
      "Full-stack engineering",
    ],
  },
  contact: {
    email: "contact@nuvero.space",
    phone: "+91 98186 46823",
    phoneRaw: "+919818646823",
    whatsapp: "+919818646823",
    bookingUrl: "#book",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/bhumitgoyal",
    github: "https://github.com/bhumitgoyal",
    instagram: "https://www.instagram.com/nuvero.ai/",
    twitter: "https://twitter.com/bhumitgoyal",
  },
  nav: [
    { label: "Infrastructure", href: "/what-we-offer" },
    { label: "Systems", href: "/services" },
    { label: "Deployments", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ],
} as const;

export type SiteConfig = typeof site;
