'use client'
import { useEffect, useRef } from 'react'
import { Play, Youtube, ExternalLink } from 'lucide-react'

// Substitua os IDs pelos vídeos reais do canal
const videos = [
  { id: 'VIDEO_ID_1', title: 'Pregação: Como Ouvir a Voz de Deus', duration: '45:12', views: '12K' },
  { id: 'VIDEO_ID_2', title: 'Ensinamento: Fé que Move Montanhas', duration: '38:45', views: '8K' },
  { id: 'VIDEO_ID_3', title: 'Mensagem: O Chamado do Empresário Cristão', duration: '52:30', views: '15K' },
  { id: 'VIDEO_ID_4', title: 'Pregação: Propósito de Vida em Deus', duration: '41:00', views: '9K' },
  { id: 'VIDEO_ID_5', title: 'Ensinamento: Família e Fé', duration: '29:15', views: '6K' },
  { id: 'VIDEO_ID_6', title: 'Mensagem: Vencendo com Integridade', duration: '35:50', views: '11K' },
]

type Video = { id: string; title: string; duration: string; views: string }
function VideoCard({ v }: { v: Video }) {
  const thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`
  const url = `https://www.youtube.com/watch?v=${v.id}`
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="reveal group flex flex-col bg-dark-200 border border-white/5 hover:border-gold/25 transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-dark-300">
        <img src={thumb} alt={v.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
          onError={e => { (e.target as HTMLImageElement).style.opacity = '0' }} />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/30 transition-colors" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center shadow-xl shadow-gold/20 group-hover:scale-110 transition-all duration-300">
            <Play size={20} className="text-dark fill-dark ml-1" />
          </div>
        </div>
        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-dark/80 px-2 py-0.5">
          <span className="font-inter text-[10px] text-cream/70 font-mono">{v.duration}</span>
        </div>
        {/* Views */}
        <div className="absolute top-2 left-2 bg-dark/80 px-2 py-0.5">
          <span className="font-inter text-[10px] text-cream/50">{v.views} views</span>
        </div>
      </div>
      {/* Title */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-2">
        <h3 className="font-inter text-[13px] font-semibold text-cream/80 group-hover:text-gold transition-colors leading-snug line-clamp-2">
          {v.title}
        </h3>
        <div className="flex items-center gap-1.5">
          <Youtube size={11} className="text-red-500" />
          <span className="font-inter text-[10px] text-cream/30 tracking-wide">Altomir Rangel</span>
        </div>
      </div>
    </a>
  )
}

export default function YouTubeSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80)
          })
        }
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="youtube" ref={ref} className="relative py-28 md:py-36 bg-dark-100 overflow-hidden">

      {/* Red glow subtle */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(220,38,38,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-600" />
              <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-red-500 uppercase flex items-center gap-1.5">
                <Youtube size={11} /> Canal no YouTube
              </span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(48px,7vw,90px)] leading-none text-cream">
              ASSISTA OS<br /><span className="text-gold">ENSINAMENTOS</span>
            </h2>
          </div>
          <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
            className="reveal btn-outline self-start md:self-end flex items-center gap-2">
            <Youtube size={14} />
            VER CANAL COMPLETO
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Channel banner */}
        <div className="reveal mb-12 flex flex-col sm:flex-row items-center gap-6 p-8 border border-red-900/30 bg-red-950/10">
          <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
            <Youtube size={28} className="text-red-500" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bebas text-2xl text-cream tracking-wide">@ALTOMIRRANGEL</h3>
            <p className="font-inter text-cream/40 text-sm mt-1">
              Pregações, ensinamentos bíblicos e mensagens de fé — conteúdo gratuito para edificar sua vida e família.
            </p>
          </div>
          <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-inter text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3 transition-colors">
            <Youtube size={14} />
            SE INSCREVER
          </a>
        </div>

        {/* Videos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {videos.map(v => <VideoCard key={v.id} v={v} />)}
        </div>

        <p className="reveal text-center font-inter text-[10px] text-cream/15 tracking-[0.2em] uppercase mt-10">
          Substitua os VIDEO_ID pelos IDs reais dos seus vídeos · Ex: youtube.com/watch?v=<strong>VIDEO_ID</strong>
        </p>
      </div>
    </section>
  )
}
