import { Youtube } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#050a14] border-t border-white/5 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-playfair text-2xl font-bold text-gold-400">Altomir Rangel</span>
            <span className="text-cream-100/30 text-xs tracking-widest uppercase">
              Empresário · Pregador · Autor
            </span>
            <p className="text-cream-100/40 text-sm max-w-xs text-center md:text-left mt-1">
              Levando a Palavra de Deus com fé, propósito e amor.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col items-center md:items-end gap-2">
            <span className="text-cream-100/30 text-xs tracking-widest uppercase mb-1">
              Navegação
            </span>
            {[
              ['Início', '#inicio'],
              ['Sobre', '#sobre'],
              ['Livros', '#livros'],
              ['YouTube', '#youtube'],
              ['Contato', '#contato'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-cream-100/50 hover:text-gold-400 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-cream-100/30 text-xs tracking-widest uppercase mb-1">
              Redes Sociais
            </span>
            <a
              href="https://www.youtube.com/@altomirrangel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-100/50 hover:text-red-400 text-sm transition-colors"
            >
              <Youtube size={14} />
              YouTube
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-cream-100/25 text-xs">
          <span>© {year} Altomir Rangel. Todos os direitos reservados.</span>
          <span className="font-playfair italic text-gold-500/30">
            &ldquo;A Palavra do Senhor permanece para sempre.&rdquo; — 1 Pe 1:25
          </span>
        </div>
      </div>
    </footer>
  )
}
