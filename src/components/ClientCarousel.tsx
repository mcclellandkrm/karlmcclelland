import React from 'react';



const ClientCarousel: React.FC = () => {

  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="container-wide">
        <p className="text-center text-sm font-bold tracking-widest text-stone-400 uppercase mb-12 font-display">
          Trusted by Premier Businesses
        </p>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logos would go here - using text placeholders for now with premium typography */}
            <div className="text-2xl font-display text-stone-400 font-bold">SOMERVILLE</div>
            <div className="text-2xl font-display text-stone-400 font-bold">SUITOR BROS</div>
            <div className="text-2xl font-display text-stone-400 font-bold">BULLITT</div>
            <div className="text-2xl font-display text-stone-400 font-bold">MERCHANT</div>
            <div className="text-2xl font-display text-stone-400 font-bold">TITANIC</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
