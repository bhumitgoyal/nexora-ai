export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How is Nexora different from an AI tool vendor or a generic dev agency?",
    answer:
      "We're not selling a product and we're not generalists. We design and build production AI systems that integrate into your existing stack, own the messy real-world edge cases, and stick around to optimize them. You get the strategic depth of a consultancy and the execution muscle of a senior product team.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements move from kickoff to a live production system in 6–8 weeks. Strategy-only sprints take 2–3 weeks. We deliberately ship in tight weekly cycles so you see working software, not slide decks.",
  },
  {
    question: "What does it cost?",
    answer:
      "Strategy sprints start around $4k. Custom builds — voice agents, chatbots, marketing systems — typically range from $8k to $40k depending on integrations and scope. We share a fixed-price proposal after the discovery call, no surprises.",
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
      "We've shipped AI systems across energy, senior wellness, real estate, logistics, B2B SaaS, and marketing services. The pattern that matters is whether there's a repetitive, judgment-heavy workflow where AI can compound — not the industry label.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every engagement includes 30 days of post-launch optimization. After that, most clients move to a monthly retainer for continuous improvement, new use-case expansion, and on-call support.",
  },
  {
    question: "Can you work alongside our existing engineering team?",
    answer:
      "Absolutely — we often do. We can lead, co-build, or hand off cleanly with full documentation. Our preference is whatever moves your business fastest.",
  },
];
