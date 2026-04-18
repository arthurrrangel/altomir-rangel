'use client'

import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  fallbackLabel?: string
  fallbackSub?: string
}

/**
 * Imagem com fallback silencioso quando a URL não existe (ex: capa ainda não enviada).
 * Mantém o layout estável mostrando um placeholder elegante no lugar.
 */
export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  fallbackSub,
}: Props) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-cream to-linen ${className}`}
        aria-label={alt}
      >
        {fallbackLabel && (
          <span className="font-serif italic text-gold text-[0.7rem] tracking-[0.24em] uppercase mb-4">
            {fallbackLabel}
          </span>
        )}
        {fallbackSub && (
          <span className="font-serif text-xl md:text-2xl text-ink leading-tight">
            {fallbackSub}
          </span>
        )}
        {!fallbackLabel && !fallbackSub && (
          <span className="font-serif italic text-gold text-sm tracking-[0.2em] uppercase">
            Altomir Rangel
          </span>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  )
}
