"use client"
import { useEffect, useRef } from 'react'
import { ExternalLink, BookOpen } from 'lucide-react'
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

      {/* Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.04) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C5973F]" />
              <span className="label">Biblioteca Crista</span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(48px,7vw,96px)] leading-none text-white">
              LIVROS QUE<br /><span className="text-[#C5973F]">TRANSFORMAM</span>
            </h2>
          </div>
          <a href="https://www.amazon.com.br/s?k=altomir+rangel" target="_blank" rel="noopener noreferrer"
            className="reveal btn-outline self-start md:self-end">
            <BookOpen size={14} /> Ver todos
          </a>
        </div>

        {/* Books grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {books.map((book, i) => (
            <div key={book.slug} className="reveal-left group flex flex-col bg-[#0F0F17] border border-white/6 hover:border-[#C5973F]/40 transition-all duration-500">

              {/* Cover */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#141420] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bebas text-8xl text-[#C5973F]/8 select-none">{i + 1}</span>
                </div>
                <div className="relative z-10 text-center px-6">
                  <div className="w-12 h-px bg-[#C5973F]/40 mx-auto mb-4" />
                  <span className="font-bebas text-white/80 text-lg leading-tight block">{book.title}</span>
                  <div className="w-12 h-px bg-[#C5973F]/40 mx-auto mt-4" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F17] to-transparent opacity-60" />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-bebas text-xl text-white leading-tight group-hover:text-[#C5973F] transition-colors">{book.title}</h3>
                {book.description && (
                  <p className="font-inter text-white/40 text-xs leading-relaxed line-clamp-3">{book.description}</p>
                )}
                <div className="mt-auto pt-3 border-t border-white/6">
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
        <div className="reveal mt-16 border border-[#C5973F]/20 bg-[#C5973F]/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
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
