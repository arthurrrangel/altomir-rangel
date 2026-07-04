'use client'
import { useState, FormEvent } from 'react'

// Endpoint Google Apps Script -> grava na planilha "Leads - Altar de Oração" + envia e-mail
const SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzAX5BOQACwBTyy18hoJRLO7uQN0cJiYtT3L8LEp0AdwfK0wMTDWLWmViHLtrq8A0PI/exec'
// Grupo de WhatsApp (Comunidade de Oração)
const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/J1Ub3EcSuYLJbM2KphrTii'

const INPUT =
  'w-full border-b border-white/25 bg-transparent py-2.5 font-inter text-[16px] text-white placeholder:text-white/45 outline-none transition-colors duration-300 focus:border-[#D8A93A] sm:py-3'

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'sending'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const body = new URLSearchParams({
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem('whatsapp') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      origem: 'Altar de Oração',
    })

    try {
      await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body,
      })
    } catch {
      // segue para o grupo mesmo se o envio falhar
    }
    window.location.href = GRUPO_WHATSAPP
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 sm:gap-5">
      <input name="nome" type="text" required placeholder="Nome completo" className={INPUT} />
      <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD" className={INPUT} />
      <input name="email" type="email" required placeholder="E-mail" className={INPUT} />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-3 w-full rounded-full bg-[#D8A93A] py-[16px] font-bebas text-[19px] tracking-[0.16em] text-[#0f1828] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e2b954] hover:shadow-[0_18px_40px_-12px_rgba(216,169,58,0.55)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-4 sm:py-[18px]"
      >
        {status === 'sending' ? 'Entrando...' : 'Quero participar'}
      </button>

      <p className="font-inter text-[12px] tracking-wide text-white/40 text-center lg:text-left">
        Comunidade gratuita · você entra no grupo do WhatsApp
      </p>
    </form>
  )
}
