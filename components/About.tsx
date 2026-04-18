'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '20+', label: 'Anos Pregando' },
  { value: '500+', label: 'Igrejas Visitadas' },
  { value: 'Milhares', label: 'Vidas Transformadas' },
  { value: 'Brasil', label: 'Alcance Nacional' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120)
          })
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="visao" ref={ref} className="relative py-28 md:py-36 bg-dark-100 overflow-hidden">

      {/* Gold glow top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197,151,63,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold" />
          <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Visão & Propósito</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Photo */}
          <div className="reveal-left relative">
            {/* Photo frame */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Corner decorators */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/60" />
              {/* Photo bg — replace with real image */}
              <div className="w-full h-full relative overflow-hidden"
                style={{ background: 'linear-gradient(145deg, #1a1a14 0%, #0f0f0a 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bebas text-[120px] text-gold/10 select-none">AR</span>
                </div>
                {/* Placeholder text */}
                <div className="absolute bottom-6 inset-x-6">
                  <div className="bg-gold/10 border border-gold/20 px-4 py-2">
                    <span className="font-inter text-[10px] text-gold/60 tracking-[0.2em] uppercase">
                      📸 Insira a foto do Altomir aqui
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-6 top-12 bg-dark border border-gold/25 px-6 py-5 hidden lg:block">
              <div className="font-bebas text-5xl text-gold">20+</div>
              <div className="font-inter text-[10px] text-cream/50 tracking-[0.2em] uppercase mt-1">Anos de Ministério</div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-none text-cream">
                ENSINAR AS PESSOAS<br />
                <span className="text-gold">A OUVIR DEUS</span><br />
                É O NOSSO<br />PROPÓSITO
              </h2>
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-inter text-cream/55 leading-relaxed text-[15px]">
                Altomir Rangel é um empresário brasileiro que encontrou em Deus o seu maior propósito.
                Voluntário no Reino de Deus, dedica parte significativa de sua vida pregando em igrejas
                e comunidades — sem nenhum interesse financeiro, movido apenas pela fé e pelo amor às pessoas.
              </p>
              <p className="font-inter text-cream/55 leading-relaxed text-[15px]">
                Com uma trajetória marcada pelo equilíbrio entre os negócios e a vida espiritual,
                Altomir demonstra que é possível ser bem-sucedido no mundo corporativo sem abrir
                mão dos valores cristãos.
              </p>
            </div>

            {/* Quote */}
            <div className="reveal border-l-2 border-gold pl-6 py-2">
              <p className="font-playfair italic text-xl text-cream/80 leading-snug">
                &ldquo;O maior negócio que fiz na vida foi me entregar ao serviço de Deus.&rdquo;
              </p>
              <span className="font-inter text-xs text-gold/70 tracking-[0.2em] uppercase mt-3 block">— Altomir Rangel</span>
            </div>

            {/* Stats grid */}
            <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {stats.map(s => (
                <div key={s.value} className="bg-dark-100 p-5 flex flex-col gap-1">
                  <span className="font-bebas text-3xl text-gold">{s.value}</span>
                  <span className="font-inter text-[10px] text-cream/40 tracking-[0.15em] uppercase leading-snug">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a href="#contato" className="btn-gold inline-flex">
                CONVIDAR PARA PREGAR →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
