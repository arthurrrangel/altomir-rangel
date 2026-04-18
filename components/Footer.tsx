import { Youtube } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-dark-100 border-t border-white/5">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-bebas text-3xl text-cream tracking-widest leading-none">ALTOMIR</div>
              <div className="font-bebas text-3xl text-gold tracking-[0.4em] leading-none">RANGEL</div>
            </div>
            <p className="font-inter text-cream/35 text-xs leading-relaxed max-w-xs">
              Empresário e servo voluntário do Reino de Deus. Pregando a Palavra com fé, propósito e amor.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-[10px] font-semibold tracking-[0.3em] text-gold/60 uppercase">Navegação</h4>
            <nav className="flex flex-col gap-2.5">
              {[['Visão & Propósito', '#visao'], ['Livros', '#livros'], ['YouTube', '#youtube'], ['Contato', '#contato']].map(([l, h]) => (
                <a key={h} href={h} className="font-inter text-sm text-cream/40 hover:text-gold transition-colors">{l}</a>
              ))}
            </nav>
          </div>

          {/* Social / support */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-[10px] font-semibold tracking-[0.3em] text-gold/60 uppercase">Acompanhe</h4>
            <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream/40 hover:text-red-400 transition-colors text-sm">
              <Youtube size={14} /> @altomirrangel
            </a>
            <div className="mt-2 border border-gold/10 p-4">
              <p className="font-inter text-[10px] text-gold/40 tracking-[0.1em] mb-1 uppercase">Apoie o ministério</p>
              <p className="font-inter text-xs text-cream/30 leading-relaxed">
                Ajude a levar a Palavra de Deus a mais pessoas.
              </p>
              <a href="#contato" className="font-inter text-xs text-gold/60 hover:text-gold transition-colors mt-2 block">
                Entrar em contato →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-white/5 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-cream/20 text-xs">© {year} Altomir Rangel. Todos os direitos reservados.</p>
          <p className="font-playfair italic text-gold/25 text-sm">
            &ldquo;A Palavra do Senhor permanece para sempre.&rdquo; — 1 Pe 1:25
          </p>
        </div>
      </div>
    </footer>
  )
}
