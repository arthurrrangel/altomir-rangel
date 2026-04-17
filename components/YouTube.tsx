'use client'

import { useEffect, useRef } from 'react'
import { Youtube, Play, ExternalLink } from 'lucide-react'

// Placeholder videos — replace video IDs with real ones from the channel
const videos = [
  {
    id: 'VIDEO_ID_1',
    title: 'Pregação: Título do Vídeo 1',
    description: 'Mensagem poderosa sobre a Palavra de Deus.',
    duration: '45:00',
  },
  {
    id: 'VIDEO_ID_2',
    title: 'Ensinamento: Título do Vídeo 2',
    description: 'Reflexão bíblica para edificar sua fé.',
    duration: '32:00',
  },
  {
    id: 'VIDEO_ID_3',
    title: 'Mensagem: Título do Vídeo 3',
    description: 'A Palavra de Deus transformando vidas.',
    duration: '58:00',
  },
]

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group flex flex-col bg-navy-800/40 border border-white/5 hover:border-gold-500/25 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Thumbnail */}
      <div className="relative h-44 bg-navy-800 overflow-hidden">
        {/* YouTube thumbnail — shown if VIDEO_ID is real */}
        <img
          src={thumbUrl}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback if thumb doesn't load
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gold-500/90 group-hover:bg-gold-400 flex items-center justify-center shadow-lg shadow-gold-500/30 transition-all duration-200 group-hover:scale-110">
            <Play size={18} className="text-navy-900 fill-navy-900 ml-0.5" />
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white/80 text-[10px] px-1.5 py-0.5 rounded font-mono">
          {video.duration}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5">
        <h3 className="font-semibold text-cream-50 text-sm leading-snug group-hover:text-gold-400 transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="text-cream-100/40 text-xs leading-relaxed line-clamp-2">
          {video.description}
        </p>
        <span className="text-gold-500/60 text-xs mt-1 flex items-center gap-1">
          <Youtube size={11} />
          Altomir Rangel
        </span>
      </div>
    </a>
  )
}

export default function YouTube() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="youtube" ref={sectionRef} className="relative py-28 px-6 bg-[#070c18]">
      {/* Red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-red-500/50" />
          <span className="text-red-400 text-xs font-medium tracking-widest uppercase flex items-center gap-1.5">
            <Youtube size={11} />
            Canal no YouTube
          </span>
        </div>

        {/* Heading */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream-50">
            Assista os <span className="text-gold-400">Ensinamentos</span>
          </h2>
          <a
            href="https://www.youtube.com/@altomirrangel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-400/50 px-4 py-2 rounded-full transition-all self-start md:self-auto"
          >
            <Youtube size={14} />
            Ver canal completo
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Channel banner */}
        <div className="reveal mb-10 bg-gradient-to-r from-red-950/40 via-navy-800/40 to-navy-900/40 border border-red-500/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600/60 to-red-900/60 flex items-center justify-center flex-shrink-0 border border-red-500/20">
            <Youtube size={28} className="text-red-400" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-playfair text-xl font-bold text-cream-50">@altomirrangel</h3>
            <p className="text-cream-100/50 text-sm mt-0.5">
              Pregações, ensinamentos bíblicos e mensagens de fé — conteúdo gratuito para edificar sua vida.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@altomirrangel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2"
          >
            <Youtube size={14} />
            Se Inscrever
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <p className="reveal text-center text-cream-100/25 text-xs mt-10">
          Substitua os VIDEO_ID_* nos dados acima pelos IDs reais dos vídeos do canal
        </p>
      </div>
    </section>
  )
}
