import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ShoppingCart, CheckCircle, Shield, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { books, getBook } from '@/lib/books'
import { site, whatsappLink } from '@/lib/site'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const book = getBook(params.slug)
  if (!book) return { title: 'Livro não encontrado' }
  return {
    title: `${book.title} — Livro`,
    description: book.synopsis,
    alternates: { canonical: `/livros/${book.slug}` },
    openGraph: {
      title: `${book.title} — ${site.name}`,
      description: book.synopsis,
      url: `/livros/${book.slug}`,
      siteName: site.name,
      images: [{ url: book.cover, alt: `Capa do livro ${book.title}` }],
      type: 'book',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} — ${site.name}`,
      description: book.synopsis,
      images: [book.cover],
    },
  }
}

export default function BookPage({ params }: Props) {
  const book = getBook(params.slug)
  if (!book) return notFound()

  const others = books.filter((b) => b.slug !== book.slug).slice(0, 3)

  const bookJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    ...(book.subtitle ? { alternateName: book.subtitle } : {}),
    author: { '@type': 'Person', name: site.name, url: site.url },
    description: book.synopsis,
    ...(book.pages ? { numberOfPages: book.pages } : {}),
    inLanguage: 'pt-BR',
    ...(book.isbn ? { isbn: book.isbn } : {}),
    ...(book.publisher ? { publisher: { '@type': 'Organization', name: book.publisher } } : {}),
    image: `${site.url}${book.cover}`,
    url: `${site.url}/livros/${book.slug}`,
    ...(book.price
      ? {
          offers: {
            '@type': 'Offer',
            price: book.price.toFixed(2),
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
            url: book.buyUrl,
          },
        }
      : {}),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Livros', item: `${site.url}/#livros` },
      { '@type': 'ListItem', position: 3, name: book.title, item: `${site.url}/livros/${book.slug}` },
    ],
  }

  return (
    <>
      <Navbar />
      <main id="conteudo" className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        {/* Glow ambiente */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(216,169,58,0.06) 0%, transparent 65%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <Link
            href="/#livros"
            className="inline-flex items-center gap-2 font-inter text-[11px] font-bold tracking-[0.25em] uppercase text-white/55 hover:text-[#D8A93A] transition-colors"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            Voltar para livros
          </Link>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-20">

            {/* Capa + ficha técnica */}
            <div className="md:col-span-5">
              <div className="relative max-w-[420px] mx-auto md:mx-0">
                <div className="absolute -inset-4 bg-[#D8A93A]/10 blur-2xl rounded-full" aria-hidden="true" />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
                  <Image
                    src={book.cover}
                    alt={`Capa do livro ${book.title}`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>

              {(book.publisher || book.pages || book.year || book.isbn) && (
                <dl className="mt-10 max-w-[420px] mx-auto md:mx-0">
                  {book.publisher && (
                    <div className="flex justify-between items-baseline gap-4 py-3 border-b border-white/8">
                      <dt className="font-inter text-[10px] font-bold tracking-[0.28em] uppercase text-[#D8A93A]/80">Editora</dt>
                      <dd className="font-inter text-[13px] text-white/80">{book.publisher}</dd>
                    </div>
                  )}
                  {book.pages && (
                    <div className="flex justify-between items-baseline gap-4 py-3 border-b border-white/8">
                      <dt className="font-inter text-[10px] font-bold tracking-[0.28em] uppercase text-[#D8A93A]/80">Páginas</dt>
                      <dd className="font-inter text-[13px] text-white/80">{book.pages}</dd>
                    </div>
                  )}
                  {book.year && (
                    <div className="flex justify-between items-baseline gap-4 py-3 border-b border-white/8">
                      <dt className="font-inter text-[10px] font-bold tracking-[0.28em] uppercase text-[#D8A93A]/80">Ano</dt>
                      <dd className="font-inter text-[13px] text-white/80">{book.year}</dd>
                    </div>
                  )}
                  {book.isbn && (
                    <div className="flex justify-between items-baseline gap-4 py-3 border-b border-white/8">
                      <dt className="font-inter text-[10px] font-bold tracking-[0.28em] uppercase text-[#D8A93A]/80">ISBN</dt>
                      <dd className="font-inter text-[12px] text-white/80 tabular-nums">{book.isbn}</dd>
                    </div>
                  )}
                </dl>
              )}
            </div>

            {/* Conteúdo */}
            <div className="md:col-span-7">
              <span className="label block mb-4">Livro de {site.name}</span>
              <h1 className="font-bebas leading-[0.95] text-white" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="mt-4 font-playfair italic text-lg md:text-xl text-white/70">
                  {book.subtitle}
                </p>
              )}

              <p className="mt-8 font-inter text-[15px] md:text-base text-white/85 leading-relaxed border-l-2 border-[#D8A93A]/60 pl-5">
                {book.synopsis}
              </p>

              <div className="mt-8 space-y-5">
                {book.description.map((p, i) => (
                  <p key={i} className="font-inter text-[14.5px] md:text-[15px] text-white/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {book.highlights && book.highlights.length > 0 && (
                <div className="mt-12">
                  <p className="font-inter text-[10px] font-bold tracking-[0.32em] uppercase text-[#D8A93A] mb-5">
                    O que você vai encontrar
                  </p>
                  <ul className="space-y-3">
                    {book.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={15} className="text-[#D8A93A] mt-1 shrink-0" aria-hidden="true" />
                        <span className="font-inter text-[14.5px] text-white/85 leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA de compra */}
              <div className="mt-14 pt-10 border-t border-white/10">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="font-inter text-[10px] font-black tracking-[0.35em] text-[#D8A93A]/70 uppercase mb-1">Investimento</p>
                    {book.price ? (
                      <p className="font-bebas text-[56px] leading-none text-[#D8A93A] drop-shadow-[0_0_16px_rgba(216,169,58,0.3)]">
                        R$ {book.price.toFixed(2).replace('.', ',')}
                      </p>
                    ) : (
                      <p className="font-bebas text-4xl text-[#D8A93A]">Consulte</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={13} className="text-white/45" aria-hidden="true" />
                    <span className="font-inter text-[11px] text-white/45">Compra 100% segura · Entrega garantida</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={book.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#D8A93A] hover:bg-[#E2B652] active:scale-[0.98] text-[#16243B] font-inter text-[12px] font-black tracking-[0.18em] uppercase px-8 py-4 transition-all duration-200 min-h-[56px] shadow-[0_8px_32px_rgba(216,169,58,0.3)] hover:shadow-[0_12px_44px_rgba(216,169,58,0.45)]"
                  >
                    <ShoppingCart size={15} aria-hidden="true" />
                    Comprar no Mercado Livre
                  </a>
                  <a
                    href={whatsappLink(`Olá! Tenho interesse no livro "${book.title}" do Altomir Rangel.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-white/15 hover:border-[#D8A93A]/50 text-white/75 hover:text-[#D8A93A] font-inter text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-4 transition-all duration-200 min-h-[56px]"
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    Pedir pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Outros livros */}
          {others.length > 0 && (
            <div className="mt-24 md:mt-32">
              <div className="flex items-end justify-between mb-10">
                <h2 className="font-bebas text-[clamp(30px,4vw,48px)] leading-none text-white">
                  CONTINUE <span className="text-[#D8A93A]">LENDO</span>
                </h2>
                <Link
                  href="/#livros"
                  className="font-inter text-[11px] font-bold tracking-[0.25em] uppercase text-white/55 hover:text-[#D8A93A] transition-colors hidden md:inline-block"
                >
                  Todos os livros
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                {others.map((b) => (
                  <Link key={b.slug} href={`/livros/${b.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden border border-white/8 bg-[#1B2A44]">
                      <Image
                        src={b.cover}
                        alt={`Capa do livro ${b.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101B2C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bebas text-2xl text-white group-hover:text-[#D8A93A] transition-colors leading-tight">
                        {b.title}
                      </h3>
                      {b.subtitle && (
                        <p className="mt-1 font-inter italic text-[13px] text-white/55">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  )
}
