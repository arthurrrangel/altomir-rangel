import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Altomir Rangel — Pregador, Autor e Empresário',
  description:
    'Site oficial de Altomir Rangel — empresário, pregador voluntário da Palavra de Deus, autor de livros e criador de conteúdo no YouTube.',
  keywords: ['Altomir Rangel', 'pregador', 'livros cristãos', 'YouTube', 'Palavra de Deus'],
  openGraph: {
    title: 'Altomir Rangel',
    description: 'Empresário e pregador voluntário da Palavra de Deus.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
