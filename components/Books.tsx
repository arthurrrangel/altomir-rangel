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
    <section id="livros" ref={ref} className="relative py-28 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.04) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal flex items-center mb-4 justify-center md:justify-start">
              <span className="label">Livros do Autor</span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white text-center md:text-left">
              LIVROS QUE<br /><span className="text-[#C5973F]">TRANSFORMAM</span>
            </h2>
          </div>
          <a href="https://www.amazon.com.br/s?k=altomir+rangel" target="_blank" rel="noopener noreferrer"
            className="reveal btn-outline self-center md:self-end">
            <BookOpen size={14} /> Ver todos
          </a>
        </div>

        {/* Books grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {books.map((book) => (
            <div key={book.slug} className="reveal-left group flex flex-col bg-[#0F0F17] border border-white/6 hover:border-[#C5973F]/40 transition-all duration-500">
              {/* Cover */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#141420]">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F17]/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-bebas text-xl text-white leading-tight group-hover:text-[#C5973F] transition-colors">{book.title}</h3>
                {book.synopsis && (
                  <p className="font-inter text-white/40 text-xs leading-relaxed line-clamp-3">{book.synopsis}</p>
                )}
                <div className="mt-auto pt-3">
                  {book.buyUrl ? (
                    <a href={book.buyUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between text-[#C5973F] hover:text-white transition-colors">
                      <span className="font-inter text-[10px] font-bold tracking-[0.2em] uppercase">Adquirir Livro</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="font-inter text-[10px] text-white/20 tracking-[0.2em] uppercase">Em breve</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-16 border border-[#C5973F]/20 bg-[#C5973F]/5 p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-bebas text-2xl text-white">QUER ENCOMENDAR UM LIVRO?</p>
            <p className="font-inter text-white/40 text-sm mt-1">Entre em contato direto com nossa equipe.</p>
          </div>
          <a href="https://wa.me/5521999999999?text=Ola! Tenho interesse nos livros do Altomir Rangel."
            target="_blank" rel="noopener noreferrer" className="btn-gold flex-shrink-0">
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
