'use client'

import { useState, FormEvent } from 'react'
import { site } from '@/lib/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const buildText = () =>
    [
      `Olá, Altomir!`,
      subject ? `Assunto: ${subject}` : null,
      ``,
      `Nome: ${name || '(não informado)'}`,
      `E-mail: ${email || '(não informado)'}`,
      ``,
      message,
    ]
      .filter(Boolean)
      .join('\n')

  const onWhatsapp = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(buildText())
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, '_blank', 'noopener')
  }

  const onEmail = () => {
    const sub = encodeURIComponent(subject || 'Contato — via site')
    const body = encodeURIComponent(buildText())
    window.location.href = `mailto:${site.email}?subject=${sub}&body=${body}`
  }

  return (
    <section id="contato" className="py-32 md:py-44 bg-cream border-t border-linen">
      <div className="container-prose grid md:grid-cols-12 gap-16 md:gap-24">
        {/* Texto */}
        <div className="md:col-span-5">
          <h2 className="display-serif text-4xl md:text-5xl text-ink">
            Fale <span className="italic text-gold">conosco</span>.
          </h2>

          <p className="body-serif mt-6 text-lg md:text-xl text-ink-muted">
            Respondemos cada mensagem com calma. Envie pelo formulário ao lado ou
            pelos canais abaixo — o que for mais confortável para você.
          </p>

          <ul className="mt-12 space-y-5 body-serif text-lg">
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-baseline gap-4"
              >
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft w-24 shrink-0">
                  WhatsApp
                </span>
                <span className="text-ink group-hover:text-gold transition-colors">
                  Falar agora
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-baseline gap-4"
              >
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft w-24 shrink-0">
                  E-mail
                </span>
                <span className="text-ink group-hover:text-gold transition-colors">
                  {site.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-baseline gap-4"
              >
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft w-24 shrink-0">
                  Instagram
                </span>
                <span className="text-ink group-hover:text-gold transition-colors">
                  @{site.instagram}
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.youtubeUrl}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-baseline gap-4"
              >
                <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft w-24 shrink-0">
                  YouTube
                </span>
                <span className="text-ink group-hover:text-gold transition-colors">
                  {site.youtube}
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Formulário */}
        <form onSubmit={onWhatsapp} className="md:col-span-7">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            <label className="block">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft">
                Nome
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-line mt-1"
              />
            </label>

            <label className="block">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft">
                E-mail
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-line mt-1"
              />
            </label>
          </div>

          <label className="block mt-8">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft">
              Assunto
            </span>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="input-line mt-1"
              placeholder="Convite para pregar, livros, parceria…"
            />
          </label>

          <label className="block mt-8">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-soft">
              Mensagem
            </span>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-line mt-1 resize-none"
            />
          </label>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <button type="submit" className="btn-primary">
              Enviar via WhatsApp
            </button>
            <button
              type="button"
              onClick={onEmail}
              className="link-underline text-[0.7rem] tracking-[0.28em] uppercase"
            >
              Enviar por e-mail
            </button>
          </div>

          <p className="mt-8 text-xs text-ink-soft">
            Ao enviar, você concorda em ser respondido pelo canal escolhido. Não
            compartilhamos seus dados.
          </p>
        </form>
      </div>
    </section>
  )
}
