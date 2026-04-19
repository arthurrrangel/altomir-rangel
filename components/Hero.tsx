"use client"
import { useEffect, useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const t1 = setTimeout(() => ref.current?.querySelectorAll('.h-reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('h-visible'), i * 120)
    }), 200)
    return () => clearTimeout(t1)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0A0A0F]">

      {/* Background photo placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full" style={{background: 'linear-gradient(135deg, #0A0A0F 0%, #0F0F1A 40%, #0A0A0F 100%)'}} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 70% 50%, rgba(197,151,63,0.06) 0%, transparent 65%)'}} />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to top, #0A0A0F 0%, transparent 60%)'}} />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, #0A0A0F 30%, transparent 70%)'}} />
        {/* Foto placeholder */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center opacity-20">
          <span className="font-bebas text-[20vw] text-[#C5973F] select-none">AR</span>
        </div>
      </div>

      {/* Grid lines decoration */}
      <div className="absolute top-0 left-0 w-px h-full bg-white/5 ml-[10%] hidden lg:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-white/5 mr-[10%] hidden lg:block" />
      <div className="absolute top-1/4 inset-x-0 h-px bg-white/3 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-32 md:pt-40 w-full">

        {/* Label */}
        <div className="h-reveal opacity-0 translate-y-6 transition-all duration-700 flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#C5973F]" />
          <span className="label">Empresario . Pregador . Autor</span>
        </div>

        {/* Main headline */}
        <h1 className="h-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 font-bebas text-[clamp(60px,10vw,130px)] leading-[0.9] text-white mb-6">
          ENSINAR AS<br />
          PESSOAS A<br />
          <span className="text-[#C5973F]">OUVIR DEUS</span>
        </h1>

        {/* Subtitle */}
        <p className="h-reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 font-inter text-white/45 text-[15px] leading-relaxed max-w-md mb-10">
          Empresario brasileiro, pregador voluntario e autor de livros cristãos.
          Mais de 20 anos levando a Palavra de Deus a milhares de pessoas.
        </p>

        {/* CTAs */}
        <div className="h-reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-wrap items-center gap-4">
          <a href="#visao" className="btn-gold">
            Conhecer o Ministerio <ArrowRight size={14} />
          </a>
          <a href="#livros" className="btn-outline">
            Ver os Livros
          </a>
        </div>

        {/* Stats bar */}
        <div className="h-reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
          {[
            { n: '20+', l: 'Anos pregando' },
            { n: '500+', l: 'Igrejas visitadas' },
            { n: '4', l: 'Livros publicados' },
          ].map(s => (
            <div key={s.n} className="flex flex-col gap-1">
              <span className="font-bebas text-4xl text-[#C5973F] leading-none">{s.n}</span>
              <span className="font-inter text-[10px] text-white/35 uppercase tracking-widest">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C5973F]/40" />
        <span className="font-inter text-[9px] text-white/20 tracking-[0.3em] uppercase">scroll</span>
      </div>
    </section>
  )
}
