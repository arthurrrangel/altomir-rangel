import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Quero orar por você! Todo dia às 21h, receba uma oração e uma palavra de edificação, e faça parte de uma comunidade que caminha junta na presença de Deus.',
  alternates: { canonical: '/altardanoite' },
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todo dia às 21h no YouTube e no grupo do WhatsApp: oração, palavras de edificação e ensino.',
    url: '/altardanoite',
    siteName: 'Ministério Altomir Rangel',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/altomir-og.jpg', width: 1200, height: 630, alt: 'Altar de Oração, Pr. Altomir Rangel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todo dia às 21h no YouTube e no grupo do WhatsApp: oração, palavras de edificação e ensino.',
    images: ['/altomir-og.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#182A46] text-white antialiased">
      <section
        className="relative min-h-[100svh] w-full overflow-hidden bg-[#182A46] text-center lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:text-left"
      >
        {/* fundo radial só no desktop (mobile fica navy uniforme) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          style={{ background: 'radial-gradient(ellipse at 72% 42%, #21365A 0%, #182A46 66%)' }}
        />
        {/* brilho atrás do título (desktop) */}
        <div
          className="pointer-events-none absolute left-[8%] top-1/2 z-0 hidden h-[440px] w-[600px] -translate-y-1/2 lg:block"
          style={{ background: 'radial-gradient(ellipse 52% 52% at 30% 50%, rgba(216,169,58,0.12) 0%, transparent 70%)' }}
        />

        {/* brilho quente atrás do Altomir (mobile) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[52svh] lg:hidden"
          style={{ background: 'radial-gradient(62% 48% at 50% 29%, rgba(228,152,54,0.34) 0%, rgba(214,138,48,0.12) 42%, transparent 70%)' }}
        />
        {/* brilho quente atrás do Altomir (desktop) */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] lg:block"
          style={{ background: 'radial-gradient(52% 54% at 60% 42%, rgba(228,152,54,0.22) 0%, transparent 66%)' }}
        />

        {/* ===== FIGURA MOBILE / TABLET (topo) ===== */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[48svh] items-start justify-center overflow-hidden lg:hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[48svh] w-auto max-w-none object-contain object-top"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(24,42,70,0) 70%, #182A46 94%)' }}
          />
        </div>

        {/* ===== FIGURA DESKTOP (lateral direita) ===== */}
        <div className="pointer-events-none z-0 hidden lg:col-start-2 lg:row-start-1 lg:flex lg:h-full lg:items-end lg:justify-start lg:self-stretch lg:overflow-hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[90vh] w-auto max-w-none -translate-x-[2%] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
        {/* blend desktop */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{ background: 'linear-gradient(to right, #182A46 0%, #182A46 32%, rgba(24,42,70,0.62) 45%, rgba(24,42,70,0) 63%)' }}
        />

        {/* ===== CONTEÚDO ===== */}
        <div className="relative z-10 col-start-1 row-start-1 flex min-h-[100svh] flex-col items-center justify-start px-6 pb-9 pt-[38svh] sm:px-10 lg:min-h-0 lg:items-start lg:justify-center lg:pb-0 lg:pt-0 lg:pl-[9%] lg:pr-6">
          <div className="mx-auto flex w-full max-w-[440px] flex-col items-center lg:mx-0 lg:max-w-[560px] lg:items-start">
            <h1
              className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] whitespace-nowrap font-bebas leading-[1] text-[#F3F1EA] text-[clamp(34px,12vw,58px)] lg:text-[clamp(46px,5.6vw,96px)]"
              style={{ textShadow: '0 4px 24px rgba(8,14,26,0.55)' }}
            >
              Altar de <span className="text-[#D8A93A]">Oração</span>
            </h1>

            <p className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.48s_both] mt-4 max-w-[440px] font-inter text-[15px] leading-[1.6] text-white/70 sm:mt-6 sm:text-[17px] sm:leading-[1.7]">
              <strong className="font-semibold text-white">Quero orar por você!</strong> Todo dia às 21h, receba uma oração e uma palavra de edificação, e faça parte de uma comunidade que caminha junta na presença de Deus.
            </p>

            <div className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.66s_both] mt-6 w-full max-w-[440px] sm:mt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes figin{from{opacity:0;transform:scale(1.05)}to{opacity:1;transform:scale(1)}}`}</style>
    </main>
  )
}
