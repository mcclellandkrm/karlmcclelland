import React from 'react';
import { motion } from 'framer-motion';

// Import client logos
import bandqLogo from '../assets/client-logos/bandq-logo.svg';
import eaLogo from '../assets/client-logos/ea-logo.svg';
import gohLogo from '../assets/client-logos/goh-logo.svg';
import hiltiLogo from '../assets/client-logos/hilti-logo.svg';
import hyundaiLogo from '../assets/client-logos/hyundai-logo.svg';
import lyricLogo from '../assets/client-logos/lyric-logo.svg';
import niScreenLogo from '../assets/client-logos/ni-screen-logo.png';
import odysseyLogo from '../assets/client-logos/odyssey-logo.svg';
import skodaLogo from '../assets/client-logos/skoda-logo.svg';
import sseLogo from '../assets/client-logos/sse-logo.svg';
import toyotaLogo from '../assets/client-logos/toyota-logo.svg';

const clients = [
  { name: 'Toyota', logo: toyotaLogo },
  { name: 'Hyundai', logo: hyundaiLogo },
  { name: 'Skoda', logo: skodaLogo },
  { name: 'EA', logo: eaLogo },
  { name: 'B&Q', logo: bandqLogo },
  { name: 'Hilti', logo: hiltiLogo },
  { name: 'SSE', logo: sseLogo },
  { name: 'NI Screen', logo: niScreenLogo },
  { name: 'Lyric Theatre', logo: lyricLogo },
  { name: 'Odyssey Arena', logo: odysseyLogo },
  { name: 'Grand Opera House', logo: gohLogo },
];

const ClientLogos: React.FC = () => {
  // Double the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Cinematic Fog Background - matching WhyVirtualTour */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 mb-4 block">
            TRUSTED BY
          </span>
          <h3 className="text-2xl md:text-3xl font-display text-white font-light">
            Industry Leaders
          </h3>
        </motion.div>

        {/* Scrolling Carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex items-center gap-20 animate-scroll"
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group flex items-center justify-center py-6 px-4 transition-all duration-500"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 md:h-12 w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-500 brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
