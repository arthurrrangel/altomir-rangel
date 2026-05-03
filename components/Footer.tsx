import { Youtube, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

const contacts = [
  {
    href: 'mailto:contato@ministerioarc.com',
    icon: Mail,
    label: 'E-mail',
    desc: 'Enviar mensagem',
    iconColor: 'text-[#C5973F]',
    glowColor: 'rgba(197,151,63,0.15)',
    borderHover: 'hover:border-[#C5973F]/40',
    bgHover: 'hover:bg-[#C5973F]/6',
  },
  {
    href: 'https://www.youtube.com/@altomirrangel',
    icon: Youtube,
    label: 'YouTube',
    desc: 'Assistir vídeos',
    iconColor: 'text-red-400',
    glowColor: 'rgba(220,38,38,0.12)',
    borderHover: 'hover:border-red-500/40',
    bgHover: 'hover:bg-red-500/5',
    external: true,
  },
  {
    href: 'https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.',
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: 'Falar com a equipe',
    iconColor: 'text-green-400',
    glowColor: 'rgba(74,222,128,0.12)',
    borderHover: 'hover:border-green-500/40',
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
    <footer className="relative bg-[#04040A] overflow-hidden">

      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse at bottom, rgba(197,151,63,0.07) 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5973F]/60 to-transparent" />
      </div>

      {/* CTA strip — YouTube */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-inter text-[10px] font-black tracking-[0.4em] text-[#C5973F]/60 uppercase mb-2">Canal no YouTube</p>
            <p className="font-bebas text-[clamp(24px,4vw,40px)] text-white leading-none tracking-wide">
              NOVO VÍDEO TODO DIA
            </p>
            <p className="font-inter text-white/25 text-[12px] mt-2">
              Mensagens, ensinamentos e lives para edificar sua fé.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@altomirrangel?sub_confirmation=1"
            target="_blank" rel="noopener noreferrer"
            className="group flex-shrink-0 relative flex items-center gap-2.5 overflow-hidden text-white font-inter text-[11px] font-black tracking-[0.22em] uppercase px-7 py-4 transition-all duration-300 active:scale-95"
            style={{ background: 'linear-gradient(135deg,#dc2626,#b91c1c)', boxShadow: '0 4px 24px rgba(220,38,38,0.3)' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.12),transparent)' }} />
            <Youtube size={15} className="flex-shrink-0" />
            SE INSCREVER NO CANAL
          </a>
        </div>
      </div>

      {/* Grid principal */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-18 pb-8 md:pb-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bebas text-[32px] text-white tracking-[0.18em] leading-none">ALTOMIR</span>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="h-px flex-1 bg-gradient-to-r from-[#C5973F]/60 to-transparent hidden md:block" style={{width:'40px'}} />
                <span className="font-inter text-[8px] text-[#C5973F] tracking-[0.7em] uppercase">RANGEL</span>
              </div>
            </div>

            <p className="font-inter text-white/25 text-[12px] leading-[1.8] max-w-[200px]">
              Pregador e autor de livros cristãos. Empresário por profissão, servindo ao Reino por propósito.
            </p>

            {/* Versículo */}
            <div className="relative max-w-[200px]">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C5973F]/60 via-[#C5973F]/30 to-transparent" />
              <div className="pl-4">
                <p className="font-playfair text-[12px] italic text-white/20 leading-relaxed">
                  "Tudo posso naquele que me fortalece."
                </p>
                <span className="font-inter text-[9px] text-[#C5973F]/35 tracking-[0.25em] uppercase mt-2 block">Filipenses 4.13</span>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-inter text-[9px] font-black tracking-[0.4em] text-white/15 uppercase mb-6">Navegação</span>
            <nav className="flex flex-col w-full">
              {navLinks.map((l, i) => (
                <a key={l.href} href={l.href}
                  className="group relative flex items-center justify-center md:justify-start gap-3 font-inter text-[13px] text-white/30 hover:text-white/90 transition-all duration-250 py-3 border-b border-white/4 last:border-0 overflow-hidden">
                  <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[2px] bg-[#C5973F] transition-all duration-200" />
                  <span className="font-inter text-[10px] text-white/12 group-hover:text-[#C5973F]/50 transition-colors w-4 text-right flex-shrink-0 hidden md:block">
                    0{i + 1}
                  </span>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-inter text-[9px] font-black tracking-[0.4em] text-white/15 uppercase mb-6">Contato</span>
            <div className="flex flex-col gap-2.5 w-full">
              {contacts.map(c => {
                const Icon = c.icon
                return (
                  <a
                    key={c.href}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className={`group relative flex items-center gap-3.5 px-4 py-4 border border-white/6 ${c.borderHover} ${c.bgHover} transition-all duration-250 overflow-hidden`}
                  >
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at left center, ${c.glowColor} 0%, transparent 70%)` }} />

                    <div className="relative w-9 h-9 flex items-center justify-center border border-white/8 group-hover:border-white/20 flex-shrink-0 transition-colors bg-white/2 group-hover:bg-white/4">
                      <Icon size={15} className={c.iconColor} />
                    </div>
                    <div className="relative flex-1 min-w-0">
                      <p className="font-inter text-[12px] font-semibold text-white/45 group-hover:text-white/90 transition-colors leading-none">{c.label}</p>
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
        <div className="relative pt-6">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="font-inter text-[10px] text-white/14 tracking-wide">
              &copy; {year} Altomir Rangel. Todos os direitos reservados.
            </span>
            <span className="font-inter text-[10px] text-white/10 tracking-[0.25em] uppercase">
              Feito com fé e propósito
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
