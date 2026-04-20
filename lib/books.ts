// Livros de Altomir Rangel — adicione/edite aqui e a home + páginas individuais se atualizam sozinhas.
export type Book = {
  slug: string
  title: string
  subtitle?: string
  cover: string
  pages?: number
  year?: number
  publisher?: string
  isbn?: string
  synopsis: string
  description: string[]
  highlights?: string[]
  chapters?: string[]
  buyUrl: string
  buyOptions?: { label: string; url: string }[]
  featured?: boolean
}

export const books: Book[] = [
  {
    slug: 'o-proposito-da-prosperidade',
    title: 'O Propósito da Prosperidade',
    subtitle: 'Entendendo a visão bíblica sobre finanças e chamado',
    cover: '/books/proposito-da-prosperidade.jpg',
    pages: 192,
    year: 2004,
    publisher: 'ADHONEP',
    isbn: '9786500740042',
    synopsis:
      'Uma leitura bíblica e prática sobre a prosperidade como meio de servir ao Reino — não como fim em si mesma.',
    description: [
      'Altomir Rangel compartilha décadas de experiência empresarial e ministerial para ajudar o leitor a redefinir o que significa verdadeiramente prosperar segundo a Palavra de Deus.',
      'Um livro que une os pés no chão da vida financeira com os olhos fixos no propósito eterno. Leitura essencial para empresários, líderes e qualquer pessoa que deseja ver a prosperidade pela perspectiva do Reino.',
    ],
    highlights: [
      'A diferença entre riqueza bíblica e mentalidade de escassez',
      'Princípios de mordomia aplicáveis ao dia a dia',
      'Como o trabalho se transforma em adoração',
    ],
    buyUrl:
      'https://www.amazon.com.br/Prop%C3%B3sito-Prosperidade-Altomir-Rangel-Cunha/dp/8574220310',
    buyOptions: [
      {
        label: 'Amazon',
        url: 'https://www.amazon.com.br/Prop%C3%B3sito-Prosperidade-Altomir-Rangel-Cunha/dp/8574220310',
      },
      {
        label: 'Estante Virtual',
        url: 'https://www.estantevirtual.com.br/livros/altomir-rangel-cunha/o-proposito-da-prosperidade/2927973608',
      },
    ],
    featured: true,
  },
  {
    slug: 'da-religiao-a-realidade',
    title: 'Da Religião à Realidade',
    subtitle: 'Uma jornada de fé autêntica',
    cover: '/books/da-religiao-a-realidade.jpg',
    pages: 180,
    publisher: 'ADHONEP',
    isbn: '9786500740035',
    synopsis:
      'Uma caminhada profunda pela Palavra de Deus, escrita para edificar famílias, líderes e todos que buscam crescer na fé.',
    description: [
      'Da Religião à Realidade é um convite para sair da religiosidade vazia e entrar no relacionamento vivo com Deus.',
      'Com linguagem acessível, Altomir Rangel destrói barreiras comuns que impedem o cristão de experimentar o propósito diário de Deus — e aponta caminhos práticos para viver uma fé que transforma.',
    ],
    highlights: [
      'Como distinguir tradição religiosa de relacionamento com Cristo',
      'Princípios para uma fé que sobrevive às crises',
      'Ensino prático sobre oração, jejum e comunhão',
    ],
    buyUrl:
      'https://sebocapricho.com.br/produto/da-religiao-a-realidade-altomir-rangel-cunha/18319808',
    buyOptions: [
      {
        label: 'Sebo Capricho',
        url: 'https://sebocapricho.com.br/produto/da-religiao-a-realidade-altomir-rangel-cunha/18319808',
      },
    ],
    featured: true,
  },
  {
    slug: 'vitamine-se-2026',
    title: 'Vitamine-se 2026',
    subtitle: 'O devocional que encontra você onde você está',
    cover: '/books/vitamine-se.jpg',
    year: 2026,
    synopsis:
      '366 devocionais autorais — uma jornada diária construída ao longo de quase 30 anos de ensino sobre a mentalidade do Reino de Deus.',
    description: [
      'Há dias em que acordamos ansiosos. Outros, cansados. Alguns, sem direção. E existem dias em que simplesmente precisamos de uma palavra viva, clara, bíblica e prática, que nos alinhe ao que Deus está fazendo.',
      'Vitamine-se 2026 nasce desse lugar. Com 366 devocionais autorais do Pr. Altomir Rangel, cada dia traz uma frase de impacto, um versículo, um insight profundo e uma oração direcionada.',
    ],
    highlights: [
      'Frase de impacto + versículo + insight profundo + oração direcionada por dia',
      'Construído ao longo de quase 30 anos de ensino bíblico',
      'Simples. Prático. Profundo. Transformador.',
    ],
    buyUrl: 'https://wa.me/5521999999999?text=Quero%20encomendar%20o%20Vitamine-se%202026',
    featured: true,
  },
]

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}
