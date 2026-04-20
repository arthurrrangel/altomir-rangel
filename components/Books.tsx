"use client"
import { useEffect, useRef } from 'react'
import { ExternalLink, BookOpen } from 'lucide-react'
import Image from 'next/image'
import { books } from '@/lib/books'

export default function Books() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="livros" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.04) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-16">
          <div>
            <div className="reveal flex items-center mb-3">
              <span className="label">Livros do Autor</span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
              LIVROS QUE<br /><span className="text-[#C5973F]">TRANSFORMAM</span>
            </h2>
          </div>
          <a href="https://www.amazon.com.br/s?k=altomir+rangel" target="_blank" rel="noopener noreferrer"
            className="reveal btn-outline self-start md:self-end min-h-[48px]">
            <BookOpen size={14} /> Ver todos
          </a>
        </div>

        {/* Books grid — 2 col mobile, 3 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {books.map((book) => (
            <div key={book.slug} className="reveal-left group flex flex-col bg-[#0F0F17] border border-white/6 hover:border-[#C5973F]/40 transition-all duration-500">
              {/* Cover */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#141420]">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F17]/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-3 sm:p-5 flex flex-col gap-2 sm:gap-3 flex-1">
                <h3 className="font-bebas text-[15px] sm:text-xl text-white leading-tight group-hover:text-[#C5973F] transition-colors">{book.title}</h3>
                {/* Sinopse só em telas maiores */}
                {book.synopsis && (
                  <p className="hidden sm:block font-inter text-white/40 text-xs leading-relaxed line-clamp-3">{book.synopsis}</p>
                )}
                <div className="mt-auto pt-2 sm:pt-3">
                  {book.buyUrl ? (
                    <a href={book.buyUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between text-[#C5973F] hover:text-white transition-colors min-h-[36px]">
                      <span className="font-inter text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">Adquirir</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="font-inter text-[9px] text-white/20 tracking-[0.15em] uppercase">Em breve</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-10 md:mt-16 border border-[#C5973F]/20 bg-[#C5973F]/5 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <p className="font-bebas text-xl sm:text-2xl text-white">QUER ENCOMENDAR UM LIVRO?</p>
            <p className="font-inter text-white/40 text-sm mt-1">Entre em contato direto com nossa equipe.</p>
          </div>
          <a href="https://wa.me/5521999999999?text=Ola! Tenho interesse nos livros do Altomir Rangel."
            target="_blank" rel="noopener noreferrer"
            className="btn-gold flex-shrink-0 w-full sm:w-auto justify-center min-h-[48px]">
            Pedir pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
