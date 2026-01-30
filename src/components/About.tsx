import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative overflow-hidden section" id="about">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container-wide">
        <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-[40%_1fr]">
          {/* Video Side */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100 relative">
              {/* Video placeholder */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                poster=""
              >
                <source src="/videos/karl-drone-intro.mp4" type="video/mp4" />
              </video>

              {/* Placeholder overlay - remove when video is added */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-200">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-neutral-300">
                  <svg className="w-8 h-8 ml-1 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm tracking-widest uppercase text-neutral-500">Video Placeholder</p>
                <p className="mt-2 text-xs text-neutral-400">Drone rising • Eyes left</p>
              </div>
            </div>

            {/* Google badge - SHARP EDGES */}
            <div className="absolute p-4 bg-white border shadow-lg border-neutral-200 -bottom-6 -right-6">
              <div className="flex items-center gap-3">
                <img
                  src="/src/assets/streetview-logo.svg"
                  alt="Google Street View"
                  className="w-10 h-10"
                />
                <div>
                  <div className="text-sm font-semibold text-black">Google Certified</div>
                  <div className="text-xs font-medium text-neutral-500">Trusted Photographer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="mb-8 text-4xl font-light leading-tight text-black md:text-5xl font-display">
              Thought-Provoking Businesses Standing Out
            </h2>

            <div className="mb-8 space-y-4 text-lg leading-relaxed text-neutral-700">
              <p>
                As a virtual tour specialist and photographer, I work with owners of AirBnBs, villas, boutique hotels, design showrooms, and businesses where presentation matters. I understand that your paying customers have choices. You are a stranger to them and they can only rely on the first impression you give them. If it's mediocre they may go elsewhere. If this impression is great then they are likely to want to do business with you.
              </p>

              <p>
                Over the past decade, I've created virtual tours for 150+ businesses. My work combines technical Google Street View integration with editorial-quality photography and design sensibility to bespoke custom projects for schools with special needs children to working with some very impossible clients ranging from pizza parlours to iconic automotive brands.
              </p>

              <p>
                I'm based in Belfast, I travel across Europe from Dublin to Dusseldorf, from Londonderry to Luzern. I have a no-nonsense approach to business, a great set of skills (and best practices) so, if you value quality and design, we'll work well together.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pb-8 mb-8 border-b border-neutral-200">
              <div>
                <div className="mb-1 text-3xl font-semibold text-black font-display">60+ M</div>
                <div className="text-sm text-neutral-500">Views Generated across Google</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-semibold text-black font-display">10+</div>
                <div className="text-sm text-neutral-500">Years Experience</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-semibold text-black font-display">150+</div>
                <div className="text-sm text-neutral-500">Businesses Transformed</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="justify-center text-center btn-primary">
                Get in Touch
              </a>
              <a href="#faq" className="justify-center text-center btn-secondary">
                Your Questions Answered
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
