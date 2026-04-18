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
    <section id="visao" ref={ref} className="relative py-28 md:py-40 overflow-hidden bg-white">

      {/* Very subtle gold glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197,151,63,0.05) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold" />
          <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Visão & Propósito</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left — Photo */}
          <div className="reveal-left relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Corner decorators gold */}
              <div className="absolute -top-4 -left-4 w-14 h-14 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute -bottom-4 -right-4 w-14 h-14 border-b-2 border-r-2 border-gold/50" />
              {/* Photo placeholder — dark frame on white background looks beautiful */}
              <div className="w-full h-full relative overflow-hidden shadow-2xl"
                style={{ background: 'linear-gradient(145deg, #1a1a14 0%, #0f0f0a 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bebas text-[120px] text-gold/10 select-none">AR</span>
                </div>
                <div className="absolute bottom-6 inset-x-6">
                  <div className="bg-gold/10 border border-gold/25 px-4 py-2">
                    <span className="font-inter text-[10px] text-gold/60 tracking-[0.2em] uppercase">
                      📸 Insira a foto do Altomir aqui
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -right-4 top-10 bg-white border border-gold/30 px-6 py-5 shadow-xl hidden lg:block">
              <div className="font-bebas text-5xl text-gold leading-none">20+</div>
              <div className="font-inter text-[10px] text-[#1A1305]/45 tracking-[0.2em] uppercase mt-1">Anos de Ministério</div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <h2 className="font-bebas text-[clamp(42px,6vw,78px)] leading-none text-[#1A1305]">
                ENSINAR AS PESSOAS<br />
                <span className="text-gold">A OUVIR DEUS</span><br />
                É O NOSSO<br />PROPÓSITO
              </h2>
            </div>

            <div className="reveal flex flex-col gap-5">
              <p className="font-inter text-[#1A1305]/60 leading-loose text-[15px]">
                Altomir Rangel é um empresário brasileiro que encontrou em Deus o seu maior propósito.
                Voluntário no Reino de Deus, dedica parte significativa de sua vida pregando em igrejas
                e comunidades — sem nenhum interesse financeiro, movido apenas pela fé e pelo amor às pessoas.
              </p>
              <p className="font-inter text-[#1A1305]/60 leading-loose text-[15px]">
                Com uma trajetória marcada pelo equilíbrio entre os negócios e a vida espiritual,
                Altomir demonstra que é possível ser bem-sucedido no mundo corporativo sem abrir
                mão dos valores cristãos.
              </p>
            </div>

            {/* Quote */}
            <div className="reveal border-l-[3px] border-gold pl-7 py-3 bg-[#FAF8F2] -mx-2 px-7">
              <p className="font-playfair italic text-xl text-[#1A1305]/75 leading-relaxed">
                &ldquo;O maior negócio que fiz na vida foi me entregar ao serviço de Deus.&rdquo;
              </p>
              <span className="font-inter text-xs text-gold tracking-[0.2em] uppercase mt-3 block">— Altomir Rangel</span>
            </div>

            {/* Stats grid */}
            <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(s => (
                <div key={s.value} className="border border-[#E8E0D0] bg-[#FAF8F2] p-5 flex flex-col gap-1 text-center hover:border-gold/40 transition-colors">
                  <span className="font-bebas text-3xl text-gold">{s.value}</span>
                  <span className="font-inter text-[10px] text-[#1A1305]/45 tracking-[0.12em] uppercase leading-snug">{s.label}</span>
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
