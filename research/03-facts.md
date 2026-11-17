# 03 — Fact verification manifest: `matches.html` and `titles.html`

**Verifier:** fact-check subagent · **Checked:** 17 November 2026
**Scope:** the 24-match results rail, the season scorecard numbers, the championship rail and the history timeline.
**Method:** each claim was matched against the live primary/authoritative sources listed below. Liquipedia direct article URLs return HTTP 403 to this client, so Liquipedia content was read through its own MediaWiki API (`api.php?action=parse&prop=wikitext|text`), which returns the same page content. MLBBDex explicitly labels its tournament data as Liquipedia-derived (CC BY-SA 3.0), so MLBBDex and Liquipedia are *not fully independent* confirmations of one another; where both agree, that is recorded as corroboration within the same data lineage. Moonton and bigetron.gg are independent editorial sources.

**Confidence key**
- **High** — stated explicitly by an authoritative/primary source (or arithmetically derived from a verified table).
- **Medium** — supported, but by a single source, a secondary citation, or a source with an internal ambiguity.
- **Low** — editorial framing / not explicitly stated in any source found.
- **Disputed** — sources conflict; do not present as settled fact.

---

## 1. Source register

| ID | Exact source URL | Publisher | What it supports |
|---|---|---|---|
| S1 | https://mlbbdex.com/en/esports/teams/bigetron-by-vitality | MLBBDex (fan project; Liquipedia-derived, CC BY-SA 3.0) | All 24 matches verbatim; series 16–8; games 41–34; per-tournament splits; roster |
| S2 | https://mlbbdex.com/en/esports/mpl-id-season-18 | MLBBDex (Liquipedia-derived) | Full MPL ID S18 regular season + playoffs results; dates; champion; prize pool |
| S3 | https://mlbbdex.com/en/esports/msc-2026 | MLBBDex (Liquipedia-derived) | MSC 2026 dates (Jul 1–Aug 1, 2026), Paris, $3,025,000 pool, all group/knockout results |
| S4 | https://en.moonton.com/news/350.html | MOONTON Games (official), published **2026/06/15** | S17 champion, 4–1 over ONIC, Moreno FMVP, "KINGFINIX", "Trust the Process", BTR+ONIC to MSC, "since inaugural season" |
| S5 | https://en.moonton.com/news/397.html | MOONTON Games (official), published **2026/11/09** | S18 champion, 4–3 over NAVI, **Shogun** FMVP, back-to-back (third team ever), lower-bracket run, Academy third straight MDL ID title (4–0 EVOS Icon), Surabaya playoffs, M8 qualification |
| S6 | https://bigetron.gg/news/pertahankan-gelar-juara-bigetron-by-vitality-cetak/ | Bigetron Esports (club newsroom), **09 November 2026** | S18 4–3 over NAVI; Shogun FMVP; starting five |
| S7 | https://bigetron.gg/news/gelar-juara-masih-di-tangan-bigetron-academy/ | Bigetron Esports (club newsroom), **02 November 2026** | MDL ID S14 title = third consecutive; 4–0 over EVOS Icon; Digimon Digi FMVP; 100% regular-season win rate |
| S8 | https://bigetron.gg/about-us/ | Bigetron Esports (club website) | Founded 28 March 2017; "over 150 national titles and 2 world titles"; PMCO 2019 / PMWL 2020 wording |
| S9 | https://liquipedia.net/mobilelegends/api.php?action=parse&page=Bigetron_by_Vitality&prop=text&format=json (article: https://liquipedia.net/mobilelegends/Bigetron_by_Vitality) | Liquipedia MLBB Wiki | **Approx. Total Winnings: $1,086,275**; acquisition 15 May 2025; both S17 and S18 champion badges; "played as Team Vitality" at MSC 2026 |
| S10 | https://liquipedia.net/esports/api.php?action=parse&page=Bigetron_Esports&prop=wikitext&format=json (article: https://liquipedia.net/esports/Bigetron_Esports) | Liquipedia Esports Wiki | Founded 2017-03-28; 150+ **national** titles + 2 world titles; acquired 15 May 2025; 2020 world title links to **East**, not West |
| S11 | https://liquipedia.net/mobilelegends/api.php?action=parse&page=MPL/Indonesia/Season_17&prop=wikitext&format=json | Liquipedia MLBB Wiki | S17 ran 27 Mar–14 Jun 2026; playoffs 10–14 Jun 2026; **Finals MVP Moreno** (IDR 28m); prize pool IDR 4.86B; Jakarta venues |
| S12 | https://liquipedia.net/mobilelegends/api.php?action=parse&page=MPL/Indonesia/Season_18&prop=wikitext&format=json | Liquipedia MLBB Wiki | S18 ran 14 Aug–8 Nov 2026; playoffs 4–8 Nov 2026; **Finals MVP Shogun** (IDR 28m); 1st prize IDR 1.301B; regular season Jakarta, playoffs Jatim Expo/Surabaya |
| S13 | https://liquipedia.net/mobilelegends/api.php?action=parse&page=MPL/Indonesia/Season_18/Playoffs&prop=wikitext&format=json | Liquipedia MLBB Wiki | Exact playoff match dates/times and per-match MVPs; Grand Final 8 Nov 2026 17:30 ICT, 7 games, MVP Shogun |
| S14 | https://id.wikipedia.org/wiki/Bigetron_Esports | Wikipedia (Indonesian) | Founded 2017 by Edwin Chia; acquired **15 May 2025**; S17 final **14 June 2026**, 4–1 over ONIC at Jakarta International Velodrome; PMCO 2019 Fall Split Global Finals; PMWL 2020 **East** |
| S15 | https://vitality.gg/en-asia/blogs/actualites/team-vitality-accelere-sa-croissance-internationale-avec-l-acquisition-du-club-d-esport-indonesien-bigetron-esports | Team Vitality (primary, cited by S9/S10/S14), dated **2025-05-15** | Acquisition. **Note:** the live URL now redirects to the vitality.gg homepage; the article body is no longer retrievable. The date/title/publisher are taken from the citations in S9/S10/S14. |
| S16 | https://esportsinsider.com/2025/05/team-vitality-acquires-bigetron-esports-interview-mlbb | Esports Insider, **2025-05-15** (per S14 citation; not directly fetched) | Corroborates acquisition date |
| S17 | https://www.pocketgamer.biz/team-vitality-expands-into-southeast-asia-with-bigetron-esports-acquisition/ | PocketGamer.biz, **2025-05-15** (per S14 citation; not directly fetched) | Corroborates acquisition date |

---

## 2. The 24 matches — row-by-row verification

Primary source: **S1** (which reproduces the table exactly, most recent first). Stage/date detail cross-checked against **S2**, **S3** and the Liquipedia playoff bracket **S13**. All 24 rows in `matches.html` match the source data: **24/24 verified, 0 discrepancies in date, opponent, stage, score or result.**

| # | Page row (date / opponent / stage / score / result) | Source verdict | Source |
|---|---|---|---|
| 1 | 08 Nov 2026 · Natus Vincere · Grand Final · 4–3 · Win | ✅ exact. Liquipedia: GF 8 Nov 2026 17:30 ICT, Bo7, MVP Shogun. S1 labels the stage "Playoffs" (a Grand Final *is* a playoff match — cosmetic label difference only). | S1, S2, S5, S6, S13 |
| 2 | 07 Nov 2026 · Team Liquid ID · Playoffs · 4–3 · Win | ✅ exact (lower-bracket final; source lists TLID 3–4 BTR) | S1, S2, S13 |
| 3 | 06 Nov 2026 · Alter Ego · Playoffs · 3–2 · Win | ✅ exact (lower-bracket semi; source lists AE 2–3 BTR) | S1, S2, S13 |
| 4 | 05 Nov 2026 · Team Liquid ID · Playoffs · 1–3 · Loss | ✅ exact (upper-bracket R2; source lists TLID 3–1 BTR) | S1, S2, S13 |
| 5 | 04 Nov 2026 · EVOS · Playoffs · 3–2 · Win | ✅ exact | S1, S2, S13 |
| 6 | 18 Oct 2026 · Natus Vincere · Regular season · 2–0 · Win | ✅ exact | S1, S2 |
| 7 | 17 Oct 2026 · EVOS · Regular season · 2–1 · Win | ✅ exact | S1, S2 |
| 8 | 11 Oct 2026 · Dewa United Esports · Regular season · 2–0 · Win | ✅ exact | S1, S2 |
| 9 | 08 Oct 2026 · Alter Ego · Regular season · 0–2 · Loss | ✅ exact | S1, S2 |
| 10 | 03 Oct 2026 · RRQ Hoshi · Regular season · 2–1 · Win | ✅ exact | S1, S2 |
| 11 | 02 Oct 2026 · Geek Fam ID · Regular season · 2–1 · Win | ✅ exact | S1, S2 |
| 12 | 20 Sep 2026 · ONIC · Regular season · 0–2 · Loss | ✅ exact | S1, S2 |
| 13 | 19 Sep 2026 · Team Liquid ID · Regular season · 0–2 · Loss | ✅ exact | S1, S2 |
| 14 | 12 Sep 2026 · Team Liquid ID · Regular season · 0–2 · Loss | ✅ exact | S1, S2 |
| 15 | 06 Sep 2026 · Alter Ego · Regular season · 0–2 · Loss | ✅ exact | S1, S2 |
| 16 | 05 Sep 2026 · EVOS · Regular season · 1–2 · Loss | ✅ exact | S1, S2 |
| 17 | 29 Aug 2026 · RRQ Hoshi · Regular season · 2–1 · Win | ✅ exact | S1, S2 |
| 18 | 28 Aug 2026 · Natus Vincere · Regular season · 2–0 · Win | ✅ exact | S1, S2 |
| 19 | 23 Aug 2026 · ONIC · Regular season · 2–1 · Win | ✅ exact | S1, S2 |
| 20 | 21 Aug 2026 · Dewa United Esports · Regular season · 2–0 · Win | ✅ exact | S1, S2 |
| 21 | 16 Aug 2026 · Geek Fam ID · Regular season · 2–1 · Win | ✅ exact | S1, S2 |
| 22 | 29 Jul 2026 · Team Falcons PH · MSC 2026 · Knockout stage · 1–3 · Loss | ✅ exact (MSC knockout QF) | S1, S3 |
| 23 | 24 Jul 2026 · Team Falcons PH · MSC 2026 · Group stage · 2–0 · Win | ✅ exact. S1 labels it "Group stage" (the group-stage *upper-bracket semifinal*); consistent with S1's own stage vocabulary. | S1, S3 |
| 24 | 22 Jul 2026 · True Rippers Esports · MSC 2026 · Group stage · 2–0 · Win | ✅ exact (group-stage upper-bracket QF) | S1, S3 |

**Note on naming at MSC 2026:** Liquipedia states the team "will use the Team Vitality name in MSC 2026" and its gallery captions the roster as "Bigetron by Vitality (played as Team Vitality) at MSC 2026" (**S9**). MLBBDex (**S1/S3**) and Moonton (**S4**) use "Bigetron by Vitality"/"BTR". Results are unaffected; if the page ever adds a "team name at event" note, present this as a naming nuance (Medium confidence), not a settled fact.

---

## 3. Season summary / scorecard numbers

All headline numbers on `matches.html` are **exactly confirmed**, and internally consistent with the 24-row table.

| Claim on page | Verified value | Source | Confidence | Note |
|---|---|---|---|---|
| "All 24 recorded matches" / "24 matches, most recent first" | 24 | S1 ("24 matches recorded, most recent first") | High | 21 MPL ID S18 + 3 MSC 2026 |
| "16–8 series" | 16 W – 8 L | S1 ("Series: 16 W – 8 L") | High | Also 14–7 + 2–1 from table |
| "41–34 games" | 41 W – 34 L | S1 ("Games: 41 W – 34 L") | High | Sum of per-series game scores |
| "14–7 MPL ID S18" | 14 W – 7 L | S1 record-by-tournament table | High | 21 series |
| Record by stage — regular season | **10–6 series, 21–18 games** | Derived from S1/S2's 16 regular-season rows; also S1 total (14–7 / 36–31) minus playoffs | High (derived) | Reconciles exactly with the tournament totals in the next rows. |
| Record by stage — playoffs | **4–1 series, 15–13 games** | Derived from S1/S2/S13 (five playoff rows: 3–2 W, 1–3 L, 3–2 W, 4–3 W, 4–3 W) | High (derived) | Includes the Grand Final |
| Record by tournament — MPL ID S18 | **14–7 series, 36–31 games, 54% win rate** | S1 record-by-tournament table | High | "Champion" badge in S1 |
| Record by tournament — MSC 2026 | **2–1 series, 5–3 games, 63% win rate** | S1 record-by-tournament table | High | 8th/knockout-stage exit (S3) |
| Source note: "adapted from Liquipedia data via MLBBDex (CC BY-SA 3.0), which records 24 matches" | Accurate | S1; S2 and S3 both carry the Liquipedia CC BY-SA 3.0 attribution | High | S1 cites Liquipedia revisions: MPL S18 of 15 Nov 2026, MSC 2026 of 14 Nov 2026 |
| Tournament scope dates (useful for a scorecard) | MPL ID S18: **14 Aug – 8 Nov 2026**; MSC 2026: **1 Jul – 1 Aug 2026** | S2, S3, S12 | High | Moonton's S18 report published 2026/11/09 (S5) is the day *after* the final |
| Championship prize (optional headline) | S18 1st place **IDR 1,301,000,000** + FMVP IDR 28,000,000 | S12 | High | S17 1st place was IDR 1,280,000,000 (S11) |

**Correct stage split (recomputed cleanly from S1's 24-row list):**
- MPL ID S18 regular season (16 series): **10 W – 6 L**, games **21 W – 18 L**
- MPL ID S18 playoffs (5 series): **4 W – 1 L**, games **15 W – 13 L**
- MSC 2026 (3 series): **2 W – 1 L**, games **5 W – 3 L**
- Totals: series 16–8, games 41–34 ✅ (matches page)

These figures reconcile exactly with S1's tournament totals: 10+4=14 series and 21+15=36 games in MPL ID S18.

---

## 4. Championship, honours and timeline facts

| Claim | Exact source URL(s) | Publisher | Confidence | Note |
|---|---|---|---|---|
| MPL ID Season 17 champion — BTR beat ONIC 4–1 in the Grand Final | S4 https://en.moonton.com/news/350.html ; S11 | MOONTON Games; Liquipedia | **High** | Moonton headline "dethrone the Sky Kings"; article dated 2026/06/15 |
| S17 was the organisation's **first** MPL ID title | S4; S14 | MOONTON Games; Wikipedia | High | Moonton: "their first MPL Indonesia title in the organisation's history" |
| S17 Finals MVP = **Marcel "Moreno" Sinulingga** | S4; S11 | MOONTON Games; Liquipedia | **High** | Liquipedia lists Finals MVP prize IDR 28,000,000. The site's S17 attribution is correct. |
| S17 introduced the "KINGFINIX" title (Infinix) | S4 | MOONTON Games | High | Moonton: first team crowned with the KINGFINIX title |
| "Trust the Process" was the S17 rallying phrase | S4 | MOONTON Games | High | Direct quote of Moonton's framing |
| BTR was one of the few organisations in MPL ID since its inaugural season | S4 | MOONTON Games | High | Supports `titles.html` "in the league since the beginning" |
| S17 final date (if adding one): **14 June 2026** | S11 (end date 2026-06-14; playoffs 10–14 Jun); S14 ("14 Juni 2026") | Liquipedia; Wikipedia | **Medium** | Moonton article (2026/06/15) and club article (15 Jun 2026) are publication dates, one day later. Do not use 15 June as the match date. |
| MPL ID Season 18 champion — BTR beat Natus Vincere **4–3** in a seven-game Grand Final on **8 November 2026** | S5; S6; S12; S13; S1 | MOONTON Games; Bigetron; Liquipedia; MLBBDex | **High** | Multiple independent confirmations |
| Back-to-back champions; only the **third** team in MPL ID history to do so (after RRQ and ONIC) | S5 | MOONTON Games | High | Useful enrichment — the page does not currently state this |
| S18 Finals MVP = **Dylont "Shogun" Huraihira** | S5; S6; S12; S13 | MOONTON Games; Bigetron; Liquipedia | **High** | Important: **not** Moreno (that was S17) |
| Lower-bracket comeback: BTR lost to Team Liquid ID, then beat Alter Ego, TLID and NAVI | S5; S2; S13 | MOONTON Games; MLBBDex; Liquipedia | High | Moonton explicitly describes the lower-bracket run |
| Bigetron Academy won a **third consecutive MDL Indonesia title** (MDL ID S14), beating EVOS Icon **4–0** | S5; S7 | MOONTON Games; Bigetron | **High** | Two independent sources; club article also notes a 100% regular-season record and Digimon Digi as FMVP |
| "MDL ID three straight" headline | S5; S7 | as above | High | Accurate |
| Recorded winnings ≈ **$1.09M** | S9 (Liquipedia infobox: "Approx. Total Winnings **$1,086,275**") | Liquipedia MLBB Wiki | **High for the figure, Medium for interpretation** | Rounded correctly. Caveat: Liquipedia's tooltip says the figure *includes individual player winnings while representing the team*; it is a community estimate, not an official/audited earnings statement. Prefer wording "≈ $1.09M (Liquipedia estimate)". |
| Bigetron Esports founded **28 March 2017** | S8; S10 | Bigetron (club); Liquipedia Esports Wiki | **High** | Club's own about page: "founded in 28th March 2017". Liquipedia MLBB page separately lists the *MLBB division* as created 2017-12-26 (S9) — see D7. |
| **Team Vitality acquired Bigetron Esports on 15 May 2025** | S9; S10; S14; S15 (cited); S16; S17 (cited) | Liquipedia ×2; Wikipedia; Team Vitality press release (URL now redirects); Esports Insider; PocketGamer.biz | **High** | Year is firmly established as **2025**. The page's yearless "15 May" is a deficiency. |
| "93 1st Places / 150+ Matches / 35+ 2nd–3rd / 15+ Honors" (club about-page stat blocks) | S8 | Bigetron | Medium | Not used on these pages. The "150+ Matches" block conflicts with "over 150 national titles" in the same source — do not lift either without qualification. |
| "over 150 **national** titles and **2 world titles**" (PMCO 2019, PMWL 2020) | S8; S10 | Bigetron; Liquipedia | High for "national titles + 2 world titles"; **Disputed** for the event names | See D2/D3 below. |
| MSC 2026 run: 2–1 in series, reached knockout stage, lost 1–3 to Team Falcons PH | S1; S3; S5 | MLBBDex; Moonton | High | Moonton also reports Indonesian teams finished third at MSC 2026 overall — that is a *regional* result, not a BTR result; don't conflate. |
| M8 World Championship qualification for BTR | S5; S6 | MOONTON Games; Bigetron | High | M8 begins 17 Dec 2026 (MLBBDex esports index), Main Stage in Istanbul, Türkiye |

---

## 5. Discrepancies against the existing pages

**D1 — `titles.html` line 39 / footer: acquisition date is missing its year. [HIGH confidence, fix recommended]**
Page: `<time>15 May</time>` and footer note "The acquisition date is recorded without a year in the cited source."
Fact: **15 May 2025** (S9, S10, S14, S15, S16, S17). The "without a year" caveat is no longer accurate — authoritative sources supply it. Recommend `<time>15 May 2025</time>` and replacing the footer caveat with a dated source credit.

**D2 — `titles.html` line 28: "150+ International titles". [HIGH confidence, fix recommended]**
Sources: club about page (S8) and Liquipedia Esports Wiki (S10) say **"over 150 national titles and two (2) world titles"**. The page's "150+ International titles" reverses the meaning. Recommend "150+ national titles + 2 world titles (Liquipedia/club claim)". Also note S8's separate stat block reads "150+ Matches", so the club page itself is internally ambiguous — present it as a club-claimed tally, not a verified count.

**D3 — `titles.html` line 28: the two world-title event names are garbled. [MEDIUM–DISPUTED, fix recommended]**
Page: "2019 PUBG Mobile World Championship and 2020 PMCO World League West".
Sources:
- S8 (club): "PUBGM world championship (PMCO) in 2019, and PUBG Mobile World League: West in 2020".
- S10 (Liquipedia): links to *PUBG Mobile Club Open/Fall/2019* and *PUBG Mobile World League/2020/**East***.
- S14 (Wikipedia, citing ANTARA): *PMCO Fall Split Global Finals 2019* and *PMWL Season Zero **East** (2020)*.
Recommendation: "2019 PUBG Mobile Club Open (PMCO) Fall Split Global Finals and 2020 PUBG Mobile World League (PMWL) Season Zero — East". Flag the club/Liquipedia "West vs East" split in a source note rather than picking one silently.

**D4 — `matches.html` Grand Final stage label. [COSMETIC, no fix required]**
Page says "MPL ID S18 · Grand Final"; S1's match list says "MPL ID S18 · Playoffs". The Liquipedia bracket (S13) places it in the playoff bracket as the Grand Final. Both are true; no factual error.

**D5 — Scope trap: MLBBDex says "Titles: 1". [NO ERROR on the page, but document it]**
S1's team page reports 1 title because its dataset covers only MPL ID S18 and MSC 2026. `titles.html`'s "S17 + S18 champions" is correct via S4/S5/S9 — but must not be attributed to MLBBDex alone. The page's source line ("Liquipedia-derived data via MLBBDex") currently sits underneath the results rail only, which is fine.

**D6 — Stage-split figures documented for downstream use. [NO ERROR on the page]**
The page only shows overall series/game records. The verified stage split (regular season 10–6 / 21–18; playoffs 4–1 / 15–13; MSC 2–1 / 5–3) is new, derived information for the scorecard rail — not a correction to existing site data.

**D7 — Founding date nuance. [NO ERROR on the page; note for future copy]**
"28 March 2017" is the organisation's founding date (S8, S10). Liquipedia's MLBB wiki separately dates the MLBB division's creation to 26 December 2017 (S9). `titles.html` correctly says "Bigetron Esports founded", not "MLBB team founded".

**D8 — "All Bigetron social channels are rebranded…" (line 39). [LOW/MEDIUM — not explicitly verified]**
Sources confirm the new name and the acquisition, but no source found explicitly says *all* social channels were rebranded. Instagram still uses the `@bigetronesports` handle under the name "Bigetron by Vitality". Soften to "competes under the name Bigetron by Vitality".

**D9 — "joining the wider Vitality network while keeping the Indonesian identity and the red" (line 39). [LOW — editorial framing]**
Marketing phrasing, not a sourced factual claim. Acceptable as voice, but do not present as a documented fact.

**D10 — Source metadata discrepancy (not on the pages). [DOCUMENT]**
S2 lists MPL ID S18's location as "Jakarta, Indonesia"; Liquipedia (S12) and Moonton (S5) say the **regular season was in Jakarta and the Playoffs at Jatim Expo, Surabaya** (Moonton: 13,000+ fans across five playoff days, first return in eight years). If a venue is ever added, use Liquipedia/Moonton, not MLBBDex's single "Jakarta" field.

---

## 6. Unverifiable / not-claimed-by-sources items

1. **Official audited all-time prize money.** No official figure exists in the sources found. The only number is Liquipedia's *approximate* $1,086,275 (S9), explicitly including individual player winnings earned while representing the team. Use "≈ $1.09M (Liquipedia estimate)"; never "official winnings of $1.09M".
2. **A verified count of "150+" titles.** S8's claim is self-reported and internally inconsistent with its own "150+ Matches" stat block; no independent enumeration was found. Treat as club-claimed.
3. **"All social channels rebranded" / "keeping the red"** — no explicit source statement (see D8/D9).
4. **Exact S17 Grand Final date.** 14 June 2026 is the best-supported date (S11/S14); the 15 June dates in S4/S6 are publication dates. Confidence Medium — if the site adds a date, prefer "14 June 2026" or just "June 2026", as it currently does ("Season 17 · 2026").
5. **Team Vitality's own press-release article body.** S15's URL now redirects to the vitality.gg shop homepage; its date/title are available only through third-party citations (S9/S10/S14). Mark as "primary source cited but currently unavailable at URL".
6. **S16/S17 (Esports Insider, PocketGamer.biz).** Cited by Wikipedia with a 2025-05-15 date but not fetched directly during this check — corroboration only, Medium confidence.
7. **Naming at MSC 2026.** Liquipedia says the roster competed as "Team Vitality" at MSC 2026 (S9); MLBBDex and Moonton call it BTR. Results identical; do not assert either name as the official event name without further evidence.

---

## 7. Dates-without-year flags

- `titles.html` line 39 "15 May" — **flagged**; year established as **2025** (D1).
- Liquipedia timeline entries inside year tabs (e.g. "December 26th") are yearless in isolation; if quoted, carry the tab's year with them.
- Moonton article dates (2026/06/15, 2026/11/09), Bigetron newsroom dates (09 November 2026, 02 November 2026, 15 Jun 2026), MLBBDex tournament dates and Wikipedia dates all include years — no other yearless source dates were used in this manifest.

---

## 8. Bottom line for the site owner

- **matches.html:** fully accurate. All 24 rows and all three headline scorecard figures (16–8, 41–34, 14–7) are confirmed verbatim by the cited data. No changes needed.
- **titles.html:** three substantive fixes — (1) add **2025** to the acquisition date and retire the "no year in source" caveat; (2) change **"150+ International titles"** to the club/Liquipedia claim **"150+ national titles + 2 world titles"**; (3) correct the two world-title names (2019 PMCO Fall Split Global Finals; 2020 PMWL Season Zero **East**, with the West/East source conflict noted). Optional enrichment: S18 FMVP **Shogun**, back-to-back as only the **third** MPL ID team to do it, and "≈ $1.09M *(Liquipedia estimate)*" for winnings.
- No invented numbers were found on these two pages; every quantitative claim traces to a real source.
