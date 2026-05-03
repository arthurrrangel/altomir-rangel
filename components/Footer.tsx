import { Youtube, Mail, MessageCircle } from 'lucide-react'

const contacts = [
  {
    href: 'mailto:contato@altomirrangel.com.br',
    icon: Mail,
    label: 'E-mail',
    value: 'contato@altomirrangel.com.br',
    iconColor: 'text-[#C5973F]',
    borderHover: 'hover:border-[#C5973F]/40',
    bgHover: 'hover:bg-[#C5973F]/5',
    textHover: 'group-hover:text-[#C5973F]',
  },
  {
    href: 'https://www.youtube.com/@altomirrangel',
    icon: Youtube,
    label: 'YouTube',
    value: '@altomirrangel',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/40',
    bgHover: 'hover:bg-red-500/5',
    textHover: 'group-hover:text-red-400',
    external: true,
  },
  {
    href: 'https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+55 21 99430-8382',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-500/40',
    bgHover: 'hover:bg-green-500/5',
    textHover: 'group-hover:text-green-400',
    external: true,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-black">
      {/* Linha dourada separando do conteúdo acima */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C5973F]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10 md:mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <div>
              <span className="font-bebas text-3xl text-white tracking-widest block">ALTOMIR</span>
              <span className="font-inter text-[9px] text-[#C5973F] tracking-[0.5em] uppercase">RANGEL</span>
            </div>
            <p className="font-inter text-white/30 text-xs leading-relaxed max-w-[240px]">
              Pregador e autor de livros cristãos. Empresário por profissão, servindo ao Reino por propósito.
            </p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-2.5 items-center md:items-start text-center md:text-left">
            <span className="label text-[9px] mb-1">Navegação</span>
            {[
              { href: '#visao', label: 'Visão & Propósito' },
              { href: '#livros', label: 'Livros' },
              { href: '#youtube', label: 'YouTube' },
              { href: '#contato', label: 'Contato' },
            ].map(l => (
              <a key={l.href} href={l.href}
                className="font-inter text-xs text-white/35 hover:text-[#C5973F] transition-colors tracking-wide py-0.5">
                {l.label}
              </a>
            ))}
          </div>

          {/* Contato — cards */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="label text-[9px] mb-1">Contato</span>
            {contacts.map(c => {
              const Icon = c.icon
              return (
                <a
                  key={c.href}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className={`group w-full flex items-center gap-3 px-4 py-3 border border-white/8 ${c.borderHover} ${c.bgHover} transition-all duration-200`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center border border-white/10 flex-shrink-0 ${c.bgHover} transition-all duration-200`}>
                    <Icon size={14} className={c.iconColor} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-inter text-[9px] font-bold tracking-[0.2em] text-white/25 uppercase">{c.label}</span>
                    <span className={`font-inter text-[11px] text-white/45 ${c.textHover} transition-colors truncate`}>{c.value}</span>
                  </div>
                </a>
              )
            })}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-5 border-t border-[#C5973F]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span className="font-inter text-[10px] text-white/20 tracking-wide">
            &copy; {year} Altomir Rangel. Todos os direitos reservados.
          </span>
          <span className="font-inter text-[10px] text-white/15 tracking-wide">
            Feito com fé e propósito
          </span>
        </div>
      </div>
    </footer>
  )
}
