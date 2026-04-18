// Vídeos em destaque — cole aqui os IDs do YouTube e o título.
// Para pegar o ID: na URL https://www.youtube.com/watch?v=ABC123 → o ID é "ABC123".

export type Video = {
  id: string
  title: string
  category?: string
}

export const videos: Video[] = [
  { id: 'dQw4w9WgXcQ', title: 'Pregação — Substitua pelo ID real', category: 'Pregação' },
  { id: 'dQw4w9WgXcQ', title: 'Testemunho — Substitua pelo ID real', category: 'Testemunho' },
  { id: 'dQw4w9WgXcQ', title: 'Estudo bíblico — Substitua pelo ID real', category: 'Estudo' },
]
