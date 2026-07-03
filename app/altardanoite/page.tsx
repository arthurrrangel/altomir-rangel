import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Quero orar por você! Todo dia às 21h, dez minutos de oração, palavras de bênção sobre a sua vida e ensino, no YouTube. Entre para o grupo da comunidade no WhatsApp.',
  alternates: { canonical: '/altardanoite' },
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Quero orar por você! Todo dia às 21h no YouTube e no grupo do WhatsApp: oração, palavras de bênção e ensino.',
    url: '/altardanoite',
    siteName: 'Ministério Altomir Rangel',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/altomir-og.jpg', width: 1200, height: 630, alt: 'Altar de Oração, Pr. Altomir Rangel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Quero orar por você! Todo dia às 21h no YouTube e no grupo do WhatsApp: oração, palavras de bênção e ensino.',
    images: ['/altomir-og.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#0f1828] text-white antialiased">
      <section
        className="relative min-h-[100svh] w-full overflow-hidden text-center lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:text-left"
        style={{ background: 'radial-gradient(ellipse at 72% 42%, #17263f 0%, #0f1828 66%)' }}
      >
        {/* brilho atrás do título (desktop) */}
        <div
          className="pointer-events-none absolute left-[8%] top-1/2 z-0 hidden h-[440px] w-[600px] -translate-y-1/2 lg:block"
          style={{ background: 'radial-gradient(ellipse 52% 52% at 30% 50%, rgba(216,169,58,0.12) 0%, transparent 70%)' }}
        />

        {/* ===== FIGURA MOBILE / TABLET (topo) ===== */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[44svh] items-end justify-center overflow-hidden lg:hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[46svh] w-auto max-w-none object-contain object-bottom"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(15,24,40,0) 44%, rgba(15,24,40,0.55) 72%, #0f1828 97%)' }}
          />
        </div>

        {/* ===== FIGURA DESKTOP (lateral direita) ===== */}
        <div className="pointer-events-none z-0 hidden lg:col-start-2 lg:row-start-1 lg:flex lg:h-full lg:items-end lg:justify-center lg:self-stretch">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[97vh] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
        {/* blend desktop */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{ background: 'linear-gradient(to right, #0f1828 0%, #0f1828 34%, rgba(15,24,40,0.7) 46%, rgba(15,24,40,0) 64%)' }}
        />

        {/* ===== CONTEÚDO ===== */}
        <div className="relative z-10 col-start-1 row-start-1 flex min-h-[100svh] flex-col items-center justify-start px-6 pb-14 pt-[36svh] sm:px-10 lg:min-h-0 lg:items-start lg:justify-center lg:pb-0 lg:pt-0 lg:pl-[9%] lg:pr-6">
          <div className="mx-auto flex w-full max-w-[520px] flex-col items-center lg:mx-0 lg:max-w-[560px] lg:items-start">
            <div className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D8A93A]/70" />
              <span className="font-inter text-[11px] uppercase tracking-[0.28em] text-[#D8A93A]/90">Comunidade de oração</span>
              <span className="h-px w-8 bg-[#D8A93A]/70" />
            </div>

            <h1
              className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] font-bebas leading-[0.86] text-[#F3F1EA] text-[clamp(66px,10.5vw,132px)]"
              style={{ textShadow: '0 4px 24px rgba(8,14,26,0.55)' }}
            >
              Altar de<br />
              <span className="text-[#D8A93A]">Oração</span>
            </h1>

            <p className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.48s_both] mt-6 max-w-[440px] font-inter text-[16px] leading-[1.7] text-white/70 sm:text-[17px]">
              <strong className="font-semibold text-white">Quero orar por você!</strong> Todo dia às 21h, dez minutos de oração, palavras de bênção sobre a sua vida e ensino, no YouTube. Entre para o grupo da comunidade no WhatsApp.
            </p>

            <div className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.66s_both] mt-9 w-full max-w-[420px]">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes figin{from{opacity:0;transform:scale(1.05)}to{opacity:1;transform:scale(1)}}`}</style>
    </main>
  )
}
