import type { Metadata } from 'next'
import LeadForm from './LeadForm'


export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Todos os dias às 21h, o Pr. Altomir Rangel levanta o Altar de Oração ao vivo. Deixe seu pedido — hoje à noite, a oração também é por você.',
  alternates: { canonical: '/altardanoite' },
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todos os dias às 21h, ao vivo: oração pelos pedidos, palavra de edificação e comunhão.',
    url: '/altardanoite',
    siteName: 'Ministério Altomir Rangel',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/altomir-og.jpg', width: 1200, height: 630, alt: 'Altar de Oração, Pr. Altomir Rangel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todos os dias às 21h, ao vivo: oração pelos pedidos, palavra de edificação e comunhão.',
    images: ['/altomir-og.jpg'],
  },
  robots: { index: true, follow: true },
}


export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#182A46] text-white antialiased selection:bg-[#D8A93A] selection:text-[#14243B]">
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#182A46] text-center lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:text-left">
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          style={{ background: 'radial-gradient(ellipse at 72% 42%, #21365A 0%, #182A46 66%)' }}
        />
        <div
          className="pointer-events-none absolute left-[8%] top-1/2 z-0 hidden h-[440px] w-[600px] -translate-y-1/2 lg:block"
          style={{ background: 'radial-gradient(ellipse 52% 52% at 30% 50%, rgba(216,169,58,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[46svh] lg:hidden"
          style={{ background: 'radial-gradient(62% 48% at 50% 27%, rgba(228,152,54,0.34) 0%, rgba(214,138,48,0.12) 42%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] lg:block"
          style={{ background: 'radial-gradient(52% 54% at 60% 42%, rgba(228,152,54,0.22) 0%, transparent 66%)' }}
        />

        {/* figura mobile */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[44svh] items-start justify-center overflow-hidden lg:hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            decoding="async"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[44svh] w-auto max-w-none object-contain object-top"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(24,42,70,0) 55%, #182A46 86%)' }}
          />
        </div>

        {/* figura desktop */}
        <div className="pointer-events-none z-0 hidden lg:col-start-2 lg:row-start-1 lg:flex lg:h-full lg:items-end lg:justify-start lg:self-stretch lg:overflow-hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            decoding="async"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[90vh] w-auto max-w-none -translate-x-[2%] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{ background: 'linear-gradient(to right, #182A46 0%, #182A46 32%, rgba(24,42,70,0.62) 45%, rgba(24,42,70,0) 63%)' }}
        />

        {/* conteúdo */}
        <div className="relative z-10 col-start-1 row-start-1 flex min-h-[100svh] flex-col items-center justify-start px-6 pb-8 pt-[36svh] sm:px-10 lg:min-h-0 lg:items-start lg:justify-center lg:pb-0 lg:pt-0 lg:pl-[9%] lg:pr-6">
          <div className="mx-auto flex w-full max-w-[440px] flex-col items-center lg:mx-0 lg:max-w-[560px] lg:items-start">

            <div id="pedido" className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] w-full max-w-[440px] scroll-mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes figin{from{opacity:0;transform:scale(1.05)}to{opacity:1;transform:scale(1)}}@keyframes flick{0%,100%{transform:scale(1)}50%{transform:scale(1.07) translateY(-1px)}}`}</style>
    </main>
  )
}
