'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

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

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/30 to-transparent" />
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-[#C5973F]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#C5973F]" />
          <span className="label">Visão &amp; Propósito</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <div className="reveal-left relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C5973F] z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#C5973F] z-10" />
              <div className="w-full h-full overflow-hidden relative">
                <Image
                  src="/altomir.png"
                  alt="Altomir Rangel"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 60%, #0F0F17 100%)'}} />
              </div>
            </div>
            <div className="absolute -right-4 top-8 bg-[#0A0A0F] border border-[#C5973F]/30 px-5 py-4 shadow-2xl hidden lg:block z-10">
              <div className="font-bebas text-5xl text-[#C5973F] leading-none">20+</div>
              <div className="font-inter text-[9px] text-white/30 tracking-[0.2em] uppercase mt-1">Anos de Ministério</div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <h2 className="font-bebas text-[clamp(42px,6vw,80px)] leading-[0.9] text-white">
                ENSINAR AS PESSOAS<br />
                A <span className="text-[#C5973F]">OUVIR DEUS</span><br />
                É O NOSSO<br />PROPOSITO
              </h2>
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-inter text-white/50 leading-loose text-[15px]">
                Altomir Rangel é um empresário brasileiro que encontrou em Deus o seu maior propósito.
                Voluntário no Reino de Deus, dedica parte significativa de sua vida pregando em igrejas
                e comunidades — sem nenhum interesse financeiro, movido pela fé e pelo amor as pessoas.
              </p>
              <p className="font-inter text-white/50 leading-loose text-[15px]">
                Com uma trajetória marcada pelo equilíbrio entre os negócios e a vida espiritual,
                Altomir demonstra que é possível ser bem-sucedido no mundo corporativo sem abrir
                mão dos valores cristãos.
              </p>
            </div>

            <div className="reveal border-l-2 border-[#C5973F] pl-6 py-2">
              <p className="font-playfair italic text-xl text-white/70 leading-relaxed">
                &ldquo;O maior negócio que fiz na vida foi me entregar ao serviço de Deus.&rdquo;
              </p>
              <span className="font-inter text-[10px] text-[#C5973F] tracking-[0.25em] uppercase mt-2 block">— Altomir Rangel</span>
            </div>

            <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-2">
              {stats.map(s => (
                <div key={s.value} className="border border-white/[0.08] bg-white/[0.03] p-4 flex flex-col gap-1 text-center hover:border-[#C5973F]/40 transition-colors">
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
