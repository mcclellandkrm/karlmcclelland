import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chris Suitor",
    role: "Suitor Brothers Menswear",
    company: "Menswear Retailer",
    content: "We've noticed a big increase in public awareness of who we are, what we offer and how to find out and that is definitely helping sales. Excellent work and value for money and we really appreciate his attention to detail.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah McKenna",
    role: "The Merchant Hotel",
    company: "Luxury Hospitality",
    content: "The virtual tour has transformed how guests discover our property. The level of detail and professionalism is outstanding. We've seen a measurable increase in direct bookings.",
    rating: 5
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Thompson Estate Agents",
    company: "Real Estate",
    content: "Karl's virtual tours have become an essential part of our property marketing. The quality is exceptional and the Google integration has significantly improved our online visibility.",
    rating: 5
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
    <section className="section bg-black relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            What Clients Are Saying
          </h2>
          <p className="text-neutral-400 text-sm uppercase tracking-[0.3em]">
            Real results from schools, businesses, and organizations across Northern Ireland
          </p>
        </div>

        {/* Testimonial Card - Sharp Edges, High Contrast */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-neutral-900 border border-neutral-800 p-12 md:p-16">

            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-white opacity-10">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="mb-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-white leading-relaxed font-light mb-8">
                  "{currentTestimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-display text-xl font-light">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-lg">{currentTestimonial.name}</div>
                  <div className="text-neutral-300 text-base">{currentTestimonial.role}</div>
                  <div className="text-neutral-400 text-sm uppercase tracking-wider">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
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
