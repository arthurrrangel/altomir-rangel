import type { Metadata } from 'next'
import LeadForm from './LeadForm'

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Todo dia às 21h, dez minutos de oração, palavras de bênção sobre a sua vida e ensino, no YouTube. Entre para a comunidade de oração do Pr. Altomir Rangel.',
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

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#0f1828] text-white antialiased">
      {/* ===== BARRA DE TOPO ===== */}
      <header className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-bebas text-[15px] tracking-[0.34em] text-white/80">ALTOMIR&nbsp;RANGEL</span>
        <span className="hidden font-inter text-[11px] uppercase tracking-[0.22em] text-white/50 sm:block">
          Toda noite · 21h · YouTube
        </span>
      </header>

      <section
        className="relative -mt-[62px] min-h-[100svh] w-full overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 72% 38%, #18273f 0%, #0f1828 68%)' }}
      >
        {/* FOTO DE FUNDO — enquadramento por breakpoint */}
        <div
          className="motion-safe:animate-[photoIn_1.8s_cubic-bezier(0.22,1,0.36,1)_forwards] absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:62%_30%] lg:bg-[position:82%_40%]"
          style={{ backgroundImage: 'url(/altomir.png)' }}
        />

        {/* degradês de legibilidade */}
        <div
          className="absolute inset-0 z-[1] hidden lg:block"
          style={{ background: 'linear-gradient(to right, rgba(15,24,40,0.95) 0%, rgba(15,24,40,0.82) 30%, rgba(15,24,40,0.35) 58%, rgba(15,24,40,0.08) 100%)' }}
        />
        <div
          className="absolute inset-0 z-[1] lg:hidden"
          style={{ background: 'linear-gradient(to top, #0f1828 0%, rgba(15,24,40,0.86) 34%, rgba(15,24,40,0.55) 60%, rgba(15,24,40,0.3) 100%)' }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(to top, rgba(15,24,40,0.55) 0%, transparent 30%)' }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] opacity-[0.05] mix-blend-soft-light" style={{ backgroundImage: GRAIN }} />

        {/* ===== CONTEÚDO ===== */}
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-[64px] text-center sm:px-10 lg:justify-center lg:pb-0 lg:pl-[9%] lg:pr-6 lg:text-left">
          <div className="mx-auto flex w-full max-w-[520px] flex-col items-center lg:mx-0 lg:max-w-[560px] lg:items-start">
            <div className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D8A93A]/70" />
              <span className="font-inter text-[11px] uppercase tracking-[0.28em] text-[#D8A93A]/90">Comunidade de oração</span>
            </div>

            <h1 className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] font-bebas leading-[0.86] text-[#F3F1EA] text-[clamp(66px,10.5vw,134px)]">
              Altar de<br />
              <span className="text-[#D8A93A]">Oração</span>
            </h1>

            <p className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.48s_both] mt-7 max-w-[420px] font-inter text-[16px] leading-[1.7] text-white/70 sm:text-[17px]">
              Todo dia às 21h, dez minutos de oração, palavras de bênção sobre a sua vida e ensino, no YouTube.
            </p>

            <div className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.66s_both] mt-10 w-full max-w-[420px]">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes photoIn{from{opacity:0;transform:scale(1.07)}to{opacity:1;transform:scale(1)}}`}</style>
    </main>
  )
}
