import type { Metadata } from 'next'
import { Bebas_Neue, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Altomir Rangel — Pregador, Autor e Empresário',
  description:
    'Empresário e servo voluntário do Reino de Deus. Autor de livros cristãos, pregador em igrejas e criador de conteúdo no YouTube. Conheça a missão de Altomir Rangel.',
  keywords: ['Altomir Rangel', 'pregador', 'livros cristãos', 'YouTube cristão', 'Palavra de Deus', 'empresário cristão'],
  openGraph: {
    title: 'Altomir Rangel',
    description: 'Pregador, Autor e Empresário a serviço do Reino de Deus.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
