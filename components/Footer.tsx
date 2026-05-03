import { Youtube, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

const contacts = [
  {
    href: 'mailto:contato@ministerioarc.com',
    icon: Mail,
    label: 'E-mail',
    desc: 'Enviar mensagem',
    iconColor: 'text-[#C5973F]',
    accent: '[#C5973F]',
    borderHover: 'hover:border-[#C5973F]/40',
    bgHover: 'hover:bg-[#C5973F]/6',
  },
  {
    href: 'https://www.youtube.com/@altomirrangel',
    icon: Youtube,
    label: 'YouTube',
    desc: 'Assistir vídeos',
    iconColor: 'text-red-400',
    accent: 'red-400',
    borderHover: 'hover:border-red-500/40',
    bgHover: 'hover:bg-red-500/6',
    external: true,
  },
  {
    href: 'https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.',
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: 'Falar com a equipe',
    iconColor: 'text-green-400',
    accent: 'green-400',
    borderHover: 'hover:border-green-500/40',
    bgHover: 'hover:bg-green-500/6',
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

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-8 md:pb-10">

        {/* Grid principal */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div>
              <span className="font-bebas text-[28px] text-white tracking-[0.15em] block leading-none">ALTOMIR</span>
              <span className="font-inter text-[8px] text-[#C5973F] tracking-[0.6em] uppercase">RANGEL</span>
            </div>
            <p className="font-inter text-white/30 text-[12px] leading-relaxed max-w-[220px]">
              Pregador e autor de livros cristãos. Empresário por profissão, servindo ao Reino por propósito.
            </p>
            <p className="font-playfair text-[11px] italic text-[#C5973F]/40 max-w-[220px] leading-relaxed border-l border-[#C5973F]/20 pl-3">
              "Tudo posso naquele que me fortalece."
            </p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-inter text-[9px] font-black tracking-[0.35em] text-white/20 uppercase mb-3">Navegação</span>
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                className="group flex items-center gap-1.5 font-inter text-[13px] text-white/35 hover:text-[#C5973F] transition-colors py-1.5 justify-center md:justify-start">
                <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 h-px bg-[#C5973F]" />
                {l.label}
              </a>
            ))}
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-inter text-[9px] font-black tracking-[0.35em] text-white/20 uppercase mb-1">Contato</span>
            {contacts.map(c => {
              const Icon = c.icon
              return (
                <a
                  key={c.href}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className={`group w-full flex items-center gap-3 px-4 py-3.5 border border-white/6 ${c.borderHover} ${c.bgHover} transition-all duration-200`}
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-white/8 group-hover:border-white/15 flex-shrink-0 transition-colors">
                    <Icon size={14} className={c.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-[12px] font-semibold text-white/50 group-hover:text-white/80 transition-colors leading-none">{c.label}</p>
                    <p className="font-inter text-[10px] text-white/20 group-hover:text-white/35 transition-colors mt-0.5">{c.desc}</p>
                  </div>
                  <ArrowUpRight size={12} className="text-white/15 group-hover:text-white/40 transition-colors flex-shrink-0" />
                </a>
              )
            })}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-inter text-[10px] text-white/18 tracking-wide">
            &copy; {year} Altomir Rangel. Todos os direitos reservados.
          </span>
          <span className="font-inter text-[10px] text-white/12 tracking-widest uppercase">
            Feito com fé e propósito
          </span>
        </div>
      </div>
    </footer>
  )
}
