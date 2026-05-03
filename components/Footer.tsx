import { Mail, MessageCircle, Youtube, ArrowUpRight } from 'lucide-react'

const contacts = [
  {
    href: 'https://mail.google.com/mail/?view=cm&to=contato@ministerioarc.com',
    icon: Mail,
    label: 'E-mail',
    desc: 'Enviar mensagem',
    iconColor: 'text-[#C5973F]',
    borderHover: 'hover:border-[#C5973F]/40',
    bgHover: 'hover:bg-[#C5973F]/5',
    glow: 'rgba(197,151,63,0.06)',
    external: true,
  },
  {
    href: 'https://www.youtube.com/@altomirrangel',
    icon: Youtube,
    label: 'YouTube',
    desc: 'Assistir vídeos',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/40',
    bgHover: 'hover:bg-red-500/5',
    glow: 'rgba(220,38,38,0.06)',
    external: true,
  },
  {
    href: 'https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.',
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: 'Falar com a equipe',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-500/40',
    bgHover: 'hover:bg-green-500/5',
    glow: 'rgba(74,222,128,0.06)',
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
    <footer className="relative bg-[#0A0A0F] overflow-hidden">

      {/* Linha dourada topo — padrão do site */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C5973F]/40 to-transparent" />

      {/* Glow de fundo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(197,151,63,0.05) 0%, transparent 70%)' }} />

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-16 pb-8 md:pb-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-14 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div>
              <span className="font-bebas text-[30px] text-white tracking-[0.18em] leading-none block">ALTOMIR</span>
              <span className="font-inter text-[8px] text-[#C5973F] tracking-[0.65em] uppercase">RANGEL</span>
            </div>
            <p className="font-inter text-white/28 text-[12px] leading-[1.8] max-w-[210px]">
              Pregador e autor de livros cristãos. Empresário por profissão, servindo ao Reino por propósito.
            </p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col items-center md:items-start">
            <span className="label block mb-5">Navegação</span>
            <nav className="flex flex-col w-full">
              {navLinks.map((l, i) => (
                <a key={l.href} href={l.href}
                  className="group relative flex items-center justify-center md:justify-start gap-3 font-inter text-[13px] text-white/35 hover:text-white/85 transition-colors py-3 last:border-0">
                  <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[2px] bg-[#C5973F] transition-all duration-200" />
                  <span className="font-inter text-[10px] text-white/12 group-hover:text-[#C5973F]/50 transition-colors w-5 text-right flex-shrink-0 hidden md:block tabular-nums">
                    0{i + 1}
                  </span>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center md:items-start">
            <span className="label block mb-5">Contato</span>
            <div className="flex flex-col gap-2 w-full">
              {contacts.map(c => {
                const Icon = c.icon
                return (
                  <a
                    key={c.href}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className={`group relative flex items-center gap-3.5 px-4 py-4 border border-white/6 ${c.borderHover} ${c.bgHover} transition-all duration-200 overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at left center, ${c.glow} 0%, transparent 70%)` }} />
                    <div className="relative w-9 h-9 flex items-center justify-center border border-white/8 group-hover:border-white/18 flex-shrink-0 transition-colors">
                      <Icon size={15} className={c.iconColor} />
                    </div>
                    <div className="relative flex-1 min-w-0">
                      <p className="font-inter text-[12px] font-bold text-white/45 group-hover:text-white/90 transition-colors leading-none tracking-wide">{c.label}</p>
                      <p className="font-inter text-[10px] text-white/18 group-hover:text-white/40 transition-colors mt-1">{c.desc}</p>
                    </div>
                    <ArrowUpRight size={13} className="relative text-white/10 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                  </a>
                )
              })}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-inter text-[10px] text-white/15 tracking-wide">
            &copy; {year} Altomir Rangel. Todos os direitos reservados.
          </span>
          <span className="font-inter text-[10px] text-white/10 tracking-[0.25em] uppercase">
            Feito com fé e propósito
          </span>
        </div>
      </div>
    </footer>
  )
}
