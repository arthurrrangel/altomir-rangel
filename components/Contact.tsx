"use client"
import { useEffect, useRef, useState, FormEvent } from 'react'
import { Send, CheckCircle, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { contactSection as ct } from '@/lib/content'
import { whatsappLink } from '@/lib/site'

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

  const labelCls = 'font-inter text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase text-center md:text-left'

  return (
    <section id="contato" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#16243B]">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(216,169,58,0.05) 0%, transparent 65%)' }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Cabeçalho */}
        <div className="reveal flex items-center justify-center md:justify-start gap-3 mb-3">
          <div className="h-px w-8 bg-[#D8A93A]/45 hidden md:block" />
          <span className="label">{ct.label}</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(36px,6vw,78px)] leading-none text-white mb-10 md:mb-14 text-center md:text-left">
          {ct.headline1}<br /><span className="text-[#D8A93A]">{ct.headlineGold}</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">

          {/* Coluna esquerda */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* WhatsApp */}
            <a
              href={whatsappLink('Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.')}
              target="_blank" rel="noopener noreferrer"
              className="reveal-left flex items-center justify-center md:justify-start gap-3 bg-[#25D366]/8 border border-[#25D366]/25 px-5 py-4 text-[#3FE07C] font-inter text-sm font-bold hover:bg-[#25D366]/14 hover:border-[#25D366]/40 transition-all duration-200 min-h-[56px] uppercase tracking-[0.12em]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              {ct.whatsappCta}
            </a>

            {/* Convite para ministrar — foto real de pregação */}
            <div className="reveal-left relative overflow-hidden border border-white/8 min-h-[220px] flex flex-col justify-end group">
              <Image
                src="/altomir-pregando.jpg"
                alt="Altomir Rangel pregando em conferência"
                fill
                className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-700"
                style={{ objectPosition: 'center 40%' }}
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={72}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,27,44,0.95) 0%, rgba(16,27,44,0.35) 55%, rgba(16,27,44,0.15) 100%)' }} />
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D8A93A]" aria-hidden="true" />
              <div className="relative p-5 sm:p-6">
                <h3 className="font-bebas text-2xl sm:text-[26px] text-white mb-1.5 text-center md:text-left tracking-wide">
                  {ct.inviteTitle}
                </h3>
                <p className="font-inter text-white/75 text-[12.5px] leading-relaxed text-center md:text-left max-w-sm">
                  {ct.inviteText}
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          {status === 'sent' ? (
            <div className="lg:col-span-3 flex flex-col items-center justify-center gap-4 py-16 text-center" role="status">
              <CheckCircle size={48} className="text-[#D8A93A]" aria-hidden="true" />
              <h3 className="font-bebas text-3xl text-white">{ct.formSuccessTitle}</h3>
              <p className="font-inter text-white/60 text-sm max-w-sm">
                {ct.formSuccessText}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 font-inter text-[11px] text-[#D8A93A] hover:text-[#E2B652] transition-colors tracking-widest uppercase"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
              <div className="reveal-right grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contato-nome" className={labelCls}>Nome</label>
                  <input id="contato-nome" type="text" name="nome" required autoComplete="name" placeholder="Seu nome completo" className="input-dark min-h-[48px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contato-email" className={labelCls}>E-mail</label>
                  <input id="contato-email" type="email" name="email" required autoComplete="email" placeholder="seu@email.com" className="input-dark min-h-[48px]" />
                </div>
              </div>
              <div className="reveal-right flex flex-col gap-2">
                <label htmlFor="contato-assunto" className={labelCls}>Assunto</label>
                <div className="relative">
                  <select
                    id="contato-assunto"
                    name="assunto"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className={`input-dark appearance-none cursor-pointer min-h-[48px] pr-10 ${subject ? 'text-white' : 'text-white/50'}`}
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="convite">Convite para Pregação</option>
                    <option value="livro">Quero adquirir um livro</option>
                    <option value="parceria">Parceria</option>
                    <option value="testemunho">Compartilhar Testemunho</option>
                    <option value="outro">Outro</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/45 pointer-events-none" aria-hidden="true" />
                </div>
              </div>
              <div className="reveal-right flex flex-col gap-2">
                <label htmlFor="contato-mensagem" className={labelCls}>Mensagem</label>
                <textarea id="contato-mensagem" required name="mensagem" rows={4} placeholder="Escreva sua mensagem..." className="input-dark resize-none" />
              </div>
              {/* Honeypot anti-spam */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <div aria-live="polite">
                {status === 'error' && (
                  <p className="font-inter text-[12px] text-red-400 text-center" role="alert">
                    Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                  </p>
                )}
              </div>
              <div className="reveal-right">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold w-full justify-center gap-2 text-[11px] min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending'
                    ? 'ENVIANDO...'
                    : <><Send size={13} aria-hidden="true" /> ENVIAR MENSAGEM</>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
