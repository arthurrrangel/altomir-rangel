"use client"
import { useEffect, useRef } from 'react'
import { ShoppingCart, MessageCircle, CheckCircle, BookOpen, Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const meta: Record<string, {
  badge?: string
  badgeColor?: string
  hook: string
  cta: string
  ctaUrl: string
  urgency?: string
  highlights: string[]
}> = {
  'o-proposito-da-prosperidade': {
    badge: 'MAIS VENDIDO',
    badgeColor: '#FFC84E',
    hook: 'O que a Bíblia realmente diz sobre dinheiro, trabalho e propósito — sem rodeios e sem ilusões.',
    cta: 'Comprar na Amazon',
    ctaUrl: 'https://www.amazon.com.br/Prop%C3%B3sito-Prosperidade-Altomir-Rangel-Cunha/dp/8574220310',
    highlights: [
      'Riqueza bíblica vs. mentalidade de escassez',
      'Princípios de mordomia aplicados ao dia a dia',
      'Como o trabalho se torna adoração',
      'Finanças alinhadas ao propósito eterno',
    ],
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'NOVO LANÇAMENTO',
    badgeColor: '#066BB7',
    hook: 'Quem aprende a lidar consigo mesmo transforma tudo ao redor. Este livro começa essa jornada.',
    cta: 'Quero este livro',
    ctaUrl: 'https://wa.me/5521999999999?text=Olá! Tenho interesse no livro Bem-vindo ao Novo Você.',
    urgency: 'Pedido direto com o autor via WhatsApp',
    highlights: [
      'Autoconhecimento à luz da Palavra',
      'Como lidar com emoções e relacionamentos',
      'Identidade e propósito segundo as Escrituras',
      'Transformação de dentro para fora',
    ],
  },
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
    <section id="livros" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#080E11]">

      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{background:'radial-gradient(ellipse at top right,rgba(255,200,78,0.07) 0%,transparent 65%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center md:text-left mb-14 md:mb-20">
          <div className="reveal flex items-center justify-center md:justify-start gap-2 mb-3">
            <BookOpen size={11} className="text-[#FFC84E]" />
            <span className="label">Livros</span>
          </div>
          <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
            PALAVRAS QUE<br /><span className="text-[#FFC84E]">MUDAM VIDAS</span>
          </h2>
        </div>

        {/* Books list */}
        <div className="flex flex-col gap-6">
          {books.map((book, idx) => {
            const m = meta[book.slug] ?? { hook: '', cta: 'Adquirir', ctaUrl: book.buyUrl, highlights: [] }
            const isWA = m.ctaUrl.includes('wa.me')
            const isEven = idx % 2 === 0

            return (
              <div key={book.slug}
                className={`reveal group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} overflow-hidden border border-white/8 hover:border-[#FFC84E]/30 transition-all duration-500 bg-[#0D1518] hover:shadow-[0_24px_80px_rgba(0,0,0,0.5)]`}>

                {/* ── COVER ── */}
                <div className="relative w-full md:w-[44%] flex-shrink-0 overflow-hidden bg-[#080E11]">
                  <div className="relative w-full" style={{paddingBottom: '130%'}}>
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 44vw"
                    />
                    {/* Edge fade into content column */}
                    <div className="absolute inset-0"
                      style={{background: isEven
                        ? 'linear-gradient(to right, transparent 60%, #0D1518 100%)'
                        : 'linear-gradient(to left, transparent 60%, #0D1518 100%)'}} />
                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1518] via-transparent to-transparent" style={{backgroundSize:'100% 50%', backgroundRepeat:'no-repeat', backgroundPosition:'bottom'}} />
                  </div>

                  {/* Badge */}
                  {m.badge && (
                    <div className="absolute top-5 left-5 z-10">
                      <span className="font-inter text-[9px] font-extrabold tracking-[0.3em] uppercase px-3 py-1.5 text-black"
                        style={{background: m.badgeColor ?? '#FFC84E'}}>
                        {m.badge}
                      </span>
                    </div>
                  )}

                  {/* Stars overlay */}
                  <div className="absolute bottom-5 left-5 z-10 flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-[#FFC84E] text-[#FFC84E]" />
                      ))}
                    </div>
                    <span className="font-inter text-[10px] text-white/50 tracking-wide">5.0</span>
                  </div>
                </div>

                {/* ── CONTENT ── */}
                <div className="relative flex flex-col justify-between gap-6 p-8 sm:p-10 md:p-12 flex-1">

                  {/* Top: title block */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-bebas text-[clamp(32px,4vw,56px)] leading-[0.9] text-white group-hover:text-[#FFC84E] transition-colors duration-300">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="font-inter text-white/30 text-[12px] italic leading-relaxed">{book.subtitle}</p>
                    )}

                    {/* Hook */}
                    {m.hook && (
                      <p className="font-playfair text-[15px] md:text-[17px] italic text-white/55 leading-relaxed border-l-2 border-[#FFC84E]/50 pl-4">
                        {m.hook}
                      </p>
                    )}
                  </div>

                  {/* Highlights */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-[#FFC84E] mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-[13px] text-white/55 leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA block */}
                  <div className="flex flex-col gap-3">
                    <div className="h-px bg-white/5" />

                    <a href={m.ctaUrl} target="_blank" rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-between gap-3 w-full bg-[#FFC84E] hover:bg-[#ffd46e] active:scale-[0.98] text-black font-inter font-extrabold text-[12px] tracking-[0.22em] uppercase px-7 py-5 transition-all duration-200 shadow-[0_12px_40px_rgba(255,200,78,0.35)] hover:shadow-[0_20px_60px_rgba(255,200,78,0.55)]">
                      <span className="flex items-center gap-2.5">
                        {isWA
                          ? <MessageCircle size={16} className="flex-shrink-0" />
                          : <ShoppingCart size={16} className="flex-shrink-0" />}
                        {m.cta}
                      </span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>

                    {m.urgency ? (
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                        <span className="font-inter text-[11px] text-white/30">{m.urgency}</span>
                      </div>
                    ) : book.pages ? (
                      <span className="font-inter text-[11px] text-white/20">
                        {book.pages} páginas · {book.publisher} · {book.year}
                      </span>
                    ) : null}
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
