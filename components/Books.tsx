"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Shield, Truck, RotateCcw, Star } from 'lucide-react'

const BOOKS = [
  {
    id: 'prosperidade',
    num: '01',
    title: 'O Propósito da Prosperidade',
    headline: 'Descubra o que Deus realmente\npensa sobre a sua prosperidade',
    subtitle: 'Edição Revista e Ampliada',
    badge: 'MAIS VENDIDO',
    cover: '/books/proposito-da-prosperidade.jpg',
    bullets: [
      'O que a Bíblia realmente ensina sobre abundância e riqueza',
      'Como alinhar prosperidade com propósito e fé genuína',
      'Por que muitos cristãos têm medo de prosperar — e como superar isso',
    ],
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
    headline: 'Aprenda a lidar com você\npara transformar sua vida',
    subtitle: 'Aprenda a lidar com você, para lidar com o próximo',
    badge: 'NOVO',
    cover: '/books/bem-vindo-ao-novo-voce.jpg',
    bullets: [
      'Como superar padrões mentais que te impedem de crescer',
      'Ferramentas práticas de autoconhecimento e maturidade',
      'O caminho bíblico para renovação pessoal e espiritual',
    ],
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

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/40 to-transparent" />
      <div
        className="absolute -top-20 -left-20 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(197,151,63,0.07) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="reveal flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="hidden md:block w-8 h-px bg-[#C5973F]" />
            <span className="label">Obras do Autor</span>
            <div className="hidden md:block w-8 h-px bg-[#C5973F]" />
          </div>
          <h2 className="font-bebas text-[clamp(56px,10vw,120px)] leading-none text-white mb-3">LIVROS</h2>
          <p className="font-inter text-white/40 text-sm max-w-xs leading-relaxed">
            Mensagens que transformam vidas e renovam a fé
          </p>
        </div>

        {!expired && (
          <div className="reveal flex justify-center mb-14">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 border border-[#C5973F]/20 bg-[#C5973F]/[0.04] px-6 py-4">
              <span className="label" style={{ fontSize: '0.6rem', color: 'rgba(197,151,63,0.65)' }}>
                Oferta especial expira em
              </span>
              <div className="flex items-center gap-1.5">
                {[{ val: d, unit: 'd' }, { val: h, unit: 'h' }, { val: m, unit: 'm' }, { val: s, unit: 's' }].map(({ val, unit }, i) => (
                  <span key={unit} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-[#C5973F]/20 text-xs">·</span>}
                    <span className="font-mono text-sm font-bold text-[#C5973F] bg-[#C5973F]/10 px-2.5 py-1 min-w-[2.75rem] text-center inline-block">
                      {pad(val)}<span className="text-[#C5973F]/45 text-[9px] ml-0.5 font-inter">{unit}</span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {BOOKS.map((book, i) => (
          <div
            key={book.id}
            className={`reveal grid md:grid-cols-5 border border-white/[0.06] overflow-hidden${i > 0 ? ' -mt-px' : ''}`}
          >
            <div
              className={`md:col-span-2 relative bg-[#08080F] flex items-center justify-center py-16 px-10 overflow-hidden${i % 2 === 1 ? ' md:order-last' : ''}`}
              style={{ minHeight: '500px' }}
            >
              <span
                className="absolute bottom-2 right-4 font-bebas select-none pointer-events-none"
                style={{ fontSize: '180px', lineHeight: 1, color: 'rgba(197,151,63,0.04)' }}
              >
                {book.num}
              </span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(197,151,63,0.12) 0%, transparent 60%)' }}
              />
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(160px, 38%, 210px)',
                  aspectRatio: '2/3',
                  filter: 'drop-shadow(0 40px 70px rgba(0,0,0,0.95)) drop-shadow(0 0 50px rgba(197,151,63,0.12))',
                  transform: `perspective(1000px) rotateY(${i % 2 === 0 ? '7' : '-7'}deg) rotateX(2deg)`,
                  zIndex: 1,
                }}
              >
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-contain"
                  sizes="210px"
                  priority={i === 0}
                />
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-[#0B0B13] border-t md:border-t-0 md:border-l border-white/[0.05]">
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase bg-[#C5973F] text-black px-3 py-1.5">
                  {book.badge}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={11} className="text-[#C5973F] fill-[#C5973F]" />
                  ))}
                  <span className="font-inter text-[11px] text-white/30 ml-1.5">{book.readers} leitores</span>
                </div>
              </div>

              <h3 className="font-bebas text-[clamp(30px,4.5vw,54px)] leading-[0.92] text-white mb-4">
                {book.headline.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </h3>
              <p className="font-inter text-white/30 text-[13px] mb-8 leading-relaxed">{book.subtitle}</p>

              <ul className="space-y-3.5 mb-8">
                {book.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-[#C5973F] text-xs mt-0.5 shrink-0 font-bold">✦</span>
                    <span className="font-inter text-white/55 text-[13px] leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="h-px bg-white/[0.05] mb-7" />

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-inter text-white/25 text-sm line-through">
                    R${book.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="font-inter text-[9px] font-bold tracking-[0.15em] uppercase bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1">
                    -{book.discount}% OFF
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="font-inter text-[#C5973F] text-lg font-medium leading-none mb-3">R$</span>
                  <span className="font-bebas text-[84px] text-white leading-none">{Math.floor(book.price)}</span>
                  <span className="font-inter text-white/45 text-2xl leading-none mb-3.5">
                    ,{String(Math.round((book.price % 1) * 100)).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-inter text-white/20 text-[11px]">em até 12x no cartão</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  QUERO ESTE LIVRO <ArrowRight size={14} />
                </a>
                <span className="font-inter text-white/20 text-[11px] self-center">Entrega para todo o Brasil</span>
              </div>
            </div>
          </div>
        ))}

        <div className="reveal mt-2 border border-[#C5973F]/25 overflow-hidden mb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/60 to-transparent" />
          <div className="grid md:grid-cols-2">
            <div
              className="relative bg-[#08080F] flex items-center justify-center gap-10 py-16 px-10 overflow-hidden"
              style={{ minHeight: '260px' }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(197,151,63,0.13) 0%, transparent 65%)' }}
              />
              {BOOKS.map((book, i) => (
                <div
                  key={book.id}
                  className="relative w-24 md:w-28 shrink-0"
                  style={{
                    aspectRatio: '2/3',
                    transform: i === 0 ? 'rotate(-6deg) translateY(10px)' : 'rotate(6deg) translateY(-10px)',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.85))',
                  }}
                >
                  <Image src={book.cover} alt={book.title} fill className="object-contain" sizes="112px" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 bg-[#0B0B13] border-t md:border-t-0 md:border-l border-[#C5973F]/10">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase bg-[#C5973F] text-black px-3 py-1.5">MELHOR VALOR</span>
                <span className="font-inter text-[9px] font-bold tracking-[0.3em] uppercase border border-white/10 text-white/30 px-3 py-1.5">KIT COMPLETO</span>
              </div>
              <h3 className="font-bebas text-[clamp(28px,5vw,52px)] leading-none text-white mb-1.5">OS 2 LIVROS JUNTOS</h3>
              <p className="font-inter text-white/30 text-[13px] mb-6 leading-relaxed">
                Leve os dois e economize — o kit mais completo para transformar sua fé e propósito.
              </p>
              <div className="h-px bg-white/[0.05] mb-6" />
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-inter text-white/25 text-sm line-through">R$239,98</span>
                  <span className="font-inter text-[9px] font-bold tracking-[0.15em] uppercase bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1">-42% OFF</span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="font-inter text-[#C5973F] text-lg font-medium leading-none mb-3">R$</span>
                  <span className="font-bebas text-[84px] text-white leading-none">139</span>
                  <span className="font-inter text-white/45 text-2xl leading-none mb-3.5">,99</span>
                </div>
                <p className="font-inter text-white/20 text-[11px]">Economia de R$19,99 · até 12x no cartão</p>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-gold self-start">
                QUERO O KIT COMPLETO <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

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
