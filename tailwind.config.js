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
        // Porsche / Luxury Palette
        bronze: {
          100: '#F5EFE0',
          200: '#E6D5B8',
          300: '#D6BA8F',
          400: '#C6A067',
          500: '#B08D55', // Primary Bronze
          600: '#8E7143',
          700: '#6B5532',
          800: '#493922',
          900: '#261D11',
        },
        platinum: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // Metal grey
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Keeping amber for legacy support but recommending bronze
        amber: {
          400: '#FFB84D',
          500: '#FF9500',
          600: '#E68600',
        },
        stone: colors.stone, // Explicitly add stone to ensure availability
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
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