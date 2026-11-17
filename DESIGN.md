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
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(34px, 5.5vw, 68px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(22px, 3vw, 32px)"
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

This is a fan-built team hub dressed as a seasonal streetwear lookbook. The team's red is not an accent on a neutral page: it is a garment-dyed ground that owns whole regions, with ink black, warm paper and a single brass tone supporting it. The roster reads as a lineup, player details live on hangtags, and sections are joined by stitched rules rather than generic dividers. The result should feel like opening a collection, not scrolling a sports template.

**The roster home (`index.html`) is the reference implementation.** Its champions hero, facts rail, off-grid selector rack, record table, history split and shop teaser are the most resolved expressions of this world, and new work should be judged against them first. The site is deliberately unofficial: every page states that it is fan-made, and the shop keeps official and fan-made merchandise visibly apart behind a thin stitched line. Imagery is real team photography and transparent player cutouts from the club's own portrait set; no player likeness is fabricated. Text is set in a condensed display face for names and a workhorse grotesk for everything functional, so hierarchy comes from scale and weight rather than decoration.

The other five pages — shop, media, titles, matches and community — now share the shell, tokens, footer, reusable kit and baseline grid, each with a photographic masthead and a page-specific signature. The roster home remains the reference surface; their distinct patterns are documented in Components.

**Key Characteristics:**
- Red as ground, not trim; cream paper as the quiet counter-surface.
- Hangtags, woven labels, barcode-like strips and stitched dividers as the component vocabulary.
- Square corners throughout; no rounded UI chrome.
- Three quiet, user-pinned loops: the champions photograph breathes slowly, the facts rail slides continuously, and a few soft blobs swell the roster section's fine halftone dots as they drift; all pause offscreen. The photo, copy and hangtag also sit on pointer-driven depth planes. Everything else is still except immediate hover feedback.
- Honest, plainspoken copy that never implies team endorsement.
- The roster home leads; the other pages inherit the shell and carry their own documented patterns.
- Tab stops are actions: the selector rack reveals one player at a time, and focus is never visually removed.
- The primary navigation has four top-level entries with the remaining pages grouped under "More".

**The Home-First Rule.** The roster home is the reference surface. When a component or spacing decision is ambiguous, copy what `index.html` does before inventing a new treatment, and treat the other pages as inheritors until they receive their own attention.

**The Real Action Rule.** Nothing is focusable without an action. The selector cards are buttons that reveal one player's detail; `:focus-visible` always keeps a brass outline, including under reduced motion.

## Colors

The palette is a garment-dyed red with paper and ink, plus one metallic accent used sparingly for emphasis and active states.

### Primary
- **Team Red** (#B21018): The dominant ground. Owns the hero, page headers and closing sections. Never used as a small accent on a white field.
- **Deep Red** (#7E0A11): Image wash and darker panels behind photography; also the bench plate on the roster.
- **Bright Red** (#D3222C): Reserved for small signals and hover shifts.

### Secondary
- **Brass** (#D8A24A): The single metallic accent — hangtag type, active navigation, final-call buttons, and the selector card's hover shadow. Kept off body text on red; use **Light Brass** (#F7E6C4) there.
- **Win** (#1C7A4A): The only non-palette color, used for the result word in the matches table so a win is read at a glance.

### Neutral
- **Ink** (#171412): Primary text, navigation bar, the selector flag strips and table headers.
- **Cream** (#F3EDE2): Text on red and red-deep surfaces; the lookbook's paper tone.
- **Paper** (#FBF7EE): Default page background and card faces.
- **Muted** (#6E655B): Secondary copy on light surfaces only, never on red.

**The Red Ground Rule.** If a region is red, its text is opaque cream. Tinted cream, muted gray and brass-on-red all fail; the red owns the region and the copy sits on top at full strength.

## Typography

**Display Font:** Anton (self-hosted, with Impact fallback)
**Body Font:** Barlow (self-hosted, with Arial fallback)
**Label/Mono Font:** none — labels are Barlow at 11px with wide tracking.

**Character:** Anton is a single-weight compressed face; every Anton-bearing role is set at weight 400 with `font-synthesis:none`, so no fake bold closes its counters. Barlow 400/700 carries body and labels. The contrast between faces, size and space — not faux weight — is the hierarchy.

### Hierarchy
- **Display** (400, clamp 52–124px, line-height .86): On the home page, "OUR / CHAMPIONS" only; on the other pages, the `.pagehead` title.
- **Headline** (400, clamp 34–68px, line-height .95): Section titles such as "THE 2026 LINEUP" and "THE RECORD, IN CLOTH".
- **Title** (400, clamp 22–32px, line-height 1): Player and card names, timeline event headings.
- **Body** (400, 16px, line-height 1.6, max 65–75ch): All reading copy; names and stats use tabular numerals.
- **Label** (700, 11px, .16em, uppercase): Nav, tag chips, captions, table heads, stitch labels, role chips and flags.

**Role Tokens.** Repeated sizes are declared once in `site.css` and referenced everywhere: `--type-display`, `--type-headline`, `--type-title`, `--type-card-title` (22px), `--type-body` (16px), `--type-data` (14px), `--type-meta` (13px), `--type-control` (12px), `--type-label` (11px), plus `--type-index` and the plate sizes. Genuine one-offs (brand mark, closing line, year, responsive overrides) stay inline. This keeps the 11px floor and card-title role consistent without forty near-duplicate declarations.

**The Eleven-Pixel Floor.** Nothing functional renders below 11px. The micro-label look comes from tracking and case, not from shrinking type.

**The True Weight Rule.** Anton has one real weight. Never let the UA default 700 or `font-synthesis` invent a bold cut; reset headings to 400. Prose measures stay within 45–70ch and card titles share one 22px role.

## Layout

The roster home reads in this order: ink topbar → full-bleed champions photograph with a red wash and floating hangtag → continuously sliding facts rail → off-grid selector rack on cream → record table on ink → "Trust the process" split → shop teaser on red → two-column footer. Every section uses one centered container (`--max: 1320px`) inside one fluid gutter (`--pad: clamp(20px, 5vw, 72px)`), one section padding (`--section-y: clamp(56px, 8vw, 104px)`), and one eight-step spacing scale (`--s1` 8px through `--s9` 72px).

A section reads left-to-right in one order: left-aligned display heading, a short supporting intro at a 68ch measure, a 40px gap, then the content group, then a 32px action row. Stitched dividers put the heading on the left and its count at the right edge of the rule. The selector rack is the deliberate exception: a three-column off-grid grid with a 110px top clearance, 100px row gap, and staggered vertical offsets. At 900px the navigation collapses behind a menu toggle, the hero becomes a stacked layout, and the rack becomes two columns with no stagger.

The other pages use the same container, gutter, section padding and footer, but begin with a flat red `.pagehead` instead of the photograph hero. Their grids are auto-fit with 215–280px minimums and a 24px gap; the results table keeps a 620px minimum inside its own horizontal scroller.

**The One Reading Path Rule.** Content text is always left-aligned. Only the punch-hole label on a hangtag and the small flag on a selector card are centred, because they are printed marks on an object rather than page copy.

## Elevation & Depth

Depth is ambient and modest everywhere. Every shadow has a small offset and a soft blur; no zero-blur hard offset blocks remain. Borders and colour carry structure, shadows only lift. At rest on dark sections, tonal layering replaces shadow.

- **Card lift** (`box-shadow: 0 10px 24px rgba(23,20,18,.16), 0 2px 6px rgba(23,20,18,.12)`): product cards, media tiles, figure plates and the hero hangtag.
- **Selector rest** (`box-shadow: 2px 3px 10px rgba(23,20,18,.18), 0 1px 3px rgba(23,20,18,.12)`): roster selector cards at rest.
- **Selector hover** (`box-shadow: 3px 5px 16px rgba(23,20,18,.24), 0 1px 4px rgba(23,20,18,.14)`): the same cards on hover or focus, with the border turning brass.
- **Press feedback** (`transform: translate(-2px,-2px)` with a small blurred shadow): buttons on hover; the shadow is consumed by the movement.

**The Edge-First Rule.** Reach for a border before a shadow. A row of identical hairline-border-plus-wide-shadow cards is the default this world refuses.

**The Restrained Depth Rule.** No hard offset shadows. Depth comes from a 2–3px offset and a soft blur; emphasis on the selector cards comes from the brass border and the warm red field, not from a giant coloured block behind the card.

## Shapes

Everything is square. Corners are 0px, buttons and cards are rectangles, and the few circles are the hole punch on a hangtag and the dot markers in the timeline. Stitched rules are 1px dashed lines, used as separators and as the official / fan-made boundary. The selector plate is a rectangular field with a real transparent cutout breaking over its top edge; the bench plate is a typographic red rectangle with a 3px ink border and its own 6px offset shadow. Jersey illustrations on the shop page are authored SVG paths, not clip-path approximations of photography.

## Components

### Buttons
- **Shape:** Square, 1px solid border, 14px 22px padding, 11px tracked uppercase label.
- **Primary:** Ink ground, cream text; on hover it becomes brass with ink text and translates up-left into a short shadow.
- **Ghost:** Transparent with a current-color border; forced to cream inside the hero and red sections so it stays legible.
- **Brass:** Brass ground with ink text; the final action in a red section.

### Off-grid selector cards — roster home
- **Style:** Bold but restrained: 3px ink border, a small soft shadow, no radius. The red field and brass hover border carry the emphasis.
- **Composition:** One card per player — portrait and data are a single object. The cutout stands on a 152px red field inside the card and breaks 88px over its top edge; cards are staggered by 14px and 28px so the rack reads off-grid.
- **Type:** 66px Anton index number on a red badge, name at clamp 28–40px, 11px role chip, 13px real name, and tabular stats under a 2px rule, closed by an ink flag strip.
- **Hover / focus:** Two rhythms on one object — the card lifts 3px/4px with a brass border and soft shadow, while the portrait rises 16px straight up and scales 1.05 from a bottom-centre origin, its drop-shadow deepening. No rotation or skew: the figure steps forward naturally, as if standing taller. Reduced motion holds both at rest.
- **Action:** Each card is a `role="button"` control with `aria-pressed` and a descriptive label. Activating one reveals the player detail below the rack; only one is selected at a time, and activating it again toggles the detail off.
- **Layering:** The index badge sits at `z-index:3`, above the portrait plate (`z-index:2`), so "01" is never occluded at any breakpoint.

### Player detail panel — roster home
- **Style:** An ink panel with a 3px border, a 240px red portrait plate, oversized Anton name, brass role and stat figures, and a text "Close" button.
- **Behavior:** Reveals exactly one player from the rack; `aria-live="polite"` announces the change, `aria-pressed` tracks the active card, and Close returns to the neutral rack. The bench player uses the typographic plate instead of a portrait.

### Navigation
- **Structure:** Four top-level entries — Roster, Shop, Matches and a "More" disclosure containing Media, Titles and Community. The repeated "Programmed to win" flag lives in the facts rail, not the nav row.
- **Support:** A skip link targets `#main-content`; the full link set remains in the footer.

### Halftone field across the roster section — roster home
- **Style:** A fine comic halftone on one `<canvas>` that fills the roster section exactly. Team-red dots sit on the cream ground at fixed opacity (`.18`), in a tight 20px grid (22px on narrow screens) with a roughly 1.3px base radius, so the screen reads as if zoomed out. The section clips the canvas, so no dot crosses its edge or bleeds into the neighbouring bands.
- **Motion:** Almost every dot stays at its base size. A few soft blobs drift across the field: each has a smooth radial falloff that swells the dots near its centre and fades to nothing at its edge, so the enlarged dots read as a clump with a gradient rather than a hard disc. Blobs drift, pulse wider and narrower, fade out at the end of their life, then respawn at a fresh random position with a new direction and size. The field itself is never scaled, slid or rotated as a sheet, and its colour and opacity never change.
- **Budget:** One canvas, one batched path fill per frame, device pixel ratio capped at 2, four blobs on desktop and two on narrow screens. The loop runs only while the section is on screen and the tab is visible; it stops under `prefers-reduced-motion`, where a static halftone remains. A `ResizeObserver` keeps the backing store matched to the box after fonts and images settle layout.

**The Halftone Rule.** The dots are printed texture on the cream paper, not a backdrop effect: they stay inside the section, keep one red at fixed opacity, and most stay at base size. Movement belongs to a few drifting blobs that swell dots locally with a soft edge — never to a uniform per-dot wave or a scaled, sliding field.

### Champions hero — roster home
- **Composition:** Full-bleed 1920×1080 photograph under a left-to-right ink-to-red gradient plus a 28% red multiply wash, so the celebration stays on-world.
- **Content:** Stacked "OUR / CHAMPIONS" in cream and light brass, an identity line with a slowly pulsing brass rule, a one-line subtitle, brass and ghost actions, and a rotated "DROP 01 — CHAMPIONS · SEASON 18" hangtag.
- **Motion:** 22s breath on the photo, 5s pulse on the rule, pointer-driven depth on photo, copy and hangtag. All loops pause offscreen and reduce away under `prefers-reduced-motion`.

### Facts rail — roster home
- **Style:** Ink band with a 30s linear marquee of Anton labels, duplicated into two equal groups for a seamless `-50%` loop.
- **Behavior:** Pauses on hover, on keyboard focus and when offscreen; under reduced motion it becomes a static wrapped rail.

### Record table — roster home
- **Style:** Paper table inside a 1px border, ink caption strip, 11px tracked headers, 13px/18px cells, right-aligned tabular numerals.
- **States:** Row hover tints from the team red; win and loss words use their reserved colors.

### Stitched divider
- **Style:** One dashed rule with a left-aligned display heading and a small count at the right edge.
- **Purpose:** Separates official from fan-made merchandise and marks tonal shifts in long pages.

### Masthead — other primary pages
- **Style:** Full-bleed photograph under a red multiply wash and an ink-to-red gradient, stacked display title in cream and light brass, an identity line with a short brass rule, a one-line subtitle and an action row. A rotated hangtag may carry the drop number. Static by design: only the home hero breathes and follows the pointer.
- **Purpose:** The non-home equivalent of the champions hero; used on shop, matches, titles, media, community and the 404 route. Even the error page keeps a clear way back instead of a bare banner. The flat `.pagehead` rules remain in the stylesheet as a fallback only.

### Reusable kit
These classes live once in `site.css` and are shared by every page:
- `.masthead` with `.masthead-media`, `.masthead-wash`, `.masthead-copy`, `.masthead-id` and `.masthead-sub` — the photographic masthead.
- `.strip` — the facts rail; duplicate its group and mark the second `aria-hidden="true"` for a seamless loop.
- `.section-head` — heading plus intro as one stacked unit, with an optional count.
- `.plate` — a captioned editorial image; always credit the photograph in the footer.
- `.flag-strip` — the ink label used on hangtag cards.
- `.divider` — the stitched seam between official and fan-made, and between tonal sections.
- `.results` / `.match-group` / `.match-row` — the grouped, chronological results rail on Matches.

### Product cards — shop
- **Style:** Square paper card, 1px ink border, ambient lift; 4:5 cream art field with an authored SVG garment and an ink badge.
- **Links:** Solid ink for official sources, outline for fan-made searches, each with its own hover color. No prices are shown because they change.

### Results rail — matches
- **Style:** The 24 results are grouped into three chronological stages — Playoffs (5), Regular season (16), MSC 2026 (3) — each opened by a stitched head with the stage name, series count and date range. A row carries only what changes: date, opponent, round, score and a Win/Loss pill. The stage is stated once in the group head, not repeated 24 times.
- **Motion:** Rows reveal once as they enter view, then respond to hover or focus: the card slides 6px right, a brass bar grows from the left edge, the opponent shifts to red and the score scales up 10%. Reduced motion removes both the reveal and the hover movement.
- **Non-colour cue:** Win and Loss pills carry the word plus a drawn check or cross; colour alone never carries the result.
- **Behavior:** Filter chips match one token in a space-separated category, so a row can be both a win and a playoff match. Empty groups hide with their rows.

### Media tiles — media
- **Style:** Ink card with a 16:9 thumb in one of four named color fields (red, ink, brass, deep red) and a circular play/link mark.
- **Meta:** 11px brass source label and 20px Anton title below the thumb.

### Timeline and trophy items — titles
- **Style:** A 1px vertical rule with 10px red dot markers, 11px date labels and clamp 22–34px event headings; trophy items use a 1px light border, transparent fill and large brass year.

### Fan cards — community
- **Style:** Square paper card, 1px ink border, ambient lift, 11px red handle, 26px Anton title, 14px body and an underlined 11px link.

## Do's and Don'ts

- Do let red occupy entire regions; do not sprinkle it as a highlight on a white template.
- Do use real team photography once per editorial moment; do not invent player portraits or statistics.
- Do keep official and fan-made merchandise visibly separate with working outbound links.
- Do state "unofficial fan hub" in the header and footer of every page.
- Do judge new work against the roster home first, then check the other-page patterns above before inventing a new component.
- Do keep every tabbable element actionable and every focus state visible, especially under reduced motion.
- Don't add rounded corners, glass blur, gradient text or neon glow.
- Don't use Unicode glyphs as icons; draw marks in CSS and hide decorative ones from assistive tech.
- Don't scatter entrance animations. The loops are explicit user requests: keep them slow, pause them offscreen and on hover for the rail, and preserve a reduced-motion path.
- Don't let any functional text drop below 11px, and never place brass or tinted cream on red copy.

## Systemic Patterns & Detector Exceptions

Three mechanical detector rules are suppressed in `.impeccable/config.json` because they flag the pinned visual system, not defects. Each has a named reason:

- **`cramped-padding`** — full-bleed bands are a deliberate device: the hero, pagehead, ink sections and facts strip all span the viewport, while readable text sits inside the `.wrap` container and the fluid `--pad` gutter. The detector cannot resolve CSS custom properties, so it reads those variable-based insets as zero and reports text flush to the band. No copy is actually against a band edge.
- **`marquee`** — the facts rail is an explicitly requested loop. It duplicates its track for a seamless `-50%` cycle and pauses on hover, on keyboard focus and offscreen, with a static wrapped layout under `prefers-reduced-motion`. The rule's "hides half its content" premise does not apply to a decorative facts rail.
- **`cream-palette`** — `--paper` (`#FBF7EE`) and `--cream` (`#F3EDE2`) are named, documented tokens of this world, not a reflexive tasteful off-white. Red is the dominant ground; cream is the deliberate counter-surface for editorial plates and for text on red.

**The Single-Theme Rule.** The palette is exactly ten hex values, each equal to a declared token, with no dark-mode variant. A pinned single-theme brief is intentional here: a scheme swap would replace the lookbook's material identity with a different one. Do not introduce one.

**The Tap-Target Floor.** Every inline text link — primary nav, More menu, fan cards, footer links and the credits disclosure — shares one `min-height: var(--tap)` rule (28px) defined once near the base link styles. Component padding stays local for visual reasons, but the hit-area floor is global, so a new text link cannot silently ship too small. Functional text still never drops below the 11px floor.
