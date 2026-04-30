"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Shield, Truck, RotateCcw, Star, Clock, ArrowRight, Package } from 'lucide-react'

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
    glow: 'rgba(197,151,63,0.18)',
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
    glow: 'rgba(197,151,63,0.14)',
  },
]

const PROMO_DEADLINE = new Date('2026-05-07T23:59:59')

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false })
  useEffect(() => {
    const tick = () => {
      const diff = PROMO_DEADLINE.getTime() - Date.now()
      if (diff <= 0) { setT({ d:0, h:0, m:0, s:0, expired:true }); return }
      setT({ d: Math.floor(diff/86400000), h: Math.floor((diff%86400000)/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000), expired: false })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [])
  return t
}

function pad(n: number) { return String(n).padStart(2,'0') }

export default function Books() {
  const { d, h, m, s, expired } = useCountdown()
  return (
    <section id="livros" className="relative bg-[#06060B] py-24 px-4 overflow-hidden">

      {/* Gold ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#C5973F]/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-32 bg-[#C5973F]/5 blur-3xl" />

      {/* Header */}
      <div className="relative text-center mb-16">
        <p className="text-[#C5973F] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Obras do Autor</p>
        <h2 className="font-bebas text-6xl md:text-8xl text-white leading-none tracking-wide mb-4">LIVROS</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#C5973F]/40" />
          <p className="text-white/40 text-sm">Mensagens que transformam vidas e renovam a fé</p>
          <div className="h-px w-12 bg-[#C5973F]/40" />
        </div>
      </div>

      {/* Countdown */}
      {!expired && (
        <div className="max-w-lg mx-auto mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border border-[#C5973F]/25 rounded-xl px-6 py-4 bg-[#C5973F]/5">
            <div className="flex items-center gap-2">
              <Clock size={13} className="text-[#C5973F]" />
              <span className="text-[#C5973F] text-xs font-semibold tracking-widest uppercase">Promoção encerra em</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-sm">
              {d > 0 && <><span className="text-white font-bold">{d}d</span><span className="text-white/20">·</span></>}
              <span className="bg-[#C5973F]/20 text-[#C5973F] font-bold px-2 py-0.5 rounded">{pad(h)}</span>
              <span className="text-white/30">:</span>
              <span className="bg-[#C5973F]/20 text-[#C5973F] font-bold px-2 py-0.5 rounded">{pad(m)}</span>
              <span className="text-white/30">:</span>
              <span className="bg-[#C5973F]/20 text-[#C5973F] font-bold px-2 py-0.5 rounded">{pad(s)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Book cards — editorial layout */}
      <div className="max-w-5xl mx-auto space-y-6 mb-20">
        {BOOKS.map((book, i) => (
          <div key={book.id} className="grid md:grid-cols-5 rounded-2xl overflow-hidden border border-white/[0.06]">

            {/* Cover panel */}
            <div
              className={`md:col-span-2 ${i % 2 === 1 ? 'md:order-2' : ''} relative flex items-center justify-center p-10 min-h-[340px]`}
              style={{ background: `radial-gradient(ellipse at center, ${book.glow} 0%, #0A0A12 65%)` }}
            >
              {/* Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C5973F] text-black px-3 py-1.5 rounded-full">
                  {book.badge}
                </span>
              </div>

              {/* Cover image */}
              <div
                className="relative w-44 drop-shadow-2xl"
                style={{ perspective: '800px' }}
              >
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{ transform: `rotateY(${i % 2 === 1 ? '-5deg' : '5deg'})`, transformStyle: 'preserve-3d', aspectRatio: '2/3', boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)' }}
                >
                  <Image src={book.cover} alt={book.title} fill className="object-cover" sizes="176px" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)` }} />
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className={`md:col-span-3 ${i % 2 === 1 ? 'md:order-1' : ''} flex flex-col justify-center p-8 md:p-12 bg-[#0D0D18] border-t md:border-t-0 ${i % 2 === 1 ? 'md:border-r' : 'md:border-l'} border-white/[0.06]`}>

              {/* Stars */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: book.stars }).map((_, j) => (
                    <Star key={j} size={12} className="text-[#C5973F] fill-[#C5973F]" />
                  ))}
                </div>
                <span className="text-white/30 text-xs">{book.readers} leitores</span>
              </div>

              {/* Title */}
              <h3 className="font-bebas uppercase text-[2.4rem] md:text-[3rem] text-white leading-none tracking-wide mb-2">
                {book.title}
              </h3>
              <p className="text-white/35 text-sm mb-8 border-l-2 border-[#C5973F]/40 pl-3">{book.subtitle}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-white/25 text-base line-through">R${book.originalPrice.toFixed(2).replace('.',',')}</span>
                  <span className="text-xs font-bold bg-green-500 text-white px-2.5 py-1 rounded-full">{book.discount}% OFF</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#C5973F] text-2xl font-bold">R$</span>
                  <span className="text-white text-6xl font-bold leading-none">79<span className="text-4xl">,99</span></span>
                </div>
                <p className="text-white/25 text-xs mt-2">ou em até 12× no cartão</p>
              </div>

              {/* CTA */}
              <a
                href={book.mlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FFE600] hover:bg-[#FFD700] text-[#111] font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full"
              >
                Comprar no Mercado Livre
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto mb-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-white/15 text-xs tracking-widest uppercase">ou leve os dois</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      {/* Combo */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="relative rounded-2xl overflow-hidden border border-[#C5973F]/20">
          {/* Top gold line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5973F] to-transparent" />
          {/* Gold bg glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#C5973F]/5 to-transparent pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Left: covers + title */}
            <div className="flex flex-col items-center justify-center gap-6 p-10 border-b md:border-b-0 md:border-r border-white/[0.06]">
              <div className="flex items-end gap-4">
                {BOOKS.map((book, i) => (
                  <div key={book.id} className="relative rounded-lg overflow-hidden shadow-2xl" style={{ width: i===0?'72px':'64px', height: i===0?'108px':'96px' }}>
                    <Image src={book.cover} alt={book.title} fill className="object-cover" sizes="72px" />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C5973F] text-black px-3 py-1 rounded-full">MELHOR VALOR</span>
                </div>
                <h3 className="font-bebas text-4xl text-white tracking-wide">KIT COMPLETO</h3>
                <p className="text-white/35 text-sm">Os 2 livros com desconto</p>
              </div>
            </div>

            {/* Right: price + CTA */}
            <div className="flex flex-col items-center justify-center gap-5 p-10 bg-[#0D0D18]">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-white/25 text-sm line-through">R$239,98</span>
                  <span className="text-xs font-bold bg-green-500 text-white px-2.5 py-1 rounded-full">42% OFF</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[#C5973F] text-xl font-bold">R$</span>
                  <span className="text-white text-6xl font-bold leading-none">139<span className="text-4xl">,99</span></span>
                </div>
                <p className="text-white/25 text-xs mt-2">Economia de R$19,99 · até 12× no cartão</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FFE600] hover:bg-[#FFD700] text-[#111] font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full"
              >
                <Package size={15} />
                Comprar Kit no Mercado Livre
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {[
            { icon: Shield, label: 'Compra Segura', sub: 'Pagamento protegido' },
            { icon: Truck, label: 'Envio Rápido', sub: 'Para todo o Brasil' },
            { icon: RotateCcw, label: 'Devolução Fácil', sub: 'Política do ML' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 text-center py-5 px-3 bg-[#0D0D18]">
              <Icon size={16} className="text-[#C5973F]" />
              <p className="text-white text-xs font-semibold">{label}</p>
              <p className="text-white/30 text-[11px]">{sub}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
