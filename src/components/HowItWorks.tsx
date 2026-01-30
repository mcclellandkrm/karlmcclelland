import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your property, target audience, and specific requirements. Whether boutique hotel or luxury villa, we tailor the approach."
  },
  {
    number: "02",
    title: "On-Site Capture",
    description: "I travel to your location with professional 360° equipment. Shoot duration: 1-2 hours. Your property remains operational throughout."
  },
  {
    number: "03",
    title: "Post-Production",
    description: "HDR processing, color grading, and Google Street View integration. You receive high-resolution stills for marketing collateral."
  },
  {
    number: "04",
    title: "Delivery & Integration",
    description: "Within 14 days: live Google tour, downloadable image library, embed codes, and optimization guidance for maximum visibility."
  }
];

const HowItWorks: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Subtle grid pattern with parallax */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      ></div>

      <div className="container-wide relative z-10">

        {/* Header - Minimal & Precise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            Process
          </h2>
          <p className="text-neutral-400 text-sm uppercase tracking-[0.3em]">
            Precision. Efficiency. Excellence.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.19, 1, 0.22, 1]
              }}
              className="group relative bg-neutral-900 border border-neutral-800 p-8 hover:border-white hover:bg-neutral-800 transition-all duration-500"
            >
              {/* Step Number */}
              <div className="mb-6">
                <span className="text-[10px] font-mono text-neutral-400 tracking-[0.2em]">
                  STEP
                </span>
                <div className="text-5xl font-display font-light text-white mt-1">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display text-white mb-3 font-light">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-300">
                {step.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Where I'm Heading - Dynamic Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Section Header - matching Process header above */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
              Where I'm Heading
            </h3>
            <p className="text-neutral-400 text-sm uppercase tracking-[0.3em] mb-6">
              Upcoming Trips
            </p>
            <p className="text-base leading-relaxed text-neutral-300 max-w-2xl mx-auto">
              Planning shoots across Europe. If your property is in one of these destinations,
              join the itinerary and share travel costs.
            </p>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                destination: 'Portugal',
                region: 'Algarve & Lisbon Coast',
                timing: 'Spring 2026',
                image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80'
              },
              {
                destination: 'Austria',
                region: 'Tyrol & Salzburg',
                timing: 'Winter 2026',
                image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
              },
              {
                destination: 'Poland',
                region: 'Krakow & Surrounding',
                timing: 'Q2 2026',
                image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80'
              }
            ].map((trip, index) => (
              <motion.div
                key={trip.destination}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group relative overflow-hidden border border-neutral-800 hover:border-white/30 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
                  <span className="text-neutral-300 text-base uppercase tracking-[0.2em] mb-2">
                    {trip.timing}
                  </span>
                  <h4 className="text-2xl font-display text-white font-light mb-2">
                    {trip.destination}
                  </h4>
                  <p className="text-neutral-300 text-base leading-relaxed">
                    {trip.region}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section with Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left: Content */}
              <div>
                <h4 className="text-2xl font-display text-white font-light mb-4">
                  Business in one of these areas?
                </h4>
                <p className="text-base leading-relaxed text-neutral-300">
                  Join an existing trip and benefit from shared travel costs. Limited slots per destination.
                </p>
              </div>

              {/* Right: Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-neutral-800/50 border border-neutral-700 px-4 py-3 text-white text-base placeholder-neutral-400 focus:outline-none focus:border-white transition-colors duration-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-neutral-800/50 border border-neutral-700 px-4 py-3 text-white text-base placeholder-neutral-400 focus:outline-none focus:border-white transition-colors duration-300"
                    required
                  />
                </div>

                {/* GDPR Consent */}
                <label className="flex items-start gap-3 cursor-pointer group pt-2">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-1 w-4 h-4 accent-white"
                    required
                  />
                  <span className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                    I consent to being contacted about upcoming trips and services. View our privacy policy.
                  </span>
                </label>

                <button
                  type="submit"
                  className="px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] bg-white text-black border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
                >
                  Let Me Know
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;