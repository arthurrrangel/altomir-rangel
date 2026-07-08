import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Posso orar por você? | Altomir Rangel',
  description:
    'Toda noite, uma oração por uma causa no grupo. Todo domingo, ao vivo, oro por cinco pedidos escolhidos. Deixe o seu.',
  alternates: { canonical: '/altardanoite' },
  openGraph: {
    title: 'Posso orar por você? | Altomir Rangel',
    description: 'Toda noite uma oração no grupo. Todo domingo, ao vivo, pelos pedidos escolhidos. Deixe o seu.',
    url: '/altardanoite',
    siteName: 'Altomir Rangel',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/altomir-og.jpg', width: 1200, height: 630, alt: 'Altomir Rangel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Posso orar por você? | Altomir Rangel',
    description: 'Toda noite uma oração no grupo. Todo domingo, ao vivo, pelos pedidos escolhidos.',
    images: ['/altomir-og.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-[#101F40] text-[#FBFBFC] antialiased selection:bg-[#E2B063] selection:text-[#101F40]">
      {/* halo dourado no alto: a luz que vem sobre o azul profundo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65svh]"
        style={{ background: 'radial-gradient(75% 52% at 50% 0%, rgba(226,176,99,0.16) 0%, transparent 62%)' }}
      />
      {/* leve profundidade no rodape */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[30svh]"
        style={{ background: 'linear-gradient(to top, rgba(9,17,36,0.6) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[560px] flex-col items-center px-6 pb-14 pt-10 text-center sm:px-8">
        {/* eyebrow */}
        <p className="mb-6 flex items-center gap-2
