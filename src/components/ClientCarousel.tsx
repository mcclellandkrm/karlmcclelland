import React from 'react';



const ClientCarousel: React.FC = () => {

  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="container-wide">
        <p className="text-center text-sm font-bold tracking-widest text-brand-stone uppercase mb-12 font-display">
          Trusted by Premier Businesses
        </p>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-carousel">
            {['SOMERVILLE', 'SUITOR BROS', 'BULLITT', 'MERCHANT', 'TITANIC', 'VICTORINOX', 'SANDQVIST'].map((name) => (
              <div key={name} className="text-2xl font-display text-stone-400 font-semibold whitespace-nowrap">
                {name}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-neutral-50 via-neutral-50/0 to-neutral-50" />
        </div>
      </div>

      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;
