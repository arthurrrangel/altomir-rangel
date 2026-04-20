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
    <section id="visao" ref={ref} className="relative py-16 md:py-40 overflow-hidden bg-[#0F0F17]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-stretch">

          {/* Foto mobile — acima do texto */}
          <div className="reveal lg:hidden relative w-full overflow-hidden" style={{height: '72vw', maxHeight: '360px'}}>
            <Image
              src="/altomir-portrait.jpg"
              alt="Altomir Rangel"
              fill
              className="object-cover"
              style={{objectPosition: 'center top'}}
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 50%, #0F0F17 100%)'}} />
          </div>

          {/* Foto desktop */}
          <div className="reveal-left hidden lg:block relative min-h-[500px]">
            <Image
              src="/altomir-portrait.jpg"
              alt="Altomir Rangel"
              fill
              className="object-cover"
              style={{objectPosition: 'center top'}}
              sizes="50vw"
            />
            <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 60%, #0F0F17 100%)'}} />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="reveal flex items-center justify-center lg:justify-start">
              <span className="label">{about.label}</span>
            </div>
            <div className="reveal">
              <h2 className="font-bebas text-[clamp(34px,8vw,80px)] leading-[0.9] text-white text-center lg:text-left">
                {about.headline1}<br /><span className="text-[#C5973F]">{about.headlineGold}</span>
                {about.headline2 ? <><br />{about.headline2}</> : null}
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
            {about.quote && (
              <div className="reveal lg:border-l-2 border-[#C5973F] lg:pl-6 py-2">
                <p className="font-playfair italic text-xl text-white/70 leading-relaxed text-center lg:text-left">
                  {about.quote}
                </p>
                {about.quoteAuthor && (
                  <span className="font-inter text-[10px] text-[#C5973F] tracking-[0.25em] uppercase mt-2 block text-center lg:text-left">{about.quoteAuthor}</span>
                )}
              </div>
            )}
            <div className="reveal flex justify-center lg:justify-start">
              <a href="#contato" className="btn-gold w-full sm:w-auto justify-center">
                Convidar para Pregar &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
