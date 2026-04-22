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
        gold: { DEFAULT: '#FFC84E', dim: 'rgba(255,200,78,0.15)' },
        blue: { DEFAULT: '#066BB7', dim: 'rgba(6,107,183,0.15)' },
        orange: { DEFAULT: '#F1640D' },
        teal: { DEFAULT: '#072A37' },
        dark: { DEFAULT: '#080E11', 2: '#0D1518', 3: '#121C20' },
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
