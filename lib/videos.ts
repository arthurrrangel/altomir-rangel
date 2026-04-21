export type Video = {
  id: string
  title: string
  category?: string
}

// Ordenados: mais recentes primeiro — atualizados via vidiq
export const videos: Video[] = [
  { id: 'PIMWrO-nw0U', title: 'O Ingrediente Secreto que Falta na Sua Fé',    category: 'Novo' },
  { id: 'C5Oi7Q_5nIY', title: '5 Sinais de uma Pessoa Falsa',                  category: 'Ao Vivo' },
  { id: 'MoM39WKTCyk', title: 'Milagre Existe, Mas Nem Todos Conseguem: Sabe Por Quê?', category: 'Ao Vivo' },
  { id: 'if0yejl0bMc', title: 'Manifestando Milagre: A Verdade sobre Posicionamento', category: 'Ao Vivo' },
  { id: '43-bGX4MfGg', title: 'Pare de Sofrer Calado',                         category: 'Ministério' },
  { id: 'JPaMe4aLQcI', title: 'Fé, Política e Crise',                          category: 'Ao Vivo' },
  { id: 'j1rYS5reC54', title: 'Honra que Transforma',                          category: 'Ao Vivo' },
  { id: 'kWG1mXX2GK8', title: 'Estamos Vendo o Começo do Fim?',                category: 'Profecia' },
  { id: 'FVwvjO6AuNo', title: 'Por que Sua Mente Controla Seu Destino?',        category: 'Ensinamento' },
]
