import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItem {
  id: number;
  name: string;
  type: string;
  location: string;
  image: string;
  tourUrl: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "Suitor Brothers",
    type: "Menswear Retail",
    location: "Belfast, UK",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80",
    tourUrl: "https://walkinto.in/easyembedview/-yHP0G_qIn-1xHwCz_58n",
    description: "Premium menswear boutique. Virtual tour showcases curated collections and fitting experience."
  },
  {
    id: 2,
    name: "Café Central",
    type: "Independent Café",
    location: "Munich, Germany",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Traditional German café. Virtual experience captures authentic atmosphere and menu highlights."
  },
  {
    id: 3,
    name: "Luxury Villa",
    type: "Holiday Rental",
    location: "Algarve, Portugal",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Premium holiday villa. Guests explore luxury amenities and coastal views before booking."
  },
  {
    id: 4,
    name: "Fitness Studio",
    type: "Local Gym",
    location: "Belfast, UK",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Modern fitness facility. Virtual tour showcases equipment, classes, and community atmosphere."
  },
  {
    id: 5,
    name: "Wine Merchant",
    type: "Specialist Retail",
    location: "Dublin, Ireland",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format&fit=crop&q=80",
    tourUrl: "https://walkinto.in/easyembedview/bJE0A9kzD3bkgN0Cq1fDn",
    description: "Curated wine collection. Virtual experience highlights rare vintages and expert recommendations."
  },
  {
    id: 6,
    name: "Boutique Hotel",
    type: "Hospitality",
    location: "Prague, Czech Republic",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Historic boutique hotel. Guests preview elegant rooms and city views before arrival."
  }
];

const Portfolio: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 font-light">
            Recent Work
          </h2>
          <p className="text-neutral-400 text-sm uppercase tracking-[0.3em]">
            Across Europe & UK
          </p>
        </motion.div>

        {/* Portfolio Grid - Simple 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden border border-neutral-800 hover:border-white/30 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[320px] flex flex-col justify-end">
                <div className="mb-3">
                  <span className="text-neutral-300 text-sm uppercase tracking-[0.2em]">
                    {item.type}
                  </span>
                </div>
                <h4 className="text-xl font-display text-white font-light mb-2">
                  {item.name}
                </h4>
                <p className="text-neutral-400 text-sm mb-3">
                  {item.location}
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
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

export default Portfolio;
