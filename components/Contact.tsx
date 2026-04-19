"use client"
import { useEffect, useRef, useState, FormEvent } from 'react'
import { Send, Mail, MapPin, Youtube } from 'lucide-react'

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
    <section id="contato" ref={ref} className="relative py-28 md:py-36 overflow-hidden bg-[#0A0A0F]">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse at bottom right, rgba(197,151,63,0.05) 0%, transparent 65%)'}}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#C5973F]" />
          <span className="label">Entre em Contato</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(48px,7vw,90px)] leading-none text-white mb-14">
          VAMOS CAMINHAR<br /><span className="text-[#C5973F]">JUNTOS</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-14">

          {/* Left info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <p className="reveal-left font-inter text-white/40 text-[15px] leading-loose">
              Quer encomendar um livro, convidar o Altomir para pregar, ou tem alguma duvida?
              Preencha o formulario e nossa equipe entra em contato em breve.
            </p>

            <div className="reveal-left flex flex-col gap-3">
              {[
                { icon: Mail, text: 'contato@altomirrangel.com.br' },
                { icon: MapPin, text: 'Brasil' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 text-white/40 text-sm">
                  <div className="w-9 h-9 border border-white/10 bg-white/3 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#C5973F]" />
                  </div>
                  <span className="font-inter">{text}</span>
                </div>
              ))}
              <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/40 hover:text-red-400 text-sm transition-colors">
                <div className="w-9 h-9 border border-red-500/20 bg-red-500/5 flex items-center justify-center flex-shrink-0">
                  <Youtube size={14} className="text-red-400" />
                </div>
                <span className="font-inter">@altomirrangel</span>
              </a>
            </div>

            {/* Invite card */}
            <div className="reveal-left border-l-2 border-[#C5973F] bg-white/3 p-5">
              <h4 className="font-bebas text-xl text-white mb-2">Convite para Pregacao</h4>
              <p className="font-inter text-white/35 text-xs leading-relaxed">
                O Altomir atende convites para ministrar em igrejas e conferencias cristas de forma
                voluntaria. Selecione "Convite para Pregacao" no formulario abaixo.
              </p>
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/5521999999999?text=Ola! Tenho interesse nos livros do Altomir Rangel."
              target="_blank" rel="noopener noreferrer"
              className="reveal-left flex items-center gap-3 bg-[#25D366]/8 border border-[#25D366]/20 px-5 py-4 text-[#25D366] font-inter text-sm font-bold hover:bg-[#25D366]/12 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              FALAR VIA WHATSAPP
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-5">
            <div className="reveal-right grid sm:grid-cols-2 gap-5">
              {['Nome', 'Email'].map(p => (
                <div key={p} className="flex flex-col gap-2">
                  <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">{p}</label>
                  <input type={p === 'Email' ? 'email' : 'text'} required
                    placeholder={p === 'Nome' ? 'Seu nome completo' : 'seu@email.com'}
                    className="input-dark" />
                </div>
              ))}
            </div>

            <div className="reveal-right flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">Assunto</label>
              <select value={subject} onChange={e => setSubject(e.target.value)}
                className="input-dark appearance-none cursor-pointer text-white/50">
                <option value="">Selecione o assunto</option>
                <option value="livro">Pedido de Livro</option>
                <option value="convite">Convite para Pregacao</option>
                <option value="parceria">Parceria</option>
                <option value="testemunho">Compartilhar Testemunho</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="reveal-right flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">Mensagem</label>
              <textarea required rows={6} placeholder="Escreva sua mensagem..."
                className="input-dark resize-none" />
            </div>

            <div className="reveal-right">
              <button type="submit" className="btn-gold w-full justify-center gap-2 text-[11px] py-4">
                {sent ? '✓ MENSAGEM ENVIADA!' : <><Send size={13} /> ENVIAR MENSAGEM</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
