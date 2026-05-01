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
    synopsis: 'O propósito desta Palavra não é tirar algo de você, mas sim prepará-lo para receber. Descubra o que a Bíblia realmente ensina sobre prosperidade — e liberte-se da mentalidade religiosa que impede você de receber o que Deus preparou.',
    description: [
      'Altomir Rangel — empresário, líder da GUIA Church e pós-graduado em Finanças pelo IBMEC — compartilha décadas de experiência ministerial para ajudar o leitor a entender que a bênção de Deus é resultado de escolha, não de chances.',
      'Com base sólida na Palavra, este livro desmonta a controvérsia em torno da prosperidade e revela o verdadeiro concerto do Senhor: não se trata de religiosidade, mas de obediência movida pela fé.',
    ],
    highlights: [
      'A bênção de Deus é resultado de escolha, não de sorte',
      'O relacionamento errado com o dinheiro é a raiz do problema',
      'Como ofertar com fé — e não por obrigação religiosa',
      'Liberte-se da escassez e receba o que Deus preparou para você',
    ],
    buyUrl: 'https://www.mercadolivre.com.br/livro-proposito-da-prosperidade--altomir-rangel/up/MLBU3941859956?pdp_filters=item_id:MLB4647757361',
    buyOptions: [{ label: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/livro-proposito-da-prosperidade--altomir-rangel/up/MLBU3941859956?pdp_filters=item_id:MLB4647757361' }],
    featured: true,
    price: 69.99,
    mlUrl: 'https://www.mercadolivre.com.br/livro-proposito-da-prosperidade--altomir-rangel/up/MLBU3941859956?pdp_filters=item_id:MLB4647757361',
  },
  {
    slug: 'bem-vindo-ao-novo-voce',
    title: 'Bem-vindo ao Novo Você',
    subtitle: 'Aprenda a lidar com você, para lidar com o próximo!',
    cover: '/books/bem-vindo-ao-novo-voce.jpg',
    synopsis: 'Há uma grande diferença entre conhecimento e sabedoria. Sabedoria não é informação — é a aplicação correta do que você sabe. Este livro vai transportar você para um novo nível onde a fé deixa de ser religião e passa a funcionar no agora.',
    description: [
      'Altomir Rangel revela que o temor do Senhor é o começo de uma sabedoria que abre portas para possibilidades aparentemente impossíveis — não como postura religiosa, mas como reconhecimento da autoridade de Deus em todos os seus caminhos.',
      'Com linguagem direta e fundamentação bíblica sólida, este livro desafia você a sair da teoria e aplicar a Palavra no cotidiano, transformando seus relacionamentos de dentro para fora.',
    ],
    highlights: [
      'A diferença entre conhecimento, entendimento e sabedoria',
      'Como o temor do Senhor abre portas aparentemente impossíveis',
      'Sair da religiosidade e entrar em uma fé que funciona no agora',
      'Transformar relacionamentos começando por você mesmo',
    ],
    buyUrl: 'https://www.mercadolivre.com.br/livro-bemvindo-ao-novo-voce--altomir-rangel/up/MLBU3941857680?pdp_filters=item_id:MLB4647743953',
    featured: true,
    price: 69.99,
    mlUrl: 'https://www.mercadolivre.com.br/livro-bemvindo-ao-novo-voce--altomir-rangel/up/MLBU3941857680?pdp_filters=item_id:MLB4647743953',
  },
]

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}
