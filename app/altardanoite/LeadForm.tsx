'use client'
import { useState, FormEvent } from 'react'
import { Send, Loader2 } from 'lucide-react'

const FORMSPREE = 'https://formspree.io/f/xrejpgqp'
// Link de convite do grupo de WhatsApp (Comunidade de Oração)
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
      className="relative flex flex-col gap-3.5 rounded-2xl border border-[#D8A93A]/30 bg-gradient-to-b from-[#243A5E] to-[#18283F] p-5 shadow-[0_30px_80px_-22px_rgba(0,0,0,0.75)] sm:p-6"
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A93A]/70 to-transparent" />

      <div className="mb-0.5">
        <p className="font-bebas text-[23px] leading-none tracking-wide text-white">Receba o convite</p>
        <p className="font-inter mt-1 text-[12.5px] text-white/55">Preencha e a gente te coloca no grupo de oração.</p>
      </div>

      <input type="hidden" name="_subject" value="Novo lead — Altar de Oração (Comunidade de Oração)" />
      <input type="hidden" name="origem" value="Altar de Oração" />

      <div className="flex flex-col gap-1.5">
        <label className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Nome completo</label>
        <input name="nome" type="text" required placeholder="Insira seu nome completo" className="input-dark min-h-[48px]" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">WhatsApp</label>
        <input name="whatsapp" type="tel" required placeholder="(DDD) 90000-0000" className="input-dark min-h-[48px]" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-inter text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">E-mail</label>
        <input name="email" type="email" required placeholder="seu@email.com" className="input-dark min-h-[48px]" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold mt-1 min-h-[54px] w-full justify-center gap-2 text-[12px] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? (
          <><Loader2 size={16} className="animate-spin" /> ENTRANDO...</>
        ) : (
          <>QUERO PARTICIPAR <Send size={15} /></>
        )}
      </button>

      <p className="font-inter text-center text-[11.5px] leading-relaxed text-white/35">
        Vagas abertas · 100% gratuito — é só entrar e orar com a gente.
      </p>
    </form>
  )
}
