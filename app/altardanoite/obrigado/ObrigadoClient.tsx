'use client'
import { useEffect, useState } from 'react'
import { GRUPO_WHATSAPP, LEAD_FLAG, loadMetaPixel, fbqTrack } from '../config'

const SEGUNDOS_REDIRECT = 1

export default function ObrigadoClient() {
  const [auto, setAuto] = useState(false)
  const [restante, setRestante] = useState(SEGUNDOS_REDIRECT)

  useEffect(() => {
    // Navegação SPA reaproveita o documento: o loader devolve false e o
    // PageView desta rota precisa ser disparado manualmente.
    const carregouAgora = loadMetaPixel()
    if (!carregouAgora) fbqTrack('PageView')

    // "Lead" dispara só pra quem veio do formulário (flag de sessão), nunca
    // pra acesso direto, refresh ou robô. Evita conversão falsa no Meta.
    let veioDoorm = false
    try {
      veioDoForm = sessionStorage.getItem(LEAD_FLAG) === '1'
      if (veioDoForm) sessionStorage.removeItem(LEAD_FLAG)
    } catch {
      /* noop */
    }
    if (veioDoForm) {
      fbqTrack('Lead')
      setAuto(true)
    }
  }, [])

  useEffect(() => {
    if (!auto) return
    const t = window.setInterval(() => {
      setRestante((r) => {
        if (r <= 1) {
          window.clearInterval(t)
          window.location.href = GRUPO_WHATSAPP
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [auto])

  return (
    <main className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#101F40] px-6 text-center text-white antialiased">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 32%, #16294d 0%, #101F40 68%)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[46svh]"
        style={{ background: 'radial-gradient(60% 46% at 50% 18%, rgba(226,176,99,0.16) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex w-full max-w-[460px] flex-col items-center">
        <span className="motion-safe:animate-[pop_.7s_cubic-bezier(0.22,1,0.36,1)_both] grid h-16 w-16 place-items-center rounded-full bg-[#E2B063] text-[#101F40] shadow-[0_16px_40px_-12px_rgba(226,176,99,0.8)]">
          <CheckIcon />
        </span>

        <h1 className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] mt-6 font-bebas leading-[1.02] text-[#F3F1EA] text-[clamp(32px,9vw,52px)]">
          Recebi <span className="text-[#E2B063]">seu pedido</span>
        </h1>

        <p className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] mt-4 font-inter text-[15px] leading-[1.7] text-white/75 sm:text-[16px]">
          Entre no canal de avisos para receber as palavras e os áudios do Pr. Altomir em primeira mão, e o aviso da <strong className="font-semibold text-white">oração ao vivo de domingo</strong>.
        </p>

        <a
          href={GRUPO_WHATSAPP}
          className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.45s_both] mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E2B063] py-[15px] font-bebas text-[20px] tracking-[0.14em] text-[#101F40] shadow-[0_12px_28px_-10px_rgba(226,176,99,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8bd77] active:translate-y-0"
        >
          Entrar no canal de avisos
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#101F40] text-white">
            <ArrowIcon />
          </span>
        </a>

        {auto && (
          <p aria-live="polite" className="mt-4 font-inter text-[13px] text-white/55">
            Levando você para o canal…
          </p>
        )}
      </div>

      <style>{`@keyframes reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}`}</style>
    </main>
  )
}

function CheckIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5 10 17.5 19 7" />
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
