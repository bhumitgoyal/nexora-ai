export const site = {
  name: "Nuvero AI",
  shortName: "Nuvero",
  tagline: "You run it, we handle it.",
  description:
    "Nuvero AI is a boutique AI consultancy designing agentic systems, voice agents, and intelligent workflows that compound revenue, slash manual ops, and put your business on autopilot.",
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
    { label: "What We Offer", href: "/what-we-offer" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ],
} as const;

export type SiteConfig = typeof site;
