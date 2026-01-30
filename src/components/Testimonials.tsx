import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chris Suitor",
    role: "Suitor Brothers Menswear",
    company: "Menswear Retailer",
    content: "We've noticed a big increase in public awareness of who we are, what we offer and how to find out and that is definitely helping sales. Excellent work and value for money and we really appreciate his attention to detail."
  },
  {
    id: 2,
    name: "Sarah McKenna",
    role: "The Merchant Hotel",
    company: "Luxury Hospitality",
    content: "The virtual tour has transformed how guests discover our property. The level of detail and professionalism is outstanding. We've seen a measurable increase in direct bookings."
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Thompson Estate Agents",
    company: "Real Estate",
    content: "Karl's virtual tours have become an essential part of our property marketing. The quality is exceptional and the Google integration has significantly improved our online visibility."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-neutral-900 relative overflow-hidden">
      {/* Cinematic Fog Background - matching other sections */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>

      <div className="container-wide relative z-10">

        {/* Header - matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            What Clients Are Saying
          </h2>
          <p className="text-neutral-400 text-sm uppercase tracking-[0.3em]">
            Real Results. Real Businesses.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-xl opacity-50"></div>

            <div className="relative bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm p-12 md:p-16">

              {/* Large Quote Mark */}
              <div className="absolute top-8 left-8 text-white/5">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Content with AnimatePresence for smooth transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-light mb-10">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white text-black flex items-center justify-center font-display text-2xl font-light">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-display text-xl font-light mb-1">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-neutral-300 text-base">
                        {currentTestimonial.role}
                      </div>
                      <div className="text-neutral-400 text-sm uppercase tracking-[0.2em] mt-1">
                        {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-neutral-700 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-white w-10'
                      : 'bg-neutral-700 w-2 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-neutral-700 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
