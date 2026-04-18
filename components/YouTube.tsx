'use client'
import { useEffect, useRef } from 'react'
import { Play, Youtube, ExternalLink } from 'lucide-react'

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
      className="reveal group flex flex-col bg-[#1E1E28] border border-white/5 hover:border-gold/20 hover:bg-[#22222E] transition-all duration-300 overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-[#16161F]">
        <img src={thumb} alt={v.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
          onError={e => { (e.target as HTMLImageElement).style.opacity = '0' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E28]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center shadow-xl shadow-gold/20 group-hover:scale-110 transition-all duration-300">
            <Play size={20} className="text-dark fill-dark ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5">
          <span className="font-inter text-[10px] text-white/70 font-mono">{v.duration}</span>
        </div>
        <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5">
          <span className="font-inter text-[10px] text-white/50">{v.views} views</span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between gap-2">
        <h3 className="font-inter text-[13px] font-semibold text-white/75 group-hover:text-gold transition-colors leading-snug line-clamp-2">
          {v.title}
        </h3>
        <div className="flex items-center gap-1.5">
          <Youtube size={11} className="text-red-400" />
          <span className="font-inter text-[10px] text-white/30 tracking-wide">Altomir Rangel</span>
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
    <section id="youtube" ref={ref} className="relative py-28 md:py-36 overflow-hidden" style={{ background: '#141420' }}>

      {/* Subtle red glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(220,38,38,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="font-inter text-[11px] font-semibold tracking-[0.3em] text-red-400 uppercase flex items-center gap-1.5">
                <Youtube size={11} /> Canal no YouTube
              </span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(48px,7vw,90px)] leading-none text-white">
              ASSISTA OS<br /><span className="text-gold">ENSINAMENTOS</span>
            </h2>
          </div>
          <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
            className="reveal self-start md:self-end flex items-center gap-2 border border-white/10 hover:border-gold/40 px-5 py-3 font-inter text-[11px] font-bold tracking-[0.15em] text-white/50 hover:text-gold transition-colors uppercase">
            <Youtube size={14} />
            VER CANAL COMPLETO
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Channel banner */}
        <div className="reveal mb-12 flex flex-col sm:flex-row items-center gap-6 p-8 border border-red-500/20 bg-red-500/5">
          <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center flex-shrink-0">
            <Youtube size={28} className="text-red-400" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bebas text-2xl text-white tracking-wide">@ALTOMIRRANGEL</h3>
            <p className="font-inter text-white/40 text-sm mt-1">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map(v => <VideoCard key={v.id} v={v} />)}
        </div>
      </div>
    </section>
  )
}
