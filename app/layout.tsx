import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { site } from '@/lib/site'
import './globals.css'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', style: ['normal', 'italic'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#16243B',
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Altomir Rangel',
    'Ministério ARC',
    'pregador',
    'livros cristãos',
    'YouTube cristão',
    'Palavra de Deus',
    'empresário cristão',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: '/',
    siteName: site.name,
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  image: `${site.url}/og.jpg`,
  jobTitle: 'Pregador, Autor e Empresário',
  description: site.description,
  sameAs: [site.youtubeUrl],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  alternateName: site.ministry,
  url: site.url,
  inLanguage: 'pt-BR',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${inter.variable} ${playfair.variable}`}>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* data-domain preservado: o site do Plausible foi registrado com este identificador */}
        <Script defer data-domain="altomir-rangel.vercel.app" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
