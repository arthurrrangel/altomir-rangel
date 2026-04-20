"use client"
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.querySelectorAll('.h-reveal').forEach((el, i) =>
        setTimeout(() => el.classList.add('h-visible'), i * 130))
    }, 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F]">

      {/* Photo — right side, blending into dark bg */}
      <div className="absolute right-0 top-0 w-full md:w-[55%] h-full z-0">
        <Image
          src="/altomir.png"
          alt="Altomir Rangel"
          fill
          priority
          className="object-cover" style={{objectPosition: "50% 10%"}}
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        {/* Gradient masks to blend with dark bg */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, #0A0A0F 0%, #0A0A0F 15%, rgba(10,10,15,0.7) 45%, rgba(10,10,15,0.1) 100%)'}} />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to top, #0A0A0F 0%, transparent 30%)'}} />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #0A0A0F 0%, transparent 15%)'}} />
        <div className="absolute inset-0 md:hidden" style={{background: 'rgba(10,10,15,0.55)'}} />
      </div>

      {/* Subtle gold glow behind text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.06) 0%, transparent 70%)'}} />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">

        <div className="max-w-2xl">
          {/* Label */}
          <div className="h-reveal opacity-0 transition-all duration-700 flex items-center gap-3 mb-7" style={{transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
            <div className="w-8 h-px bg-[#C5973F]" />
            <span className="label">Empresário · Pregador · Autor</span>
          </div>

          {/* Headline */}
          <h1 className="h-reveal font-bebas text-[clamp(40px,11vw,128px)] leading-[0.88] text-white mb-6"
            style={{opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease 0.13s, transform 0.8s ease 0.13s'}}>
            ENSINAR AS<br />
            PESSOAS A<br />
            <span className="text-[#C5973F]">OUVIR DEUS</span>
          </h1>

          {/* Subtitle */}
          <p className="h-reveal font-inter text-white/45 text-[15px] leading-relaxed max-w-sm mb-8"
            style={{opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s'}}>
            Empresário brasileiro, pregador voluntário e autor de livros cristãos.
            Mais de 20 anos levando a Palavra de Deus a igrejas em todo o Brasil.
          </p>

          {/* CTAs */}
          <div className="h-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-14"
            style={{opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.39s, transform 0.7s ease 0.39s'}}>
            <a href="#visao" className="btn-gold">
              Conhecer o Ministério <ArrowRight size={14} />
            </a>
            <a href="#livros" className="btn-outline">
              Ver os Livros
            </a>
          </div>

          {/* Stats */}
          <div className="h-reveal pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md"
            style={{opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.52s, transform 0.7s ease 0.52s'}}>
            {[
              { n: '20+', l: 'Anos pregando' },
              { n: '500+', l: 'Igrejas visitadas' },
              { n: '4', l: 'Livros publicados' },
            ].map(s => (
              <div key={s.n} className="flex flex-col gap-1">
                <span className="font-bebas text-4xl text-[#C5973F] leading-none">{s.n}</span>
                <span className="font-inter text-[10px] text-white/30 uppercase tracking-widest">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div></section>
  )
}
