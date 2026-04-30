"use client"
import { useEffect, useRef } from 'react'
import { ShoppingBag, Zap, CheckCircle, Package, Shield, Truck, Star, Flame, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const ML_YELLOW = '#FFE600'
const ML_DARK   = '#111'

const meta: Record<string, {
  badge?: string
  badgeColor?: string
  readers: string
  hook: string
  highlights: string[]
}> = {
  'o-proposito-da-prosperidade': {
    badge: 'EDIÇÃO REVISTA E AMPLIADA',
    readers: '+5.000 leitores',
    hook: 'Descubra o plano de Deus para a sua prosperidade real.',
    highlights: [
      'Princípios bíblicos sobre finanças e propósito',
      'Como alinhar riqueza com a vontade de Deus',
      'Mais de 20 anos transformando vidas',
    ],
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'LANÇAMENTO 2024',
    badgeColor: '#C5973F',
    readers: 'Disponível agora',
    hook: 'O guia definitivo para a sua transformação interior.',
    highlights: [
      'Renove sua mente e quebre limitações',
      'Identidade, propósito e nova vida em Cristo',
      'Leitura prática e transformadora',
    ],
  },
}

const trustItems = [
  { icon: Shield, label: 'Compra Segura' },
  { icon: Truck,  label: 'Entrega Brasil' },
  { icon: Star,   label: 'Garantia Total' },
]

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
        style={{ background: 'radial-gradient(ellipse at top right,rgba(197,151,63,0.07) 0%,transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left,rgba(197,151,63,0.04) 0%,transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C5973F]/50" />
            <span className="label">Livros do Autor</span>
            <div className="h-px w-8 bg-[#C5973F]/50" />
          </div>
          <h2 className="reveal font-bebas text-[clamp(42px,8vw,96px)] leading-none text-white">
            PALAVRAS QUE<br /><span className="text-[#C5973F]">MUDAM VIDAS</span>
          </h2>
          <div className="reveal inline-flex items-center gap-2 mt-6 px-4 py-2 border border-orange-500/30 bg-orange-500/[0.07]">
            <Flame size={13} className="text-orange-400 flex-shrink-0" />
            <span className="font-inter text-[11px] text-orange-300/80 tracking-[0.1em] uppercase">
              Oferta especial por tempo limitado
            </span>
          </div>
        </div>

        {/* Book cards */}
        <div className="flex flex-col gap-5 md:gap-6">
          {books.map((book, idx) => {
            const m = meta[book.slug] ?? { readers: '', hook: '', highlights: [] }
            const pct = book.price && book.originalPrice
              ? Math.round((1 - book.price / book.originalPrice) * 100) : 0
            const installment = book.price ? (book.price / 2).toFixed(2).replace('.', ',') : null
            const isEven = idx % 2 === 0

            return (
              <div key={book.slug}
                className={`reveal group relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} bg-[#0D0D15] overflow-hidden`}
                style={{
                  border: '1px solid rgba(197,151,63,0.18)',
                  borderLeft: isEven ? '3px solid rgba(197,151,63,0.55)' : '1px solid rgba(197,151,63,0.18)',
                  borderRight: !isEven ? '3px solid rgba(197,151,63,0.55)' : '1px solid rgba(197,151,63,0.18)',
                  transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 24px 70px rgba(197,151,63,0.13)'; e.currentTarget.style.borderColor = 'rgba(197,151,63,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(197,151,63,0.18)'; }}
              >
                {/* Cover panel */}
                <div className="flex-shrink-0 relative flex items-center justify-center md:w-[260px] py-10 px-8 overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #08080F 0%, #0D0D1A 100%)' }}>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(197,151,63,0.12) 0%, transparent 65%)' }} />
                  <div className="relative w-[145px] md:w-[168px]" style={{ aspectRatio: '3/4' }}>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[65%] h-4 blur-2xl rounded-full"
                      style={{ background: 'rgba(197,151,63,0.25)' }} />
                    <div className="relative w-full h-full overflow-hidden group-hover:scale-[1.04] transition-transform duration-500"
                      style={{
                        boxShadow: '8px 16px 48px rgba(0,0,0,0.75), -3px 0 10px rgba(0,0,0,0.4)',
                        transform: 'perspective(700px) rotateY(3deg)',
                      }}>
                      <Image src={book.cover} alt={book.title} fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="200px" />
                      <div className="absolute inset-y-0 left-0 w-[7px]"
                        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.14), transparent)' }} />
                    </div>
                    {m.badge && (
                      <div className="absolute -top-3 -left-3 z-10">
                        <span className="font-inter text-[7px] font-bold tracking-[0.2em] uppercase px-2 py-1"
                          style={{ background: m.badgeColor ?? '#C5973F', color: '#000' }}>
                          {m.badge}
                        </span>
                      </div>
                    )}
                    {pct > 0 && (
                      <div className="absolute -bottom-3 -right-3 z-10">
                        <span className="font-inter text-[11px] font-black bg-green-500 text-black px-2.5 py-1 shadow-lg">
                          -{pct}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between p-6 sm:p-8 md:p-9 flex-1">
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#C5973F] text-[12px]">★</span>
                        ))}
                      </div>
                      <span className="font-inter text-[11px] text-white/25">·</span>
                      <span className="font-inter text-[11px] text-white/30 tracking-wide">{m.readers}</span>
                    </div>
                    <h3 className="font-bebas text-[clamp(30px,4.5vw,52px)] leading-[0.95] text-white group-hover:text-[#C5973F] transition-colors duration-300 text-center md:text-left mb-2">
                      {book.title}
                    </h3>
                    <p className="font-inter text-white/40 text-[13px] italic text-center md:text-left mb-5 leading-relaxed">
                      {m.hook}
                    </p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {m.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5 font-inter text-[12px] text-white/40">
                          <CheckCircle size={11} className="text-[#C5973F] flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-white/[0.07]">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                      <div className="flex flex-col gap-0.5">
                        {book.originalPrice && (
                          <span className="font-inter text-[11px] text-white/20 line-through">
                            De R$ {book.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                        <div className="flex items-baseline gap-3 flex-wrap">
                          {book.price && (
                            <span className="font-bebas text-[46px] leading-none text-[#C5973F]">
                              R$ {book.price.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                          {pct > 0 && (
                            <span className="inline-flex items-center gap-1 bg-green-500/15 text-green-400 font-inter text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border border-green-500/25">
                              <Zap size={9} className="fill-green-400" />{pct}% OFF
                            </span>
                          )}
                        </div>
                        {installment && (
                          <span className="font-inter text-[11px] text-white/30">
                            ou 2× R$ {installment} sem juros
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col items-stretch gap-2.5 min-w-[220px]">
                        <a
                          href={book.mlUrl && book.mlUrl !== '#' ? book.mlUrl : '#'}
                          target="_blank" rel="noopener noreferrer"
                          onClick={book.mlUrl === '#' ? (e) => e.preventDefault() : undefined}
                          className="group/btn flex items-center justify-center gap-2 font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-4 transition-all duration-200 hover:brightness-110 active:scale-95"
                          style={{ background: ML_YELLOW, color: ML_DARK, boxShadow: '0 6px 28px rgba(255,230,0,0.25)' }}>
                          <ShoppingBag size={13} />
                          Comprar no Mercado Livre
                          <ArrowRight size={11} className="opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                        <div className="flex items-center justify-center gap-4">
                          {trustItems.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-1">
                              <Icon size={9} className="text-white/20" />
                              <span className="font-inter text-[9px] text-white/20 tracking-wide">{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* COMBO */}
        <div className="reveal mt-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0D0D17 0%, #111120 100%)',
            border: '1px solid rgba(197,151,63,0.30)',
            transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 32px 80px rgba(197,151,63,0.16)'; e.currentTarget.style.borderColor = 'rgba(197,151,63,0.55)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(197,151,63,0.30)'; }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, #C5973F 25%, #E8C06A 50%, #C5973F 75%, transparent)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(197,151,63,0.07) 0%, transparent 65%)' }} />

          <div className="absolute top-4 right-4 md:top-5 md:right-5 flex flex-col items-end gap-2">
            <span className="font-inter text-[8px] font-black tracking-[0.3em] uppercase px-3 py-1.5"
              style={{ background: '#C5973F', color: '#000' }}>
              MELHOR VALOR
            </span>
            <span className="font-inter text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1"
              style={{ background: 'rgba(197,151,63,0.12)', color: 'rgba(197,151,63,0.7)', border: '1px solid rgba(197,151,63,0.25)' }}>
              MAIS VENDIDO
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 p-8 sm:p-10 md:p-12">
            <div className="relative flex-shrink-0 flex items-center justify-center w-[175px] h-[215px] md:w-[215px] md:h-[268px]">
              <div className="absolute left-0 top-0 w-[138px] h-[188px] md:w-[170px] md:h-[228px] overflow-hidden rotate-[-6deg]"
                style={{ boxShadow: '6px 10px 36px rgba(0,0,0,0.65)' }}>
                <Image src={books[0]?.cover ?? '/books/proposito-da-prosperidade.jpg'} alt={books[0]?.title ?? ''} fill className="object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[138px] h-[188px] md:w-[170px] md:h-[228px] overflow-hidden rotate-[6deg]"
                style={{ boxShadow: '6px 10px 36px rgba(0,0,0,0.65)' }}>
                <Image src={books[1]?.cover ?? '/books/bem-vindo-ao-novo-voce.jpg'} alt={books[1]?.title ?? ''} fill className="object-cover" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Package size={13} className="text-[#C5973F]" />
                <span className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5973F]">
                  Kit Completo — Os Dois Livros
                </span>
              </div>

              <h3 className="font-bebas text-[clamp(30px,5vw,56px)] leading-[0.95] text-white">
                OS DOIS LIVROS<br />
                <span className="text-[#C5973F]">POR R$ 139,99</span>
              </h3>

              <div className="flex items-center justify-center md:justify-start">
                <span className="inline-flex items-center gap-1.5 bg-green-500/12 text-green-400 font-inter text-[11px] font-bold px-3 py-1.5 border border-green-500/20">
                  <Zap size={10} className="fill-green-400" />
                  R$ 19,99 a menos que comprar separados
                </span>
              </div>

              <div className="pt-5 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-end gap-6">
                <div className="flex flex-col gap-0.5">
                  <span className="font-inter text-[11px] text-white/20 line-through">
                    De R$ 239,98
                  </span>
                  <div className="flex items-baseline gap-3 flex-wrap justify-center md:justify-start">
                    <span className="font-bebas text-[50px] leading-none text-[#C5973F]">R$ 139,99</span>
                    <span className="inline-flex items-center gap-1 bg-green-500/15 text-green-400 font-inter text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border border-green-500/25">
                      <Zap size={9} className="fill-green-400" />42% OFF
                    </span>
                  </div>
                  <span className="font-inter text-[11px] text-white/25">
                    ou 3× R$ 46,66 sem juros
                  </span>
                </div>

                <div className="flex flex-col gap-3 min-w-[240px]">
                  <a
                    href="#"
                    target="_blank" rel="noopener noreferrer"
                    onClick={(e) => e.preventDefault()}
                    className="group/btn flex items-center justify-center gap-2 font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-4 transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{ background: ML_YELLOW, color: ML_DARK, boxShadow: '0 6px 28px rgba(255,230,0,0.25)' }}>
                    <ShoppingBag size={13} />
                    Comprar Combo no Mercado Livre
                    <ArrowRight size={11} className="opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                  <div className="flex items-center justify-center gap-4">
                    {trustItems.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-1">
                        <Icon size={9} className="text-white/20" />
                        <span className="font-inter text-[9px] text-white/20 tracking-wide">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
