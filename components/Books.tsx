"use client"
import { useEffect, useRef } from 'react'
import { ShoppingCart, MessageCircle, CheckCircle, BookOpen, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const meta: Record<string, {
  badge?: string
  badgeColor?: string
  stars: number
  readers: string
  hook: string
  cta: string
  ctaUrl: string
  ctaSecondary?: { label: string; url: string }
  urgency?: string
  highlights: string[]
  stat1: { value: string; label: string }
  stat2: { value: string; label: string }
}> = {
  'o-proposito-da-prosperidade': {
    badge: 'EDIÇÃO REVISTA E AMPLIADA',
    badgeColor: '#FFC84E',
    stars: 5,
    readers: '+5.000 leitores',
    hook: 'O que a Bíblia realmente diz sobre dinheiro, trabalho e propósito — sem rodeios e sem ilusões.',
    cta: 'Comprar na Amazon',
    ctaUrl: 'https://www.amazon.com.br/Prop%C3%B3sito-Prosperidade-Altomir-Rangel-Cunha/dp/8574220310',
    highlights: [
      'Riqueza bíblica vs. mentalidade de escassez',
      'Princípios de mordomia aplicados ao dia a dia',
      'Como o trabalho se torna adoração',
      'Finanças alinhadas ao propósito eterno',
    ],
    stat1: { value: '+5.000', label: 'leitores' },
    stat2: { value: '192', label: 'páginas' },
  },
  'bem-vindo-ao-novo-voce': {
    badge: 'DISPONÍVEL AGORA',
    badgeColor: '#066BB7',
    stars: 5,
    readers: 'Novo lançamento',
    hook: 'Quem aprende a lidar consigo mesmo transforma tudo ao redor. Este livro começa essa jornada.',
    cta: 'Pedir pelo WhatsApp',
    ctaUrl: 'https://wa.me/5521999999999?text=Olá! Tenho interesse no livro Bem-vindo ao Novo Você.',
    urgency: 'Pedidos diretos com o autor',
    highlights: [
      'Autoconhecimento à luz da Palavra',
      'Como lidar com emoções e relacionamentos',
      'Identidade e propósito segundo as Escrituras',
      'Transformação de dentro para fora',
    ],
    stat1: { value: '100%', label: 'bíblico' },
    stat2: { value: 'Direto', label: 'do autor' },
  },
}

export default function Books() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#080E11]">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{background:'radial-gradient(ellipse at top right,rgba(255,200,78,0.07) 0%,transparent 65%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-20">
          <div className="reveal flex items-center justify-center md:justify-start gap-2 mb-3">
            <BookOpen size={11} className="text-[#FFC84E]" />
            <span className="label">Livros do Autor</span>
          </div>
          <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
            PALAVRAS QUE<br /><span className="text-[#FFC84E]">MUDAM VIDAS</span>
          </h2>
          <p className="reveal font-inter text-white/35 text-[14px] mt-4 max-w-lg mx-auto md:mx-0">
            Ensinamento bíblico sólido em formato de livro. Direto, sem religiosidade vazia.
          </p>
        </div>

        {/* Books */}
        <div className="flex flex-col gap-8 md:gap-12">
          {books.map((book, idx) => {
            const m = meta[book.slug] ?? {
              stars: 5, readers: '', hook: '', cta: 'Adquirir', ctaUrl: book.buyUrl,
              highlights: [], stat1: { value: '', label: '' }, stat2: { value: '', label: '' }
            }
            const isWA = m.ctaUrl.includes('wa.me')
            const isEven = idx % 2 === 0

            return (
              <div key={book.slug}
                className={`reveal group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} border border-white/8 hover:border-[#FFC84E]/35 bg-[#0D1518] overflow-hidden transition-all duration-500 hover:shadow-[0_32px_100px_rgba(255,200,78,0.08)]`}>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{background: isEven
                    ? 'radial-gradient(ellipse at left,rgba(255,200,78,0.04) 0%,transparent 60%)'
                    : 'radial-gradient(ellipse at right,rgba(255,200,78,0.04) 0%,transparent 60%)'}} />

                {/* ── COVER COLUMN ── */}
                <div className="relative w-full md:w-[36%] flex-shrink-0">

                  {/* Cover image */}
                  <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full min-h-[320px] overflow-hidden bg-[#121C20]">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 36vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0"
                      style={{background: isEven
                        ? 'linear-gradient(to right, transparent 50%, #0D1518 100%)'
                        : 'linear-gradient(to left, transparent 50%, #0D1518 100%)'}} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>

                  {/* Badge */}
                  {m.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-inter text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 text-black"
                        style={{background: m.badgeColor ?? '#FFC84E'}}>
                        {m.badge}
                      </span>
                    </div>
                  )}

                  {/* Stats strip at bottom of cover */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 flex divide-x divide-white/10">
                    <div className="flex-1 flex flex-col items-center py-3 bg-black/60 backdrop-blur-sm">
                      <span className="font-bebas text-lg text-[#FFC84E] leading-none">{m.stat1.value}</span>
                      <span className="font-inter text-[9px] text-white/40 uppercase tracking-widest mt-0.5">{m.stat1.label}</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center py-3 bg-black/60 backdrop-blur-sm">
                      <span className="font-bebas text-lg text-[#FFC84E] leading-none">{m.stat2.value}</span>
                      <span className="font-inter text-[9px] text-white/40 uppercase tracking-widest mt-0.5">{m.stat2.label}</span>
                    </div>
                    {/* Stars */}
                    <div className="flex-1 flex flex-col items-center justify-center py-3 bg-black/60 backdrop-blur-sm gap-1">
                      <div className="flex gap-0.5">
                        {[...Array(m.stars)].map((_,i) => (
                          <svg key={i} width="8" height="8" viewBox="0 0 10 10" fill="#FFC84E"><path d="M5 0l1.2 3.6H10L7.1 5.8l1.2 3.6L5 7.2l-3.3 2.2L2.9 5.8 0 3.6h3.8z"/></svg>
                        ))}
                      </div>
                      <span className="font-inter text-[9px] text-white/35 uppercase tracking-widest">avaliação</span>
                    </div>
                  </div>
                </div>

                {/* ── INFO COLUMN ── */}
                <div className="relative flex flex-col justify-center gap-5 p-7 sm:p-9 md:p-12 flex-1">

                  {/* Readers tag */}
                  <div className="flex items-center gap-2">
                    <Users size={10} className="text-white/25" />
                    <span className="font-inter text-[10px] text-white/30 tracking-[0.2em] uppercase">{m.readers}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-bebas text-[clamp(28px,4.5vw,52px)] leading-[0.95] text-white group-hover:text-[#FFC84E] transition-colors duration-300">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="font-inter text-white/30 text-[12px] mt-1.5 italic">{book.subtitle}</p>
                    )}
                  </div>

                  {/* Hook — commercial pull quote */}
                  {m.hook && (
                    <p className="font-playfair text-[15px] sm:text-[17px] italic text-white/60 leading-relaxed border-l-2 border-[#FFC84E]/40 pl-4">
                      {m.hook}
                    </p>
                  )}

                  {/* Highlights */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle size={13} className="text-[#FFC84E]/70 mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-[12px] text-white/50">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="h-px bg-white/5" />

                  {/* CTA area */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a href={m.ctaUrl} target="_blank" rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2.5 bg-[#FFC84E] hover:bg-[#ffd46e] active:scale-95 text-black font-inter text-[11px] font-bold tracking-[0.22em] uppercase px-8 py-4 transition-all duration-200 min-h-[54px] shadow-[0_8px_32px_rgba(255,200,78,0.30)] hover:shadow-[0_16px_48px_rgba(255,200,78,0.50)]">
                      {isWA
                        ? <MessageCircle size={14} className="group-hover/btn:scale-110 transition-transform" />
                        : <ShoppingCart size={14} className="group-hover/btn:scale-110 transition-transform" />}
                      {m.cta}
                    </a>

                    {m.urgency && (
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-inter text-[11px] text-white/30">{m.urgency}</span>
                      </div>
                    )}

                    {book.pages && (
                      <span className="font-inter text-[11px] text-white/20 hidden sm:block">
                        {book.pages} páginas · {book.year}
                      </span>
                    )}
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom trust bar */}
        <div className="reveal mt-12 md:mt-16 grid grid-cols-3 gap-0 border border-white/6">
          {[
            { icon: BookOpen, value: '2 títulos', label: 'publicados' },
            { icon: Users, value: '+5.000', label: 'leitores impactados' },
            { icon: Award, value: '20+', label: 'anos de ministério' },
          ].map(({ icon: Icon, value, label }, i) => (
            <div key={i} className={`flex flex-col items-center justify-center py-5 px-4 text-center ${i < 2 ? 'border-r border-white/6' : ''}`}>
              <Icon size={14} className="text-[#FFC84E]/50 mb-2" />
              <span className="font-bebas text-xl md:text-2xl text-white leading-none">{value}</span>
              <span className="font-inter text-[9px] text-white/25 uppercase tracking-widest mt-1">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
