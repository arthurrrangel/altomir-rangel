// Config compartilhada da rota /altardanoite (formulário + página de confirmação)

// Endpoint Google Apps Script -> grava na planilha "Leads - Altar de Oração" + envia e-mail
export const SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzAX5BOQACwBTyy18hoJRLO7uQN0cJiYtT3L8LEp0AdwfK0wMTDWLWmViHLtrq8A0PI/exec'

// Grupo de WhatsApp (Comunidade de Oração)
export const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/J1Ub3EcSuYLJbM2KphrTii'

// ID do Pixel do Meta — "Pixel de Altomir Rangel" (conta de anúncios 350563210122209)
export const META_PIXEL_ID = '278191857159060'

// Flag de sessão: marca que o lead veio do formulário. Evita disparo de "Lead"
// no Pixel para quem acessa /obrigado direto (robô, curioso, refresh).
export const LEAD_FLAG = 'arc_altar_lead'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
  }
}

/**
 * Injeta o Pixel do Meta uma única vez por documento.
 * Retorna true se o script foi injetado AGORA (o snippet já dispara o PageView),
 * false se já existia (navegação SPA — dispare o PageView manualmente).
 */
export function loadMetaPixel(): boolean {
  if (typeof window === 'undefined' || !META_PIXEL_ID) return false
  if (document.getElementById('meta-pixel')) return false
  const s = document.createElement('script')
  s.id = 'meta-pixel'
  s.innerHTML =
    "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','" +
    META_PIXEL_ID +
    "');fbq('track','PageView');"
  document.head.appendChild(s)
  return true
}

/** Dispara um evento no Pixel sem quebrar a página se o fbq não existir. */
export function fbqTrack(event: string) {
  try {
    window.fbq && window.fbq('track', event)
  } catch {
    /* noop */
  }
}
