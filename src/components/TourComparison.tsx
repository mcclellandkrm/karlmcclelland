import React from 'react';

const TourComparison: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Parallax background image */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&auto=format&fit=crop&q=80"
          alt="Retail store interior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/85 via-neutral-900/90 to-neutral-900"></div>
      <div className="relative z-10 container-wide">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-display text-white font-light">
            Choose Your <span className="text-white">Virtual Tour</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-neutral-300">
            Two powerful options to showcase your business online
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Google Street View Tour */}
          <div className="p-10 transition-all duration-700 border bg-neutral-50 border-neutral-200 card-luxury group">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-colors duration-700 bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200 group-hover:text-black">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-3xl text-black font-display font-light">
                Google Street View Tour
              </h3>
              <p className="text-neutral-600">Perfect for local SEO and Google Search</p>
            </div>

            <ul className="mb-10 space-y-4">
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600">Appears directly on Google Maps & Search</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600">Integrated with Google Business Profile</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600">Boosts local SEO rankings dramatically</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600">360° immersive navigation</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600">Trusted Google certification badge</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600">Embeddable on your website</span>
              </li>
            </ul>

            <div className="text-center">
              <p className="mb-2 text-3xl font-bold text-black">From £349</p>
              <p className="text-sm text-neutral-500">Belfast Special Package</p>
            </div>
          </div>

          {/* Bespoke Virtual Tour */}
          <div className="relative p-10 transition-all duration-700 bg-white border border-black card-luxury group">
            <div className="absolute px-4 py-1 text-xs font-bold tracking-widest text-white uppercase top-4 right-4 bg-black">
              PREMIUM
            </div>
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-colors duration-700 bg-neutral-100 text-black group-hover:bg-black group-hover:text-white">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-3xl text-black font-display font-light">
                Bespoke Virtual Tour
              </h3>
              <p className="text-neutral-600">Full control, custom branded experience</p>
            </div>

            <ul className="mb-10 space-y-4">
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">Interactive hotspots</strong> with custom content</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">Embed menus, price lists</strong> & product info</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">Links to website pages</strong> directly from the tour</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">Integrated maps</strong> and location info</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">About us sections</strong> & team introductions</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">Contact details & booking forms</strong> embedded</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">Social media integration</strong> & sharing</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="flex-shrink-0 w-6 h-6 mt-0.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-600"><strong className="text-black">Custom branding</strong> with your logo & colors</span>
              </li>
            </ul>

            <div className="text-center">
              <p className="mb-2 text-3xl font-bold text-black">Custom Quote</p>
              <p className="text-sm text-neutral-500">Based on your specific needs</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="mb-8 text-xl text-neutral-300">
            Not sure which is right for you? Let's chat about your business goals.
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            <span>Book a Free Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TourComparison;
