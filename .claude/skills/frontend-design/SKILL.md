---
name: frontend-design
description: Design system, motion conventions, and component workflow for the Nuvero AI site. Use whenever building, restyling, or animating any page, section, or component in this repo — headers, heroes, cards, scroll effects, loaders, CTAs. Also use when adding components from shadcn/Magic UI/Aceternity registries or when reviewing UI changes.
---

# Nuvero AI — Frontend Design System

## Positioning (drives all copy)

Nuvero sells **AI infrastructure — the intelligence layer a business runs on**. Never "product", "service", "tools", or "consultancy". Vocabulary: *systems, deployments, infrastructure, agents that know your work, if it's manual it's automatable*. Nav labels: Infrastructure (/what-we-offer), Systems (/services), Deployments (/work).

## Visual language — flat editorial brutalism

- Palette (never add a second accent): cream bg `#FDF0D5`, brand red `#C1121F` (`--color-brand`), deep ink `#003049`, steel blue `#669BBC` (`--color-accent`, sparingly). All colors via CSS variables in `src/app/globals.css` `@theme` — never raw hex in components.
- **Zero border radius.** Square corners, 1.5–2px solid borders, hard offset shadows (`4px 4px 0 var(--color-brand)`). No blur/glassmorphism, no gradients on surfaces.
- Type: DM Sans (`font-display`) for headings, Space Mono (`font-mono`) for eyebrows/labels/numbers — no other typefaces. Accent words in headlines get brand red, nothing else. Eyebrow pattern: mono, 10px, uppercase, `tracking-[0.18em]+`, with a small brand square.
- Identity concept: **living print-shop** — job tickets, day-sheet ledgers, commissioning records, rubber-stamp moments. Never imitate reference sites' motifs (eclipse rings, serif italics, verb stacks); reinterpret ideas through this print/ledger language.
- Icons: Lucide only. Never emoji as icons.

## Apple HIG discipline (added Oct 2026 — see docs/apple-hig-upgrade-plan.md)

The look stays brutalist; these rules hold it to Apple's craft bar. Check every change against them.

- **Hierarchy**: one dominant element per viewport, one primary CTA per section. Secondary actions differ by *style* (outline vs filled), never size.
- **Type tokens only**: `text-display` (home H1), `text-title-1` (page H1), `text-title-2` (section H2), `text-title-3`, `text-lead`, `text-body` (17px), `text-callout`, and `.eyebrow` for every mono label. **Nothing below 11px.**
- **Colour roles**: `--color-accent` (steel blue) is decorative only — text/icons use `--color-accent-ink`. `--color-fg-subtle` is the tertiary text floor (≥5:1 everywhere). Cream on ink ≥ 75% opacity. Red = action / emphasis / stamp.
- **Hit targets**: every link/button/input ≥ 44px (`min-h-11`). Buttons use `GlowButton` or the `.press` class (tactile press into the hard shadow).
- **Shadows**: `--shadow-hard-sm | --shadow-hard | --shadow-hard-lg | --shadow-hard-brand`. No blur, ever.
- **Section rhythm**: `.section-y` — don't hand-write `py-24 md:py-32`.
- **Above the fold**: pass `priority` to `Reveal` / `MaskReveal` / `SectionHeader` (h1 does it automatically) — CSS reveal from first paint, never waits for hydration. The LCP element must never be hidden in SSR.
- **Looping / ambient motion**: gate with `useAmbientMotion()` or `useLiveMotion(ref)` (`src/hooks/useMotionPreference.ts`) — respects reduced motion, the footer "Pause motion" switch, and sleeps offscreen. CSS loops are paused by `html[data-motion="paused"]`. No auto-advancing carousels — rails are user-driven scroll-snap.
- **Pins**: only where the `pin:` variant / `PIN_QUERY` matches (≥1024 wide, ≥700 tall, motion allowed). Render the non-pinned layout with `pin:hidden` / the pinned one with `hidden pin:flex` — never swap after hydration.
- **Springs**: `SPRING.settle` (no overshoot) by default; `SPRING.fling` only after a drag/momentum gesture.
- **Writing**: CTA lexicon lives in `site.cta` (`primary` = "Book a 30-min call"). Verb-first buttons, sentence case, errors next to the field saying how to fix, no "oops", placeholders show format only.
- **Floating UI** never covers content at rest (QuickContact appears after the hero). Dialogs = Radix Dialog (focus trap, Esc, focus return).
- **Not adopted, on purpose**: Liquid Glass / translucency, capsules, concentric radii, blur.

## Motion direction — cinematic, one rhythm

Single source of truth: `src/lib/motion.ts` — `EASE = [0.22, 1, 0.36, 1]`, `DURATION = { fast: 0.3, base: 0.6, slow: 1.1 }`. Import these; never invent new curves.

- Page-to-page: React `<ViewTransition name=…>` (stable in React 19.3, no Next config). /work card poster ↔ case-study hero share `work-poster-${slug}`.
- Micro-interactions 150–300ms; section reveals ~0.6–0.9s; page transitions ≤1.1s.
- Stagger children 50–80ms.
- **Everything must respect `prefers-reduced-motion`** (use `useReducedMotion()` from motion/react, or the media query in vanilla/GSAP code) and degrade on `(pointer: coarse)`.
- Only animate `transform`/`opacity`. Never width/height/top/left.

### Existing primitives — reuse before writing new ones

| Component | Use for |
|---|---|
| `shared/Reveal.tsx` | Standard fade-up on scroll (wrap anything) |
| `shared/MaskReveal.tsx` | Line-mask heading reveals (used by `SectionHeader`) |
| `shared/SectionHeader.tsx` | Every section header (eyebrow + masked title + subtitle) |
| `shared/Magnetic.tsx` | Cursor-magnetic CTAs |
| `shared/Marquee.tsx` | Infinite horizontal scroll strips |
| `shared/SmoothScroll.tsx` | Lenis + GSAP ScrollTrigger (mounted once in layout — don't remount) |
| `home/NetworkField.tsx` | Cursor-reactive node-network canvas |
| `shared/LoadingScreen.tsx` | First-visit preloader — gated pre-paint by `html.nv-first-visit` (inline script in layout), ~1.1s, skippable |
| `shared/Stamp.tsx` | The one rubber-stamp moment (hero ticket, contact "RECEIVED") |
| `home/LayerAssembly.tsx` | Pinned scrub: six tool plates assemble into THE LAYER, stamp lands |
| `home/PullQuote.tsx` | Single large testimonial (replaces the quote marquee) |
| `layout/MotionToggle.tsx` | Footer "Pause motion" switch (WCAG 2.2.2) |
| CSS `.text-stroke-fg` / `.text-stroke-brand` | Outlined display text |
| `home/OpsLedger.tsx` | Pinned day-sheet ledger (the layer takes over each row on scroll) |
| `home/AgentRoster.tsx` | Commissioning-record card with live-ticking counters + stamp |
| Hero `JobTicket` | Cycling work-order chip stamped "AUTOMATED" |
| `home/Switchboard.tsx` | Telex-style live ops feed (timestamped lines print themselves; `useLiveMotion`) |
| `home/WiringDiagram.tsx` | Blueprint schematic — tools wired into THE LAYER |
| `shared/SchematicBeam.tsx` | Ref-measured 90° elbow connector with travelling red pulse |
| `shared/Perforation.tsx` + CSS `.perforation` | Tear-off divider strip between sections |
| `process/BuildSheet.tsx` | Manufacturing traveler — red thread draws down through punched eyelets per phase |
| `services/SystemIndex.tsx` | Parts-catalogue ToC (SYS-01… numbered anchor index) |
| About "personnel file" card | Stamped record card pattern for people (see about/page.tsx) |

### Hard-won gotchas

1. **Mask reveals**: the IntersectionObserver must watch the *outer unclipped wrapper*, never the translated inner element — a fully clipped element never intersects, so it never reveals. `MaskReveal` already does this plus a 2s on-screen fail-safe. Follow the same pattern for any new clip animation.
2. **GSAP pinning** (`ProcessSnapshot.tsx` is the reference): use `gsap.matchMedia()` gated to `(min-width: 768px) and (prefers-reduced-motion: no-preference)`, always render a stacked fallback for mobile/reduced-motion, and kill triggers on cleanup.
3. **Pins MUST use `useIsomorphicLayoutEffect` (from `src/lib/motion.ts`) and `kill(true)`.** GSAP pin reparents the section into a `pin-spacer` div. `useEffect` cleanups run AFTER React removes DOM on unmount → client-side navigation crashes with `removeChild NotFoundError` ("Application error" page; refresh works). Layout-effect cleanup + `scrollTrigger.kill(true)` reverts the pin-spacer before React unmounts. Never create a pin inside plain `useEffect`.
4. **Never write `document.body.style` on mount** (e.g. scroll locks) — setting it while hydration is in flight trips React's body-attribute hydration mismatch. Only touch body style inside the open-state branch, and clean up with `removeProperty`.
5. Lenis is desktop-only (skipped for coarse pointers and reduced motion). ScrollTrigger stays in sync via `lenis.on("scroll", ScrollTrigger.update)` — already wired.
6. Canvas effects: cap `devicePixelRatio` at 2, halve particle counts on mobile, pause via IntersectionObserver when offscreen.

## Component registries (shadcn MCP)

`components.json` has registries configured: `@shadcn`, `@magicui`, `@aceternity`, `@originui`, `@kokonutui`. Workflow:

1. Search: `mcp__shadcn__search_items_in_registries` (e.g. query "marquee" in `["@magicui"]`).
2. View source: `mcp__shadcn__view_items_in_registries`, then **restyle to this design system before shipping** — strip rounded corners, gradients, and off-palette colors; swap easings to `EASE`.
3. Add: `npx shadcn@latest add @magicui/<name>` etc.

The 21st.dev Magic MCP (`magic` in `.mcp.json`) generates components from prompts — requires `TWENTYFIRST_API_KEY` in the environment (get one at 21st.dev/magic/console).

## Verify before done

Use the preview server (`.claude/launch.json` → `nuvero-dev`, port 3000). Check: heading reveals fire below the fold, pinned sections scrub, `npx tsc --noEmit` passes, no console errors, mobile viewport (375px) and desktop (1280px) both render, and test once with reduced motion. The loader only shows on first visit per session — clear `sessionStorage.nuvero_loaded` to replay it.
