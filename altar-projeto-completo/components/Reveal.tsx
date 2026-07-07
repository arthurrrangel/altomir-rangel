'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  variant?: 'up' | 'left' | 'right'
  delay?: number
}

export default function Reveal({ children, className = '', variant = 'up', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  const base =
    variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : 'reveal'

  return (
    <div ref={ref} className={`${base} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
