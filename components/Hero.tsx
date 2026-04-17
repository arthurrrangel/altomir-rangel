'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setTimeout(() => {
      el.querySelectorAll('.hero-reveal').forEach((node, i) => {
        setTimeout(() => {
          ;(node as HTMLElement).style.opacity = '1'
          ;(node as HTMLElement).style.transform = 'translateY(0)'
        }, i * 180)
      })
    }, 100)
  }, [])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0d1525]" />

      {/* Decorative circles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-500/5 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold-500/8 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold-500/3 blur-3xl pointer-events-none" />

      {/* Glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-gold-500/5 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Photo placeholder */}
        <div
          className="hero-reveal flex-shrink-0"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
        >
          <div className="relative w-52 h-52 md:w-72 md:h-72">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500/40 to-gold-700/20 blur-xl scale-110" />
            {/* Photo circle */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold-500/40 shadow-2xl shadow-gold-500/10">
              {/* Placeholder — replace src with real photo */}
              <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center">
                <span className="font-playfair text-5xl text-gold-500/60 select-none">AR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
          {/* Badge */}
          <div
            className="hero-reveal inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/25 rounded-full px-4 py-1.5"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
              Empresário · Pregador · Autor
            </span>
          </div>

          {/* Name */}
          <h1
            className="hero-reveal font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 leading-tight"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            Altomir{' '}
            <span className="text-gold-400 gold-glow">Rangel</span>
          </h1>

          {/* Tagline */}
          <p
            className="hero-reveal font-playfair italic text-xl md:text-2xl text-cream-100/60 max-w-lg"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            &ldquo;Levando a Palavra de Deus com fé, propósito e amor.&rdquo;
          </p>

          {/* Description */}
          <p
            className="hero-reveal text-cream-100/55 text-base leading-relaxed max-w-lg"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            Empresário de sucesso que dedica sua vida voluntariamente ao Reino de Deus, pregando a
            Palavra em igrejas, compartilhando conhecimento em livros e alcançando vidas pelo YouTube.
          </p>

          {/* CTAs */}
          <div
            className="hero-reveal flex flex-col sm:flex-row gap-4 mt-2"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            <a
              href="#livros"
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-gold-500/25 text-sm tracking-wide"
            >
              Conheça os Livros
            </a>
            <a
              href="https://www.youtube.com/@altomirrangel"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold-500/40 hover:border-gold-400 text-gold-400 hover:bg-gold-500/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm tracking-wide"
            >
              Canal no YouTube →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-500/50 hover:text-gold-400 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
