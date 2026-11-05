# Next steps (written 5 Nov 2026)

State: new site live since 5 Nov 2026 (FileZilla upload of `dist/`). Homepage redesign, Newsreader + Hanken Grotesk type, full-screen tours on phones: all live. Decisions are in Rev 3.2.

## Design (next session)

1. **Client logos:** SSE (the file is the SSE Arena lockup and renders tiny) and Grand Opera House (renders faint). Better files from Karl, or rework the existing ones.
2. **Stats row** (Paul, 5 Nov): spread across the full width, 60M+ left, 10+ centred, 80+ right-aligned; at the moment they bunch left. Fix together with mobile, where "Views across Google" wraps onto three lines.
3. **"Why it matters" copy** (Paul, 5 Nov): add the reassurance angle. A walkthrough takes away the nerves of visiting somewhere new (a new dentist; a women's-only gym, where it shows it isn't a "rough" place). Forge Female Fitness is the real example: bring that tour over (TOUR_INVENTORY.md) and fix its misdeployed folder first. Karl to approve the wording (copy speaks for him).
4. **Updates sign-up:** quieter treatment so "WhatsApp a video" stays the main next step (three dark bands in a row at the moment).
5. **"Alongside walkthroughs…" line:** fold into the Studio section instead of its own band (changes Rev section order; update Rev 3.2).
6. **Work card summaries:** one line each so cards line up.
7. **/studio page:** Karl's background (engineering → new media → recruitment, from the old site's About) in his own voice, once a photo exists.
8. **404 page:** missing pages show the server's plain "File not found." Point Plesk at the site's own 404 page.

## Content from Karl

- [ ] Photo of Karl, or the drone clip (drone arrives, sideways glance, drone leaves). Biggest trust gap on the site.
- [ ] Logo files: SSE and Grand Opera House (see above). Official Google Street View Trusted badge artwork.
- [ ] Screenshot evidencing Suitor Brothers 1M+ Google views.
- [ ] The Garrick: find the still that was a top Google "Belfast" image (millions of views).
- [ ] Limavady High School: full tour URL (entry currently shows one scene).
- [ ] Cottonmount: one-line result and a client quote, if there is one.
- [ ] Read through /studio, /privacy and /cookies (they speak in Karl's name).

## More work for the site

- Pano2VR remasters: **Lyric Theatre** (replace the café pano viewer) and **Titanic Studios**.
- Next walkthroughs/panos to add (TOUR_INVENTORY.md "Bring over"): EDŌ, RK Welding, Wilsons Auctions, Bolt Deli, Apperley's Limavady, Drumbo Park, Forge Female Fitness, Ultra Urban Penthouse.
- Single panos: `node scripts/make-pano.mjs …`, upload to `/360/` (see CONTENT_NEEDED.md).

## Decisions / housekeeping for Karl

- [ ] Contact form (Formspree `myzknydd`) delivers to karl@360spaces.co.uk. Switch to me@karlmcclelland.com? (Formspree dashboard, no code.)
- [ ] GitHub repo is public and holds internal notes. Make it private?
- [ ] Server: delete old `assets/` and `vite.svg` from `httpdocs` (backed up on E:). Occasionally clear stale files in `_astro/`.
- [ ] Server: `/gym/forge-female-fitness/` serves the Victim Support app; is `/victimsupportni/` meant to be public?
- [ ] Still open from Rev 3.2 §10: pricing line or enquiry only; Suitor Brothers as a Street View entry; email signature and outreach templates still say "virtual tour".
- [ ] Heineken Lounge sector (currently Offices, Industry & Trade; may move).
- [ ] Search Console: check the sitemap shows Success with 16 pages.
