import { getPost, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Youtube, Calendar, Tag } from 'lucide-react'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return {}
  return { title: `${post.title} | Altomir Rangel`, description: post.excerpt }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-[#080E11] pt-28 md:pt-36 pb-24">
      <div className="max-w-2xl mx-auto px-6 md:px-10">

        {/* Back */}
        <Link href="/blog"
          className="inline-flex items-center gap-2 font-inter text-[11px] text-white/30 hover:text-[#FFC84E] tracking-[0.15em] uppercase transition-colors mb-10">
          <ArrowLeft size={12} /> Todos os artigos
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-inter text-[9px] font-bold tracking-[0.2em] text-[#FFC84E]/70 uppercase flex items-center gap-1">
            <Tag size={8} /> {post.category}
          </span>
          <span className="font-inter text-[9px] text-white/20 flex items-center gap-1">
            <Calendar size={8} />
            {new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-bebas text-[clamp(34px,7vw,72px)] leading-none text-white mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="font-inter text-white/50 text-[16px] leading-relaxed border-l-2 border-[#FFC84E]/40 pl-5 mb-10">
          {post.excerpt}
        </p>

        {/* Video link */}
        {post.videoId && (
          <a href={`https://www.youtube.com/watch?v=${post.videoId}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/3 border border-white/8 hover:border-red-500/25 hover:bg-white/5 transition-all p-4 mb-10 group">
            <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden bg-black">
              <img src={`https://img.youtube.com/vi/${post.videoId}/mqdefault.jpg`}
                alt={post.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="block w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-white ml-0.5" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-inter text-[9px] font-bold tracking-[0.2em] text-red-400/70 uppercase flex items-center gap-1 mb-1">
                <Youtube size={9} /> Assistir no YouTube
              </p>
              <p className="font-inter text-[13px] text-white/50 group-hover:text-white/70 transition-colors leading-snug">
                {post.title}
              </p>
            </div>
          </a>
        )}

        {/* Divider */}
        <div className="h-px bg-white/6 mb-10" />

        {/* Content */}
        <article
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/blog"
            className="font-inter text-[11px] text-white/30 hover:text-[#FFC84E] tracking-[0.15em] uppercase transition-colors flex items-center gap-2">
            <ArrowLeft size={12} /> Voltar ao blog
          </Link>
          <Link href="/#contato"
            className="font-inter text-[11px] font-bold tracking-[0.2em] text-[#FFC84E] uppercase hover:underline">
            Entrar em contato →
          </Link>
        </div>
      </div>
    </main>
  )
}
