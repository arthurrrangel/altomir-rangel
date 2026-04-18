'use client'
import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

const links = [
  { label: 'VISÃO', href: '#visao' },
  { label: 'LIVROS', href: '#livros' },
  { label: 'YOUTUBE', href: '#youtube' },
  { label: 'CONTATO', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none select-none">
          <span className="font-bebas text-2xl text-cream tracking-widest">ALTOMIR</span>
          <span className="font-bebas text-2xl text-gold tracking-[0.35em] -mt-1">RANGEL</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="font-inter text-[11px] font-semibold tracking-[0.2em] text-cream/60 hover:text-gold transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#livros" className="btn-gold text-[11px] px-6 py-3">
            ADQUIRIR LIVROS
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-cream/70 hover:text-gold transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-100 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-inter text-sm font-semibold tracking-[0.18em] text-cream/60 hover:text-gold transition-colors py-1 border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="#livros" onClick={() => setOpen(false)} className="btn-gold text-center text-[11px] mt-2">
            ADQUIRIR LIVROS
          </a>
        </div>
      )}
    </header>
  )
}
