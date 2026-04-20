"use client"
import { useEffect, useRef } from 'react'
import { Play, Youtube, ExternalLink } from 'lucide-react'
import { videos } from '@/lib/videos'

export default function YouTubeSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 80))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const featured = videos.slice(0, 1)[0]
  const rest = videos.slice(1, 7)

  return (
    <section id="youtube" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0F0F17]">

      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{background: 'radial-gradient(ellipse at top left, rgba(220,38,38,0.04) 0%, transparent 65%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div className="text-center md:text-left">
            <div className="reveal flex items-center justify-center md:justify-start mb-3">
              <span className="font-inter text-[11px] font-bold tracking-[0.3em] text-red-400 uppercase flex items-center gap-1.5">
                <Youtube size={11} /> Canal no YouTube
              </span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
              ASSISTA OS<br /><span className="text-[#C5973F]">ENSINAMENTOS</span>
            </h2>
          </div>
          <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
            className="reveal btn-outline self-center md:self-end flex items-center gap-2 min-h-[48px]">
            <Youtube size={14} /> Ver Canal <ExternalLink size={12} />
          </a>
        </div>

        {/* Featured video */}
        {featured && (
          <a href={`https://www.youtube.com/watch?v=${featured.id}`} target="_blank" rel="noopener noreferrer"
            className="reveal group block mb-4 relative overflow-hidden border border-white/6 hover:border-[#C5973F]/30 transition-colors">
            <div className="relative aspect-video bg-[#141420] overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
                alt={featured.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                onError={e => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${featured.id}/hqdefault.jpg` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F17]/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#C5973F]/90 group-hover:bg-[#C5973F] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Play size={20} className="text-black fill-black ml-1 sm:hidden" />
                  <Play size={28} className="text-black fill-black ml-1 hidden sm:block" />
                </div>
              </div>
              <div className="absolute left-4 sm:left-8 bottom-4 sm:bottom-8 pr-4">
                <span className="label mb-2 block text-[9px] sm:text-[11px]">{featured.category}</span>
                <h3 className="font-bebas text-base sm:text-3xl md:text-4xl text-white leading-tight max-w-[240px] sm:max-w-lg">{featured.title}</h3>
              </div>
            </div>
          </a>
        )}

        {/* Videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {rest.map(v => (
            <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
              className="reveal group flex flex-row sm:flex-col bg-[#141420] border border-white/5 hover:border-[#C5973F]/25 hover:bg-[#16162A] transition-all duration-300 overflow-hidden">
              <div className="relative w-28 sm:w-full aspect-video sm:aspect-video overflow-hidden bg-[#0F0F17] flex-shrink-0">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  onError={e => { (e.target as HTMLImageElement).style.opacity = '0' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#C5973F]/80 group-hover:bg-[#C5973F] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Play size={11} className="text-black fill-black ml-0.5 sm:hidden" />
                    <Play size={16} className="text-black fill-black ml-0.5 hidden sm:block" />
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center">
                <span className="label text-[8px] sm:text-[9px]">{v.category}</span>
                <h3 className="font-inter text-[12px] sm:text-[13px] font-semibold text-white/70 group-hover:text-white transition-colors leading-snug line-clamp-2">{v.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="reveal mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-7 border border-red-500/15 bg-red-500/5">
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
            <Youtube size={20} className="text-red-400" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bebas text-xl sm:text-2xl text-white">@ALTOMIRRANGEL</h3>
            <p className="font-inter text-white/35 text-xs sm:text-sm">Pregações e ensinamentos bíblicos — conteúdo gratuito para edificar sua vida.</p>
          </div>
          <a href="https://www.youtube.com/@altomirrangel" target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-inter text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3 transition-colors w-full sm:w-auto justify-center min-h-[48px]">
            <Youtube size={14} /> SE INSCREVER
          </a>
        </div>
      </div>
    </section>
  )
}
