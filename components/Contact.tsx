"use client"
import { useEffect, useRef, useState, FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const FORMSPREE_ID = 'xrejpgqp'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [subject, setSubject] = useState('')

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100))
      })
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        ;(e.target as HTMLFormElement).reset()
        setSubject('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse at bottom right, rgba(197,151,63,0.05) 0%, transparent 65%)'}}>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex items-center justify-center md:justify-start mb-3">
          <span className="label">Contato</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(32px,4.5vw,62px)] leading-none text-white mb-10 md:mb-14 text-center md:text-left">
          COMO PODEMOS<br /><span className="text-[#C5973F]">SERVIR A VOCÊ?</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">

          {/* Left info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* WhatsApp */}
            <a href="https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel."
              target="_blank" rel="noopener noreferrer"
              className="reveal-left flex items-center justify-center md:justify-start gap-3 bg-[#25D366]/8 border border-[#25D366]/20 px-5 py-4 text-[#25D366] font-inter text-sm font-bold hover:bg-[#25D366]/12 transition-colors min-h-[56px]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              FALAR VIA WHATSAPP
            </a>

            {/* Invite card */}
            <div className="reveal-left border-l-2 border-[#C5973F] bg-white/3 p-4 sm:p-5">
              <h4 className="font-bebas text-lg sm:text-xl text-white mb-1.5 text-center md:text-left">Convite para Ministrar</h4>
              <p className="font-inter text-white/35 text-xs leading-relaxed text-center md:text-left">
                Pregações, conferências e retiros cristãos. Informe a data, cidade e evento no formulário ao lado.
              </p>
            </div>
          </div>

          {/* Form */}
          {status === 'sent' ? (
            <div className="lg:col-span-3 flex flex-col items-center justify-center gap-4 py-16 text-center">
              <CheckCircle size={48} className="text-[#4ADE80]" />
              <h3 className="font-bebas text-3xl text-white">Mensagem Enviada!</h3>
              <p className="font-inter text-white/40 text-sm max-w-sm">
                Recebemos sua mensagem e responderemos em breve no e-mail informado.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 font-inter text-[11px] text-[#C5973F] hover:text-[#d4a84a] transition-colors tracking-widest uppercase"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
              <div className="reveal-right grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase text-center md:text-left">Nome</label>
                  <input type="text" name="nome" required placeholder="Seu nome completo" className="input-dark min-h-[48px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase text-center md:text-left">E-mail</label>
                  <input type="email" name="email" required placeholder="seu@email.com" className="input-dark min-h-[48px]" />
                </div>
              </div>
              <div className="reveal-right flex flex-col gap-2">
                <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase text-center md:text-left">Assunto</label>
                <select name="assunto" value={subject} onChange={e => setSubject(e.target.value)}
                  className="input-dark appearance-none cursor-pointer text-white/50 min-h-[48px]">
                  <option value="">Selecione o assunto</option>
                  <option value="convite">Convite para Pregação</option>
                  <option value="livro">Quero adquirir um livro</option>
                  <option value="parceria">Parceria</option>
                  <option value="testemunho">Compartilhar Testemunho</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="reveal-right flex flex-col gap-2">
                <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase text-center md:text-left">Mensagem</label>
                <textarea required name="mensagem" rows={4} placeholder="Escreva sua mensagem..."
                  className="input-dark resize-none" />
              </div>
              {status === 'error' && (
                <p className="font-inter text-[12px] text-red-400 text-center">
                  Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                </p>
              )}
              <div className="reveal-right">
                <button type="submit" disabled={status === 'sending'}
                  className="btn-gold w-full justify-center gap-2 text-[11px] min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending'
                    ? 'ENVIANDO...'
                    : <><Send size={13} /> ENVIAR MENSAGEM</>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
