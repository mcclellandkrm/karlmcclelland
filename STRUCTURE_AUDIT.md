# STRUCTURE_AUDIT.md

**Purpose:** Written audit of the existing Astro project, produced before any destructive change, per `CLAUDE_PROJECT_BRIEF.md`. Nothing listed below has been deleted. Classifications are KEEP / REFINE / REBUILD / REMOVE per the brief's instruction.

---

## 0. Flag: two conflicting briefs exist in this repo

`karlmcclelland-SOURCE-OF-TRUTH.md` and `karlmcclelland.com-site-copy-working-document.md` describe a **different business** to `CLAUDE_PROJECT_BRIEF.md`:

| | Old (SOURCE-OF-TRUTH) | New (CLAUDE_PROJECT_BRIEF) |
|---|---|---|
| Identity | Karl McClelland, personal "get found" brand | McClelland Design Studio, the business |
| Structure | Single page, anchor-nav | Multi-page: `/work /projects /thinking /clients /studio /contact` |
| Positioning | 360° walkthrough is THE spearhead, everything else supporting | No single spearhead — "we help businesses present themselves properly online," walkthroughs are one capability among several |
| Services | Led with £599/£899/£1,499 pricing tiers | "Do not lead with services... should emerge naturally through the work" |
| Palette | "Precious Metals" (rose gold/bronze/onyx) | Materials palette (Warm Limestone, Charcoal, Stone Grey, Deep Forest, Natural Oak, Soft Bronze, Muted Copper) |
| Fonts | Playfair Display + Inter, settled/final | "NOT yet finalised... flexible system" |
| Brand references | Porsche 911 silhouette, luxury/precious-metals | Porsche, Jil Sander, Leica, architecture, boutique hospitality, editorial |

`CLAUDE_PROJECT_BRIEF.md` states it is "the primary authority for all future design and development decisions," and this task explicitly directs work toward it. **Treating it as authoritative; the SOURCE-OF-TRUTH docs are stale.** Recommend Karl/ChatGPT mark those two files superseded (e.g. rename with a `SUPERSEDED-` prefix, or add a one-line banner) rather than deleting them — they still contain real, reusable facts (contact details, credentials, client list) carried forward below. Not doing this myself since it's a content decision, not a structural one.

---

## 1. Component audit

| Component | Verdict | Why |
|---|---|---|
| `Layout.astro` | **KEEP** | Clean `<head>`/meta/SEO shell + scroll-reveal observer. Reusable as-is; new `MainLayout.astro` composes on top of it rather than replacing it. |
| `Navigation.astro` | **REFINE (later)** | Anchor-based (`#offerings`, `#work`) — correct for the current single-page home, wrong for real routes. Left untouched; superseded for new pages by `SiteHeader.astro`. Revisit once the homepage itself is redesigned. |
| `Hero.astro` | **KEEP (for now)** | Working, uses a flagged `TODO(Karl)` placeholder image (pre-existing, not introduced by this pass). Content ("Bespoke 360° Walkthroughs") is walkthrough-spearhead language that will need a rewrite pass once ChatGPT settles Studio-level hero copy — not done here, no redesign requested. |
| `Proof.astro` | **REFINE (later)** | Real, legitimate content (stats, Google credential, testimonial) but structurally monolithic — stats row, badge, logos and testimonial are one block. `QuoteBlock.astro` now exists as the reusable extraction for the testimonial half; a future pass can recompose `Proof.astro` from smaller pieces. |
| `Offerings.astro` | **REBUILD candidate — flagged, not touched** | Three-tier SaaS-style pricing table with a "MOST POPULAR" badge and a dark "cinematic fog" background. This is the clearest conflict with the new brief: "Do not lead with services," "Technology should never be the headline," and the brand-position rule against reading as "a tech agency." Not in the new nav at all. Recommend Creative Director decide whether pricing survives anywhere, and if so, in what form — not a call I'm making unilaterally. |
| `Portfolio.astro` / `PortfolioCard.astro` | **REFINE → superseded by new schema** | Sound pattern (data-driven cards), and it's the direct ancestor of `ProjectCard.astro` + the new `work` content collection. Left in place since it still drives the current homepage; the 2 real entries have been migrated (not moved) into `src/content/work/`. |
| `Process.astro` | **KEEP (relanguage later)** | Solid 3-step structure, dark-section styling is heavier than the new editorial/architectural direction but not gimmicky. Content needs a copy pass, not a rebuild. |
| `Contact.astro` | **KEEP** | Real, working Formspree submission + cal.com booking + real contact details. Reused as-is inside the new `/contact` route — this is exactly the "preserve existing working code" case. |
| `Footer.astro` | **REFINE (later)** | Real content (LinkedIn, credential line, contact). Anchor-based Quick Links, "Karl McClelland" copyright framing. Superseded for new pages by `SiteFooter.astro`, which points at real routes and frames the copyright as the Studio per the brief's closed decision ("McClelland Design Studio ... is the business"). |
| `ClientLogos.astro` | **REBUILD → done as `ClientLogoGrid.astro`** | Real, legitimate logo set (11 real clients) — kept entirely. The auto-scrolling infinite marquee is the part that doesn't survive: the brief is explicit ("Never loud. Never flashy. Never gimmicky."), and a self-animating carousel is a stock "agency site" trope. `ClientLogoGrid.astro` is a static responsive grid with the same real assets and alt text, no motion. |
| `CursorFollow.astro` | **REMOVE candidate — flagged, not deleted** | Custom cursor-follow ring. This is a textbook "tech agency" flourish and reads as a gimmick under the new brand position (explicitly NOT a tech agency; "never gimmicky"). Recommend removal once confirmed, but leaving classification to a real decision rather than deleting unilaterally. |
| `data/portfolio.ts` | **KEEP, not yet deprecated** | Still powers the live homepage `Portfolio.astro`. The 2 real entries now also exist in `src/content/work/` under the new schema. Once the homepage migrates to the new components, this file becomes redundant and can be removed — not yet. |

---

## 2. Styles / config audit

| File | Verdict | Notes |
|---|---|---|
| `tailwind.config.mjs` | **REFINE, extended not replaced** | Existing `brand`/`accent`/legacy `bronze`/`amber` tokens still drive every untouched component — removing them now would break the live site. Added a new `material` token namespace alongside (see §5) for new work. Consolidation is a future cleanup once old components are migrated or removed. |
| `astro.config.mjs` | **KEEP** | Static output, Tailwind integration, correct `site` URL. No issues. |
| `global.css` | **KEEP** | Sound base layer (fluid type via `clamp()`, scroll-reveal utility with `prefers-reduced-motion` handled, dark-section helper). Font `@import` works but is a network-blocking pattern — worth switching to `<link rel="preload">` in `Layout.astro` for performance in a future pass; not done here as it's a perf micro-opt, not structural. |
| Typography (Playfair Display + Inter + JetBrains Mono) | **KEEP, explicitly provisional** | Per the brief, typography is not finalised. Left as-is (already centralised in one `fontFamily` block, so it's a one-file change later) and annotated with a comment marking it temporary. Not redesigning around a font per instructions. |

---

## 3. New route structure

```
/                → unchanged (existing single-page home; out of scope this pass)
/work            → index.astro (listing) + [slug].astro (detail)
/projects        → index.astro (listing) + [slug].astro (detail)
/thinking        → scaffold only (no content schema requested yet)
/clients         → real logo grid + testimonial
/studio          → scaffold, placeholder copy clearly marked for Creative Director
/contact         → wraps the existing, working Contact.astro
```

`/work` vs `/projects` is not defined anywhere in the brief — both are new nav items with no stated distinction. Rather than invent the distinction, both routes read from one flexible `work` content collection filtered by a `section` field, so entries can be assigned either way once ChatGPT/Karl define what separates them. Flagging this as an open question, not deciding it.

## 4. Content schema (`src/content.config.ts`)

One `work` collection (Astro Content Layer API) covering both `/work` and `/projects`:

- `title`, `client?`, `section: 'work' | 'projects'`, `category: string[]` (capability tags — Walkthrough, Photography, Website, etc., so services "emerge through the work" rather than a menu)
- `location?`, `summary`, `externalUrl?`
- `heroImage?`, `gallery: { image, alt }[]` (alt text required per entry — accessibility)
- `quote?: { text, attribution, role? }`
- `publishDate`, `featured`, `draft`

The 2 real entries (Suitor Brothers, Wine Merchant) are migrated into `src/content/work/*.md` under this schema — no fictional entries added, matching the standing "zero fake case studies" rule.

## 5. Design tokens — materials palette

Added as a new `material` namespace in `tailwind.config.mjs`, additive to the existing palette:

- `material-limestone` — Warm Limestone
- `material-charcoal` — Charcoal
- `material-stone` — Stone Grey
- `material-forest` — Deep Forest
- `material-oak` — Natural Oak
- `material-bronze` — Soft Bronze
- `material-copper` — Muted Copper

New components (`SiteHeader`, `SiteFooter`, `PageIntro`, `ProjectCard`, `ProjectHero`, `ProjectGallery`, `ClientLogoGrid`, `QuoteBlock`, `CTASection`) are built exclusively from these tokens, following the brief's colour rule: the interface stays quiet (limestone/charcoal/stone-grey do the work), bronze/copper are restrained accents only (links, focus states, dividers) — never large colour blocks.

## 6. What was deliberately NOT done

- No existing component was edited or deleted.
- No new marketing copy was invented for `/studio` or `/thinking` beyond structural placeholders clearly marked as such — copy is a Creative Director call.
- No decision was made on `Offerings.astro`'s fate, or on removing `CursorFollow.astro` — both flagged above for a real decision.

## 7. Homepage repurposed (update — same day, second pass)

`index.astro` has now been rebuilt as a scaffold on `MainLayout`, following the structural pattern in the reference mockup Karl supplied (hero → selected work → featured project spotlight → selected clients → studio split → CTA → footer). Content rules followed:

- Only real, migrated content used: the 2 real `work` entries (Suitor Brothers Menswear, Wine Merchant) and the 11 real client logos via `ClientLogoGrid`. The mockup's own placeholder businesses (The Pig, Pangbourne College, H.R. Owen, Jupe's, Equinox, "Suitor Brothers Funeral Directors") and placeholder location (Poole, Dorset) were **not** carried over — they're demo content in that mockup, not real facts, and would have violated the standing zero-fake-case-study rule and the real Belfast/NI location on file.
- Nowhere real photography doesn't exist yet, the page shows a plain labelled placeholder panel rather than reaching for more stock imagery (the brief rules out stock photography outright).
- `CTASection.astro` gained an optional `tone` prop (`charcoal` | `forest`) so the closing band could use the deep-forest material tone from the mockup — the only component change this pass.
- Verified in-browser (Playwright screenshot against the dev server): `/`, `/work`, `/clients` all render as intended, zero console errors.

**Now orphaned as a result** (still present on disk, not deleted — no git repo in this project, so there's no cheap undo if that turns out to be wrong):
`Hero.astro`, `Proof.astro`, `Offerings.astro`, `Portfolio.astro`, `PortfolioCard.astro`, `Process.astro`, `Navigation.astro`, `Footer.astro`, `CursorFollow.astro`, `ClientLogos.astro`, `data/portfolio.ts`. None of these are imported by any route anymore (`Contact.astro` is the one exception — still live, reused on `/contact`).

Recommend two follow-ups, both Karl's call rather than something to do unilaterally:
1. **Initialise git** before any further destructive work — right now there's no revert path if a deletion pass turns out to be wrong.
2. Once confirmed safe to lose, either delete the orphaned files above or move them to an `_archive/` folder for reference.
