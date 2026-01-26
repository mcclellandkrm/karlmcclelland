import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white section" id="about">
      <div className="container-wide">
        <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Video Side */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-200">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              >
                <source src="/path-to-your-avata-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Google badge - SHARP EDGES */}
            <div className="absolute p-4 bg-white border border-neutral-200 shadow-lg -bottom-6 -right-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-black">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-neutral-500">Google Certified</div>
                  <div className="text-sm font-semibold text-black">Trusted Photographer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="mb-8 text-4xl md:text-5xl font-display text-black leading-tight font-light">
              I Help Design-Conscious Businesses Stand Out
            </h2>

            <div className="mb-8 space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                I'm Karl McClelland, a photographer and virtual tour specialist working with boutique hotels, design showrooms, and businesses that care about presentation.
              </p>

              <p>
                Based in Belfast, I travel across Europe—from Northern Ireland to Austria, Portugal to Poland. If you value quality and design, we'll work well together.
              </p>

              <p>
                Over the past decade, I've created virtual tours for 150+ businesses. My work combines technical Google Street View integration with editorial-quality photography and design sensibility.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pb-8 mb-8 border-b border-neutral-200">
              <div>
                <div className="mb-1 text-3xl font-semibold font-display text-black">150+</div>
                <div className="text-sm text-neutral-500">Businesses</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-semibold font-display text-black">60M+</div>
                <div className="text-sm text-neutral-500">Views Generated</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-semibold font-display text-black">10+</div>
                <div className="text-sm text-neutral-500">Years Experience</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary text-center justify-center">
                Get in Touch
              </a>
              <a href="#portfolio" className="btn-secondary text-center justify-center">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;