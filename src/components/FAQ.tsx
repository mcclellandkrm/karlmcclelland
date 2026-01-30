import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does a virtual tour shoot take?",
    answer: "Most shoots take between 1-2 hours depending on the size of your space. I work efficiently to minimize disruption to your business. You can stay open during the shoot!"
  },
  {
    question: "Do I own the photos and virtual tour?",
    answer: "Yes! You own all the high-resolution photographs (approximately 20 images). The virtual tour is hosted on Google's platform and linked to your Google Business Profile, which you control."
  },
  {
    question: "How quickly will I see results?",
    answer: "Your virtual tour typically goes live on Google Maps and Search within 1-2 weeks after the shoot. You'll see increased engagement almost immediately as customers can now explore your space 24/7."
  },
  {
    question: "What if I need to update the tour later?",
    answer: "Virtual tours are designed to last for years. However, if you make significant changes to your space, I can shoot an updated tour. Many clients find one tour serves them for 3-5 years or more."
  },
  {
    question: "Will this work for my type of business?",
    answer: "Absolutely! Virtual tours work brilliantly for cafes, restaurants, retail shops, hotels, salons, gyms, pubs, holiday rentals, and any business where seeing the space helps customers make a decision."
  },
  {
    question: "Do you travel outside Northern Ireland?",
    answer: "Yes! I regularly travel across Ireland, UK, and continental Europe. From Geneva ski chalets to Portuguese coastal villas - the process and quality remain consistent wherever you are."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container-wide">

        {/* Header - matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display text-black mb-4 font-light">
            Questions
          </h2>
          <p className="text-neutral-500 text-sm uppercase tracking-[0.3em]">
            Common Inquiries
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-1">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-neutral-200 hover:border-neutral-400 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors duration-300"
              >
                <span className="text-xl font-display text-black font-light pr-8">
                  {faq.question}
                </span>
                <span className="text-2xl text-black flex-shrink-0 w-8 h-8 flex items-center justify-center border border-neutral-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-base leading-relaxed text-neutral-600 border-t border-neutral-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
