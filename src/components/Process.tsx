import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your space, goals, and timeline. I understand your business and create a tailored approach."
    },
    {
      number: "02",
      title: "Capture & Creation",
      description: "I visit your location for 1-2 hours of professional 360° photography and virtual tour creation."
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description: "Within 14 days: live tour, high-res images, Google integration, and optimization guidance."
    }
  ];

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Subtle grid pattern */}
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            How It Works
          </h2>
          <p className="text-label text-neutral-400">
            Simple. Fast. Effective.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-neutral-900 border border-neutral-800 p-8 hover:border-white hover:bg-neutral-800 transition-all duration-500"
            >
              {/* Step Number */}
              <div className="mb-6">
                <span className="text-[10px] font-mono text-neutral-400 tracking-[0.2em]">
                  STEP
                </span>
                <div className="text-4xl font-display font-light text-white mt-1">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display text-white mb-4 font-light">
                {step.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed font-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;