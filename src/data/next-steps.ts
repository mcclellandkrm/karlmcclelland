import { site } from './site';

// The low-pressure route in, matching what Karl offers in outreach emails:
// a quick video, a ballpark, then a visit. Shared by every closing CTA.
export const nextSteps = {
  eyebrow: 'Getting started',
  title: 'Easy to start. No pressure.',
  body: "Getting a bespoke 360° walkthrough shouldn't feel like a chore. The photography itself usually takes just a couple of hours, and the finished walkthrough can be live in under two weeks.",
  steps: [
    {
      title: 'Send a quick walk-around',
      body: `Grab your phone and WhatsApp some photos or a short video of your space to ${site.phoneDisplay}. Rough and ready is fine; no need to tidy up first. I just need to see the layout.`,
    },
    {
      title: 'A ballpark and a plan',
      body: "I'll come back with a price guide, suggested views, and tailored ideas to showcase your key areas best.",
    },
    {
      title: 'Coffee and site walk',
      body: "I'll call in to see the space in person and run through the flow. You only decide to go ahead once you see how it all works.",
    },
  ],
  primaryLabel: 'WhatsApp a video',
  primaryHref: site.whatsappHref,
  secondaryLabel: 'Book a call',
  secondaryHref: site.bookingHref,
};
