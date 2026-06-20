export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  gradient: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nexora rebuilt our inbound flow in six weeks. We went from missing 1 in 5 calls to having a voice agent that customers genuinely thank us for. The unit economics shifted in the same quarter.",
    name: "Maya Krishnan",
    role: "VP Operations",
    company: "Southwest Gases",
    initials: "MK",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "Our members are 60-plus and they prefer the bot over our humans. That sentence felt impossible 6 months ago. Bhumit and the team built something genuinely empathetic.",
    name: "Anil Rastogi",
    role: "Head of Member Experience",
    company: "GoHappy Club",
    initials: "AR",
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    quote:
      "We were paying $3 a lead and getting trash. Nexora's engine delivers verified contacts at 11 cents apiece and the bounce rate is lower than our 'premium' provider.",
    name: "Daniel Reyes",
    role: "Founder",
    company: "Highline Growth",
    initials: "DR",
    gradient: "from-fuchsia-500 to-violet-500",
  },
  {
    quote:
      "The campaign orchestrator is the closest thing to a marketing cheat code I've ever used. We now ship 4 campaigns in the time it used to take to ship one — and they perform better.",
    name: "Sara Whitfield",
    role: "Director of Demand Gen",
    company: "Orbit Health",
    initials: "SW",
    gradient: "from-violet-500 to-cyan-500",
  },
  {
    quote:
      "Most consultants hand you a slide deck. Nexora ships production code, owns the integration, and stays around to optimize. Rare combination.",
    name: "Jaya Mehta",
    role: "Chief of Staff",
    company: "Northwind Logistics",
    initials: "JM",
    gradient: "from-cyan-500 to-fuchsia-500",
  },
  {
    quote:
      "We 10x'd content output without a single client noticing a drop in quality. The voice profiling is honestly uncanny — our editors review, they don't rewrite.",
    name: "Priya Ramnath",
    role: "Creative Director",
    company: "Lumina Studios",
    initials: "PR",
    gradient: "from-fuchsia-500 to-cyan-500",
  },
  {
    quote:
      "Our forecast accuracy went from a coin-flip to something the board actually trusts. Two quarters in and the lift in win rate paid for the whole engagement.",
    name: "Marcus Hale",
    role: "VP Revenue Operations",
    company: "Vertex CRM",
    initials: "MH",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "Time-to-hire dropped from six weeks to nine days. My recruiters stopped doing calendar Tetris and started building real relationships with hiring managers again.",
    name: "Reema Kapoor",
    role: "Head of Talent",
    company: "Pulse Talent",
    initials: "RK",
    gradient: "from-cyan-500 to-violet-500",
  },
];
