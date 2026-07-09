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
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65svh]"
        style={{ background: 'radial-gradient(75% 52% at 50% 0%, rgba(226,176,99,0.16) 0%, transparent 62%)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[30svh]"
        style={{ background: 'linear-gradient(to top, rgba(9,17,36,0.6) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[560px] flex-col items-center px-6 pb-14 pt-10 text-center sm:px-8">
        <p className="mb-6 flex items-center gap-2.5 font-inter text-[12px] font-semibold uppercase tracking-[0.3em] text-[#E2B063]">
          <span className="h-px w-6 bg-[#E2B063]/50" />
          Altar de Oração
          <span className="h-px w-6 bg-[#E2B063]/50" />
        </p>

        <div className="w-full max-w-[520px] overflow-hidden rounded-[18px] shadow-[0_30px_70px_-28px_rgba(0,0,0,0.7)] ring-1 ring-[#E2B063]/20">
          <div className="relative aspect-video w-full">
            <iframe
              className="pointer-events-none absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/gJVo-Al43vA?autoplay=1&mute=1&loop=1&playlist=gJVo-Al43vA&controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
              title="Chamada do Altar de Oração"
              allow="autoplay; encrypted-media"
              loading="eager"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(16,31,64,0.5) 0%, transparent 40%)' }}
            />
          </div>
        </div>

        <h1 className="mt-9 font-bebas text-[clamp(48px,15vw,78px)] leading-[0.92] tracking-[0.01em] text-[#FBFBFC]">
          Posso orar <span className="text-[#E2B063]">por você?</span>
        </h1>

        <p className="mt-5 max-w-[430px] font-inter text-[15px] leading-[1.7] text-[#FBFBFC]/70 sm:text-[16px]">
          Deixe seu pedido no Altar de Oração do Altomir Rangel. Oração diária no grupo. Todo domingo, ao vivo, oro por cinco pedidos escolhidos.
        </p>

        <div className="mt-9 w-full max-w-[430px]">
          <LeadForm />
        </div>
      </div>
    </main>
  )
}
