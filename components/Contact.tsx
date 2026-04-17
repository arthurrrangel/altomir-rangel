'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, Mail, MapPin, Youtube } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [sent, setSent] = useState(false)

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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contato" ref={sectionRef} className="relative py-28 px-6 bg-navy-900">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-gold-500/4 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold-500/50" />
          <span className="text-gold-500 text-xs font-medium tracking-widest uppercase">
            Fale Conosco
          </span>
        </div>

        {/* Heading */}
        <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold text-cream-50 mb-12">
          Entre em <span className="text-gold-400">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <p className="reveal text-cream-100/60 text-base leading-relaxed">
              Quer encomendar um livro, convidar o Altomir para pregar em sua igreja, ou tirar alguma
              dúvida? Preencha o formulário e entraremos em contato em breve.
            </p>

            <div className="reveal space-y-4">
              <div className="flex items-center gap-3 text-cream-100/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-gold-400" />
                </div>
                <span>contato@altomirrangel.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-cream-100/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-gold-400" />
                </div>
                <span>Brasil</span>
              </div>
              <a
                href="https://www.youtube.com/@altomirrangel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream-100/60 hover:text-red-400 text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <Youtube size={14} className="text-red-400" />
                </div>
                <span>youtube.com/@altomirrangel</span>
              </a>
            </div>

            {/* Invite note */}
            <div className="reveal bg-gold-500/6 border border-gold-500/15 rounded-2xl p-5 mt-2">
              <h4 className="font-semibold text-gold-400 text-sm mb-1.5">
                Convite para Pregação
              </h4>
              <p className="text-cream-100/50 text-xs leading-relaxed">
                O Altomir atende convites para ministrar em igrejas, conferências e eventos cristãos.
                Envie o convite pelo formulário ao lado com as informações do evento.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="reveal grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-cream-100/50 text-xs font-medium">Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="bg-navy-800/60 border border-white/8 hover:border-gold-500/25 focus:border-gold-500/50 rounded-xl px-4 py-3 text-cream-100 text-sm outline-none transition-colors placeholder:text-cream-100/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-cream-100/50 text-xs font-medium">Email</label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="bg-navy-800/60 border border-white/8 hover:border-gold-500/25 focus:border-gold-500/50 rounded-xl px-4 py-3 text-cream-100 text-sm outline-none transition-colors placeholder:text-cream-100/20"
                />
              </div>
            </div>

            <div className="reveal flex flex-col gap-1.5">
              <label className="text-cream-100/50 text-xs font-medium">Assunto</label>
              <select
                className="bg-navy-800/60 border border-white/8 hover:border-gold-500/25 focus:border-gold-500/50 rounded-xl px-4 py-3 text-cream-100/80 text-sm outline-none transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Selecione o assunto</option>
                <option value="livro">Pedido de Livro</option>
                <option value="convite">Convite para Pregação</option>
                <option value="parceria">Parceria</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="reveal flex flex-col gap-1.5">
              <label className="text-cream-100/50 text-xs font-medium">Mensagem</label>
              <textarea
                required
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className="bg-navy-800/60 border border-white/8 hover:border-gold-500/25 focus:border-gold-500/50 rounded-xl px-4 py-3 text-cream-100 text-sm outline-none transition-colors placeholder:text-cream-100/20 resize-none"
              />
            </div>

            <button
              type="submit"
              className="reveal flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-gold-500/20 mt-1 text-sm"
            >
              {sent ? (
                <>✓ Mensagem enviada!</>
              ) : (
                <>
                  <Send size={14} />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
