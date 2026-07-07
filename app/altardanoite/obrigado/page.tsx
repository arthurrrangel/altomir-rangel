import type { Metadata } from 'next'
import ObrigadoClient from './ObrigadoClient'

export const metadata: Metadata = {
  title: 'Cadastro confirmado | Altar de Oração',
  description: 'Seu lugar no Altar de Oração está garantido. Entre no grupo do WhatsApp para receber o link todos os dias às 21h.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <ObrigadoClient />
}
