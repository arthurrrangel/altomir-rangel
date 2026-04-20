"use client"
import { useEffect, useRef } from 'react'
import { ShoppingCart, BookOpen, Star } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

const badges: Record<string, { label: string; color: string }> = {
  'o-proposito-da-prosperidade': { label: 'EDIÇÃO AMPLIADA', color: 'bg-[#C5973F] text-black' },
  'bem-vindo-ao-novo-voce':      { label: 'NOVO',            color: 'bg-white text-black' },
}

export default function Books() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.05) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-16">
          <div className="text-center md:text-left">
            <div className="reveal flex items-center justify-center md:justify-start mb-3">
              <span className="label">Livros do Autor</span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
              LIVROS QUE<br /><span className="text-[#C5973F]">TRANSFORMAM</span>
            </h2>
          </div>
          <a href="https://www.amazon.com.br/s?k=altomir+rangel" target="_blank" rel="noopener noreferrer"
            className="reveal btn-outline self-center md:self-end min-h-[48px]">
            <BookOpen size={14} /> Ver todos
          </a>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {books.map((book) => {
            const badge = badges[book.slug]
            return (
              <div key={book.slug}
                className="reveal-left group flex flex-col bg-[#0F0F17] border border-white/6 hover:border-[#C5973F]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(197,151,63,0.12)]">

                {/* Cover */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#141420]">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F17]/70 via-transparent to-transparent" />

                  {/* Badge */}
                  {badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`font-inter text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                  )}

                  {/* Stars — visible on hover */}
                  <div className="absolute bottom-3 left-3 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-[#C5973F] text-[#C5973F]" />
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-5 flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3 className="font-bebas text-[15px] sm:text-xl text-white leading-tight group-hover:text-[#C5973F] transition-colors">
                    {book.title}
                  </h3>

                  {book.synopsis && (
                    <p className="hidden sm:block font-inter text-white/40 text-xs leading-relaxed line-clamp-2">
                      {book.synopsis}
                    </p>
                  )}

                  {/* Buy CTA */}
                  <div className="mt-auto pt-2 sm:pt-3">
                    {book.buyUrl ? (
                      <a href={book.buyUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#C5973F] hover:bg-[#d4a84a] text-black font-inter text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase py-2.5 sm:py-3 transition-colors duration-200">
                        <ShoppingCart size={11} className="flex-shrink-0" />
                        <span>Adquirir agora</span>
                      </a>
                    ) : (
                      <span className="block text-center font-inter text-[9px] text-white/20 tracking-[0.15em] uppercase py-2.5">
                        Em breve
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-10 md:mt-16 border border-[#C5973F]/20 bg-[#C5973F]/5 p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="font-bebas text-xl sm:text-2xl text-white">QUER ENCOMENDAR UM LIVRO?</p>
            <p className="font-inter text-white/40 text-sm mt-1">Entre em contato direto com nossa equipe.</p>
          </div>
          <a href="https://wa.me/5521999999999?text=Olá! Tenho interesse nos livros do Altomir Rangel."
            target="_blank" rel="noopener noreferrer"
            className="btn-gold flex-shrink-0 w-full sm:w-auto justify-center min-h-[48px]">
            Pedir pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
