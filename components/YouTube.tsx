"use client"
import { useEffect, useRef, useState } from 'react'
import { Play, Youtube, Radio } from 'lucide-react'
import { videos as staticVideos, type Video } from '@/lib/videos'
import { youtubeSection as yt } from '@/lib/content'
import { site } from '@/lib/site'

const SUBSCRIBE_URL = `${site.youtubeUrl}?sub_confirmation=1`

function Thumb({ id, alt, quality, sizes, className }: { id: string; alt: string; quality: 'maxres' | 'hq' | 'mq'; sizes?: string; className?: string }) {
  const [q, setQ] = useState(quality)
  const src = `https://img.youtube.com/vi/${id}/${q === 'maxres' ? 'maxresdefault' : q === 'hq' ? 'hqdefault' : 'mqdefault'}.jpg`
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => { if (q === 'maxres') setQ('hq') }}
    />
  )
}

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
    <section id="youtube" ref={ref} className="relative py-16 md:py-36 overflow-hidden bg-[#16243B]">
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(16,29,48,0.6) 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(27,42,68,0.6) 0%, transparent 100%)' }} />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left,rgba(220,38,38,0.05) 0%,transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div className="text-center md:text-left">
            <div className="reveal flex items-center justify-center md:justify-start gap-2 mb-3">
              <Youtube size={13} className="text-red-500" aria-hidden="true" />
              <span className="font-inter text-[11px] font-bold tracking-[0.3em] text-red-400 uppercase">{yt.label}</span>
            </div>
            <h2 className="reveal font-bebas text-[clamp(36px,6vw,78px)] leading-none text-white">
              {yt.headline1}<br /><span className="text-[#D8A93A]">{yt.headlineGold}</span>
            </h2>
          </div>
          <a
            href={SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex-shrink-0 self-center md:self-end flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-inter text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 transition-all duration-200 min-h-[48px] shadow-[0_6px_24px_rgba(220,38,38,0.30)] hover:shadow-[0_8px_32px_rgba(220,38,38,0.45)]"
          >
            <Youtube size={14} aria-hidden="true" /> {yt.subscribeCta}
          </a>
        </div>

        {featured && (
          <a
            href={`https://www.youtube.com/watch?v=${featured.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group block mb-5 relative overflow-hidden border border-white/6 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(220,38,38,0.10)]"
          >
            <div className="relative aspect-video bg-[#1B2A44] overflow-hidden">
              <Thumb
                id={featured.id}
                alt=""
                quality="maxres"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#16243B] via-[#16243B]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16243B]/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-red-600/90 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] group-hover:scale-110 transition-all duration-300">
                  <Play size={22} className="text-white fill-white ml-1.5 sm:hidden" aria-hidden="true" />
                  <Play size={32} className="text-white fill-white ml-2 hidden sm:block" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute left-5 sm:left-8 bottom-5 sm:bottom-8 pr-4">
                <span className="inline-flex items-center gap-1.5 font-inter text-[10px] font-bold tracking-[0.25em] text-[#D8A93A] uppercase mb-2 sm:mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ECC65C] inline-block" aria-hidden="true" />
                  {featured.category ?? 'Novo'} · Em Destaque
                </span>
                <h3 className="font-bebas text-xl sm:text-4xl md:text-5xl text-white leading-tight max-w-[260px] sm:max-w-xl drop-shadow-lg">
                  {featured.title}
                </h3>
                <p className="font-inter text-[11px] sm:text-[12px] text-white/60 mt-2 flex items-center gap-1.5">
                  <Youtube size={10} className="text-red-400" aria-hidden="true" /> youtube.com/{site.youtubeHandle}
                </p>
              </div>
            </div>
          </a>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {rest.map((v) => {
            const isLive = v.category === 'Ao Vivo'
            return (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-left group flex flex-col bg-[#1B2A44] border border-white/5 hover:border-red-500/20 hover:bg-[#22344F] transition-all duration-300 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
              >
                <div className="relative aspect-video overflow-hidden bg-[#16243B]">
                  <Thumb
                    id={v.id}
                    alt=""
                    quality="hq"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600/80 group-hover:bg-red-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play size={12} className="text-white fill-white ml-0.5 sm:hidden" aria-hidden="true" />
                      <Play size={14} className="text-white fill-white ml-0.5 hidden sm:block" aria-hidden="true" />
                    </div>
                  </div>
                  <span className={`absolute top-2 left-2 flex items-center gap-1 font-inter text-[9px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5 ${isLive ? 'bg-red-600/90 text-white' : 'bg-black/60 text-[#D8A93A]'}`}>
                    {isLive && <Radio size={7} className="flex-shrink-0" aria-hidden="true" />}
                    {v.category ?? 'Novo'}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-inter text-[11px] sm:text-[13px] font-semibold text-white/75 group-hover:text-white transition-colors leading-snug line-clamp-2 text-center sm:text-left">
                    {v.title}
                  </h3>
                </div>
              </a>
            )
          })}
        </div>

        <div className="reveal flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 border border-red-500/15 bg-gradient-to-r from-red-500/6 to-transparent">
          <div className="w-14 h-14 rounded-full bg-red-600/15 border border-red-500/20 flex items-center justify-center flex-shrink-0">
            <Youtube size={24} className="text-red-400" aria-hidden="true" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-0.5">{yt.bannerTitle}</h3>
            <p className="font-inter text-white/60 text-sm">{yt.bannerSubtitle}</p>
          </div>
          <a
            href={SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-inter text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-4 transition-all duration-200 w-full sm:w-auto min-h-[52px] shadow-[0_6px_24px_rgba(220,38,38,0.30)] hover:shadow-[0_10px_36px_rgba(220,38,38,0.45)]"
          >
            <Youtube size={14} aria-hidden="true" /> {yt.subscribeCta} agora
          </a>
        </div>
      </div>
    </section>
  )
}
