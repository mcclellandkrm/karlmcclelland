import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SpecialOffer: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'gsv' | 'custom' | null>(null);

  return (
    <section className="section bg-neutral-900 relative overflow-hidden">
      {/* Cinematic Fog Background - matching WhyVirtualTour */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 mb-4 block">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            Two Ways to Work Together
          </h2>
          <p className="text-base leading-relaxed text-neutral-300 max-w-2xl mx-auto">
            From Google visibility for local businesses to bespoke virtual experiences for luxury properties.
          </p>
        </motion.div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1: Google Street View */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
            onMouseEnter={() => setActivePanel('gsv')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className={`absolute -inset-1 bg-gradient-to-br from-neutral-800 to-neutral-900 blur transition-all duration-700 ${activePanel === 'gsv' ? 'opacity-75' : 'opacity-30'}`}></div>
            <div className="relative bg-neutral-900/80 border border-neutral-800 p-10 lg:p-12 h-full backdrop-blur-sm">
              <span className="text-[10px] font-mono text-neutral-500 tracking-[0.3em] block mb-4">
                GOOGLE STREET VIEW
              </span>
              <h3 className="text-2xl lg:text-3xl font-display text-neutral-400 font-light mb-2">
                Local Business
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display font-light text-white">£349</span>
                <span className="text-neutral-500 text-sm">fixed price</span>
              </div>

              <p className={`text-base leading-relaxed mb-8 transition-all duration-500 ${activePanel === 'gsv' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                Get found on Google Maps. Perfect for cafes, salons, retail shops, and restaurants wanting to stand out locally.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  '6 Key 360° Panospheres',
                  'Published to Google Business Profile',
                  '20+ High-Res Commercial Stills',
                  'Website Embed Codes',
                  'Full Commercial Usage Rights'
                ].map((item, index) => (
                  <li
                    key={index}
                    className={`flex gap-3 text-base transition-all duration-500 ${activePanel === 'gsv' ? 'text-neutral-300' : 'text-neutral-500'}`}
                  >
                    <span className="text-neutral-600">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-secondary w-full text-center justify-center block">
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Card 2: Custom Virtual Tours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
            onMouseEnter={() => setActivePanel('custom')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-br from-white/30 via-white/10 to-neutral-800 blur transition-all duration-700 ${activePanel === 'custom' ? 'opacity-100' : 'opacity-60'}`}></div>
            <div className="relative bg-neutral-900/90 border border-white/20 p-10 lg:p-12 h-full backdrop-blur-sm">
              <span className="text-[10px] font-mono text-neutral-400 tracking-[0.3em] block mb-4">
                CUSTOM VIRTUAL TOURS
              </span>
              <h3 className="text-2xl lg:text-3xl font-display text-white font-light mb-2">
                Bespoke Experiences
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display font-light text-white">Custom</span>
                <span className="text-neutral-400 text-sm">quote</span>
              </div>

              <p className={`text-base leading-relaxed mb-8 transition-all duration-500 ${activePanel === 'custom' ? 'text-neutral-200' : 'text-neutral-400'}`}>
                Immersive storytelling for hotels, luxury villas, and high-end properties. Your brand, your experience—no Google branding.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Unlimited Scenes & Hotspots',
                  'Fully Branded Experience',
                  'Info Panels & Booking Integration',
                  'Hosted on Your Domain',
                  '5-10 Minute Visitor Engagement'
                ].map((item, index) => (
                  <li
                    key={index}
                    className={`flex gap-3 text-base transition-all duration-500 ${activePanel === 'custom' ? 'translate-x-1 text-neutral-200' : 'text-neutral-400'}`}
                  >
                    <span className="text-white/60">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary w-full text-center justify-center block">
                Get a Quote
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SpecialOffer;
