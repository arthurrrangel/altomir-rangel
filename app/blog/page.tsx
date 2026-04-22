import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { BookOpen, Calendar, Tag } from 'lucide-react'

export const metadata = {
  title: 'Blog | Altomir Rangel',
  description: 'Reflexões, ensinamentos e artigos sobre fé, propósito e vida cristã.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#080E11] pt-28 md:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <BookOpen size={12} className="text-[#FFC84E]" />
            <span className="font-inter text-[11px] font-bold tracking-[0.3em] text-[#FFC84E] uppercase">
              Blog
            </span>
          </div>
          <h1 className="font-bebas text-[clamp(42px,9vw,96px)] leading-none text-white">
            REFLEXÕES<br /><span className="text-[#FFC84E]">E ENSINAMENTOS</span>
          </h1>
          <p className="font-inter text-white/40 text-[15px] mt-4 max-w-xl mx-auto md:mx-0">
            Artigos sobre fé, propósito e vida prática à luz da Palavra.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="font-inter text-white/30 text-center py-20">Em breve.</p>
        ) : (
          <div className="flex flex-col gap-px border border-white/6">
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-[#0D1518] hover:bg-[#121C20] border-b border-white/5 last:border-b-0 p-6 sm:p-8 transition-colors duration-200">

                {/* Number */}
                <span className="hidden sm:block font-bebas text-3xl text-white/10 group-hover:text-[#FFC84E]/30 transition-colors w-8 flex-shrink-0 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-inter text-[9px] font-bold tracking-[0.2em] text-[#FFC84E]/70 uppercase flex items-center gap-1">
                      <Tag size={8} /> {post.category}
                    </span>
                    <span className="font-inter text-[9px] text-white/20 flex items-center gap-1">
                      <Calendar size={8} />
                      {new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="font-bebas text-xl sm:text-2xl text-white group-hover:text-[#FFC84E] transition-colors leading-tight mb-1">
                    {post.title}
                  </h2>
                  <p className="font-inter text-white/35 text-[13px] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <span className="font-inter text-white/20 group-hover:text-[#FFC84E] transition-colors text-lg flex-shrink-0 hidden sm:block">
                  →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
