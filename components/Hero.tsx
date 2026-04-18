'use client'
import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.h-reveal')
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1'
        ;(el as HTMLElement).style.transform = 'translateY(0) translateX(0)'
      }, 200 + i * 150)
    })
  }, [])

  return (
    <section id="inicio" ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden bg-dark noise"
      style={{ background: 'linear-gradient(135deg, #0C0C0C 0%, #111108 100%)' }}>

      {/* Background photo — replace with real Altomir photo */}
      <div className="absolute inset-0">
        {/* Gradient overlay left → right (text readable on left, photo visible right) */}
        <div className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(100deg, #0C0C0C 35%, rgba(12,12,12,0.7) 60%, rgba(12,12,12,0.2) 100%)' }} />
        {/* Photo placeholder — swap for <Image src="/altomir.jpg" ... /> */}
        <div className="absolute right-0 top-0 h-full w-[65%]"
          style={{ background: 'linear-gradient(160deg, #1a1708 0%, #0C0C0C 100%)' }}>
          {/* Placeholder silhouette */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <div className="w-[380px] h-[580px] rounded-t-full opacity-10"
              style={{ background: 'radial-gradient(ellipse at center, #C5973F 0%, transparent 70%)' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="font-bebas text-[20vw] text-gold select-none">AR</span>
          </div>
        </div>
      </div>

      {/* Gold vertical accent line */}
      <div className="absolute left-[calc(50%-2px)] top-0 h-32 w-px bg-gradient-to-b from-gold to-transparent opacity-30 z-20 hidden xl:block" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-36 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="h-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s cubic-bezier(.16,1,.3,1)' }}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
                Empresário · Pregador · Autor
              </span>
            </div>
          </div>

          {/* Main title — HUGE like Vinicius Iracet */}
          <div className="h-reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.8s cubic-bezier(.16,1,.3,1)' }}>
            <h1 className="font-bebas leading-none tracking-wide">
              <span className="block text-[clamp(80px,14vw,180px)] text-cream">PREGANDO</span>
              <span className="block text-[clamp(80px,14vw,180px)] text-gold" style={{ WebkitTextStroke: '2px #C5973F', color: 'transparent' }}>
                A PALAVRA
              </span>
              <span className="block text-[clamp(80px,14vw,180px)] text-cream">DE DEUS</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="h-reveal mt-6" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s cubic-bezier(.16,1,.3,1)' }}>
            <p className="font-inter text-cream/50 text-base leading-relaxed max-w-md">
              Empresário de sucesso que dedica sua vida ao serviço voluntário do Reino de Deus —
              pregando nas igrejas, escrevendo livros e alcançando vidas pelo YouTube.
            </p>
          </div>

          {/* CTAs */}
          <div className="h-reveal mt-10 flex flex-wrap gap-4" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s cubic-bezier(.16,1,.3,1)' }}>
            <a href="#livros" className="btn-gold">
              CONHEÇA OS LIVROS
            </a>
            <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer" className="btn-outline">
              CANAL NO YOUTUBE →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#visao" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream/25 hover:text-gold transition-colors">
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 z-10"
        style={{ background: 'linear-gradient(to top, #0C0C0C, transparent)' }} />
    </section>
  )
}
