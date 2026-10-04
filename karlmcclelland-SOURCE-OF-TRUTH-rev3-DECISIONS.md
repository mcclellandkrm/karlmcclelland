# karlmcclelland.com (MDS) — Rev 3 Decisions

**Date:** 4 October 2026
**Status:** SETTLED. These override `karlmcclelland-SOURCE-OF-TRUTH.md` rev 2 wherever they conflict. Do not reopen any item below unless Karl explicitly says so. If a session finds an older file or chat that disagrees, this file wins.

**Instruction for any Claude session or Claude Code run:** read this file first. Do not ask Karl to re-confirm anything listed as settled.

---

## 1. Working copy

- The latest version is the clone at `C:\Dev\karlmcclelland` (laptop), synced via GitHub.
- The desktop files are older. Do not treat them as the source.

## 2. Portfolio / Selected work (settled)

- **The Cottonmount replaces Suitor Brothers** as the featured work. Cottonmount is the lead (and currently only) full-walkthrough card.
- **Suitor Brothers is NOT a portfolio card.** Their tour is a Google Street View tour only. Do not present it as an interactive walkthrough.
- **There is no Dublin Wine Merchant. There never has been.** Rev 2 was wrong. Delete every trace from the site, data files (`src/data/portfolio.ts` or similar), `index.astro` and `clients.astro`.
- A **Northern Ireland wine retailer** exists, with some good single 360 panos. If used, it is a secondary item labelled honestly as a "360° panorama", not a walkthrough. Name and permission to feature: TBC.
- No fictional or placeholder case studies, ever.

## 3. Suitor Brothers testimonial (settled)

- **The Chris Suitor testimonial stays.** He is very well known in Belfast and NI, so the name carries weight.
- Pair it with the figure **"1M+ views on Google"** (Suitor Brothers tour). Keep it framed as views, not customers or sales.
- Keep a screenshot of the real view count as evidence.
- Placement: in the proof section, directly under the logos.

## 4. Proof signals

- Stats: **60M+ views across Google / 10+ years / 80+ businesses.** Never 150+.
- Show 6 client logos, not all 11 (suggested: Toyota, SSE, Grand Opera House, B&Q, Hyundai, Skoda).
- Show the Google Street View Trusted credential properly (badge), not just claimed.
- Proof sits immediately after the hero.

## 5. Language

- "360° walkthrough" everywhere. "Virtual tour" only in meta keywords.
- Known leftovers to fix: footer ("360° virtual tours"), getting-started section ("virtual walkthrough", "completed tour").

## 6. Homepage flow (adopted from design feedback)

1. Hero: headline "Help customers choose you before they arrive." Supporting line: "Real photography and interactive 360° walkthroughs for businesses worth seeing properly." One primary CTA: "View selected work". Cottonmount image stays in the hero for now.
2. Proof strip: stats, 6 logos, Suitor testimonial with 1M+ views, Google badge.
3. Why it matters: keep the "no guesswork" idea, cut to 2 or 3 sentences.
4. Selected work: Cottonmount as a single large lead card. Remove the category count cards ("1 example", "2 examples") and the "Restaurants, Bars & Hotels" label.
5. What MDS does: one quiet line only, no service-card grid.
6. Studio: existing copy. Hide the "Portrait pending" placeholder until the real photo exists.
7. How it starts: keep the WhatsApp-first steps. Plain charcoal background instead of the busy shop photo. Horizontal timeline on desktop, stacked on mobile.
8. Footer: walkthrough language.

Visual rules: Playfair Display + Inter, precious-metals palette. Bronze as accent only. 20 to 30% more whitespace. Small mono labels only where useful. Subtle motion only.

## 7. Still open (Karl's call)

- Pricing tiers (£599 / £899 / £1,499): not in the new flow. Quiet line under Selected work, or on enquiry only?
- Real Karl-plus-kit hero or studio portrait: not yet shot.
- NI wine retailer: name, and permission to feature.
- Real stills for the work cards.
- Email signature and Apps Script outreach templates still carry "virtual tour" wording.

## 8. Corrections to rev 2 (so they are not reinstated)

- §0 and §5 (Portfolio): rev 2 lists Suitor Brothers and a "Dublin wine merchant" as the two real entries. Both are wrong now. See section 2 above.
- §9 kickoff prompt: ignore the line "only Suitor Brothers and the Dublin wine merchant are real".
