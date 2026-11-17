# Research integration list — all pages rollout

**Compiled:** 17 November 2026 · Sources: `01-photography.md`, `02-merchandise.md`, `03-facts.md`, `04-media.md`, `05-community.md`.

## What was gathered

| Category | Result | Location |
|---|---|---|
| Photography & logos | 32 assets downloaded; 5 existing files reviewed for reuse; 5 URL-only/blocked sources recorded | `research/assets/photography/`, `research/01-photography.md` |
| Merchandise | 25 products catalogued; 14 product images downloaded; 8 store URLs verified | `research/assets/merchandise/`, `research/02-merchandise.md` |
| Facts | 24/24 matches verified; 3 titles fixes; stage splits and source register | `research/03-facts.md` |
| Media | 6/6 tiles live; 10 thumbnails downloaded; 21 source URLs verified | `research/assets/media/`, `research/04-media.md` |
| Community | All team channels verified; 1 dead link; 2 missing channels; 3 unsafe links rejected | `research/05-community.md` |

**Already on disk and verified as official-site copies — do not re-fetch:** `assets/img/hero.jpeg` (1920×1080), `assets/img/back-to-back.jpeg` (800×400), `assets/img/trophy-original.jpg` (1920×1080), `assets/img/bigetron-logo.png` (144×144), and the five `assets/players/*.png` cutouts.

## Compliance gate — read before publishing

The photography manifest flags that **all Bigetron and Vitality imagery and logos are rights-restricted** (© Bigetron Esports / Team Vitality; Vitality marks are registered trademarks; the Wikipedia Vitality SVG is non-free/fair-use). These assets are suitable for a research mock-up, but **permission should be obtained before public use**, and each image needs a visible credit plus the standing "unofficial fan project" disclaimer. The existing site already follows this pattern with provenance notes in footer disclosures; keep it. Do not describe any sourced asset as licensed or endorsed.

## Consolidated fix list by page

### Shop (first sprint)
- **Replace four dead links** — `shop.bigetron.gg/`, `/shop`, `/product/2018-official-bigetron-jacket/`, `/product/black-bigetron-t-shirt/`: DNS no longer resolves. Route to `https://shopee.co.id/btrgear` (the store bigetron.gg itself links to).
- **Replace dead** `https://www.redbubble.com/search/bigetron` → `https://www.redbubble.com/shop/bigetron`; note inventory is sparse.
- Keep the official / fan-made split and the no-prices policy. Verified live official roots: `shopee.co.id/btrgear`, `shopee.com.my/bigetronshop.my`, `instagram.com/btrgear`, `vitality.gg`, `shop.esl.com/collections/vitality`.
- Drop or requalify the rubber wristband and grey tee — no official source found.
- Use local product images (social CDN URLs expire); label Vitality/ESL items as global partner products, not MPL-ID gear.

### Matches
- **No data changes** — all 24 rows and 16–8 / 41–34 / 14–7 are exact.
- New scorecard material, verified: regular season 10–6 (21–18 games); playoffs 4–1 (15–13); MSC 2–1 (5–3). Tournament dates: MPL ID S18 14 Aug–8 Nov 2026, MSC 1 Jul–1 Aug 2026.
- Masthead/plates: `btr-mlbb-team-back-to-back-article.jpeg` (2048×1365), `btr-mlbb-shogun-fmvp-article.jpeg` (portrait), `btr-mobile-legends-division-banner.png` (wide strip).

### Titles
- Fix `15 May` → **15 May 2025**; retire the "no year in source" footer caveat.
- Fix **"150+ International titles"** → **150+ national titles + 2 world titles** (club/Liquipedia claim, not an audited count).
- Fix world-title names → **2019 PMCO Fall Split Global Finals** and **2020 PMWL Season Zero — East**, with the club/Liquipedia West-vs-East conflict noted.
- Optional enrichment: S18 FMVP is **Shogun** (not Moreno — that was S17); back-to-back was only the **third** MPL ID team; winnings wording "≈ $1.09M (Liquipedia estimate)".
- Soften "all social channels rebranded" → "competes under the name Bigetron by Vitality".
- Masthead: `btr-mpl-id-s17-champions-dsc05795.JPG` (6000×4000) — downscale before use.

### Media
- Replace four placeholder tiles with downloaded official thumbnails: Facebook reel (`08-…`), Bigetron TV landscape video (`09-…`), newsroom S17 thumb (`04-…`), Moonton M8 hero (`06-…`, identical to on-disk `trophy-original.jpg`).
- Optional source accuracy: "Dethroning the Sky Kings" currently uses `hero.jpeg`; the article's own hero is `05-moonton-s17-dethrone-sky-kings.JPEG`.
- Facebook `/videos/` canonicalises to `/reel/`; use the local thumbnail, never the expiring signed CDN URL.
- No dead outbound links.

### Community
- Add **YouTube** `https://www.youtube.com/@bigetron_esports` and **Facebook** `https://www.facebook.com/bigetronesports` — the page claims four channels but links only three.
- Optional public space: MLBBDex Discord `https://discord.gg/mw5RzvkkU3`, explicitly labelled as MLBBDex's server.
- Do **not** add: `youtube.com/@bigetronesports` (a different channel), any "official Bigetron Discord", or an unverified fan group.
- Optional third-party record: Indonesian Wikipedia. Treat the Vitality press-release URL as unavailable at source.
- `#BTRWIN` framing is confirmed correct.

## Asset preparation required before integration

1. **Downscale** the large originals before they ship: `btr-mpl-id-s17-champions-dsc05795.JPG` (14.8 MB), `btr-mpl-id-s17-moreno-fmvp-dsc05863.JPG` (14.6 MB), `btr-ffws-champions-article.jpg` (6.6 MB), `btr-ffws-grand-final-surabaya-article.jpg` (3.1 MB). Target WebP at masthead width.
2. **Use local copies** for all Instagram/Facebook CDN images — their signed URLs expire.
3. **Credit every sourced image** in the relevant footer/source disclosure; keep the unofficial disclaimer on every page.
4. Only verified, correctly-attributed assets move from `research/assets/` into `assets/img/`; the rest stay as research references.

## Gate before implementation

No site code has been changed in this research phase. Implementation starts with Phase 0 (extract the shared kit from `index.html`), then the Shop sprint, in the confirmed order and with selective signatures.
