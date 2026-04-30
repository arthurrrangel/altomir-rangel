"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Shield, Truck, RotateCcw } from 'lucide-react'

const BOOKS = [
  {
    id: 'prosperidade',
    num: '01',
    title: 'O Propósito da Prosperidade',
    subtitle: 'Edição Revista e Ampliada',
    badge: 'MAIS VENDIDO',
    cover: '/books/proposito-da-prosperidade.jpg',
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    readers: '2.400+',
    url: '#',
  },
  {
    id: 'bemvindo',
    num: '02',
    title: 'Bem-vindo ao Novo Você',
    subtitle: 'Aprenda a lidar com você, para lidar com o próximo',
    badge: 'NOVO',
    cover: '/books/bem-vindo-ao-novo-voce.jpg',
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    readers: '1.800+',
    url: '#',
  },
]

const PROMO_DEADLINE = new Date('2026-05-07T23:59:59')

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false })
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, PROMO_DEADLINE.getTime() - Date.now())
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        expired: diff === 0,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return timeLeft
}

function pad(n: number) { return String(n).padStart(2, '0') }

export default function Books() {
  const ref = useRef<HTMLElement>(null)
  const { d, h, m, s, expired } = useCountdown()

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll<HTMLElement>('.reveal,.reveal-left').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 80)
          )
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative bg-[#06060B] py-24 overflow-hidden">

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/40 to-transparent" />

      {/* Decorative glow */}
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(197,151,63,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="hidden md:block w-8 h-px bg-[#C5973F]" />
            <span className="label">Obras do Autor</span>
            <div className="hidden md:block w-8 h-px bg-[#C5973F]" />
          </div>
          <h2 className="font-bebas text-[clamp(56px,10vw,120px)] leading-none text-white mb-4">
            LIVROS
          </h2>
          <p className="font-inter text-white/40 text-sm max-w-xs leading-relaxed">
            Mensagens que transformam vidas e renovam a fé
          </p>
        </div>

        {/* Countdown */}
        {!expired && (
          <div className="reveal flex justify-center mb-16">
            <div className="inline-flex items-center gap-5 border border-[#C5973F]/20 bg-[#C5973F]/[0.04] px-6 py-4">
              <span className="label" style={{ fontSize: '0.6rem', color: 'rgba(197,151,63,0.65)' }}>
                Oferta expira em
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { val: d, unit: 'd' },
                  { val: h, unit: 'h' },
                  { val: m, unit: 'm' },
                  { val: s, unit: 's' },
                ].map(({ val, unit }, i) => (
                  <span key={unit} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-[#C5973F]/20 text-xs">·</span>}
                    <span className="font-mono text-sm font-bold text-[#C5973F] bg-[#C5973F]/10 px-2.5 py-1 min-w-[2.75rem] text-center inline-block">
                      {pad(val)}<span className="text-[#C5973F]/45 text-[9px] ml-0.5 font-inter font-bold">{unit}</span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Book grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.04] mb-px">
          {BOOKS.map((book) => (
            <div key={book.id} className="reveal flex flex-col bg-[#0C0C14]">
              <div
                className="relative bg-[#09090E] flex items-center justify-center py-14 px-8 overflow-hidden"
                style={{ minHeight: '320px' }}
              >
                <span
                  className="absolute top-4 left-5 font-bebas leading-none select-none pointer-events-none"
                  style={{ fontSize: '96px', color: 'rgba(197,151,63,0.07)' }}
                >
                  {book.num}
                </span>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(197,151,63,0.08) 0%, transparent 65%)' }}
                />
                <div className="relative w-36 md:w-44" style={{ aspectRatio: '2/3' }}>
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 144px, 176px"
                    style={{
                      filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.85))',
                      transform: 'perspective(800px) rotateY(3deg)',
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-8 md:p-10 border-t border-white/[0.05]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase bg-[#C5973F] text-black px-3 py-1.5">
                    {book.badge}
                  </span>
                  <span className="font-inter text-[11px] text-white/25">{book.readers} leitores</span>
                </div>
                <h3 className="font-bebas text-[clamp(26px,4vw,44px)] leading-[0.95] text-white mb-1.5">
                  {book.title}
                </h3>
                <p className="font-inter text-white/30 text-[12px] mb-6 leading-relaxed">{book.subtitle}</p>
                <div className="h-px bg-white/[0.05] mb-6" />
                <div className="mb-7">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-inter text-white/25 text-xs line-through">
                      R${book.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="font-inter text-[9px] font-bold tracking-[0.15em] uppercase bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5">
                      -{book.discount}%
                    </span>
                  </div>
                  <div className="flex items-end gap-0.5">
                    <span className="font-inter text-[#C5973F] text-base font-medium leading-none mb-2">R$</span>
                    <span className="font-bebas text-[68px] text-white leading-none">
                      {Math.floor(book.price)}
                    </span>
                    <span className="font-inter text-white/45 text-xl leading-none mb-2.5">
                      ,{String(Math.round((book.price % 1) * 100)).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="font-inter text-white/20 text-[11px]">em até 12x no cartão</p>
                </div>
                <div className="mt-auto">
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full justify-center"
                  >
                    Adquirir Livro <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combo */}
        <div className="reveal bg-[#0C0C14] border border-t-0 border-white/[0.04] mb-16 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div
              className="relative bg-[#09090E] flex items-center justify-center gap-8 py-14 px-10 overflow-hidden"
              style={{ minHeight: '240px' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/20 to-transparent" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(197,151,63,0.10) 0%, transparent 65%)' }}
              />
              {BOOKS.map((book, i) => (
                <div
                  key={book.id}
                  className="relative w-24 md:w-28 shrink-0"
                  style={{
                    aspectRatio: '2/3',
                    transform: i === 0 ? 'rotate(-5deg) translateY(8px)' : 'rotate(5deg) translateY(-8px)',
                    filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.7))',
                  }}
                >
                  <Image src={book.cover} alt={book.title} fill className="object-contain" sizes="112px" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/[0.05]">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase bg-[#C5973F] text-black px-3 py-1.5">
                  MELHOR VALOR
                </span>
                <span className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase border border-white/10 text-white/30 px-3 py-1.5">
                  KIT COMPLETO
                </span>
              </div>
              <h3 className="font-bebas text-[clamp(28px,5vw,52px)] leading-none text-white mb-1">
                OS 2 LIVROS
              </h3>
              <p className="font-inter text-white/30 text-[12px] mb-6 leading-relaxed">
                Desconto exclusivo na compra do kit completo
              </p>
              <div className="h-px bg-white/[0.05] mb-6" />
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-inter text-white/25 text-xs line-through">R$239,98</span>
                  <span className="font-inter text-[9px] font-bold tracking-[0.15em] uppercase bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5">
                    -42%
                  </span>
                </div>
                <div className="flex items-end gap-0.5">
                  <span className="font-inter text-[#C5973F] text-base font-medium leading-none mb-2">R$</span>
                  <span className="font-bebas text-[68px] text-white leading-none">139</span>
                  <span className="font-inter text-white/45 text-xl leading-none mb-2.5">,99</span>
                </div>
                <p className="font-inter text-white/20 text-[11px]">Economia de R$19,99 · até 12x no cartão</p>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-gold self-start">
                Adquirir Kit Completo <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="reveal grid grid-cols-3 border border-white/5 overflow-hidden">
          {[
            { icon: Shield, label: 'Compra Segura', sub: 'Pagamento protegido' },
            { icon: Truck, label: 'Envio Rápido', sub: 'Para todo o Brasil' },
            { icon: RotateCcw, label: 'Devolução Fácil', sub: 'Garantia de 30 dias' },
          ].map(({ icon: Icon, label, sub }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-2 text-center py-6 px-4 bg-[#0D0D15]${i > 0 ? ' border-l border-white/5' : ''}`}
            >
              <Icon size={15} className="text-[#C5973F]" />
              <p className="font-inter text-white text-xs font-semibold tracking-wide">{label}</p>
              <p className="font-inter text-white/25 text-[11px]">{sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
