import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${isScrolled ? 'bg-white/70 border-b border-brand-bronze/10 py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container-wide">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-bronze/10 flex items-center justify-center">
                <span className="text-sm font-display font-semibold text-brand-bronze">KM</span>
              </div>
              <span className="text-sm font-body font-semibold tracking-wider text-brand-stone">
                Karl McClelland
              </span>
            </button>

            {/* Center Links */}
            <div className="hidden lg:flex items-center gap-10 text-sm tracking-wider text-brand-stone">
              {['Offerings', 'Work', 'Process'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="group relative font-medium hover:text-accent-warm transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-accent-ember transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex btn-primary"
              >
                Get a quote
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-brand-stone"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 pointer-events-none ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileMenuOpen(false)} />

        <div
          className={`
            absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl 
            transition-transform duration-500
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full p-10 pt-24">
            <nav className="flex flex-col gap-8">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' });
                    else scrollToSection(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-3xl font-display font-light text-black hover:opacity-50 transition-opacity duration-300 text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
