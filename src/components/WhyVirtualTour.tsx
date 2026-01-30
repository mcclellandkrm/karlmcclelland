import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WhyVirtualTour: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'traditional' | 'interactive' | null>(null);

  const traditionalPoints = [
    {
      title: 'Forgettable',
      description: 'Another rectangle in a feed. Scrolled past in 1.3 seconds.',
    },
    {
      title: 'Doubt',
      description: '"Is it really this nice?" Stock-photo skepticism kills conversions.',
    },
    {
      title: 'Invisible',
      description: "Google's algorithm buries static. You sink.",
    },
  ];

  const interactivePoints = [
    {
      title: 'Magnetic',
      description: 'Users explore for 5-10 minutes. They\'re invested before arrival.',
    },
    {
      title: 'Transparent',
      description: 'What they see is what they get. Confidence converts.',
    },
    {
      title: 'Dominant',
      description: '360° content ranks higher. You rise.',
    },
  ];

  return (
    <section className="section bg-neutral-900 relative overflow-hidden">
      {/* Cinematic Fog Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80"></div>

      <div className="container-wide relative z-10">

        {/* Header - Centered & Precise */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6"
          >
            The Distinction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-[1.1] font-light"
          >
            Experience <span className="text-neutral-500 font-light italic">&</span> Reality
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Traditional Panel - Deliberately Muted */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative"
            onMouseEnter={() => setActivePanel('traditional')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className={`absolute -inset-1 bg-gradient-to-br from-neutral-800 to-neutral-900 blur transition-all duration-700 ${activePanel === 'traditional' ? 'opacity-75' : 'opacity-30'}`}></div>
            <div className="relative bg-neutral-900/80 border border-neutral-800 p-10 lg:p-12 h-full backdrop-blur-sm">

              {/* Header with Playfair */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600">The Old Way</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-display text-neutral-500 font-light tracking-wide">
                  Traditional
                </h3>
              </div>

              <ul className="space-y-6">
                {traditionalPoints.map((point, index) => (
                  <motion.li
                    key={point.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`flex gap-5 transition-all duration-500 ${activePanel === 'traditional' ? 'opacity-90' : 'opacity-40'}`}
                  >
                    <span className="text-neutral-700 font-mono text-base mt-0.5">0{index + 1}</span>
                    <div>
                      <strong className="block text-neutral-400 mb-1.5 text-base tracking-wide">{point.title}</strong>
                      <p className="text-neutral-600 text-base leading-relaxed">{point.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Visual indicator - faded/static feel */}
              <div className="mt-10 pt-6 border-t border-neutral-800/50">
                <div className="flex items-center gap-2 text-neutral-700">
                  <div className="w-8 h-[1px] bg-neutral-700"></div>
                  <span className="text-[10px] uppercase tracking-widest">Static</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Panel - Vibrant & Alive */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative"
            onMouseEnter={() => setActivePanel('interactive')}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-br from-white/30 via-white/10 to-neutral-800 blur transition-all duration-700 ${activePanel === 'interactive' ? 'opacity-100' : 'opacity-60'}`}></div>
            <div className="relative bg-neutral-900/90 border border-white/20 p-10 lg:p-12 h-full backdrop-blur-sm">

              {/* Header with Playfair */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">The New Standard</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-display text-white font-light tracking-wide">
                  Interactive
                </h3>
              </div>

              <ul className="space-y-6">
                {interactivePoints.map((point, index) => (
                  <motion.li
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`flex gap-5 transition-all duration-500 ${activePanel === 'interactive' ? 'translate-x-1' : ''}`}
                  >
                    <span className="text-white/60 font-mono text-base mt-0.5">0{index + 1}</span>
                    <div>
                      <strong className="block text-white mb-1.5 text-base tracking-wide">{point.title}</strong>
                      <p className="text-neutral-400 text-base leading-relaxed">{point.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Visual indicator - alive/immersive feel */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60">
                  <div className="w-8 h-[1px] bg-white/40"></div>
                  <span className="text-[10px] uppercase tracking-widest">Immersive</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyVirtualTour;
