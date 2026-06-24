import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  title: 'Altar da Noite — Oração ao vivo às 21h | Altomir Rangel',
  description:
    'Um encontro com Deus toda noite. Entre para a comunidade de oração do Altar da Noite e ore ao vivo, todos os dias às 21h, no YouTube do Altomir Rangel.',
  openGraph: {
    title: 'Altar da Noite — Oração ao vivo às 21h',
    description: 'Um encontro com Deus toda noite. Ore ao vivo às 21h. Entre para a comunidade.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="min-h-screen flex flex-col-reverse lg:grid lg:grid-cols-[1.06fr_0.94fr]">

        {/* ===== CONTEÚDO ===== */}
        <div className="flex items-center px-6 sm:px-10 lg:px-14 xl:px-20 pt-8 pb-14 sm:pt-12 lg:py-12">
          <div className="w-full max-w-[480px] mx-auto lg:mx-0">
            <a href="/" className="inline-flex flex-col leading-none mb-9 sm:mb-11">
              <span className="font-bebas text-xl text-white tracking-[0.2em]">ALTOMIR</span>
              <span className="font-inter text-[8px] text-[#D8A93A] tracking-[0.45em] uppercase mt-1">Rangel</span>
            </a>

            <h1 className="font-bebas text-white leading-[0.82] text-[clamp(58px,8.5vw,108px)]">
              Altar da<br /><span className="text-[#D8A93A]">Noite</span>
            </h1>

            {/* horário (acento, não eyebrow) */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#D8A93A]/70 flex-shrink-0" />
              <span className="font-inter text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#D8A93A] uppercase">
                Ao vivo · Toda noite às 21h
              </span>
            </div>

            <p className="mt-5 font-inter text-white/70 text-[15px] sm:text-[16px] leading-relaxed max-w-[420px]">
              Um encontro com Deus toda noite. Entre para a nossa comunidade de oração e ore ao vivo
              com o Pr. Altomir, todos os dias às 21h no YouTube.
            </p>

            <div className="mt-7">
              <LeadForm />
            </div>
          </div>
        </div>

        {/* ===== FOTO ===== */}
        <div className="relative flex items-end justify-center h-[42vh] sm:h-[48vh] lg:h-auto overflow-hidden">
          <div
            className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[92%] h-[80%] pointer-events-none"
            style={{ background: 'radial-gradient(closest-side at 50% 62%, rgba(36,56,96,0.9) 0%, transparent 76%)' }}
          />
          <img
            src="/altomir-recorte.webp"
            alt="Pastor Altomir Rangel"
            className="relative h-full lg:h-[84%] w-auto max-w-none object-contain object-bottom select-none pointer-events-none"
          />
        </div>

      </div>
    </main>
  )
}
