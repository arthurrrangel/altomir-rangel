import SafeImage from './SafeImage'

export default function About() {
  return (
    <section id="sobre" className="py-32 md:py-44 bg-ivory border-t border-linen">
      <div className="container-prose">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-start">
          {/* Retrato */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] bg-cream overflow-hidden">
              <SafeImage
                src="/altomir-about.jpg"
                alt="Altomir Rangel"
                className="w-full h-full object-cover"
                fallbackLabel="Retrato"
                fallbackSub="Altomir Rangel"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-7">
            <h2 className="display-serif text-4xl md:text-5xl text-ink">
              Um homem de negócios
              <br />
              a serviço do <span className="italic text-gold">Reino</span>.
            </h2>

            <div className="mt-12 space-y-6 body-serif text-lg md:text-xl text-ink-muted">
              <p>
                Altomir Rangel é empresário, pregador e autor. Formado em Administração
                e pós-graduado em Gestão Empresarial pelo IBMEC, com extensão em Oral
                Roberts University, dedica a vida a unir excelência profissional e
                fidelidade ao evangelho.
              </p>
              <p>
                Há mais de duas décadas viaja pelo Brasil pregando em igrejas e liderando o
                Ministério Transforme Seu Mundo — provando, com a própria vida, que é
                possível ser bem-sucedido no mundo corporativo sem abrir mão dos valores
                cristãos.
              </p>
            </div>

            <blockquote className="mt-16 font-serif italic text-3xl md:text-4xl text-ink leading-[1.15] max-w-xl">
              "O maior negócio que fiz na vida foi me entregar ao serviço de Deus."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
