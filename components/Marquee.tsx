'use client'
import { useEffect, useRef } from 'react'

const items = [
  'PREGADOR DA PALAVRA',
  'EMPRESÁRIO',
  'AUTOR DE LIVROS',
  'SERVO DE DEUS',
  'CANAL NO YOUTUBE',
  'PREGADOR DA PALAVRA',
  'EMPRESÁRIO',
  'AUTOR DE LIVROS',
  'SERVO DE DEUS',
  'CANAL NO YOUTUBE',
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-5 border-y border-gold/30" style={{ background: '#C5973F' }}>
      <div className="marquee-inner flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="font-bebas text-xl tracking-[0.25em] text-[#1A1305]">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1305]/30 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
