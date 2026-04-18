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
        // Paleta "pura" — luz, respiro, serenidade
        ivory: '#FBF9F4',       // fundo principal
        cream: '#F4F1EA',       // fundo alternativo de seção
        linen: '#EBE6DB',       // divisor suave
        gold: {
          DEFAULT: '#A78547',   // dourado sóbrio, terroso
          light: '#C9A86A',
          dark: '#7A6032',
          soft: '#E9DCC1',
        },
        ink: {
          DEFAULT: '#1F1F1F',   // texto principal (grafite)
          muted: '#5A5A5A',     // texto secundário
          soft: '#8A8A8A',      // captions, labels
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

export default config
