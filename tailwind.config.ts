import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050a14',
          900: '#0a0f1e',
          800: '#111827',
          700: '#1a2235',
        },
        gold: {
          300: '#f0d080',
          400: '#e8c060',
          500: '#c9a84c',
          600: '#a8853a',
          700: '#8a6a2a',
        },
        cream: {
          50:  '#faf8f2',
          100: '#f5f0e8',
          200: '#ede4d0',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
