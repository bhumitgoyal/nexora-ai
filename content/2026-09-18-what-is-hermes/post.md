# Instagram carousel — "What is Hermes?"

**Date:** 2026-09-18 · **Format:** 4 images, 1080×1350 (4:5) · **Files:** `out/slide-1..4.png`

> Hermes is **Nous Research's** open-source agent framework — not a Nuvero system.
> This is an explainer post, so the attribution is on slide 1 and in the caption.
> Nuvero's angle is the closing line: this is the shape AI infrastructure is taking.

Rebuild after edits: `bash .claude/skills/social-content/scripts/render.sh content/2026-09-18-what-is-hermes`

---

## Slide copy

**Slide 1 — cover (cream)**
- Eyebrow: NUVERO AI · FIELD NOTES
- Headline: **What is Hermes?**
- Lead: The open-source agent that remembers, learns, and never logs off.
- Icon tiles: 🧠 Remembers · 🔁 Learns · 🌙 Always on
- Stamp: NOUS RESEARCH

**Slide 2 — the closed learning loop (ink)**
- Eyebrow: 01 — CLOSED LEARNING LOOP
- Headline: **It learns on the job**
- Finishes the task
- Grades its own work
- Saves a reusable skill
- Runs it better next time

**Slide 3 — profiles (cream)**
- Eyebrow: 02 — PROFILES
- Headline: **Not one agent. A department.**
- 01 Scout — finds the signals
- 02 Analyst — builds the knowledge base
- 03 Briefer — delivers your daily brief
- Footline: Own memory. Own model. Own schedule.

**Slide 4 — where it runs (brand red)**
- Eyebrow: 03 — WHERE IT RUNS
- Headline: **Plugs into everything**
- MCP: your DB, GitHub, CRM
- Browser and web search
- Telegram on your phone
- Sandboxed in Docker
- CTA: Book a build → nuvero.space

---

## Caption

Most AI forgets you the moment you close the tab. Hermes doesn't.

Hermes is an open-source, always-on agent framework from Nous Research. Instead of
treating every prompt as an isolated event, it keeps long-term memory, learns from
finished work, and runs on a schedule.

Three things that make it different:

→ **A closed learning loop.** Normal agent flow is task → plan → tools → answer → stop.
Hermes adds evaluation and retention: after a hard task it reviews what worked, extracts
a reusable skill in an open format (agentskills.io), and refines that skill each time it
gets used again.

→ **Profiles.** One agent doing search + analysis + reporting degrades fast. Hermes splits
the work into specialised agents, each with its own SOUL.md, model, memory and schedule.
The popular setup is a three-agent research department: Scout finds signals, Analyst
synthesises them into a shared wiki, Briefer delivers the daily brief. A WakeAgent gate
stops them burning tokens when there's nothing new to process.

→ **It runs where you are.** CLI, terminal UI, desktop app, or a Telegram gateway so you
can talk to it from your phone. MCP support wires it into your database, GitHub or CRM —
with tool whitelists, blacklists for dangerous actions, and Docker or remote-SSH isolation,
because an agent that browses the web and executes code has to treat untrusted input
seriously.

Works with any model carrying 64k+ context — Claude, GPT, Gemini, or local via Ollama
and llama.cpp.

This is the direction AI infrastructure is heading: persistent, scheduled, and wired into
real systems instead of sitting in a chat window. That's exactly what we build at Nuvero.

Want that running inside your business? → nuvero.space

#AIinfrastructure #AIagents #AgenticAI #HermesAgent #NousResearch #OpenSourceAI #MCP
#AIautomation #LLMs #AIengineering #BuildInPublic #AIforBusiness

---

## Notes

- Every factual claim traces to the Hermes brief supplied by the user (closed learning
  loop, agentskills.io skill format, Profiles/SOUL.md, Scout–Analyst–Briefer, WakeAgent
  gate, MCP whitelisting, FAL.ai image generation, gateways, 64k context floor).
- No metrics are claimed anywhere — none were available, so none were invented.
- FAL.ai image generation and vision/computer-use are in the brief but were cut from the
  slides to stay inside the 25-words-per-slide cap. They're candidates for a follow-up post.
