# nuvero.space — Apple-HIG Upgrade Plan (Oct 2026)

**Goal:** keep the flat-brutalist print-shop identity (cream / red / ink, zero radius, hard shadows, DM Sans + Space Mono) and hold it to Apple's design discipline — hierarchy, clarity, craft, accessible motion — so the site feels *engineered*, not decorated.

**Research inputs** (four parallel research passes, 2026-10-01):
1. Apple `developer.apple.com/design` + HIG — ~50 pages via Apple's JSON endpoints + 7 WWDC design-session transcripts (incl. WWDC26 "Principles of great design", WWDC25 "Meet Liquid Glass" / "Get to know the new design system", WWDC18 "Designing fluid interfaces").
2. The 6 Instagram references (2 carousels read slide-by-slide, 4 reels frame-grabbed + transcribed).
3. A survey of ~45 UI / motion libraries with GitHub + npm + bundle-size signals.
4. A code + live-site audit of this repo and www.nuvero.space (desktop 1024 + mobile 375).

---

## 0. The thesis in one paragraph

Apple's 2026 principles (re-published June 2026) are **Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity, Craft, Delight** — and the two that bite hardest on this site are *Simplicity* ("the most important item on the screen is always the most obvious one"; "simplicity isn't minimalism") and *Craft* ("jittery scrolling, a button that makes you wait" = cheap). Nuvero's visual identity is already on the right side of the "AI slop" line that 4 of the 6 Instagram posts are about — it's distinctive and systematic. What's holding it back is not the look, it's **discipline**: a header that overflows at 1024px, a preloader that flashes on every load, a hero that is invisible until JS hydrates, a 21-section / 38-screen home page, contrast failures, un-pausable motion, and motion tokens that are ignored in half the components. Fix the discipline, cut the page to its argument, then add **two or three signature moments** instead of twenty small ones.

**What we will NOT take from Apple:** Liquid Glass (lensing/translucency is native-GPU, looks like blur on the web, and directly contradicts zero-radius flat brutalism — and imitating Apple's identity breaks our "inspiration, not imitation" rule), concentric radii/capsules, SF-style positive display tracking, and branded launch screens.

---

## 1. Apple rules → Nuvero rules (the translation table)

| Apple principle / rule | Nuvero rule (new or tightened) |
|---|---|
| **Simplicity** — hierarchy via order, spacing, contrast; one most-obvious item | One dominant element per viewport; one primary CTA per section; secondary actions differ by *style* (outline vs filled), never size. |
| **Purpose** — "deciding what not to include" | Home page drops from 21 sections to ~11 (see §4). Every section must answer a question a buyer actually asks. |
| **Agency** — never block, everything escapable | Preloader never blocks content; every auto-moving thing has a pause; pins never trap the user (fit in viewport, skippable). |
| **Familiarity** — same look = same behaviour | One eyebrow style, one button system, one card system, one link style. Red = "action / emphasis" only — never decorative text too. |
| **Flexibility** — accessibility from the start, change *amount shown* not functionality | 200% zoom without horizontal scroll; nav collapses on width not device; reduced-motion = fades, not "off". |
| **Craft** — no jank, optical alignment | Single motion token source actually enforced; no layout-property animations; canvas budgets; icon stroke matched to text weight. |
| **Delight** — "don't mistake delight for decoration" | 2–3 signature moments (assembly scroll, /work morph, stamp) instead of ambient motion everywhere. |
| Hit targets 44×44pt; ~12pt around bordered, ~24pt around bare controls | `min-h-11 min-w-11` on every interactive element; audit footer/nav/filters/chips. |
| Contrast ≥4.5:1 body, 3:1 large/bold; **aim 7:1 for small custom-colour text** | `--color-accent` banned as text/icon on cream; `fg-subtle` banned below 12px; cream-on-ink ≥ 70% opacity. |
| Min body 16–17px, never below 11px; no thin weights small | Kill `text-[8px] / [9px] / [9.5px]`; mono labels floor at 11px; body 17px. |
| Negative tracking on large display (NY table: ≈ −16/1000em at 70px+) | Keep −0.03em on H1 (fine for DM Sans); formalise per-step tracking in the type scale. |
| Motion: purposeful, interruptible, never sole info channel, no motion on frequent interactions, no ~0.2Hz oscillation | Marquees slower than 5s loop *or* static; no hover animations on nav links beyond colour/underline; everything interruptible. |
| Springs start critically damped; overshoot only when a gesture has momentum | Add `SPRING` tokens (damping 1.0 default, 0.8 for drag/fling) next to `EASE`. |
| Reduce Motion → replace x/y/z with fades, drop zoom/parallax/blur | Global `<MotionConfig reducedMotion="user">` + a fade-only variant of `Reveal` / `MaskReveal`. |
| Loading: "finishes before people become aware"; launch screen "don't advertise" | Preloader becomes first-visit-only, CSS-gated before paint, ≤ 1.2s, skippable — or removed (decision D1). |
| Writing: verb-first buttons, no "click here", one capitalisation per element, errors say how to fix | CTA lexicon (§3.6); sentence case for buttons, UPPERCASE mono for eyebrows only. |
| Nav is for navigation; ≤3 toolbar groups; don't mix text + icon buttons | Header = logo · 5 links · 1 primary CTA. ⌘K moves to a keyboard hint; Booklet link moves to footer/menu. |
| Modality only when worthwhile, obvious dismissal, Esc, focus return | Mobile menu becomes a proper dialog (Base UI / Radix Dialog). |
| Scroll views: no nested same-direction scroll; show partial content at edge | Mobile carousels peek the next card; no inner scroll areas. |
| Dark mode follows system, not inversion | *Optional phase 5:* "night-shift print room" ink theme (decision D4). |
| Privacy: ask only when needed | No cookie banner needed (Vercel Analytics is cookieless) — keep it that way. |

---

## 2. Phase 0 — Fix what's broken (ship first, ~1–2 days)

These are live defects from the audit. Nothing else ships before them.

| # | Issue | Where | Fix |
|---|---|---|---|
| P0-1 | Header overflows 768–1150px (at 1024px "Book a free call" is clipped, logo wraps) | `src/components/layout/Navbar.tsx:86,119-146` | Desktop nav from `lg:` (1024) with ≤5 links; hide ⌘K + Booklet buttons below `xl`; hamburger below `lg`. |
| P0-2 | Preloader is in SSR HTML (`visible=true`) → flashes "0%" on every full load, blocks LCP, covers site forever without JS | `src/components/shared/LoadingScreen.tsx:9,17-19` | Inline `<script>` in `<head>` sets `html.is-first-visit` from `sessionStorage` + reduced-motion; loader renders only under that class; default hidden. |
| P0-3 | LCP element hidden in SSR (hero H1 at `translateY(110%)`, page H1s at `opacity:0`) | `Hero.tsx:169-307`, `Reveal.tsx:29-30`, page heroes | Above-the-fold content is visible in HTML. Hero H1 uses a CSS-only reveal that starts on first paint (or none). `Reveal` gets `priority` prop → no initial hide. |
| P0-4 | No skip link | `layout.tsx` / `ChromeShell.tsx:27` | "Skip to content" link → `#main`. |
| P0-5 | Form labels not associated; ROI sliders unnamed; ROI email placeholder-only | `ContactForm.tsx:109-207`, `RoiEstimator.tsx:102,124,146,215` | `htmlFor`/`id` pairs; `aria-labelledby` on slider thumbs; visible labels. |
| P0-6 | Auto-moving content can't be paused (WCAG 2.2.2 A) | Marquees, Switchboard, AgentRoster, LiveTicker, JobTicket, FeaturedWork | One global "Pause motion" toggle in the footer + per-strip pause on hover/focus; FeaturedWork pause becomes a `<button>`. |
| P0-7 | Icon-only link without name (×12) | `WhatWeOffer.tsx:189-194` | `aria-label`. |
| P0-8 | Broken anchors `#hospitality`, `#healthcare` | `WhatWeOffer.tsx:67,100` vs `what-we-offer/PageContent.tsx:51-150` | Align ids. |
| P0-9 | Mobile menu: no dialog semantics, no focus trap, no Esc, 40px close button, no `aria-current` | `Navbar.tsx:148-235` | Rebuild on Dialog primitive. |
| P0-10 | Input focus ring removed by `outline-none` | `ContactForm.tsx:101`, `RoiEstimator.tsx:221` | Use `focus-visible:outline-2 outline-offset-2 outline-brand` (hard, square). |
| P0-11 | Live site ≠ repo HEAD (mobile footer shows "Pricing" not in `Footer.tsx`) | prod | Confirm what's deployed before shipping anything. |
| P0-12 | "Plan sent to {email}" but nothing is sent; failures swallowed | `RoiEstimator.tsx:71-84,241-243` | Either actually send (Resend route exists) or change copy to "We'll email your plan" + real error state. Apple *Responsibility*. |

---

## 3. Phase 1 — Foundations: tokens that enforce the rules (~3–4 days)

### 3.1 Type scale (new tokens in `globals.css @theme`)
Replace ad-hoc sizes with a named scale (fluid via `clamp`), all DM Sans unless noted:

| Token | Size (mobile → desktop) | Line-height | Tracking | Use |
|---|---|---|---|---|
| `display` | 44 → 96px | 1.0 | −0.035em | Home H1 only |
| `title-1` | 36 → 64px | 1.05 | −0.03em | Page H1 |
| `title-2` | 28 → 44px | 1.1 | −0.025em | Section H2 (SectionHeader) |
| `title-3` | 20 → 24px | 1.25 | −0.01em | Card titles |
| `body-lg` | 18 → 20px | 1.5 | 0 | Lead paragraphs |
| `body` | 17px | 1.6 | 0 | Default |
| `callout` | 15px | 1.5 | 0 | Secondary copy |
| `label` (mono) | 11 → 12px | 1.3 | 0.16em, uppercase | Eyebrows, metadata |
| `numeral` (mono) | per use | 1 | `tabular-nums` | Stats, ledger |

Floor: nothing below 11px. Load DM Sans 400/500/600/700 only (currently all weights).

### 3.2 Spacing & layout
- 4px base; section rhythm tokens: `--space-section: clamp(72px, 10vw, 128px)`; one `.section` utility replaces the mix of `py-16/20/24/32`.
- Container stays `max-w-7xl`; add `container-type: inline-size` on cards so they adapt by container, not device (Apple size-class idea).
- Header height token shared by `ChromeShell` padding and `Navbar` (currently 80 vs 72px mismatch).
- `env(safe-area-inset-*)` + `viewport-fit=cover` for the floating QuickContact button.

### 3.3 Colour roles (semantic, like Apple's label hierarchy)
- `--text-primary` (ink), `--text-secondary` (fg-muted), `--text-tertiary` (fg-subtle, **≥12px only, never on surface**).
- `--accent` (steel blue) → **decorative/illustration only**; add `--accent-ink` (#3F6E8C or darker, ≥4.5:1) if blue text is needed.
- `--on-ink-secondary` = cream @ 75% (≥5.3:1), replacing /40–/60 opacities.
- `--success` darkened to pass 4.5:1 on elev, but it's a status colour, not a card accent.
- Red means **action / emphasis / stamp**. Audit decorative red text.
- Shadow tokens: `--shadow-hard-sm: 3px 3px 0`, `--shadow-hard: 5px 5px 0`, `--shadow-hard-lg: 8px 8px 0` (+ pressed state = `translate(3px,3px)` + shadow 0 — a tactile press, Apple's "every button needs a press state"). Remove the blurred `.poster` shadow.
- Add `@media (prefers-contrast: more)` → borders 2px→3px, tertiary text → secondary.

### 3.4 Motion tokens (`src/lib/motion.ts`)
Keep `EASE` + `DURATION`, add:
```ts
export const SPRING = {
  settle: { type: "spring", duration: 0.5, bounce: 0 },     // default: critically damped
  fling:  { type: "spring", duration: 0.6, bounce: 0.15 },  // only after drag/momentum
} as const;
export const STAGGER = 0.06;
```
- Wrap app in `<MotionConfig reducedMotion="user" transition={{ ease: EASE, duration: DURATION.base }}>` — fixes every motion/react animation the CSS kill-switch misses (AnimatedYour, WhatWeOffer hovers, WorkGrid layout, mobile menu).
- Reduced-motion variants: `Reveal`/`MaskReveal` → 200ms opacity fade (Apple: replace movement with fades, don't just remove).
- Lint rule / grep check in CI: no inline `ease:` arrays, no `transition-all`, no animated `width|height|top|left`.
- Replace layout-property animations: LoadingScreen bar (`width`→`scaleX`), AnimatedYour underline, RoiEstimator bar, accordion height (Motion `layout="y"` or CSS `interpolate-size: allow-keywords` + `height: auto`).

### 3.5 Interaction
- Every interactive element ≥44×44 (footer links, nav links 35px, WorkGrid filters 36px, chips 28px, tab toggles 32px).
- Press state on all buttons (translate into shadow).
- Hover effects gated behind `@media (hover: hover)`; Magnetic gated by `(pointer: fine)`.
- `aria-pressed` / proper tablist for WorkGrid filters, ServicesPreview selectors, What-we-offer toggle.

### 3.6 Writing system (Apple "Writing" + positioning rules)
- **CTA lexicon** — one primary verb everywhere: **"Book a 30-min call"**. Secondary: "See deployments", "Read the briefing". Retire "free call / Free audit · 15 min / Book a call" variants.
- Buttons: sentence case, verb-first. Eyebrows: mono UPPERCASE. Titles: sentence case.
- Errors next to field, say how to fix ("Enter an email like name@company.com"). No "oops", no "we".
- Placeholders show format, never a real person's name (`ContactForm.tsx:115`).
- Purge "service/services" wording (`ContactForm.tsx:18-19,166`, `Navbar.tsx:220`).
- Fix dash-stripped run-on sentences (`WhatWeOffer.tsx`, `WorkGrid.tsx:64`, `RoiEstimator.tsx:12`).
- Metadata honesty: "45 systems deployed" vs 15 listed (`work/page.tsx:11`) — make it true or make it derived.
- Optional guardrail: run copy through the `stop-slop` / `humanizer` skills (from the Instagram references) as a review pass.

---

## 4. Phase 2 — Simplicity: cut the home page to its argument (~3 days)

Currently **21 sections, ~29,700px (~38 screens)**. Apple *Purpose*: every feature costs attention. Target **~11 sections, ≤ 20 screens**, structured as one argument:

| # | Section (new order) | Keeps / merges | Question it answers |
|---|---|---|---|
| 1 | **Hero** | Hero (+ JobTicket) | What is Nuvero? |
| 2 | **Proof strip** | TrustStrip + StatsBar merged (logos + 3 numbers via Number Flow) | Who trusts you? |
| 3 | **The problem, quantified** | OpsLedger (pinned, fixed to fit 768px height) | Why should I care? |
| 4 | **The layer** | WiringDiagram + Switchboard merged (diagram with the live feed as its "output port") — *or* the new signature assembly scroll (§5.1) | How does it work? |
| 5 | **Agents that know your work** | AgentRoster | What do I actually get? |
| 6 | **Systems** | ServicesPreview + WhatWeOffer merged into one index | What can you build? |
| 7 | **Deployments** | FeaturedWork (+ a Testimonial pulled inline per case) | Has it worked? |
| 8 | **Process** | ProcessSnapshot (pinned) | What happens after I call? |
| 9 | **Governance & safety** | Governance + GlassBox merged | Is it safe? |
| 10 | **ROI estimator** | RoiEstimator | Is it worth it? |
| 11 | **FAQ → CTA** | FaqStrip + CtaBanner | Anything else? → act |

Moved off home: ComparisonTable → /what-we-offer; AuditDeliverables → /process; FromTheWorkshop → /briefings teaser in footer; Testimonials wall → /reviews.
Delete dead code: `ScrollWordHighlight.tsx`, `AvailabilityBanner.tsx`, `GradientOrb.tsx`, `NoiseOverlay.tsx`, `FeaturedWork` `gradient` fields.

Other pages:
- **/work** — 14 filter chips for 15 cards → 4–5 sector groups in a horizontal scroll-snap row; first card above the fold on mobile.
- **/what-we-offer** — server component; only the toggle is client.
- **/industries/[sector]/[service]** + **/briefings/[slug]** — adopt `shadcn typeset` prose rhythm, reading-progress bar (CSS scroll-driven), numbered H2s ("01 · …") per the Instagram carousel pattern.
- Consistent **page-hero template** (eyebrow · title-1 · lead · one CTA) across all inner pages; right now h1 sizes vary.

---

## 5. Phase 3 — Craft & Delight: 3 signature moments (~1–1.5 weeks)

Apple: delight is the sum of getting the rest right, plus a few *defining moments*. Replace ambient motion with these three:

### 5.1 "The layer assembles" — scroll-scrubbed image sequence (from the @cindiezhu reference)
The Apple AirPods/MacBook technique, reinterpreted in print-shop language: an **exploded isometric blueprint of THE LAYER** (the client's tools — CRM, inbox, sheets, ERP — as flat ink plates) that assembles into one stacked unit as you scroll, with the red "AUTOMATED" stamp landing on the last frame.
- Frames: generate start (assembled) + end (exploded, one axis) with the same camera/background in Flow or similar, interpolate, export ~90 frames @ 30fps → AVIF/WebP, ~1440w desktop / 720w mobile.
- Implementation: `<canvas>` + GSAP ScrollTrigger `scrub`, preload first 10 frames eagerly, rest on idle; DPR cap 2; pin fits viewport.
- Reduced motion / no-JS: a static 3-panel "before · wiring · after" plate.
- Alternative if generated frames don't look on-brand: pure SVG plates animated with transform only (lighter, crisper, fully on-palette). **Decision D2.**

### 5.2 /work poster → case-study morph (View Transitions)
Upgrade to **Next 16.3 + React 19.3** (`<ViewTransition>` is stable as of 19.3). Poster image + title share a `name` and morph into the case-study hero; /industries → sector pages get a directional slide; WorkGrid filtering crossfades. `::view-transition-*` durations use `EASE_CSS`; reduced-motion → crossfade only. Zero new deps.

### 5.3 The stamp — one tactile confirmation moment
Contact-form success = a job-ticket that gets **stamped "RECEIVED · #NV-0421"** (scale 1.15→1, spring settle, rotation −4°, one-time). Same stamp component reused for the loader's end-state (if kept) and the hero JobTicket, so the brand's "rubber-stamp moment" means one thing everywhere (Familiarity).

### 5.4 Supporting craft upgrades
- **Number Flow** replaces `CountUp` (hero stats, about stats, ROI results) — accessible, tabular, SSR-renders the real number (fixes crawlers seeing "0").
- **GSAP SplitText** (free since the Webflow license change, all plugins) for H1/H2 line masks — replaces hand-rolled split, handles `aria-label` itself. `MaskReveal` stays as the wrapper API.
- **DotGridBackground**: cap DPR, throttle to rAF only while pointer moves, precompute colour strings, disable under reduced motion — or replace with a static CSS `radial-gradient` dot grid and keep the canvas only in the hero (**cheaper, arguably more "print"**).
- Switchboard / AgentRoster / SchematicBeam: pause via IntersectionObserver when offscreen.
- OpsLedger: SSR the *initial* state (not the finished state) to kill the flash.
- Optional: one **Paper Shaders** halftone/dither texture (lazy, static fallback) for the footer or CTA band — print-like, not glossy.

---

## 6. Phase 4 — Library plan

**Adopt**
| Library | For | Cost |
|---|---|---|
| Next 16.3 + React 19.3 | `<ViewTransition>` (§5.2) | upgrade |
| Motion 13.x | `MotionConfig`, `layout="y"`, `AnimateView`, hw-accelerated `useScroll`, `arc()` for SchematicBeam pulse | upgrade (only breaking change: optional emotion dep) |
| GSAP SplitText (+ Flip optional) | headline masks; /work reorder | already have gsap |
| @number-flow/react | stats | ~6kB |
| React Aria (via `shadcn --base aria`) | ContactForm / QuickContact / ROI inputs — best-in-class a11y | per-component |
| Base UI (shadcn default base) | new primitives only: mobile-nav Dialog, Popover (glossary in briefings), Meter | per-component |
| Motion Primitives (copy-paste) | TextScramble on eyebrows/CTA hover, TransitionPanel for process | 0 deps |
| shadcn `cn`, `typeset` | drop clsx+tailwind-merge; prose rhythm on briefings/legal | smaller |
| CSS scroll-driven animations | simple reveals + reading progress on 30 sector pages / 12 briefings | 0 JS |
| Tailwind 4.3 utilities | `text-shadow` (zero-blur hard offset on display type), `mask-*` (perforation), `font-features-*` (tabular nums) | — |
| Lucide 1.x | icons, `strokeWidth` matched to text weight | upgrade |
| Embla | mobile swipe rail for /work + reviews (if needed) | ~7kB |

**Mine for patterns, restyle to tokens:** Retro UI (neo-brutalist kit — closest match to our system), Magic UI (TextAnimate, grid patterns), React Bits (DecryptedText only), coss.com/ui ex-Origin UI (form input variants), Smooth UI / Watermelon UI / Unlumen UI (stats & hero blocks), designspells.com + godly.design (micro-interaction and copywriting references — especially AI-infra peers like CodeRabbit).

**Avoid:** liquid-glass-react / any glass kit; Aceternity glow set (spotlight, aurora, lamp, meteors); Spline / Unicorn Studio / R3F on marketing pages; GSAP ScrollSmoother (conflicts with Lenis); HeroUI / Mantine / Chakra / Park UI; Theatre.js; Vaul; lottie-web; Phosphor alongside Lucide.

**Housekeeping:** `@originui` registry URL now redirects to coss.com/ui — update `components.json`; the 21st.dev `magic` MCP key needs refreshing.

---

## 7. Phase 5 — Performance & guardrails (ongoing)

- CommandPalette: lazy-load on first ⌘K, read titles from a tiny generated index instead of importing `briefings.ts` (59kB) + `caseStudies.ts` (36kB); source deployments from the feed.
- De-client `FromTheWorkshop`, `Governance`, `AuditDeliverables`, `SystemIndex`, `/what-we-offer`.
- Internal `<a>` → `<Link>` (`Hero.tsx:220,238`, `RoiEstimator.tsx:283`, `CtaBanner.tsx:34`).
- `public/bhumit.png` 1.1MB → use the webp; correct `sizes` on /work cards.
- **Budgets (CI):** LCP < 2.0s mobile, CLS < 0.05, INP < 150ms, home JS < 180kB gz; Lighthouse a11y = 100; `@axe-core/playwright` on every route at 375/1280 + `prefers-reduced-motion` run.
- **Design-review guardrails:** add the "taste"/"impeccable" style checks (from the Instagram references) or just extend `frontend-design` SKILL.md with the §1 table so every future change is checked against it.
- Optional **dark "night-shift" theme** (ink bg, cream text, red stays red) following `prefers-color-scheme` — Apple: follow system, not an app toggle. **Decision D4.**

---

## 8. Sequencing & effort

| Phase | Scope | Est. | Ships as |
|---|---|---|---|
| 0 | Live defects (P0-1…12) | 1–2 days | 1 commit per fix group |
| 1 | Tokens: type, spacing, colour roles, motion, interaction, writing | 3–4 days | tokens first, then sweep components |
| 2 | Home 21→11 sections, page-hero template, /work filters | ~3 days | behind a preview deploy for review |
| 3 | Assembly scroll, View Transitions, stamp, Number Flow, SplitText | 1–1.5 weeks | the upgrade to Next 16/React 19.3 lands first |
| 4 | Library upgrades (interleaved with 1–3) | — | — |
| 5 | Perf + CI budgets + optional dark theme | ongoing | — |

Each phase: `npx tsc --noEmit`, preview at 375 / 768 / 1280, reduced-motion pass, keyboard-only pass.

## 9. Decisions needed from you

- **D1 — Preloader:** Apple says launch screens should "not advertise". Options: (a) remove it; (b) keep first-visit-only, ≤1.2s, skippable, CSS-gated *(recommended)*.
- **D2 — Assembly scroll:** AI-generated frame sequence (photographic, heavier, Apple-like) vs SVG plates (flat, on-palette, light) *(recommend SVG plates; try frames as an experiment)*.
- **D3 — Home cut:** approve the 11-section order in §4 (and what moves off home).
- **D4 — Dark theme:** in scope or not.
- **D5 — Framework upgrade:** OK to move to Next 16.3 / React 19.3 / Motion 13 for View Transitions?

---

### Appendix — sources
- Apple: developer.apple.com/design/human-interface-guidelines/{design-principles, typography, layout, color, dark-mode, motion, materials, accessibility, writing, inclusion, buttons, menus, toolbars, tab-bars, sheets, popovers, text-fields, scroll-views, loading, launching, onboarding, feedback, progress-indicators, privacy, branding}; developer.apple.com/design/whats-new; WWDC26-250, WWDC25-219/356, WWDC18-803.
- Instagram: @cindiezhu (scroll image-sequence), @junaid_jamel (kexsio, app-mockup, designspells), @divyannshisharma (UI/UX Pro Max, Impeccable, Taste Skill, Humanizer, Stop Slop…), @kevin.snippet (Unlumen UI, Magic UI, Smooth UI, Retro UI), @thecuttingedge.school (godly.design), @buildwaleesh (Watermelon UI, Motion Primitives, Haikei).
- Libraries: shadcn changelog (Base UI default Jul-2026, React Aria base, typeset, cn), React 19.3 changelog, Next.js view-transitions guide, Motion changelog, gsap.com/standard-license, Tailwind changelog, GitHub/npm/bundlephobia stats.

---

## 10. Implementation status (2026-10-01, local only — nothing pushed)

Decisions taken with the recommended defaults: **D1** preloader kept, first-visit only, pre-paint gated, ~1.1s, skippable · **D2** SVG/HTML plates (not AI frames) · **D3** home cut applied · **D4** dark theme *not* built (still your call) · **D5** upgraded to Next 16.3.8 / React 19.3 / Motion 13.4 / Lucide 1.49.

**Shipped (3 local commits on master + uncommitted polish):**
- Phase 0: all 12 defects — header fits at 1024 (5 links + 1 CTA from `lg`), preloader can't flash, hero/page H1s visible from first paint (CSS `priority` reveals), skip link, labelled form fields + named sliders, footer "Pause motion" switch wired to every JS/CSS loop, icon-link names, fixed anchors, mobile menu on Radix Dialog, visible input focus, honest ROI copy.
- Phase 1: type/colour/shadow/spacing tokens in `globals.css`, `SPRING`/`STAGGER`/`PIN_QUERY` in `motion.ts`, `MotionConfig reducedMotion="user"`, single `.eyebrow` (87 variants unified), no text < 11px, `accent-ink` for blue text, 44px targets, `.press` state, CTA lexicon in `site.cta`, layout-property animations removed (bar/underline/accordion/loader).
- Phase 2: home 21 → 14 sections (Hero, Stats, OpsLedger, **LayerAssembly**, Switchboard, AgentRoster, WhatWeOffer, FeaturedWork rail, PullQuote, Process, GlassBox, ROI, FAQ, CTA); ComparisonTable + WiringDiagram → /what-we-offer (now a server page with a proper tablist), Governance + AuditDeliverables → /process; retired ServicesPreview, FromTheWorkshop, TrustStrip, the testimonial marquee, ScrollProgressBar (→ CSS scroll-timeline bar), and 4 dead components.
- Phase 3: LayerAssembly signature scrub, `<ViewTransition>` /work poster → case-study hero, shared `Stamp` (hero ticket + contact "RECEIVED" job ticket), Number Flow for stats/ROI/CountUp (SSR shows real numbers), FeaturedWork auto-marquee → user-driven scroll-snap rail, /work filters 14 → 7 sector groups, briefing prose rhythm + numbered H2s.
- Phase 5 perf: DotGrid redraws only near the cursor (offscreen rest layer, DPR ≤ 2, static on touch/reduced/paused), NetworkField no longer re-seeds on mobile address-bar resize, command palette lazy-loads with a server-built title index (drops ~95 kB of content from every page), pins gated to ≥1024×700.

**Deliberately not done:** React Aria (native elements with correct semantics covered the a11y gaps with zero deps), Embla (CSS scroll-snap instead), GSAP SplitText (CSS mask reveal already does the job), Paper Shaders, dark theme, shadcn `cn`/`typeset`.

**Needs your eyes:** the ROI estimator no longer gates numbers behind an email (HIG *Responsibility*) — the email is now an optional "have an engineer review this" step; confirm you're OK with the lead-capture change. "45 systems in production" in the hero is unverified by me. The production site still differs from repo HEAD (mobile "Pricing" footer link).
