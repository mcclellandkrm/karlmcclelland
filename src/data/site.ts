// Single source for business details. The studio name is still being
// finalised (it may drop "Design"), so reference `site.name` rather than
// hardcoding it in new copy — a rename then becomes a one-line change.
export const site = {
  name: 'McClelland Design Studio',
  person: 'Karl McClelland',
  url: 'https://karlmcclelland.com',
  email: 'me@karlmcclelland.com',
  phoneDisplay: '07960 044 486',
  phoneHref: 'tel:+447960044486',
  whatsappHref: 'https://wa.me/447960044486',
  bookingHref: 'https://cal.com/karl-mcclelland-m2ppu8',
  linkedinHref: 'https://www.linkedin.com/in/karlmcclelland',
  instagramHref: 'https://www.instagram.com/karlrmcclelland/',
  base: 'Belfast & Limavady, Northern Ireland',
  areaServed: 'Northern Ireland',
  tagline: 'We help businesses present themselves properly online.',
  // Formspree form IDs. Separate forms keep the mailing list apart from
  // enquiries. Updates form (2026-11-05) delivers to me@karlmcclelland.com;
  // the contact form is believed to deliver to karl@360spaces.co.uk.
  formspreeContactId: 'myzknydd',
  formspreeUpdatesId: 'mkjjyebb',
};

export const legalLinks = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Cookies', href: '/cookies/' },
];

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Clients', href: '/clients' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
];

// Confirmed by Karl 2026-10-01 (business count deliberately conservative).
export const stats = [
  { value: '60M+', label: 'Views across Google' },
  { value: '10+', label: 'Years' },
  { value: '80+', label: 'Businesses' },
];
