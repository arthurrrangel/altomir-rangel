'use client'
import { useState, FormEvent } from 'react'
import { Send, Loader2 } from 'lucide-react'

const FORMSPREE = 'https://formspree.io/f/xrejpgqp'
// Link de convite do grupo de WhatsApp (Comunidade de Oração — Altar da Noite)
const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/REPLACE_INVITE_CODE'

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'sending'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } catch {
      // segue para o grupo mesmo se o envio falhar
    }
    window.location.href = GRUPO_WHATSAPP
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-[#1B2A44]/85 backdrop-blur-sm border border-[#D8A93A]/25 rounded-2xl p-5 sm:p-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D8A93A]/60 to-transparent -mt-1 mb-1" />
      <input type="hidden" name="_subject" value="Novo lead — Altar da Noite (Comunidade de Oracao)" />
      <input type="hidden" name="origem" value="Altar da Noite" />

      <div className="flex flex-col gap-2">
        <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">Nome completo</label>
        <input name="nome" type="text" required placeholder="Insira seu nome completo" className="input-dark min-h-[48px]" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">WhatsApp</label>
        <input name="whatsapp" type="tel" required placeholder="(DDD) 90000-0000" className="input-dark min-h-[48px]" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-inter text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">E-mail</label>
        <input name="email" type="email" required placeholder="seu@email.com" className="input-dark min-h-[48px]" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold w-full justify-center gap-2 text-[12px] min-h-[54px] mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <><Loader2 size={16} className="animate-spin" /> ENTRANDO...</>
        ) : (
          <>QUERO PARTICIPAR <Send size={15} /></>
        )}
      </button>

      <p className="font-inter text-[12px] text-white/35 text-center leading-relaxed">
        Vagas abertas na comunidade de oração. 100% gratuito — é só entrar e orar com a gente.
      </p>
    </form>
  )
}
