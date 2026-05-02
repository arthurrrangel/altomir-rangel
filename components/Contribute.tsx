"use client"
import { useEffect, useRef, useState } from 'react'
import { Copy, Check, Youtube, Star, Play } from 'lucide-react'

const PIX_KEY = 'riquezanoreino@gmail.com'


const testimonials = [
  {
    name: 'Carla Mendes',
    city: 'São Paulo, SP',
    initials: 'CM',
    featured: true,
    text: 'Uma amiga mandou esse vídeo às 11 da noite. Fui assistir "só um pouquinho" e fiquei até depois da meia-noite. O pior é que reconheci coisas em mim que não queria admitir. Tem semanas que volto nele.',
    videoId: 'PIMWrO-nw0U',
    videoTitle: 'O Ingrediente Secreto que Falta na Sua Fé',
  },
  {
    name: 'Roberto Faria',
    city: 'Belo Horizonte, MG',
    initials: 'RF',
    featured: false,
    text: 'Nunca imaginei que seria um pregador a falar isso. Mostrei pra minha equipe e virou pauta. Esse vídeo sobre sofrer calado chegou numa hora que eu precisava ouvir, não ler.',
    videoId: '43-bGX4MfGg',
    videoTitle: 'Pare de Sofrer Calado',
  },
  {
    name: 'Simone Costa',
    city: 'Recife, PE',
    initials: 'SC',
    featured: false,
    text: 'Joguei no grupo da célula sem nem falar nada. Uma hora depois todo mundo comentando. Esse sobre a mente tocou em coisas que a gente finge que não tem.',
    videoId: 'FVwvjO6AuNo',
    videoTitle: 'Por que Sua Mente Controla Seu Destino?',
  },
  {
    name: 'Marcos Alves',
    city: 'Goiânia, GO',
    initials: 'MA',
    featured: false,
    text: 'Minha esposa não queria assistir comigo no começo. Depois que viu esse sobre honra ela mesma foi buscar os outros. Mexeu com os dois de formas bem diferentes.',
    videoId: 'j1rYS5reC54',
    videoTitle: 'Honra que Transforma',
  },
  {
    name: 'Patrícia Lima',
    city: 'Curitiba, PR',
    initials: 'PL',
    featured: false,
    text: 'Achei pelo YouTube sem procurar, estava no automático. Parei pra ouvir e não consegui sair. Fala direto, sem rodeio, sem aquela coisa religiosa de enrolar.',
    videoId: 'C5Oi7Q_5nIY',
    videoTitle: '5 Sinais de uma Pessoa Falsa',
  },
  {
    name: 'André Souza',
    city: 'Manaus, AM',
    initials: 'AS',
    featured: false,
    text: 'Esse sobre milagre me deixou quieto uns dois dias. Mostrei pra um amigo que estava duvidando de Deus. A reação dele foi diferente do que eu esperava. Vale assistir com alguém.',
    videoId: 'MoM39WKTCyk',
    videoTitle: 'Milagre Existe, Mas Nem Todos Conseguem',
  },
]

function VideoRef({ videoId, videoTitle }: { videoId: string; videoTitle: string }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2.5 bg-white/3 border border-white/5 hover:border-red-500/20 hover:bg-white/5 transition-all duration-200 p-2.5 group/vid"
    >
      <div className="relative flex-shrink-0 w-14 h-10 overflow-hidden bg-black">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={videoTitle}
          className="w-full h-full object-cover opacity-60 group-hover/vid:opacity-85 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 bg-red-600/90 rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(220,38,38,0.6)]">
            <Play size={8} className="text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-inter text-[9px] font-bold tracking-[0.15em] text-red-400/70 uppercase mb-0.5 flex items-center gap-1">
          <Youtube size={8} /> Vídeo que transformou
        </p>
        <p className="font-inter text-[11px] text-white/40 group-hover/vid:text-white/65 transition-colors leading-snug line-clamp-1">
          {videoTitle}
        </p>
      </div>
    </a>
  )
}

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

  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <section ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0F0F17]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(197,151,63,0.06) 0%,transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal flex items-center justify-center md:justify-start mb-3">
          <span className="label">Depoimentos</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(38px,8vw,90px)] leading-none text-white text-center md:text-left mb-10 md:mb-14">
          VIDAS EDIFICADAS<br /><span className="text-[#C5973F]">E RENOVADAS</span>
        </h2>

        {/* Featured testimonial — full width */}
        <div className="reveal relative border border-[#C5973F]/20 bg-[#0A0A0F] overflow-hidden mb-4 group hover:border-[#C5973F]/40 transition-colors duration-300">
          {/* Gold accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C5973F]/80 via-[#C5973F] to-[#C5973F]/80" />
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{background:'radial-gradient(ellipse at left,rgba(197,151,63,0.05) 0%,transparent 60%)'}} />

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 sm:p-8 pl-8 sm:pl-10">
            {/* Left: quote */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_,s) => (
                  <Star key={s} size={12} className="fill-[#C5973F] text-[#C5973F]" />
                ))}
              </div>
              <p className="font-playfair text-[17px] sm:text-[20px] italic text-white/75 leading-relaxed">
                "{featured.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-[#C5973F]/15 border border-[#C5973F]/25 flex items-center justify-center flex-shrink-0">
                  <span className="font-inter text-[11px] font-bold text-[#C5973F]/80">{featured.initials}</span>
                </div>
                <div>
                  <p className="font-inter text-[13px] font-semibold text-white">{featured.name}</p>
                  <p className="font-inter text-[9px] text-white/25 tracking-[0.15em] uppercase mt-0.5">{featured.city}</p>
                </div>
              </div>
            </div>
            {/* Right: video */}
            <div className="md:w-64 flex flex-col justify-center">
              <VideoRef videoId={featured.videoId} videoTitle={featured.videoTitle} />
            </div>
          </div>
        </div>

        {/* Grid — remaining 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 md:mb-24">
          {rest.map((t, i) => (
            <div key={i}
              className={`reveal-left flex flex-col gap-4 border border-white/6 bg-[#0A0A0F] p-5 hover:border-[#C5973F]/25 hover:bg-[#0d0d14] transition-all duration-300 group ${i >= 2 ? 'hidden sm:flex' : ''}`}>

              <div className="flex gap-0.5">
                {[...Array(5)].map((_,s) => (
                  <Star key={s} size={10} className="fill-[#C5973F] text-[#C5973F]" />
                ))}
              </div>

              <p className="font-inter text-white/50 text-[13px] leading-relaxed flex-1">
                "{t.text}"
              </p>

              <VideoRef videoId={t.videoId} videoTitle={t.videoTitle} />

              <div className="flex items-center gap-3 pt-1 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-[#C5973F]/10 border border-[#C5973F]/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-inter text-[10px] font-bold text-[#C5973F]/60">{t.initials}</span>
                </div>
                <div>
                  <p className="font-inter text-[12px] font-semibold text-white">{t.name}</p>
                  <p className="font-inter text-[9px] text-white/25 tracking-[0.15em] uppercase mt-0.5">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contribution block */}
        <div className="reveal relative overflow-hidden border border-[#C5973F]/25">
          <div className="absolute inset-0 pointer-events-none"
            style={{background:'radial-gradient(ellipse at top left,rgba(197,151,63,0.10) 0%,transparent 55%)'}} />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5973F]/60 via-[#C5973F] to-[#C5973F]/60" />

          <div className="relative grid md:grid-cols-2 gap-0">

            {/* Left — mission narrative */}
            <div className="flex flex-col justify-center gap-5 px-8 py-10 md:px-12 md:py-14 border-b md:border-b-0 md:border-r border-white/6">
              <span className="font-inter text-[10px] font-bold tracking-[0.35em] text-[#C5973F] uppercase text-center md:text-left">
                Faça Parte
              </span>
              <h3 className="font-bebas text-[clamp(26px,4vw,44px)] leading-tight text-white text-center md:text-left">
                SEJA PARTE DO QUE<br />
                <span className="text-[#C5973F]">DEUS ESTÁ FAZENDO</span><br />
                ATRAVÉS DESSAS MENSAGENS.
              </h3>
              <p className="font-inter text-white/50 text-[14px] leading-relaxed text-center md:text-left">
                Cada vídeo publicado chega a pessoas buscando respostas, direção e fé. Pessoas que Deus está alcançando através dessas mensagens. Quando você contribui, seu nome está nessa história.
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
              <p className="font-inter text-white/35 text-[13px] text-center leading-relaxed">
                Se as mensagens te alcançaram, você pode fazer o mesmo por outras pessoas. Qualquer valor tem impacto.
              </p>

              <div className="flex gap-2 flex-wrap justify-center">
                {['R$ 10', 'R$ 25', 'R$ 50', 'R$ 100'].map(v => (
                  <span key={v}
                    className="font-inter text-[10px] font-bold tracking-[0.15em] text-white/30 border border-white/10 px-3 py-1.5">
                    {v}
                  </span>
                ))}
              </div>

              <div className="w-full border border-[#C5973F]/20 bg-black/50 px-5 py-4 flex flex-col gap-1 text-center">
                <span className="font-inter text-[9px] font-bold tracking-[0.35em] text-[#C5973F]/60 uppercase">
                  Chave PIX (E-mail)
                </span>
                <span className="font-inter text-[13px] sm:text-[14px] text-white/70 tracking-wide break-all">
                  {PIX_KEY}
                </span>
              </div>

              <button
                onClick={copyPix}
                className="flex items-center justify-center gap-2 w-full bg-[#C5973F] hover:bg-[#d4a84a] active:scale-95 text-black font-inter text-[11px] font-bold tracking-[0.25em] uppercase py-4 transition-all duration-200 min-h-[56px] shadow-[0_8px_40px_rgba(197,151,63,0.35)] hover:shadow-[0_12px_50px_rgba(197,151,63,0.50)]">
                {copied
                  ? <><Check size={14} /> CHAVE COPIADA!</>
                  : <><Copy size={14} /> CONTRIBUIR VIA PIX</>}
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
