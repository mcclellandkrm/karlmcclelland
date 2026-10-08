# Live site audit — karlmcclelland.com (checked 2026-10-01)

Purpose: make sure nothing important is lost when the new site replaces the live one.
**Nothing should be deployed until every "Karl to decide / check" item below is resolved.**

---

## 1. The live site itself (one page, built with Vite)

### Worth carrying over

| Item on live site | Status in new site | Action |
|---|---|---|
| Stats: 60M+ views across Google · 10+ years · 150+ businesses | ✅ Added (homepage clients section + /clients) | Karl confirmed; business count corrected to **80+** |
| Suitor Brothers testimonial (Chris Suitor) | Carried over | — |
| Suitor Brothers (Street View) + NI wine retailer panos (walkinto.in) | Suitor as proof only; wine retailer on hold (Rev 3.1) | — |
| Client logos (Toyota, Hyundai, Skoda, EA, B&Q, Hilti, SSE, NI Screen, Lyric, Odyssey, Grand Opera House) | Carried over | — |
| Process facts: 1–2 hours on site, live within 14 days | ✅ Added to the next-steps band | Karl confirmed: "a couple of hours, depending on size" |
| What a client receives (360° scenes, Google Business Profile publishing, 25+ hi-res marketing images, embed codes, full commercial usage rights) | Missing | Useful even without prices. **Karl to decide** whether to show it. |
| Contact: phone, email, Formspree form, cal.com booking, LinkedIn | Carried over | — |
| Google Street View logo (`/logos/googlelogos/streetview-logo.svg`) | In repo, unused | Only if a Street View mention is wanted. |

### Deliberately left behind

| Item | Why |
|---|---|
| Pricing tiers £599 / £899 / £1,499 | Pricing decision still open ("from" price?) |
| "Google Certified" wording | Replaced. Karl remains a Street View Trusted partner (Rev 3.1 section 4): badge stays, framed by what it enables. Google has stopped onboarding new photographers; the programme has not ended. |
| **Four fake portfolio items**: Café Central (Munich), Holiday Rental (Algarve), Fitness Studio, Boutique Hotel (Prague) | Unsplash stock photos and dead "#" tour links. **These are live right now**, which is a reason not to wait too long. |
| "Where I'm working next": Prague (April 2026), Zurich (May 2026) | Out of date; Europe isn't the focus |
| Payment methods (SumUp, Revolut, Stripe) | Not needed on the site |

### SEO: nothing to lose

- One page only (anchor links), so there are **no old URLs to redirect**.
- No sitemap, no analytics, no Search Console verification tag in the page.
  **Karl to check:** is Search Console or Analytics set up some other way (DNS record, Tag Manager)?
- `og-image.jpg` is referenced but returns 404.

---

## 2. Other content hosted on the same server (outside the site) — must survive the switch

Found by probing from outside. **This list is probably incomplete.** Karl to check Plesk → File Manager → `httpdocs` for the full list.

| Path | What it is | Notes |
|---|---|---|
| `/MDS/` | Pano2VR portfolio, ~40 scenes | Linked in every outreach email. **Keep.** |
| `/hospitality/thecottonmount/` | Cottonmount Pano2VR tour | Embedded on the new homepage. **Keep.** |
| `/cottonmount/` | **Cottonmount website** (bar, grill and function suite) | Live client site? **Keep.** Karl to confirm it's meant to be public here. |
| `/lyric/` | Lyric Theatre Café Bar tour (3DVista) | **Keep.** Candidate case study. |
| `/gym/forge-female-fitness/` | ⚠️ **Currently serves a "victimsupportni" app, not the Forge tour** | Looks misdeployed. **Karl to check.** |
| `/victimsupportni/` | Separate app (Victim Support NI?) | Karl to confirm whether it should stay public. |
| `/retail/`, `/tours/` | Folders exist; contents unknown | Karl to check in File Manager. |
| `/logos/` | Old site's logo files | Harmless to keep. |
| `/assets/`, `index.html`, `vite.svg`, `robots.txt` | The old site's own files | The **only** files the new site replaces. |

The new site's addresses (`/work`, `/clients`, `/studio`, `/contact`, `/_astro`, `404.html`, `favicon.svg`, sitemap) don't clash with anything on the server.

---

## 3. A content source we already have: scenes in `/MDS`

These are real, already published, and grouped here by the new site's types of business. Ready-made material for case studies:

- **Restaurants, Bars & Hotels:** Deanes Restaurant, Michael Deanes, EDŌ Restaurant, Indian Restaurant, Seatons of Sailortown, Bullitt Hotel Lobby, Lyric Theatre Café, Penthouse Apartment (Airbnb)
- **Retail & Showrooms:** Apperley's Butchers, Mode German Kitchens, Hilti Showroom, B&Q Retail Interior / Retail Park
- **Automotive:** Aston Martin, Ford Showroom, Toyota Showroom, Škoda Showroom / Dealership
- **Offices, Industry & Trade:** Shared Office Space, Titanic Studios (The Paint Hall, The War Room)
- **Venues, Leisure & Sport:** SSE Arena Corporate, Lyric Theatre Meeting Room, Crusaders Football Club, Drumbo Park, Sports Field Aerial
- **Education & Public Sector:** School Assembly Hall, School Canteen, Technology Classroom, School All-Weather Pitch, Crown Court Room
- **Gardens, Estates & Weddings:** Drenagh Estate, King's Coronation Gardens (×3)
- **Residential & Property:** Residential Luxury Property

---

## Decisions / checks for Karl

1. ~~Confirm the stats~~ — done (80+ businesses).
2. ~~Confirm process timing~~ — done.
3. Show "what you receive"? (yes / no)
4. Search Console / Analytics: set up anywhere?
5. Full list of live tours (karlmcclelland.com, 360spaces.co.uk, 360school.co.uk) → `TOUR_INVENTORY.md`.
6. `/gym/forge-female-fitness/`: fix or remove? `/victimsupportni/` and `/cottonmount/`: should they stay public?
