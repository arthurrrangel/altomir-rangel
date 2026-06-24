import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  title: 'Altar da Noite — Oração ao vivo às 21h | Altomir Rangel',
  description:
    'Entre para a comunidade de oração do Altar da Noite: todo dia, às 21h, oração ao vivo no YouTube do Altomir Rangel.',
  openGraph: {
    title: 'Altar da Noite — Oração ao vivo às 21h',
    description: 'Todo dia às 21h, oração ao vivo. Entre para a comunidade de oração.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Marca topo */}
      <a href="/" className="absolute top-6 left-6 md:top-8 md:left-10 z-30 flex flex-col leading-none">
        <span className="font-bebas text-xl md:text-2xl text-white tracking-[0.18em]">ALTOMIR</span>
        <span className="font-inter text-[8px] md:text-[9px] text-[#D8A93A] tracking-[0.42em] uppercase mt-0.5">Rangel</span>
      </a>

      {/* Brilho dourado atrás da figura */}
      <div className="hidden lg:block absolute right-[6%] top-[14%] w-[520px] h-[520px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(216,169,58,0.16) 0%, transparent 62%)' }} />

      {/* DESKTOP: recorte do Altomir (sem fundo), menor, ancorado embaixo */}
      <div
        className="hidden lg:block absolute right-[2%] bottom-0 top-[8%] w-[42%] z-0 bg-no-repeat"
        style={{ backgroundImage: 'url(/altomir-recorte.webp)', backgroundSize: 'contain', backgroundPosition: 'right bottom' }}
      />

      {/* MOBILE: recorte no topo */}
      <div
        className="lg:hidden relative w-full bg-no-repeat"
        style={{ height: '38vh', minHeight: '280px', backgroundImage: 'url(/altomir-recorte.webp)', backgroundSize: 'contain', backgroundPosition: 'center bottom' }}
      />

      {/* Conteúdo */}
      <section className="relative z-10 min-h-screen flex items-center max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-2 lg:py-0 pointer-events-none">
        <div className="w-full lg:max-w-[520px] pointer-events-auto">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/40 text-red-300 font-inter text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Ao Vivo
            </span>
            <span className="label">Comunidade de Oração</span>
          </div>

          {/* Headline */}
          <h1 className="font-bebas text-white leading-[0.86]" style={{ fontSize: 'clamp(60px, 11vw, 124px)' }}>
            Altar da <span className="text-[#D8A93A]">Noite</span>
          </h1>

          {/* Subhead */}
          <p className="mt-5 font-inter text-white/65 text-[15px] md:text-[17px] leading-relaxed max-w-sm">
            Entre para a comunidade e participe da nossa oração{' '}
            <span className="text-[#D8A93A] font-semibold">ao vivo</span>, todo dia às{' '}
            <strong className="text-white font-semibold">21h</strong>, no YouTube do Altomir.
          </p>

          {/* Formulário */}
          <div className="mt-8 max-w-md">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  )
}
