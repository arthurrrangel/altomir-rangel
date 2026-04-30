"use client"
import { useEffect, useRef, useState } from 'react'
import { ShoppingBag, Zap, Package, Shield, Truck, RotateCcw, Flame, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const ML_YELLOW = '#FFE600'
const ML_DARK   = '#111'

const meta: Record<string, { badge?: string; badgeColor?: string; readers: string }> = {
  'o-proposito-da-prosperidade': {
    badge: 'EDIÇÃO REVISTA E AMPLIADA',
    readers: '+5.000 leitores',
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'LANÇAMENTO 2024',
    badgeColor: '#C5973F',
    readers: 'Disponível agora',
  },
}

const testimonials = [
  { text: '"Mudou completamente minha visão sobre prosperidade e fé."', name: 'Carlos M.', city: 'São Paulo' },
  { text: '"Li em dois dias. Impossível parar. Recomendo a todos."', name: 'Ana P.', city: 'Belo Horizonte' },
  { text: '"Dom único de ensinar com clareza, profundidade e amor."', name: 'Marcos L.', city: 'Rio de Janeiro' },
]

const guaranteeItems = [
  { icon: Shield,    title: 'Compra 100% Segura',    sub: 'Mercado Pago protege' },
  { icon: Truck,     title: 'Entrega em Todo Brasil', sub: 'Frete calculado no ML' },
  { icon: RotateCcw, title: '7 Dias para Troca',      sub: 'Garantia do Mercado Livre' },
]

function useCountdown(hours = 3) {
  const getInitial = () => {
    if (typeof window === 'undefined') return hours * 3600
    const stored = sessionStorage.getItem('book_offer_end')
    if (stored) {
      const remaining = Math.floor((parseInt(stored) - Date.now()) / 1000)
      if (remaining > 0) return remaining
    }
    const end = Date.now() + hours * 3600 * 1000
    sessionStorage.setItem('book_offer_end', end.toString())
    return hours * 3600
  }
  const [secs, setSecs] = useState<number>(0)
  useEffect(() => {
    setSecs(getInitial())
    const id = setInterval(() => setSecs(s => s > 0 ? s - 1 : 0), 1000)
    return () => clearInterval(id)
  }, [])
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  const s = secs % 60
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
}

export default function Books() {
  const ref = useRef<HTMLElement>(null)
  const countdown = useCountdown(3)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right,rgba(197,151,63,0.06) 0%,transparent 60%)' }} />

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C5973F]/50" />
            <span className="label">Livros do Autor</span>
            <div className="h-px w-8 bg-[#C5973F]/50" />
          </div>
          <h2 className="reveal font-bebas text-[clamp(42px,8vw,96px)] leading-none text-white">
            PALAVRAS QUE<br /><span className="text-[#C5973F]">MUDAM VIDAS</span>
          </h2>
          <div className="reveal inline-flex items-center gap-3 mt-6 px-5 py-2.5 border border-orange-500/25 bg-orange-500/[0.06]">
            <Flame size={12} className="text-orange-400" />
            <span className="font-inter text-[11px] text-orange-300/70 tracking-[0.08em] uppercase">Oferta termina em</span>
            <span className="font-mono text-[16px] font-black text-[#FFE600] tracking-[0.12em]">{countdown}</span>
          </div>
        </div>

        {/* Book cards */}
        <div className="flex flex-col gap-4">
          {books.map((book, idx) => {
            const m = meta[book.slug] ?? { readers: '' }
            const pct = book.price && book.originalPrice
              ? Math.round((1 - book.price / book.originalPrice) * 100) : 0
            const isEven = idx % 2 === 0

            return (
              <div key={book.slug}
                className={`reveal group flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} bg-[#0D0D15] overflow-hidden`}
                style={{
                  borderLeft: isEven ? '3px solid rgba(197,151,63,0.5)' : '1px solid rgba(197,151,63,0.12)',
                  borderRight: !isEven ? '3px solid rgba(197,151,63,0.5)' : '1px solid rgba(197,151,63,0.12)',
                  borderTop: '1px solid rgba(197,151,63,0.12)',
                  borderBottom: '1px solid rgba(197,151,63,0.12)',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 20px 60px rgba(197,151,63,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                {/* Cover */}
                <div className="flex-shrink-0 flex items-center justify-center md:w-[240px] py-10 px-8"
                  style={{ background: '#08080F' }}>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(197,151,63,0.10) 0%, transparent 65%)' }} />
                  <div className="relative w-[140px] md:w-[160px]" style={{ aspectRatio: '3/4' }}>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/5 h-3 blur-xl rounded-full"
                      style={{ background: 'rgba(197,151,63,0.22)' }} />
                    <div className="relative w-full h-full overflow-hidden group-hover:scale-[1.03] transition-transform duration-500"
                      style={{ boxShadow: '8px 14px 40px rgba(0,0,0,0.7)', transform: 'perspective(700px) rotateY(3deg)' }}>
                      <Image src={book.cover} alt={book.title} fill className="object-cover" sizes="180px" />
                      <div className="absolute inset-y-0 left-0 w-[6px]"
                        style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.12),transparent)' }} />
                    </div>
                    {m.badge && (
                      <div className="absolute -top-3 -left-3 z-10">
                        <span className="font-inter text-[7px] font-bold tracking-[0.2em] uppercase px-2 py-1"
                          style={{ background: m.badgeColor ?? '#C5973F', color: '#000' }}>{m.badge}</span>
                      </div>
                    )}
                    {pct > 0 && (
                      <div className="absolute -bottom-3 -right-3 z-10">
                        <span className="font-inter text-[11px] font-black bg-green-500 text-black px-2 py-0.5">-{pct}%</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info — limpo */}
                <div className="flex flex-col justify-center gap-4 p-7 md:p-10 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <span key={i} className="text-[#C5973F] text-[11px]">★</span>)}</div>
                    <span className="font-inter text-[10px] text-white/25">·</span>
                    <span className="font-inter text-[10px] text-white/30">{m.readers}</span>
                  </div>

                  <h3 className="font-bebas text-[clamp(28px,4vw,48px)] leading-[0.95] text-white group-hover:text-[#C5973F] transition-colors duration-300">
                    {book.title}
                  </h3>

                  <div className="flex items-baseline gap-3 pt-4 border-t border-white/[0.06]">
                    {book.originalPrice && (
                      <span className="font-inter text-[11px] text-white/20 line-through">
                        R$ {book.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    {book.price && (
                      <span className="font-bebas text-[42px] leading-none text-[#C5973F]">
                        R$ {book.price.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    {pct > 0 && (
                      <span className="inline-flex items-center gap-1 bg-green-500/12 text-green-400 font-inter text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 border border-green-500/20">
                        <Zap size={8} className="fill-green-400" />{pct}% OFF
                      </span>
                    )}
                  </div>

                  <a
                    href={book.mlUrl && book.mlUrl !== '#' ? book.mlUrl : '#'}
                    target="_blank" rel="noopener noreferrer"
                    onClick={book.mlUrl === '#' ? (e) => e.preventDefault() : undefined}
                    className="self-start flex items-center gap-2 font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-3.5 transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{ background: ML_YELLOW, color: ML_DARK, boxShadow: '0 4px 20px rgba(255,230,0,0.22)' }}>
                    <ShoppingBag size={12} />
                    Comprar no Mercado Livre
                    <ArrowRight size={10} className="opacity-50" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="reveal mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0D0D15] px-5 py-5"
              style={{ borderTop: '2px solid rgba(197,151,63,0.30)', border: '1px solid rgba(197,151,63,0.10)', borderTopWidth: '2px' }}>
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <span key={j} className="text-[#C5973F] text-[10px]">★</span>)}</div>
              <p className="font-inter text-[12px] text-white/40 italic leading-relaxed mb-3">{t.text}</p>
              <span className="font-inter text-[10px] text-white/20">{t.name} · {t.city}</span>
            </div>
          ))}
        </div>

        {/* Combo */}
        <div className="reveal mt-4 relative bg-[#0D0D15] overflow-hidden"
          style={{ border: '1px solid rgba(197,151,63,0.25)', transition: 'box-shadow 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 24px 70px rgba(197,151,63,0.13)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg,transparent,#C5973F 30%,#E8C06A 50%,#C5973F 70%,transparent)' }} />

          <div className="absolute top-4 right-4">
            <span className="font-inter text-[8px] font-black tracking-[0.3em] uppercase px-3 py-1.5"
              style={{ background: '#C5973F', color: '#000' }}>MELHOR VALOR</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
            {/* Stacked covers */}
            <div className="relative flex-shrink-0 w-[160px] h-[200px] md:w-[200px] md:h-[248px]">
              <div className="absolute left-0 top-0 w-[126px] h-[172px] md:w-[158px] md:h-[212px] overflow-hidden rotate-[-5deg]"
                style={{ boxShadow: '5px 8px 30px rgba(0,0,0,0.6)' }}>
                <Image src={books[0]?.cover ?? ''} alt={books[0]?.title ?? ''} fill className="object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[126px] h-[172px] md:w-[158px] md:h-[212px] overflow-hidden rotate-[5deg]"
                style={{ boxShadow: '5px 8px 30px rgba(0,0,0,0.6)' }}>
                <Image src={books[1]?.cover ?? ''} alt={books[1]?.title ?? ''} fill className="object-cover" />
              </div>
            </div>

            {/* Combo info */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Package size={12} className="text-[#C5973F]" />
                <span className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase text-[#C5973F]">Kit Completo</span>
              </div>

              <h3 className="font-bebas text-[clamp(28px,4.5vw,52px)] leading-[0.95] text-white">
                OS DOIS LIVROS<br /><span className="text-[#C5973F]">POR R$ 139,99</span>
              </h3>

              <div className="flex items-baseline gap-3 flex-wrap justify-center md:justify-start pt-4 border-t border-white/[0.06]">
                <span className="font-inter text-[11px] text-white/20 line-through">De R$ 239,98</span>
                <span className="font-bebas text-[46px] leading-none text-[#C5973F]">R$ 139,99</span>
                <span className="inline-flex items-center gap-1 bg-green-500/12 text-green-400 font-inter text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 border border-green-500/20">
                  <Zap size={8} className="fill-green-400" />42% OFF
                </span>
              </div>

              <a href="#" onClick={(e) => e.preventDefault()}
                className="self-center md:self-start flex items-center gap-2 font-inter text-[11px] font-black tracking-[0.18em] uppercase px-6 py-3.5 transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: ML_YELLOW, color: ML_DARK, boxShadow: '0 4px 20px rgba(255,230,0,0.22)' }}>
                <ShoppingBag size={12} />
                Comprar Combo no Mercado Livre
                <ArrowRight size={10} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee strip */}
        <div className="reveal mt-4 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]"
          style={{ border: '1px solid rgba(197,151,63,0.12)' }}>
          {guaranteeItems.map(({ icon: Icon, title, sub }, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-4">
              <Icon size={15} className="text-[#C5973F] flex-shrink-0" />
              <div>
                <div className="font-inter text-[11px] font-bold text-white/60">{title}</div>
                <div className="font-inter text-[10px] text-white/20">{sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
