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
      <div className="lg:hidden absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C5973F]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-stretch">

          {/* Foto desktop */}
          <div className="reveal-left hidden lg:block relative min-h-[500px]">
            <Image src="/altomir-portrait.jpg" alt="Altomir Rangel" fill
              className="object-cover" style={{objectPosition: 'center top'}} sizes="50vw" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 60%, #0F0F17 100%)'}} />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5 lg:gap-8">

            <div className="reveal flex items-center justify-center lg:justify-start gap-3">
              <div className="hidden lg:block w-8 h-px bg-[#C5973F]" />
              <span className="label">{about.label}</span>
            </div>

            <div className="reveal text-center lg:text-left">
              <h2 className="font-bebas leading-[0.9] text-white" style={{fontSize: 'clamp(36px, 9vw, 80px)'}}>
                {about.headline1}<br />
                <span className="text-[#C5973F]">{about.headlineGold}</span>
                {about.headline2 ? <><br />{about.headline2}</> : null}
              </h2>
            </div>

            <div className="reveal flex justify-center lg:hidden">
              <div className="h-px w-12 bg-[#C5973F]" />
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-inter text-white/55 leading-relaxed text-[15px] text-center lg:text-left">
                {about.bio1}
              </p>
              <p className="font-inter text-white/55 leading-relaxed text-[15px] text-center lg:text-left">
                {about.bio2}
              </p>
            </div>

            {about.quote && (
              <div className="reveal border-l-2 border-[#C5973F] pl-5 py-1">
                <p className="font-playfair italic text-xl text-white/70 leading-relaxed text-center lg:text-left">
                  {about.quote}
                </p>
                {about.quoteAuthor && (
                  <span className="font-inter text-[10px] text-[#C5973F] tracking-[0.25em] uppercase mt-2 block text-center lg:text-left">{about.quoteAuthor}</span>
                )}
              </div>
            )}

            <div className="reveal flex justify-center lg:justify-start">
              <a href="#contato" className="btn-gold w-full sm:w-auto justify-center min-h-[50px]">
                Convidar para Pregar &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
