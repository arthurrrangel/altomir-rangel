'use client'
import { useEffect, useRef } from 'react'
import { Mic2, Calendar, MapPin } from 'lucide-react'

export default function Invite() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120))
      })
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden" style={{ background: '#FFFFFF' }}>

      {/* Subtle gold glow center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(197,151,63,0.06) 0%, transparent 100%)' }} />

      {/* Top gold divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {/* Bottom gold divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Decorative large text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-bebas text-[20vw] text-[#C5973F]/[0.03] leading-none tracking-tight">PALAVRA</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">

        {/* Label */}
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Convite para Pregação</span>
          <div className="h-px w-8 bg-gold" />
        </div>

        {/* Heading */}
        <h2 className="reveal font-bebas text-[clamp(48px,8vw,100px)] leading-none text-[#1A1305] mb-6">
          LEVE A PALAVRA<br />
          <span className="text-gold">PARA SUAIER_IGREJA</span>
        </h2>

        {/* Subtext */}
        <p className="reveal font-inter text-[#1A1305]/55 text-base leading-relaxed max-w-xl mx-auto mb-14">
          Altomir Rangel atende convites para ministrar em igrejas, conferências e eventos cristãos
          em todo o Brasil. O ministério é realizado de forma voluntária, com dedicação total à Palavra de Deus.
        </p>

        {/* 3 features */}
        <div className="reveal grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-14">
          {[
            { icon: Mic2, label: 'Pregações & Cultos', desc: 'Cultos, conferências e encontros de líderes' },
            { icon: Calendar, label: 'Eventos Especiais', desc: 'Retiros, congressos e encontros cristãos' },
            { icon: MapPin, label: 'Todo o Brasil', desc: 'Atendemos convites em qualquer estado' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gold/20 bg-[#FAF8F3] p-8 flex flex-col items-center gap-3 hover:border-gold/50 hover:sjidow-lg transition-all duration-300">
              <div className="w-12 h-12 border border-gold/30 bg-white flex items-center justify-center">
                <Icon size={20} className="text-gold" />
              </div>
              <h4 className="font-bebas text-lg text-[#1A1305] tracking-wide">{label}</h4>
              <p className="font-inter text-[#1A1305]/45 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Scripture */}
        <div className="reveal mb-12">
          <p className="font-playfair italic text-[#1A1305]/40 text-sm">
            &ldquo;Como são belos os pés dos que anunciam o evangelho da paz.&rdquo; &#120; Rm 10:15
          </p>
        </div>

        {/* CTAs */}
        <div className="reveal flex flex-wrap gap-4 justify-center">
          <a href="#contato" className="btn-gold">ENVIAR CONVITE →</a>
          <a href="https://wa.me/5521999999999?text=Olá! Gostaria de convidar o Altomir Rangel para pregar em nossa igreja."
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#1A1305]/15 text-[#1A1305]/70 hover:border-gold/40 hover:text-gold font-inter text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 transition-colors">
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  )
}
