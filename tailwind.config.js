import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Karl McClelland Brand Palette (Precious Metals)
        brand: {
          bronze: '#bd8c7d',      // Rose Gold
          'bronze-light': '#d1bfa7',
          'bronze-dark': '#a27a6d',
          stone: '#49494b',       // Onyx
          'stone-light': '#8e8e90',
          'stone-dark': '#2b2b2c',
        },
        // Warm accent colors for personality (Soft Gold / Silver)
        accent: {
          warm: '#d1bfa7',        // Soft Gold
          ember: '#8e8e90',       // Silver
          earth: '#bd8c7d',       // Rose Gold (alternate)
          sky: '#87CEEB',         // Light blue for trust
        },
        // Neutral grays with warmth
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        // Legacy support
        bronze: {
          100: '#F5EFE0',
          200: '#E6D5B8',
          300: '#D6BA8F',
          400: '#C6A067',
          500: '#B08D55',
          600: '#8E7143',
          700: '#6B5532',
          800: '#493922',
          900: '#261D11',
        },
        amber: {
          400: '#FFB84D',
          500: '#FF9500',
          600: '#E68600',
        },
        stone: colors.stone,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Precise typography scale
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.015em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.045em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.055em' }],
      },
      spacing: {
        // Generous spacing scale
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      transitionDuration: {
        '400': '400ms',
        '700': '700ms',
        '1000': '1000ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth, heavy feel
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        'full-wide': '1920px',
      },
      fontSize: {
        'nav': ['13.5px', { lineHeight: '1.5' }],
        'hero-main': ['58px', { lineHeight: '1.1', fontWeight: '400' }],
        'hero-main-lg': ['72px', { lineHeight: '1.1', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}