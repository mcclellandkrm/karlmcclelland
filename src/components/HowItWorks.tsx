import React from 'react';
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
  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

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
              className="group relative bg-neutral-900 border border-neutral-800 p-8 hover:border-white transition-all duration-500"
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
              <h3 className="text-lg font-display text-white mb-3 font-light">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                {step.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Location Flexibility - Architectural Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Content */}
            <div className="p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 tracking-[0.3em] mb-4 block">
                GLOBAL COVERAGE
              </span>
              <h3 className="text-3xl md:text-4xl font-display text-white mb-6 font-light">
                I Come to You
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Based in Belfast, regularly traveling across Ireland, UK, and continental Europe.
                From Geneva ski chalets to Portuguese coastal villas—the process and quality remain consistent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Start a Project
                </a>
                <a href="tel:+447960044486" className="btn-secondary">
                  Call +44 7960 044 486
                </a>
              </div>
            </div>

            {/* Right: Current Locations */}
            <div className="p-12 lg:p-16 bg-black/30">
              <span className="text-[10px] font-mono text-neutral-400 tracking-[0.3em] mb-6 block">
                CURRENT SCHEDULE
              </span>
              <div className="space-y-4">
                {['Northern Ireland', 'Austria', 'Portugal'].map((location, i) => (
                  <div key={i} className="flex items-center gap-4 pb-4 border-b border-neutral-800 last:border-0">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-white text-sm">{location}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;