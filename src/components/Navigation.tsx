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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}
      >
        <div className="container-wide">
          <div
            className={`
              relative flex items-center justify-between px-8 py-4 
              transition-all duration-500
              ${isScrolled
                ? 'bg-black border border-white/10 text-white'
                : 'bg-white border border-black/10 text-black'
              }
            `}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex flex-col items-start"
              >
                <img
                  src="/karlmcclelland-website-logo.svg"
                  alt="Karl McClelland"
                  className={`h-8 w-auto mb-1 transition-all duration-500 ${isScrolled ? 'brightness-0 invert' : 'brightness-0'}`}
                />
                <span className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 ${isScrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Virtual Tours & Google Street View
                </span>
              </button>
            </div>

            {/* Center Links */}
            <div className={`hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 ${isScrolled ? 'text-white' : 'text-black'}`}>
              {['Services', 'Portfolio', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] hover:opacity-50 transition-opacity duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex btn-secondary"
              >
                Get Quote
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-white' : 'text-black'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
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
