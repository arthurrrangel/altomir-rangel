'use client'
import { useState, FormEvent } from 'react'
import { User, Phone, Mail, ArrowRight, Loader2, CalendarClock } from 'lucide-react'

const FORMSPREE = 'https://formspree.io/f/xrejpgqp'
// Link de convite do grupo de WhatsApp (Comunidade de Oração)
const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/REPLACE_INVITE_CODE'

const INPUT =
  'w-full rounded-full border border-[#D9C9A4] bg-white/75 pl-[52px] pr-4 min-h-[58px] font-inter text-[16px] text-[#16243B] placeholder:text-[#9C8E6C] outline-none transition focus:border-[#C8922E] focus:bg-white focus:ring-2 focus:ring-[#D8A93A]/30'
const ICON = 'pointer-events-none absolute left-[18px] top-1/2 -translate-y-1/2 text-[#B79A63]'

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
      className="relative flex flex-col gap-4 rounded-[28px] border border-white/50 bg-[#F4EDDF] p-6 shadow-[0_34px_90px_-22px_rgba(0,0,0,0.72)] sm:p-7"
    >
      <input type="hidden" name="_subject" value="Novo lead — Altar de Oração (Comunidade de Oração)" />
      <input type="hidden" name="origem" value="Altar de Oração" />

      <div className="relative">
        <User size={19} className={ICON} />
        <input name="nome" type="text" required placeholder="Nome completo" className={INPUT} />
      </div>

      <div className="relative">
        <Phone size={19} className={ICON} />
        <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD" className={INPUT} />
      </div>

      <div className="relative">
        <Mail size={19} className={ICON} />
        <input name="email" type="email" required placeholder="Seu melhor e-mail" className={INPUT} />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group relative mt-1 flex min-h-[62px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#E7BC5E] to-[#C6902C] font-bebas text-[21px] tracking-[0.12em] text-[#16243B] shadow-[0_14px_30px_-8px_rgba(198,144,44,0.72)] transition hover:brightness-[1.04] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          <><Loader2 size={19} className="animate-spin" /> ENTRANDO...</>
        ) : (
          <>QUERO PARTICIPAR</>
        )}
        <span className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#16243B] text-[#E7BC5E] transition-transform group-hover:translate-x-0.5">
          <ArrowRight size={19} />
        </span>
      </button>

      <div className="mt-0.5 flex items-center justify-center gap-2 text-[#6E6047]">
        <CalendarClock size={15} />
        <span className="font-inter text-[13px]">
          Ore com a gente <strong className="font-semibold text-[#3A2E14]">todos os dias</strong> · 100% gratuito.
        </span>
      </div>
    </form>
  )
}
