"use client"
import { useEffect, useRef, useState } from 'react'
import { Play, Youtube, Radio } from 'lucide-react'
import { videos as staticVideos, type Video } from '@/lib/videos'

export default function YouTubeSection() {
  const ref = useRef<HTMLElement>(null)
  const [videos, setVideos] = useState<Video[]>(staticVideos)

  useEffect(() => {
    fetch('/api/videos')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data.videos) && data.videos.length > 0) setVideos(data.videos) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal,.reveal-left').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 80))
      })
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const featured = videos[0]
  const rest = videos.slice(1, 7) 

  return (
    <section id="youtube" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#0D1518]">
      {/* Fade-in from previous section */}
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none" style={{background:'linear-gradient(to bottom, rgba(8,8,16,0.6) 0%, transparent 100%)'}} />
      {/* Fade-out to next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none" style={{background:'linear-gradient(to top, rgba(15,15,23,0.6) 0%, transparent 100%)'}} />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] pointer-events-none" style={{background:'radial-gradient(ellipse at top left,rgba(220,38,38,0.05) 0%,transparent 65%)'}} />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div className="text-center md:text-left">
            <div className="reveal flex items-center justify-center md:justify-start gap-2 mb-3">
              <Youtube size={12} className="text-red-500" />
              <span className="font-inter text-[11px] font-bold tracking-[0.3em] text-red-400 uppercase">Canal no YouTube</span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">VIDEOS QUE<br /><span className="text-[#FFC84E]">EDIFICAM</span></h2>
          </div>
          <a href="https://www.youtube.com/@altomirrangel?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="reveal flex-shrink-0 self-center md:self-end flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-inter text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 transition-all duration-200 min-h-[48px] shadow-[0_6px_24px_rgba(220,38,38,0.30)] hover:shadow-[0_8px_32px_rgba(220,38,38,0.45)]"><Youtube size={14} /> SE INSCREVER</a>
        </div>
        {featured && (<a href={`https://www.youtube.com/watch?v=${featured.id}`} target="_blank" rel="noopener noreferrer" className="reveal group block mb-5 relative overflow-hidden border border-white/6 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(220,38,38,0.10)]"><div className="relative aspect-video bg-[#121C20] overflow-hidden"><img src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`} alt={featured.title} className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" onError={e => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${featured.id}/hqdefault.jpg` }} /><div className="absolute inset-0 bg-gradient-to-r from-[#0D1518] via-[#0D1518]/50 to-transparent" /><div className="absolute inset-0 bg-gradient-to-t from-[#0D1518]/60 to-transparent" /><div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-red-600/90 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] group-hover:scale-110 transition-all duration-300"><Play size={22} className="text-white fill-white ml-1.5 sm:hidden" /><Play size={32} className="text-white fill-white ml-2 hidden sm:block" /></div></div><div className="absolute left-5 sm:left-8 bottom-5 sm:bottom-8 pr-4"><span className="inline-flex items-center gap-1.5 font-inter text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-[#FFC84E] uppercase mb-2 sm:mb-3"><span className="w-1.5 h-1.5 rounded-full bg-[#FFC84E] inline-block" />{featured.category ?? 'Novo'} ‚· Em Destaque</span><h3 className="font-bebas text-xl sm:text-4xl md:text-5xl text-white leading-tight max-w-[260px] sm:max-w-xl drop-shadow-lg">{featured.title}</h3><p className="font-inter text-[11px] sm:text-[12px] text-white/40 mt-2 flex items-center gap-1.5"><Youtube size={10} className="text-red-400" /> youtube.com/@altomirrangel</p></div></div></a>)}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {rest.map((v) => {
            const isLive = v.category === 'Ao Vivo'
            return (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="reveal-left group flex flex-col bg-[#121C20] border border-white/5 hover:border-red-500/20 hover:bg-[#131e22] transition-all duration-300 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"><div className="relative aspect-video overflow-hidden bg-[#0D1518]"><img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} className="w-full h-full object-cover opacity-55 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" onError={e => { (e.target as HTMLImageElement).style.opacity = '0' }} /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /><div className="absolute inset-0 flex items-center justify-center"><div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600/80 group-hover:bg-red-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg"><Play size={12} className="text-white fill-white ml-0.5 sm:hidden" /><Play size={14} className="text-white fill-white ml-0.5 hidden sm:block" /></div></div><span className={`absolute top-2 left-2 flex items-center gap-1 font-inter text-[8px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5 ${isLive ? 'bg-red-600/90 text-white' : 'bg-black/60 text-[#FFC84E]'}`}>{isLive && <Radio size={7} className="flex-shrink-0" />}{v.category ?? 'Novo'}</span></div><div className="p-3 sm:p-4"><h3 className="font-inter text-[11px] sm:text-[13px] font-semibold text-white/65 group-hover:text-white transition-colors leading-snug line-clamp-2 text-center sm:text-left">{v.title}</h3></div></a>
            )
          })}
        </div>
        <div className="reveal flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 border border-red-500/15 bg-gradient-to-r from-red-500/6 to-transparent"><div className="w-14 h-14 rounded-full bg-red-600/15 border border-red-500/20 flex items-center justify-center flex-shrink-0"><Youtube size={24} className="text-red-400" /></div><div className="flex-1 text-center sm:text-left"><h3 className="font-bebas text-2xl sm:text-3xl text-white mb-0.5">NOVO VIDEO TODO DIA</h3><p className="font-inter text-white/35 text-sm">Mensagens, ensinamentos e lives diarios para edificar sua fe.</p></div><a href="https://www.youtube.com/@altomirrangel?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-inter text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-4 transition-all duration-200 w-full sm:w-auto min-h-[52px] shadow-[0_6px_24px_rgba(220,38,38,0.30)] hover:shadow-[0_10px_36px_rgba(220,38,38,0.45)]"><Youtube size={14} /> SE INSCREVER AGORA</a></div>
      </div>
    </section>
  )
}
