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
      {/* luz divina do alto */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[6%] w-[1000px] max-w-[165vw] h-[620px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 44% 60% at 50% 0%, rgba(216,169,58,0.18) 0%, transparent 66%)' }}
      />

      {/* ===== FOTO GRANDE (fundo) ===== */}
      <div className="absolute inset-x-0 bottom-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src="/altomir-recorte.webp"
          alt="Pr. Altomir Rangel"
          className="h-[80vh] sm:h-[86vh] lg:h-[94vh] w-auto max-w-none object-contain object-bottom select-none"
        />
      </div>

      {/* ===== OVERLAY (legibilidade + funde no navy) ===== */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(16,27,44,0.5) 0%, rgba(16,27,44,0.06) 20%, rgba(16,27,44,0.34) 42%, rgba(16,27,44,0.8) 62%, #16243B 80%)' }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(118% 72% at 50% 26%, transparent 40%, rgba(16,27,44,0.55) 100%)' }}
      />

      {/* ===== MARCA (topo) ===== */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <span className="font-bebas text-base sm:text-lg text-white/90 tracking-[0.34em]">ALTOMIR&nbsp;RANGEL</span>
      </div>

      {/* ===== CONTEÚDO sobreposto ===== */}
      <div className="relative z-10 min-h-screen flex flex-col items-center text-center px-6 pt-[40vh] sm:pt-[44vh] lg:pt-[42vh] pb-12">
        <div className="w-full max-w-[680px] mx-auto flex flex-col items-center">

          <h1 className="font-bebas text-white leading-[0.83] text-[clamp(56px,10vw,116px)] drop-shadow-[0_4px_30px_rgba(8,14,26,0.95)]">
            Altar de<br /><span className="text-[#D8A93A]">Oração</span>
          </h1>

          <p className="mt-4 font-inter text-white/85 text-[16px] sm:text-[19px] leading-relaxed max-w-[500px] drop-shadow-[0_2px_18px_rgba(8,14,26,0.95)]">
            Entre para a nossa comunidade de oração e ore com o Pr. Altomir. Juntos, todos os dias.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D8A93A]/40" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D8A93A]/80" />
            <span className="h-px w-8 bg-[#D8A93A]/40" />
          </div>

          <div className="mt-6 w-full max-w-md text-left">
            <LeadForm />
          </div>
        </div>
      </div>
    </main>
  )
}
