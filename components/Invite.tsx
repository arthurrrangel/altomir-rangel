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
    <section ref={ref} className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0d06 0%, #141208 50%, #0f0d06 100%)' }}>

      {/* Gold glow center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(197,151,63,0.07) 0%, transparent 100%)' }} />

      {/* Top / bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold" />
          <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">Convite para Pregação</span>
          <div className="h-px w-8 bg-gold" />
        </div>

        <h2 className="reveal font-bebas text-[clamp(48px,8vw,100px)] leading-none text-cream mb-6">
          LEVE A PALAVRA<br />
          <span className="text-gold">PARA SUA IGREJA</span>
        </h2>

        <p className="reveal font-inter text-cream/45 text-base leading-relaxed max-w-xl mx-auto mb-12">
          Altomir Rangel atende convites para ministrar em igrejas, conferências e eventos cristãos
          em todo o Brasil. O ministério é realizado de forma voluntária, com dedicação total à Palavra de Deus.
        </p>

        {/* 3 features */}
        <div className="reveal grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-12 max-w-3xl mx-auto">
          {[
            { icon: Mic2, label: 'Pregações & Cultos', desc: 'Cultos, conferências e encontros de líderes' },
            { icon: Calendar, label: 'Eventos Especiais', desc: 'Retiros, congressos e congressos cristãos' },
            { icon: MapPin, label: 'Todo o Brasil', desc: 'Atendemos convites em qualquer estado' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-dark-100 p-8 flex flex-col items-center gap-3">
              <div className="w-10 h-10 border border-gold/25 flex items-center justify-center">
                <Icon size={18} className="text-gold" />
              </div>
              <h4 className="font-bebas text-lg text-cream tracking-wide">{label}</h4>
              <p className="font-inter text-cream/35 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal flex flex-wrap gap-4 justify-center">
          <a href="#contato" className="btn-gold">ENVIAR CONVITE →</a>
          <a href="https://wa.me/5521999999999?text=Olá! Gostaria de convidar o Altomir Rangel para pregar em nossa igreja."
            target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  )
}
