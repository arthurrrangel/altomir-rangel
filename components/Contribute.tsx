import Link from 'next/link'
import { site } from '@/lib/site'

const paths = [
  {
    title: 'Sua igreja',
    text:
      'Abra as portas para uma pregação. Cultos, conferências, retiros e encontros em todo o Brasil.',
    cta: 'Conversar sobre uma data',
    href: '#contato',
    external: false,
  },
  {
    title: 'Sua estante',
    text:
      'Leve os livros a quem precisa. Presentei, distribua no ministério, forme grupos de leitura.',
    cta: 'Conhecer os livros',
    href: '#livros',
    external: false,
  },
  {
    title: 'Suas orações',
    text:
      'Cubra esta obra em oração. Acompanhe o canal e as redes, compartilhe uma mensagem com quem precisa ouvir.',
    cta: 'Acompanhar o ministério',
    href: site.youtubeUrl,
    external: true,
  },
]

export default function Contribute() {
  return (
    <section
      id="contribuir"
      className="py-32 md:py-48 bg-ivory border-t border-linen"
    >
      <div className="container-prose">
        <div className="max-w-2xl">
          <h2 className="display-serif text-4xl md:text-5xl text-ink leading-[1.08]">
            Três formas de caminhar <span className="italic text-gold">juntos</span>.
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-x-16 gap-y-14">
          {paths.map((p) => (
            <div key={p.title} className="flex flex-col">
              <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                {p.title}
              </h3>
              <p className="body-serif mt-5 text-lg md:text-xl text-ink-muted flex-1">
                {p.text}
              </p>
              <Link
                href={p.href}
                target={p.external ? '_blank' : undefined}
                rel={p.external ? 'noopener' : undefined}
                className="link-underline mt-10 text-[0.7rem] tracking-[0.28em] uppercase self-start"
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-2xl">
          <p className="font-serif italic text-2xl md:text-3xl text-ink leading-snug">
            "Cada um contribua segundo propôs no seu coração; não com tristeza ou por
            necessidade; porque Deus ama ao que dá com alegria."
          </p>
          <p className="mt-5 text-[0.7rem] tracking-[0.34em] uppercase text-gold">
            2 Coríntios 9:7
          </p>
        </div>
      </div>
    </section>
  )
}
