'use client'
import { useState, FormEvent } from 'react'

const FORMSPREE = 'https://formspree.io/f/xrejpgqp'
// Grupo de WhatsApp (Comunidade de Oração)
const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/J1Ub3EcSuYLJbM2KphrTii'

const INPUT =
  'w-full border-b border-white/25 bg-transparent py-3 font-inter text-[16px] text-white placeholder:text-white/45 outline-none transition-colors duration-300 focus:border-[#D8A93A]'

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
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      <input type="hidden" name="_subject" value="Novo lead: Altar de Oração (Comunidade de Oração)" />
      <input type="hidden" name="origem" value="Altar de Oração" />

      <input name="nome" type="text" required placeholder="Nome completo" className={INPUT} />
      <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD" className={INPUT} />
      <input name="email" type="email" required placeholder="E-mail" className={INPUT} />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 w-full rounded-full bg-[#D8A93A] py-[18px] font-bebas text-[19px] tracking-[0.16em] text-[#0f1828] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e2b954] hover:shadow-[0_18px_40px_-12px_rgba(216,169,58,0.55)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? 'Entrando...' : 'Quero participar'}
      </button>

      <p className="font-inter text-[12px] tracking-wide text-white/40 text-center lg:text-left">
        Comunidade gratuita · você entra no grupo do WhatsApp
      </p>
    </form>
  )
}
