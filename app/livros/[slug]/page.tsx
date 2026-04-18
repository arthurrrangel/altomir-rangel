import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SafeImage from '@/components/SafeImage'
import { books, getBook } from '@/lib/books'
import { site } from '@/lib/site'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const book = getBook(params.slug)
  if (!book) return { title: 'Livro não encontrado' }
  return {
    title: book.title,
    description: book.synopsis,
    openGraph: {
      title: `${book.title} — ${site.name}`,
      description: book.synopsis,
      images: [book.cover],
      type: 'book',
    },
  }
}

export default function BookPage({ params }: Props) {
  const book = getBook(params.slug)
  if (!book) notFound()

  const others = books.filter((b) => b.slug !== book.slug).slice(0, 3)

  const bookJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    alternateName: book.subtitle,
    author: { '@type': 'Person', name: site.name },
    description: book.synopsis,
    numberOfPages: book.pages,
    inLanguage: 'pt-BR',
    isbn: book.isbn,
    publisher: book.publisher,
    image: book.cover,
    url: `${site.url}/livros/${book.slug}`,
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24 bg-ivory">
        <div className="container-prose">
          <Link
            href="/#livros"
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase text-ink-soft hover:text-ink transition-colors"
          >
            <ArrowLeft size={13} strokeWidth={1.6} />
            Voltar para livros
          </Link>

          <div className="mt-12 grid md:grid-cols-12 gap-14 md:gap-20">
            {/* Capa */}
            <div className="md:col-span-5">
              <div className="aspect-[3/4] bg-cream overflow-hidden">
                <SafeImage
                  src={book.cover}
                  alt={`Capa — ${book.title}`}
                  className="w-full h-full object-cover"
                  fallbackLabel="Altomir Rangel"
                  fallbackSub={book.title}
                />
              </div>

              <dl className="mt-8 space-y-3 text-sm text-ink-muted">
                {book.publisher && (
                  <div className="flex justify-between py-2 border-b border-linen">
                    <dt className="text-[0.65rem] tracking-[0.28em] uppercase text-ink-soft">
                      Editora
                    </dt>
                    <dd>{book.publisher}</dd>
                  </div>
                )}
                {book.pages && (
                  <div className="flex justify-between py-2 border-b border-linen">
                    <dt className="text-[0.65rem] tracking-[0.28em] uppercase text-ink-soft">
                      Páginas
                    </dt>
                    <dd>{book.pages}</dd>
                  </div>
                )}
                {book.year && (
                  <div className="flex justify-between py-2 border-b border-linen">
                    <dt className="text-[0.65rem] tracking-[0.28em] uppercase text-ink-soft">
                      Ano
                    </dt>
                    <dd>{book.year}</dd>
                  </div>
                )}
                {book.isbn && (
                  <div className="flex justify-between py-2 border-b border-linen">
                    <dt className="text-[0.65rem] tracking-[0.28em] uppercase text-ink-soft">
                      ISBN
                    </dt>
                    <dd className="font-mono text-xs">{book.isbn}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Conteúdo */}
            <div className="md:col-span-7">
              <h1 className="display-serif text-4xl md:text-6xl text-ink">
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="mt-4 font-serif italic text-xl md:text-2xl text-ink-muted">
                  {book.subtitle}
                </p>
              )}

              <div className="mt-10 space-y-5 body-serif text-lg text-ink-muted">
                {book.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {book.highlights && book.highlights.length > 0 && (
                <div className="mt-12">
                  <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold mb-5">
                    O que você vai encontrar
                  </p>
                  <ul className="space-y-3">
                    {book.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink">
                        <Check size={16} strokeWidth={1.6} className="text-gold mt-1.5 shrink-0" />
                        <span className="body-serif text-lg">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {book.chapters && book.chapters.length > 0 && (
                <div className="mt-12">
                  <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold mb-5">
                    Capítulos
                  </p>
                  <ol className="space-y-2 text-ink-muted list-decimal list-inside body-serif text-lg">
                    {book.chapters.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* CTA de compra */}
              <div className="mt-14 pt-10 border-t border-linen">
                <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold">
                  Adquirir este livro
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <a
                    href={book.buyUrl}
                    target="_blank"
                    rel="noopener"
                    className="btn-primary"
                  >
                    <ShoppingBag size={13} strokeWidth={1.6} />
                    Comprar agora
                  </a>

                  {book.buyOptions && book.buyOptions.length > 0 && (
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-[0.65rem] tracking-[0.28em] uppercase text-ink-soft">
                        Outras lojas:
                      </span>
                      {book.buyOptions.map((o) => (
                        <a
                          key={o.url}
                          href={o.url}
                          target="_blank"
                          rel="noopener"
                          className="link-underline text-sm"
                        >
                          {o.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Outros livros */}
          {others.length > 0 && (
            <div className="mt-32">
              <div className="flex items-end justify-between mb-10">
                <h2 className="display-serif text-3xl md:text-4xl text-ink">
                  Continue <span className="italic text-gold">lendo</span>
                </h2>
                <Link
                  href="/#livros"
                  className="link-underline text-[0.7rem] tracking-[0.28em] uppercase hidden md:inline-block"
                >
                  Todos os livros
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-10 md:gap-12">
                {others.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/livros/${b.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[3/4] bg-linen overflow-hidden">
                      <SafeImage
                        src={b.cover}
                        alt={`Capa — ${b.title}`}
                        className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                        fallbackLabel="Altomir Rangel"
                        fallbackSub={b.title}
                      />
                    </div>
                    <div className="mt-5">
                      <h3 className="font-serif text-xl text-ink group-hover:text-gold transition-colors">
                        {b.title}
                      </h3>
                      {b.subtitle && (
                        <p className="mt-1 font-serif italic text-sm text-ink-muted">
                          {b.subtitle}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
    </>
  )
}
