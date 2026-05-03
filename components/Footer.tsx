import { Youtube, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

const contacts = [
  {
    href: 'mailto:contato@ministerioarc.com',
    icon: Mail,
    label: 'E-mail',
    desc: 'Enviar mensagem',
    iconColor: 'text-[#C5973F]',
    borderHover: 'hover:border-[#C5973F]/35',
    bgHover: 'hover:bg-[#C5973F]/5',
  },
  {
    href: 'https://www.youtube.com/@altomirrangel',
    icon: Youtube,
    label: 'YouTube',
    desc: 'Assistir vídeos',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/35',
    bgHover: 'hover:bg-red-500/5',
    external: true,
  },
  {
    href: 'https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.',
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: 'Falar com a equipe',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-500/35',
    bgHover: 'hover:bg-green-500/5',
    external: true,
  },
]

const navLinks = [
  { href: '#visao', label: 'Visão & Propósito' },
  { href: '#livros', label: 'Livros' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-[#050508]">
      {/* Linha dourada topo */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C5973F]/50 to-transparent" />

      {/* CTA strip */}
      <div className="border-b border-white/4">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="font-bebas text-[clamp(22px,4vw,36px)] text-white leading-tight tracking-wide">
              ACOMPANHE O MINISTÉRIO
            </p>
            <p className="font-inter text-white/30 text-[12px] mt-1">
              Novos vídeos, mensagens e conteúdo toda semana no YouTube.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@altomirrangel?sub_confirmation=1"
            target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-inter text-[11px] font-black tracking-[0.2em] uppercase px-6 py-3.5 transition-all duration-200 shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_6px_28px_rgba(220,38,38,0.4)] active:scale-95"
          >
            <Youtube size={14} /> SE INSCREVER
          </a>
        </div>
      </div>

      {/* Grid principal */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div>
              <span className="font-bebas text-[30px] text-white tracking-[0.15em] block leading-none">ALTOMIR</span>
              <span className="font-inter text-[8px] text-[#C5973F] tracking-[0.6em] uppercase">RANGEL</span>
            </div>
            <p className="font-inter text-white/28 text-[12px] leading-relaxed max-w-[220px]">
              Pregador e autor de livros cristãos.<br />Empresário por profissão, servindo ao Reino por propósito.
            </p>
            <blockquote className="border-l-2 border-[#C5973F]/25 pl-3 max-w-[220px]">
              <p className="font-playfair text-[11px] italic text-white/22 leading-relaxed">
                "Tudo posso naquele que me fortalece."
              </p>
              <cite className="font-inter text-[9px] text-white/15 not-italic tracking-[0.2em] uppercase mt-1 block">Filipenses 4.13</cite>
            </blockquote>
          </div>

          {/* Navegação */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-inter text-[9px] font-black tracking-[0.35em] text-white/18 uppercase mb-5">Navegação</span>
            <div className="flex flex-col gap-0.5 w-full">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  className="group flex items-center gap-2 font-inter text-[13px] text-white/32 hover:text-white/80 transition-all duration-200 py-2 justify-center md:justify-start border-b border-white/4 last:border-0">
                  <span className="w-0 group-hover:w-4 h-px bg-[#C5973F] transition-all duration-300 flex-shrink-0" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-inter text-[9px] font-black tracking-[0.35em] text-white/18 uppercase mb-5">Contato</span>
            <div className="flex flex-col gap-2 w-full">
              {contacts.map(c => {
                const Icon = c.icon
                return (
                  <a
                    key={c.href}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-3 px-4 py-3.5 border border-white/6 ${c.borderHover} ${c.bgHover} transition-all duration-200`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center border border-white/8 group-hover:border-white/16 flex-shrink-0 transition-colors">
                      <Icon size={14} className={c.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-inter text-[12px] font-semibold text-white/50 group-hover:text-white/85 transition-colors leading-none">{c.label}</p>
                      <p className="font-inter text-[10px] text-white/18 group-hover:text-white/35 transition-colors mt-0.5">{c.desc}</p>
                    </div>
                    <ArrowUpRight size={12} className="text-white/12 group-hover:text-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </a>
                )
              })}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-5 border-t border-white/4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-inter text-[10px] text-white/16 tracking-wide">
            &copy; {year} Altomir Rangel. Todos os direitos reservados.
          </span>
          <span className="font-inter text-[10px] text-white/10 tracking-[0.2em] uppercase">
            Feito com fé e propósito
          </span>
        </div>
      </div>
    </footer>
  )
}
