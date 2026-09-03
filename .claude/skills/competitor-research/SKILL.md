---
name: competitor-research
description: Deep-dive research on competitor or comparable websites (design, content, architecture, UX patterns) and turn findings into concrete, codebase-specific proposals for nuvero.space. Use when the user gives one or more competitor/reference URLs or a topic to research, and wants ideas for what Nuvero should adopt, improve, or avoid.
---

# Competitor & design research agent

Input is one or more URLs (competitors, award-winners, or just "sites that look good") and/or
a topic ("how do other AI-agency sites explain pricing"), given directly in the request. Output
is never a vague trend report — it is a short list of specific, buildable changes to *this*
codebase, each one already checked against what Nuvero's brand allows.

**Input source, unambiguous:** research only the URLs/content the user actually provided in
this conversation. Never treat the Nuvero Outreach engine's Google Sheets, its prospect/company
data, or anything else from that separate project as input here — those are sales-prospect
research for cold outreach, a completely different kind of research with its own agent
(`nuvero-outreach/backend/app/agents/research_agent.py`) and its own purpose. This skill never
reads a spreadsheet.

Load `frontend-design` (this repo's `.claude/skills/frontend-design/SKILL.md`) before writing
any recommendation — every idea below gets filtered through it in step 3.

## Process

1. **Fetch each site**, don't skim the homepage. Use WebFetch/browser tools to actually load
   pages: homepage, pricing/services, a case study or work-sample page, and about/team if
   present. A single-page impression misses navigation patterns, content depth, and how a site
   handles its second-tier pages, which is usually where the real ideas are.

2. **Catalog what you find, in these categories** — skip categories with nothing worth noting
   rather than padding:
   - **Visual system**: palette, type pairing, spacing rhythm, border/shadow/radius language,
     iconography, illustration vs. photography vs. abstract graphics.
   - **Layout & IA**: how pages are structured, nav patterns, how dense vs. sparse, how depth
     is signaled (scroll length, section count, sidebar vs. linear).
   - **Motion**: what animates, on scroll vs. hover vs. load, subtle vs. cinematic, and whether
     it's decorative or actually clarifies something (e.g. a diagram animating to show a flow).
   - **Content & copy**: sentence length and register, how technical claims are made
     credible (numbers, logos, named case studies vs. generic superlatives), how pricing/process
     is explained, what the CTA pattern is.
   - **Conversion patterns**: what the primary action is, how many steps to it, what social
     proof appears and where, how objections get pre-empted.
   - **Distinctive one-offs**: anything genuinely unusual worth naming even if it doesn't fit
     the categories above — a specific interaction, a page type, a way of presenting data.

3. **Filter through Nuvero's identity before proposing anything.** For every candidate idea,
   answer: does this translate into flat editorial brutalism (cream/red/ink, zero radius, hard
   offset shadows, DM Sans/Space Mono, the print-shop/ledger concept), or does adopting it mean
   copying someone else's visual language wholesale? Only the former survives. This mirrors the
   repo's own standing rule (never imitate reference sites' motifs/fonts/copy — reinterpret
   through Nuvero's own language) — a good idea stated as "add eclipse-ring hover states" is
   wrong; the same idea stated as "add a hard-edged ring stamp effect on hover, reusing the
   existing rubber-stamp motif" is right. Positioning-check copy ideas too: Nuvero sells AI
   infrastructure/AI employees, never "product/service/tool" — an idea about how a competitor
   phrases pricing has to survive translation into that vocabulary, not just get copy-pasted.

4. **Ground each surviving idea in the actual codebase**, not a hypothetical. Before proposing
   a component or page addition, check `src/components/shared/` and `src/content/*.ts` for
   what already exists — reuse `Reveal`, `MaskReveal`, `SectionHeader`, `Magnetic`, `Marquee`,
   the motion tokens in `src/lib/motion.ts`, and existing content structures before inventing
   new ones. A proposal that requires a new primitive should say so explicitly and name where
   it'd live.

5. **Report as a ranked list, most valuable first.** Each entry:
   - What the reference site does (one line, cite the URL).
   - Why it works (the underlying mechanism, not just "it looks nice" — e.g. "reduces the
     number of decisions before the CTA" or "makes the case-study numbers feel audited, not
     marketed").
   - The Nuvero-translated version (specific enough to hand to an implementer): which page/
     component, what changes, which existing primitive it builds on or what new one it needs.
   - Effort: trivial (content-only) / small (one component) / larger (new page type or section).

   Cut anything that only survives as "worth considering" — if it's not concrete enough to
   start building, it's not done yet.

6. **Offer to implement**, don't implement unprompted. This is a research pass; ask which of
   the ranked ideas to build before touching any files. If the user says "just do the top one"
   or similar, proceed directly without re-asking.

## Reference-site scraping notes

- Prefer WebFetch for content/structure; use the browser tools (screenshot, computer, read_page)
  when the *visual* detail is the point — spacing, a specific animation, a layout that text
  extraction would flatten.
- A site that blocks fetching (bot walls, JS-only rendering that WebFetch can't see through) is
  worth trying once via the browser tools before giving up on it; note in the report if a site
  couldn't be inspected rather than silently skipping it.
- Never reproduce a competitor's actual copy verbatim in the report or in code — describe the
  pattern, don't quote paragraphs.
