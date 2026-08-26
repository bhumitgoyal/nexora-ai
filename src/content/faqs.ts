export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "So what exactly are you selling: a product, a service, or something else?",
    answer:
      "Neither. We build AI infrastructure: the intelligence layer that sits underneath your operations. Agents trained on how your company actually works, wired into the tools you already use, running the manual work your team does today. There's no subscription to a product and no hours-for-money service. You get a working systems layer, deployed in your stack, that you own outright.",
  },
  {
    question: "What kind of work can the infrastructure take over?",
    answer:
      "Any workflow a human runs manually today. If it follows a pattern like follow-ups, reporting, scheduling, intake, reconciliation, outreach, or support, an agent can learn it and run it. The agents are trained on your SOPs, your data, and your edge cases, so they know the work the way your team does. There is no fixed catalogue: we build the automation around your operation.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements move from kickoff to a live production system in 6–8 weeks. Strategy-only sprints take 2–3 weeks. We deliberately ship in tight weekly cycles so you see working software, not slide decks.",
  },
  {
    question: "What does it cost?",
    answer:
      "Strategy sprints start around $4k. Custom builds voice agents, chatbots, marketing systems typically range from $8k to $40k depending on integrations and scope. We share a fixed-price proposal after the discovery call, no surprises.",
  },
  {
    question: "Who owns the code, data, and models?",
    answer:
      "You do. Everything we build is deployed in your cloud accounts on your stack with no vendor lock-in. We hand over full source code, runbooks, and architecture documentation at every milestone.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Customer data stays in your infrastructure. We follow least-privilege access, encrypt in transit and at rest, and build with SOC 2 / GDPR / HIPAA considerations from day one when relevant. We're happy to sign your DPA before kickoff.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "The infrastructure is industry-agnostic. We've deployed it across energy, senior wellness, real estate, logistics, B2B SaaS, and marketing services. What matters isn't the industry label; it's whether there's repetitive, judgment-heavy manual work the layer can absorb.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every engagement includes 30 days of post-launch optimization. After that, most clients move to a monthly retainer for continuous improvement, new use-case expansion, and on-call support.",
  },
  {
    question: "Can you work alongside our existing engineering team?",
    answer:
      "Absolutely we often do. We can lead, co-build, or hand off cleanly with full documentation. Our preference is whatever moves your business fastest.",
  },
];
