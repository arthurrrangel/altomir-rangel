export default function Marquee() {
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

  return (
    <div className="relative py-5 overflow-hidden border-y border-gold/20 bg-dark-100">
      <div className="marquee-inner flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span className="font-bebas text-lg tracking-[0.25em] text-cream/30">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
