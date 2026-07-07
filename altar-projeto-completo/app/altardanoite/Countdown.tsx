'use client'
import { useEffect, useState } from 'react'

/** Hora atual em São Paulo (o altar é às 21h no horário de Brasília). */
function agoraSP() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))
}

function estado() {
  const n = agoraSP()
  const h = n.getHours()
  if (h >= 21 && h < 22) return { texto: 'A oração das 21h já começou — entre e participe', vivo: true }
  const alvo = new Date(n)
  alvo.setHours(21, 0, 0, 0)
  if (h >= 22) alvo.setDate(alvo.getDate() + 1)
  const diff = alvo.getTime() - n.getTime()
  const hh = Math.floor(diff / 3_600_000)
  const mm = Math.ceil((diff % 3_600_000) / 60_000)
  const quando = h >= 22 ? 'amanhã às 21h' : 'hoje às 21h'
  const falta = hh > 0 ? `${hh}h${String(mm).padStart(2, '0')}` : `${mm} min`
  return { texto: `O altar acende ${quando} — faltam ${falta}`, vivo: false }
}

export default function Countdown() {
  const [s, setS] = useState<{ texto: string; vivo: boolean } | null>(null)

  useEffect(() => {
    setS(estado())
    const t = window.setInterval(() => setS(estado()), 30_000)
    return () => window.clearInterval(t)
  }, [])

  if (!s) return <span className="block h-[21px]" aria-hidden="true" />

  return (
    <p className="flex items-center gap-2 font-inter text-[12.5px] font-medium tracking-[0.02em] text-[#D8A93A] sm:text-[13.5px]">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        {s.vivo && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D8A93A] opacity-60" />}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D8A93A]" />
      </span>
      {s.texto}
    </p>
  )
}
