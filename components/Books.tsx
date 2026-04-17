'use client'

import { useEffect, useRef } from 'react'
import { ShoppingCart, BookOpen, Star } from 'lucide-react'

const books = [
  {
    id: 1,
    title: 'Título do Livro 1',
    subtitle: 'Subtítulo ou tema principal',
    description:
      'Uma obra que transforma vidas ao apresentar os princípios bíblicos de forma clara e aplicável ao cotidiano do leitor cristão.',
    pages: '180 págs.',
    format: 'Livro Físico',
    buyLink: '#',
    color: 'from-[#1a2a1a] to-[#0f1a0f]',
    accent: '#4a8f4a',
  },
  {
    id: 2,
    title: 'Título do Livro 2',
    subtitle: 'Subtítulo ou tema principal',
    description:
      'Uma jornada profunda pela Palavra de Deus, escrita para edificar famílias, líderes e todos que buscam crescer espiritualmente.',
    pages: '220 págs.',
    format: 'Livro Físico',
    buyLink: '#',
    color: 'from-[#1a1a2a] to-[#0f0f1a]',
    accent: '#5a5abf',
  },
  {
    id: 3,
    title: 'Título do Livro 3',
    subtitle: 'Subtítulo ou tema principal',
    description:
      'Reflexões poderosas sobre fé, propósito e o chamado de Deus na vida de empresários e líderes do século 21.',
    pages: '160 págs.',
    format: 'Livro Físico',
    buyLink: '#',
    color: 'from-[#2a1a10] to-[#1a0f08]',
    accent: '#c97a30',
  },
]

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  )
}

export default function Books() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="livros" ref={sectionRef} className="relative py-28 px-6 bg-navy-900">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold-500/50" />
          <span className="text-gold-500 text-xs font-medium tracking-widest uppercase">
            Publicações
          </span>
        </div>

        {/* Heading */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream-50">
            Livros do <span className="text-gold-400">Altomir</span>
          </h2>
          <p className="text-cream-100/50 text-sm max-w-xs leading-relaxed">
            Obras que edificam, inspiram e transformam à luz da Palavra de Deus.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book) => (
            <article
              key={book.id}
              className="reveal group flex flex-col bg-navy-800/40 border border-white/5 hover:border-gold-500/25 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Book cover mock */}
              <div
                className={`relative h-52 bg-gradient-to-br ${book.color} flex items-center justify-center overflow-hidden`}
              >
                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 right-4 h-px bg-white/20" />
                  <div className="absolute bottom-4 left-4 right-4 h-px bg-white/20" />
                  <div className="absolute top-4 bottom-4 left-4 w-px bg-white/20" />
                  <div className="absolute top-4 bottom-4 right-4 w-px bg-white/20" />
                </div>
                <div className="flex flex-col items-center text-center px-6 gap-2">
                  <BookOpen size={36} style={{ color: book.accent }} className="opacity-60" />
                  <span className="font-playfair font-bold text-lg text-white/80 leading-tight">
                    {book.title}
                  </span>
                  <span className="text-xs text-white/40 italic">{book.subtitle}</span>
                  <span className="text-xs font-semibold mt-1" style={{ color: book.accent }}>
                    Altomir Rangel
                  </span>
                </div>
                {/* Format badge */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white/60 text-[10px] px-2 py-0.5 rounded-full border border-white/10">
                  {book.format}
                </div>
              </div>

              {/* Book info */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-cream-100/30 text-xs">{book.pages}</span>
                </div>
                <h3 className="font-playfair font-bold text-cream-50 text-lg leading-tight">
                  {book.title}
                </h3>
                <p className="text-cream-100/50 text-sm leading-relaxed flex-1">
                  {book.description}
                </p>
                <a
                  href={book.buyLink}
                  className="mt-2 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-gold-500/15 group-hover:shadow-gold-500/30"
                >
                  <ShoppingCart size={14} />
                  Adquirir Livro
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="reveal text-center text-cream-100/30 text-xs mt-10">
          Livros físicos enviados para todo o Brasil · Preencha o formulário de contato para encomendar
        </p>
      </div>
    </section>
  )
}
