export type ProcessStep = {
  number: string;
  title: string;
  duration: string;
  summary: string;
  bullets: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    duration: "Week 1",
    summary: "We sit with you and understand what's slowing you down — no jargon, just a straight look at your current workflow and where things break.",
    bullets: [
      "Stakeholder interviews across ops, sales, and support",
      "Workflow inventory + opportunity scoring",
      "ROI model + risk register",
    ],
  },
  {
    number: "02",
    title: "Design & Structure",
    duration: "Week 2",
    summary: "We architect the solution, map out the integrations, and define what success looks like before writing a single line of code.",
    bullets: [
      "Agent persona + intent model",
      "System architecture and integration map",
      "Measurement plan with leading and lagging KPIs",
    ],
  },
  {
    number: "03",
    title: "Build",
    duration: "Weeks 3–6",
    summary: "We build in tight weekly cycles with working software in your hands from day one.",
    bullets: [
      "Weekly demos and feedback loops",
      "Continuous evaluation against golden conversations",
      "Security + compliance baked in, not bolted on",
    ],
  },
  {
    number: "04",
    title: "Integrate",
    duration: "Weeks 6–8",
    summary: "We wire the agent into your stack, train your team, and run a controlled rollout with a safety net.",
    bullets: [
      "Production deployment with observability",
      "Phased rollout with human-in-the-loop checkpoints",
      "Team training + runbooks for on-call",
    ],
  },
  {
    number: "05",
    title: "Scale",
    duration: "Ongoing",
    summary: "We monitor, retrain, and expand. The system gets sharper every week and the impact compounds.",
    bullets: [
      "Weekly retraining from real conversations",
      "Quarterly business review + roadmap refresh",
      "New use-case expansion as confidence grows",
    ],
  },
];
