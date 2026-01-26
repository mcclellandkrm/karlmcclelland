import React from 'react';

const StreetViewShowcase: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white section">
      {/* Minimalistic background image */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop&q=80"
          alt="Professional workspace"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white"></div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-4xl font-normal md:text-5xl font-display text-stone-800">
              Google Street View{' '}
              <span className="text-gradient-warm">Trusted Photography</span>
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-stone-600">
              I'm a Google certified photographer, which means your virtual tour appears
              directly on Google Maps and Google Search.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-4 transition-all duration-700 rounded-sm border border-transparent hover:border-bronze-200/50 hover:bg-bronze-50/50 group ease-luxury">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-colors duration-700 rounded-full bg-bronze-100 text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium font-display text-stone-800">Official Google Integration</h4>
                  <p className="text-stone-500">Your tour appears on your Google Business Profile, Maps, and Search results</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 transition-all duration-700 rounded-sm border border-transparent hover:border-bronze-200/50 hover:bg-bronze-50/50 group ease-luxury">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-colors duration-700 rounded-full bg-bronze-100 text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium font-display text-stone-800">Interactive 360° Experience</h4>
                  <p className="text-stone-500">Customers can walk through your space virtually, exploring every corner</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 transition-all duration-700 rounded-sm border border-transparent hover:border-bronze-200/50 hover:bg-bronze-50/50 group ease-luxury">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-colors duration-700 rounded-full bg-bronze-100 text-bronze-500 group-hover:bg-bronze-500 group-hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium font-display text-stone-800">Professional Quality</h4>
                  <p className="text-stone-500">High-resolution imagery that showcases your business in the best light</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-secondary inline-block">
              <span>Book a Free Consultation</span>
            </a>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-sm border-2 border-stone-100 overflow-hidden shadow-2xl">
              {/* WalkInto Virtual Tour - Suitor Brothers */}
              <iframe
                src="https://walkinto.in/easyembedview/-yHP0G_qIn-1xHwCz_58n"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suitor Brothers Menswear Virtual Tour"
              ></iframe>
            </div>

            {/* Enhanced Google Trusted Badge */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
              <div className="bg-white px-6 py-4 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center gap-4 border border-stone-100">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/street_view_round_512dp.png"
                    alt="Google Street View"
                    className="w-10 h-10"
                  />
                  <div className="hidden sm:block w-px h-8 bg-stone-300"></div>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold tracking-widest text-stone-400 uppercase">Official</div>
                  <div className="text-base font-bold text-stone-800 sm:text-lg font-display">Google Trusted Photographer</div>
                </div>
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/maps_round_512dp.png"
                  alt="Google Maps"
                  className="w-10 h-10 ml-auto grayscale opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreetViewShowcase;
