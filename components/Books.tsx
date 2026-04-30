"use client"
import { useEffect, useRef } from 'react'
import { ShoppingBag, MessageCircle, Zap, CheckCircle, Package } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const ML_YELLOW = '#FFE600'
const ML_DARK   = '#111'

const meta: Record<string, {
  badge?: string
  readers: string
  badgeColor?: string
}> = {
  'o-proposito-da-prosperidade': {
    badge: 'EDIÇÃO REVISTA E AMPLIADA',
    readers: '+5.000 leitores',
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'LANÇAMENTO',
    readers: 'Disponível agora',
    badgeColor: '#C5973F',
  },
}

function DiscountBadge({ pct }: { pct: number }) {
  return (
    <span className="inline-flex items-center gap-1 bg-green-500/15 text-green-400 font-inter text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border border-green-500/25">
      <Zap size={9} className="fill-green-400" />
      {pct}% OFF
    </span>
  )
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
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right,rgba(197,151,63,0.06) 0%,transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-20">
          <div className="reveal flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="hidden md:block h-px w-8 bg-[#C5973F]/50" />
            <span className="label">Livros do Autor</span>
          </div>
          <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
            PALAVRAS QUE<br /><span className="text-[#C5973F]">MUDAM VIDAS</span>
          </h2>
        </div>

        {/* Book cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {books.map((book, idx) => {
            const m = meta[book.slug] ?? { readers: '' }
            const pct = book.price && book.originalPrice
              ? Math.round((1 - book.price / book.originalPrice) * 100) : 0
            const isEven = idx % 2 === 0

            return (
              <div key={book.slug}
                className={`reveal group relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} bg-[#0F0F17] overflow-hidden transition-all duration-500`}
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: isEven ? '2px solid rgba(197,151,63,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  borderRight: !isEven ? '2px solid rgba(197,151,63,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 0 0 transparent',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 20px 60px rgba(197,151,63,0.09)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 transparent')}
              >
                {/* Cover panel */}
                <div className="flex-shrink-0 relative flex items-center justify-center md:w-[270px] py-12 px-8 overflow-hidden"
                  style={{ background: '#090910' }}>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(197,151,63,0.10) 0%, transparent 65%)' }} />

                  <div className="relative w-[150px] md:w-[175px]" style={{ aspectRatio: '3/4' }}>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-5 blur-xl rounded-full"
                      style={{ background: 'rgba(197,151,63,0.20)' }} />
                    <div className="relative w-full h-full overflow-hidden transition-all duration-600 group-hover:scale-[1.03]"
                      style={{
                        boxShadow: '6px 12px 40px rgba(0,0,0,0.7), -2px 0 8px rgba(0,0,0,0.4)',
                        transform: 'perspective(700px) rotateY(3deg)',
                      }}>
                      <Image src={book.cover} alt={book.title} fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="200px" />
                      <div className="absolute inset-y-0 left-0 w-[6px]"
                        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.12), transparent)' }} />
                    </div>

                    {m.badge && (
                      <div className="absolute -top-3 -left-2 z-10">
                        <span className="font-inter text-[7px] font-bold tracking-[0.2em] uppercase px-2 py-1 shadow-md"
                          style={{ background: m.badgeColor ?? '#C5973F', color: '#000' }}>
                          {m.badge}
                        </span>
                      </div>
                    )}

                    {pct > 0 && (
                      <div className="absolute -bottom-3 -right-2 z-10">
                        <span className="font-inter text-[10px] font-black bg-green-500 text-black px-2 py-0.5 shadow-md">
                          {pct}% OFF
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="relative flex flex-col justify-between gap-0 p-6 sm:p-8 md:p-10 flex-1">

                  {/* Stars + readers */}
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#C5973F] text-[11px]">★</span>
                      ))}
                    </div>
                    <div className="h-3 w-px bg-white/15" />
                    <span className="font-inter text-[11px] text-white/30 tracking-wide">{m.readers}</span>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="font-bebas text-[clamp(28px,4.5vw,50px)] leading-[0.95] text-white group-hover:text-[#C5973F] transition-colors duration-300 text-center md:text-left">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="font-inter text-white/30 text-[12px] italic mt-2 text-center md:text-left tracking-wide">
                        {book.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Highlights — max 3 */}
                  {book.highlights && book.highlights.length > 0 && (
                    <ul className="flex flex-col gap-2 mb-6">
                      {book.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-inter text-[12px] text-white/40">
                          <CheckCircle size={12} className="text-[#C5973F]/70 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Price + CTA */}
                  <div className="pt-5 border-t border-white/[0.07]">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                      <div className="flex flex-col gap-1">
                        {book.originalPrice && (
                          <span className="font-inter text-[11px] text-white/25 line-through tracking-wide">
                            R$ {book.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                        <div className="flex items-baseline gap-3 flex-wrap">
                          {book.price && (
                            <span className="font-bebas text-[44px] leading-none text-[#C5973F] tracking-tight">
                              R$ {book.price.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                          {pct > 0 && <DiscountBadge pct={pct} />}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 min-w-[210px]">
                        <a
                          href={book.mlUrl && book.mlUrl !== '#' ? book.mlUrl : '#'}
                          target="_blank" rel="noopener noreferrer"
                          onClick={book.mlUrl === '#' ? (e) => e.preventDefault() : undefined}
                          className="flex items-center justify-center gap-2 font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-4 transition-all duration-200 active:scale-95"
                          style={{
                            background: ML_YELLOW,
                            color: ML_DARK,
                            boxShadow: '0 6px 24px rgba(255,230,0,0.22)',
                          }}>
                          <ShoppingBag size={13} />
                          Comprar no Mercado Livre
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* COMBO */}
        <div className="reveal mt-8 md:mt-12 relative bg-[#0F0F17] overflow-hidden transition-all duration-500"
          style={{ border: '1px solid rgba(197,151,63,0.25)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(197,151,63,0.5)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(197,151,63,0.25)')}
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px]"
            style={{ background: 'linear-gradient(90deg, transparent, #C5973F 30%, #C5973F 70%, transparent)' }} />

          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <span className="font-inter text-[9px] font-black tracking-[0.25em] uppercase px-3 py-1.5"
              style={{ background: 'rgba(197,151,63,0.15)', color: '#C5973F', border: '1px solid rgba(197,151,63,0.3)' }}>
              MELHOR VALOR
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 p-8 sm:p-10 md:p-12">

            {/* Stacked covers */}
            <div className="relative flex-shrink-0 flex items-center justify-center w-[170px] h-[210px] md:w-[210px] md:h-[260px]">
              <div className="absolute left-0 top-0 w-[135px] h-[185px] md:w-[165px] md:h-[225px] overflow-hidden rotate-[-5deg] shadow-2xl"
                style={{ boxShadow: '4px 8px 30px rgba(0,0,0,0.6)' }}>
                <Image src={books[0]?.cover ?? '/books/proposito-da-prosperidade.jpg'} alt={books[0]?.title ?? ''} fill className="object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[135px] h-[185px] md:w-[165px] md:h-[225px] overflow-hidden rotate-[5deg] shadow-2xl"
                style={{ boxShadow: '4px 8px 30px rgba(0,0,0,0.6)' }}>
                <Image src={books[1]?.cover ?? '/books/bem-vindo-ao-novo-voce.jpg'} alt={books[1]?.title ?? ''} fill className="object-cover" />
              </div>
            </div>

            {/* Combo info */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Package size={13} className="text-[#C5973F]" />
                <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5973F]">
                  Oferta Especial — Combo
                </span>
              </div>

              <h3 className="font-bebas text-[clamp(28px,5vw,52px)] leading-[0.95] text-white">
                OS DOIS LIVROS<br />
                <span className="text-[#C5973F]">POR R$ 79,99</span>
              </h3>

              <p className="font-inter text-white/35 text-[13px] leading-relaxed max-w-md">
                R$ 13,99 a menos do que comprar separados.
              </p>

              <div className="pt-5 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-end gap-5">
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-[11px] text-white/25 line-through tracking-wide">
                    R$ 139,98
                  </span>
                  <div className="flex items-baseline gap-3 flex-wrap justify-center md:justify-start">
                    <span className="font-bebas text-[48px] leading-none text-[#C5973F]">R$ 79,99</span>
                    <span className="inline-flex items-center gap-1 bg-green-500/15 text-green-400 font-inter text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border border-green-500/25">
                      <Zap size={9} className="fill-green-400" />
                      43% OFF
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 min-w-[230px]">
                  <a
                    href="https://wa.me/5521999999999?text=Quero%20o%20combo%20dos%20dois%20livros%20do%20Altomir%20Rangel%20por%20R%24%2079%2C99"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-black font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-4 transition-all duration-200 active:scale-95"
                    style={{
                      background: '#C5973F',
                      boxShadow: '0 6px 24px rgba(197,151,63,0.25)',
                    }}>
                    <MessageCircle size={13} />
                    Pedir Combo via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
