import Link from 'next/link'
import { site, navLinks } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ivory border-t border-linen pt-24 pb-12">
      <div className="container-prose">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <Link href="/" className="flex items-baseline gap-2 leading-none">
              <span className="font-serif text-2xl md:text-3xl text-ink">
                {site.name.split(' ')[0]}
              </span>
              <span className="font-serif italic text-2xl md:text-3xl text-gold">
                {site.name.split(' ').slice(1).join(' ')}
              </span>
            </Link>

            <p className="body-serif mt-6 text-lg text-ink-muted max-w-md">
              {site.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.65rem] tracking-[0.32em] uppercase text-ink-soft">
              Navegar
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-ink-muted hover:text-ink transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.65rem] tracking-[0.32em] uppercase text-ink-soft">
              Acompanhe
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.youtubeUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${site.instagram}`}
                  target="_blank"
                  rel="noopener"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-linen flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-soft">
            © {year} {site.name}. {site.ministry}.
          </p>
          <p className="text-xs text-ink-soft italic font-serif">
            "Que todo o meu ser louve o Senhor." — Salmos 103:1
          </p>
        </div>
      </div>
    </footer>
  )
}
