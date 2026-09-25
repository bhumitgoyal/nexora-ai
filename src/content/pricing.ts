export type PricingTier = {
  id: string;
  name: string;
  tagline: string;
  timeline: string;
  price: {
    usd: string;
    inr: string;
    aed: string;
    eur: string;
    gbp: string;
  };
  period?: string;
  badge?: string;
  featured?: boolean;
  target: string;
  deliverables: string[];
  deliverableBullets: string[];
  guarantees: string[];
  ctaText: string;
  ctaHref: string;
};

export type PricingFaq = {
  question: string;
  answer: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "strategy-sprint",
    name: "Audit & Architecture Sprint",
    tagline: "Scope the real workflows, prove the ROI, and build a working prototype before committing to a full build.",
    timeline: "1 to 2 weeks",
    price: {
      usd: "$3,500",
      inr: "₹2,80,000",
      aed: "AED 12,800",
      eur: "€3,200",
      gbp: "£2,750",
    },
    target: "Teams evaluating where AI delivers measurable ROI without risking budget on unproven builds.",
    deliverables: [
      "End-to-end operational workflow audit and bottleneck map",
      "Interactive single-agent working prototype on sample data",
      "Security, data residency, and cloud infrastructure architecture plan",
      "Fixed-price deployment blueprint with exact ROI projection",
    ],
    deliverableBullets: [
      "14-day turnaround with direct founder delivery",
      "Full interactive demo delivered on week 2",
      "Sprint cost 100% credited toward full deployment if you proceed",
    ],
    guarantees: [
      "Credit toward full build",
      "Zero lock-in architecture",
      "Executive summary and technical spec",
    ],
    ctaText: "Commission a sprint →",
    ctaHref: "/contact?tier=sprint",
  },
  {
    id: "core-system",
    name: "Core System Deployment",
    tagline: "A production-grade AI system wired into your CRM, database, and channels, running 24/7 on your cloud.",
    timeline: "3 to 4 weeks",
    price: {
      usd: "$9,500",
      inr: "₹7,60,000",
      aed: "AED 34,800",
      eur: "€8,750",
      gbp: "£7,500",
    },
    badge: "Most Popular",
    featured: true,
    target: "Businesses wanting an autonomous voice concierge, lead qualification engine, or customer triage system.",
    deliverables: [
      "Full custom AI agent trained on your proprietary SOPs and data",
      "Two-way integration with your CRM, Google Sheets, WhatsApp, and email",
      "Sub-second latency routing with semantic caching to cut inference costs",
      "Deterministic guardrails, escalation rules, and human-in-the-loop gates",
      "Production deployment in your own Google Cloud, AWS, or Azure account",
      "Comprehensive telemetry dashboard, transcript logs, and error alerting",
    ],
    deliverableBullets: [
      "Complete source code ownership with zero proprietary dependencies",
      "Weekly milestone demos with KPI instrumentation from day one",
      "30 days of post-launch hypercare and prompt calibration included",
    ],
    guarantees: [
      "You own 100% of the code",
      "Runs on your cloud",
      "Fixed price with no overruns",
    ],
    ctaText: "Build a core system →",
    ctaHref: "/contact?tier=core",
  },
  {
    id: "custom-ops",
    name: "Full Ops Infrastructure",
    tagline: "Multi-agent operational infrastructure that runs complex, multi-step business workflows end to end.",
    timeline: "6 to 8 weeks",
    price: {
      usd: "$24,000",
      inr: "₹19,20,000",
      aed: "AED 88,000",
      eur: "€22,000",
      gbp: "£19,000",
    },
    target: "Established operators replacing manual back-office tasks, custom order-to-cash ERPs, or multi-channel dispatch.",
    deliverables: [
      "Multi-agent swarm architecture coordinating specialized operational roles",
      "Full custom database, delivery boards, and role-based driver or staff portals",
      "Live accounting sync (QuickBooks, Xero, Tally) with auto-reconciliation",
      "Document generation (BOLs, invoices, compliance sheets) on transaction events",
      "Automated fallback recovery, dead-letter queues, and audit trails",
      "Team training, comprehensive runbooks, and disaster recovery procedures",
    ],
    deliverableBullets: [
      "Custom software engineered to your exact operational specifications",
      "Direct technical architect partnership with Bhumit Goyal",
      "60 days of post-launch engineering support and tuning",
    ],
    guarantees: [
      "Complete IP and repository handover",
      "Enterprise security compliance",
      "Dedicated Slack and WhatsApp channel",
    ],
    ctaText: "Discuss custom infrastructure →",
    ctaHref: "/contact?tier=enterprise",
  },
  {
    id: "infrastructure-retainer",
    name: "Systems SLA & Maintenance",
    tagline: "Ongoing monitoring, prompt tuning, model upgrades, and proactive maintenance to keep your systems fast.",
    timeline: "Monthly Retainer",
    price: {
      usd: "$950",
      inr: "₹75,000",
      aed: "AED 3,500",
      eur: "€880",
      gbp: "£750",
    },
    period: "/ month",
    target: "Clients with live production agents who want dedicated engineering oversight and ongoing capability additions.",
    deliverables: [
      "24/7 uptime monitoring, error alerting, and proactive failure recovery",
      "Continuous prompt tuning and model upgrades as new frontier models release",
      "Data drift detection and retrieval index updates",
      "Up to 15 hours of new feature builds or workflow tweaks each month",
      "Priority same-day bug fixes and direct founder support",
    ],
    deliverableBullets: [
      "Month-to-month flexibility with no long-term lock-in",
      "Monthly performance and cost optimization audit",
      "Direct WhatsApp and Slack engineering hotline",
    ],
    guarantees: [
      "Sub-4 hour response time",
      "No long-term contracts",
      "Cancel anytime",
    ],
    ctaText: "Retain engineering support →",
    ctaHref: "/contact?tier=retainer",
  },
];

export const pricingPrinciples = [
  {
    title: "100% Code & Data Ownership",
    description: "Every line of code and every deployed container runs inside your own cloud account. If we ever part ways, your systems keep running without interruption. We never build proprietary black boxes.",
  },
  {
    title: "Fixed-Price Certainty",
    description: "We provide a single, all-inclusive price before writing code. No hourly billing surprises, no mystery scope creep, and no runaway invoices.",
  },
  {
    title: "Direct Founder Engineering",
    description: "You work directly with Bhumit Goyal. No junior developers, no account manager games, and no translation layers between your problem and the code.",
  },
  {
    title: "Zero Vendor Lock-In",
    description: "We build on open, battle-tested standards: standard cloud infrastructure, open APIs, and portable orchestration. You own your databases and keys.",
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    question: "How do your fixed-price contracts work?",
    answer: "After our initial discovery call, we deliver a detailed architecture blueprint with exact deliverables, timeline, and a fixed price. You pay 50% up front and 50% upon final sign-off once the system passes all agreed acceptance tests on your live infrastructure.",
  },
  {
    question: "Do you take a percentage of our ongoing savings or API usage?",
    answer: "Never. You pay our one-time build fee (and an optional maintenance retainer if you want ongoing engineering support). All third-party API costs like OpenAI, Anthropic, Twilio, or Google Cloud are billed directly to your own accounts at raw cost with zero markup.",
  },
  {
    question: "What if our workflows change after launch?",
    answer: "Our systems are built modularly so adjustments to business rules, prompts, or integrations are straightforward. We include 30 to 60 days of post-launch tuning in every project, and offer flexible monthly retainers for continuous feature expansion.",
  },
  {
    question: "How long does a typical build take?",
    answer: "An Audit & Architecture Sprint takes 1 to 2 weeks. A Core System Deployment takes 3 to 4 weeks. Full custom operational infrastructure takes 6 to 8 weeks. We ship weekly working demos so you see tangible progress every 7 days.",
  },
  {
    question: "Who owns the intellectual property and code?",
    answer: "You do. 100%. Upon final milestone payment, full intellectual property and Git repository access are transferred to your organization. You have complete freedom to maintain, modify, or extend the code independently.",
  },
];
