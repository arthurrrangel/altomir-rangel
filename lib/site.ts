// ─── CONFIGURAÇÃO CENTRAL DO SITE ────────────────────────────────────────────
// Fonte única de verdade para domínio, contato e redes.
// Tudo que é URL, e-mail, WhatsApp ou chave PIX vem daqui.

export const site = {
  name: 'Altomir Rangel',
  ministry: 'Ministério ARC',
  tagline: 'Pregador, Autor e Empresário',
  description:
    'Empresário e servo voluntário do Reino de Deus. Pregador, autor de livros cristãos e criador de conteúdo no YouTube.',
  url: 'https://www.ministerioarc.com',
  locale: 'pt-BR',

  // Contato (DDI + DDD + número, somente dígitos)
  whatsapp: '5521994308382',
  whatsappDisplay: '+55 21 99430-8382',
  email: 'contato@ministerioarc.com',

  // Redes
  youtubeHandle: '@altomirrangel',
  youtubeUrl: 'https://www.youtube.com/@altomirrangel',

  // Contribuição
  pixKey: 'riquezanoreino@gmail.com',
  // BR Code estático (copia e cola) — gerado e validado a partir da chave acima
  pixBrCode:
    '00020126460014br.gov.bcb.pix0124riquezanoreino@gmail.com5204000053039865802BR5914ALTOMIR RANGEL6014RIO DE JANEIRO62070503***6304FC0E',

  city: 'Rio de Janeiro, RJ',
}

/** Link de conversa no WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
