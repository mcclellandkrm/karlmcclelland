import React from 'react';
import { motion } from 'framer-motion';
import ClientLogos from './ClientLogos';

const Proof: React.FC = () => {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container-wide relative z-10">

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 pb-12 mb-12 border-b border-neutral-200"
        >
          <div>
            <div className="text-4xl font-display font-light text-accent-warm mb-1">60+ M</div>
            <div className="text-label">Views Generated across Google</div>
          </div>
          <div>
            <div className="text-4xl font-display font-light text-accent-warm mb-1">10+</div>
            <div className="text-label">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-display font-light text-accent-warm mb-1">150+</div>
            <div className="text-label">Businesses Transformed</div>
          </div>
        </motion.div>

        {/* Google Certified + Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          {/* Google Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <img
              src="/logos/googlelogos/streetview-logo.svg"
              alt="Google Street View"
              className="w-12 h-12"
            />
            <div>
              <div className="text-lg font-semibold text-black">Google Certified</div>
              <div className="text-sm font-medium text-neutral-500">Trusted Photographer</div>
            </div>
          </div>

          {/* Client Logos */}
          <ClientLogos />
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl leading-relaxed text-neutral-700 mb-6 italic font-body">
            "We've noticed a big increase in public awareness of who we are, what we offer and how to find out and that is definitely helping sales. Excellent work and value for money."
          </blockquote>
          <cite className="text-label text-brand-stone">
            Chris Suitor, Suitor Brothers Menswear
          </cite>
        </motion.div>

      </div>
    </section>
  );
};

export default Proof;