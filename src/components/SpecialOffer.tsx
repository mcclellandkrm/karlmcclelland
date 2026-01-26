import React from 'react';
import { motion } from 'framer-motion';

const SpecialOffer: React.FC = () => {
  return (
    <section className="section bg-neutral-900 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-white/20 px-4 py-1 text-[10px] font-mono tracking-[0.3em] text-white mb-6">
            LIMITED AVAILABILITY
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            The Essential Growth Package
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Elevate your business presence with our signature virtual tour and photography suite.
          </p>
        </motion.div>

        {/* Main Package Card - SHARP EDGES ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto border border-neutral-800 bg-black"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left: Pricing */}
            <div className="lg:col-span-5 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-neutral-800 bg-neutral-950">
              <span className="text-[10px] font-mono text-neutral-600 tracking-[0.3em] block mb-2">
                COMPLETE PACKAGE
              </span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-6xl font-display font-light text-white">£349</span>
              </div>
              <p className="text-neutral-600 text-sm mb-8">Standard Value: £594</p>

              <p className="text-neutral-400 mb-10 leading-relaxed">
                Perfect for cafes, retail boutiques, salons, and local businesses ready to stand out on Google Maps.
              </p>

              {/* CTA - WHITE BUTTON FOR VISIBILITY ON DARK BG */}
              <a href="#contact" className="btn-secondary w-full text-center justify-center block mb-4">
                Book Now
              </a>
              <p className="text-neutral-600 text-xs text-center">
                * Booking 2-3 weeks in advance
              </p>
            </div>

            {/* Right: Features */}
            <div className="lg:col-span-7 p-10 lg:p-12 space-y-8">

              {/* Feature 1 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-display text-white font-light">Google Street View Tour</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-white">—</span>
                    <span><strong className="text-white">Full 360° Virtual Tour</strong> (6 Key Panospheres)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-white">—</span>
                    <span>Published directly to your Google Business Profile</span>
                  </li>
                  <li className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-white">—</span>
                    <span>Street View + Interior Walkthrough integration</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="pt-8 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-display text-white font-light">Commercial Photography</h3>
                  <span className="text-[10px] font-mono border border-white/20 px-2 py-1 text-white tracking-[0.2em]">
                    INCLUDED
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-white">—</span>
                    <span>20+ High-Res Stills (Decor, Features, Signage)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-white">—</span>
                    <span>Full commercial usage rights</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="pt-8 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-display text-white font-light">Digital Optimization</h3>
                  <span className="text-[10px] font-mono border border-white/20 px-2 py-1 text-white tracking-[0.2em]">
                    BONUS
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-white">—</span>
                    <span>Embed codes for website integration</span>
                  </li>
                  <li className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-white">—</span>
                    <span>Google Business Profile Optimization Guide</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SpecialOffer;
