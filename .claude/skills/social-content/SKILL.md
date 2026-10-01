---
name: social-content
description: Build and render Nuvero's social media visuals — Instagram carousels and single posts, LinkedIn image posts, launch cards, "what is X" explainers — as on-brand PNGs at 1080x1350. Use whenever a request involves making a post, a carousel, slides for social, a product announcement graphic, or rendering slide copy to images. Owns the layout rules (huge type, one icon per point, hard word caps), the Lucide icon sprite, and the headless-Chrome render pipeline.
---

# Nuvero — Social Content System

Feed graphics are read at **160px wide, in under a second, at arm's length.** That
single fact drives every rule below. When a rule and an instinct disagree, the rule wins.

Copy voice, hooks, captions and fact-gathering live in the `content-creator` agent
(`.claude/agents/content-creator.md`). This file owns what the slide looks like.

## The four laws

1. **Big or nothing.** Headlines 106–150px. Supporting lines 40–46px. **Nothing on a
   slide is ever below 26px** — that is the floor for eyebrows and page numbers, not
   a target. If text must shrink to fit, delete text instead.
2. **Every point carries an icon.** Minimum 2 icons per slide, one per row/card,
   drawn at 68px+ (tiles 124px). Lucide only, from `assets/icons.svg`. Never emoji.
3. **Under 25 words per slide, under 6 words per headline.** A slide makes one point.
   A second point is a second slide. Count the words before you render.
4. **Air is the design.** 72px outer margin, 28px+ between blocks, max **4 rows or
   4 cards** per slide. A cramped slide is a failed slide.

## Make it worth looking at

Flat colour and left-aligned text is not a design. Each slide needs one deliberate
visual device — and the *deck* needs contrast slide-to-slide, so thumbs stop mid-swipe:

- **Alternate backgrounds.** Never four cream slides. Cream → ink → cream → brand is
  a rhythm; four of anything is wallpaper. Use `.slide--ink` / `.slide--brand`.
- **One hero move per slide:** an oversized outlined word (`.outline`), a rubber
  stamp at −3° (`.stamp`), a number set at 128px (`.stat`), a full-bleed icon tile
  row, or a red hard-offset shadow doing the heavy lifting.
- **Hard offset shadows, zero radius, 3px borders.** Never blur, gradient, or round
  a corner. The website's brutalism is the brand — a soft slide reads as someone
  else's post.
- **Swipe affordance** (`.swipe`) on every slide but the last, so the carousel
  advertises that it continues.
- **Directional icons carry the eye:** `arrow-right`, `corner-down-right`,
  `arrow-down` between steps, so a mechanism slide reads as a flow, not a list.

## Palette and type — fixed

Cream `#FDF0D5` · brand red `#C1121F` · deep ink `#003049` · steel `#669BBC`
(sparingly, never as a second accent). DM Sans for everything; Space Mono for
eyebrows, page numbers, stamps, labels. No other colours, no other typefaces.
All of this is already in `assets/deck.css` — use the classes, don't re-declare values.

## Carousel shape (4 slides is the default)

| # | Job | Layout | Background |
|---|---|---|---|
| 1 | **Hook** — the problem/claim, no product name | `.h1` + one icon tile + stamp | cream |
| 2 | **What it is** — one repeatable line | `.h2` + `.lead` + 2 icon cards | ink |
| 3 | **How it works** — the screenshot slide | 3–4 `.row` steps, one icon each | cream |
| 4 | **Payoff + CTA** — one ask only | stat or cards + `.cta` + `.foot` | brand |

Slide 1 must stand alone: it is the only one most people see.

## Build it

```bash
# 1. scaffold — copy the reference deck, which has all block patterns wired
mkdir -p content/<yyyy-mm-dd>-<slug>
cp .claude/skills/social-content/assets/template.html content/<slug>/slide-1.html
# …edit into slide-1..4.html

# 2. add an icon the sprite lacks (checks lucide-react in node_modules)
node .claude/skills/social-content/scripts/build-icons.mjs <icon-name>

# 3. render every slide-*.html → out/*.png at 1080x1350
bash .claude/skills/social-content/scripts/render.sh content/<slug>
```

Each slide HTML links the shared stylesheet and inlines the sprite:

```html
<link rel="stylesheet" href="../../.claude/skills/social-content/assets/deck.css">
<!-- paste assets/icons.svg contents here, or keep it in the template's <body> -->
<svg class="ico"><use href="#i-zap"/></svg>
```

Fonts come from the Google Fonts CDN, so **rendering needs network access**;
`render.sh` already passes `--virtual-time-budget=8000` so the faces land before capture.

Other canvases: `render.sh <dir> 1080 1080` (square), `1080 1920` (story). The CSS
`.slide` box is portrait — override `height` in the slide file for other ratios.

## Verify before handing over — mandatory

Read every rendered PNG back and check:

- [ ] Fonts are DM Sans / Space Mono, **not** a fallback sans (headline letterforms
      look wrong → the font request failed; re-render).
- [ ] Nothing is clipped at the bottom edge or overflows the 72px margin.
- [ ] Readable at thumbnail size — squint: headline and icons still parse.
- [ ] Icons rendered (a missing sprite id shows as empty space, not an error).
- [ ] Word counts inside the caps; word-break, no orphan single word on its own line.
- [ ] Backgrounds alternate; no two adjacent slides look the same.
- [ ] Exactly one CTA across the whole deck.

## Ship

Deliver the PNG paths, the slide copy as plain text, and the caption + hashtags.
**Rendering is not posting.** Never upload, publish, or commit content — hand the
files to the user and let them post.
