import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Entre para a comunidade de oração do Pr. Altomir Rangel. Juntos, todos os dias, buscando a presença de Deus.',
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Entre para a nossa comunidade de oração e ore com a gente.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* luz divina vinda do alto */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[8%] w-[900px] max-w-[150vw] h-[680px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 48% 60% at 50% 0%, rgba(216,169,58,0.17) 0%, transparent 68%)' }}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start lg:justify-center text-center px-6 pt-8 pb-16 lg:py-10">
        <div className="w-full max-w-[680px] mx-auto flex flex-col items-center">

          {/* ===== FOTO ===== */}
          <div className="relative w-full flex justify-center">
            {/* glow dourado atrás (luz no Altomir) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[6%] w-[72%] h-[82%] pointer-events-none"
              style={{ background: 'radial-gradient(closest-side at 50% 45%, rgba(216,169,58,0.13) 0%, transparent 70%)' }}
            />
            <img
              src="/altomir-recorte.webp"
              alt="Pr. Altomir Rangel"
              className="relative h-[27vh] sm:h-[32vh] lg:h-[35vh] w-auto object-contain object-bottom select-none pointer-events-none"
            />
            {/* overlay que funde no navy */}
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(22,36,59,0.62) 55%, #16243B 100%)' }}
            />
          </div>

          {/* ===== MARCA ===== */}
          <span className="font-bebas text-base sm:text-lg text-white/85 tracking-[0.34em] -mt-1 mb-3">
            ALTOMIR&nbsp;RANGEL
          </span>

          {/* ===== TÍTULO ===== */}
          <h1 className="font-bebas text-white leading-[0.85] text-[clamp(60px,11vw,126px)]">
            Altar de<br /><span className="text-[#D8A93A]">Oração</span>
          </h1>

          {/* ===== SUBTÍTULO ===== */}
          <p className="mt-5 font-inter text-white/75 text-[17px] sm:text-[20px] leading-relaxed max-w-[540px]">
            Entre para a nossa comunidade de oração e ore com o Pr. Altomir. Juntos, todos os dias,
            buscando a presença de Deus.
          </p>

          {/* ===== DIVISOR ===== */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D8A93A]/40" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D8A93A]/80" />
            <span className="h-px w-8 bg-[#D8A93A]/40" />
          </div>

          {/* ===== FORMULÁRIO ===== */}
          <div className="mt-6 w-full max-w-md text-left">
            <LeadForm />
          </div>
        </div>
      </div>
    </main>
  )
}
