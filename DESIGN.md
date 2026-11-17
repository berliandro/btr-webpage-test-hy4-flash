---
name: Bigetron by Vitality — Fan Hub
description: A red garment-dyed lookbook world for an unofficial MPL Indonesia team hub.
colors:
  team-red: "#B21018"
  team-red-deep: "#7E0A11"
  team-red-bright: "#D3222C"
  ink: "#171412"
  cream: "#F3EDE2"
  paper: "#FBF7EE"
  brass: "#D8A24A"
  brass-light: "#F7E6C4"
  win: "#1C7A4A"
  muted: "#6E655B"
typography:
  display:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(52px, 10vw, 124px)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(34px, 5.5vw, 68px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(22px, 2.6vw, 32px)"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "inherit"
    rounded: "{rounded.none}"
    padding: "14px 22px"
  button-brass:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
  selector-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "168px 24px 46px"
  product-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "9px 15px"
---

# Design System: Bigetron by Vitality — Fan Hub

## Overview

**Creative North Star: "The Drop Lookbook"**

This is a fan-built team hub dressed as a seasonal streetwear lookbook. The team's red is not an accent on a neutral page: it is a garment-dyed ground that owns whole regions, with ink black, warm paper and one brass tone supporting it. The roster reads as a lineup, player details live on hangtags, and sections are joined by stitched rules rather than generic dividers. The result should feel like opening a collection, not scrolling a sports template.

**The roster home (`index.html`) is the reference implementation.** Its champions hero, facts rail, halftone field, off-grid selector rack, record table, history split and shop teaser are the most resolved expressions of this world. The other six routes — shop, matches, titles, media, community and the 404 — share the shell, tokens, reusable kit and baseline grid, each with a photographic masthead and a page-specific signature. When a decision is ambiguous, copy the home page before inventing a new treatment.

The site is deliberately unofficial. Every page states that it is fan-made, photography is credited as editorial reference, and the shop keeps official and fan-made merchandise apart behind a stitched line. Imagery is real team photography and transparent player cutouts from the club's own portrait set; no likeness is fabricated. Hierarchy comes from the contrast between a compressed display face and a workhorse grotesk, not from decoration.

**Key Characteristics:**
- Red as ground, not trim; cream paper as the quiet counter-surface.
- Hangtags, woven labels and stitched dividers as the component vocabulary.
- Square corners throughout; no rounded UI chrome.
- Three quiet loops: the champions photograph breathes, the facts rail slides, and soft blobs swell a fine halftone field; all pause offscreen and reduce away. Everything else is still except immediate hover feedback.
- Honest, plainspoken copy that never implies team endorsement.
- Tab stops are actions: the selector rack reveals one player at a time, and focus is never visually removed.
- The primary navigation has four top-level entries, with the remaining pages grouped under "More" on small screens.

**The Home-First Rule.** The roster home is the reference surface. Copy what `index.html` does before inventing a new treatment, and treat the other pages as inheritors.

**The Real Action Rule.** Nothing is focusable without an action. The selector cards are buttons that reveal one player's detail; `:focus-visible` always keeps a brass outline, including under reduced motion.

*Tooling note:* three detector rules — `cramped-padding`, `marquee` and `cream-palette` — are suppressed in `.impeccable/config.json` because they flag pinned choices, not defects: full-bleed bands inset text via `.wrap`/`--pad`, the facts rail is a requested loop, and cream is a named token against a red ground. Do not re-enable them without reading that config.

## Colors

The palette is a garment-dyed red with paper and ink, plus one metallic accent used sparingly for emphasis and active states.

### Primary
- **Team Red** (#B21018): The dominant ground. Owns the hero, mastheads and closing sections. Never used as a small accent on a white field.
- **Deep Red** (#7E0A11): Image wash, darker panels behind photography, and the bench plate on the roster.
- **Bright Red** (#D3222C): Reserved for small signals and hover shifts.

### Secondary
- **Brass** (#D8A24A): The single metallic accent — hangtag type, active navigation, final-call buttons, the hover bar on result rows and the selector card's hover border. Kept off body text on red; use **Light Brass** (#F7E6C4) there.
- **Win** (#1C7A4A): The only non-palette color, used for the result word in the results rail so a win reads at a glance. The result pill also carries the word and a drawn check or cross, so colour never carries the meaning alone.

### Neutral
- **Ink** (#171412): Primary text, navigation bar, selector flag strips, table headers and result pills.
- **Cream** (#F3EDE2): Text on red and deep-red surfaces; the lookbook's paper tone.
- **Paper** (#FBF7EE): Default page background and card faces.
- **Muted** (#6E655B): Secondary copy on light surfaces only, never on red.

**The Red Ground Rule.** If a region is red, its text is opaque cream. Tinted cream, muted gray and brass-on-red all fail; the red owns the region and the copy sits on top at full strength.

**The Single-Theme Rule.** The palette is exactly ten hex values, each equal to a declared token, with no dark-mode variant. A pinned single-theme brief is intentional: a scheme swap would replace the lookbook's material identity. Do not introduce one.

## Typography

**Display Font:** Anton (self-hosted, with Impact fallback)
**Body Font:** Barlow (self-hosted, with Arial fallback)
**Label/Mono Font:** none — labels are Barlow at 11px with wide tracking.

**Character:** Anton is a single-weight compressed face; every Anton-bearing role is set at weight 400 with `font-synthesis:none`, so no fake bold closes its counters. Barlow 400/700 carries body and labels. The contrast between faces, size and space — not faux weight — is the hierarchy.

### Hierarchy
- **Display** (400, clamp 52–124px, line-height .84): "OUR / CHAMPIONS" on the home page and the stacked masthead title on every other route.
- **Headline** (400, clamp 34–68px, line-height .95): Section titles such as "THE 2026 LINEUP" and "THE RECORD, IN CLOTH".
- **Title** (400, clamp 22–32px, line-height 1): Card names, group heads and timeline event headings.
- **Body** (400, 16px, line-height 1.6, max 68ch): All reading copy; names and stats use tabular numerals.
- **Label** (700, 11px, .16em, uppercase): Nav, chips, captions, table heads, stitch labels, flags and metadata.

**The Role-Token Rule.** Repeated sizes are declared once in `site.css` and referenced everywhere: `--type-display`, `--type-headline`, `--type-title`, `--type-card-title` (22px), `--type-body` (16px), `--type-data` (14px), `--type-meta` (13px), `--type-control` (12px) and `--type-label` (11px), plus `--type-index` and the plate sizes. Genuine one-offs stay inline.

**The Eleven-Pixel Floor.** Nothing functional renders below 11px. The micro-label look comes from tracking and case, not from shrinking type.

**The True Weight Rule.** Anton has one real weight. Never let the UA default 700 or `font-synthesis` invent a bold cut; reset every Anton-bearing heading to 400. Prose stays within 45–75ch and card titles share one 22px role.

## Layout

Every route uses one centred container (`--max: 1320px`) inside one fluid gutter (`--pad: clamp(20px, 5vw, 72px)`), one section padding (`--section-y: clamp(56px, 8vw, 104px)`) and a nine-step spacing scale (`--s1` 8px through `--s9` 72px).

The roster home reads: ink topbar → full-bleed champions photograph → facts rail → halftone selector rack on cream → record table on ink → "Trust the process" split → shop teaser on red → two-column footer. A section reads left-aligned display heading, a short intro at 68ch, then the content group, then an action row. Stitched dividers put the heading on the left and its count at the right edge. The selector rack is the deliberate exception: a three-column off-grid grid with a 110px top clearance, a 100px row gap and staggered offsets.

The other routes begin with a photographic masthead instead of the champions hero. Their grids are auto-fit with 215–280px minimums and a 24px gap. The results rail on Matches groups the 24 series into chronological stages, each with a stitched head carrying the stage name, count and date range. At 900px the navigation collapses behind a menu toggle, heroes stack, the rack becomes two columns with no stagger, and result rows reflow into a two-line grid.

**The One Reading Path Rule.** Content text is always left-aligned. Only the punch-hole label on a hangtag and the small flag on a selector card are centred, because they are printed marks on an object rather than page copy. Each section has one heading, one line of purpose and one primary action.

## Elevation & Depth

Depth is ambient and modest. Borders and colour carry structure; shadows only lift. At rest on dark sections, tonal layering replaces shadow. No zero-blur offset blocks remain.

- **Card lift** (`box-shadow: 0 10px 24px rgba(23,20,18,.16), 0 2px 6px rgba(23,20,18,.12)`): product cards, media tiles, figure plates and hangtags.
- **Selector rest** (`box-shadow: 2px 3px 10px rgba(23,20,18,.18), 0 1px 3px rgba(23,20,18,.12)`): roster cards at rest.
- **Selector hover** (`box-shadow: 3px 5px 16px rgba(23,20,18,.24), 0 1px 4px rgba(23,20,18,.14)`): the same cards on hover or focus, with the border turning brass.
- **Press feedback** (`transform: translate(-2px,-2px)` with a small blurred shadow): buttons on hover; the shadow is consumed by the movement.

**The Edge-First Rule.** Reach for a border before a shadow. A row of identical hairline-border-plus-wide-shadow cards is the default this world refuses.

**The Restrained Depth Rule.** No hard offset shadows. Depth comes from a 2–3px offset and a soft blur; emphasis comes from a brass border and the warm red field, not a giant coloured block behind the card.

## Shapes

Everything is square. Corners are 0px, buttons and cards are rectangles, and the few circles are the hangtag hole punch and the timeline markers. Stitched rules are 1px dashed lines, used as separators and as the official / fan-made boundary. The selector plate is a rectangular field with a real transparent cutout breaking over its top edge; the bench plate is a typographic red rectangle with a 3px ink border. Jersey illustrations on the shop page are authored SVG paths, not clip-path approximations of photography.

## Components

### Buttons
- **Shape:** Square, 1px solid border, 14px 22px padding, 12px tracked uppercase label.
- **Primary:** Ink ground, cream text; on hover it becomes brass with ink text and translates up-left into a short shadow.
- **Ghost:** Transparent with a current-color border; forced to cream inside the hero and red sections so it stays legible.
- **Brass:** Brass ground with ink text; the final action in a red section.

### Off-grid selector cards — roster home
- **Style:** 3px ink border, a small soft shadow, no radius. The red field and brass hover border carry the emphasis.
- **Composition:** One card per player — portrait and data are a single object. The cutout stands on a 152px red field and breaks 88px over the card's top edge; cards are staggered by 14px and 28px.
- **Type:** 66px Anton index on a red badge, name at clamp 28–40px, 11px role chip, 13px real name, tabular stats under a 2px rule, closed by an ink flag strip.
- **Hover / focus:** The card lifts 3px/4px with a brass border while the portrait rises 16px straight up and scales 1.05 from its feet, its drop-shadow deepening. No rotation or skew. Reduced motion holds both at rest.
- **Action:** Each card is a `role="button"` control with `aria-pressed` and a descriptive label. It reveals one detail panel; activating it again toggles the detail off.

### Player detail panel — roster home
- **Style:** Ink panel with a 3px border, a 240px red portrait plate, oversized Anton name, brass role and stat figures, and a Close button.
- **Behavior:** `aria-live="polite"` announces the change, `aria-pressed` tracks the active card, and Close returns to the neutral rack.

### Navigation
- **Structure:** Four top-level entries — Roster, Shop, Matches and a "More" disclosure containing Media, Titles and Community.
- **Support:** A skip link targets `#main-content`; the full link set remains in the footer. At 900px the nav becomes a toggle-driven column.

### Halftone field — roster home
- **Style:** One `<canvas>` fills the roster section exactly. Team-red dots sit on cream at opacity `.18` in a 20px grid (22px on narrow screens) with a ~1.3px base radius. The section clips the canvas so no dot bleeds into neighbouring bands.
- **Motion:** Most dots stay at base size. A few soft blobs drift across the field with a smooth radial falloff, swelling nearby dots and fading to nothing at the edge, then respawning elsewhere. The field is never scaled or slid as a sheet.
- **Budget:** One batched path fill per frame, device pixel ratio capped at 2, four blobs on desktop and two on narrow screens. The loop runs only onscreen and stops under `prefers-reduced-motion`.

**The Halftone Rule.** The dots are printed texture on cream paper, not a backdrop effect: they stay inside the section, keep one red at fixed opacity, and most stay at base size. Movement belongs to a few drifting blobs with a soft edge — never a uniform per-dot wave or a scaled, sliding field.

### Champions hero — roster home
- **Composition:** Full-bleed 1920×1080 photograph under an ink-to-red gradient and a 28% red multiply wash.
- **Content:** Stacked "OUR / CHAMPIONS" in cream and light brass, identity line with a pulsing brass rule, subtitle, brass and ghost actions, and a rotated "DROP 01" hangtag.
- **Motion:** 22s breath on the photo, 5s pulse on the rule, pointer-driven depth on photo, copy and hangtag. All loops pause offscreen and reduce away.

### Masthead — all other routes
- **Style:** Full-bleed photograph under a red multiply wash and ink-to-red gradient, stacked display title, identity line with a short brass rule, one-line subtitle and an action row. Static by design; only the home hero breathes.
- **Purpose:** The non-home equivalent of the champions hero, used on shop, matches, titles, media, community and the 404. The flat pagehead pattern was retired.

### Facts rail
- **Style:** Ink band with a 30s marquee of 14px Anton labels, duplicated into two equal groups for a seamless `-50%` loop.
- **Behavior:** Pauses on hover, keyboard focus and offscreen; under reduced motion it becomes a static wrapped rail.

### Reusable kit
Shared classes in `site.css`: `.masthead` and its children, `.section-head`, `.plate`, `.flag-strip`, `.divider`, `.strip` (facts rail), and `.results` / `.match-group` / `.match-row` (results rail). Add a class from this kit before writing a new component.

### Results rail — matches
- **Style:** 24 results grouped into three chronological stages, each opened by a stitched head with stage name, series count and date range. A row carries only what changes: date, opponent, round, score and a Win/Loss pill.
- **Motion:** Rows reveal once as they enter view, then slide 6px right on hover or focus while a brass bar grows from the left edge, the opponent turns red and the score scales 10%. Reduced motion removes both.
- **Non-colour cue:** Result pills carry the word and a drawn check or cross.
- **Behavior:** Filter chips match one token in a space-separated category; empty groups hide with their rows.

**The Tap-Target Floor.** Every inline text link shares one `min-height: var(--tap)` rule (28px), raised to 44px on coarse pointers along with chips and product links, plus `:active` feedback. Component padding stays local; the hit-area floor is global.

### Product cards — shop
- **Style:** Square paper card, 1px ink border, ambient lift; 4:5 cream art field holding a real product image or authored SVG with an ink badge.
- **Links:** Solid ink for official sources, outline for fan-made searches. No prices are shown because they change. The fan-made rail sits on ink so the stitched split is a tonal change, not just a label.

### Media tiles — media
- **Style:** Ink card with a 16:9 thumbnail from the original source and a circular play or link mark.
- **Meta:** 11px brass source label and 22px Anton title below the thumb.

### Timeline and trophy items — titles
- **Style:** 1px vertical rule with 10px red dot markers, 11px date labels and clamp 22–34px event headings; trophy items use a 1px light border, transparent fill and a large brass year.

### Fan cards — community
- **Style:** Square paper card, 1px ink border, ambient lift, 11px red handle, 22px Anton title, 14px body and an underlined 11px link.

## Do's and Don'ts

### Do:
- **Do** let red occupy entire regions; never sprinkle it as a highlight on a white template.
- **Do** use real team photography once per editorial moment and credit it as editorial reference on an unofficial page.
- **Do** keep official and fan-made merchandise visibly separate with working outbound links.
- **Do** state "unofficial fan hub" in the header and footer of every page.
- **Do** judge new work against the roster home first, then check the other-page patterns above.
- **Do** keep every tabbable element actionable and every focus state visible, especially under reduced motion.

### Don't:
- **Don't** add rounded corners, glass blur, gradient text or neon glow.
- **Don't** use Unicode glyphs as icons; draw marks in CSS and hide decorative ones from assistive tech.
- **Don't** scatter entrance animations. Keep the pinned loops slow, pause them offscreen, and preserve a reduced-motion path.
- **Don't** let functional text drop below 11px, place brass or tinted cream on red copy, or break an Anton word with an invented bold weight.
- **Don't** re-enable the suppressed detector rules without reading why they are pinned in `.impeccable/config.json`.
