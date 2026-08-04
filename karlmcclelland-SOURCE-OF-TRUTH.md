# karlmcclelland.com — Rebuild Source of Truth

> [!WARNING]
> LEGACY STRATEGY DOCUMENT
>
> This file reflects the previous direction for karlmcclelland.com.
> It has been superseded for brand, positioning, navigation, page structure,
> colour and design decisions by `CLAUDE_PROJECT_BRIEF.md`.
>
> Continue to use this file only for verified facts, statistics, credentials,
> client names, contact information and operational details unless those are
> explicitly replaced elsewhere.

**Last updated:** 29 July 2026 (rev 2 — build complete, world-class standard + hero direction added)
**Purpose:** The single reference for the karlmcclelland.com rebuild. Every decision about positioning, language, content, and build lives here. If another chat, a Claude Code session, or a future you contradicts this, this document wins until it's deliberately updated. Written to prevent the "many sources, scattered decisions" problem.

---

## 0. Build status (as of rev 2)

**The Astro rebuild is COMPLETE and verified.** Location: `website-karlmcclelland-astro`. `npm run build` produces crawlable static HTML in `dist/` (confirmed — no more empty `<div id="root">`). Deploy by FTP'ing the `dist/` folder up over the old site when happy.

Verified against this brief:
- Stats corrected to 60M+ / 10+ / 80+ (no "150+").
- "Virtual tour" appears exactly once, in meta keywords only — all headline/body copy is "360° walkthrough".
- Fictional portfolio items and the Trips section are gone from the codebase (not commented out — deleted).
- Portfolio is data-driven (`src/data/portfolio.ts` + reusable `PortfolioCard.astro`), only the 2 real entries with real `walkinto.in` links.
- Real content carried: Suitor Brothers testimonial, all 11 client logos, £599/£899/£1,499 pricing, Formspree (`myzknydd`), cal.com booking, contact details.
- Design system ported: Playfair Display + Inter, precious-metals palette, `.btn-primary`/`.metal-overlay`, `ease-luxury`. Verified via Playwright screenshots, zero console errors.
- Nav links fixed to real sections (Offerings/Work/Process/Contact), desktop + mobile.

**Judgment calls made during the build (accepted):**
1. **Tailwind bug found & preserved-as-live.** The old `tailwind.config.js` had duplicate `fontSize`/`spacing` keys that silently overwrote each other, so the custom `xs`–`9xl` letter-spacing scale never actually shipped on the live React site. The Astro build replicates the *actual live behaviour*, not the broken intent — so the type looks like the site you've really had. Reinstating that letter-spacing scale is now a *deliberate future choice*, not a bug to fix (see §12).
2. **Portfolio background images dropped.** Even the 2 real listings used generic Unsplash stock (not real photos of those businesses) — same credibility risk the doc flags for fakes. Cards now lead with copy + a "View walkthrough" link. Real stills slot in when captured.
3. **DM Sans dropped, Inter-only** — per this doc's own lean toward consolidation.

---

## 1. The one-line decision

**karlmcclelland.com is Karl's personal "get found" brand.** It helps local businesses get found and chosen. The spearhead capability is the 360 walkthrough (real photography, published to Google). Photography, drone, and web are supporting services layered around it.

This is deliberately distinct from **360Spaces**, which stays the polished corporate/agency face. Same underlying skills, different buyer, different tone: 360Spaces is the agency, karlmcclelland.com is Karl the person — the Belfast bloke who turns up and does the work.

**Discipline rule:** the site leads with ONE hero capability (the walkthrough) and lists the rest as supporting. It must never open as a flat "tours, photography, drone, websites and more" list — that reads as jack-of-all-trades and converts nobody. One spearhead, supporting cast. This also keeps SEO focused on a single primary topic.

---

## 2. The language rule (applies everywhere, no exceptions)

**Retire "virtual tour" as the lead term.** "Virtual" implies imaginary / CGI / a representation. Karl's entire value is that it's REAL photography of the actual building. The word undercuts the product and has made every pitch a hard sell.

**Primary terms going forward:**
- "360° walkthrough" / "360 walkthrough"
- "real photo walkthrough"
- "Google Street View walkthrough" (when the Google/Street View credential is the point)

**Where "virtual tour" MAY still appear (sparingly):**
- One place in the page's hidden SEO keywords, because people still search the phrase. It can live in meta keywords / a single body mention for search-matching, but never as the headline promise.

**The gatekeeper test:** the first line a receptionist/PA/office manager reads must make them think "the boss needs to see this," not "sales spam." Lead with the outcome (getting found, getting chosen, filling desks/tables/rooms), not the mechanism.

---

## 3. Build decision

**Rebuild in Astro.** Reasons:
- **SEO:** the current Vite/React SPA ships an empty `<div id="root">` and renders in-browser. Google's crawler (and web fetchers) get a near-empty shell — proven, we literally couldn't read the live site. For a "get found" business this is the wrong tool by definition. Astro outputs static HTML: fully crawlable.
- **Deployment:** Karl deploys by FileZilla/FTP (not Netlify git-deploy). Astro builds to plain static files that upload exactly the same way. No workflow change.
- **Extensibility:** Astro components let the portfolio/tour cards be a reusable template — adding a new tour becomes copy-one-card-and-fill-it-in. Karl plans to be "super active" adding tours (Portugal Airbnb shoots 2026/27), so expandable-by-design matters.

**Keep the existing look** — Karl is happy with fonts, colours, logo. Carry the design system across faithfully (see §6).

**Where to do the build:** NOT in the chat app. Use **Claude Code in VS Code**, pointed at the real repo (`D:\PROJECTS_ROOM\01_Current_Projects\website-karlmcclelland.com\karlmcclelland`), running the dev server for live preview. This doc is the brief you hand it. Kickoff prompt in §9.

---

## 4. Corrected facts (USE THESE — memory/old copy is wrong)

| Item | Correct value | Notes |
|---|---|---|
| Years in business | **10+ years** | Karl back in NI ~11 years, started this on return. Defensible. |
| Businesses worked with | **~80** (say "80+"), NOT 150+ | 150+ was inflated. 80+ is honest and still strong. |
| Google views | **~60 million** (say "60M+ views generated across Google") | Plausible cumulative Street View view-count from Google's own "your photos got X views" emails. Karl stands behind ~60M. Frame as "views generated across Google," not a claim about business outcomes. |
| Palette | Precious metals (see §6) | NOT the old #191716/#a68a64 — evolved. |
| Display font | **Playfair Display** | NOT Cormorant Garamond — evolved. |

**Industry stats available to cite (from research, use to support the pitch honestly):**
- Listings with photos + a tour are ~2× as likely to generate interest/bookings (Google study, widely cited).
- Complete listings with imagery are considerably more likely to be seen as established/legitimate businesses.
- 360 content is associated with more direction requests and website clicks vs standard photos.
- Trusted-photographer small-business tours typically run ~$200–500 internationally — useful context for Karl's £599 entry tier being premium/custom.

Use these as *supporting* evidence, attributed as industry findings, not as Karl's own measured results.

---

## 5. Section-by-section plan

Current live order (from App.tsx): Navigation → Hero → Proof → Offerings → Portfolio → Process → Trips → Contact → Footer.

| Section | Verdict | Action |
|---|---|---|
| **Navigation** | Keep | KM logo + name. Fix mobile menu links (currently point to non-existent Services/About/Portfolio sections — mismatch with actual sections). Nav should match real sections: Offerings, Work, Process, Contact. |
| **Hero** | Keep, relanguage | Headline currently "Bespoke 360° / Virtual Tours" → change to walkthrough language. Replace Unsplash stock hero image + "Virtual tour showcase" alt text with a real Karl shot when available (placeholder OK for now, but flag it). Sub-copy "Turn browsers into bookers…" is good, keep the spirit. |
| **Proof** (stats + Google badge + client logos + testimonial) | Keep, CORRECT NUMBERS | Update stats to 60M+ / 10+ / **80+** (not 150+). Real testimonial (Chris Suitor, Suitor Brothers) — keep. Client logos — keep, all real (see §6). Google Certified badge — keep. |
| **Offerings** (3 pricing tiers) | Keep, relanguage | £599 / £899 / £1,499 tiers stay. Strip "Virtual Tours" from headings → "Premium 360° Walkthroughs" etc. Bullet items mentioning "360° Panospheres" are fine (technical, accurate). This is where supporting services (photography/drone/web) can be introduced as an add-on line or 4th element later — see §7. |
| **Portfolio / "Recent Work"** | Keep structure, GUT THE FAKES | **Only 2 of 6 are real:** Suitor Brothers (real tourUrl) and the Dublin Wine Merchant (real tourUrl). The other 4 (Café Central Munich, Luxury Villa Algarve, Fitness Studio, Boutique Hotel Prague) are Unsplash stock with `tourUrl: "#"` — **fictional, must be cut.** Rebuild as a reusable card component holding the 2 real tours now, structured so new tours (Portugal Airbnbs 2026/27, real NI clients) drop in as data entries. Fake case studies on a trust-based site are a credibility risk. |
| **Process** (3 steps) | Keep, relanguage | Consultation → Capture & Creation → Launch & Optimize. Swap "virtual tour creation" wording. Solid section. |
| **Trips / "Where I'm Working Next"** | **CUT** | Stale March–May 2026 dates (Lisbon/Prague/Zurich) now in the past — actively signals an unmaintained site. Remove entirely. The Portugal ambition is real (2026/27) but belongs in Portfolio-as-it-happens, not a dated availability grid. If a "where I'm shooting next" idea returns later, rebuild it date-driven so it can't go stale silently. |
| **Contact** | Keep | Formspree form (ID: myzknydd), cal.com booking (cal.com/karl-mcclelland-m2ppu8), me@karlmcclelland.com, +44 7960 044 486, SumUp/Revolut/Stripe. All real — carry across. Relanguage "professional virtual tour" line. |
| **Footer** | Keep, relanguage | "Professional Google Street View virtual tours…" → walkthrough language. LinkedIn link, "Google Street View Trusted Photographer" tagline — keep (real credential). Fix Quick Links to match real sections. |

**Unused components to leave behind** (in folder but NOT in App.tsx — do not carry over unless deliberately reviving): WhyVirtualTour, TourComparison, Services, Benefits, HowItWorks, Testimonials, ClientCarousel, About, BeforeAfter, BoldStatement, FAQ, GoogleCertified, SectionDivider, SpecialOffer, StorySection, StreetViewShowcase, Offerings-duplicates. Some (FAQ, About) may be worth reviving later — noted, not now.

---

## 6. Design system to carry across (from real code)

**Palette — "Precious Metals":**
- Rose gold / bronze: `#bd8c7d` (primary accent, `brand-bronze`)
- Bronze light: `#d1bfa7` (`accent-warm`, soft gold)
- Bronze dark: `#a27a6d`
- Onyx / stone: `#49494b` (`brand-stone`)
- Stone light: `#8e8e90` (`accent-ember`, silver)
- Stone dark: `#2b2b2c`
- Trust blue: `#87CEEB` (`accent-sky`)
- Neutrals: warm gray scale 50–900 (see tailwind.config.js)

**Fonts:**
- Display/headings: **Playfair Display** (light/300–400 weights)
- Body: **Inter** (also DM Sans loaded in index.html — consolidate to Inter unless a reason to keep DM Sans)
- Mono accents: JetBrains Mono

**Signature UI details worth preserving:**
- `.btn-primary`: stone bg, soft-gold text, inverts on hover; box-shadow `0 0 0 1px rgba(189,140,125,.35), 0 14px 35px rgba(0,0,0,.18)`
- `.metal-overlay`: dual radial gradients (rose gold + soft gold) — the "precious metals" shimmer
- Typography: tight negative letter-spacing on display sizes, `clamp()` fluid headings
- `ease-luxury` cubic-bezier(0.16, 1, 0.3, 1) for that heavy, smooth motion
- Framer Motion fade-up-on-scroll — Astro equivalent: small IntersectionObserver or a light motion lib; keep the effect subtle.

**Real assets salvaged (handed back with this doc):**
- Client logos (all real clients): Toyota, Hyundai, Skoda, EA, B&Q, Hilti, SSE, NI Screen, Lyric Theatre, Odyssey Arena, Grand Opera House
- Google Street View logo SVG

---

## 7. Positioning the supporting services (photography / drone / web)

The "get found" umbrella needs the supporting services present but subordinate. Recommended approach for this build:

- **Now:** Keep the walkthrough as the whole spearhead. Add ONE quiet line/section acknowledging "Also available: professional photography, drone/aerial, and website builds — the pieces that make a business easy to find and easy to choose." Don't build out full service pages yet.
- **Later:** If demand justifies, each supporting service gets its own card/section. Structure the Offerings section so a 4th "and more" element can slot in without a redesign.

Rationale: introduces the umbrella breadth (so it's not a surprise later) without diluting the single-topic SEO focus or the clarity of the pitch.

---

## 8. Open items Karl still owns

**Done since rev 1:**
- [x] **Stats final sign-off** — confirmed: 60M+ views / 10+ years / 80+ businesses.
- [x] **DM Sans vs Inter** — resolved: Inter-only.

**Still outstanding (the real remaining work):**
- [ ] **Hero image / video** — the #1 must-do before go-live. Still an Unsplash placeholder (flagged `TODO(Karl)` in `Hero.astro`). A stock hero on a real-photography site is a contradiction at the exact moment of first impression. See §11 for the agreed direction.
- [ ] **Portfolio content** — supply real tour names + URLs and, ideally, real stills of those businesses to expand beyond the 2 current real ones (Portugal Airbnbs 2026/27, real NI clients). Structure is ready — add as data entries.
- [ ] **Email signature** — linked job: currently "VIRTUAL TOUR CREATOR · GOOGLE TRUSTED PARTNER". Update to walkthrough language, keep "Google Street View Trusted Partner" (real credential). Push alongside the site so site + signature + outreach all match.
- [ ] **Apps Script outreach templates** — still carry "Virtual Tour" in template names (HOSPITALITY, CAFE, SALON, RETAIL etc.). Relanguage in the same sweep so every prospect touchpoint is consistent.
- [ ] **Weekend fine-tooth comb** — run the whole site against the world-class checklist in §10 before FTP.

---

## 9. Kickoff prompt for Claude Code (paste at start of the VS Code build session)

> I'm rebuilding karlmcclelland.com from Vite/React to Astro. The full brief is in `karlmcclelland-SOURCE-OF-TRUTH.md` (in this folder) — read it first and treat it as authoritative.
>
> Context: this is my personal "get found" brand for local businesses. The hero capability is the **360° walkthrough** (real photography published to Google) — we are deliberately retiring "virtual tour" as the lead term everywhere (see the language rule in the doc). Keep the existing design system (Playfair Display + Inter, the "precious metals" palette, the btn-primary/metal-overlay styles) — I'm happy with the look.
>
> The current React source is in this repo. Carry across the REAL content (Suitor Brothers testimonial, the real client logos, the £599/£899/£1,499 pricing, the Formspree form + cal.com booking + contact details). CUT the fictional portfolio items (only Suitor Brothers and the Dublin wine merchant are real) and CUT the stale "Where I'm Working Next"/Trips section entirely. Use the corrected stats: 60M+ views, 10+ years, 80+ businesses (NOT 150+).
>
> Build the portfolio as a reusable card component driven by a data file so I can add tours easily. Output must be static HTML that I deploy via FTP.
>
> Start by reading the doc and the existing components, then propose the Astro project structure before writing files.

---

## 10. The world-class standard — the 911 principle

**Governing rule: recognisable from the silhouette, like a 911 at 100 yards.** Porsche, Jil Sander, an Armani jacket — the quality is in the *restraint* and the cut, not in what's added. The luxury is self-evident because it isn't trying to prove itself. This is a **subtractive** standard: every previous attempt at this site failed by accretion (extra sections, stock photos, weak taglines, a Trips grid nobody needed). World class here = the confidence to strip back to the shape and let it carry.

**Why the bar is this high:** the site is now a *credibility check*, not a brochure. Principals (Darren at Limavady High), prospects (Kyle at Carrick-a-Rede), anyone with your name in front of them **will investigate before replying**. What they find decides whether you read as "a bloke with a camera" or "someone totally on top of this game." The same shopfront logic you sell them, turned on yourself. And it lends authority to every other brand with your name on it (360School included) without cramming them onto this site — the brands stay distinct, the *quality bar* is shared.

**The checklist — every item is a form of "does this serve the silhouette, or blur it?"**

- [ ] **Zero placeholder / zero apology.** No "lorem", no stock case studies, no "under construction". You've apologised for this site twice in two messages to Kyle — world class means never needing to. (Hero image is the last placeholder — §11.)
- [ ] **Credibility signals land in seconds.** Google Street View Trusted credential shown properly (not just claimed); real named clients (Toyota, SSE, Grand Opera House); real testimonial with a real name (Suitor Brothers); numbers you'll stand behind (60M+ / 10+ / 80+).
- [ ] **No dead links, ever.** One clicked-through fake or dead tour link undoes everything. (This is why the fakes were gutted.)
- [ ] **Fast.** A "get found" specialist whose own site is slow is a contradiction. Astro gives this largely for free — protect it (esp. if a video hero lands: compressed, poster still, graceful mobile fallback).
- [ ] **Flawless on a phone.** A principal checking on mobile between classes is the real test. Every section as clean on narrow as on wide.
- [ ] **Found.** Excellent SEO — proper titles, meta, structured data, walkthrough language matching search intent. The crawlable-HTML rebuild is the foundation; don't waste it.
- [ ] **The details betray amateur or pro.** Consistent spacing, real favicon, proper OG image when shared in WhatsApp/email, coherent type.
- [ ] **Restraint test on every section.** If a section doesn't earn its place, it weakens the shape. Cut before you add.

---

## 11. Hero direction (agreed)

**Replace the Unsplash placeholder with a real Karl-plus-kit shot.** Puts the real person and real equipment on screen — solves the credibility problem the best possible way, and resolves the one remaining contradiction (stock imagery on a real-photography site).

**Composition:** Karl three-quarter turned, **eyes off to the right toward the headline** (the off-camera gaze pulls the viewer's eye toward the copy/CTA rather than staring them down — deliberate). Drone in shot, camera on a tripod. Graded in the precious-metals tones so it sits in the palette.

**Still vs video — the 911 test applies:** a narrative hero (drone approaches, sees Karl, flies off) risks becoming a *story* that demands attention and ages badly on the second visit. The Porsche move is a calm, cinematic **single frame**, or a **subtle almost-still loop** you'd barely notice is moving (luxury-watch b-roll, not a showreel). Avoid a beginning-middle-end that restarts visibly.

**Recommended approach:** shoot it so **one setup yields both** — capture the video *and* pull the hero still from the strongest frame. Ship the **still first** (lighter, faster, live sooner); swap in the loop later only if it genuinely elevates.

**If video is used — non-negotiables (speed is the tax):** short seamless loop, well-compressed, a **poster still loading instantly underneath** (never a blank/buffering hero), **graceful degrade to the still on mobile / slow connections**. Compose with **headroom for the copy** (don't fill the frame where text sits) and **landscape, mindful of the mobile crop** (sides may cut). The existing dark overlay + `.metal-overlay` keeps text readable — shoot for it.

*(Minor, non-blocking: haircut before the shoot. The silhouette deserves it.)*

---

## 12. Letter-spacing scale — deliberate future choice

The custom `xs`–`9xl` letter-spacing scale in the old Tailwind config **never actually shipped** (killed by the duplicate-key bug — see §0). The Astro build matches the real live behaviour, so type looks like the site you've always had. If you ever *want* that tighter tracking, it's now a conscious design decision to make and preview — not a bug to "restore". Test it on a single section first before applying site-wide.

---

*End of source of truth. Update this file deliberately when decisions change — don't let new decisions live only in a chat.*
