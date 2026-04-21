import type { Metadata } from 'next'
import { Bebas_Neue, Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Altomir Rangel | Pregador, Autor e Empresario',
  description: 'Empresario e servo voluntario do Reino de Deus. Autor de livros cristaos e criador de conteudo no YouTube.',
  keywords: ['Altomir Rangel', 'pregador', 'livros cristaos', 'YouTube cristao', 'Palavra de Deus', 'empresario cristao'],
  openGraph: {
    title: 'Altomir Rangel',
    description: 'Pregador, Autor e Empresario a servico do Reino de Deus.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Script defer data-domain="altomir-rangel.vercel.app" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
