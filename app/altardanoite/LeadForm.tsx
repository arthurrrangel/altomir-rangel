'use client'
import { useState, FormEvent, ReactNode } from 'react'

// Endpoint Google Apps Script -> grava na planilha "Leads - Altar de Oração" + envia e-mail
const SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzAX5BOQACwBTyy18hoJRLO7uQN0cJiYtT3L8LEp0AdwfK0wMTDWLWmViHLtrq8A0PI/exec'
// Grupo de WhatsApp (Comunidade de Oração)
const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/J1Ub3EcSuYLJbM2KphrTii'

const FIELD =
  'flex items-center gap-3 rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 shadow-sm transition-all duration-200 focus-within:border-[#D8A93A] focus-within:shadow-[0_0_0_3px_rgba(216,169,58,0.18)]'
const INPUT =
  'w-full bg-transparent font-inter text-[16px] text-[#14243B] placeholder:text-[#14243B]/40 outline-none'

function Field({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <label className={FIELD}>
      <span className="shrink-0 text-[#D8A93A]">{icon}</span>
      {children}
    </label>
  )
}

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
      await fetch(SHEETS_ENDPOINT, { method: 'POST', mode: 'no-cors', body })
    } catch {
      /* segue para o grupo mesmo se o envio falhar */
    }
    window.location.href = GRUPO_WHATSAPP
  }

  return (
    <div className="rounded-[26px] bg-[#F2ECDE] p-4 shadow-[0_28px_60px_-22px_rgba(0,0,0,0.65)] ring-1 ring-black/5 sm:p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Field icon={<UserIcon />}>
          <input name="nome" type="text" required placeholder="Nome completo" className={INPUT} />
        </Field>
        <Field icon={<WhatsIcon />}>
          <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD" className={INPUT} />
        </Field>
        <Field icon={<MailIcon />}>
          <input name="email" type="email" required placeholder="E-mail" className={INPUT} />
        </Field>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-1 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#D8A93A] py-[15px] font-bebas text-[20px] tracking-[0.14em] text-[#14243B] shadow-[0_12px_28px_-10px_rgba(216,169,58,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e2b954] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? 'Entrando...' : 'Quero participar'}
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#14243B] text-white">
            <ArrowIcon />
          </span>
        </button>

        <div className="mt-1.5 flex items-center justify-center gap-2 font-inter text-[12.5px] leading-tight text-[#14243B]/70">
          <ClockIcon />
          <span>Todo dia às 21h · YouTube + grupo no WhatsApp</span>
        </div>
      </form>
    </div>
  )
}

/* ---- ícones (SVG inline, sem dependências) ---- */
function UserIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" />
    </svg>
  )
}
function WhatsIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.2.1.4.1.6-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4.1.2.1.9-.1 1.4Z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}
