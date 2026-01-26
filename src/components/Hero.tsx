import React, { useRef, useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container-wide relative z-20 text-center">
        <h1 className="font-display font-light text-white leading-[0.95] tracking-tighter mb-8">
          <span className="block text-[8vw] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]">
            Custom Virtual
          </span>
          <span className="block text-[8vw] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] text-white/90">
            Experiences.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto mb-4">
          Bespoke 360° tours for luxury hospitality and real estate.
        </p>
        <p className="text-base md:text-lg text-neutral-400 font-light max-w-xl mx-auto mb-12">
          Seamlessly integrated with Google Maps & Search
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#portfolio" className="btn-secondary">
            View Recent Work
          </a>
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
