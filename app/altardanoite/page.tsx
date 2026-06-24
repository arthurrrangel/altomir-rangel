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
      {/* brilho dourado suave atrás */}
      <div
        className="absolute left-1/2 top-[6%] -translate-x-1/2 w-[680px] max-w-[120vw] h-[520px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(closest-side, rgba(216,169,58,0.12) 0%, transparent 72%)' }}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start lg:justify-center text-center px-6 pt-6 pb-14 lg:py-12">
        <div className="w-full max-w-[700px] mx-auto flex flex-col items-center">

          {/* ===== FOTO (com overlay que funde no navy) ===== */}
          <div className="relative w-full flex justify-center">
            <img
              src="/altomir-recorte.webp"
              alt="Pr. Altomir Rangel"
              className="h-[30vh] sm:h-[36vh] lg:h-[40vh] w-auto object-contain object-bottom select-none pointer-events-none"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(22,36,59,0.65) 55%, #16243B 100%)' }}
            />
          </div>

          {/* ===== MARCA ===== */}
          <span className="font-bebas text-lg sm:text-xl text-white/90 tracking-[0.32em] -mt-1 mb-4">
            ALTOMIR&nbsp;RANGEL
          </span>

          {/* ===== TÍTULO ===== */}
          <h1 className="font-bebas text-white leading-[0.84] text-[clamp(66px,13vw,150px)]">
            Altar de<br /><span className="text-[#D8A93A]">Oração</span>
          </h1>

          {/* ===== SUBTÍTULO ===== */}
          <p className="mt-6 font-inter text-white/75 text-[18px] sm:text-[21px] lg:text-[23px] leading-relaxed max-w-[560px]">
            Entre para a nossa comunidade de oração e ore com o Pr. Altomir. Juntos, todos os dias,
            buscando a presença de Deus.
          </p>

          {/* ===== FORMULÁRIO ===== */}
          <div className="mt-9 w-full max-w-md text-left">
            <LeadForm />
          </div>
        </div>
      </div>
    </main>
  )
}
