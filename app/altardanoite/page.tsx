import type { Metadata } from 'next'
import Image from 'next/image'
import { Youtube, Clock } from 'lucide-react'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  title: 'Altar da Noite — Oração ao vivo às 21h | Altomir Rangel',
  description:
    'Participe do Altar da Noite: todo dia, às 21h, oração ao vivo no YouTube do Altomir Rangel. Entre para a comunidade de oração no WhatsApp.',
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

      {/* MOBILE: foto no topo */}
      <div className="lg:hidden relative w-full" style={{ height: '40vh', minHeight: '260px' }}>
        <Image src="/altomir.png" alt="Altomir Rangel" fill priority className="object-cover" style={{ objectPosition: '50% 12%' }} sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(22,36,59,0.35) 0%, transparent 30%, transparent 55%, #16243B 100%)' }} />
      </div>

      {/* DESKTOP: foto à direita */}
      <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-bebas text-white/[0.035] leading-none whitespace-nowrap" style={{ fontSize: '24vw' }}>ALTAR</span>
        </div>
        <Image src="/altomir.png" alt="Altomir Rangel" fill priority className="object-cover" style={{ objectPosition: '50% 10%' }} sizes="50vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #16243B 0%, #16243B 8%, rgba(22,36,59,0.72) 32%, rgba(22,36,59,0.2) 70%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #16243B 0%, transparent 28%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #16243B 0%, transparent 18%)' }} />
      </div>

      {/* Brilho dourado */}
      <div className="absolute left-0 top-1/3 w-[640px] h-[640px] pointer-events-none -translate-x-1/3 hidden md:block" style={{ background: 'radial-gradient(circle, rgba(216,169,58,0.12) 0%, transparent 62%)' }} />

      {/* Conteúdo */}
      <section className="relative z-10 min-h-screen flex items-center max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-6 lg:py-0">
        <div className="w-full lg:max-w-[560px]">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/40 text-red-300 font-inter text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Ao Vivo
            </span>
            <span className="label">Comunidade de Oração</span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-white leading-[0.95]" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Altar da <span className="italic text-[#D8A93A]">Noite</span>
          </h1>

          {/* Subhead */}
          <p className="mt-5 font-inter text-white/70 text-[16px] md:text-[19px] leading-relaxed max-w-md">
            Todo dia, às <strong className="text-white font-semibold">21h</strong>, oração{' '}
            <span className="text-[#D8A93A] font-semibold">ao vivo</span> no YouTube do Altomir. Entre para a
            comunidade e ore com a gente toda noite.
          </p>

          {/* Formulário */}
          <div className="mt-8 max-w-md">
            <LeadForm />
          </div>

          {/* Link secundário YouTube */}
          <a
            href="https://www.youtube.com/@altomirrangel/live"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-inter text-white/55 hover:text-white text-[14px] transition-colors"
          >
            <Youtube size={17} className="text-red-500" /> Assistir ao vivo agora no YouTube
          </a>

          {/* Horário */}
          <div className="mt-5 flex items-center gap-2 font-inter text-white/40 text-[13px]">
            <Clock size={14} className="text-[#D8A93A]" /> Todas as noites · 21h (horário de Brasília)
          </div>
        </div>
      </section>
    </main>
  )
}
