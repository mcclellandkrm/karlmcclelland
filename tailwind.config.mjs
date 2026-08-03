import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
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
        'nav': ['13.5px', { lineHeight: '1.5' }],
        'hero-main': ['58px', { lineHeight: '1.1', fontWeight: '400' }],
        'hero-main-lg': ['72px', { lineHeight: '1.1', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
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
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        'full-wide': '1920px',
      },
    },
  },
  plugins: [],
}
