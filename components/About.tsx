"use client"
import { useEffect, useRef } from 'react'

const stats = [
  { value: '20+', label: 'Anos Pregando' },
  { value: '500+', label: 'Igrejas Visitadas' },
  { value: 'Milhares', label: 'Vidas Transformadas' },
  { value: '4', label: 'Livros Publicados' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120))
      })
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="visao" ref={ref} className="relative py-28 md:py-40 overflow-hidden bg-[#0F0F17]">

      {/* Gold accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/30 to-transparent" />
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-[#C5973F]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#C5973F]" />
          <span className="label">Visao & Proposito</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Photo */}
          <div className="reveal-left relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Corner decor */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C5973F]" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#C5973F]" />
              <div className="w-full h-full bg-[#141420] flex items-center justify-center relative overflow-hidden">
                <span className="font-bebas text-[120px] text-[#C5973F]/10 select-none">AR</span>
                <div className="absolute bottom-4 inset-x-4 border border-[#C5973F]/20 px-3 py-2 bg-black/40">
                  <span className="font-inter text-[9px] text-[#C5973F]/50 tracking-[0.2em] uppercase">Insira a foto do Altomir</span>
                </div>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -right-4 top-8 bg-[#0A0A0F] border border-[#C5973F]/30 px-5 py-4 shadow-2xl hidden lg:block">
              <div className="font-bebas text-5xl text-[#C5973F] leading-none">20+</div>
              <div className="font-inter text-[9px] text-white/30 tracking-[0.2em] uppercase mt-1">Anos de Ministerio</div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <h2 className="font-bebas text-[clamp(42px,6vw,80px)] leading-[0.9] text-white">
                ENSINAR AS PESSOAS<br />
                A <span className="text-[#C5973F]">OUVIR DEUS</span><br />
                E O NOSSO<br />PROPOSITO
              </h2>
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-inter text-white/50 leading-loose text-[15px]">
                Altomir Rangel e um empresario brasileiro que encontrou em Deus o seu maior proposito.
                Voluntario no Reino de Deus, dedica parte significativa de sua vida pregando em igrejas
                e comunidades sem nenhum interesse financeiro.
              </p>
              <p className="font-inter text-white/50 leading-loose text-[15px]">
                Com uma trajetoria marcada pelo equilibrio entre os negocios e a vida espiritual,
                Altomir demonstra que e possivel ser bem-sucedido no mundo corporativo sem abrir
                mao dos valores cristaos.
              </p>
            </div>

            {/* Quote */}
            <div className="reveal border-l-2 border-[#C5973F] pl-6 py-2">
              <p className="font-playfair italic text-xl text-white/70 leading-relaxed">
                &ldquo;O maior negocio que fiz na vida foi me entregar ao servico de Deus.&rdquo;
              </p>
              <span className="font-inter text-[10px] text-[#C5973F] tracking-[0.25em] uppercase mt-2 block">— Altomir Rangel</span>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-2">
              {stats.map(s => (
                <div key={s.value} className="border border-white/8 bg-white/3 p-4 flex flex-col gap-1 text-center hover:border-[#C5973F]/40 transition-colors">
                  <span className="font-bebas text-3xl text-[#C5973F]">{s.value}</span>
                  <span className="font-inter text-[9px] text-white/35 tracking-[0.1em] uppercase leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a href="#contato" className="btn-gold">
                Convidar para Pregar &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
