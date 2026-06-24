import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#D8A93A', dim: 'rgba(216,169,58,0.15)' },
        navy: { DEFAULT: '#1B2A44', deep: '#16243B', deepest: '#101B2C', raise: '#22344F' },
        steel: { DEFAULT: '#4A4F54' },
        dark: { DEFAULT: '#16243B', 2: '#1B2A44', 3: '#22344F' },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
