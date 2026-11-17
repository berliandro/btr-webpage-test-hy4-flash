# 04 — Media sourcing manifest

**Scope:** Outbound media links on `media.html` for the unofficial Bigetron by Vitality fan hub. The site links out only; it does not republish content.
**Verified:** 17 November 2026 (live fetches of the official pages below).
**Method:** `webfetch` of article pages + PowerShell `Invoke-WebRequest` for Open Graph metadata of the JS-rendered Facebook/YouTube pages. Thumbnails downloaded from the official source pages/official CDNs into `research/assets/media/`.

## Verified sources and thumbnails

| # | Title | Source page URL | Direct thumbnail image URL | Publisher | Publication date | Suggested tile | Downloaded to | Verification / flags |
|---|-------|-----------------|----------------------------|-----------|------------------|----------------|---------------|----------------------|
| 1 | PERTAHANKAN GELAR JUARA, BIGETRON BY VITALITY CETAK SEJARAH BACK-TO-BACK | https://bigetron.gg/news/pertahankan-gelar-juara-bigetron-by-vitality-cetak/ | https://bigetron.gg/media/thumbnails/5f7368yZ8a9JFGp4Derft5_size_1280x640_webp.webp (listing variant: `..._size_800x400.jpeg`) | Bigetron Esports | 09 Nov 2026 | **Back-to-back champions** (existing tile) | `01-bigetron-back-to-back-1280x640.webp`, `02-...-800x400.jpeg` | LIVE, body read. Exact title/date confirmed. Previously "Back-to-back champions" tile showed 09 Nov 2026 — correct. |
| 2 | SEJARAH BARU: BIGETRON BY VITALITY CHAMPION MPL ID SEASON 17 | https://www.bigetron.gg/news/sejarah-baru-bigetron-by-vitality-champion-mpl-id/ | https://www.bigetron.gg/media/thumbnails/8H45vhmdP5ttAYZ74mPB9x_size_1280x640_webp.webp (listing variant: `..._size_800x400.jpeg`) | Bigetron Esports | 15 Jun 2026 | Optional extra / **All club news** (candidate) | `03-bigetron-s17-champion-1280x640.webp`, `04-...-800x400.jpeg` | LIVE, body read. The club's own Season 17 title story — first MPL title, 4–1 vs ONIC, Moreno FMVP. |
| 3 | Bigetron by Vitality dethrone the Sky Kings and are crowned MPL Indonesia Season 17 Champions as Indonesia's representatives set sights on international glory | https://en.moonton.com/news/350.html | https://en.moonton.com/upload/image/20260615/64d0ae782ff5bf77aba30060a9d334f6.JPEG | MOONTON Games | 15 Jun 2026 | **Dethroning the Sky Kings** (existing tile) | `05-moonton-s17-dethrone-sky-kings.JPEG` | LIVE, body read. Exact date/title confirmed. Note: tile currently uses on-disk `hero.jpeg` (a Bigetron team graphic), **not** this article's own hero — see reuse notes. |
| 4 | Bigetron by Vitality joins MPL Indonesia's elite with historic title defence and sets its sights on the M8 World Championship | https://en.moonton.com/news/397.html | https://en.moonton.com/upload/image/20261109/0a99aad8b51d711a7409efa7a98318b0.jpg | MOONTON Games | 09 Nov 2026 | **Setting sights on M8** (existing tile) | `06-moonton-m8-title-defence.jpg` | LIVE, body read. Exact title/date confirmed. This hero is the *same photo* as on-disk `assets/img/trophy-original.jpg`. |
| 5 | This is our story at MPL ID Season 18! ❤️‍🔥 And the back-to-back champion title is ours! 🏆👑 #bigetronbyvitality | https://www.facebook.com/bigetronesports/videos/1580904827122908/ (canonical: https://www.facebook.com/reel/1580904827122908/) | Facebook OG image: `https://scontent.fjog13-1.fna.fbcdn.net/v/t51.82787-15/893598679_18471954607190695_3356632289285696130_n.jpg?...oe=6B021B3F` (signed, expiring CDN URL — full URL recorded in `research/assets/media/` download script / below) | Bigetron Esports (official page) | Season 18, post-final; approx. 09 Nov 2026 (not printed on page) | **This is our story** | `08-facebook-reel-this-is-our-story.jpg` | LIVE. OG title/description/image read from HTML. `/videos/` URL resolves; canonical is `/reel/`. Date is inferred from the S18 championship, **not** an explicit publication date — flag as approximate. CDN signature will expire; local copy is the durable asset. |
| 6 | Bigetron TV (channel) — "Welcome to Bigetron TV - The Official Home of Bigetron Esports!" | https://www.youtube.com/c/BigetronTV2k17 (canonical: https://www.youtube.com/channel/UC6ZnM9vJ7OFVVvzOACDkfGg) | Avatar: https://yt3.googleusercontent.com/W9kUhvrlIL1BM50FNxn9I_4ceOJ8VjrV318_nyHCUMMFvps5Lz3qGhHjM0oOkjK8QQv-X3C9xV0=s900-c-k-c0x00ffffff-no-rj | Bigetron Esports | Channel (n/a) | **Bigetron TV** | `07-bigetron-tv-avatar.jpg` (square avatar); `09-...`, `10-...` (landscape alternatives) | LIVE. OG title/description and canonical channel ID confirmed. Avatar is square — landscape video thumbs downloaded as better tile options. |
| 6b | 3 MINGGU TANPA TERKALAHKAN! - BIGETRON MPL ID S18 | https://www.youtube.com/watch?v=5q5fNk5l_ig | https://i.ytimg.com/vi/5q5fNk5l_ig/maxresdefault.jpg | Bigetron TV | Season 18 (2026) | Alternative image for **Bigetron TV** tile | `09-bigetron-tv-video-mpl-s18-maxres.jpg` | LIVE. Title/author confirmed via YouTube oEmbed. |
| 6c | THE OFFICIAL BIGETRON BY VITALITY ROSTER - MPL ID S18! | https://www.youtube.com/watch?v=Bv03pzBesIc | https://i.ytimg.com/vi/Bv03pzBesIc/maxresdefault.jpg | Bigetron TV | Season 18 (2026) | Alternative image for **Bigetron TV** tile | `10-bigetron-tv-video-roster-s18-maxres.jpg` | LIVE. Title/author confirmed via YouTube oEmbed. |
| 7 | NEWS & EVENTS (newsroom index) | https://bigetron.gg/news/ | Official listing thumbs, e.g. https://bigetron.gg/media/thumbnails/8H45vhmdP5ttAYZ74mPB9x_size_800x400.jpeg | Bigetron Esports | Ongoing | **All club news** | `04-bigetron-s17-champion-800x400.jpeg` | LIVE. Index has no single hero image; use an official newsroom article thumbnail. |
| 8 | TikTok — @bigetronesports | https://www.tiktok.com/@bigetronesports | — | Bigetron Esports | n/a | "Where they post" → TikTok | — | URL appears on the official bigetron.gg footer (all four social links). Direct fetch hit TikTok's "Please wait..." bot wall, so the account page was **not independently verified** — flagged uncertain, but the link is officially published. |
| 9 | Instagram — @bigetronesports | https://www.instagram.com/bigetronesports | — | Bigetron Esports | n/a | "Where they post" → Instagram | — | Officially published in bigetron.gg header/footer. Not individually fetched — low-risk. |
| 10 | X / Twitter — @bigetronesports | https://x.com/bigetronesports | — | Bigetron Esports | n/a | "Where they post" → X | — | Officially published in bigetron.gg footer. Not individually fetched — low-risk. |

### Additional official Bigetron newsroom articles (verified via official listing; titles/dates/thumbs from https://bigetron.gg/news/ pages 1–2)

| Title | URL | Direct thumbnail URL | Publisher | Date | Suggested tile | Verification / flags |
|-------|-----|----------------------|-----------|------|----------------|----------------------|
| GELAR JUARA MASIH DI TANGAN BIGETRON ACADEMY | https://bigetron.gg/news/gelar-juara-masih-di-tangan-bigetron-academy/ | https://bigetron.gg/media/thumbnails/gqjEkNNrgRbaFR7xJLZWJA_size_800x400.jpeg | Bigetron Esports | 02 Nov 2026 | Extra news item | Listing-verified; body not opened. |
| BIGETRON BY VITALITY RAIH GELAR JUARA FFWS SEA 2026 FALL | https://bigetron.gg/news/bigetron-by-vitality-raih-gelar-juara-ffws-sea-202/ | https://bigetron.gg/media/thumbnails/2EZFofU4z26yBUc8yfEvvu_size_800x400.jpeg | Bigetron Esports | 21 Sep 2026 | Extra news item | Listing-verified; body not opened. |
| RUNNER UP PMPL ID FALL 2026, BIGETRON BY VITALITY LOLOS KE PMGO 2026 S2 SEA FINALS | https://bigetron.gg/news/runner-up-pmpl-id-fall-2026-bigetron-by-vitality-l/ | https://bigetron.gg/media/thumbnails/boLd8kPTCtYKmbkt9bv52s_size_800x400.jpeg | Bigetron Esports | 31 Aug 2026 | Extra news item | Listing-verified; body not opened. |
| BACK TO BACK CHAMPIONS: MWI AT EWC26 | https://bigetron.gg/news/the-reign-continues-champions-of-mwi-at-ewc26/ | https://bigetron.gg/media/thumbnails/WvEGzRskQ6npdSv7aBL7Ra_size_800x400.jpeg | Bigetron Esports | 20 Jul 2026 | Extra news item | Listing-verified; body not opened (women's team). |
| SEJARAH BARU! SEMUA DIVISI BIGETRON BY VITALITY LOLOS EWC 2026 | https://bigetron.gg/news/sejarah-baru-semua-divisi-bigetron-by-vitality-lol/ | https://bigetron.gg/media/thumbnails/aybd4NwwxzbmutQMkjfvaX_size_800x400.jpeg | Bigetron Esports | 13 Jul 2026 | Extra news item | Listing + body verified. |
| BACK 2 BACK CHAMPION : BATTLE of GAMEHERS SEASON 2 | https://www.bigetron.gg/news/back-2-back-champion-battle-of-gamehers-season-2/ | https://bigetron.gg/media/thumbnails/ezSrko9fnC8nv8yxkbCeoD_size_800x400.jpeg | Bigetron Esports | 18 Jun 2026 | Extra news item | Listing + body verified. |
| BACK TO BACK CHAMPIONS! BIGETRON BY VITALITY KEMBALI TAKLUKKAN MDL INDONESIA SEASON 13 | https://bigetron.gg/news/back-to-back-champions-bigetron-by-vitality-kembal/ | https://bigetron.gg/media/thumbnails/fBhmLMXHvh8VNCvicYUw6y_size_800x400.jpeg | Bigetron Esports | 02 Jun 2026 | Extra news item | Listing-verified; body not opened. |
| BIGETRON BY VITALITY BACK TO BACK CHAMPION, IKL SPRING 2026 | https://bigetron.gg/news/bigetron-by-vitality-back-to-back-champion-ikl-spr/ | https://bigetron.gg/media/thumbnails/n2v2YEcp86JRfHqQs5zASm_size_800x400.jpeg | Bigetron Esports | 13 Apr 2026 | Extra news item | Listing-verified; body not opened. |
| BIGETRON CON 2026 | https://bigetron.gg/news/bigetron-con-2026/ | https://bigetron.gg/media/thumbnails/DnbTJBF6v2yUeXsu3FbbeN_size_800x400.jpeg | Bigetron Esports | 18 Feb 2026 | Extra news item | Listing-verified; body not opened. |
| ERA BARU DIMULAI: BIGETRON BY VITALITY UMUMKAN ROSTER DIVISI HOK | https://bigetron.gg/news/era-baru-dimulai-bigetron-by-vitality-umumkan-rost/ | https://bigetron.gg/media/thumbnails/AY4LvgNtytw4sEeoyu9ARK_size_800x400.jpeg | Bigetron Esports | 05 Jan 2026 | Extra news item | Listing-verified; body not opened. |
| Bigetron Esports Resmi Bergabung dengan Team Vitality | https://bigetron.gg/news/bigetron-esports-resmi-bergabung-dengan-team-vital/ | — | Bigetron Esports | 15 May 2025 | Context / about | Body verified via search index; rebrand source. |

**Moonton articles linked from within article #4 but not individually opened** (referenced, not verified): M8 overview https://en.moonton.com/news/388.html; MSC 2026 Paris https://en.moonton.com/news/360.html; Asian Games Nagoya https://en.moonton.com/news/378.html; MCT SEA https://en.moonton.com/news/362.html; Aurora Gaming PH https://en.moonton.com/news/391.html; Selangor Red Giants https://en.moonton.com/news/394.html; MCC S8 https://en.moonton.com/news/393.html; MLBB 10th anniversary https://en.moonton.com/news/372.html.

### Dead links / problems found
- **None of the six outbound tiles on `media.html` were dead.** All returned live official content.
- Facebook `/videos/1580904827122908/` works but canonicalises to `/reel/1580904827122908/` — keep or update; both resolve.
- Facebook thumbnail is a **signed FB CDN URL with an expiry** (`oe=6B021B3F`); do not hard-code it as a long-term `<img src>`. The local copy is durable.
- TikTok page is bot-protected ("Please wait..."), so only the officially-published URL can be confirmed, not the account contents.
- The YouTube channel avatar is square; use one of the landscape video thumbnails for a 16:9 tile.

## On-disk image reuse notes (for the four placeholder tiles)

| Placeholder tile | Recommended image | Source | On-disk reuse guidance |
|------------------|-------------------|--------|------------------------|
| **This is our story** (club video) | `research/assets/media/08-facebook-reel-this-is-our-story.jpg` | Official Facebook OG image of the reel | No good on-disk match. `assets/img/back-to-back.jpeg` is thematically similar (trophy) but is the article graphic, not the reel — do **not** relabel it. |
| **Bigetron TV** (YouTube channel) | `research/assets/media/09-bigetron-tv-video-mpl-s18-maxres.jpg` (landscape, preferred) or `07-bigetron-tv-avatar.jpg` (canonical square avatar) | Official YouTube channel / video | `assets/img/hero.jpeg` is Bigetron team branding and could serve as a last-resort fallback, but it is not a channel image — prefer the official YouTube assets. |
| **All club news** (newsroom) | `research/assets/media/04-bigetron-s17-champion-800x400.jpeg` | Official newsroom article thumbnail | The existing `assets/img/back-to-back.jpeg` could also be reused here, but it is already assigned to the "Back-to-back champions" tile; use the Season 17 thumb to keep tiles distinct. |
| **Setting sights on M8** (Moonton) | `research/assets/media/06-moonton-m8-title-defence.jpg` | Official Moonton article hero | **Direct reuse:** `assets/img/trophy-original.jpg` is the *identical photo* already on disk, so this tile can be filled with zero new download if desired. |

Other on-disk images:
- `assets/img/back-to-back.jpeg` — already correctly used on the "Back-to-back champions" tile; matches the official article hero graphic `5f7368yZ8a9JFGp4Derft5…`. Optionally swap for the higher-res official `01-…webp`.
- `assets/img/hero.jpeg` — currently used for "Dethroning the Sky Kings"; it is Bigetron team art, whereas Moonton article #3 has its own hero (`05-moonton-s17-dethrone-sky-kings.JPEG`). Consider replacing for source accuracy.
- `assets/img/trophy-original.jpg` — identical to Moonton #4 hero; assign to "Setting sights on M8" as above.

## Downloaded files (`research/assets/media/`)

| File | Bytes | Origin |
|------|-------|--------|
| `01-bigetron-back-to-back-1280x640.webp` | 117,968 | bigetron.gg article #1 hero |
| `02-bigetron-back-to-back-800x400.jpeg` | 66,825 | bigetron.gg newsroom listing thumb #1 |
| `03-bigetron-s17-champion-1280x640.webp` | 107,226 | bigetron.gg article #2 hero |
| `04-bigetron-s17-champion-800x400.jpeg` | 57,757 | bigetron.gg newsroom listing thumb #2 |
| `05-moonton-s17-dethrone-sky-kings.JPEG` | 579,197 | en.moonton.com/news/350.html hero |
| `06-moonton-m8-title-defence.jpg` | 384,762 | en.moonton.com/news/397.html hero |
| `07-bigetron-tv-avatar.jpg` | 53,233 | YouTube channel og:image |
| `08-facebook-reel-this-is-our-story.jpg` | 161,454 | Facebook reel og:image |
| `09-bigetron-tv-video-mpl-s18-maxres.jpg` | 206,904 | YouTube video `5q5fNk5l_ig` |
| `10-bigetron-tv-video-roster-s18-maxres.jpg` | 153,929 | YouTube video `Bv03pzBesIc` |

**Full signed Facebook image URL (for reference; expires):**
`https://scontent.fjog13-1.fna.fbcdn.net/v/t51.82787-15/893598679_18471954607190695_3356632289285696130_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a27664&_nc_ohc=jUMdzJZTYDAQ7kNvwEr0W8U&_nc_oc=Adq3hFPraL0U_Wx4cN2JS23DNh5zEPoYgcN1SN5OVcIIbbMG9IP5is3u2SYAbOPgej8&_nc_zt=23&_nc_ht=scontent.fjog13-1.fna&_nc_gid=LD55eGDiI0DshCxWRCr4Iw&_nc_ss=7020f&oh=00_AQQDh_LgtwXM6Mvb6sU7JIc-FGeG0IomwFWigkvRZ-VFCA&oe=6B021B3F`

**Counts:** 6/6 original outbound tiles verified live; 10 official thumbnails downloaded covering 4 placeholder tiles; 21 distinct source URLs recorded as verified or officially published (13 Bigetron news articles + newsroom index, 2 Moonton articles, 1 Facebook reel, 1 YouTube channel, 2 YouTube videos, 3 social channels); 1 social page (TikTok) flagged as bot-protected/uncertain; no dead links.
