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

### SEO and old links (corrected 2026-11-05)

- The current Vite page is one page only (anchor links), so it has no sub-pages of its own.
- **But before March 2026 the domain ran a WordPress site**, and its pages are still in Google
  (e.g. `/online-blindness/`) and the Wayback Machine. They have been 404 since the Vite site went up.
  The new site now redirects the real ones (`redirects` in `astro.config.mjs`):

  | Old address | Now goes to |
  |---|---|
  | `/online-blindness/` (testimonials, still in Google) | `/clients/` |
  | `/connect/`, `/belfast-business-offer/` | `/contact/` |
  | `/about_old/`, `/author/me/`, `/main-areas-of-expertise/` | `/studio/` |
  | `/portfolio/edo-restaurant/`, `/portfolio/lyric-theatre/`, `/portfolio_group/{custom-tours,google-street-view,photography-aerial}/` | `/work/` (repoint to the case study once EDŌ / Lyric are published) |
  | `/ideas/`, `/all-too-real/`, `/social-media/`, `/boost-your-business-…/` | `/` |

  Left to 404 on purpose: WordPress theme demo pages (`/team/*`, `/services/*`, `/tag/*`, `/portfolio/the-growth/` etc.), never Karl's content.
- `/privacy-policy/`, `/terms-conditions/`, `/cookie-policy-eu/` existed on WordPress, but none can be reused: the privacy policy was the theme vendor's demo text (ThemeRex, Cyprus), the terms page was empty, and the cookie policy was auto-generated (Complianz, Feb 2025) for the WordPress site's cookies. The new site needs its own privacy and cookie page(s).
- `/TheGarrickBelfast/` (archived May 2024; now 404) was the Garrick's Google Street View tour. Very high views, and one of Karl's stills was for a while a top Google image result for "Belfast" (millions of views). Karl to track down which photo if possible: strong proof material.
- `www.karlmcclelland.com` serves the site directly instead of redirecting to `karlmcclelland.com`. **Karl to set** Plesk → Hosting Settings → Preferred domain → `karlmcclelland.com` (a 301, no file changes).
- Old `robots.txt` points to `/sitemap.xml` (404). The new one points to `/sitemap-index.xml`; submit that in Search Console.
- No analytics or Search Console tag in the page.
  **Karl to check:** is Search Console or Analytics set up some other way (DNS record, Tag Manager)?
- `og-image.jpg` is referenced but returns 404.

### Content on the old WordPress site worth recovering (Wayback Machine, Aug 2025)

None of this is in the new site yet. Copied as found; **Karl to confirm** each is still OK to use.

- **Three more real testimonials** (from `/online-blindness/`):
  - Phil Dunn, Director, The Signature Works: "Karl was fantastic in helping The Signature Works benefit from Google 360. He expertly guided us through creating immersive virtual tours and integrating Google 360 on our website and social media. Through interactive virtual tours, we were able to showcase our in-house production areas and give potential clients an inside look at our extensive facilities. This not only helped build trust with prospective customers but also gave us a competitive edge in the market. Thanks to Karl's support, we gained increased online visibility, higher engagement, and more inquiries from potential customers. Highly recommended!"
  - ~~Paul Catterson, Tribal Burger~~: **do not use** (Karl, 2026-11-05: Tribal Burger no longer exists).
  - Andrea McCullough, Senior Teacher, Ballyclare High School: "Ballyclare High School has benefitted hugely from the addition of a virtual tour. The engagement figures speak volumes for the guidance and expertise of Karl. Our future pupils and parents are afforded an opportunity to look through the classrooms and see what our school uniquely offers. Karl was very easy to work with and facilitated our ideas and thoughts to create a bespoke experience. We would recommend working with Karl and look forward to doing so again."
  - ✅ Phil Dunn and Andrea McCullough added to /clients (`clientTestimonials` in `src/data/proof.ts`). Still to come from Karl: Jenny Lendrum (Antrim Grammar) and James (tile company).
- **Lyric Theatre case-study copy** (`/portfolio/lyric-theatre/`, 2023): opens on an aerial pano over Ridgeway Street; navigation styled in The Lyric's colours and fonts; an "active panosphere" in The Studio shows the seating layouts; covers meeting rooms, Boardroom, Rehearsal Room and Café Bar; two-week turnaround. Ready-made description for the Lyric entry.
- **Karl's background** (`/about_old/`): engineering background, into new media in the Macromedia era, then financial and architectural recruitment and marketing. Possible material for /studio once Karl rewrites it in his own voice.
- Not worth carrying over: the "Belfast Business Visibility Package" (£349 offer), SEO blog posts, social-media services page.

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
7. ~~Recovered testimonials~~: done (Signature Works, Ballyclare; Tribal Burger dropped).
8. Privacy / cookie page: new ones needed (old ones were not Karl's).
9. ~~`/TheGarrickBelfast/`~~: was a Street View tour; Karl to find the high-view "Belfast" still.
10. Set the preferred domain (www → non-www) in Plesk.

Re-checked 2026-11-05: old site unchanged since 17 Mar 2026; all 17 tour folders still load.
