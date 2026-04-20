import { Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-black border-t border-white/6">
      {/* Gold top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C5973F] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-bebas text-3xl text-white tracking-widest block">ALTOMIR</span>
              <span className="font-inter text-[9px] text-[#C5973F] tracking-[0.5em] uppercase">RANGEL</span>
            </div>
            <p className="font-inter text-white/30 text-xs leading-relaxed">
              Empresário, pregador voluntário e autor de livros cristãos. Mais de 20 anos a serviço do Reino de Deus.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="label text-[9px] mb-1">Navegação</span>
            {[
              { href: '#visao', label: 'Visão &amp; Propósito' },
              { href: '#livros', label: 'Livros' },
              { href: '#youtube', label: 'YouTube' },
              { href: '#contato', label: 'Contato' },
            ].map(l => (
              <a key={l.href} href={l.href}
                className="font-inter text-xs text-white/35 hover:text-[#C5973F] transition-colors tracking-wide">
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="label text-[9px] mb-1">Contato</span>
            <a href="mailto:contato@altomirrangel.com.br"
              className="flex items-center gap-3 text-white/35 hover:text-[#C5973F] transition-colors">
              <Mail size={13} className="text-[#C5973F] flex-shrink-0" />
              <span className="font-inter text-xs">contato@altomirrangel.com.br</span>
            </a>
            <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/35 hover:text-red-400 transition-colors">
              <Youtube size={13} className="text-red-400 flex-shrink-0" />
              <span className="font-inter text-xs">@altomirrangel</span>
            </a>
            <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer"
              className="mt-2 btn-gold text-[10px] py-2.5 px-4 self-start">
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
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
