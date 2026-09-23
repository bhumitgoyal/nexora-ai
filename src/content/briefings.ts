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
  {
    slug: "accuracy-is-the-wrong-metric",
    title: "Accuracy is the wrong metric",
    dek: "An agent that is right most of the time and unpredictable the rest of the time is not a good agent. It is an unmanaged one.",
    category: "Report",
    date: "2026-03-05",
    readMins: 7,
    body: [
      {
        type: "p",
        text: "Every evaluation deck opens with an accuracy number. It is the wrong number. Accuracy tells you how often the system produced the right answer on a set of cases someone chose in advance. It tells you nothing about what happens on the cases nobody chose, and nothing at all about the cost of being wrong.",
      },
      {
        type: "p",
        text: "A support agent that resolves nine tickets out of ten looks excellent until you learn that the tenth is a refund it issued to the wrong account. A document extractor that is right ninety-five percent of the time is unusable if it cannot tell you which five percent to check. The distribution of errors matters more than the rate of them, and accuracy collapses that distribution into a single number that hides everything you needed to know.",
      },
      { type: "h", text: "What to measure instead" },
      {
        type: "p",
        text: "Replace the single score with four measures. Each one maps to a decision you will actually have to make about the system, which is the test of whether a metric is worth instrumenting.",
      },
      {
        type: "ledger",
        caption: "Agent evaluation · four measures that survive contact with production",
        columns: ["Measure", "The question it answers", "How you instrument it"],
        rows: [
          {
            label: "Calibration",
            score: "01",
            cells: [
              "When the agent says it is confident, is it? Can it tell you which outputs to check?",
              "Log a confidence signal per output, then sample and score against ground truth by confidence band.",
            ],
          },
          {
            label: "Containment",
            score: "02",
            cells: [
              "What is the worst thing a single wrong answer can do before a human sees it?",
              "Enumerate the write actions in scope and cap the blast radius of each one.",
            ],
          },
          {
            label: "Escalation rate",
            score: "03",
            cells: [
              "How often does the agent correctly decline and hand off rather than guess?",
              "Track handoffs as a first-class outcome, not a failure, and audit the ones it should have made.",
            ],
          },
          {
            label: "Recovery time",
            score: "04",
            cells: [
              "When it does go wrong, how long until someone notices and reverses it?",
              "Measure from the bad action to the corrective action, not from the complaint.",
            ],
          },
        ],
      },
      {
        type: "callout",
        text: "A system that is right eighty percent of the time and knows which eighty is more valuable than one that is right ninety-five percent of the time and cannot tell you which.",
      },
      { type: "h", text: "Build the evaluation set from the mess" },
      {
        type: "p",
        text: "Most evaluation sets are built from clean examples because clean examples are easy to collect. That is exactly backwards. The cases that decide whether a system ships are the ambiguous ones, the half-complete records, the customer who asks three things in one message, the invoice in a format nobody has seen since 2019. Pull your evaluation set from real historical traffic, deliberately over-sampling the cases that a human escalated or got wrong.",
      },
      {
        type: "list",
        items: [
          "Include every case from the last year that triggered a complaint or a manual correction.",
          "Include the long tail: the formats, languages, and edge conditions that appear once a quarter.",
          "Include adversarial input, because if the agent is customer-facing, it will receive some.",
          "Keep a held-out slice that nobody prompts against, so you can tell tuning from overfitting.",
        ],
      },
      { type: "h", text: "Evaluation is a standing function, not a gate" },
      {
        type: "p",
        text: "The common failure is treating evaluation as something you do once before launch. Models change under you, upstream data changes, and the people using the system learn to phrase things differently. An evaluation suite that is not run on a schedule is a snapshot of a system that no longer exists.",
      },
      {
        type: "p",
        text: "Run the suite on every prompt change, every model version bump, and on a fixed cadence regardless. Then make one person accountable for the result. Evaluation with no owner produces dashboards nobody reads.",
      },
    ],
  },
  {
    slug: "what-to-refuse-first",
    title: "What to refuse first",
    dek: "Scoping a first AI system is mostly an exercise in saying no, and the things you refuse decide whether the thing you build ever ships.",
    category: "Field note",
    date: "2026-03-19",
    readMins: 5,
    body: [
      {
        type: "p",
        text: "The hardest part of a first AI system is not choosing what to build. It is choosing what to leave out, because the instinct in every scoping session is to add. Someone points out an adjacent workflow, someone else notes that the data is right there, and a four-week build becomes a platform nobody can finish.",
      },
      {
        type: "p",
        text: "A first system has one job: prove the layer works, in production, against real data, with a named owner. Everything that does not serve that job is a candidate for refusal.",
      },
      { type: "h", text: "Refuse these in the first build" },
      {
        type: "list",
        items: [
          "Anything where the correct answer is genuinely contested inside the business. If two managers would disagree about the right outcome, an agent cannot be judged and will not be trusted.",
          "Anything that writes to a system of record with no reversal path. Irreversible first actions are how pilots lose their sponsor.",
          "Anything that depends on data you do not yet have in a queryable form. A first system should not be blocked on a data migration.",
          "Anything customer-facing where the failure is public. Earn that surface after the internal one works.",
          "Anything that requires three teams to agree on a schema before a line of code is written.",
        ],
      },
      { type: "h", text: "What to pick instead" },
      {
        type: "p",
        text: "Pick a workflow that is high-volume, low-variance, internally owned, and currently done by a person who can describe exactly what good looks like. That last part is the real filter. If nobody can articulate the rule they are applying, you are not automating a process, you are attempting to discover one, and those are different projects with different budgets.",
      },
      {
        type: "callout",
        text: "If nobody in the room can describe what a correct output looks like in one sentence, you are not scoping an AI system. You are outsourcing a decision nobody has made.",
      },
      { type: "h", text: "Fix the scope in writing" },
      {
        type: "p",
        text: "Write down the one metric the system exists to move, the exact point a human takes over, the systems it may read from, and the systems it may write to. Four lines. Anything not on that list is out of scope by default, and adding to it is a decision with a cost, not a favour.",
      },
      { type: "h", text: "Handle the expansion request properly" },
      {
        type: "p",
        text: "You will be asked to extend the scope mid-build, usually by someone senior, usually with a good reason. The answer is not no. The answer is that it goes on the list for the second system, and that the first one ships on the date it was scoped for. This is easier to hold if you have said in advance that the first system is deliberately small, that its purpose is to prove the layer, and that the backlog it generates is the real output of the exercise.",
      },
      {
        type: "p",
        text: "Teams that protect the first scope tend to ship three systems in a year. Teams that absorb every good idea into the first one tend to ship the first one late, if at all, and the difference is not talent or budget. It is whether somebody was willing to refuse things in week two.",
      },
      {
        type: "p",
        text: "This is not bureaucracy. It is the difference between a system that ships in six weeks and one that is still being discussed in six months, and the discipline that makes the second system easy to scope because the first one already proved the ground holds.",
      },
    ],
  },
  {
    slug: "why-rag-stalls",
    title: "Why retrieval projects stall",
    dek: "Retrieval is not a vector database problem. It is a content problem, and most teams discover that after they have bought the database.",
    category: "Report",
    date: "2026-04-02",
    readMins: 7,
    body: [
      {
        type: "p",
        text: "Retrieval-augmented generation demos beautifully and stalls reliably. The demo works because someone hand-picked ten documents that answer ten questions. Production fails because the real corpus contains four versions of the same policy, two of which are wrong, none of which are dated, and a handful of PDFs that are photographs of paper.",
      },
      {
        type: "p",
        text: "The model is almost never the bottleneck. The retrieval layer is, and the retrieval layer is mostly a content and metadata problem dressed up as an infrastructure one.",
      },
      { type: "h", text: "The four failures, in the order they appear" },
      {
        type: "list",
        items: [
          "Stale and conflicting sources. The corpus contains the old policy and the new one, and nothing in the text says which is current. The system answers confidently from whichever chunk scored higher.",
          "Chunking that destroys meaning. A table split across two chunks becomes two lists of numbers with no headers. A clause separated from its exception becomes a wrong answer with a citation.",
          "No permission model. Retrieval returns whatever the index holds, so the moment a document with restricted content enters the corpus, the agent becomes a leak with a chat interface.",
          "No freshness path. The index is built once, and nobody owns re-indexing when the source changes, so accuracy decays silently from the day it launches.",
        ],
      },
      {
        type: "callout",
        text: "A retrieval system inherits the quality of your documentation. If your knowledge base is a graveyard, you have built a search engine for a graveyard.",
      },
      { type: "h", text: "What the retrieval layer actually needs" },
      {
        type: "p",
        text: "Before anything is embedded, the corpus needs structure that the retrieval step can use as more than text. That means each document carries its source system, its owner, its effective date, its supersession status, and its access classification. Those five fields do more for answer quality than any change of embedding model, because they let you filter before you rank rather than hoping the ranking gets it right.",
      },
      {
        type: "p",
        text: "Then the retrieval step should be hybrid rather than purely semantic. Exact identifiers, product codes, and policy numbers are where vector search is weakest and keyword search is strongest, and real questions contain both prose and identifiers. Ranking the union of the two beats either alone in most operational corpora.",
      },
      { type: "h", text: "Make the system show its work" },
      {
        type: "p",
        text: "Every answer should carry the chunks it was built from, with their dates and owners visible to the user. This serves two purposes. It lets the reader verify an answer without leaving the interface, and it turns every wrong answer into a content bug with an address, which is the only way the corpus ever improves.",
      },
      {
        type: "p",
        text: "It also changes the review conversation. Without citations, a wrong answer is an argument about whether AI works. With citations, it is a ticket assigned to whoever owns the document that was wrong, and those tickets get closed.",
      },
      { type: "h", text: "The honest sequencing" },
      {
        type: "p",
        text: "If the corpus is unowned and undated, do not start with retrieval. Start with a narrow, well-maintained slice of it, prove the pattern there, and use the visible value to fund the cleanup of everything else. Teams that try to index everything at once ship a system that is plausibly wrong across the whole business, which is worse than a system that is reliably right about one part of it.",
      },
    ],
  },
  {
    slug: "where-the-handoff-belongs",
    title: "Where the handoff belongs",
    dek: "Human-in-the-loop is not a safety blanket you add at the end. It is a design decision that determines whether the system saves anyone any time.",
    category: "Field note",
    date: "2026-04-16",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Most teams put the human in the wrong place. They either approve everything, which means the agent has added a step rather than removed one, or they approve nothing, which means the first serious error is discovered by a customer. Both are the result of treating the handoff as a policy rather than a design.",
      },
      {
        type: "p",
        text: "The handoff belongs at the point where the cost of being wrong first exceeds the cost of a human glance. That point is specific to each action, and it moves as the system earns trust.",
      },
      { type: "h", text: "Three handoff patterns, and when each applies" },
      {
        type: "list",
        items: [
          "Review before act. The agent proposes, a human approves, nothing happens without a click. Correct for irreversible actions, money movement, and anything external-facing in the first months.",
          "Act and notify. The agent acts, a human sees a record and can reverse it inside a defined window. Correct for reversible internal actions where speed is the point.",
          "Act and sample. The agent acts unattended, a fraction of outputs are reviewed on a schedule. Correct for high-volume, low-stakes work where per-item review destroys the economics.",
        ],
      },
      {
        type: "p",
        text: "The mistake is picking one pattern for the whole system. A single agent usually needs all three, applied per action. Drafting a reply is act-and-sample. Sending it to a customer is review-before-act. Updating an internal status field is act-and-notify. Choosing one policy for the agent rather than one per action is how you end up with a queue of approvals nobody clears.",
      },
      {
        type: "callout",
        text: "If your reviewers approve everything without reading, you have not built an oversight mechanism. You have built a latency tax with an audit trail.",
      },
      { type: "h", text: "Design the escalation, not just the escalation rate" },
      {
        type: "p",
        text: "When an agent hands off, the human receives a decision, not a mystery. That means the handoff has to carry the context: what the agent was trying to do, what it found, why it stopped, and what it recommends. A handoff that arrives as a bare alert forces the human to redo the work from scratch, which is worse than never having automated it.",
      },
      {
        type: "p",
        text: "Instrument how long handoffs sit unclaimed. A rising queue is the earliest reliable signal that the agent is escalating on cases it should handle, or that the routing is sending them to someone with no authority to resolve them. Both are fixable, but only if the queue is measured.",
      },
      { type: "h", text: "Let the boundary move" },
      {
        type: "p",
        text: "The handoff point should be written down and revisited on a schedule. As evaluation data accumulates, categories of work graduate from review-before-act to act-and-notify. That graduation is the actual return on the project, and it only happens if someone owns the decision and has the numbers to defend it.",
      },
      {
        type: "p",
        text: "Graduate by category rather than globally. Refund approvals under a threshold move before refund approvals above it. One document type moves before the rest. Each move is a small, defensible decision backed by the review history for that specific category, which means it can be argued for and, if it goes wrong, reversed without touching anything else.",
      },
      {
        type: "p",
        text: "Design the boundary to move in both directions too. If the error rate in a graduated category rises, it should return to review without a deployment and without a meeting. A handoff policy that can only be loosened is not a policy, it is a ratchet, and the first serious incident will take the whole system back to manual.",
      },
    ],
  },
  {
    slug: "the-real-cost-of-agents",
    title: "The real cost of running agents",
    dek: "Token spend is the line item everyone models and the smallest one that matters. The costs that decide the business case sit somewhere else entirely.",
    category: "Report",
    date: "2026-05-07",
    readMins: 8,
    body: [
      {
        type: "p",
        text: "Every business case for an agentic system starts with a token cost estimate. It is the easiest number to compute and the least useful one to know, because inference is the one input whose price has moved consistently in the buyer's favour while every other cost line has held or grown.",
      },
      {
        type: "p",
        text: "Model the costs that do not fall. Here is the full picture, roughly in order of how badly each one is usually underestimated.",
      },
      {
        type: "ledger",
        caption: "Total cost of an agentic system · where the money actually goes",
        columns: ["Cost line", "Why it is underestimated", "What controls it"],
        rows: [
          {
            label: "Inference",
            score: "01",
            cells: [
              "It is the only line most teams model, so it dominates the spreadsheet and not the budget.",
              "Routing cheap work to small models, caching, and not retrying blindly on failure.",
            ],
          },
          {
            label: "Human review",
            score: "02",
            cells: [
              "Reviewer time is charged to an existing team, so it never appears in the project cost.",
              "Per-action handoff design and a plan to graduate categories out of review.",
            ],
          },
          {
            label: "Data plumbing",
            score: "03",
            cells: [
              "Integrations are scoped as one-off build and behave as permanent maintenance.",
              "Fewer integrations, owned interfaces, and refusing scope that needs a new connector.",
            ],
          },
          {
            label: "Evaluation",
            score: "04",
            cells: [
              "Treated as a launch gate, so nobody budgets the standing cost of keeping it current.",
              "A named owner, an automated suite, and a fixed cadence rather than ad-hoc panic runs.",
            ],
          },
          {
            label: "Incident cost",
            score: "05",
            cells: [
              "Priced at zero until the first bad action, then priced emotionally rather than numerically.",
              "Containment limits, reversal paths, and recovery time measured as a standing metric.",
            ],
          },
        ],
      },
      {
        type: "callout",
        text: "Inference is the only cost in an agentic system that has reliably fallen. Budget as though every other line is permanent, because it is.",
      },
      { type: "h", text: "The failure-mode multiplier" },
      {
        type: "p",
        text: "Agentic systems have a cost characteristic that request-response software does not: a loop that fails badly can consume a multiple of its expected spend before anyone notices. A retry policy with no ceiling, a planning step that re-plans on every tool error, or two agents handing work back and forth will all produce a bill that looks like a bug because it is one.",
      },
      {
        type: "p",
        text: "Cap steps per task, cap total spend per task, and alert on the tail rather than the average. Mean cost per run is a comforting number that hides exactly the behaviour that will hurt you.",
      },
      { type: "h", text: "Model the saving honestly too" },
      {
        type: "p",
        text: "The other half of the business case is usually softer than it is presented. Time saved is only money saved if the time is redeployed or the headcount does not grow, and a system that removes forty percent of a task from ten people rarely removes four people. State the saving in the terms your finance team would accept: capacity absorbed without hiring, cycle time reduced, error rate reduced, or a queue that no longer needs a weekend.",
      },
      {
        type: "p",
        text: "A business case built on a defensible operational metric survives its first review. One built on notional hours saved gets challenged in month three, which is precisely when the system is working but has not yet compounded.",
      },
    ],
  },
  {
    slug: "least-privilege-for-agents",
    title: "Agents need least privilege more than people do",
    dek: "You would not give a new hire admin credentials on their first day. Most agent deployments do exactly that, and call it an integration.",
    category: "Position",
    date: "2026-05-21",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Permission design for agents is routinely worse than permission design for humans, and the reason is mundane. Getting a scoped credential takes a week of back and forth with whoever owns the system. An admin key takes an afternoon. So the prototype gets the admin key, the prototype becomes the production system, and nobody goes back.",
      },
      {
        type: "p",
        text: "This is a worse problem with an agent than with a person for three reasons. An agent acts faster than anyone can intervene. It acts on instructions that may have originated with an untrusted party. And it has no intuition about which action is unusual, so it will not hesitate before doing something a person would have questioned.",
      },
      { type: "h", text: "Scope the credential to the workflow, not the system" },
      {
        type: "p",
        text: "The unit of access should be the specific action the agent needs, on the specific subset of records it operates over. Read access to open tickets in one queue, not read access to the ticketing platform. Write access to a status field, not write access to the record. This takes longer to arrange and it is the whole job, because every permission you grant beyond the workflow is a failure mode you have chosen to accept.",
      },
      {
        type: "list",
        items: [
          "Separate credentials per agent and per environment, so a compromise or a runaway loop is bounded and attributable.",
          "Read and write split into different credentials where the platform allows it, so a read-only failure cannot mutate anything.",
          "Hard caps on volume and value per action, enforced outside the agent rather than in its instructions.",
          "Every action logged with the credential, the input that triggered it, and the reasoning that led to it.",
          "A documented revocation path that someone can execute in minutes without a deploy.",
        ],
      },
      {
        type: "callout",
        text: "An instruction in a prompt is a preference. A permission boundary is a control. Never let the first one do the job of the second.",
      },
      { type: "h", text: "Untrusted input is the default, not the exception" },
      {
        type: "p",
        text: "Any agent that reads email, tickets, documents, or web content is processing text written by people outside your trust boundary. That text can contain instructions. Treating the content an agent retrieves as data rather than direction is a design property, not a prompt you write, and the only durable version of it is that the agent simply cannot perform the dangerous action regardless of what it was told.",
      },
      {
        type: "p",
        text: "The practical rule: assume the model can be talked into anything it is permitted to do, then design so that the list of things it is permitted to do is short enough that this is survivable.",
      },
      { type: "h", text: "Do this at the start" },
      {
        type: "p",
        text: "Retrofitting least privilege onto a working system is unpleasant, because nobody knows which of the granted permissions are load-bearing and finding out means breaking things in production. Scope it at the start, when the cost is one conversation with the system owner rather than an archaeology project.",
      },
    ],
  },
  {
    slug: "start-inside-the-building",
    title: "Start inside the building",
    dek: "The highest-return first deployment is almost never the customer-facing one, and the reason has nothing to do with caution.",
    category: "Position",
    date: "2026-06-04",
    readMins: 5,
    body: [
      {
        type: "p",
        text: "When a business decides to deploy AI, the instinct is to point it at customers, because that is where the visible value is. It is the wrong first move, and not because internal tools are safer. They are, but that is a secondary benefit. The real argument is that internal deployments give you something customer-facing ones cannot: users who will tell you the truth.",
      },
      { type: "h", text: "Three structural advantages" },
      {
        type: "list",
        items: [
          "Your colleagues report failures. A customer who receives a wrong answer leaves. An operations lead who receives a wrong answer walks over and describes exactly what was wrong, in domain language, with the correct answer attached.",
          "The ground truth already exists. Internal work has a record of what was done and by whom, which is an evaluation set you do not have to construct.",
          "The blast radius is contained and reversible. A wrong internal status update is a correction. A wrong customer communication is an apology and sometimes a refund.",
        ],
      },
      {
        type: "callout",
        text: "Internal users are the only group that will debug your system for free, in your own vocabulary, without churning.",
      },
      { type: "h", text: "The compounding argument" },
      {
        type: "p",
        text: "The integrations, permission model, evaluation harness, and observability you build for an internal tool are the same layer a customer-facing system needs. Build them once against a forgiving audience and the second system costs a fraction of the first. Build them first against customers and you are hardening the layer while it is already load-bearing, in public.",
      },
      {
        type: "p",
        text: "There is also an organisational effect that is hard to buy any other way. A team that has used an internal agent for a quarter has an informed opinion about where it helps and where it does not. That opinion is the best scoping input available for the next system, and it is worth more than any vendor workshop.",
      },
      { type: "h", text: "Pick the one everyone complains about" },
      {
        type: "p",
        text: "The right first internal target is the task people already describe as a waste of their time, that happens daily, and that someone can explain the rules for in five minutes. Reconciling two systems that disagree. Triaging an inbound queue. Drafting the same document with different inputs. These are unglamorous and they are exactly where a first system builds credibility, because the people it helps are the people who will be asked whether it worked.",
      },
      {
        type: "p",
        text: "There is also a team effect worth naming. The group that uses a working internal agent becomes your most credible internal reference for every system that follows. They can describe what changed in their own work, using their own vocabulary, in a way that no case study from another organisation can replicate. That testimony does more for the second business case than any metric in a slide.",
      },
      { type: "h", text: "Measure the right thing" },
      {
        type: "p",
        text: "Internal tools tend to be measured on usage, which is a proxy metric for a reason: if people adopt it freely, something is working. But usage can be high because it is mandated and low because it is a side option. The better measure is task completion and error rate compared to the period before, tracked by the team lead rather than reported by the tool. That number belongs to the people doing the work, not to the project that built the system, and that distinction is what makes it trustworthy enough to build on.",
      },
    ],
  },
  {
    slug: "trained-on-your-business",
    title: "What trained on your business actually requires",
    dek: "The phrase gets used to mean fine-tuning, and it almost never should. What most businesses need is context engineering, and it is a different budget.",
    category: "Field note",
    date: "2026-06-18",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Buyers ask for a model trained on their business. Vendors say yes, because the phrase sells. Both parties usually mean different things, and the gap between them surfaces about six weeks in, when it becomes clear that the expensive option was also the wrong one.",
      },
      {
        type: "p",
        text: "There are three distinct things the phrase can mean, and they differ by an order of magnitude in effort and in what they actually change about the output.",
      },
      { type: "h", text: "The three interpretations" },
      {
        type: "list",
        items: [
          "The system knows your facts. Your policies, products, customers, and history are retrievable at the moment they are needed. This is retrieval and context engineering, and it is what nearly every business actually wants.",
          "The system follows your procedure. It applies your escalation rules, your tone, your approval thresholds, your definition of a complete record. This is prompt and workflow design with good examples, plus evaluation against your own historical decisions.",
          "The system has internalised a pattern that cannot be described. Usually a specialised classification, an unusual format, or a domain vocabulary that no amount of context solves. This is the only case where fine-tuning is the right instrument.",
        ],
      },
      {
        type: "callout",
        text: "Fine-tuning changes how a model behaves. It does not tell the model what happened in your business yesterday. Most requests for the first are really requests for the second.",
      },
      { type: "h", text: "What the first two actually require" },
      {
        type: "p",
        text: "They require that your knowledge exists somewhere an agent can read, that it is current, and that someone owns keeping it that way. That is the entire prerequisite, and it is where these projects stall, because it is unglamorous work that belongs to nobody.",
      },
      {
        type: "p",
        text: "The second interpretation has a further requirement that surprises people: you have to be able to articulate the procedure. Where the rule is genuinely tacit, held by one experienced person who makes good calls they cannot explain, the work is to extract and document that judgement before any system can apply it. This is valuable in itself and it is usually the harder half of the engagement.",
      },
      { type: "h", text: "When fine-tuning is genuinely right" },
      {
        type: "p",
        text: "Fine-tuning earns its cost when you have a large volume of consistent input-output pairs, a task narrow enough that the pattern is stable, and a reason that context alone cannot carry it, typically format rigidity, latency, or unit economics at scale. If you cannot state which of those three you are solving for, you are buying a fine-tune to satisfy a phrase in a slide.",
      },
      {
        type: "p",
        text: "And understand what it commits you to. A fine-tuned model is an artefact that needs versioning, re-training as the underlying base changes, and its own evaluation. It is infrastructure, not a one-off procurement, which is exactly the reason it should sit in an account you control rather than inside somebody else's product.",
      },
    ],
  },
  {
    slug: "observability-for-non-deterministic-systems",
    title: "Observability when the system is not deterministic",
    dek: "Traditional monitoring asks whether the system responded. Agentic systems fail while responding perfectly, which is why most teams find out from a customer.",
    category: "Report",
    date: "2026-07-02",
    readMins: 8,
    body: [
      {
        type: "p",
        text: "Conventional monitoring is built on a premise that does not hold here: that a working system and a broken one look different. An agent that has started answering from a stale document, or that has quietly begun escalating everything, or that has been talked into a bad action, returns a two hundred with a healthy latency. Every dashboard is green while the system is wrong.",
      },
      {
        type: "p",
        text: "Observability for non-deterministic systems has to watch output quality and behaviour, not just availability. That requires a different instrument set and, more importantly, a different set of alerts.",
      },
      { type: "h", text: "The three layers to instrument" },
      {
        type: "p",
        text: "Treat these as a maturity progression. Most teams have the first, need the second, and only build the third after an incident that could have been caught by it.",
      },
      {
        type: "ledger",
        caption: "Observability maturity for agentic systems · L1 to L3",
        columns: ["Layer", "What it watches", "The failure it catches"],
        rows: [
          {
            label: "L1 · Operational",
            score: "01",
            cells: [
              "Uptime, latency, error rates, token and step counts per task.",
              "The system is down, slow, or looping and burning budget.",
            ],
          },
          {
            label: "L2 · Behavioural",
            score: "02",
            cells: [
              "Full traces: inputs, retrieved context, tool calls, decisions, escalation and refusal rates.",
              "The system is running but has changed what it does, and nobody decided that.",
            ],
          },
          {
            label: "L3 · Quality",
            score: "03",
            cells: [
              "Sampled outputs scored against a rubric, downstream corrections, user overrides.",
              "The system is running, behaving consistently, and producing worse answers than last month.",
            ],
          },
        ],
      },
      {
        type: "callout",
        text: "In a deterministic system, silence means healthy. In an agentic one, silence means nobody is looking at the output.",
      },
      { type: "h", text: "Drift has four sources, and they need different responses" },
      {
        type: "list",
        items: [
          "Model drift: the provider updates a model and behaviour shifts under you. Pin versions where the platform allows it, and re-run the evaluation suite on every version change.",
          "Data drift: the inputs change shape, a new product line, a new format, a new market. Caught by monitoring the input distribution, not the output.",
          "Context drift: the corpus the agent reads goes stale or gains a conflicting document. Caught by tracking which sources answers are built from and how old they are.",
          "Usage drift: people find new ways to use the system it was never scoped for. This is often good news, but it is a scope decision, not something to discover through a failure.",
        ],
      },
      { type: "h", text: "Alert on behaviour, not thresholds" },
      {
        type: "p",
        text: "The most useful alerts in an agentic system are rate-of-change alerts on behavioural metrics. Escalation rate up forty percent week over week. Average tool calls per task climbing. A source document suddenly appearing in most answers. Confidence distribution shifting. None of these is an error and every one of them is a system telling you something changed before a customer does.",
      },
      {
        type: "p",
        text: "Build the trace view before you build the alerts. When an alert fires, the first question is always what the agent actually saw and did, and if answering that takes a day of log archaeology, the alert will be ignored within a month.",
      },
      { type: "h", text: "Make the human correction a signal" },
      {
        type: "p",
        text: "Every time a person overrides, edits, or reverses an agent action, that is a labelled example arriving for free. Capture it with the original context attached. Teams that do this accumulate an evaluation set that gets sharper as the system ages. Teams that do not will be constructing one by hand the first time they need to prove the system still works.",
      },
    ],
  },
  {
    slug: "the-latency-budget",
    title: "The latency budget is the product",
    dek: "Voice agents do not fail on comprehension. They fail on timing, and the budget is smaller than almost every architecture assumes.",
    category: "Field note",
    date: "2026-07-16",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Text agents are forgiving about time. A user waiting on a chat reply will tolerate several seconds without concluding anything is wrong. Voice has no such allowance. Human conversational turn-taking operates on a gap measured in a few hundred milliseconds, and when that gap stretches, the listener does not think the system is thinking. They think it did not hear them, and they speak again.",
      },
      {
        type: "p",
        text: "That is the whole design problem. Everything else in a voice agent is negotiable. The latency budget is not, and it has to be allocated before the architecture is chosen rather than measured after.",
      },
      { type: "h", text: "Spend the budget deliberately" },
      {
        type: "p",
        text: "The round trip contains endpointing, transcription, whatever retrieval and tool calls the turn requires, generation, and speech synthesis. Every one of those has to fit inside the gap together, which means the architecture questions are all about what can be removed from the critical path.",
      },
      {
        type: "list",
        items: [
          "Stream everything that can stream. Transcription while the user is still speaking, generation into synthesis token by token, audio out before the sentence is finished.",
          "Move tool calls off the critical path. Pre-fetch the likely context at call start rather than mid-turn, and keep a single synchronous lookup as the hard ceiling.",
          "Accept a smaller model for the conversational layer and reserve the larger one for the turns that genuinely need it.",
          "Budget for the slowest dependency, not the average one. A CRM lookup that usually takes two hundred milliseconds and sometimes takes three seconds will define the user's impression of the system.",
        ],
      },
      {
        type: "callout",
        text: "In voice, a pause is not the system thinking. It is the system appearing not to have heard, and the user talks over it.",
      },
      { type: "h", text: "The uncanny failures are worse than the obvious ones" },
      {
        type: "p",
        text: "A voice agent that is clearly a machine is easy to interact with, because the caller calibrates immediately. One that is nearly human sets an expectation it will then break, and the break is jarring. Interruptions that are not handled, a cheerful tone delivering bad news, a perfect voice that cannot understand a postcode, a response that begins before the caller has finished the sentence. Each of these is a small failure that reads as unsettling rather than merely broken.",
      },
      {
        type: "p",
        text: "The practical answers are unglamorous. Handle barge-in properly so the agent stops the moment the caller speaks. Use filler and acknowledgement only where a human would. Disclose that it is an automated system at the start, which costs nothing and removes the entire category of betrayal when the caller works it out later.",
      },
      { type: "h", text: "Design the exit before the entrance" },
      {
        type: "p",
        text: "Every voice deployment needs a fast, unconditional path to a human, triggered by request, by repeated misrecognition, or by detected frustration. And the handoff has to carry context, because transferring a caller who then has to repeat everything is worse than not having automated the call. The transfer is the part of the system callers remember, and it is usually the part built last.",
      },
    ],
  },
  {
    slug: "when-orchestration-is-overhead",
    title: "Most multi-agent systems should be one agent",
    dek: "Orchestration is presented as an architecture and is usually a workaround for a context problem that would be cheaper to solve directly.",
    category: "Position",
    date: "2026-08-13",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Multi-agent architectures are the default diagram in every AI strategy deck: a planner, a set of specialists, a critic, a synthesiser. The diagrams are appealing because they map onto how an organisation is structured. That is exactly the reason to distrust them, because dividing a task across agents imports every coordination problem that makes organisations slow, and adds a few that are specific to non-deterministic components.",
      },
      { type: "h", text: "What the split actually costs" },
      {
        type: "list",
        items: [
          "Context is lost at every boundary. Each handoff is a lossy summary, and the receiving agent cannot know what was dropped.",
          "Errors compound rather than cancel. Three agents at ninety percent reliability in sequence is not a ninety percent system.",
          "Debugging becomes correlation. A wrong output now requires reconstructing which agent introduced the error, across separate traces.",
          "Latency and cost multiply, because coordination messages are themselves inference calls.",
          "Failure modes emerge that no single component exhibits: two agents deferring to each other, a critic that rejects indefinitely, a planner re-planning on every tool error.",
        ],
      },
      {
        type: "callout",
        text: "Every agent boundary is a place where context goes to die. Add one only when a single agent has genuinely run out of room.",
      },
      { type: "h", text: "When orchestration genuinely earns its cost" },
      {
        type: "p",
        text: "There are real cases. They share a property: the split is imposed by something structural rather than chosen for elegance.",
      },
      {
        type: "list",
        items: [
          "Hard permission boundaries. An agent with production write access should not be the same agent processing untrusted inbound text. The split is a security control and worth its cost.",
          "Genuinely parallel work. Independent subtasks with no shared state, where the parallelism buys wall-clock time that matters.",
          "Divergent tool or model requirements. A step needing a specialised model, a different latency profile, or a separate deployment lifecycle.",
          "Independent scaling. One stage runs thousands of times per stage of another, and coupling them wastes capacity.",
        ],
      },
      { type: "h", text: "The honest default" },
      {
        type: "p",
        text: "Start with one agent, a well-designed tool set, and a clear context strategy. Most tasks that appear to need a team of agents actually need better tools and a tighter prompt. Split only when you can name the specific constraint the split relieves, and when you have instrumented enough to prove the single-agent version hit it.",
      },
      {
        type: "p",
        text: "The organisational version of this argument is the more important one. A multi-agent system is harder to own, harder to evaluate, and harder to explain to the people who have to trust it. Complexity that cannot be explained to its owner does not survive the first incident, and surviving incidents is the entire test of whether a system stays in production.",
      },
      { type: "h", text: "A test before you split" },
      {
        type: "p",
        text: "Before committing to an orchestrated architecture, run the candidate task as a single agent with a generous context window and all the tools it needs. Characterise what it gets wrong. If the failures are about missing capability, splitting will not fix them. If the failures are about attention degrading over a very long context, about a result one step needing to gate another, or about a genuine security boundary, the split is warranted. Make this a test, not a presumption.",
      },
      {
        type: "p",
        text: "The field has a naming problem here too. Calling a system multi-agent when it is one agent with two sequential tool-use steps is a presentation choice, not an architecture. The costs of true orchestration, shared state, separate deployments, cross-agent tracing, appear late and matter enormously. Know which one you are building before you name it.",
      },
    ],
  },
  {
    slug: "build-buy-or-assemble",
    title: "Build, buy, or assemble",
    dek: "The build-versus-buy question is the wrong shape for the intelligence layer, because the real decision is which parts you can afford to have someone else own.",
    category: "Report",
    date: "2026-09-10",
    readMins: 8,
    body: [
      {
        type: "p",
        text: "Build versus buy is framed as a single decision and it never is. An intelligence layer is a stack of components with very different characteristics: models, orchestration, retrieval, integration, evaluation, and the workflow logic that encodes how your business actually operates. Deciding them together is how businesses end up either rebuilding commodity infrastructure or renting the one part that constituted their advantage.",
      },
      {
        type: "p",
        text: "Decompose it. For each layer, the question is not whether you could build it. It is what happens to you if the party that owns it changes its pricing, its terms, or its mind.",
      },
      {
        type: "ledger",
        caption: "Decision matrix · decide each layer separately",
        columns: ["Layer", "Sensible default", "The test that overrides the default"],
        rows: [
          {
            label: "Foundation model",
            score: "01",
            cells: [
              "Buy. It is capital-intensive, commoditising, and improving faster than you could match.",
              "Override only for data residency or unit economics you can demonstrate at real volume.",
            ],
          },
          {
            label: "Orchestration",
            score: "02",
            cells: [
              "Assemble from open components you can read and fork.",
              "A framework that hides control flow you need to debug costs more than it saves.",
            ],
          },
          {
            label: "Retrieval and data",
            score: "03",
            cells: [
              "Own. The corpus, its metadata, and its permission model are yours.",
              "The index can be a vendor. The content, ownership, and freshness path cannot be.",
            ],
          },
          {
            label: "Workflow logic",
            score: "04",
            cells: [
              "Build. This is the encoding of how your business decides things.",
              "There is no override. If this lives in a vendor, your process is their feature.",
            ],
          },
          {
            label: "Evaluation",
            score: "05",
            cells: [
              "Build. The definition of a correct answer is yours and nobody else has it.",
              "Tooling can be bought. The rubric and the dataset stay in-house.",
            ],
          },
          {
            label: "Observability",
            score: "06",
            cells: [
              "Buy the plumbing, own the traces.",
              "Any vendor that will not export your full trace history is a lock-in you have not priced.",
            ],
          },
        ],
      },
      {
        type: "callout",
        text: "Buy the parts that are becoming cheaper. Own the parts that encode how you win. Most procurement gets this exactly inverted.",
      },
      { type: "h", text: "The exit test" },
      {
        type: "p",
        text: "For each vendor in the stack, answer one question honestly: if they tripled their price or shut the product tomorrow, what happens? If the answer is a weekend of work, buy freely. If the answer is that your operation stops or that a year of accumulated context is unrecoverable, that layer needed to be owned regardless of how good the product is.",
      },
      {
        type: "p",
        text: "Run the test on data as well as software. Your prompts, your evaluation sets, your trace history, and your corrections are the assets that compound. A vendor that holds them without an export path is not a supplier, it is a dependency with a renewal date.",
      },
      { type: "h", text: "Assembly is the underrated middle" },
      {
        type: "p",
        text: "The framing that gets lost is assembly: composing open components inside infrastructure you control. It gives you the speed of buying with the ownership of building, and it is the right default for most of the middle of the stack. The cost is that you carry the integration work rather than a vendor carrying it, which is a real cost and usually a smaller one than it looks next to a platform licence and a migration you cannot perform.",
      },
      {
        type: "p",
        text: "The rule that holds across every engagement: buy capability, own context. Capability is what the models and tools can do, and it gets cheaper every year. Context is what your business knows, how it decides, and what it has learned from being wrong. That is the part worth owning, and it is the part most stacks accidentally give away.",
      },
    ],
  },
];

export const featuredBriefing = briefings.find((b) => b.featured) ?? briefings[0];

export const getBriefing = (slug: string) => briefings.find((b) => b.slug === slug);
