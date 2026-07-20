"use client"
import { useEffect, useRef, useState } from 'react'
import { Copy, Check, Youtube, Star, Play } from 'lucide-react'
import { contributeSection as cs } from '@/lib/content'
import { site } from '@/lib/site'

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
]

function VideoRef({ videoId, videoTitle }: { videoId: string; videoTitle: string }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2.5 bg-white/3 border border-white/5 hover:border-red-500/20 hover:bg-white/5 transition-all duration-200 p-2.5 group/vid"
    >
      <div className="relative flex-shrink-0 w-14 h-10 overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-60 group-hover/vid:opacity-85 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 bg-red-600/90 rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(220,38,38,0.6)]">
            <Play size={8} className="text-white fill-white ml-0.5" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-inter text-[9px] font-bold tracking-[0.15em] text-red-400/80 uppercase mb-0.5 flex items-center gap-1">
          <Youtube size={8} aria-hidden="true" /> Vídeo que transformou
        </p>
        <p className="font-inter text-[11px] text-white/70 group-hover/vid:text-white/90 transition-colors leading-snug line-clamp-1">
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
    navigator.clipboard.writeText(site.pixKey).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const featured = testimonials[0]
  const rest = testimonials.slice(1, 3)

  return (
    <section id="contribuir" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#1B2A44]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(216,169,58,0.06) 0%,transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Cabeçalho */}
        <div className="reveal flex items-center justify-center md:justify-start gap-3 mb-3">
          <div className="h-px w-8 bg-[#D8A93A]/45 hidden md:block" />
          <span className="label">{cs.label}</span>
        </div>
        <h2 className="reveal font-bebas text-[clamp(36px,6vw,78px)] leading-none text-white text-center md:text-left mb-10 md:mb-14">
          {cs.headline1}<br /><span className="text-[#D8A93A]">{cs.headlineGold}</span>
        </h2>

        {/* Depoimento em destaque */}
        <figure className="reveal relative border border-[#D8A93A]/20 bg-[#16243B] overflow-hidden mb-4 group hover:border-[#D8A93A]/40 transition-colors duration-300">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D8A93A]/80 via-[#D8A93A] to-[#D8A93A]/80" aria-hidden="true" />
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(ellipse at left,rgba(216,169,58,0.05) 0%,transparent 60%)' }}
          />

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 sm:p-8 pl-8 sm:pl-10">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={12} className="fill-[#D8A93A] text-[#D8A93A]" />
                ))}
              </div>
              <blockquote className="font-playfair text-[17px] sm:text-[20px] italic text-white/85 leading-relaxed">
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-[#D8A93A]/15 border border-[#D8A93A]/25 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="font-inter text-[11px] font-bold text-[#D8A93A]/90">{featured.initials}</span>
                </div>
                <div>
                  <p className="font-inter text-[13px] font-semibold text-white">{featured.name}</p>
                  <p className="font-inter text-[10px] text-white/60 tracking-[0.15em] uppercase mt-0.5">{featured.city}</p>
                </div>
              </figcaption>
            </div>
            <div className="md:w-64 flex flex-col justify-center">
              <VideoRef videoId={featured.videoId} videoTitle={featured.videoTitle} />
            </div>
          </div>
        </figure>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 md:mb-24">
          {rest.map((t, i) => (
            <figure
              key={i}
              className="reveal-left flex flex-col gap-4 border border-white/6 bg-[#16243B] p-5 hover:border-[#D8A93A]/25 hover:bg-[#192A45] transition-all duration-300 group"
            >
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={10} className="fill-[#D8A93A] text-[#D8A93A]" />
                ))}
              </div>

              <blockquote className="font-inter text-white/70 text-[13px] leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <VideoRef videoId={t.videoId} videoTitle={t.videoTitle} />

              <figcaption className="flex items-center gap-3 pt-1 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-[#D8A93A]/10 border border-[#D8A93A]/15 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="font-inter text-[10px] font-bold text-[#D8A93A]/80">{t.initials}</span>
                </div>
                <div>
                  <p className="font-inter text-[12px] font-semibold text-white">{t.name}</p>
                  <p className="font-inter text-[10px] text-white/60 tracking-[0.15em] uppercase mt-0.5">{t.city}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* ── BLOCO DE CONTRIBUIÇÃO ── */}
        <div className="reveal relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#142239 0%,#16243B 50%,#142239 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 40%,rgba(216,169,58,0.16) 0%,transparent 65%)' }} />
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg,transparent,#D8A93A,#F2CD63,#D8A93A,transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8A93A]/30 to-transparent" />

          <div className="relative px-6 sm:px-10 md:px-16 py-12 md:py-20 flex flex-col items-center gap-8 md:gap-10 text-center">

            <div className="max-w-2xl">
              <span className="font-inter text-[10px] font-bold tracking-[0.4em] text-[#D8A93A] uppercase block mb-4">{cs.supportLabel}</span>
              <h3 className="font-bebas text-[clamp(32px,7vw,68px)] leading-tight text-white mb-4">
                {cs.supportHeadline1}<br />
                <span className="text-[#D8A93A]" style={{ textShadow: '0 0 40px rgba(216,169,58,0.35)' }}>{cs.supportHeadlineGold}</span><br />
                {cs.supportHeadline2}
              </h3>
              <p className="font-inter text-white/70 text-[14px] sm:text-[15px] leading-relaxed max-w-lg mx-auto">
                {cs.supportText}
              </p>
            </div>

            {/* PIX: QR + chave */}
            <div className="w-full max-w-2xl flex flex-col sm:flex-row items-stretch justify-center gap-4">

              {/* QR Code */}
              <div className="flex flex-col items-center gap-3 border border-[#D8A93A]/35 px-6 py-5" style={{ background: 'linear-gradient(135deg,rgba(216,169,58,0.08),rgba(216,169,58,0.03))' }}>
                <span className="font-inter text-[10px] font-black tracking-[0.35em] text-[#D8A93A]/80 uppercase">PIX · QR Code</span>
                <div className="bg-white p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/pix-qr.svg" alt={`QR Code PIX para contribuição — chave ${site.pixKey}`} width={144} height={144} loading="lazy" />
                </div>
                <span className="font-inter text-[10px] text-white/70">Aponte a câmera do app do banco</span>
              </div>

              {/* Chave + botão */}
              <div className="flex-1 flex flex-col justify-center gap-4 max-w-md mx-auto sm:mx-0">
                <div className="relative border border-[#D8A93A]/35 overflow-hidden" style={{ background: 'linear-gradient(135deg,rgba(216,169,58,0.08),rgba(216,169,58,0.03))' }}>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8A93A]/50 to-transparent" />
                  <div className="px-6 py-5 flex flex-col gap-1 items-center">
                    <span className="font-inter text-[10px] font-black tracking-[0.4em] text-[#D8A93A]/80 uppercase">Chave PIX · E-mail</span>
                    <span className="font-inter text-[15px] sm:text-[17px] font-semibold text-white/95 tracking-wide break-all mt-1">{site.pixKey}</span>
                  </div>
                </div>

                <button
                  onClick={copyPix}
                  aria-live="polite"
                  className="relative flex items-center justify-center gap-3 w-full text-[#16243B] font-inter text-[12px] font-black tracking-[0.25em] uppercase py-5 transition-all duration-300 min-h-[60px] active:scale-[0.98] overflow-hidden"
                  style={{
                    background: copied
                      ? 'linear-gradient(135deg,#E9CD7B,#D8A93A)'
                      : 'linear-gradient(135deg,#E2B652,#D8A93A,#B8891E)',
                    boxShadow: copied
                      ? '0 8px 40px rgba(216,169,58,0.5)'
                      : '0 8px 40px rgba(216,169,58,0.4), 0 0 80px rgba(216,169,58,0.12)',
                  }}
                >
                  {copied
                    ? <><Check size={16} strokeWidth={3} aria-hidden="true" /> {cs.pixCopied}</>
                    : <><Copy size={15} aria-hidden="true" /> {cs.pixCta}</>}
                </button>

                <p className="font-inter text-[11px] text-white/65 text-center">
                  Banco &rarr; PIX &rarr; Pagar &rarr; Chave &rarr; Cole o e-mail
                </p>
              </div>
            </div>

            {/* Versículo */}
            <div className="max-w-sm">
              <p className="font-playfair text-[14px] italic text-white/55 leading-relaxed">
                &ldquo;{cs.verse}&rdquo;
              </p>
              <span className="font-inter text-[10px] text-white/55 tracking-[0.3em] uppercase mt-2 block">{cs.verseRef}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
