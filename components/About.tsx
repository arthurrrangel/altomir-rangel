'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

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
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Foto — coluna inteira, alinhada ao topo */}
          <div className="reveal-left">
            <div className="relative w-full overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src="/altomir.png"
                alt="Altomir Rangel"
                fill
                className="object-cover"
                style={{objectPosition: '55% 15%'}}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 60%, #0F0F17 100%)'}} />
            </div>
          </div>

          {/* Texto — label agora dentro da coluna, alinhado ao topo */}
          <div className="flex flex-col gap-8">
            <div className="reveal flex items-center gap-3">
              <div className="h-px w-8 bg-[#C5973F]" />
              <span className="label">Visão &amp; Propósito</span>
            </div>
            <div className="reveal">
              <h2 className="font-bebas text-[clamp(34px,8vw,80px)] leading-[0.9] text-white">
                ENSINAR AS PESSOAS<br />
                A <span className="text-[#C5973F]">OUVIR DEUS</span><br />
                É O NOSSO<br />PROPÓSITO
              </h2>
            </div>
            <div className="reveal flex flex-col gap-4">
              <p className="font-inter text-white/50 leading-loose text-[15px]">
                Altomir Rangel é um empresário brasileiro que encontrou em Deus o seu maior propósito.
                Voluntário no Reino de Deus há mais de 20 anos, já pregou em mais de 500 igrejas
                em todo o Brasil — sem nenhum interesse financeiro, movido pela fé e pelo amor as pessoas.
              </p>
              <p className="font-inter text-white/50 leading-loose text-[15px]">
                Com uma trajetória marcada pelo equilíbrio entre os negócios e a vida espiritual,
                Altomir demonstra que é possível ser bem-sucedido no mundo corporativo sem abrir
                mão dos valores cristãos. Autor de 4 livros e criador de conteúdo no YouTube,
                milhares de vidas já foram transformadas pela sua mensagem.
              </p>
            </div>
            <div className="reveal border-l-2 border-[#C5973F] pl-6 py-2">
              <p className="font-playfair italic text-xl text-white/70 leading-relaxed">
               &ldquo;O maior negócio que fiz na vida foi me entregar ao serviço de Deus.&rdquo;
              </p>
              <span className="font-inter text-[10px] text-[#C5973F] tracking-[0.25em] uppercase mt-2 block">— Altomir Rangel</span>
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
