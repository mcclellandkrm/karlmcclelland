# karlmcclelland.com (MDS): Rev 4 PROPOSAL

**Date:** 13 November 2026
**Status:** PROPOSAL. Rev 3.2 stays in force. Section 2 below is approved by Karl; everything else needs his yes before it is built.
**Re-based:** against Rev 3.2 (5 Nov) and `NEXT_STEPS.md` (5 Nov). An earlier draft of this file was written against Rev 3.1 and is superseded by this one.

**The problem this file solves:** a business owner arriving cold cannot tell what Karl provides, and reads a single sample panorama as the whole product.

## 0. Order of authority

Unchanged from Rev 3.2 section 0. This file sits below it and proposes amendments to it. Where this file and Rev 3.2 disagree, **Rev 3.2 wins until Karl approves the amendment.**

## 1. The evidence (measured off the live site, 13 Nov 2026)

These are counts, not opinions, and they do not depend on any revision.

| Page | Total words | Of which the repeated "How it starts" block |
|---|---|---|
| Home | 456 | 128 (28%) |
| /work | 373 | 128 (34%) |
| /studio | 253 | 128 (51%) |
| /clients | 488 | 128 (26%) |

- The homepage spends **128 words on how to start and 15 words on what Karl provides.**
- Project pages: Toyota 30 words, Mode German Kitchens 54 words.
- Every project page has a heading "What we delivered" followed by a three-word label ("360° panorama").
- Pano project pages label the item "360° panorama" and then put **"Open the walkthrough"** on the link directly beneath it. The page contradicts itself in two lines.
- `/clients` holds four written testimonials and links to no work. `/work` holds the embeds and carries no testimonial.
- `/work` and `karlmcclelland.com/MDS/` do not link to each other.

## 2. APPROVED: the framing line

Approved by Karl, 13 November 2026.

### 2a. The standing policy it has to serve (record this in Rev 3.2)

**Only one panorama per client is shown publicly.** Decided when `karlmcclelland.com/MDS/` was built. Full client tours are deliberately not published. This policy is correct and is not being reopened. It is **not currently written in Rev 3.2, which is how it got mistaken for an accident.** Add it to Rev 3.2 section 3.

### 2b. Why the site currently misleads

The policy works in outreach because the framing travels with the link. Karl's wording, in use for months:

> "I've put some recent single 360 clips into a small portfolio tour at https://karlmcclelland.com/MDS/ which should give you an idea of the quality, although full client tours aren't included."

That sentence sets the expectation, states the purpose, and names what is withheld in a way that implies more exists. **The site says none of it.** An emailed prospect has the framing. Anyone arriving cold from search does not, and concludes the sample is the product.

Why it went unnoticed: everyone reviewing the site already knew what sat behind each panorama, so the ambiguity was invisible from the inside. The Saturday Night Test was applied to the hero and the overall shape, never to the work cards. **Apply it to the work cards from now on.**

### 2c. Placement rule

The explanation must appear **above anything a visitor could click**. Once a card is clicked the wrong impression is already formed. It goes in the page intro, never on the cards alone.

### 2d. The copy

`src/pages/work/index.astro:21` currently reads:

> intro="Every example here is a real space, photographed and built by Karl. **Step inside any of them.**"

"Step inside any of them" promises what is true of the Cottonmount and false of a single panorama. This is a correction, not an addition.

**Approved copy, Karl's own wording, 13 November 2026.** Works unchanged on both /work and the homepage, because it names the Cottonmount rather than positioning it as "below". No page-specific variant needed.

> Every example here is a real space, photographed and built by Karl. Please feel free to explore The Cottonmount custom walkthrough. Each sector below shows a single 360 view from a much larger project, either a Street View tour published to Google or a custom walkthrough built for the client's own app or site.

Notes on the wording, both Karl's call and neither blocking:

- "a much larger project" carries the main job: it tells a cold visitor that more exists. An earlier draft also had "The full tours stay with the clients who commissioned them", which answered the follow-on question of where the rest is and framed the policy as real paid work rather than withholding. Dropped in this version. Optional to restore as a final sentence.
- "custom walkthrough" is now the term, not "bespoke". Use it consistently, including in 2e below.
- "app or site" rather than "site": Karl also builds for apps.

### 2e. The two product names

Applied per card, after the intro has taught the distinction:

- **On Google**: published to Maps and Street View, so the business gets found.
- **On your own site**: custom interactive walkthrough with branded menus, hotspots and booking links, so the business gets chosen once someone lands.

Replaces the technique labels ("360° panorama" / "360° walkthrough") as the *card* label. Rev 3.2 section 5 language rules are unaffected: "360° walkthrough" stays the term in headlines and body.

**Also settles an open item.** Rev 3.2 section 10 still has the email signature and Apps Script templates carrying "virtual tour". These two names are what they should say instead.

## 3. Withdrawn: already decided by Rev 3.2

Listed so they are not proposed again.

- **Cottonmount as a full-width lead card at the top of /work.** Rev 3.2 section 11 already corrects this: sector picture tiles replaced the lead card, because the Cottonmount is the hero. Withdrawn.
- **A new homepage "What this actually is" section.** Rev 3.2 section 8 forbids sections not in section 6, and the approved framing line in 2d already does the comprehension job this section was invented for. Withdrawn. `NEXT_STEPS.md` item 5 (fold the "Alongside walkthroughs" line into Studio) should go ahead instead.
- **A homepage scale-proof line.** Same section 8 constraint. The Toyota scope belongs on the Toyota project page instead (section 4).
- **Cutting the sector count from seven to four.** Withdrawn for two reasons: one pano per client is policy, so sector depth cannot be read off the number of panoramas; and the entries understate what was delivered. Revisit only after the section 4 audit.

## 4. Proposed: "What we delivered" becomes real content

**No conflict with `NEXT_STEPS.md` item 6.** That item wants the *card* summaries cut to one line so the cards line up. This is the *project page*. Card short, page complete.

Three lines per entry, on the project page:

1. **What was captured.** Areas, how many positions, HDR or standard, any aerial or stills alongside the 360s.
2. **Where it went.** On Google, on the client's own site, both, or delivered but not published.
3. **What it does for them.** One plain sentence. No percentages, no invented metrics.

Worked example, Mode German Kitchens:

> A single 360 position in the centre of the Belfast showroom, shot so the full run of displays is readable from one viewpoint.
> Published to their Google Business Profile, so it appears on Maps and in Search.
> Homeowners researching kitchens see the real showroom before deciding whether it is worth the drive.

Worked example, Toyota (scope per Karl, 13 Nov; wording for Karl to approve):

> A full HDR walkthrough of the new showroom, around 50 positions. One sample view is shown here.
> Built and handed over in full. Publication sat with the dealership's marketing team.
> Shows a flagship showroom at a scale that works for a group as well as a single site.

**The pattern for every entry: scope in words, sample in pixels.** It satisfies the one-pano policy and stops the work being understated.

The Toyota entry is the clearest case of the current cost. The site says "360° photography of a new Toyota showroom", 30 words. What was delivered was a full HDR walkthrough of roughly 50 positions in a new multi-million pound showroom, built and handed over, never published because the dealership's marketing team shelved it.

Entries needing this written (9 live): `cottonmount`, `mode-german-kitchens`, `wine-merchant`, `toyota-showroom`, `heineken-lounge`, `titanic-studios`, `lyric-theatre`, `limavady-high-school`, `coronation-garden`.

## 5. Proposed: strip the repeated block from the sub-pages

`CTASection.astro`, driven by `src/data/next-steps.ts`, is 128 words and appears on Home, Work, Clients, Studio and every project page, and forms the body of Contact.

- **Keep** on Home (Rev 3.2 section 6.7) and Contact.
- **Remove** from Work, Clients, Studio and the project pages. Replace with one line and a link.

Recovers a third of /work and half of /studio at no writing cost. Rev 3.2 section 6 governs the homepage only, so this does not contradict it. Related to, but separate from, `NEXT_STEPS.md` item 4 (quieter updates sign-up, three dark bands in a row).

## 6. Proposed: pair proof with work

Inject the matching testimonial beside its sector on /work. Hillsborough Tile and Bathroom beside Retail & Showrooms. `/clients` stays as a page and the nav does not change.

## 7. Open question: /work and /MDS

Two portfolio surfaces, neither pointing at the other. Cold visitors find `/work`; emailed prospects get `/MDS`. Decide whether `/work` offers "step inside the sample tour" or whether they stay separate audiences. Karl's call.

## 8. The Toyota asset: private pitch asset, not public portfolio

Around 50 HDR panoramas of a flagship showroom are shot and unused. Finishing them into a Pano2VR walkthrough is studio time, not shoot time.

**It does not go on the public site**: that would break the one-pano policy and publish a full client tour. It becomes a pitch asset sent privately on request, so when a dealership or group asks what a full automotive walkthrough looks like there is a complete, explorable showroom to send rather than a sample pano and a description.

Dealerships want near-identical things, so one finished automotive walkthrough serves the sector rather than one client. Subject to the permission check in section 10.

## 9. Build order

1. Swap the /work intro line for the approved copy (2d). Approved, nothing outstanding, highest value per word on the site.
2. Fix the contradicting link text: a sample pano says "View the 360", not "Open the walkthrough" (`WalkthroughEmbed.astro`).
3. Strip the repeated block from the sub-pages (section 5).
4. Apply the On Google / On your own site card labels (2e).
5. Karl writes the 9 "What we delivered" entries (section 4).
6. Pair testimonials with sectors (section 6).
7. Finish the Toyota walkthrough as a private pitch asset (section 8).

## 10. For Karl

- [ ] Approve the homepage variant of the framing line (2d).
- [ ] Approve recording the one-pano policy in Rev 3.2 section 3 (2a).
- [ ] Write the 9 "What we delivered" entries (section 4).
- [ ] Decide /work to /MDS linking (section 7).
- [ ] Toyota: a one-off check on whether stating the scope of an unpublished project needs a nod from the dealership.
- [ ] Still open from Rev 3.2 section 10: pricing line or enquiry only; Suitor Brothers as a Street View entry.

## 11. Housekeeping found on 13 Nov

- The **claude.ai project docs are a month stale**: they hold the 5 Oct Rev 3.1 under the same filename as the repo's 5 Nov Rev 3.2, and the project instructions name rev 3 as definitive. Any session starting from the project rather than this folder starts a revision behind. Fix: the repo is the only source of truth; retire the claude.ai copies.
- `backup_website-karlmcclelland-astro` still exists in `D:\PROJECTS_ROOM\01_Current_Projects\` despite the 8 Oct tidy-up. Worth confirming it is not being opened by mistake.
