import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { BookOpen, ArrowRight, Tag } from 'lucide-react'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section id="blog" className="relative py-16 md:py-36 overflow-hidden bg-[#0A0A0F]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{background:'radial-gradient(ellipse at top right,rgba(197,151,63,0.05) 0%,transparent 65%)'}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <BookOpen size={12} className="text-[#C5973F]" />
              <span className="font-inter text-[11px] font-bold tracking-[0.3em] text-[#C5973F] uppercase">
                Blog
              </span>
            </div>
            <h2 className="font-bebas text-[clamp(38px,8vw,96px)] leading-none text-white">
              REFLEXÕES E<br /><span className="text-[#C5973F]">ENSINAMENTOS</span>
            </h2>
          </div>
          <Link href="/blog"
            className="self-center md:self-end flex-shrink-0 flex items-center gap-2 border border-white/15 hover:border-[#C5973F]/40 text-white/50 hover:text-[#C5973F] font-inter text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 transition-all duration-200">
            Ver todos <ArrowRight size={12} />
          </Link>
        </div>

        {/* Posts */}
        <div className="border border-white/6">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-[#0F0F17] hover:bg-[#141420] border-b border-white/5 last:border-b-0 p-6 sm:p-8 transition-colors duration-200">

              <span className="hidden sm:block font-bebas text-3xl text-white/8 group-hover:text-[#C5973F]/25 transition-colors w-8 flex-shrink-0 text-right">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-inter text-[9px] font-bold tracking-[0.2em] text-[#C5973F]/60 uppercase flex items-center gap-1">
                    <Tag size={8} /> {post.category}
                  </span>
                  <span className="font-inter text-[9px] text-white/15">
                    {new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-bebas text-xl sm:text-2xl text-white group-hover:text-[#C5973F] transition-colors leading-tight mb-1">
                  {post.title}
                </h3>
                <p className="font-inter text-white/30 text-[13px] leading-relaxed line-clamp-1 hidden sm:block">
                  {post.excerpt}
                </p>
              </div>

              <ArrowRight size={16} className="text-white/15 group-hover:text-[#C5973F] transition-colors flex-shrink-0 hidden sm:block" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
