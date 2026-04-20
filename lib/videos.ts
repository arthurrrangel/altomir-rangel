export type Video = {
  id: string
  title: string
  category?: string
}

// Ordenados: mais recentes primeiro
export const videos: Video[] = [
  // ── Recentes ──────────────────────────────────────────────────────────────
  { id: 'PIMWrO-nw0U', title: 'O Ingrediente Secreto que Falta na Sua Fé',   category: 'Novo' },
  { id: '43-bGX4MfGg', title: 'Pare de Sofrer Calado',                        category: 'Pregação' },
  { id: 'FVwvjO6AuNo', title: 'Por que Sua Mente Controla Seu Destino?',       category: 'Ensinamento' },
  // ── Destaques anteriores ──────────────────────────────────────────────────
  { id: 'a6HIxoWKaAc', title: 'Vivendo no Comum ou Andando sobre as Águas?',  category: 'Pregação' },
  { id: 'H7tFovSJNWg', title: 'Você É a Solução',                              category: 'Mensagem' },
  { id: 'iXam10B3S8o', title: 'Quebrando o Fardo da Ansiedade',               category: 'Pregação' },
  { id: 'A9ai_R_Qrls', title: 'O Poder Está na Família',                      category: 'Família' },
  { id: 'FmzpZY_3Jhk', title: 'Quem Tem Sua Atenção Tem Seu Futuro',          category: 'Ensinamento' },
  { id: 'nQWZO4f-puY', title: 'Arma Secreta: Paciência',                      category: 'Série' },
]
