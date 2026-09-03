export const site = {
  name: "Nuvero AI",
  shortName: "Nuvero",
  tagline: "The AI infrastructure your business runs on.",
  description:
    "Nuvero AI builds AI infrastructure: agentic systems trained on how your company actually works, wired into your stack, so manual work disappears and any workflow can run itself. Not a product. Not a service. The intelligence layer underneath your operations.",
  url: "https://nuvero.space",
  ogImage: "/og.png",
  founder: {
    name: "Bhumit Goyal",
    role: "Founder & Principal AI Engineer",
    bio: "AI engineer obsessed with shipping agentic systems that move real business metrics. I partner with founders and operators to design, build, and integrate AI into the messy real-world workflows that actually compound.",
    location: "Remote · India",
  },
  contact: {
    email: "nuveroai@gmail.com",
    phone: "+91 98186 46823",
    phoneRaw: "+919818646823",
    whatsapp: "+919818646823",
    bookingUrl: "#book",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/bhumitgoyal",
    github: "https://github.com/bhumitgoyal",
    instagram: "https://www.instagram.com/bhumitgoyal",
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
