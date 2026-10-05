import { site } from './site';

// The low-pressure route in, matching what Karl offers in outreach emails:
// a quick video, a ballpark, then a visit. Shared by every closing CTA.
export const nextSteps = {
  eyebrow: 'Getting started',
  title: 'Easy to start. No hard sell.',
  body: 'Most conversations start with a short video and end with a coffee on site. The shoot itself is usually a couple of hours, depending on size, and your walkthrough can be live within 14 days.',
  steps: [
    {
      title: 'Send a quick video',
      body: `WhatsApp a short walk round your space, filmed on your phone, to ${site.phoneDisplay}.`,
    },
    {
      title: 'Get a ballpark',
      body: "I'll come back with a ballpark figure and what I'd suggest, or take a few test 360s so you can see your own space first.",
    },
    {
      title: 'I call in, you show me round',
      body: 'Nothing is decided until you have seen what your business could look like.',
    },
  ],
  primaryLabel: 'WhatsApp a video',
  primaryHref: site.whatsappHref,
  secondaryLabel: 'Book a call',
  secondaryHref: site.bookingHref,
};
