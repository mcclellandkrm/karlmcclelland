# karlmcclelland.com (MDS): Rev 3.1 Decisions

**Date:** 5 October 2026 (Rev 3.1, supersedes Rev 3 of 4 October)
**Status:** SETTLED. Do not reopen any item below unless Karl explicitly says so.

**Instruction for any Claude session or Claude Code run:** read this file first. Do not ask Karl to re-confirm anything listed as settled. Do not invent branding, add decorative agency-style sections, use stock or AI imagery, or reopen strategy. Your job is implementation.

## 0. Order of authority

1. `CLAUDE_PROJECT_BRIEF.md`: strategic direction (positioning, tone, desired reaction).
2. This file: specific content and design decisions. Where it is more specific than the Brief, this file wins.
3. `karlmcclelland-SOURCE-OF-TRUTH.md` (rev 2): factual reference only (contact details, credentials, verified numbers). Ignore its portfolio, hero and kickoff-prompt content.
4. `TOUR_INVENTORY.md`: which tours go on the site. Check it before adding or removing any work entry.
5. Any older file, chat or pasted note that disagrees with the above is stale.

## 1. Positioning (summary of the Brief)

- MDS is a calm, architectural, editorial studio that helps businesses present themselves properly online.
- Not positioned as a photography company, a walkthrough company, a tech agency or a generic marketing agency.
- Desired reaction: "Imagine if our business looked like this", then "We should give this guy a call."
- Services stay subordinate. No leading with services or pricing tiers.

## 2. Working copy

- **GitHub is the source of truth:** `github.com/mcclellandkrm/karlmcclelland`, branch `design-studio-scaffold`. Any machine (PC, laptop, a cloud Claude session) pulls from there and pushes back.
- Local clones: `C:\Dev\karlmcclelland` (laptop). Older desktop copies (e.g. `D:\PROJECTS_ROOM\...`) must be pulled before use, never treated as the source.
- This file lives in the repo root and is referenced from `CLAUDE.md`, so every Claude Code run reads it.

## 3. Portfolio / Selected work

- **The Cottonmount, Mallusk is the featured work.** Lead (and currently only) full-walkthrough card.
- **Suitor Brothers is a Google Street View tour, not an interactive walkthrough.** Not a work card (entry set to draft). The testimonial and 1M+ views appear in the proof strip and on /clients. Whether it later returns as a secondary retail entry, labelled honestly as a Street View tour, is Karl's call (see section 10).
- **There is no Dublin Wine Merchant and never has been.** "Dublin" removed everywhere. Do not reinstate.
- The **Northern Ireland wine retailer** is real (single 360 panos on walkinto.in). Its entry `src/content/work/wine-merchant.md` stays as a **draft** with location Northern Ireland, labelled "360° panorama", not a walkthrough. Publish only once Karl confirms the name and permission to feature.
- Sector-based work navigation. No visible category count until a sector has three or more examples. On the homepage, sector navigation appears once two or more sectors have published work.
- No fictional or placeholder case studies, ever.

## 4. Proof signals

- Stats: **60M+ views across Google / 10+ years / 80+ businesses.** Never 150+.
- Six client logos on the homepage: Toyota, SSE, Grand Opera House, B&Q, Hyundai, Škoda. Full set on /clients.
- **Chris Suitor testimonial stays**, paired with **"1M+ views on Google"** (framed as views, not customers or sales). Keep a screenshot of the real view count as evidence. Placed directly under the logos.
- **Google Street View Trusted credential stays.** Karl remains a Trusted partner and holds the badge and publishing tools. Google has stopped onboarding new Trusted photographers and Street View publishing is now open to anyone with a 360 camera, so:
  - Show the badge in the proof strip.
  - Frame it by what it enables (publishing, updating and removing imagery on Google Maps and Street View on a client's behalf), not by exclusivity.
  - Do not claim it is new, rare or currently awarded.
- Proof sits immediately after the hero.

## 5. Language

- "360° walkthrough" in headlines and body. "Virtual tour" only in meta titles, descriptions and keywords (SEO), never as the primary message.
- No em dashes in visible copy.

## 6. Homepage structure (frozen; built 5 Oct 2026, assess before designing new pages)

1. **Hero:** headline kept exactly: **"We help businesses present themselves properly online."** Supporting line: "Real photography and interactive 360° walkthroughs for businesses worth seeing properly." One primary CTA: "View selected work". Cottonmount visual (click-to-load walkthrough with poster).
2. **Proof:** stats, six logos, Chris Suitor quote with 1M+ views, Google Trusted credential.
3. **Why it matters:** the "no guesswork" idea, two or three sentences.
4. **Work:** sector navigation (once there is a choice), then real work only. Cottonmount as a single large lead card. No count cards, no sector label on the lead card.
5. **What MDS does:** one quiet line: "Alongside walkthroughs: commercial photography, aerial work and websites built to make the right first impression." No service-card grid.
6. **Studio:** Karl's first-person copy ("Behind the studio."). No portrait block until a proper photo of Karl exists; a real photo of Karl is a priority shot.
7. **How it starts:** WhatsApp-first three steps on a plain charcoal background. Horizontal on desktop, stacked on mobile.
8. **Contact / footer:** walkthrough language, no "virtual tour".

## 7. Visual rules

- Quiet, architectural, crafted, editorial. Each section does one job.
- Materials palette (`material.*` tokens). Bronze as accent only.
- 20 to 30% more whitespace than the pre-Rev 3 build.
- Small mono labels only where useful. Subtle motion only.
- **Typography is not fixed.** Playfair Display + Inter is the current working system, not a locked part of the brand. Keep it swappable via tokens (`tailwind.config.mjs` fontFamily).
- Real imagery only. No stock, no AI imagery, no fake work.

## 8. Implementation approach

- Component audit lives in `STRUCTURE_AUDIT.md` (Keep / Refine / Rebuild / Remove). Retain valuable architecture.
- Apply sections 3 to 7. Do not add sections that are not in section 6.

## 9. Asset checklist

- [x] Cottonmount hero still (`src/assets/work/cottonmount-bar.jpg`)
- [x] Cottonmount working embedded walkthrough
- [ ] More Cottonmount project imagery for the project page gallery
- [ ] Six client logos: in place, but check the SSE file (currently the SSE Arena lockup) and the Grand Opera House file (renders faint)
- [ ] Screenshot evidencing Suitor Brothers 1M+ Google views
- [ ] Google Street View Trusted badge, official artwork (Street View mark used as a stand-in)
- [ ] Proper Karl portrait or Karl-at-work image
- [ ] NI wine retailer: correct name, location, permission status
- [ ] Clean inventory of every approved tour and pano, organised by sector (`TOUR_INVENTORY.md`)
- [ ] Real stills for further work cards

## 10. Still open (Karl's call)

- Pricing tiers (£599 / £899 / £1,499): quiet line under Work, or on enquiry only?
- Suitor Brothers as a secondary retail entry (labelled as a Street View tour), or testimonial only?
- NI wine retailer: name and permission.
- Email signature and Apps Script outreach templates: still carry "virtual tour" wording.

## 11. Corrections (so they are not reinstated)

- Rev 2 §0 and §5: Suitor Brothers and a "Dublin wine merchant" as the two real portfolio entries. Wrong. See section 3.
- Rev 2 §9 kickoff prompt: ignore "only Suitor Brothers and the Dublin wine merchant are real".
- Rev 3 hero headline "Help customers choose you before they arrive.": replaced by the original headline (section 6).
- Rev 3 "Playfair Display + Inter" as fixed: now flexible (section 7).
- Any note saying the Google Trusted programme has ended or that the badge must be removed: wrong. See section 4.
