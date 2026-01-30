import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BoldStatement: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80")',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Color Overlay - warm/bronze tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-neutral-900/80 to-black/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Label */}
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/50 mb-8 block">
              THE PHILOSOPHY
            </span>

            {/* The Quote */}
            <blockquote className="max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-white font-light leading-[1.3] mb-8">
                "The real voyage of discovery consists not in seeking new landscapes,
                but in having <span className="italic text-amber-200/90">new eyes</span>."
              </p>
              <footer className="text-neutral-400 text-sm tracking-wide">
                — Marcel Proust
              </footer>
            </blockquote>

            {/* Optional stat below */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 pt-8 border-t border-white/10 inline-block"
            >
              <span className="text-5xl md:text-6xl font-display font-light text-white">60M+</span>
              <span className="block text-[10px] font-mono tracking-[0.3em] text-white/50 mt-2">
                VIEWS GENERATED
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent" />
    </section>
  );
};

export default BoldStatement;
