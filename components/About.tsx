'use client'

import { useEffect, useRef } from 'react'
import { BookOpen, Mic2, Heart, Youtube } from 'lucide-react'

const pillars = [
  {
    icon: Heart,
    title: 'Fé e Voluntariado',
    desc: 'Dedica seu tempo e recursos ao serviço voluntário no Reino de Deus, pregando com amor e comprometimento.',
  },
  {
    icon: Mic2,
    title: 'Pregação nas Igrejas',
    desc: 'Presente em igrejas e eventos cristãos, compartilhando a Palavra de Deus com profundidade e clareza.',
  },
  {
    icon: BookOpen,
    title: 'Escritor',
    desc: 'Autor de livros que edificam, instruem e transformam a vida dos leitores à luz das Escrituras.',
  },
  {
    icon: Youtube,
    title: 'Criador de Conteúdo',
    desc: 'Alcança vidas pelo YouTube com ensinamentos bíblicos acessíveis para todo o Brasil e o mundo.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="relative py-28 px-6 bg-[#080d1a]">
      {/* Top border line */}
      <div className="gold-line mb-0" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a84c\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold-500/50" />
          <span className="text-gold-500 text-xs font-medium tracking-widest uppercase">
            Quem É
          </span>
        </div>

        {/* Heading */}
        <h2 className="reveal font-playfair text-4xl md:text-5xl font-bold text-cream-50 mb-6 max-w-xl">
          Sobre <span className="text-gold-400">Altomir Rangel</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text bio */}
          <div className="space-y-5">
            <p className="reveal text-cream-100/65 text-base leading-relaxed">
              Altomir Rangel é um empresário brasileiro que encontrou no serviço ao próximo e na
              proclamação da Palavra de Deus o seu maior propósito. Voluntário no Reino de Deus, ele
              dedica parte significativa de sua vida pregando em igrejas e comunidades, sem nenhum
              interesse financeiro — movido apenas pela fé e pelo amor às pessoas.
            </p>
            <p className="reveal text-cream-100/65 text-base leading-relaxed">
              Com uma trajetória marcada pelo equilíbrio entre os negócios e a vida espiritual,
              Altomir demonstra que é possível ser bem-sucedido no mundo corporativo sem abrir mão
              dos valores cristãos. Sua jornada inspira empreendedores, líderes e crentes a viverem
              com integridade e propósito.
            </p>
            <p className="reveal text-cream-100/65 text-base leading-relaxed">
              Como autor, ele traduz ensinamentos bíblicos profundos em linguagem acessível,
              alcançando leitores de todas as idades. Seu canal no YouTube expande esse alcance,
              levando a Palavra a quem ainda não entrou numa igreja.
            </p>

            {/* Quote */}
            <blockquote className="reveal border-l-2 border-gold-500 pl-5 mt-6">
              <p className="font-playfair italic text-lg text-cream-100/80">
                &ldquo;O maior negócio que fiz na vida foi me entregar ao serviço de Deus.&rdquo;
              </p>
              <cite className="text-gold-500 text-sm mt-2 block not-italic">— Altomir Rangel</cite>
            </blockquote>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal group bg-navy-900/60 border border-white/5 hover:border-gold-500/30 rounded-2xl p-5 transition-all duration-300 hover:bg-navy-900/80"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-3 group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <h3 className="font-semibold text-cream-100 text-sm mb-1.5">{title}</h3>
                <p className="text-cream-100/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
