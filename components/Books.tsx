"use client"
import { useEffect, useRef } from 'react'
import { ShoppingBag, MessageCircle, Zap, CheckCircle, Package } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const ML_YELLOW = '#FFE600'
const ML_DARK   = '#1A1A1A'

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
    <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 font-inter text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border border-green-500/30">
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right,rgba(197,151,63,0.07) 0%,transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-20">
          <div className="reveal flex items-center justify-center md:justify-start mb-3">
            <span className="label">Livros do Autor</span>
          </div>
          <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
            PALAVRAS QUE<br /><span className="text-[#C5973F]">MUDAM VIDAS</span>
          </h2>
          <p className="reveal font-inter text-white/40 text-[13px] mt-4 max-w-md">
            Mais de 5.000 leitores transformados. Adquira com desconto especial direto pelo Mercado Livre.
          </p>
        </div>

        {/* Book cards */}
        <div className="flex flex-col gap-8 md:gap-10">
          {books.map((book, idx) => {
            const m = meta[book.slug] ?? { readers: '' }
            const pct = book.price && book.originalPrice
              ? Math.round((1 - book.price / book.originalPrice) * 100)
              : 0
            const savings = book.originalPrice && book.price
              ? (book.originalPrice - book.price).toFixed(2).replace('.', ',')
              : null
            const isEven = idx % 2 === 0

            return (
              <div key={book.slug}
                className={`reveal group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} border border-white/8 hover:border-[#C5973F]/40 bg-[#0F0F17] overflow-hidden transition-all duration-500 hover:shadow-[0_24px_80px_rgba(197,151,63,0.12)]`}>

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(ellipse at center,rgba(197,151,63,0.04) 0%,transparent 70%)' }} />

                <div className="relative w-full md:w-[36%] aspect-[3/4] md:aspect-auto md:min-h-[420px] overflow-hidden bg-[#141420] flex-shrink-0">
                  <Image src={book.cover} alt={book.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 38vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0F0F17]/90" />
                  {m.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="font-inter text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1"
                        style={{ background: m.badgeColor ?? '#C5973F', color: '#000' }}>
                        {m.badge}
                      </span>
                    </div>
                  )}
                  {pct > 0 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="font-inter text-[11px] font-black tracking-wide bg-green-500 text-black px-3 py-1.5 shadow-lg">
                        {pct}% OFF
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col justify-between gap-5 p-6 sm:p-8 md:p-10 flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C5973F] text-[10px]">★</span>
                    ))}
                    <span className="font-inter text-[11px] text-white/35 tracking-wide">{m.readers}</span>
                  </div>
                  <div>
                    <h3 className="font-bebas text-[clamp(28px,5vw,52px)] leading-tight text-white group-hover:text-[#C5973F] transition-colors text-center md:text-left mb-1">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="font-inter text-white/35 text-[13px] italic text-center md:text-left">
                        {book.subtitle}
                      </p>
                    )}
                  </div>
                  {book.synopsis && (
                    <p className="font-inter text-white/50 text-[14px] leading-relaxed text-center md:text-left max-w-md">
                      {book.synopsis}
                    </p>
                  )}
                  {book.highlights && book.highlights.length > 0 && (
                    <ul className="flex flex-col gap-1.5">
                      {book.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 font-inter text-[12px] text-white/45">
                          <CheckCircle size={12} className="text-[#C5973F] flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="border border-white/8 bg-white/[0.02] p-4 md:p-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      {book.originalPrice && (
                        <span className="font-inter text-[12px] text-white/30 line-through">
                          De R$ {book.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                      <div className="flex items-baseline gap-3 flex-wrap">
                        {book.price && (
                          <span className="font-bebas text-[42px] leading-none text-[#C5973F]">
                            R$ {book.price.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                        {pct > 0 && <DiscountBadge pct={pct} />}
                      </div>
                      {savings && (
                        <span className="font-inter text-[11px] text-green-400/80">
                          Você economiza R$ {savings}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <a
                        href={book.mlUrl && book.mlUrl !== '#' ? book.mlUrl : '#'}
                        target="_blank" rel="noopener noreferrer"
                        onClick={book.mlUrl === '#' ? (e) => e.preventDefault() : undefined}
                        className="flex items-center justify-center gap-2 font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-3.5 transition-all duration-200 active:scale-95 shadow-lg"
                        style={{ background: ML_YELLOW, color: ML_DARK, boxShadow: '0 8px 28px rgba(255,230,0,0.25)' }}>
                        <ShoppingBag size={14} />
                        Comprar no Mercado Livre
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* COMBO */}
        <div className="reveal mt-10 md:mt-14 relative border border-[#C5973F]/30 bg-[#0F0F17] overflow-hidden hover:border-[#C5973F]/60 transition-all duration-500 hover:shadow-[0_24px_80px_rgba(197,151,63,0.15)]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5973F] to-transparent" />
          <div className="flex flex-col md:flex-row items-center gap-8 p-7 sm:p-10 md:p-12">
            <div className="relative flex-shrink-0 flex items-center justify-center w-[160px] h-[200px] md:w-[200px] md:h-[250px]">
              <div className="absolute left-0 top-0 w-[130px] h-[180px] md:w-[160px] md:h-[220px] overflow-hidden border border-white/10 rotate-[-4deg] shadow-2xl">
                <Image src={books[0]?.cover ?? '/books/proposito-da-prosperidade.jpg'} alt={books[0]?.title ?? ''} fill className="object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[130px] h-[180px] md:w-[160px] md:h-[220px] overflow-hidden border border-white/10 rotate-[4deg] shadow-2xl">
                <Image src={books[1]?.cover ?? '/books/bem-vindo-ao-novo-voce.jpg'} alt={books[1]?.title ?? ''} fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Package size={14} className="text-[#C5973F]" />
                <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5973F]">
                  Oferta Especial — Combo
                </span>
              </div>
              <h3 className="font-bebas text-[clamp(28px,5vw,54px)] leading-tight text-white">
                LEVE OS DOIS LIVROS<br />
                <span className="text-[#C5973F]">E ECONOMIZE AINDA MAIS</span>
              </h3>
              <p className="font-inter text-white/45 text-[13px] leading-relaxed max-w-lg">
                Cada livro separado sai por R$ 46,99. No combo, os dois juntos saem por <strong className="text-white">R$ 79,99</strong> — R$ 13,99 a menos do que comprar separados.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end gap-5 border border-white/8 bg-white/[0.02] p-4 md:p-5">
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-[12px] text-white/30 line-through">
                    Preço original: R$ 139,98
                  </span>
                  <div className="flex items-baseline gap-3 flex-wrap justify-center md:justify-start">
                    <span className="font-bebas text-[46px] leading-none text-[#C5973F]">
                      R$ 79,99
                    </span>
                    <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 font-inter text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border border-green-500/30">
                      <Zap size={9} className="fill-green-400" />
                      43% OFF
                    </span>
                  </div>
                  <span className="font-inter text-[11px] text-green-400/80">
                    Você economiza R$ 59,99 em relação ao preço original
                  </span>
                </div>
                <div className="flex flex-col gap-2 min-w-[220px]">
                  <a
                    href="https://wa.me/5521999999999?text=Quero%20o%20combo%20dos%20dois%20livros%20do%20Altomir%20Rangel%20por%20R%24%2079%2C99"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#C5973F] hover:bg-[#d4a84a] active:scale-95 text-black font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-3.5 transition-all duration-200 shadow-[0_8px_30px_rgba(197,151,63,0.30)] hover:shadow-[0_12px_40px_rgba(197,151,63,0.45)]">
                    <MessageCircle size={14} />
                    Pedir Combo via WhatsApp
                  </a>
                  <p className="font-inter text-[10px] text-white/25 text-center">
                    Entrega em todo o Brasil · Frete a combinar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
