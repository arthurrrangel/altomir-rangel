"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Shield, Truck, RotateCcw, Star, Clock } from 'lucide-react'

const BOOKS = [
  {
    id: 'prosperidade',
    title: 'O Propósito da Prosperidade',
    subtitle: 'Edição Revista e Ampliada',
    badge: 'MAIS VENDIDO',
    cover: '/books/proposito-da-prosperidade.jpg',
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    stars: 5,
    readers: '2.400+',
    mlUrl: '#',
  },
  {
    id: 'bemvindo',
    title: 'Bem-vindo ao Novo Você',
    subtitle: 'Aprenda a lidar com você, para lidar com o próximo',
    badge: 'NOVO',
    cover: '/books/bem-vindo-ao-novo-voce.jpg',
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    stars: 5,
    readers: '1.800+',
    mlUrl: '#',
  },
]

function useCountdown(hours = 3) {
  const KEY = 'books_countdown_end'
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 })

  useEffect(() => {
    let end = Number(sessionStorage.getItem(KEY))
    if (!end || end < Date.now()) {
      end = Date.now() + hours * 3600 * 1000
      sessionStorage.setItem(KEY, String(end))
    }
    const tick = () => {
      const diff = Math.max(0, end - Date.now())
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [hours])

  return timeLeft
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function Books() {
  const { h, m, s } = useCountdown(3)

  return (
    <section id="livros" className="bg-[#0A0A0F] py-20 px-4">

      {/* ── Countdown bar ── */}
      <div className="max-w-xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-3 bg-[#C5973F]/10 border border-[#C5973F]/30 rounded-full px-6 py-3">
          <Clock size={15} className="text-[#C5973F] shrink-0" />
          <p className="text-[#C5973F] text-sm text-center">
            Oferta especial expira em&nbsp;
            <span className="font-mono font-semibold">
              {pad(h)}:{pad(m)}:{pad(s)}
            </span>
          </p>
        </div>
      </div>

      {/* ── Section header ── */}
      <div className="text-center mb-16">
        <p className="text-[#C5973F] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Obras do Autor</p>
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white leading-none tracking-wide mb-4">
          LIVROS
        </h2>
        <p className="text-white/40 text-sm max-w-sm mx-auto">
          Mensagens que transformam vidas e renovam a fé
        </p>
      </div>

      {/* ── Book cards ── */}
      <div className="max-w-4xl mx-auto space-y-10 mb-20">
        {BOOKS.map((book, i) => (
          <div
            key={book.id}
            className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-12 bg-[#0D0D15] border border-white/5 rounded-2xl p-8 md:p-10`}
          >
            {/* Cover */}
            <div className="shrink-0 flex justify-center">
              <div
                className="relative w-40 h-56 md:w-48 md:h-64"
                style={{ perspective: '700px' }}
              >
                <div
                  className="w-full h-full rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                  style={{ transform: 'rotateY(3deg)', transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(105deg, rgba(255,255,255,0.07) 0%, transparent 40%)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-[#C5973F]/15 text-[#C5973F] border border-[#C5973F]/30 rounded-full px-3 py-1 mb-4">
                {book.badge}
              </span>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: book.stars }).map((_, j) => (
                    <Star key={j} size={13} className="text-[#C5973F] fill-[#C5973F]" />
                  ))}
                </div>
                <span className="text-white/35 text-xs">{book.readers} leitores</span>
              </div>

              <h3 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-white leading-none tracking-wide mb-1">
                {book.title}
              </h3>
              <p className="text-white/40 text-sm mb-6">{book.subtitle}</p>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-white/30 text-sm line-through">
                  R${book.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-white text-3xl font-bold">
                  R${book.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-xs font-bold bg-green-500/15 text-green-400 border border-green-500/20 rounded-full px-2 py-0.5">
                  {book.discount}% OFF
                </span>
              </div>
              <p className="text-white/30 text-xs mb-6">em até 12x no cartão</p>

              <a
                href={book.mlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FFE600] hover:bg-[#FFD700] text-[#111] text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] w-full md:w-auto"
              >
                Comprar no Mercado Livre
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Combo card ── */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative bg-[#0D0D15] border border-[#C5973F]/25 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5973F] to-transparent" />

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C5973F]/15 text-[#C5973F] border border-[#C5973F]/30 rounded-full px-3 py-1">
              MELHOR VALOR
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase bg-white/5 text-white/50 border border-white/10 rounded-full px-3 py-1">
              MAIS VENDIDO
            </span>
          </div>

          <h3 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-white tracking-wide mb-2">
            KIT COMPLETO
          </h3>
          <p className="text-white/40 text-sm mb-6">
            Os 2 livros juntos com desconto exclusivo
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            {BOOKS.map((book) => (
              <div key={book.id} className="relative rounded-md overflow-hidden shadow-lg" style={{width:'64px', height:'88px'}}>
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1 mb-3">
            <span className="text-white/30 text-sm line-through">R$239,98</span>
            <div className="flex items-baseline gap-3">
              <span className="text-white text-4xl font-bold">R$139,99</span>
              <span className="text-xs font-bold bg-green-500/15 text-green-400 border border-green-500/20 rounded-full px-2 py-0.5">
                42% OFF
              </span>
            </div>
          </div>
          <p className="text-white/30 text-xs mb-8">
            Economia de R$19,99 vs comprar separado · em até 12x no cartão
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#FFE600] hover:bg-[#FFD700] text-[#111] text-sm font-bold px-10 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] w-full md:w-auto"
          >
            Comprar Kit no Mercado Livre
          </a>
        </div>
      </div>

      {/* ── Guarantee strip ── */}
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Shield, label: 'Compra Segura', sub: 'Pagamento protegido' },
            { icon: Truck, label: 'Envio Rápido', sub: 'Para todo o Brasil' },
            { icon: RotateCcw, label: 'Devolução Fácil', sub: 'Política do ML' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center py-5 px-4 bg-[#0D0D15] border border-white/5 rounded-xl">
              <Icon size={18} className="text-[#C5973F]" />
              <p className="text-white text-sm font-medium">{label}</p>
              <p className="text-white/35 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
