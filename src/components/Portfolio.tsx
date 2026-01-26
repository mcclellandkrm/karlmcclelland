import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

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
    type: "Retail Store",
    location: "Belfast",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80",
    tourUrl: "https://walkinto.in/easyembedview/-yHP0G_qIn-1xHwCz_58n",
    description: "Premium menswear boutique"
  },
  {
    id: 2,
    name: "Luxury Property",
    type: "Accommodation",
    location: "Donegal",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Coastal luxury accommodation"
  },
  {
    id: 3,
    name: "Kitchen Design",
    type: "Showroom",
    location: "Belfast",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Contemporary design space"
  },
  {
    id: 4,
    name: "Wine & Spirits",
    type: "Retail Store",
    location: "Northern Ireland",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format&fit=crop&q=80",
    tourUrl: "https://walkinto.in/easyembedview/bJE0A9kzD3bkgN0Cq1fDn",
    description: "Premium wine retailer"
  },
  {
    id: 5,
    name: "Grand Central",
    type: "Hospitality",
    location: "Belfast",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Luxury hotel experience"
  }
];

const Portfolio: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="portfolio" className="relative h-[300vh] bg-stone-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <motion.div style={{ x }} className="flex gap-20 items-center pl-16 md:pl-32 lg:pl-64">

          {/* Title Card / Introduction */}
          <div className="flex-shrink-0 w-[400px] md:w-[600px] pr-20">
            <span className="block mb-6 text-neutral-600 font-bold uppercase tracking-widest text-sm">Selected Work</span>
            <h2 className="mb-8 text-4xl md:text-5xl font-display text-black leading-tight font-light">
              Virtual Showcase
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-md">
              Explore a curated selection of our finest immersive tours across retail, hospitality, and real estate.
            </p>
            <div className="mt-8 flex items-center gap-2 text-neutral-500 text-sm uppercase tracking-widest">
              Scroll <span className="animate-bounce">↓</span> to explore
            </div>
          </div>

          {/* Portfolio Items */}
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={item.tourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 w-[80vw] md:w-[600px] lg:w-[800px] h-[50vh] md:h-[60vh] overflow-hidden"
            >
              <div className="w-full h-full relative overflow-hidden bg-neutral-200">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full transition-transform duration-1000 ease-luxury group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-8 left-8 z-20">
                <div className="overflow-hidden">
                  <p className="text-neutral-300 text-sm font-bold uppercase tracking-widest mb-1 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {item.type}
                  </p>
                </div>
                <h3 className="text-4xl md:text-5xl font-display text-white">
                  {item.name}
                </h3>
                <div className="h-px w-0 group-hover:w-full bg-white mt-4 transition-all duration-700 delay-100"></div>
              </div>
            </a>
          ))}

          {/* End Spacer */}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;