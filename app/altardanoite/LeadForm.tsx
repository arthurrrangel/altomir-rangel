'use client'
import { useState, useEffect, FormEvent, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { SHEETS_ENDPOINT, LEAD_FLAG, loadMetaPixel } from './config'

const FIELD =
  'flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 transition-all duration-200 focus-within:border-[#E2B063] focus-within:bg-white/[0.07] focus-within:shadow-[0_0_0_3px_rgba(226,176,99,0.15)]'
const INPUT =
  'w-full bg-transparent font-inter text-[16px] text-[#FBFBFC] placeholder:text-[#FBFBFC]/45 outline-none'

function Field({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <label className={FIELD}>
      <span className="shrink-0 text-[#E2B063]">{icon}</span>
      {children}
    </label>
  )
}

/** Formata "21999998888" -> "(21) 99999-8888" enquanto a pessoa digita. */
function maskWhatsApp(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

/** Aceita fixo (10 dígitos) e celular (11), DDD válido entre 11 e 99. */
function whatsAppValido(v: string) {
  const d = v.replace(/\D/g, '')
  if (d.length < 10 || d.length > 11) return false
  const ddd = Number(d.slice(0, 2))
  return ddd >= 11 && ddd <= 99
}

export default function LeadForm() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'sending'>('idle')
  const [whats, setWhats] = useState('')
  const [erro, setErro] = useState<string | null>(null)

  // Carrega o Pixel do Meta e registra o PageView da landing
  useEffect(() => {
    loadMetaPixel()
  }, [])

  // Pré-carrega a rota de confirmação pra transição pós-submit ser instantânea
  useEffect(() => {
    router.prefetch('/altardanoite/obrigado')
  }, [router])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const nome = (form.elements.namedItem('nome') as HTMLInputElement).value.trim()
    const honeypot = (form.elements.namedItem('site') as HTMLInputElement).value
    const pedido = (form.elements.namedItem('pedido') as HTMLTextAreaElement).value.trim().slice(0, 500)

    if (!whatsAppValido(whats)) {
      setErro('Confira o WhatsApp: DDD + número. Ex.: (21) 99999-8888')
      return
    }
    setErro(null)
    setStatus('sending')

    // Origem do lead a partir dos UTMs do anúncio (coluna "Origem" da planilha)
    const q = new URLSearchParams(window.location.search)
    const utms = [q.get('utm_source'), q.get('utm_campaign'), q.get('utm_content')]
      .filter(Boolean)
      .join(' / ')
    const origem = utms || (q.get('fbclid') ? 'Meta Ads (fbclid)' : 'Altar de Oração (direto)')

    // PONTE TEMPORÁRIA: o Apps Script ainda não tem coluna "pedido"; anexar ao
    // campo "origem" garante que nenhum pedido se perca. Quando a coluna existir
    // no script, remover o sufixo abaixo e manter só o parâmetro dedicado.
    const origemComPedido = pedido ? `${origem} · Pedido: ${pedido}` : origem
    const body = new URLSearchParams({ nome, whatsapp: whats, pedido, origem: origemComPedido })

    // Honeypot preenchido = bot: não grava na planilha, mas segue o fluxo
    // normalmente pra não denunciar o filtro.
    if (!honeypot) {
      try {
        // keepalive: a requisição sobrevive mesmo se a página descarregar antes
        await fetch(SHEETS_ENDPOINT, { method: 'POST', mode: 'no-cors', keepalive: true, body })
      } catch {
        /* segue para a confirmação mesmo se o envio falhar */
      }
    }

    // Marca a sessão: o evento "Lead" do Pixel dispara em /obrigado, onde não
    // existe risco de a navegação externa cancelar o envio ao Meta.
    try {
      sessionStorage.setItem(LEAD_FLAG, '1')
    } catch {
      /* noop */
    }
    router.push('/altardanoite/obrigado')
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Field icon={<UserIcon />}>
          <input name="nome" type="text" required autoComplete="name" placeholder="Nome completo" className={INPUT} />
        </Field>
        <Field icon={<WhatsIcon />}>
          <input
            name="whatsapp"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="WhatsApp com DDD"
            value={whats}
            onChange={(ev) => {
              setWhats(maskWhatsApp(ev.target.value))
              if (erro) setErro(null)
            }}
            aria-invalid={erro ? true : undefined}
            className={INPUT}
          />
        </Field>
        <label className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 transition-all duration-200 focus-within:border-[#E2B063] focus-within:bg-white/[0.07] focus-within:shadow-[0_0_0_3px_rgba(226,176,99,0.15)]">
          <span className="mt-0.5 shrink-0 text-[#E2B063]"><BookIcon /></span>
          <textarea
            name="pedido"
            rows={3}
            maxLength={500}
            placeholder="Pelo que devemos orar por você? (opcional)"
            className="w-full resize-none bg-transparent font-inter text-[16px] leading-[1.5] text-[#FBFBFC] placeholder:text-[#FBFBFC]/45 outline-none"
          />
        </label>

        {/* Honeypot anti-bot: invisível pra pessoas, irresistível pra robôs */}
        <input
          name="site"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          defaultValue=""
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        />

        {erro && (
          <p role="alert" className="font-inter text-[13px] font-medium leading-snug text-[#F0A090]">
            {erro}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#E2B063] py-4 font-bebas text-[22px] tracking-[0.06em] text-[#101F40] shadow-[0_14px_30px_-12px_rgba(226,176,99,0.55)] transition duration-300 hover:bg-[#e8bd77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B063] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101F40] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Enviando…' : 'Quero receber oração'}
          <ArrowIcon />
        </button>

        <div className="mt-1.5 flex items-center justify-center gap-2 font-inter text-[12.5px] leading-tight text-[#FBFBFC]/55">
          <ClockIcon />
          <span>Oração diária no grupo · ao vivo aos domingos</span>
        </div>
        <p className="text-center font-inter text-[11.5px] leading-snug text-[#FBFBFC]/55">
          Seu contato fica só com o ministério, para o Altar de Oração.
        </p>
      </form>
    </div>
  )
}

/* ---- ícones (SVG inline, sem dependências) ---- */
function BookIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5v-2Z" />
      <path d="M6.5 19H19" />
    </svg>
  )
}
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
      <path d="M12 7v5l3 2"/>
    </svg>
  )
}
