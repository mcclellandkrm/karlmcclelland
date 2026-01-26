import React from 'react';

const BeforeAfter: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-stone-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-bronze-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-500/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 container-wide">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold tracking-widest text-bronze-400 uppercase">
              See The Difference
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-normal md:text-5xl font-display text-stone-50">
            Before vs After: <span className="text-gradient-warm">The Virtual Tour Effect</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-stone-400">
            Transform your online presence from invisible to irresistible
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-2">
          {/* Before - Without Virtual Tour */}
          <div className="space-y-6 opacity-70 hover:opacity-100 transition-opacity duration-700">
            <div className="p-8 border border-stone-700 bg-stone-800 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-700">
                  <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-400 font-display">Without Virtual Tour</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1 text-stone-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-stone-300">Lower Search Rankings</p>
                    <p className="text-sm text-stone-500">Harder for customers to find you on Google</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1 text-stone-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-stone-300">Static Photos Only</p>
                    <p className="text-sm text-stone-500">Limited ability to showcase your full space</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1 text-stone-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-stone-300">Missed Opportunities</p>
                    <p className="text-sm text-stone-500">Potential customers scroll past your listing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After - With Virtual Tour */}
          <div className="space-y-6 relative">
            {/* Glow behind */}
            <div className="absolute -inset-1 bg-gradient-to-b from-bronze-500/20 to-transparent blur-xl"></div>

            <div className="relative p-8 border bg-stone-800 border-bronze-500/50 rounded-sm shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bronze-500/20">
                  <svg className="w-5 h-5 text-bronze-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-bronze-400 font-display">With Virtual Tour</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1 text-bronze-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Higher Search Rankings</p>
                    <p className="text-sm text-stone-400">Google prioritizes listings with virtual tours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1 text-bronze-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Immersive 360° Experience</p>
                    <p className="text-sm text-stone-400">Customers explore every corner of your space</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="flex-shrink-0 w-5 h-5 mt-1 text-bronze-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Increased Foot Traffic</p>
                    <p className="text-sm text-stone-400">More qualified visitors who know what to expect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Comparison */}
        <div className="p-12 mt-20 border border-t border-b border-l-0 border-r-0 border-stone-800 bg-stone-900/50">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-light text-gradient-warm font-display">2x</div>
              <div className="mb-1 font-medium text-stone-300">More Interest</div>
              <div className="text-sm text-stone-500">vs businesses without tours</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-light text-gradient-warm font-display">300%</div>
              <div className="mb-1 font-medium text-stone-300">Higher Engagement</div>
              <div className="text-sm text-stone-500">customers spend more time exploring</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-light text-gradient-warm font-display">41%</div>
              <div className="mb-1 font-medium text-stone-300">More Likely to Visit</div>
              <div className="text-sm text-stone-500">after viewing your virtual tour</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="mb-8 text-xl text-stone-400 font-display">
            Ready to distinguish your business?
          </p>
          <a href="#contact" className="btn-primary">
            <span>Request a Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
