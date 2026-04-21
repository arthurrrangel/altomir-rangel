import Link from 'next/link'

export default function Vision() {
  return (
    <section
      id="visao"
      className="py-36 md:py-56 bg-cream border-t border-linen"
    >
      <div className="container-prose max-w-3xl mx-auto">
        <h2 className="display-serif text-4xl md:text-6xl text-ink leading-[1.05]">
          Um Reino que cresce
          <br />
          quando cada um <span className="italic text-gold">faz a sua parte</span>.
        </h2>

        <div className="mt-14 space-y-6 body-serif text-xl md:text-2xl text-ink-muted">
          <p>
            O ministério não pertence a uma pessoa. É Palavra que se espalha em cada
            convite para pregar, em cada livro nas mãos de uma família, em cada vídeo
            compartilhado, em cada oração silenciosa de um parceiro.
          </p>
          <p>
            O que é feito aqui — livros, canal no YouTube, conteúdo
            nas redes — é entregue de graça. O que sustenta essa obra é a fidelidade de
            quem Deus coloca para caminhar junto.
          </p>
          <p className="text-ink">
            Essa obra é sua também.
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="#contribuir"
            className="link-underline text-[0.7rem] tracking-[0.3em] uppercase"
          >
            Veja como caminhar junto
          </Link>
        </div>
      </div>
    </section>
  )
}
