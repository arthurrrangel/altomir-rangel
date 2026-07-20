"use client"
import { useEffect, useRef } from 'react'
import { ShoppingCart, MessageCircle, Star, Shield, CheckCircle, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { books } from '@/lib/books'
import { booksSection } from '@/lib/content'

type BookMeta = {
  badge?: string
  proof: string
  priceTo: string
  priceInstallment?: string
  guarantee: string
  stars: number
  readers: string
  cta: string
  ctaUrl: string
  benefits: string[]
  mobileBenefits?: string[]
}

const meta: Record<string, BookMeta> = {
  'o-proposito-da-prosperidade': {
    badge: 'EDIÇÃO REVISTA E AMPLIADA',
    proof: 'Mais de 5.000 leitores transformados',
    priceTo: 'R$ 69,99',
    priceInstallment: 'ou 12x de R$ 6,89 no cartão',
    guarantee: '7 dias de garantia',
    stars: 5,
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
    mobileBenefits: [
      'Você vai entender por que ora, trabalha e ainda assim não prospera — e o que fazer agora.',
      'Mais de 5.000 vidas transformadas: quando essa revelação chega, tudo muda — finanças, fé e propósito.',
      'Aprenda a diferença entre bênção e sorte, ofertar com fé e dar por medo. Um entendimento que liberta.',
      'Princípios aplicáveis hoje — não teoria, mas prática bíblica que funciona na vida real.',
      'Edição revista e ampliada: mais ensino, mais profundidade e mais transformação do que nunca.',
    ],
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'LANÇAMENTO',
    proof: 'Lançamento — disponível agora',
    priceTo: 'R$ 69,99',
    priceInstallment: 'ou 12x de R$ 6,89 no cartão',
    guarantee: 'Satisfação garantida',
    stars: 5,
    readers: '',
    cta: 'Comprar no Mercado Livre',
    ctaUrl: 'https://www.mercadolivre.com.br/livro-bemvindo-ao-novo-voce--altomir-rangel/up/MLBU3941857680?pdp_filters=item_id:MLB4647743953',
    benefits: [
      'Saber que tomate é fruta é conhecimento. Não colocá-lo na salada de frutas é sabedoria. Esse princípio vai transformar sua vida.',
      'O temor do Senhor não é medo religioso. É reconhecer a autoridade de Deus em tudo. E isso abre portas que nenhum esforço humano consegue.',
      'Chega de uma fé que só funciona no domingo. Aprenda a viver o que você crê todos os dias da semana.',
      'Antes de mudar quem está ao seu redor, você precisa mudar quem está por dentro. Comece por você.',
      'Não é mais um livro de teoria bíblica. É um guia para fazer a Palavra funcionar de verdade na sua vida.',
    ],
    mobileBenefits: [
      'Antes de tentar mudar o mundo, aprenda a mudar a si mesmo — e tudo começa nesta leitura.',
      'Chega de uma fé só de domingo. Descubra como viver o que você crê de forma prática e real todos os dias.',
      'O temor do Senhor abre portas que nenhum currículo, networking ou esforço humano consegue abrir.',
      'Uma leitura impossível de parar: direta, profunda e que vai incomodar você da melhor forma possível.',
      'Ao fechar o livro, você terá ferramentas reais para emoções, relacionamentos e propósito de vida.',
    ],
  },
}

function StarRating({ stars, center }: { stars: number; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 flex-wrap ${center ? 'justify-center' : 'justify-center md:justify-start'}`} aria-hidden="true">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className={i < stars ? 'fill-[#F2CD63] text-[#F2CD63]' : 'text-white/20'} />
        ))}
      </div>
    </div>
  )
}

function ProofLine({ text, center }: { text: string; center?: boolean }) {
  return (
    <p className={`flex items-center gap-2 font-inter text-[11px] font-bold tracking-[0.18em] uppercase text-[#D8A93A] ${center ? 'justify-center' : ''}`}>
      <Users size={12} aria-hidden="true" />
      {text}
    </p>
  )
}

export default function Books() {
  const ref = useRef<HTMLElement>(null)
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
    <section id="livros" ref={ref} className="relative bg-[#101D30] overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D8A93A]/4 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#D8A93A]/5 blur-[100px]" />
      </div>

      {/* Cabeçalho da seção */}
      <div className="relative pt-16 md:pt-28 pb-10 md:pb-16 max-w-7xl mx-auto px-6 md:px-10 text-center">
        <div className="reveal inline-flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#D8A93A]/45" />
          <span className="label">{booksSection.label}</span>
          <div className="h-px w-8 bg-[#D8A93A]/45" />
        </div>
        <h2 className="reveal font-bebas text-[clamp(36px,6vw,78px)] leading-none text-white">
          {booksSection.headline1}<br /><span className="text-[#D8A93A]">{booksSection.headlineGold}</span>
        </h2>
        <p className="reveal mt-4 font-inter text-white/60 text-[15px] max-w-xl mx-auto">
          {booksSection.subtitle}
        </p>
      </div>

      {/* Livros */}
      <div className="relative pb-16 md:pb-28 flex flex-col gap-0">
        {books.map((book, idx) => {
          const m = meta[book.slug] ?? {
            proof: 'Disponível agora',
            priceTo: 'Consulte',
            guarantee: 'Garantia inclusa',
            stars: 5,
            readers: '',
            cta: 'Adquirir',
            ctaUrl: book.buyUrl,
            benefits: [],
          }
          const isWA = m.ctaUrl.includes('wa.me')

          return (
            <div key={book.slug} className="relative">

              {/* ─────────────── MOBILE ─────────────── */}
              <div className="md:hidden">
                {/* Capa full-bleed */}
                <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                  {m.badge && (
                    <div className="absolute top-3 right-3 z-20">
                      <div className="bg-[#D8A93A] text-[#16243B] font-inter text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1 shadow-lg">
                        {m.badge}
                      </div>
                    </div>
                  )}
                  <Image
                    src={book.cover}
                    alt={`Capa do livro ${book.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101D30] to-transparent" />
                  {m.readers && (
                    <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-[#D8A93A] px-2.5 py-1.5 shadow-lg">
                      <Users size={9} className="text-[#16243B]" aria-hidden="true" />
                      <span className="font-inter text-[9px] font-black text-[#16243B] tracking-wider uppercase">{m.readers}</span>
                    </div>
                  )}
                </div>

                {/* Conteúdo mobile */}
                <div className="px-5 pt-2 pb-12">
                  <div className="mb-3">
                    <StarRating stars={m.stars} center />
                  </div>

                  <h3 className="font-bebas text-[clamp(34px,10vw,52px)] leading-tight text-white text-center mb-2">
                    {book.title}
                  </h3>

                  <div className="mb-4">
                    <ProofLine text={m.proof} center />
                  </div>

                  <div className="flex flex-col gap-2 mb-5">
                    {(m.mobileBenefits ?? m.benefits).map((b, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/8 px-4 py-3">
                        <CheckCircle size={14} className="text-[#D8A93A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="font-inter text-[13px] text-white/85 leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bloco de preço */}
                  <div className="bg-white/[0.04] border border-[#D8A93A]/25 px-5 py-5 mb-4 text-center">
                    <span className="font-inter text-[10px] font-black tracking-[0.35em] text-[#D8A93A] uppercase block mb-1">Investimento</span>
                    <span className="font-bebas text-[clamp(52px,16vw,72px)] leading-none text-[#D8A93A] block drop-shadow-[0_0_18px_rgba(216,169,58,0.35)]">
                      {m.priceTo}
                    </span>
                    {m.priceInstallment && (
                      <span className="font-inter text-[12px] text-white/75 block mt-1">{m.priceInstallment}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={m.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#D8A93A] hover:bg-[#E2B652] active:scale-[0.98] text-[#16243B] font-inter text-[13px] font-black tracking-[0.15em] uppercase px-6 py-4 transition-all duration-200 min-h-[56px] shadow-[0_8px_32px_rgba(216,169,58,0.35)] w-full mb-3"
                  >
                    {isWA ? <MessageCircle size={16} aria-hidden="true" /> : <ShoppingCart size={16} aria-hidden="true" />}
                    {m.cta}
                  </a>

                  <Link
                    href={`/livros/${book.slug}`}
                    className="flex items-center justify-center gap-2 border border-white/15 hover:border-[#D8A93A]/50 text-white/70 hover:text-[#D8A93A] font-inter text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 transition-all duration-200 min-h-[48px] w-full mb-4"
                  >
                    {booksSection.detailsCta} <ArrowRight size={13} aria-hidden="true" />
                  </Link>

                  <div className="flex items-center justify-center gap-2">
                    <Shield size={12} className="text-white/60 flex-shrink-0" aria-hidden="true" />
                    <span className="font-inter text-[11px] text-white/60 text-center">
                      Compra 100% segura · {m.guarantee} · Entrega garantida
                    </span>
                  </div>
                </div>
              </div>

              {/* ─────────────── DESKTOP ─────────────── */}
              <div className={`hidden md:flex max-w-7xl mx-auto px-10 py-20 ${idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} gap-12 lg:gap-20 items-center`}>

                {/* CAPA */}
                <div className="reveal-left relative w-[46%] lg:w-[44%] flex-shrink-0">
                  <div className="relative w-full max-w-[420px] mx-auto">
                    {m.badge && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <div className="bg-[#D8A93A] text-[#16243B] font-inter text-[9px] font-black tracking-[0.22em] uppercase px-3 py-1.5 shadow-lg">
                          {m.badge}
                        </div>
                      </div>
                    )}
                    <div className="absolute -inset-4 bg-[#D8A93A]/12 blur-2xl rounded-full" aria-hidden="true" />
                    <div className="relative aspect-[3/4] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] border border-white/8">
                      <Image
                        src={book.cover}
                        alt={`Capa do livro ${book.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 z-20 bg-[#1B2A44] border border-[#D8A93A]/40 rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl">
                      <Shield size={16} className="text-[#D8A93A] mb-0.5" aria-hidden="true" />
                      <span className="font-inter text-[7px] font-black text-white text-center leading-tight tracking-wide uppercase px-1">{m.guarantee}</span>
                    </div>
                    {m.readers && (
                      <div className="absolute -bottom-4 right-2 z-20 flex items-center gap-1.5 bg-[#D8A93A] px-3 py-1.5 shadow-lg">
                        <Users size={10} className="text-[#16243B]" aria-hidden="true" />
                        <span className="font-inter text-[9px] font-black text-[#16243B] tracking-wider uppercase">{m.readers}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* OFERTA */}
                <div className="reveal-right flex-1 flex flex-col justify-center gap-5 max-w-xl w-full">
                  <div className="flex items-center gap-4 flex-wrap">
                    <StarRating stars={m.stars} />
                    <ProofLine text={m.proof} />
                  </div>
                  <h3 className="font-bebas text-[clamp(32px,5vw,60px)] leading-tight text-white">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="font-inter text-white/60 text-[14px] italic -mt-3">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="font-inter text-white/75 text-[15px] leading-relaxed border-l-2 border-[#D8A93A]/50 pl-4">
                    {book.synopsis}
                  </p>
                  <ul className="space-y-2.5 mt-1 w-full">
                    {m.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="text-[#D8A93A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="font-inter text-[14px] text-white/85">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 w-full">
                    <div className="h-px bg-gradient-to-r from-[#D8A93A]/40 via-[#D8A93A]/10 to-transparent mb-4" />
                    <span className="font-inter text-[10px] font-black tracking-[0.35em] text-[#D8A93A] uppercase">Investimento</span>
                  </div>
                  <div className="flex flex-col items-start gap-1 -mt-2">
                    <span className="font-bebas text-[clamp(48px,7vw,64px)] leading-none text-[#D8A93A] drop-shadow-[0_0_16px_rgba(216,169,58,0.35)]">
                      {m.priceTo}
                    </span>
                    {m.priceInstallment && (
                      <span className="font-inter text-[12px] text-white/75">{m.priceInstallment}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 mt-2 w-full">
                    <a
                      href={m.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#D8A93A] hover:bg-[#E2B652] active:scale-[0.98] text-[#16243B] font-inter text-[12px] font-black tracking-[0.18em] uppercase px-8 py-4 transition-all duration-200 min-h-[56px] shadow-[0_8px_32px_rgba(216,169,58,0.3)] hover:shadow-[0_12px_44px_rgba(216,169,58,0.45)] w-full"
                    >
                      {isWA ? <MessageCircle size={15} aria-hidden="true" /> : <ShoppingCart size={15} aria-hidden="true" />}
                      {m.cta}
                    </a>
                    <Link
                      href={`/livros/${book.slug}`}
                      className="flex items-center justify-center gap-2 border border-white/15 hover:border-[#D8A93A]/50 text-white/70 hover:text-[#D8A93A] font-inter text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 transition-all duration-200 min-h-[48px] w-full"
                    >
                      {booksSection.detailsCta} <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <Shield size={13} className="text-white/60 flex-shrink-0" aria-hidden="true" />
                    <span className="font-inter text-[11px] text-white/60">
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
