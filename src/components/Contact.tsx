import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const FORMSPREE_ID = 'myzknydd';

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', business: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section bg-white" id="contact">
      <div className="container-wide">

        {/* Header - matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-black mb-4 font-light">
            Let's Work Together
          </h2>
          <p className="text-neutral-500 text-sm uppercase tracking-[0.3em]">
            Start a Conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed text-neutral-600 mb-12">
              Ready to showcase your business with a professional virtual tour?
              Whether you're a local cafe or a luxury European property, let's discuss how to bring your space to life.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-neutral-100">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-display text-black font-light mb-1">Email</h4>
                  <a href="mailto:me@karlmcclelland.com" className="text-base text-neutral-600 hover:text-black transition-colors">
                    me@karlmcclelland.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-neutral-100">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-display text-black font-light mb-1">Phone</h4>
                  <a href="tel:+447960044486" className="text-base text-neutral-600 hover:text-black transition-colors">
                    +44 7960 044 486
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-neutral-100">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-display text-black font-light mb-1">Location</h4>
                  <p className="text-base text-neutral-600">
                    Based in Belfast. Working across Ireland, UK & Europe.
                  </p>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="pt-10 border-t border-neutral-200">
              <h3 className="text-2xl font-display text-black font-light mb-6">What Happens Next</h3>
              <ol className="space-y-4">
                {[
                  "I'll review your enquiry and respond within 24 hours",
                  "We'll schedule a convenient time for the shoot",
                  "Your tour goes live within 1-2 weeks"
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white bg-black">
                      {index + 1}
                    </span>
                    <p className="text-base text-neutral-600 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 border border-neutral-200 p-10 lg:p-12"
          >
            <h3 className="text-2xl font-display text-black font-light mb-8">Get Your Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pb-3 bg-transparent border-b border-neutral-300 focus:border-black outline-none text-black text-base transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block mb-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full pb-3 bg-transparent border-b border-neutral-300 focus:border-black outline-none text-black text-base transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pb-3 bg-transparent border-b border-neutral-300 focus:border-black outline-none text-black text-base transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pb-3 bg-transparent border-b border-neutral-300 focus:border-black outline-none text-black text-base transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pb-3 bg-transparent border-b border-neutral-300 focus:border-black outline-none text-black text-base resize-none transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Quote'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 text-center bg-neutral-100 border border-neutral-300">
                  <p className="text-base text-black">Thanks for your interest! I'll be in touch within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 text-center bg-red-50 border border-red-200">
                  <p className="text-base text-red-600">Something went wrong. Please email me directly at me@karlmcclelland.com</p>
                </div>
              )}

              <p className="text-sm text-center text-neutral-500">
                No obligation. Pricing and availability within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
