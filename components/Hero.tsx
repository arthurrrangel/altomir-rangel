import Link from 'next/link'
import { site } from '@/lib/site'
import SafeImage from './SafeImage'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ivory pt-36 md:pt-44 pb-28 md:pb-36"
    >
      <div className="container-prose grid md:grid-cols-12 gap-16 md:gap-20 items-center">
        {/* Texto */}
        <div className="md:col-span-7">
          <h1 className="display-serif text-5xl sm:text-6xl md:text-7xl text-ink">
            Uma vida a serviço
            <br />
            da <span className="italic text-gold">Palavra</span>.
          </h1>

          <p className="body-serif mt-10 text-xl md:text-2xl text-ink-muted max-w-xl">
            Não há divisão entre trabalho e adoração, entre sucesso e fé.
            Há uma só vida — e ela é para Ele.
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-8">
            <a href="#visao" className="btn-primary">
              Conheça a missão
            </a>
            <Link
              href="#contribuir"
              className="link-underline text-[0.7rem] tracking-[0.28em] uppercase"
            >
              Faça parte da obra
            </Link>
          </div>
        </div>

        {/* Retrato */}
        <div className="md:col-span-5">
          <div className="aspect-[4/5] bg-cream overflow-hidden">
            <SafeImage
              src="/altomir-hero.jpg"
              alt={`${site.name} — empresário, pregador e autor`}
              className="w-full h-full object-cover"
              fallbackLabel="Retrato"
              fallbackSub={site.name}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
