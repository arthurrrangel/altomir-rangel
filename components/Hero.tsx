"use client"
import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { hero } from '@/lib/content'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.querySelectorAll<HTMLElement>('.h-reveal').forEach((el, i) =>
        setTimeout(() => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, i * 130))
    }, 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-transparent lg:min-h-screen lg:flex lg:items-center">

      {/* Foto — recorte em alta resolução; topo no mobile, direita no desktop */}
      <div className="relative w-full mt-16 h-[48svh] min-h-[300px] lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[55%] lg:min-h-0 z-0">
        {/* Glow atrás da figura */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 52% at 52% 62%, rgba(216,169,58,0.12) 0%, transparent 70%)' }}
        />
        <Image
          src="/altomir-hero.webp"
          alt="Altomir Rangel"
          fill
          priority
          className="object-contain object-bottom"
          sizes="(max-width: 1024px) 70vw, 55vw"
          quality={74}
        />
        {/* Fusão com o fundo no mobile */}
        <div
          className="absolute inset-x-0 bottom-0 h-14 lg:hidden pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(27,42,68,0.85) 0%, transparent 100%)' }}
        />
      </div>

      {/* Glow lateral esquerdo */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block"
        style={{ background: 'radial-gradient(ellipse, rgba(216,169,58,0.07) 0%, transparent 65%)' }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="pt-4 pb-12 lg:pt-24 lg:pb-16 lg:max-w-2xl lg:mx-0">

          {hero.label && (
            <div
              className="h-reveal opacity-0 flex items-center justify-center lg:justify-start mb-4 lg:mb-6"
              style={{ transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
            >
              <span className="label">{hero.label}</span>
            </div>
          )}

          <h1
            className="h-reveal font-bebas leading-[0.88] text-white mb-4 lg:mb-6 text-center lg:text-left"
            style={{
              fontSize: 'clamp(38px, 9.5vw, 122px)',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.8s ease 0.13s, transform 0.8s ease 0.13s',
            }}
          >
            {hero.headline1}
            {hero.headline2 && <><br />{hero.headline2}</>}
            <br /><span className="text-[#D8A93A]">{hero.headlineGold}</span>
          </h1>

          <p
            className="h-reveal font-inter text-white/70 text-[14px] lg:text-[15px] leading-relaxed mb-7 lg:mb-9 text-center lg:text-left max-w-md mx-auto lg:mx-0"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s' }}
          >
            {hero.subtitle}
          </p>

          <div
            className="h-reveal flex flex-col sm:flex-row gap-3 items-center lg:items-start justify-center lg:justify-start"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.39s, transform 0.7s ease 0.39s' }}
          >
            <a href="#visao" className="btn-gold w-full sm:w-auto sm:min-w-[220px] justify-center min-h-[50px]">
              {hero.ctaPrimary} <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a href="#livros" className="btn-outline w-full sm:w-auto sm:min-w-[220px] justify-center min-h-[50px]">
              {hero.ctaSecondary}
            </a>
          </div>

        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-[26%] -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 pointer-events-none scroll-indicator" aria-hidden="true">
        <span className="font-inter text-[9px] text-white/30 tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown size={14} className="text-white/35" />
      </div>

    </section>
  )
}
