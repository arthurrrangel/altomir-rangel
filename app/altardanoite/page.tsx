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

      {/* MOBILE: foto no topo (fundo fundido no navy via blend) */}
      <div
        className="lg:hidden relative w-full isolate bg-cover bg-no-repeat"
        style={{ height: '46vh', minHeight: '320px', backgroundImage: 'url(/altomir-portrait.jpg)', backgroundPosition: '50% 12%' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#16243B', mixBlendMode: 'lighten' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(22,36,59,0.55) 80%, #16243B 100%)' }} />
      </div>

      {/* DESKTOP: foto à direita (fundo fundido no navy via blend, sem overlay pesado) */}
      <div className="hidden lg:block absolute right-0 top-0 w-[56%] h-full z-0 isolate">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/altomir-portrait.jpg)', backgroundPosition: '54% 14%' }}
        />
        {/* Funde o fundo escuro da foto no navy do site */}
        <div className="absolute inset-0" style={{ backgroundColor: '#16243B', mixBlendMode: 'lighten' }} />
        {/* Fade suave só na borda esquerda (encontro com o texto) */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #16243B 0%, rgba(22,36,59,0.55) 15%, transparent 42%)' }} />
        {/* Brilho dourado de recorte */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(100% 80% at 72% 32%, rgba(216,169,58,0.10) 0%, transparent 56%)' }} />
      </div>

      {/* Brilho dourado atrás do título */}
      <div className="absolute left-0 top-1/3 w-[680px] h-[680px] pointer-events-none -translate-x-1/3 hidden md:block" style={{ background: 'radial-gradient(circle, rgba(216,169,58,0.12) 0%, transparent 62%)' }} />

      {/* Conteúdo */}
      <section className="relative z-10 min-h-screen flex items-center max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-6 lg:py-0 pointer-events-none">
        <div className="w-full lg:max-w-[540px] pointer-events-auto">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/40 text-red-300 font-inter text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Ao Vivo
            </span>
            <span className="label">Comunidade de Oração</span>
          </div>

          <h1 className="font-playfair text-white leading-[0.95] drop-shadow-[0_2px_24px_rgba(16,27,44,0.85)]" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Altar da <span className="italic text-[#D8A93A]">Noite</span>
          </h1>

          <p className="mt-5 font-inter text-white/80 text-[16px] md:text-[19px] leading-relaxed max-w-md drop-shadow-[0_2px_16px_rgba(16,27,44,0.75)]">
            Entre para a comunidade e participe da nossa oração{' '}
            <span className="text-[#D8A93A] font-semibold">ao vivo</span>, todo dia às{' '}
            <strong className="text-white font-semibold">21h</strong>, no YouTube do Altomir.
          </p>

          <div className="mt-8 max-w-md">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  )
}
