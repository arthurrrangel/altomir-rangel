import { Mail, MessageCircle, Youtube } from 'lucide-react'

const contacts = [
  {
    href: 'https://mail.google.com/mail/?view=cm&to=contato@ministerioarc.com',
    icon: Mail,
    label: 'E-mail',
    desc: 'contato@ministerioarc.com',
    iconColor: 'text-[#C5973F]',
    borderHover: 'hover:border-[#C5973F]/35',
    glow: 'rgba(197,151,63,0.08)',
  },
  {
    href: 'https://www.youtube.com/@altomirrangel',
    icon: Youtube,
    label: 'YouTube',
    desc: '@altomirrangel',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/35',
    glow: 'rgba(239,68,68,0.08)',
  },
  {
    href: 'https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.',
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: '+55 21 99430-8382',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-500/35',
    glow: 'rgba(74,222,128,0.08)',
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
    <footer className="relative bg-[#07070D] overflow-hidden">

      {/* Linha dourada topo */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C5973F]/50 to-transparent" />

      {/* Glows de ambiente */}
      <div className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(197,151,63,0.04) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(197,151,63,0.03) 0%, transparent 65%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-14 md:pt-20 pb-12 md:pb-16">

          {/* Brand — 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">

            {/* Logo */}
            <div className="flex flex-col">
              <span className="font-bebas text-[38px] text-white tracking-[0.2em] leading-none">ALTOMIR</span>
              <div className="flex items-center gap-2 justify-center lg:justify-start mt-0.5">
                <div className="h-px w-6 bg-[#C5973F]" />
                <span className="font-inter text-[9px] text-[#C5973F] tracking-[0.55em] uppercase">RANGEL</span>
                <div className="h-px w-6 bg-[#C5973F]" />
              </div>
            </div>

            {/* Bio */}
            <p className="font-inter text-white/35 text-[13px] leading-[1.85] max-w-[240px]">
              Pregador, autor e empresário. Servindo ao Reino através da Palavra que transforma vidas.
            </p>

          </div>

          {/* Spacer col */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Navegação — 3 cols */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <span className="label block mb-6">Navegação</span>
            <nav className="flex flex-col w-full gap-0.5">
              {navLinks.map((l, i) => (
                <a key={l.href} href={l.href}
                  className="group relative flex items-center justify-center lg:justify-start gap-3 py-2.5 pl-0 lg:pl-3">
                  <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[2px] bg-[#C5973F] transition-all duration-200 rounded-r" />
                  <span className="font-inter text-[10px] text-white/15 group-hover:text-[#C5973F]/60 transition-colors tabular-nums hidden lg:block w-4 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <span className="font-inter text-[12px] tracking-wide text-white/40 group-hover:text-white/80 transition-colors duration-200">
                    {l.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contato — 4 cols */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <span className="label block mb-6">Contato</span>
            <div className="flex items-center gap-3">
              {contacts.map(c => {
                const Icon = c.icon
                return (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={c.label}
                    className={`group relative w-11 h-11 flex items-center justify-center border border-white/8 ${c.borderHover} transition-all duration-200 overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at center, ${c.glow} 0%, transparent 80%)` }} />
                    <Icon size={16} className={`relative ${c.iconColor} opacity-50 group-hover:opacity-100 transition-opacity duration-200`} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-inter text-[10px] text-white/18 tracking-wide">
            &copy; {year} Altomir Rangel &mdash; Todos os direitos reservados.
          </span>
          <span className="font-inter text-[9px] text-white/10 tracking-[0.3em] uppercase">
            Feito com fé e propósito
          </span>
        </div>

      </div>
    </footer>
  )
}
