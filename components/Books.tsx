"use client"
import { useEffect, useRef, useState } from 'react'
import { ShoppingCart, MessageCircle, Star, Shield, CheckCircle, Zap, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const meta: Record<string, {
  badge?: string
  urgency: string
  priceFrom: string
  priceTo: string
  priceInstallment?: string
  guarantee: string
  stars: number
  reviews: number
  readers: string
  cta: string
  ctaUrl: string
  ctaSecondary?: string
  ctaSecondaryUrl?: string
  benefits: string[]
  bonuses?: { label: string; value: string }[]
}> = {
  'o-proposito-da-prosperidade': {
    badge: 'EDIÇÃO REVISTA E AMPLIADA',
    urgency: '🔥 Mais de 5.000 leitores transformados — Edição Revista e Ampliada',
    priceFrom: '',
    priceTo: 'R$ 69,99',
    priceInstallment: 'ou 12x de R$ 6,89 no cartão',
    guarantee: '7 dias de garantia',
    stars: 5,
    reviews: 312,
    readers: '+5.000 leitores',
    cta: 'Comprar no Mercado Livre',
    ctaUrl: 'https://www.mercadolivre.com.br/livro-proposito-da-prosperidade--altomir-rangel/up/MLBU3941859956?pdp_filters=item_id:MLB4647757361',
    benefits: [
      'A bênção de Deus te espera. Ela não depende de sorte nem de acaso. Depende de você.',
      'Você não tem um problema financeiro. Você tem um problema de relacionamento com o dinheiro. Este livro te mostra a saída.',
      'Parar de dar por medo e começar a ofertar por fé. Essa diferença muda absolutamente tudo.',
      'Se você prender o que tem, não vai receber o que Deus reservou. É hora de soltar.',
      'Edição revista, ampliada e completamente atualizada pelo próprio autor.',
    ],
    bonuses: [
      { label: 'Bônus', value: 'Devocional exclusivo de 7 dias' },
    ],
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'LANÇAMENTO',
    urgency: '⚡ Lançamento — Disponível agora no Mercado Livre',
    priceFrom: '',
    priceTo: 'R$ 69,99',
    priceInstallment: 'ou 12x de R$ 6,89 no cartão',
    guarantee: 'Satisfação garantida',
    stars: 5,
    reviews: 87,
    readers: 'Disponível agora',
    cta: 'Comprar no Mercado Livre',
    ctaUrl: 'https://www.mercadolivre.com.br/livro-bemvindo-ao-novo-voce--altomir-rangel/up/MLBU3941857680?pdp_filters=item_id:MLB4647743953',
    benefits: [
      'Saber que tomate é fruta é conhecimento. Não colocá-lo na salada de frutas é sabedoria. Esse princípio vai transformar sua vida.',
      'O temor do Senhor não é medo religioso. É reconhecer a autoridade de Deus em tudo. E isso abre portas que nenhum esforço humano consegue.',
      'Chega de uma fé que só funciona no domingo. Aprenda a viver o que você crê todos os dias da semana.',
      'Antes de mudar quem está ao seu redor, você precisa mudar quem está por dentro. Comece por você.',
      'Não é mais um livro de teoria bíblica. É um guia para fazer a Palavra funcionar de verdade na sua vida.',
    ],
  },
}

function CountdownBanner({ text }: { text: string }) {
  const [time, setTime] = useState({ h: 2, m: 47, s: 33 })
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { h = 2; m = 47; s = 33 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    <div className="w-full bg-gradient-to-r from-[#B8341B] via-[#D4421F] to-[#B8341B] py-3 px-4 flex items-center justify-center gap-3 flex-wrap text-white text-center">
      <Zap size={14} className="text-[#FFD700] fill-[#FFD700] flex-shrink-0" />
      <span className="font-inter text-[12px] sm:text-[13px] font-bold tracking-wide">{text}</span>
      <div className="flex items-center gap-1.5 bg-black/25 px-3 py-1 rounded-sm">
        <Clock size={11} className="text-[#FFD700]" />
        <span className="font-mono text-[13px] font-bold tracking-widest text-[#FFD700]">
          {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
        </span>
      </div>
    </div>
  )
}

function StarRating({ stars, reviews, center }: { stars: number; reviews: number; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 flex-wrap ${center ? 'justify-center' : 'justify-center md:justify-start'}`}>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className={i < stars ? 'fill-[#FFD700] text-[#FFD700]' : 'text-white/20'} />
        ))}
      </div>
      <span className="font-inter text-[12px] text-white/60">
        <span className="text-white font-semibold">{stars}.0</span> ({reviews} avaliações)
      </span>
    </div>
  )
}

export default function Books() {
  const ref = useRef<HTMLElement>(null)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100))
      })
    }, { threshold: 0.04 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative bg-[#080810] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C5973F]/4 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#B8341B]/4 blur-[100px]" />
      </div>

      {/* Section header */}
      <div className="relative pt-16 md:pt-28 pb-10 md:pb-16 max-w-7xl mx-auto px-6 md:px-10 text-center">
        <div className="reveal inline-flex items-center gap-2 mb-4">
          <span className="label">Livros do Autor</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(42px,9vw,108px)] leading-none text-white">
          PALAVRAS QUE<br /><span className="text-[#C5973F]">MUDAM VIDAS</span>
        </h2>
        <p className="reveal mt-4 font-inter text-white/40 text-[15px] max-w-xl mx-auto">
          Cada livro é um convite à transformação. Escolha o seu e comece hoje.
        </p>
      </div>

      {/* Books */}
      <div className="relative pb-16 md:pb-28 flex flex-col gap-0">
        {books.map((book, idx) => {
          const m = meta[book.slug] ?? {
            urgency: '🔥 Oferta por tempo limitado',
            priceFrom: '',
            priceTo: 'Consulte',
            guarantee: 'Garantia inclusa',
            stars: 5, reviews: 50, readers: '',
            cta: 'Adquirir', ctaUrl: book.buyUrl, benefits: [],
          }
          const isWA = m.ctaUrl.includes('wa.me')
          const isExpanded = expanded[book.slug]

          return (
            <div key={book.slug} className="relative">
              {/* Urgency banner */}
              <CountdownBanner text={m.urgency} />

              {/* ─────────────── MOBILE LAYOUT ─────────────── */}
              <div className="md:hidden">
                {/* Capa full-bleed */}
                <div className="relative w-full" style={{ aspectRatio: '3/4', maxHeight: '72vw' }}>
                  {m.badge && (
                    <div className="absolute top-3 right-3 z-20">
                      <div className="bg-[#B8341B] text-white font-inter text-[8px] font-black tracking-[0.2em] uppercase px-2.5 py-1 shadow-lg">
                        {m.badge}
                      </div>
                    </div>
                  )}
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={idx === 0}
                  />
                  {/* Gradient fade bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080810] to-transparent" />
                  {/* Readers tag */}
                  {m.readers && (
                    <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-[#C5973F] px-2.5 py-1.5 shadow-lg">
                      <Users size={9} className="text-black" />
                      <span className="font-inter text-[8px] font-black text-black tracking-wider uppercase">{m.readers}</span>
                    </div>
                  )}
                </div>

                {/* Conteúdo mobile */}
                <div className="px-5 pt-2 pb-10">
                  {/* Stars */}
                  <div className="mb-3">
                    <StarRating stars={m.stars} reviews={m.reviews} center />
                  </div>

                  {/* Título */}
                  <h3 className="font-bebas text-[clamp(34px,10vw,52px)] leading-tight text-white text-center mb-1">
                    {book.title}
                  </h3>

                  {/* Subtítulo */}
                  {book.subtitle && (
                    <p className="font-inter text-white/50 text-[13px] italic text-center mb-4">
                      {book.subtitle}
                    </p>
                  )}

                  {/* Sinopse */}
                  <p className="font-inter text-white/55 text-[14px] leading-relaxed text-center mb-5">
                    {book.synopsis}
                  </p>

                  {/* Benefícios — cards */}
                  <div className="flex flex-col gap-2 mb-4">
                    {m.benefits.slice(0, isExpanded ? m.benefits.length : 4).map((b, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/8 px-4 py-3 rounded-lg">
                        <CheckCircle size={14} className="text-[#4ADE80] flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-[13px] text-white/80 leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>

                  {m.benefits.length > 4 && (
                    <button
                      onClick={() => setExpanded(e => ({ ...e, [book.slug]: !e[book.slug] }))}
                      className="flex items-center gap-1 font-inter text-[12px] text-[#C5973F] transition-colors mx-auto mb-4"
                    >
                      {isExpanded ? <><ChevronUp size={13} /> Ver menos</> : <><ChevronDown size={13} /> Ver mais benefícios</>}
                    </button>
                  )}

                  {/* Bônus */}
                  {m.bonuses && (
                    <div className="flex flex-col gap-2 mb-4">
                      {m.bonuses.map((bonus, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 bg-[#C5973F]/10 border border-[#C5973F]/25 px-4 py-3 rounded-lg">
                          <Zap size={13} className="text-[#C5973F] flex-shrink-0" />
                          <span className="font-inter text-[12px] text-[#C5973F] font-semibold">{bonus.label}:</span>
                          <span className="font-inter text-[12px] text-white/70">{bonus.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bloco de preço */}
                  <div className="bg-white/[0.04] border border-[#C5973F]/25 rounded-2xl px-5 py-5 mb-4 text-center">
                    {m.priceFrom && (
                      <span className="font-inter text-[13px] text-white/35 line-through block">De {m.priceFrom}</span>
                    )}
                    {m.priceFrom && (
                      <span className="font-inter text-[10px] font-black text-white/40 uppercase tracking-widest block mt-1">Por apenas</span>
                    )}
                    <span className="font-bebas text-[clamp(56px,18vw,80px)] leading-none text-[#C5973F] drop-shadow-[0_0_24px_rgba(197,151,63,0.55)] block">
                      {m.priceTo}
                    </span>
                    {m.priceInstallment && (
                      <span className="font-inter text-[12px] text-white/40 block mt-1">{m.priceInstallment}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={m.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#C5973F] hover:bg-[#d4a84a] active:scale-[0.98] text-black font-inter text-[13px] font-black tracking-[0.15em] uppercase px-6 py-4 transition-all duration-200 min-h-[58px] shadow-[0_8px_32px_rgba(197,151,63,0.4)] w-full rounded-xl mb-3"
                  >
                    {isWA ? <MessageCircle size={16} /> : <ShoppingCart size={16} />}
                    {m.cta}
                  </a>

                  {/* Garantia + segurança */}
                  <div className="flex items-center justify-center gap-2">
                    <Shield size={12} className="text-white/30 flex-shrink-0" />
                    <span className="font-inter text-[11px] text-white/30 text-center">
                      Compra 100% segura · {m.guarantee} · Entrega garantida
                    </span>
                  </div>
                </div>
              </div>

              {/* ─────────────── DESKTOP LAYOUT ─────────────── */}
              <div className={`hidden md:flex max-w-7xl mx-auto px-10 py-14 ${idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} gap-10 lg:gap-16 items-stretch`}>

                {/* CAPA */}
                <div className="reveal-left relative w-[46%] lg:w-[44%] flex-shrink-0">
                  <div className="relative w-full max-w-[420px] mx-0 pb-0">
                    {m.badge && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <div className="bg-[#B8341B] text-white font-inter text-[9px] font-black tracking-[0.22em] uppercase px-3 py-1.5 shadow-lg">
                          {m.badge}
                        </div>
                      </div>
                    )}
                    <div className="absolute -inset-4 bg-[#C5973F]/12 blur-2xl rounded-full" />
                    <div className="relative aspect-[3/4] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] border border-white/8">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="44vw"
                        priority={idx === 0}
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 z-20 bg-[#0F0F1A] border border-[#C5973F]/40 rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl">
                      <Shield size={16} className="text-[#C5973F] mb-0.5" />
                      <span className="font-inter text-[7px] font-black text-white text-center leading-tight tracking-wide uppercase px-1">{m.guarantee}</span>
                    </div>
                    {m.readers && (
                      <div className="absolute -bottom-4 right-2 z-20 flex items-center gap-1.5 bg-[#C5973F] px-3 py-1.5 shadow-lg">
                        <Users size={10} className="text-black" />
                        <span className="font-inter text-[9px] font-black text-black tracking-wider uppercase">{m.readers}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* BLOCO DE OFERTA */}
                <div className="reveal-right flex-1 flex flex-col justify-center gap-5 max-w-xl mx-0 w-full">
                  <StarRating stars={m.stars} reviews={m.reviews} />
                  <h3 className="font-bebas text-[clamp(32px,6vw,64px)] leading-tight text-white">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="font-inter text-white/50 text-[14px] italic -mt-2">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="font-inter text-white/55 text-[15px] leading-relaxed border-l-2 border-[#C5973F]/50 pl-4">
                    {book.synopsis}
                  </p>
                  <ul className="space-y-2.5 mt-1 w-full">
                    {m.benefits.slice(0, isExpanded ? m.benefits.length : 4).map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="text-[#4ADE80] flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-[14px] text-white/75">{b}</span>
                      </li>
                    ))}
                  </ul>
                  {m.benefits.length > 4 && (
                    <button
                      onClick={() => setExpanded(e => ({ ...e, [book.slug]: !e[book.slug] }))}
                      className="flex items-center gap-1 font-inter text-[12px] text-[#C5973F] hover:text-[#d4a84a] transition-colors -mt-1"
                    >
                      {isExpanded ? <><ChevronUp size={13} /> Ver menos</> : <><ChevronDown size={13} /> Ver mais benefícios</>}
                    </button>
                  )}
                  {m.bonuses && (
                    <div className="flex flex-col gap-2 mt-1 w-full">
                      {m.bonuses.map((bonus, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-[#C5973F]/8 border border-[#C5973F]/20 px-3.5 py-2.5">
                          <Zap size={13} className="text-[#C5973F] flex-shrink-0" />
                          <span className="font-inter text-[12px] text-[#C5973F] font-semibold">{bonus.label}:</span>
                          <span className="font-inter text-[12px] text-white/70">{bonus.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="h-px bg-gradient-to-r from-[#C5973F]/30 via-white/8 to-transparent mt-1 w-full" />
                  <div className="flex flex-col items-start gap-1">
                    {m.priceFrom && (
                      <span className="font-inter text-[13px] text-white/35 line-through">De {m.priceFrom}</span>
                    )}
                    <div className="flex items-baseline gap-3 flex-wrap">
                      {m.priceFrom && <span className="font-inter text-[10px] font-black text-white/40 uppercase tracking-widest">Por apenas</span>}
                      <span className="font-bebas text-[clamp(48px,12vw,72px)] leading-none text-[#C5973F] drop-shadow-[0_0_20px_rgba(197,151,63,0.5)]">
                        {m.priceTo}
                      </span>
                    </div>
                    {m.priceInstallment && (
                      <span className="font-inter text-[12px] text-white/40">{m.priceInstallment}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 mt-2 w-full">
                    <a
                      href={m.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#C5973F] hover:bg-[#d4a84a] active:scale-[0.98] text-black font-inter text-[12px] font-black tracking-[0.18em] uppercase px-8 py-4 transition-all duration-200 min-h-[56px] shadow-[0_8px_32px_rgba(197,151,63,0.35)] hover:shadow-[0_12px_48px_rgba(197,151,63,0.55)] w-full"
                    >
                      {isWA ? <MessageCircle size={15} /> : <ShoppingCart size={15} />}
                      {m.cta}
                    </a>
                    {m.ctaSecondary && m.ctaSecondaryUrl && (
                      <a
                        href={m.ctaSecondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-white/15 hover:border-[#C5973F]/40 text-white/60 hover:text-white font-inter text-[12px] font-semibold tracking-wide uppercase px-6 py-4 transition-all duration-200 min-h-[56px] w-full"
                      >
                        {m.ctaSecondary}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Shield size={13} className="text-white/30 flex-shrink-0" />
                    <span className="font-inter text-[11px] text-white/30">
                      Compra 100% segura · {m.guarantee} · Entrega garantida
                    </span>
                  </div>
                </div>
              </div>

              {idx < books.length - 1 && (
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
