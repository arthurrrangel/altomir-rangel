import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'São 10 minutos todo dia às 21h: oração, palavra profética e ensino, no Altar da Noite pelo YouTube. Entre para a comunidade de oração do Pr. Altomir Rangel.',
  alternates: { canonical: '/altardanoite' },
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: '10 minutos todo dia às 21h: oração, palavra profética e ensino. Entre para a comunidade.',
    url: '/altardanoite',
    siteName: 'Ministério Altomir Rangel',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/altomir-og.jpg', width: 1200, height: 630, alt: 'Altar de Oração, Pr. Altomir Rangel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altar de Oração | Altomir Rangel',
    description: '10 minutos todo dia às 21h: oração, palavra profética e ensino. Entre para a comunidade.',
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
          <span className="mx-5 align-middle text-[#16243B]/45">●</span>
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
    <main className="relative w-full overflow-hidden bg-[#16243B] text-center text-white antialiased">
      {/* ===== FAIXA ROLANDO ===== */}
      <div className="relative z-30 flex overflow-hidden bg-[#D8A93A]">
        <div className="flex w-max animate-[arcmarquee_30s_linear_infinite]">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>

      <section className="relative w-full overflow-hidden pb-16">
        {/* brilho do alto */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-[460px] w-[900px] max-w-[170vw] -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(216,169,58,0.20) 0%, transparent 64%)' }}
        />

        {/* ===== FOTO (banda no topo, centralizada) ===== */}
        <div className="relative z-0 mx-auto flex h-[44svh] items-end justify-center overflow-hidden sm:h-[46vh] lg:h-[56vh]">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(16,27,44,0.05) 0%, rgba(16,27,44,0) 30%, rgba(16,27,44,0.18) 55%, rgba(16,27,44,0.82) 82%, #16243B 97%)' }}
          />
          <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2">
            <span className="font-bebas text-[15px] tracking-[0.36em] text-white/85">ALTOMIR&nbsp;RANGEL</span>
          </div>
        </div>

        {/* brilho atrás do título */}
        <div
          className="pointer-events-none absolute left-1/2 top-[40svh] z-0 h-[380px] w-[620px] max-w-[94vw] -translate-x-1/2 sm:top-[42vh]"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 42%, rgba(216,169,58,0.18) 0%, transparent 70%)' }}
        />

        {/* ===== CONTEÚDO (centralizado, puxado sobre a foto) ===== */}
        <div className="relative z-10 mx-auto -mt-[11svh] flex max-w-[640px] flex-col items-center px-5 sm:-mt-[9vh] sm:px-6">
          <span className="mb-3 font-bebas text-[14px] tracking-[0.36em] text-[#D8A93A] sm:text-[15px]">
            PR.&nbsp;ALTOMIR&nbsp;RANGEL
          </span>

          {/* BADGE 21h / YouTube */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D8A93A]/45 bg-[#0e1830]/55 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#ff3b3b] motion-safe:animate-[pulsedot_1.6s_ease-in-out_infinite]" />
            <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-[12.5px]">
              Toda noite às 21h
            </span>
            <YouTubeMark />
            <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-[12.5px]">
              no YouTube
            </span>
          </div>

          {/* TÍTULO GRANDE E CENTRALIZADO */}
          <h1
            className="font-bebas leading-[0.84] text-white text-[clamp(66px,12.5vw,164px)]"
            style={{ textShadow: '0 6px 34px rgba(8,14,26,0.95), 0 2px 8px rgba(8,14,26,0.8)' }}
          >
            Altar de<br />
            <span className="text-[#D8A93A]">Oração</span>
          </h1>

          {/* versículo */}
          <p className="mt-3 font-inter text-[13px] italic text-[#E7C977]/90 sm:text-[14px]">
            “Orai sem cessar.” (1 Tessalonicenses 5:17)
          </p>

          <p className="mt-4 max-w-[520px] font-inter text-[15.5px] leading-relaxed text-white/85 sm:text-[17px]">
            São 10 minutos todo dia às 21h: oração, palavra profética e ensino, no Altar da Noite pelo YouTube.
            Faça parte da comunidade de oração do Pr. Altomir Rangel.
          </p>

          <div className="mt-6 w-full max-w-[480px]">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="relative z-10 border-t border-white/10 bg-[#13203a] px-6 py-14">
        <div className="mx-auto max-w-[1000px]">
          <div className="font-bebas text-[14px] tracking-[0.34em] text-[#D8A93A]">COMO FUNCIONA</div>
          <h2 className="mt-1 font-bebas text-[clamp(34px,6vw,52px)] leading-[0.95] text-white">
            Três passos pra orar todo dia
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {[
              { n: '1', t: 'Cadastre-se', d: 'Preencha nome, WhatsApp e e-mail no formulário.' },
              { n: '2', t: 'Entre no grupo', d: 'Você entra na Comunidade de Oração no WhatsApp.' },
              { n: '3', t: 'Ore às 21h', d: '10 minutos de oração, palavra e ensino no Altar da Noite, às 21h no YouTube.' },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D8A93A]/40 font-bebas text-[22px] text-[#D8A93A]">
                  {s.n}
                </div>
                <div className="mt-4 font-bebas text-[21px] tracking-[0.02em] text-white">{s.t}</div>
                <p className="mt-1.5 font-inter text-[14px] leading-relaxed text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@keyframes arcmarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes pulsedot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}`}</style>
    </main>
  )
}
