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
    <section id="visao" ref={ref} className="relative py-16 md:py-40 overflow-hidden bg-transparent">
      {/* Fusão com o Hero */}
      <div className="absolute top-0 inset-x-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(27,42,68,0.5) 0%, transparent 100%)' }} />
      <div className="lg:hidden absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D8A93A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-stretch">

          {/* Foto desktop */}
          <div className="reveal-left hidden lg:block relative min-h-[520px] overflow-hidden">
            <Image
              src="/altomir-fundo.jpg"
              alt="Altomir Rangel"
              fill
              className="object-cover"
              style={{ objectPosition: '50% 18%' }}
              sizes="(max-width: 1024px) 0px, 50vw"
              quality={80}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(27,42,68,0.15) 0%, transparent 30%, transparent 55%, #1B2A44 100%)' }} />
            <div className="absolute inset-0 border border-white/8 pointer-events-none" />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5 lg:gap-8 justify-center">

            <div className="reveal flex items-center justify-center lg:justify-start gap-3">
              <div className="hidden lg:block w-8 h-px bg-[#D8A93A]" />
              <span className="label">{about.label}</span>
            </div>

            <div className="reveal text-center lg:text-left">
              <h2 className="font-bebas leading-[0.9] text-white" style={{ fontSize: 'clamp(36px, 6vw, 78px)' }}>
                {about.headline1}<br />
                <span className="text-[#D8A93A]">{about.headlineGold}</span>
                {about.headline2 ? <><br />{about.headline2}</> : null}
              </h2>
            </div>

            <div className="reveal flex justify-center lg:hidden">
              <div className="h-px w-12 bg-[#D8A93A]" />
            </div>

            <div className="reveal flex flex-col gap-4">
              <p className="font-inter text-white/75 leading-relaxed text-[15px] text-center lg:text-left">
                {about.bio1}
              </p>
              <p className="font-inter text-white/75 leading-relaxed text-[15px] text-center lg:text-left">
                {about.bio2}
              </p>
            </div>

            {about.quote && (
              <div className="reveal border-l-2 border-[#D8A93A] pl-5 py-1 max-lg:border-l-0 max-lg:pl-0">
                <p className="font-playfair italic text-lg lg:text-xl text-white/80 leading-relaxed text-center lg:text-left">
                  &ldquo;{about.quote}&rdquo;
                </p>
                {about.quoteAuthor && (
                  <span className="font-inter text-[10px] text-[#D8A93A] tracking-[0.25em] uppercase mt-2 block text-center lg:text-left">
                    {about.quoteAuthor}
                  </span>
                )}
              </div>
            )}

            <div className="reveal flex justify-center lg:justify-start">
              <a href="#contato" className="btn-gold w-full sm:w-auto sm:min-w-[220px] justify-center min-h-[50px]">
                {about.cta} &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
