'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-md border-b border-linen'
          : 'bg-transparent'
      }`}
    >
      <div className="container-prose flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          className="flex items-baseline gap-2 leading-none"
          aria-label={`${site.name} — Home`}
        >
          <span className="font-serif text-xl md:text-2xl text-ink">
            {site.name.split(' ')[0]}
          </span>
          <span className="font-serif italic text-xl md:text-2xl text-gold">
            {site.name.split(' ').slice(1).join(' ')}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.7rem] tracking-[0.28em] uppercase text-ink-muted hover:text-ink transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} strokeWidth={1.4} /> : <Menu size={22} strokeWidth={1.4} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-ivory border-t border-linen transition-[max-height] duration-500 ${
          open ? 'max-h-[520px]' : 'max-h-0'
        }`}
      >
        <nav className="container-prose py-10 flex flex-col gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.24em] uppercase text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
