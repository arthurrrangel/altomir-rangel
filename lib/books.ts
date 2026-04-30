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
  price?: number
  originalPrice?: number
  mlUrl?: string
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
    synopsis: 'Uma leitura bíblica e prática sobre a prosperidade como meio de servir ao Reino, não como fim em si mesma.',
    description: [
      'Altomir Rangel compartilha décadas de experiência empresarial e ministerial para ajudar o leitor a redefinir o que significa verdadeiramente prosperar segundo a Palavra de Deus.',
      'Um livro que une os pés no chão da vida financeira com os olhos fixos no propósito eterno.',
    ],
    highlights: [
      'A diferença entre riqueza bíblica e mentalidade de escassez',
      'Princípios de mordomia aplicáveis ao dia a dia',
      'Como o trabalho se transforma em adoração',
    ],
    buyUrl: 'https://www.amazon.com.br/Prop%C3%B3sito-Prosperidade-Altomir-Rangel-Cunha/dp/8574220310',
    buyOptions: [{ label: 'Amazon', url: 'https://www.amazon.com.br/Prop%C3%B3sito-Prosperidade-Altomir-Rangel-Cunha/dp/8574220310' }],
    featured: true,
    price: 46.99,
    originalPrice: 69.99,
    mlUrl: '#',
  },
  {
    slug: 'bem-vindo-ao-novo-voce',
    title: 'Bem-vindo ao Novo Você',
    subtitle: 'Aprenda a lidar com você, para lidar com o próximo',
    cover: '/books/bem-vindo-ao-novo-voce.jpg',
    synopsis: 'Um convite para o autoconhecimento guiado pela Palavra. Quem aprende a lidar consigo mesmo transforma tudo ao redor.',
    description: [
      'Altomir Rangel mergulha na jornada de autodescoberta à luz das Escrituras, mostrando que crescer espiritualmente começa por dentro.',
      'Com linguagem direta e ensinamento bíblico sólido, este livro desafia o leitor a olhar para si mesmo com honestidade e com a graça de Deus.',
    ],
    highlights: [
      'Autoconhecimento à luz da Palavra de Deus',
      'Como lidar com emoções, relacionamentos e propósito',
      'Transformação que começa de dentro para fora',
    ],
    buyUrl: 'https://wa.me/5521999999999?text=Quero%20encomendar%20o%20livro%20Bem-vindo%20ao%20Novo%20Voc%C3%AA',
    featured: true,
    price: 46.99,
    originalPrice: 69.99,
    mlUrl: '#',
  },
]

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}
