'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Livros', href: '#livros' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gold-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-playfair text-xl font-bold text-gold-400 tracking-wide">
            Altomir Rangel
          </span>
          <span className="text-xs text-cream-200/50 tracking-widest uppercase">
            Pregador · Autor
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-cream-100/70 hover:text-gold-400 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <a
          href="#livros"
          className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-gold-500/20"
        >
          Adquira os Livros
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cream-100/80 hover:text-gold-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-gold-500/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream-100/80 hover:text-gold-400 transition-colors py-1 text-base border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#livros"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Adquira os Livros
          </a>
        </div>
      )}
    </header>
  )
}
