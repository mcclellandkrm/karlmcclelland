// Proof signals shown straight after the hero (Rev 3.1 Decisions, section 4).
// Everything here is real and verifiable. Never inflate these numbers.

// Chris Suitor is well known in Belfast, so the name carries weight.
// Suitor Brothers is a Google Street View tour, not a walkthrough, so it
// appears as proof rather than as a work card. Keep the view-count screenshot
// on file as evidence.
export const featuredTestimonial = {
  text: "We've noticed a big increase in public awareness of who we are, what we offer and how to find out and that is definitely helping sales. Excellent work and value for money and we really appreciate his attention to detail.",
  attribution: 'Chris Suitor',
  role: 'Suitor Brothers, Belfast',
  metric: { value: '1M+', label: 'Views on Google', source: 'Suitor Brothers, Google Street View' },
};

// Further client quotes, shown on /clients. Recovered verbatim from the old
// WordPress site (2026-11-05); clients' own words, so "virtual tour" stays.
// Tribal Burger quote deliberately omitted (business no longer exists).
// TODO(Karl): add Jenny Lendrum (Antrim Grammar) and James (tile company).
export const clientTestimonials = [
  {
    text: "Karl was fantastic in helping The Signature Works benefit from Google 360. He expertly guided us through creating immersive virtual tours and integrating Google 360 on our website and social media. Through interactive virtual tours, we were able to showcase our in-house production areas and give potential clients an inside look at our extensive facilities. This not only helped build trust with prospective customers but also gave us a competitive edge in the market. Thanks to Karl's support, we gained increased online visibility, higher engagement, and more inquiries from potential customers. Highly recommended!",
    attribution: 'Phil Dunn',
    role: 'Director, The Signature Works',
  },
  {
    text: 'Ballyclare High School has benefitted hugely from the addition of a virtual tour. The engagement figures speak volumes for the guidance and expertise of Karl. Our future pupils and parents are afforded an opportunity to look through the classrooms and see what our school uniquely offers. Karl was very easy to work with and facilitated our ideas and thoughts to create a bespoke experience. We would recommend working with Karl and look forward to doing so again.',
    attribution: 'Andrea McCullough',
    role: 'Senior Teacher, Ballyclare High School',
  },
];

// Karl remains a Google Street View Trusted partner. Frame it by what it
// enables, not by exclusivity: Google no longer onboards new Trusted
// photographers and anyone can publish to Street View now.
// TODO(Karl): swap the Street View mark for the official Trusted badge artwork.
export const googleCredential = {
  title: 'Google Street View Trusted',
  body: 'Publish, update and remove imagery on Google Maps and Street View on your behalf.',
};

// The homepage shows six logos; /clients shows the full set.
export const homepageClients = ['Toyota', 'SSE', 'Grand Opera House', 'B&Q', 'Hyundai', 'Skoda'];
