import React, { useState } from 'react';

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
    description: "Step inside Belfast's premier menswear destination. Our virtual tour showcases the carefully curated collection and bespoke fitting experience."
  },
  {
    id: 2,
    name: "Luxury Property",
    type: "Accommodation",
    location: "Donegal",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "Experience coastal luxury from anywhere in the world. This immersive tour lets guests explore every detail before booking their stay."
  },
  {
    id: 3,
    name: "Kitchen Design",
    type: "Showroom",
    location: "Belfast",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&auto=format&fit=crop&q=80",
    tourUrl: "#",
    description: "A contemporary design showroom brought to life. Clients can explore kitchen configurations and finishes in stunning 360° detail."
  },
  {
    id: 4,
    name: "Wine & Spirits",
    type: "Retail Store",
    location: "Northern Ireland",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&auto=format&fit=crop&q=80",
    tourUrl: "https://walkinto.in/easyembedview/bJE0A9kzD3bkgN0Cq1fDn",
    description: "Browse an extensive collection of premium wines and spirits. The virtual tour captures the atmosphere and expertise of this specialist retailer."
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Display first 4 items in 2 rows
  const row1 = portfolioItems.slice(0, 2);
  const row2 = portfolioItems.slice(2, 4);

  const getFlexBasis = (itemId: number, rowItems: PortfolioItem[], isFirstInRow: boolean) => {
    const isInRow = rowItems.some(item => item.id === hoveredId);

    // Default state: first card 55%, second card 45%
    if (hoveredId === null || !isInRow) {
      return isFirstInRow ? '55%' : '45%';
    }

    // Hovered state
    if (hoveredId === itemId) return '62%';
    return '38%';
  };

  const renderCard = (item: PortfolioItem, rowItems: PortfolioItem[], index: number) => {
    const isHovered = hoveredId === item.id;
    const isFirstInRow = index === 0;
    const flexBasis = getFlexBasis(item.id, rowItems, isFirstInRow);

    return (
      <a
        key={item.id}
        href={item.tourUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden"
        style={{
          flexBasis,
          transition: 'flex-basis 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)',
          borderRadius: '24px 24px 0 24px',
        }}
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {/* Card Container with cut corner */}
        <div
          className="relative w-full"
          style={{
            height: '420px',
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col">
            {/* Top: Category Tag */}
            <div>
              <span
                className="inline-block px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                {item.type}
              </span>
            </div>

            {/* Middle/Bottom: Title & Description */}
            <div className="mt-auto pb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-light mb-4">
                {item.name}
              </h3>
              <p
                className="text-white/90 text-base leading-relaxed max-w-sm transition-all duration-500"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                {item.description}
              </p>
            </div>
          </div>

          {/* Arrow Button - positioned at the angled cut corner */}
          <div
            className="absolute w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: isHovered ? '#FF9500' : 'white',
              bottom: '8px',
              right: '8px',
            }}
          >
            <svg
              className="w-5 h-5 transition-all duration-300"
              style={{
                color: isHovered ? 'white' : 'black',
                transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="portfolio" className="section bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16">
          <span className="block mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Selected Work
          </span>
          <h2>Virtual Showcase</h2>
        </div>

        {/* Grid - 2 rows */}
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex gap-4">
            {row1.map((item, index) => renderCard(item, row1, index))}
          </div>
          {/* Row 2 */}
          <div className="flex gap-4">
            {row2.map((item, index) => renderCard(item, row2, index))}
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 hover:text-orange-500 transition-colors duration-300"
          >
            View all work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
