'use client'
import { useEffect, useRef } from 'react'
import { ShoppingCart, Star } from 'lucide-react'

const books = [
  {
    id: 1,
    title: 'Título do Livro 1',
    subtitle: 'Subtítulo',
    desc: 'Uma obra que transforma vidas ao apresentar os princípios bíblicos de forma clara e aplicável ao cotidiano.',
    pages: '180 págs',
    spine: '#2a1f0a',
    cover: 'linear-gradient(160deg, #2a1f0a 0%, #1a1305 100%)',
    accent: '#E8B84B',
    link: '#',
  },
  {
    id: 2,
    title: 'Título do Livro 2',
    subtitle: 'Subtítulo',
    desc: 'Jornada profunda pela Palavra de Deus, escrita para edificar famílias, líderes e todos que buscam crescer.',
    pages: '220 págs',
    spine: '#0f1a2a',
    cover: 'linear-gradient(160deg, #0f1a2a 0%, #081015 100%)',
    accent: '#7BAFD4',
    link: '#',
  },
  {
    id: 3,
    title: 'Título do Livro 3',
    subtitle: 'Subtítulo',
    desc: 'Reflexões sobre fé, propósito e o chamado de Deus na vida de empresários e líderes do século 21.',
    pages: '160 págs',
    spine: '#1a0f0a',
    cover: 'linear-gradient(160deg, #1a100a 0%, #120a05 100%)',
    accent: '#E07050',
    link: '#',
  },
]

function BookCard({ book, index }: { book: typeof books[0]; index: number }) {
  return (
    <article className="reveal group flex flex-col bg-dark-200 border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden">

      {/* Book cover */}
      <div className="relative h-64 overflow-hidden" style={{ background: book.cover }}>
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)' }} />
        {/* Spine shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-4"
          style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.5), transparent)' }} />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex flex-col gap-2">
            <div className="w-8 h-px" style={{ background: book.accent }} />
            <h3 className="font-bebas text-3xl text-cream leading-tight">{book.title}</h3>
            <p className="font-inter text-[11px] tracking-[0.15em] uppercase" style={{ color: book.accent }}>{book.subtitle}</p>
          </div>
          <div>
            <p className="font-playfair italic text-sm text-cream/30">Altomir Rangel</p>
          </div>
        </div>
        {/* Page count badge */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-0.5">
          <span className="font-inter text-[10px] text-cream/40 tracking-[0.15em]">{book.pages}</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-gold text-gold" />)}
        </div>

        <p className="font-inter text-cream/50 text-[13px] leading-relaxed flex-1">{book.desc}</p>

        <a href={book.link} className="btn-gold w-full justify-center text-[11px] gap-2 mt-auto">
          <ShoppingCart size={13} />
          ADQUIRIR LIVRO
        </a>
      </div>
    </article>
  )
}

export default function Books() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120)
          })
        }
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative py-28 md:py-36 bg-dark overflow-hidden">

      {/* Gold glow background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(197,151,63,0.05) 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Publicações</span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(48px,7vw,90px)] leading-none text-cream">
              LIVROS QUE<br /><span className="text-gold">TRANSFORMAM VIDAS</span>
            </h2>
          </div>
          <p className="reveal font-inter text-cream/40 text-sm max-w-xs leading-relaxed text-right hidden md:block">
            Obras escritas à luz da Palavra de Deus para edificar, instruir e transformar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {books.map((book, i) => <BookCard key={book.id} book={book} index={i} />)}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-white/5" />
          <p className="font-inter text-cream/25 text-xs tracking-[0.2em] uppercase whitespace-nowrap">
            Livros físicos · Enviamos para todo o Brasil
          </p>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Full-width CTA banner */}
        <div className="reveal mt-16 bg-dark-200 border border-gold/15 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-bebas text-4xl md:text-5xl text-cream leading-tight">
              COMBO COMPLETO<br /><span className="text-gold">DE LIVROS</span>
            </h3>
            <p className="font-inter text-cream/45 text-sm mt-2 leading-relaxed">
              Adquira todos os livros do Altomir Rangel com condições especiais.
            </p>
          </div>
          <a href="#contato" className="btn-gold whitespace-nowrap flex-shrink-0">
            SOLICITAR COMBO →
          </a>
        </div>
      </div>
    </section>
  )
}
