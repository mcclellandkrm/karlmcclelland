import React from 'react';
import { motion } from 'framer-motion';

const Offerings: React.FC = () => {

  return (
    <section className="section bg-neutral-900 relative overflow-hidden">
      {/* Cinematic Fog Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-label block mb-4 text-brand-stone">SERVICES & PRICING</span>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            Premium Virtual Tours
          </h2>
          <p className="text-base leading-relaxed text-neutral-300 max-w-2xl mx-auto font-body">
            Professional Google-certified virtual tours that turn browsers into bookers. One-time investment, lifetime results.
          </p>
        </motion.div>

        {/* Three Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">

          {/* Essential Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-neutral-800 to-neutral-900 blur opacity-30 group-hover:opacity-75 transition-all duration-700"></div>
            <div className="relative bg-neutral-900/80 border border-neutral-800 p-8 lg:p-10 h-full backdrop-blur-sm">
              <span className="text-[10px] font-mono text-neutral-500 tracking-[0.3em] block mb-4">
                ESSENTIAL
              </span>
              <h3 className="text-2xl font-display text-neutral-400 font-light mb-6">
                Local Business
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display font-light text-white">£599</span>
                <span className="text-neutral-500 text-sm">one-time</span>
              </div>

              <p className="text-base leading-relaxed mb-8 text-neutral-400">
                Perfect for cafes, salons, retail shops, and restaurants. Get found on Google Maps and stand out locally.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  '6 Professional 360° Panospheres',
                  'Published to Google Business Profile',
                  '25+ High-Res Marketing Images',
                  'Website Embed Codes',
                  'Full Commercial Usage Rights',
                  'Google Street View Integration'
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-base text-neutral-400">
                    <span className="text-neutral-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-secondary w-full text-center justify-center block">
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Professional Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-accent-warm/20 to-accent-ember/20 blur opacity-40 group-hover:opacity-80 transition-all duration-700"></div>
            <div className="relative bg-neutral-900/90 border border-accent-warm/30 p-8 lg:p-10 h-full backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono text-accent-warm tracking-[0.3em]">
                  PROFESSIONAL
                </span>
                <span className="text-[10px] font-mono bg-accent-warm/20 text-accent-warm px-2 py-1 rounded">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-display text-white font-light mb-6">
                Hospitality & Retail
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display font-light text-white">£899</span>
                <span className="text-neutral-400 text-sm">one-time</span>
              </div>

              <p className="text-base leading-relaxed mb-8 text-neutral-300">
                Enhanced experience for hotels, restaurants, and premium retail. Includes branded elements and extended coverage.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  '10 Professional 360° Panospheres',
                  'Custom Branded Hotspots',
                  '35+ High-Res Marketing Images',
                  'Interactive Floor Plan',
                  'Social Media Content Package',
                  'Priority Google Publishing',
                  '6 Months Support Included'
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-base text-neutral-300">
                    <span className="text-accent-warm mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary w-full text-center justify-center block">
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-white/30 via-white/20 to-neutral-800 blur opacity-60 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-neutral-900/90 border border-white/20 p-8 lg:p-10 h-full backdrop-blur-sm">
              <span className="text-[10px] font-mono text-neutral-400 tracking-[0.3em] block mb-4">
                PREMIUM
              </span>
              <h3 className="text-2xl font-display text-white font-light mb-6">
                Luxury Experiences
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display font-light text-white">£1,499</span>
                <span className="text-neutral-400 text-sm">one-time</span>
              </div>

              <p className="text-base leading-relaxed mb-8 text-neutral-200">
                Bespoke virtual tours for luxury properties, hotels, and high-end brands. Fully customized storytelling experience.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Unlimited Scenes & Hotspots',
                  'Fully Branded Experience',
                  'Info Panels & Booking Integration',
                  'Hosted on Your Domain',
                  '50+ High-Res Marketing Images',
                  'Video Integration Options',
                  '12 Months Support Included'
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-base text-neutral-200">
                    <span className="text-white/80 mt-1">•</span>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Offerings;