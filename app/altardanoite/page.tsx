import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Todo dia às 21h, 10 minutos de oração, palavras de bênção sobre a sua vida e ensino, no YouTube. Entre para a comunidade de oração do Pr. Altomir Rangel.',
  alternates: { canonical: '/altardanoite' },
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todo dia às 21h: oração, palavras de bênção sobre a sua vida e ensino. Entre para a comunidade.',
    url: '/altardanoite',
    siteName: 'Ministério Altomir Rangel',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/altomir-og.jpg', width: 1200, height: 630, alt: 'Altar de Oração, Pr. Altomir Rangel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todo dia às 21h: oração, palavras de bênção sobre a sua vida e ensino. Entre para a comunidade.',
    images: ['/altomir-og.jpg'],
  },
  robots: { index: true, follow: true },
}

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center whitespace-nowrap py-[8px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="mx-5 font-bebas text-[13px] tracking-[0.3em] text-[#16243B]">
          ALTAR DA NOITE • TODA NOITE ÀS 21H NO YOUTUBE
          <span className="mx-5 align-middle text-[#16243B]/40">●</span>
        </span>
      ))}
    </div>
  )
}

function YouTubeMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#FF2D2D" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#16243B] text-white antialiased">
      {/* ===== FAIXA ROLANDO ===== */}
      <div className="relative z-30 flex overflow-hidden bg-[#D8A93A]">
        <div className="flex w-max animate-[arcmarquee_34s_linear_infinite]">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>

      <section className="relative min-h-[100svh] w-full overflow-hidden text-center lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:text-left">
        {/* glows */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-[440px] w-[820px] max-w-[170vw] -translate-x-1/2 lg:left-[58%] lg:h-[620px] lg:w-[1100px]"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(216,169,58,0.16) 0%, transparent 64%)' }}
        />
        <div
          className="pointer-events-none absolute left-[8%] top-[34%] z-0 hidden h-[440px] w-[640px] lg:block"
          style={{ background: 'radial-gradient(ellipse 52% 52% at 28% 50%, rgba(216,169,58,0.14) 0%, transparent 70%)' }}
        />

        {/* ===== FOTO MOBILE / TABLET (topo, centralizada) ===== */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[44svh] items-end justify-center overflow-hidden lg:hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="h-[46svh] w-auto max-w-none object-contain object-bottom"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(16,27,44,0.05) 0%, rgba(16,27,44,0) 30%, rgba(16,27,44,0.2) 56%, rgba(16,27,44,0.84) 82%, #16243B 96%)' }}
          />
        </div>
        {/* glow do título (mobile) */}
        <div
          className="pointer-events-none absolute left-1/2 top-[39svh] z-0 h-[320px] w-[440px] max-w-[92vw] -translate-x-1/2 lg:hidden"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 42%, rgba(216,169,58,0.18) 0%, transparent 70%)' }}
        />

        {/* ===== FOTO DESKTOP (lateral direita) ===== */}
        <div className="pointer-events-none z-0 hidden lg:col-start-2 lg:row-start-1 lg:flex lg:h-full lg:items-end lg:justify-center lg:self-stretch">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="h-[100vh] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          />
        </div>
        {/* blend desktop entre conteúdo e foto */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #16243B 0%, #16243B 36%, rgba(22,36,59,0.82) 46%, rgba(22,36,59,0) 64%)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[22%] lg:block"
          style={{ background: 'linear-gradient(to left, #16243B 0%, rgba(22,36,59,0.45) 45%, transparent 100%)' }}
        />

        {/* ===== MARCA (mobile, sobre a foto) ===== */}
        <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 lg:hidden">
          <span className="font-bebas text-[15px] tracking-[0.36em] text-white/85">ALTOMIR&nbsp;RANGEL</span>
        </div>

        {/* ===== CONTEÚDO ===== */}
        <div className="relative z-10 col-start-1 row-start-1 flex min-h-[100svh] flex-col items-center justify-start px-5 pt-[40svh] pb-12 sm:px-6 lg:min-h-0 lg:items-start lg:justify-center lg:pt-0 lg:pb-0 lg:pl-[8%] lg:pr-6">
          <div className="flex w-full max-w-[540px] flex-col items-center lg:max-w-[640px] lg:items-start">
            <span className="mb-4 hidden font-bebas text-[15px] tracking-[0.36em] text-[#D8A93A] lg:block">
              PR.&nbsp;ALTOMIR&nbsp;RANGEL
            </span>

            {/* BADGE 21h / YouTube */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8A93A]/45 bg-[#0e1830]/55 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#ff3b3b] motion-safe:animate-[pulsedot_1.6s_ease-in-out_infinite]" />
              <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-[12.5px]">
                Toda noite às 21h
              </span>
              <YouTubeMark />
              <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-[12.5px]">
                no YouTube
              </span>
            </div>

            {/* TÍTULO */}
            <h1
              className="font-bebas leading-[0.85] text-white text-[clamp(70px,13vw,142px)]"
              style={{ textShadow: '0 6px 34px rgba(8,14,26,0.92), 0 2px 8px rgba(8,14,26,0.7)' }}
            >
              Altar de<br />
              <span className="text-[#D8A93A]">Oração</span>
            </h1>

            {/* SUBHEAD */}
            <p className="mt-5 max-w-[440px] font-inter text-[16px] leading-relaxed text-white/85 sm:text-[18px]">
              Todo dia às 21h, 10 minutos de oração, palavras de bênção sobre a sua vida e ensino, no YouTube.
            </p>

            <div className="mt-7 w-full max-w-[460px] text-left">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes arcmarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes pulsedot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}`}</style>
    </main>
  )
}
