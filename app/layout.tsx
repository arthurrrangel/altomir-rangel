import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Altomir Rangel',
    'pregador cristão',
    'livros cristãos',
    'YouTube cristão',
    'Palavra de Deus',
    'empresário cristão',
    'Ministério Transforme Seu Mundo',
    'O Propósito da Prosperidade',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: site.url },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  description: site.description,
  url: site.url,
  sameAs: [site.youtubeUrl, `https://instagram.com/${site.instagram}`],
  jobTitle: site.tagline,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={site.locale}
      className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
      </body>
    </html>
  )
}
