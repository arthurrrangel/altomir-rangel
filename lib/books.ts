// Livros de Altomir Rangel — adicione/edite aqui e a home + páginas individuais se atualizam sozinhas.

export type Book = {
  slug: string
  title: string
  subtitle?: string
  cover: string           // caminho em /public ou URL absoluta
  pages?: number
  year?: number
  publisher?: string
  isbn?: string
  synopsis: string        // parágrafo curto para cards
  description: string[]   // parágrafos longos para a página do livro
  highlights?: string[]   // bullets de "o que você vai aprender"
  chapters?: string[]
  buyUrl: string          // link principal de compra (Amazon, etc.)
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
    isbn: '9788574220314',
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
      'Estudos de caso de empresários cristãos',
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
    slug: 'bem-vindo-ao-novo-voce',
    title: 'Bem-Vindo ao Novo Você',
    subtitle: 'Reflexões sobre fé, propósito e chamado',
    cover: '/books/bem-vindo-ao-novo-voce.jpg',
    pages: 210,
    synopsis:
      'Reflexões sobre fé, propósito e o chamado de Deus na vida de empresários, líderes e homens e mulheres do século 21.',
    description: [
      'Um livro sobre começos: o instante em que decidimos render tudo a Cristo e aceitar a identidade que Ele nos deu.',
      'Altomir escreve com a sobriedade de quem viveu o mundo corporativo em alto nível e a leveza de quem descobriu que, no Reino, a nova criação é o que verdadeiramente importa.',
    ],
    highlights: [
      'O que significa ser uma nova criação',
      'Renovação da mente no dia a dia',
      'Passos concretos para começar de novo com Deus',
    ],
    buyUrl:
      'https://www.goodreads.com/author/show/21046891.Altomir_Rangel',
    featured: true,
  },
  {
    slug: 'feijao-com-arroz',
    title: 'Feijão com Arroz',
    subtitle: 'Verdades simples da fé cristã',
    cover: '/books/feijao-com-arroz.jpg',
    synopsis:
      'Verdades bíblicas básicas — o "feijão com arroz" da fé cristã — escritas com clareza para todas as idades.',
    description: [
      'Há verdades que parecem óbvias, mas sustentam a vida toda. Neste livro, Altomir Rangel apresenta os fundamentos da fé como um prato simples que nutre de verdade.',
      'Ideal para novos convertidos, discipulado, ou qualquer cristão que queira relembrar o essencial.',
    ],
    highlights: [
      'Fé, graça e arrependimento explicados com simplicidade',
      'Pequenos hábitos espirituais com grande impacto',
      'Textos curtos, perfeitos para devocional diário',
    ],
    buyUrl:
      'https://www.goodreads.com/author/show/21046891.Altomir_Rangel',
  },
]

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}
