import React from 'react';

const StorySection: React.FC = () => {
  const ref = React.useRef(null);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 bg-neutral-900">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80"
          alt="Restaurant scene"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/90 to-neutral-900"></div>

      <div className="relative z-10 container-wide">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Story content */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase">
                An All-Too-Real Situation
              </span>
            </div>

            <h2 className="mb-6 text-4xl leading-tight md:text-5xl font-display text-white font-light">
              Picture This...
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
              <p>
                A Portuguese couple visiting Belfast for the first time. It's a special occasion—maybe an anniversary—and they want to celebrate with a memorable meal.
              </p>

              <p>
                They pull out their phone and search:{' '}
                <span className="font-semibold italic text-neutral-200">
                  "Best restaurants in Belfast."
                </span>
              </p>

              <p>
                Google delivers results instantly. They scroll through listings, looking at photos, reading reviews. But here's where it gets interesting...
              </p>

              <div className="p-6 my-8 border-l-2 custom-border bg-neutral-800/50 backdrop-blur-sm border-white">
                <p className="mb-3 text-xl font-medium text-white font-display">
                  One restaurant has a virtual tour.
                </p>
                <p className="text-neutral-400">
                  They can walk through the dining room, see the cozy corner table by the window, feel the atmosphere. The decision is made before they even leave their hotel.
                </p>
              </div>

              <p className="text-xl font-medium text-white font-display">
                Your competitors without a virtual tour? They never stood a chance.
              </p>

              <p className="italic text-neutral-500">
                This happens hundreds of times a day in Belfast. Tourists, locals, business travelers—all making decisions based on what they can <strong className="text-neutral-300">see</strong> and <strong className="text-neutral-300">experience</strong> online.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-10 sm:flex-row">
              <a
                href="#contact"
                className="btn-primary text-center justify-center"
              >
                <span>Don't Be Invisible</span>
              </a>
              <a
                href="#portfolio"
                className="btn-secondary text-center justify-center"
              >
                <span>See Examples</span>
              </a>
            </div>
          </div>

          {/* Visual element - Search visualization */}
          <div className="relative">
            <div className="relative p-8 border shadow-2xl bg-neutral-800 border-neutral-700">
              {/* Phone mockup */}
              <div className="p-4 border border-neutral-700 shadow-xl bg-neutral-900">
                {/* Search bar */}
                <div className="flex items-center gap-3 p-4 mb-6 border bg-neutral-800 border-neutral-700">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm text-neutral-400">Best restaurants Belfast</span>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  {/* Restaurant WITH virtual tour - highlighted */}
                  <div className="relative p-4 border transition-transform duration-700 bg-white/10 border-white/50 group hover:scale-[1.02] ease-luxury">
                    <div className="absolute top-2 right-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 tracking-wide uppercase">
                      VIRTUAL TOUR
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neutral-400 to-neutral-600">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white font-display">Your Restaurant ⭐⭐⭐⭐⭐</h4>
                        <p className="text-xs text-neutral-300">See inside • 360° Tour</p>
                      </div>
                    </div>
                  </div>

                  {/* Regular listings - faded */}
                  <div className="p-4 border opacity-50 bg-neutral-800/50 border-neutral-700">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-neutral-700"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-neutral-400">Competitor A ⭐⭐⭐⭐</h4>
                        <p className="text-xs text-neutral-600">Photos only</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border opacity-50 bg-neutral-800/50 border-neutral-700">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-neutral-700"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-neutral-400">Competitor B ⭐⭐⭐⭐</h4>
                        <p className="text-xs text-neutral-600">Photos only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="absolute -top-4 -right-4 bg-white text-black px-6 py-4 shadow-xl border border-neutral-100">
              <div className="text-3xl font-light font-display">2x</div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">More Clicks</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-black text-white px-6 py-4 shadow-xl">
              <div className="text-3xl font-light font-display">300%</div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase">More Engagement</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-border {
          border-left-width: 4px;
        }
      `}</style>
    </section>
  );
};

export default StorySection;
