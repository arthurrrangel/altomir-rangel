"use client"
import { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

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
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden bg-[#0F0F17]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse, rgba(197,151,63,0.04) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex items-center justify-center mb-4">
          <span className="label">Depoimentos</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(38px,8vw,90px)] leading-none text-white text-center mb-16">
          VIDAS EDIFICADAS<br /><span className="text-[#C5973F]">E RENOVADAS</span>
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal-left flex flex-col gap-4 border border-white/6 bg-[#0A0A0F] p-6 hover:border-[#C5973F]/25 transition-colors duration-300">
              <span className="font-playfair text-5xl text-[#C5973F]/30 leading-none select-none">"</span>
              <p className="font-inter text-white/50 text-[14px] leading-loose flex-1">{t.text}</p>
              <div className="pt-2 border-t border-white/5">
                <p className="font-inter text-[13px] font-semibold text-white">{t.name}</p>
                <p className="font-inter text-[10px] text-white/25 tracking-[0.2em] uppercase mt-0.5">{t.city}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PIX */}
        <div className="reveal max-w-md mx-auto flex flex-col items-center gap-5 text-center">
          <p className="font-inter text-white/35 text-[13px] tracking-wide leading-relaxed">
            Se este canal tem sido edificação e renovação para você —
          </p>
          <div className="w-full border border-[#C5973F]/25 bg-[#C5973F]/4 px-8 py-7 flex flex-col items-center gap-4">
            <span className="font-inter text-[9px] font-bold tracking-[0.35em] text-[#C5973F]/70 uppercase">Contribuir via PIX</span>
            <span className="font-bebas text-xl text-white tracking-widest">{PIX_KEY}</span>
            <button
              onClick={copyPix}
              className="flex items-center gap-2 bg-[#C5973F] hover:bg-[#d4a84a] text-black font-inter text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-colors duration-200"
            >
              {copied
                ? <><Check size={12} /> CHAVE COPIADA!</>
                : <><Copy size={12} /> COPIAR CHAVE PIX</>
              }
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
