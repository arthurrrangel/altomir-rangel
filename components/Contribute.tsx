"use client"
import { useEffect, useRef, useState } from 'react'
import { Copy, Check, Heart } from 'lucide-react'

const PIX_KEY = 'riquezanoreino@gmail.com'

const testimonials = [
  {
    name: 'Carla Mendes',
    city: 'São Paulo — SP',
    text: 'Estava num momento de seca espiritual quando encontrei o canal. Cada vídeo me trouxe de volta. Hoje acordo com vontade de ouvir a Palavra.',
  },
  {
    name: 'Roberto Faria',
    city: 'Belo Horizonte — MG',
    text: 'Como empresário, eu precisava de alguém que falasse de fé com os pés no chão. O Pr. Altomir faz isso como ninguém. Virou meu devocional da manhã.',
  },
  {
    name: 'Simone Costa',
    city: 'Recife — PE',
    text: 'Assisti o primeiro vídeo de madrugada, chorando. Saí com uma paz que não consigo explicar. Nunca mais parei de acompanhar.',
  },
  {
    name: 'Marcos Alves',
    city: 'Goiânia — GO',
    text: 'Ensina a Palavra sem enrolação. Minha família inteira assiste junta agora. O canal nos uniu e nos renovou como família.',
  },
  {
    name: 'Patrícia Lima',
    city: 'Curitiba — PR',
    text: 'Depois de anos afastada da Igreja, foram os vídeos que me trouxeram de volta. Sem julgamento, só a Palavra. Gratidão eterna.',
  },
  {
    name: 'André Souza',
    city: 'Manaus — AM',
    text: 'Nunca pensei que ia chorar assistindo um YouTube. A mensagem sobre propósito me mudou por dentro. Compartilhei com todo o meu grupo da célula.',
  },
]

export default function Contribute() {
  const ref = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 80))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  function copyPix() {
    navigator.clipboard.writeText(PIX_KEY)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <section ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0F0F17]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.06) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex items-center justify-center md:justify-start mb-3">
          <span className="label">Depoimentos</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(38px,8vw,90px)] leading-none text-white mb-10 md:mb-16 text-center md:text-left">
          VIDAS EDIFICADAS<br /><span className="text-[#C5973F]">E RENOVADAS</span>
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16 md:mb-24">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`reveal-left flex flex-col gap-3 border border-white/6 bg-[#0A0A0F] p-5 hover:border-[#C5973F]/25 transition-colors duration-300 ${i >= 3 ? 'hidden sm:flex' : ''}`}>
              <span className="font-playfair text-4xl text-[#C5973F]/30 leading-none select-none">"</span>
              <p className="font-inter text-white/50 text-[13px] sm:text-[14px] leading-loose flex-1 text-center">{t.text}</p>
              <div className="pt-2 border-t border-white/5 text-center">
                <p className="font-inter text-[12px] font-semibold text-white">{t.name}</p>
                <p className="font-inter text-[9px] text-white/25 tracking-[0.2em] uppercase mt-0.5">{t.city}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PIX — destaque total */}
        <div className="reveal relative overflow-hidden border border-[#C5973F]/30 bg-gradient-to-br from-[#C5973F]/8 to-transparent">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{background:'radial-gradient(ellipse at top left, rgba(197,151,63,0.10) 0%, transparent 60%)'}} />

          <div className="relative px-6 py-10 sm:px-12 sm:py-12 flex flex-col items-center gap-6 text-center">

            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-[#C5973F]/15 border border-[#C5973F]/30 flex items-center justify-center">
              <Heart size={22} className="text-[#C5973F] fill-[#C5973F]/40" />
            </div>

            {/* Copy */}
            <div className="flex flex-col gap-2 max-w-lg">
              <h3 className="font-bebas text-[clamp(24px,5vw,42px)] text-white leading-tight">
                ESTE MINISTÉRIO CHEGOU ATÉ VOCÊ<br />
                <span className="text-[#C5973F]">DE GRAÇA.</span>
              </h3>
              <p className="font-inter text-white/40 text-[14px] leading-relaxed">
                Se as mensagens edificaram sua vida, considere semear neste ministério e ajudar mais pessoas a serem alcançadas pela Palavra.
              </p>
            </div>

            {/* PIX key */}
            <div className="w-full max-w-sm flex flex-col gap-3">
              <div className="border border-[#C5973F]/20 bg-black/40 px-5 py-3 flex flex-col gap-0.5">
                <span className="font-inter text-[9px] font-bold tracking-[0.3em] text-[#C5973F]/60 uppercase">Chave PIX</span>
                <span className="font-inter text-[13px] text-white/70 tracking-wide break-all">{PIX_KEY}</span>
              </div>

              <button
                onClick={copyPix}
                className="flex items-center justify-center gap-2 bg-[#C5973F] hover:bg-[#d4a84a] active:scale-95 text-black font-inter text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-200 min-h-[52px] w-full shadow-[0_8px_30px_rgba(197,151,63,0.3)]"
              >
                {copied
                  ? <><Check size={13} /> CHAVE COPIADA!</>
                  : <><Copy size={13} /> COPIAR CHAVE PIX</>}
              </button>

              <p className="font-inter text-[10px] text-white/20 text-center">
                Qualquer valor é uma semente com propósito eterno.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
