'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { about } from '@/lib/content'

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
    <section id="visao" ref={ref} className="relative py-14 md:py-40 overflow-hidden bg-[#0F0F17]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* Foto — coluna inteira, alinhada ao topo */}
          <div className="reveal-left hidden lg:block">
            <div className="relative w-full overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:max-w-none lg:aspect-[3/4]">
              <Image
                src="/altomir.png"
                alt="Altomir Rangel"
                fill
                className="object-cover"
                style={{objectPosition: '37% 12%'}}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 60%, #0F0F17 100%)'}} />
            </div>
          </div>

          {/* Texto — label agora dentro da coluna, alinhado ao topo */}
          <div className="flex flex-col gap-8">
            <div className="reveal flex items-center justify-center lg:justify-start">
              <span className="label">{about.label}</span>
            </div>
            <div className="reveal">
              <h2 className="font-bebas text-[clamp(34px,8vw,80px)] leading-[0.9] text-white text-center lg:text-left">
                {about.headline1}<br /><span className="text-[#C5973F]">{about.headlineGold}</span><br />{about.headline2}
              </h2>
            </div>
            <div className="reveal flex flex-col gap-4">
              <p className="font-inter text-white/50 leading-loose text-[15px] text-center lg:text-left">
                {about.bio1}
              </p>
              <p className="font-inter text-white/50 leading-loose text-[15px] text-center lg:text-left">
                {about.bio2}
              </p>
            </div>
            <div className="reveal lg:border-l-2 border-[#C5973F] lg:pl-6 py-2 text-center lg:text-left">
              <p className="font-playfair italic text-xl text-white/70 leading-relaxed text-center lg:text-left">
                {about.quote}
              </p>
              <span className="font-inter text-[10px] text-[#C5973F] tracking-[0.25em] uppercase mt-2 block text-center lg:text-left">{about.quoteAuthor}</span>
            </div>
            <div className="reveal flex justify-center lg:justify-start">
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
