"use client"
import { useEffect, useState } from 'react'

const links = [
  { href: '#visao', label: 'Visão' },
  { href: '#livros', label: 'Livros' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0F]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-bebas text-2xl text-white tracking-widest">ALTOMIR</span>
          <span className="font-inter text-[9px] text-[#C5973F] tracking-[0.4em] uppercase">RANGEL</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="font-inter text-[11px] font-semibold tracking-[0.25em] uppercase text-white/50 hover:text-[#C5973F] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="max-md:!hidden md:inline-flex btn-gold text-[10px] py-2.5 px-5">
          Falar Conosco
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2 w-6' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0A0A0F] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-inter text-sm font-semibold tracking-[0.3em] uppercase text-white/60 hover:text-[#C5973F] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="btn-gold text-center text-[11px]">
            Falar Conosco
          </a>
        </div>
      )}
    </header>
  )
}
