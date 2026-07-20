import { Mail, MessageCircle, Youtube } from 'lucide-react'
import { footer } from '@/lib/content'
import { site, whatsappLink } from '@/lib/site'

const contacts = [
  {
    href: `mailto:${site.email}`,
    icon: Mail,
    label: `E-mail: ${site.email}`,
    iconColor: 'text-[#D8A93A]',
    borderHover: 'hover:border-[#D8A93A]/35',
    glow: 'rgba(216,169,58,0.08)',
    external: false,
  },
  {
    href: site.youtubeUrl,
    icon: Youtube,
    label: `YouTube: ${site.youtubeHandle}`,
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/35',
    glow: 'rgba(239,68,68,0.08)',
    external: true,
  },
  {
    href: whatsappLink('Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel.'),
    icon: MessageCircle,
    label: `WhatsApp: ${site.whatsappDisplay}`,
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-500/35',
    glow: 'rgba(74,222,128,0.08)',
    external: true,
  },
]

const navLinks = [
  { href: '/#visao', label: 'Visão & Propósito' },
  { href: '/#livros', label: 'Livros' },
  { href: '/#youtube', label: 'YouTube' },
  { href: '/#contato', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-[#101B2C] overflow-hidden">

      {/* Linha dourada topo */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D8A93A]/50 to-transparent" />

      {/* Glows de ambiente */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(216,169,58,0.04) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(216,169,58,0.03) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-14 md:pt-20 pb-12 md:pb-16">

          {/* Marca — 4 col */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <a href="/#" className="flex flex-col">
              <span className="font-bebas text-[38px] text-white tracking-[0.2em] leading-none">ALTOMIR</span>
              <span className="flex items-center gap-2 justify-center lg:justify-start mt-0.5">
                <span className="h-px w-6 bg-[#D8A93A]" aria-hidden="true" />
                <span className="font-inter text-[10px] text-[#D8A93A] tracking-[0.55em] uppercase">RANGEL</span>
                <span className="h-px w-6 bg-[#D8A93A]" aria-hidden="true" />
              </span>
            </a>

            <p className="font-inter text-white/55 text-[13px] leading-[1.85] max-w-[260px]">
              {footer.tagline}
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Navegação — 3 col */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <span className="label block mb-6">Navegação</span>
            <nav className="flex flex-col w-full gap-0.5" aria-label="Navegação do rodapé">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative flex items-center justify-center lg:justify-start gap-3 py-2.5 pl-0 lg:pl-3"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[2px] bg-[#D8A93A] transition-all duration-200" aria-hidden="true" />
                  <span className="font-inter text-[10px] text-white/55 group-hover:text-[#D8A93A] transition-colors tabular-nums hidden lg:block w-4 flex-shrink-0" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="font-inter text-[12px] tracking-wide text-white/60 group-hover:text-white transition-colors duration-200">
                    {l.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contato — 4 col */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <span className="label block mb-6">Contato</span>
            <div className="flex items-center gap-3">
              {contacts.map(c => {
                const Icon = c.icon
                return (
                  <a
                    key={c.href}
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={c.label}
                    className={`group relative w-11 h-11 flex items-center justify-center border border-white/8 ${c.borderHover} transition-all duration-200 overflow-hidden`}
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at center, ${c.glow} 0%, transparent 80%)` }}
                      aria-hidden="true"
                    />
                    <Icon size={16} className={`relative ${c.iconColor} opacity-60 group-hover:opacity-100 transition-opacity duration-200`} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
            <p className="font-inter text-[12px] text-white/50 mt-5 text-center lg:text-left">
              <a href={`mailto:${site.email}`} className="hover:text-[#D8A93A] transition-colors">{site.email}</a>
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-inter text-[11px] text-white/60 tracking-wide">
            &copy; {year} {site.name} &mdash; Todos os direitos reservados.
          </span>
          <span className="font-inter text-[10px] text-white/50 tracking-[0.3em] uppercase">
            {footer.credit}
          </span>
        </div>

      </div>
    </footer>
  )
}
