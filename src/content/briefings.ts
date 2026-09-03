// Intelligence Briefings — Nuvero's thought-leadership on AI infrastructure.
// Content is original analysis. The flagship grades a readiness RUBRIC the
// reader applies to their own org, never invented grades for named vendors.

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | {
      type: "ledger";
      caption?: string;
      columns: string[];
      rows: { label: string; cells: string[]; score?: string }[];
    };

export type Briefing = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string; // ISO
  readMins: number;
  featured?: boolean;
  body: Block[];
};

export const briefings: Briefing[] = [
  {
    slug: "infrastructure-readiness-report",
    title: "The Infrastructure Readiness Report",
    dek: "A five-dimension rubric to grade how ready your business actually is to run AI in production, and where the layer breaks first.",
    category: "Report",
    date: "2026-09-03",
    readMins: 8,
    featured: true,
    body: [
      {
        type: "p",
        text: "Most AI projects do not fail on the model. They fail on everything around it: the data the agent reads, the systems it has to touch, the controls that keep it safe, and the question of who owns the thing once it works. That surrounding layer is the infrastructure, and it is what decides whether a pilot ever becomes production.",
      },
      {
        type: "p",
        text: "This report is a rubric, not a ranking. Score your own operation across five dimensions. Wherever you land at Level 0 or 1 is where your first AI system will stall, regardless of how good the model is.",
      },
      { type: "h", text: "The five dimensions" },
      {
        type: "ledger",
        caption: "Infrastructure Readiness Scorecard · grade yourself L0 → L3",
        columns: ["Dimension", "Level 0 — Absent", "Level 3 — Ready"],
        rows: [
          {
            label: "Data",
            score: "01",
            cells: [
              "Records live in inboxes, spreadsheets, and people's heads.",
              "Clean, queryable sources an agent can read at low latency.",
            ],
          },
          {
            label: "Integration",
            score: "02",
            cells: [
              "Every action needs a human to move data between tabs.",
              "Your tools expose the actions an agent needs, via APIs it can call.",
            ],
          },
          {
            label: "Governance",
            score: "03",
            cells: [
              "No record of what an automated action did, or why.",
              "Least-privilege access, audit trail, and an escalation path per system.",
            ],
          },
          {
            label: "Ownership",
            score: "04",
            cells: [
              "The intelligence lives inside a vendor you rent by the seat.",
              "Code, prompts, and data sit in accounts you control.",
            ],
          },
          {
            label: "Observability",
            score: "05",
            cells: [
              "You find out an agent went wrong when a customer complains.",
              "Drift, cost, and confidence are watched, with alerts before harm.",
            ],
          },
        ],
      },
      { type: "h", text: "How to read your score" },
      {
        type: "list",
        items: [
          "Mostly L0–L1: you are not missing a model, you are missing infrastructure. Start with one workflow and the data behind it, not a platform.",
          "Mixed L1–L2: you can ship a first system, but governance and observability will decide whether you can trust it in production.",
          "Mostly L2–L3: you are ready to compound. The constraint is now sequencing, not capability.",
        ],
      },
      {
        type: "callout",
        text: "The intelligence layer is the last thing you add, not the first. Everything below it has to be able to hold its weight.",
      },
      { type: "h", text: "Where the layer breaks first" },
      {
        type: "p",
        text: "In practice the earliest failure is almost always Integration or Governance. Data is usually fixable with a day of plumbing. But an agent with no way to act, or no controls around the actions it can take, is either useless or unsafe, and both kill the project before it earns trust.",
      },
      {
        type: "p",
        text: "That is why every Nuvero engagement starts with an audit against exactly these dimensions: we grade the ground before we build on it.",
      },
    ],
  },
  {
    slug: "why-your-pilot-didnt-ship",
    title: "Why your AI pilot never shipped",
    dek: "The gap between a demo that works and a system that runs is not the model. It is the four things nobody scoped.",
    category: "Field note",
    date: "2026-08-20",
    readMins: 5,
    body: [
      {
        type: "p",
        text: "A pilot is judged on whether it can work once. Production is judged on whether it can work every time, unattended, against messy real data, without doing something you would have to apologise for. Those are different problems, and the second one is where most pilots quietly die.",
      },
      { type: "h", text: "The four things nobody scoped" },
      {
        type: "list",
        items: [
          "The unhappy path: what the agent does when it is unsure, when the data is wrong, or when the tool it needs is down.",
          "The handoff: the exact point a human takes over, and how they are told.",
          "The ownership: who holds the keys, the prompts, and the data when the consultant leaves.",
          "The proof: the one metric the system exists to move, instrumented from day one.",
        ],
      },
      {
        type: "callout",
        text: "If a demo cannot name the metric it moves and the moment a human steps in, it is not a pilot. It is a screenshot.",
      },
      {
        type: "p",
        text: "The fix is to scope the boring parts first. We commission a first system as a fixed piece of work with those four answered up front, so the demo and the deployment are the same thing.",
      },
    ],
  },
  {
    slug: "own-the-layer",
    title: "Own the layer",
    dek: "Renting your intelligence by the seat is fine until it is the thing your business runs on. Then it is a liability.",
    category: "Position",
    date: "2026-08-06",
    readMins: 4,
    body: [
      {
        type: "p",
        text: "There is a difference between using a tool and depending on one. A SaaS subscription is fine for a feature. It is a bad place to keep the intelligence layer your operation depends on, because the moment it runs your business you have handed someone else the pricing power, the data, and the off switch.",
      },
      { type: "h", text: "What ownership actually means" },
      {
        type: "list",
        items: [
          "The code and prompts live in a repository you control.",
          "The data and any fine-tuned model sit in your cloud account.",
          "There is no per-seat licence on the thing doing the work.",
          "If we walked away tomorrow, it keeps running.",
        ],
      },
      {
        type: "p",
        text: "This is not ideology, it is risk management. You already own your systems and your data. The intelligence layer that sits on top of them should be owned the same way.",
      },
    ],
  },
];

export const featuredBriefing = briefings.find((b) => b.featured) ?? briefings[0];

export const getBriefing = (slug: string) => briefings.find((b) => b.slug === slug);
