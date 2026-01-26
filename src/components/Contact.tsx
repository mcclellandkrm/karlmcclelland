import React, { useState } from 'react';

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
      // TODO: Replace with your actual Formspree form ID
      const FORMSPREE_ID = 'myzknydd'; // Get this from formspree.io after signing up

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
    <section className="bg-white py-20 section" id="contact">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <h2 className="mb-6 text-4xl md:text-5xl font-display text-black font-light">
              Ready to Get <span className="text-black">Discovered?</span>
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-neutral-600">
              Let's showcase your business with a professional Google Street View virtual tour.
              Perfect for small businesses ready to stand out.
            </p>

            <div className="mb-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-neutral-100">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium font-display text-black">Email</h4>
                  <a href="mailto:me@karlmcclelland.com" className="transition-colors text-neutral-600 hover:text-black">
                    me@karlmcclelland.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-bronze-100">
                  <svg className="w-6 h-6 text-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium font-display text-stone-800">Phone</h4>
                  <a href="tel:+447960044486" className="transition-colors text-stone-500 hover:text-bronze-600">
                    +44 7960 044 486
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-bronze-100">
                  <svg className="w-6 h-6 text-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium font-display text-black">Across Northern Ireland</h4>
                  <p className="text-neutral-600">
                    From Belfast to Ballymoney, Derry to Newry - serving all of NI
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-200">
              <h3 className="mb-4 text-2xl font-display text-black font-light">What Happens Next?</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold text-white bg-black">1</span>
                  <p className="pt-1 text-neutral-600">I'll review your business and get in touch within 24 hours</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold text-white bg-black">2</span>
                  <p className="pt-1 text-neutral-600">We'll schedule a convenient time for the shoot (usually 1-2 hours)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold text-white bg-black">3</span>
                  <p className="pt-1 text-neutral-600">Your tour goes live on Google within 1-2 weeks</p>
                </li>
              </ol>
            </div>
          </div>

          {/* Right side - Form */}
          {/* Right side - Form */}
          <div id="contact-form" className="p-10 bg-white border border-neutral-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-100 -mr-16 -mt-16 opacity-50"></div>

            <h3 className="mb-8 text-3xl font-display text-black font-light relative z-10">Get Your Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="name" className="block mb-2 text-xs font-bold uppercase tracking-widest text-neutral-500 group-focus-within:text-black transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pb-2 bg-transparent border-b border-neutral-300 focus:border-black outline-none text-black transition-all duration-500 placeholder-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div className="group">
                  <label htmlFor="business" className="block mb-2 text-xs font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-bronze-600 transition-colors">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full pb-2 bg-transparent border-b border-stone-200 focus:border-bronze-500 outline-none text-stone-900 transition-all duration-500 placeholder-transparent"
                    placeholder="The Corner Cafe"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block mb-2 text-xs font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-bronze-600 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pb-2 bg-transparent border-b border-stone-200 focus:border-bronze-500 outline-none text-stone-900 transition-all duration-500 placeholder-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="phone" className="block mb-2 text-xs font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-bronze-600 transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pb-2 bg-transparent border-b border-stone-200 focus:border-bronze-500 outline-none text-stone-900 transition-all duration-500 placeholder-transparent"
                  placeholder="028 XXXX XXXX"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block mb-2 text-xs font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-bronze-600 transition-colors">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pb-2 bg-transparent border-b border-stone-200 focus:border-bronze-500 outline-none text-stone-900 resize-none transition-all duration-500 placeholder-transparent"
                  placeholder="Project details..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Request Quote'}</span>
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 text-center border bg-neutral-50 border-neutral-300">
                  <p className="font-medium text-black">Thanks for your interest! I'll be in touch within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 text-center bg-red-50 border border-red-300">
                  <p className="font-medium text-red-600">Oops! Something went wrong. Please email me directly at me@karlmcclelland.com</p>
                </div>
              )}

              <p className="text-sm text-center text-neutral-500">
                No obligation. I'll send you pricing and availability within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
