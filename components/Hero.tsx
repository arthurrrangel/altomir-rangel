'use client'
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
    <section ref={ref} className="relative overflow-hidden bg-[#0A0A0F] md:min-h-screen md:flex md:items-center">

      {/* ── MOBILE: foto proeminente no topo ── */}
      <div className="relative md:hidden w-full" style={{height: '68vh'}}>
        <Image
          src="/altomir.png"
          alt="Altomir Rangel"
          fill
          priority
          className="object-cover"
          style={{objectPosition: '62% 12%'}}
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, #0A0A0F 0%, transparent 12%, transparent 50%, #0A0A0F 100%)'
        }} />
      </div>

      {/* ── DESKTOP: foto lado direito (absolute) ── */}
      <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full z-0">
        <Image
          src="/altomir.png"
          alt="Altomir Rangel"
          fill
          priority
          className="object-cover"
          style={{objectPosition: '50% 10%'}}
          sizes="55vw"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, #0A0A0F 0%, #0A0A0F 15%, rgba(10,10,15,0.7) 45%, rgba(10,10,15,0.1) 100%)'}} />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to top, #0A0A0F 0%, transparent 30%)'}} />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #0A0A0F 0%, transparent 15%)'}} />
      </div>

      {/* Subtle gold glow — desktop only */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden md:block"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.06) 0%, transparent 70%)'}} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="pt-2 pb-16 md:pt-24 md:pb-16 max-w-2xl mx-auto md:mx-0 text-center md:text-left">

          {/* Label */}
          <div className="h-reveal opacity-0 flex items-center justify-center md:justify-start gap-3 mb-6"
            style={{transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
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
          <p className="h-reveal font-inter text-white/45 text-[15px] leading-relaxed max-w-xs mx-auto md:mx-0 mb-8"
            style={{opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s'}}>
            Empresário brasileiro, pregador voluntário e autor de livros cristãos.
            Mais de 20 anos levando a Palavra de Deus a igrejas em todo o Brasil.
          </p>

          {/* CTAs */}
          <div className="h-reveal flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-12"
            style={{opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.39s, transform 0.7s ease 0.39s'}}>
            <a href="#visao" className="btn-gold w-full sm:w-auto justify-center">
              Conhecer o Ministério <ArrowRight size={14} />
            </a>
            <a href="#livros" className="btn-outline w-full sm:w-auto justify-center">
              Ver os Livros
            </a>
          </div>

          {/* Stats */}
          <div className="h-reveal pt-8 border-t border-white/10 flex justify-center md:justify-start gap-10 md:gap-8"
            style={{opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease 0.52s, transform 0.7s ease 0.52s'}}>
            {[
              { n: '20+', l: 'Anos pregando' },
              { n: '500+', l: 'Igrejas visitadas' },
              { n: '4', l: 'Livros publicados' },
            ].map(s => (
              <div key={s.n} className="flex flex-col gap-1 items-center md:items-start">
                <span className="font-bebas text-4xl text-[#C5973F] leading-none">{s.n}</span>
                <span className="font-inter text-[10px] text-white/30 uppercase tracking-widest">{s.l}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
