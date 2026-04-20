"use client"
import { useEffect, useRef, useState, FormEvent } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [sent, setSent] = useState(false)
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contato" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse at bottom right, rgba(197,151,63,0.05) 0%, transparent 65%)'}}>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex items-center mb-3">
          <span className="label">Entre em Contato</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(36px,8vw,90px)] leading-none text-white mb-10 md:mb-14">
          VAMOS CAMINHAR<br /><span className="text-[#C5973F]">JUNTOS</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">

          {/* Left info */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* WhatsApp */}
            <a href="https://wa.me/5521999999999?text=Ola! Tenho interesse nos livros do Altomir Rangel."
              target="_blank" rel="noopener noreferrer"
              className="reveal-left flex items-center gap-3 bg-[#25D366]/8 border border-[#25D366]/20 px-5 py-4 text-[#25D366] font-inter text-sm font-bold hover:bg-[#25D366]/12 transition-colors min-h-[56px]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              FALAR VIA WHATSAPP
            </a>

            <p className="reveal-left font-inter text-white/40 text-[14px] leading-loose">
              Quer encomendar um livro, convidar o Altomir para pregar, ou tem alguma dúvida? Preencha o formulário e nossa equipe entra em contato em breve.
            </p>

            {/* Invite card */}
            <div className="reveal-left border-l-2 border-[#C5973F] bg-white/3 p-4 sm:p-5">
              <h4 className="font-bebas text-lg sm:text-xl text-white mb-1.5">Convite para Pregação</h4>
              <p className="font-inter text-white/35 text-xs leading-relaxed">
                O Altomir atende convites para ministrar em igrejas e conferências cristãs.
                Selecione &quot;Convite para Pregação&quot; no formulário ao lado.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
            <div className="reveal-right grid sm:grid-cols-2 gap-4 sm:gap-5">
              {['Nome', 'Email'].map(p => (
                <div key={p} className="flex flex-col gap-2">
                  <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">{p}</label>
                  <input type={p === 'Email' ? 'email' : 'text'} required
                    placeholder={p === 'Nome' ? 'Seu nome completo' : 'seu@email.com'}
                    className="input-dark min-h-[48px]" />
                </div>
              ))}
            </div>
            <div className="reveal-right flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">Assunto</label>
              <select value={subject} onChange={e => setSubject(e.target.value)}
                className="input-dark appearance-none cursor-pointer text-white/50 min-h-[48px]">
                <option value="">Selecione o assunto</option>
                <option value="livro">Pedido de Livro</option>
                <option value="convite">Convite para Pregação</option>
                <option value="parceria">Parceria</option>
                <option value="testemunho">Compartilhar Testemunho</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="reveal-right flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">Mensagem</label>
              <textarea required rows={5} placeholder="Escreva sua mensagem..."
                className="input-dark resize-none" />
            </div>
            <div className="reveal-right">
              <button type="submit" className="btn-gold w-full justify-center gap-2 text-[11px] min-h-[52px]">
                {sent ? '✓ MENSAGEM ENVIADA!' : <><Send size={13} /> ENVIAR MENSAGEM</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
