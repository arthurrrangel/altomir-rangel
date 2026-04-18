import Link from 'next/link'
import { books } from '@/lib/books'
import SafeImage from './SafeImage'

export default function Books() {
  return (
    <section id="livros" className="py-32 md:py-44 bg-cream">
      <div className="container-prose">
        <div className="max-w-2xl">
          <h2 className="display-serif text-4xl md:text-5xl text-ink">
            Livros que <span className="italic text-gold">edificam</span>.
          </h2>
          <p className="body-serif mt-6 text-lg md:text-xl text-ink-muted">
            Fruto de anos de estudo da Palavra e da experiência de quem uniu negócios e
            ministério. Leituras para famílias, líderes e todos que buscam crescer na fé.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/livros/${book.slug}`}
              className="group block"
            >
              <div className="aspect-[3/4] bg-linen overflow-hidden">
                <SafeImage
                  src={book.cover}
                  alt={`Capa — ${book.title}`}
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                  fallbackLabel="Altomir Rangel"
                  fallbackSub={book.title}
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-ink mt-6 leading-tight group-hover:text-gold transition-colors">
                {book.title}
              </h3>
              {book.subtitle && (
                <p className="mt-2 font-serif italic text-ink-muted">{book.subtitle}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
