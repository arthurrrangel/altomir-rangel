'use client'
import { ReactNode, useEffect, useRef } from 'react'

/** Revela o conteúdo com um leve deslize quando entra na tela (uma vez só). */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.show = '1'
          io.disconnect()
        }
      },
      { threshold: 0.18 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-show="0"
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] data-[show="0"]:translate-y-5 data-[show="0"]:opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  )
}
