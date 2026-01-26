import React from 'react';
import { motion } from 'framer-motion';

const WhyVirtualTour: React.FC = () => {
  return (
    <section className="section bg-neutral-900 relative overflow-hidden">
      {/* Cinematic Fog Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>

      <div className="container-wide relative z-10">

        {/* Header - Centered & Precise */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6"
          >
            The Distinction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-[1.1] font-light"
          >
            Experience <span className="text-neutral-500 font-light italic">&</span> Reality
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Option A: Static (The Old Way) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800 to-neutral-900 blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-neutral-900 border border-neutral-800 p-10 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 bg-neutral-600"></div>
                <h3 className="text-xl font-display text-neutral-500 font-light">Traditional Imagery</h3>
              </div>

              <ul className="space-y-8">
                <li className="flex gap-6 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                  <span className="text-neutral-600 font-mono">01</span>
                  <div>
                    <strong className="block text-neutral-400 mb-1">Static & Flat</strong>
                    <p className="text-neutral-500 text-sm leading-relaxed">Customers passively scroll past. No engagement, no exploration.</p>
                  </div>
                </li>
                <li className="flex gap-6 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                  <span className="text-neutral-600 font-mono">02</span>
                  <div>
                    <strong className="block text-neutral-400 mb-1">Uncertainty</strong>
                    <p className="text-neutral-500 text-sm leading-relaxed">"What's around that corner? Is it crowded?" Questions lead to bounces.</p>
                  </div>
                </li>
                <li className="flex gap-6 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                  <span className="text-neutral-600 font-mono">03</span>
                  <div>
                    <strong className="block text-neutral-400 mb-1">Invisible</strong>
                    <p className="text-neutral-500 text-sm leading-relaxed">Google prioritizes interactive content. Static listings get buried.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Option B: Virtual (The Luxury Standard) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-neutral-800 blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-neutral-900 border border-white/30 p-10 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 bg-white shadow-[0_0_10px_#FFFFFF]"></div>
                <h3 className="text-xl font-display text-white font-light">Interactive Immersion</h3>
              </div>

              <ul className="space-y-8">
                <li className="flex gap-6">
                  <span className="text-white font-mono">01</span>
                  <div>
                    <strong className="block text-white mb-1">Command Attention</strong>
                    <p className="text-neutral-300 text-sm leading-relaxed">Users stop scrolling. They tap, turn, and walk through. Engagement skyrockets.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-white font-mono">02</span>
                  <div>
                    <strong className="block text-white mb-1">Absolute Confidence</strong>
                    <p className="text-neutral-300 text-sm leading-relaxed">"I love that table by the window." The decision is made before they arrive.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-white font-mono">03</span>
                  <div>
                    <strong className="block text-white mb-1">Dominance</strong>
                    <p className="text-neutral-300 text-sm leading-relaxed">Google actively boosts listings with 360° content. You appear first.</p>
                  </div>
                </li>
              </ul>

              {/* Glowing CTA */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <a href="#contact" className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-500 group/link">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Start The Tour</span>
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Live Data Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-b border-white/5"
        >
          <div className="text-center">
            <span className="block text-3xl font-display text-white mb-2 font-light">60M+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Views Generated</span>
          </div>
          <div className="text-center border-l border-r border-white/5">
            <span className="block text-3xl font-display text-white mb-2 font-light">150+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Clients Served</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-display text-white mb-2 font-light">100%</span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Google Certified</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyVirtualTour;
