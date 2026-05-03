import { Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-black border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-8 md:gap-8 mb-10 md:mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <div>
              <span className="font-bebas text-3xl text-white tracking-widest block">ALTOMIR</span>
              <span className="font-inter text-[9px] text-[#C5973F] tracking-[0.5em] uppercase">RANGEL</span>
            </div>
            <p className="font-inter text-white/30 text-xs leading-relaxed max-w-[260px]">
              Pregador e autor de livros cristãos. Empresário por profissão, servindo ao Reino por propósito.
            </p>
          </div>

          {/* Links */}
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

          {/* Contact */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <span className="label text-[9px] mb-1">Contato</span>
            <a href="mailto:contato@altomirrangel.com.br"
              className="flex items-center justify-center md:justify-start gap-3 text-white/35 hover:text-[#C5973F] transition-colors min-h-[36px]">
              <Mail size={13} className="text-[#C5973F] flex-shrink-0" />
              <span className="font-inter text-xs">contato@altomirrangel.com.br</span>
            </a>
            <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-white/35 hover:text-red-400 transition-colors min-h-[36px]">
              <Youtube size={13} className="text-red-400 flex-shrink-0" />
              <span className="font-inter text-xs">@altomirrangel</span>
            </a>
            <a href="https://wa.me/5521994308382?text=Olá! Gostaria de entrar em contato com a equipe do Pr. Altomir Rangel." target="_blank" rel="noopener noreferrer"
              className="mt-1 btn-gold text-[10px] py-3 px-4 self-center md:self-start min-h-[44px]">
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2 text-center sm:text-left">
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
