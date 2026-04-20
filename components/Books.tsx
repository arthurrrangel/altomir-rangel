"use client"
import { useEffect, useRef } from 'react'
import { ShoppingCart, Star, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const meta: Record<string, { badge?: string; stars: number; readers: string; cta: string; ctaUrl: string }> = {
  'o-proposito-da-prosperidade': {
    badge: 'EDIÇÃO REVISTA E AMPLIADA',
    stars: 5,
    readers: '+5.000 leitores',
    cta: 'Comprar na Amazon',
    ctaUrl: 'https://www.amazon.com.br/Prop%C3%B3sito-Prosperidade-Altomir-Rangel-Cunha/dp/8574220310',
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'LANÇAMENTO',
    stars: 5,
    readers: 'Disponível agora',
    cta: 'Pedir pelo WhatsApp',
    ctaUrl: 'https://wa.me/5521999999999?text=Olá! Tenho interesse no livro Bem-vindo ao Novo Você.',
  },
}

export default function Books() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{background:'radial-gradient(ellipse at top right,rgba(197,151,63,0.06) 0%,transparent 65%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-20">
          <div className="reveal flex items-center justify-center md:justify-start mb-3">
            <span className="label">Livros do Autor</span>
          </div>
          <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
            PALAVRAS QUE<br /><span className="text-[#C5973F]">MUDAM VIDAS</span>
          </h2>
        </div>

        {/* Books — each as a prominent horizontal card on desktop */}
        <div className="flex flex-col gap-6 md:gap-8">
          {books.map((book, idx) => {
            const m = meta[book.slug] ?? { stars: 5, readers: '', cta: 'Adquirir', ctaUrl: book.buyUrl }
            const isWA = m.ctaUrl.includes('wa.me')
            return (
              <div key={book.slug}
                className={`reveal group relative flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-0 border border-white/8 hover:border-[#C5973F]/40 bg-[#0F0F17] overflow-hidden transition-all duration-500 hover:shadow-[0_24px_80px_rgba(197,151,63,0.10)]`}>

                {/* Glow accent */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{background:'radial-gradient(ellipse at center,rgba(197,151,63,0.04) 0%,transparent 70%)'}} />

                {/* Cover — takes ~40% width on desktop */}
                <div className="relative w-full md:w-[38%] aspect-[3/4] md:aspect-auto md:min-h-[380px] overflow-hidden bg-[#141420] flex-shrink-0">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0F0F17]/80" />

                  {/* Badge */}
                  {m.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="font-inter text-[9px] font-bold tracking-[0.25em] uppercase bg-[#C5973F] text-black px-2.5 py-1">
                        {m.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="relative flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10 flex-1">

                  {/* Stars + readers */}
                  <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                    <div className="flex gap-0.5">
                      {[...Array(m.stars)].map((_,i) => (
                        <Star key={i} size={12} className="fill-[#C5973F] text-[#C5973F]" />
                      ))}
                    </div>
                    <span className="font-inter text-[11px] text-white/35 tracking-wide">{m.readers}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-[clamp(26px,5vw,48px)] leading-tight text-white group-hover:text-[#C5973F] transition-colors text-center md:text-left">
                    {book.title}
                  </h3>

                  {/* Subtitle */}
                  {book.subtitle && (
                    <p className="font-inter text-white/35 text-[13px] italic text-center md:text-left">
                      {book.subtitle}
                    </p>
                  )}

                  {/* Synopsis */}
                  {book.synopsis && (
                    <p className="font-inter text-white/50 text-[14px] leading-relaxed text-center md:text-left max-w-md">
                      {book.synopsis}
                    </p>
                  )}

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <a href={m.ctaUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#C5973F] hover:bg-[#d4a84a] active:scale-95 text-black font-inter text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-4 transition-all duration-200 min-h-[52px] shadow-[0_8px_30px_rgba(197,151,63,0.25)] hover:shadow-[0_12px_40px_rgba(197,151,63,0.40)]">
                      {isWA
                        ? <><MessageCircle size={14} /> {m.cta}</>
                        : <><ShoppingCart size={14} /> {m.cta}</>}
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
