# Nuvero AI site (folder name "nexora-ai" is historical)

Next.js 15 App Router + React 19 + Tailwind v4 + shadcn/ui + motion (Framer Motion) + GSAP ScrollTrigger + Lenis.

## Positioning — applies to ALL copy
Nuvero sells **AI infrastructure** (the intelligence layer a business runs on), never a product or service. Say "systems / deployments / infrastructure / agents that know your work" — never "services", "tools", or "consultancy".

## Design & motion
Before touching any UI, follow `.claude/skills/frontend-design/SKILL.md` (invoke the `frontend-design` skill). Key rules: flat brutalist (zero border radius, hard offset shadows, cream/red/ink palette via CSS vars only), one shared easing from `src/lib/motion.ts`, everything respects `prefers-reduced-motion`, animate only transform/opacity.

## Structure
- Copy/content lives in `src/content/*.ts` (site.ts = name/nav/contact; services, faqs, process, etc.)
- Reusable animation primitives in `src/components/shared/` — reuse `Reveal`, `MaskReveal`, `SectionHeader`, `Magnetic`, `Marquee` before writing new ones
- Component registries configured in `components.json` (@shadcn, @magicui, @aceternity, @originui, @kokonutui) — search/add via the shadcn MCP, then restyle to the design system

## Commands
- Dev: `npm run dev` (or preview server `nuvero-dev` from `.claude/launch.json`, port 3000)
- Typecheck: `npx tsc --noEmit` — run before finishing any change
- The first-visit preloader is skipped when `sessionStorage.nuvero_loaded` is set

## MCPs (project-scoped in `.mcp.json`)
- `shadcn` — registry search/view/add
- `magic` (21st.dev) — component generation; needs `TWENTYFIRST_API_KEY` env var
