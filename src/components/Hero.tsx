import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background / Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Virtual tour showcase"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 metal-overlay" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container-wide relative z-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <h1 className="font-display font-light text-white leading-[1.05] tracking-tight mb-8">
              <span className="block text-[5.5vw] lg:text-[5.5rem]">Bespoke 360°</span>
              <span className="block text-[5.5vw] lg:text-[5.5rem] text-white/90">Virtual Tours</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-200 font-body leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
              Turn browsers into bookers. Build trust and drive business with immersive virtual experiences that feel like a luxury preview.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="#offerings" className="btn-primary">
                See what I do
              </a>
              <a href="#contact" className="btn-secondary">
                Get started
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Virtual tour showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
