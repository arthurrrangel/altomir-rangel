import Link from 'next/link'
import { PlayCircle } from 'lucide-react'
import { videos } from '@/lib/videos'
import { site } from '@/lib/site'

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-32 md:py-44 bg-ivory border-t border-linen">
      <div className="container-prose">
        <div className="max-w-2xl">
          <h2 className="display-serif text-4xl md:text-5xl text-ink">
            Pregações ao <span className="italic text-gold">alcance</span> de todos.
          </h2>
          <p className="body-serif mt-6 text-lg md:text-xl text-ink-muted">
            Pregações, reflexões e estudos bíblicos, disponíveis gratuitamente no YouTube.
            Acompanhe, inscreva-se, leve a Palavra adiante.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-12">
          {videos.map((video, i) => (
            <a
              key={`${video.id}-${i}`}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden bg-cream">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle
                    className="text-ivory opacity-90 drop-shadow-md"
                    size={48}
                    strokeWidth={1.2}
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl text-ink mt-6 leading-tight group-hover:text-gold transition-colors">
                {video.title}
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href={site.youtubeUrl}
            target="_blank"
            rel="noopener"
            className="link-underline text-[0.7rem] tracking-[0.28em] uppercase"
          >
            Ver canal completo
          </Link>
        </div>
      </div>
    </section>
  )
}
