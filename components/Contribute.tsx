"use client"
import { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

const PIX_KEY = 'riquezanoreino@gmail.com'

const testimonials = [
  { name: 'Carla Mendes',  city: 'São Paulo — SP',      text: 'Estava num momento de seca espiritual quando encontrei o canal. Cada vídeo me trouxe de volta. Hoje acordo com vontade de ouvir a Palavra.' },
  { name: 'Roberto Faria', city: 'Belo Horizonte — MG', text: 'Como empresário, eu precisava de alguém que falasse de fé com os pés no chão. O Pr. Altomir faz isso como ninguém. Virou meu devocional da manhã.' },
  { name: 'Simone Costa',  city: 'Recife — PE',          text: 'Assisti o primeiro vídeo de madrugada, chorando. Saí com uma paz que não consigo explicar. Nunca mais parei de acompanhar.' },
  { name: 'Marcos Alves',  city: 'Goiânia — GO',         text: 'Ensina a Palavra sem enrolação. Minha família inteira assiste junta agora. O canal nos uniu e nos renovou como família.' },
  { name: 'Patrícia Lima', city: 'Curitiba — PR',         text: 'Depois de anos afastada da Igreja, foram os vídeos que me trouxeram de volta. Sem julgamento, só a Palavra. Gratidão eterna.' },
  { name: 'André Souza',   city: 'Manaus — AM',           text: 'Nunca pensei que ia chorar assistindo um YouTube. A mensagem sobre propósito me mudou por dentro. Compartilhei com todo o meu grupo da célula.' },
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(197,151,63,0.05) 0%,transparent 70%)'}} />

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

        {/* PIX block — two-column on desktop */}
        <div className="reveal relative overflow-hidden border border-[#C5973F]/25">
          {/* Gold glow top-left */}
          <div className="absolute inset-0 pointer-events-none"
            style={{background:'radial-gradient(ellipse at top left,rgba(197,151,63,0.12) 0%,transparent 55%)'}} />
          {/* Subtle gold line top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5973F]/60 via-[#C5973F] to-[#C5973F]/60" />

          <div className="relative grid md:grid-cols-2 gap-0">

            {/* Left — mission copy */}
            <div className="flex flex-col justify-center gap-5 px-8 py-10 md:px-12 md:py-14 border-b md:border-b-0 md:border-r border-white/6">
              <span className="font-inter text-[10px] font-bold tracking-[0.35em] text-[#C5973F] uppercase text-center md:text-left">
                Semeie neste ministério
              </span>
              <h3 className="font-bebas text-[clamp(26px,4vw,44px)] leading-tight text-white text-center md:text-left">
                ESTE CONTEÚDO É<br />
                <span className="text-[#C5973F]">GRATUITO PARA VOCÊ.</span><br />
                MAS TEM UM CUSTO.
              </h3>
              <p className="font-inter text-white/45 text-[14px] leading-relaxed text-center md:text-left">
                Cada pregação, cada vídeo publicado representa horas de dedicação à Palavra. Se você foi edificado, considere ser parte disso — qualquer semente tem valor eterno.
              </p>
              <blockquote className="border-l-2 border-[#C5973F]/50 pl-4 hidden md:block">
                <p className="font-playfair text-[13px] italic text-white/35 leading-relaxed">
                  "Aquele que semeia com generosidade, com generosidade também colherá."
                </p>
                <cite className="font-inter text-[10px] text-white/20 tracking-widest mt-1 block not-italic">
                  2 CORÍNTIOS 9:6
                </cite>
              </blockquote>
            </div>

            {/* Right — PIX action */}
            <div className="flex flex-col justify-center items-center gap-5 px-8 py-10 md:px-12 md:py-14">
              {/* Amount buttons hint */}
              <div className="flex gap-2 flex-wrap justify-center">
                {['R$ 10', 'R$ 25', 'R$ 50', 'R$ 100'].map(v => (
                  <span key={v}
                    className="font-inter text-[10px] font-bold tracking-[0.15em] text-white/30 border border-white/10 px-3 py-1.5">
                    {v}
                  </span>
                ))}
              </div>

              {/* PIX key box */}
              <div className="w-full border border-[#C5973F]/20 bg-black/50 px-5 py-4 flex flex-col gap-1 text-center">
                <span className="font-inter text-[9px] font-bold tracking-[0.35em] text-[#C5973F]/60 uppercase">
                  Chave PIX — E-mail
                </span>
                <span className="font-inter text-[13px] sm:text-[14px] text-white/70 tracking-wide break-all">
                  {PIX_KEY}
                </span>
              </div>

              {/* Copy button */}
              <button
                onClick={copyPix}
                className="flex items-center justify-center gap-2 w-full bg-[#C5973F] hover:bg-[#d4a84a] active:scale-95 text-black font-inter text-[11px] font-bold tracking-[0.25em] uppercase py-4 transition-all duration-200 min-h-[56px] shadow-[0_8px_40px_rgba(197,151,63,0.35)] hover:shadow-[0_12px_50px_rgba(197,151,63,0.50)]">
                {copied
                  ? <><Check size={14} /> CHAVE COPIADA!</>
                  : <><Copy size={14} /> COPIAR CHAVE PIX</>}
              </button>

              <p className="font-inter text-[11px] text-white/25 text-center leading-relaxed">
                Abra seu banco → PIX → Chave → Cole o e-mail acima
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
