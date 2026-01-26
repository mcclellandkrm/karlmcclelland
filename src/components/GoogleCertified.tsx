import React from 'react';

const GoogleCertified: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-900 border-y border-neutral-800">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Certification Badge */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src="/logos/googlelogos/streetview-logo.svg"
                alt="Google Street View Trusted"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-neutral-400 font-bold text-xs uppercase tracking-[0.3em] mb-1">Certified</div>
              <div className="text-white font-display text-xl md:text-2xl font-light">Street View Photographer</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-neutral-800"></div>
          <div className="md:hidden w-16 h-px bg-neutral-800"></div>

          {/* Integration Badge */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src="/logos/googlelogos/googlemaps-logo.svg"
                alt="Google Maps"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-neutral-400 font-bold text-xs uppercase tracking-[0.3em] mb-1">Featured On</div>
              <div className="text-white font-display text-xl md:text-2xl font-light">Google Maps & Search</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-neutral-800"></div>
          <div className="md:hidden w-16 h-px bg-neutral-800"></div>

          {/* Trust Statement */}
          <div className="text-center md:text-left max-w-xs">
            <div className="text-neutral-300 text-base leading-relaxed">
              Your virtual tour appears directly on <span className="text-white font-medium">Google Maps</span>,
              <span className="text-white font-medium"> Google Search</span>, and your
              <span className="text-white font-medium"> Business Profile</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-12 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-display font-light text-white mb-2">Official</div>
            <div className="text-neutral-500 text-sm uppercase tracking-widest">Google Partner</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-light text-white mb-2">100%</div>
            <div className="text-neutral-500 text-sm uppercase tracking-widest">Google Approved</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-light text-white mb-2">10+</div>
            <div className="text-neutral-500 text-sm uppercase tracking-widest">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-light text-white mb-2">Trusted</div>
            <div className="text-neutral-500 text-sm uppercase tracking-widest">Photographer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleCertified;
