import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import LeadForm from './LeadForm'
import Reveal from './Reveal'
import Countdown from './Countdown'

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministerioarc.com'),
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Todos os dias às 21h, o Pr. Altomir Rangel levanta o Altar de Oração ao vivo. Deixe seu pedido — hoje à noite, a oração também é por você.',
  alternates: { canonical: '/altardanoite' },
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todos os dias às 21h, ao vivo: oração pelos pedidos, palavra de edificação e comunhão.',
    url: '/altardanoite',
    siteName: 'Ministério Altomir Rangel',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/altomir-og.jpg', width: 1200, height: 630, alt: 'Altar de Oração, Pr. Altomir Rangel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Todos os dias às 21h, ao vivo: oração pelos pedidos, palavra de edificação e comunhão.',
    images: ['/altomir-og.jpg'],
  },
  robots: { index: true, follow: true },
}

// Prova social — preencha com um número REAL quando tiver (ex.: '+2.400 pessoas
// já levaram seus pedidos ao altar'). Vazio = a linha não aparece na página.
const PROVA_SOCIAL: string = ''

function Chama({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1C13.2 6.4 18.8 9.2 18.8 16.2c0 5.6-3.4 9.6-6.8 9.6s-6.8-4-6.8-9.6C5.2 10.4 10 7.6 12 1Z"
        fill="#D8A93A"
      />
      <path
        d="M12 12.4c.7 3 3.1 4.4 3.1 7.7 0 2.9-1.6 4.9-3.1 4.9s-3.1-2-3.1-4.9c0-3.3 2.4-4.7 3.1-7.7Z"
        fill="#F3E3B3"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden bg-[#182A46] text-white antialiased selection:bg-[#D8A93A] selection:text-[#14243B]">
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#182A46] text-center lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:text-left">
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          style={{ background: 'radial-gradient(ellipse at 72% 42%, #21365A 0%, #182A46 66%)' }}
        />
        <div
          className="pointer-events-none absolute left-[8%] top-1/2 z-0 hidden h-[440px] w-[600px] -translate-y-1/2 lg:block"
          style={{ background: 'radial-gradient(ellipse 52% 52% at 30% 50%, rgba(216,169,58,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[46svh] lg:hidden"
          style={{ background: 'radial-gradient(62% 48% at 50% 27%, rgba(228,152,54,0.34) 0%, rgba(214,138,48,0.12) 42%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] lg:block"
          style={{ background: 'radial-gradient(52% 54% at 60% 42%, rgba(228,152,54,0.22) 0%, transparent 66%)' }}
        />

        {/* figura mobile */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[44svh] items-start justify-center overflow-hidden lg:hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            decoding="async"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[44svh] w-auto max-w-none object-contain object-top"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(24,42,70,0) 55%, #182A46 86%)' }}
          />
        </div>

        {/* figura desktop */}
        <div className="pointer-events-none z-0 hidden lg:col-start-2 lg:row-start-1 lg:flex lg:h-full lg:items-end lg:justify-start lg:self-stretch lg:overflow-hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            decoding="async"
            className="motion-safe:animate-[figin_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards] h-[90vh] w-auto max-w-none -translate-x-[2%] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{ background: 'linear-gradient(to right, #182A46 0%, #182A46 32%, rgba(24,42,70,0.62) 45%, rgba(24,42,70,0) 63%)' }}
        />

        {/* conteúdo */}
        <div className="relative z-10 col-start-1 row-start-1 flex min-h-[100svh] flex-col items-center justify-start px-6 pb-8 pt-[36svh] sm:px-10 lg:min-h-0 lg:items-start lg:justify-center lg:pb-0 lg:pt-0 lg:pl-[9%] lg:pr-6">
          <div className="mx-auto flex w-full max-w-[440px] flex-col items-center lg:mx-0 lg:max-w-[560px] lg:items-start">
            <p className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] mb-2.5 flex items-center gap-2 font-inter text-[12px] uppercase tracking-[0.22em] text-[#D8A93A]/90 sm:mb-4 sm:text-[13px]">
              <Chama className="motion-safe:animate-[flick_2.4s_ease-in-out_infinite] h-[17px] w-auto" />
              Todos os dias · 21h · ao vivo
            </p>
            <h1
              className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] whitespace-nowrap font-bebas leading-[1] text-[#F3F1EA] text-[clamp(31px,12vw,58px)] lg:text-[clamp(46px,5.6vw,96px)]"
              style={{ textShadow: '0 4px 24px rgba(8,14,26,0.55)' }}
            >
              Altar de <span className="text-[#D8A93A]">Oração</span>
            </h1>

            <p className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.48s_both] mt-3.5 max-w-[440px] font-inter text-[15px] leading-[1.6] text-white/70 sm:mt-5 sm:text-[17px] sm:leading-[1.7]">
              O dia inteiro é cheio de vozes — notificação, cobrança, notícia, ansiedade. Às 21h, tudo se cala diante do altar. O <strong className="font-semibold text-white">Pr. Altomir Rangel</strong> intercede por quem está do outro lado, e hoje a oração também pode ser por você.
            </p>

            <div className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.57s_both] mt-4">
              <Countdown />
            </div>

            {PROVA_SOCIAL && (
              <p className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.62s_both] mt-2.5 flex items-center gap-2 font-inter text-[13px] font-medium text-[#D8A93A] sm:text-[14px]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D8A93A] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D8A93A]" />
                </span>
                {PROVA_SOCIAL}
              </p>
            )}

            <div id="pedido" className="motion-safe:animate-[reveal_1s_cubic-bezier(0.22,1,0.36,1)_0.66s_both] mt-5 w-full max-w-[440px] scroll-mt-6 sm:mt-7">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== VERSÍCULO (Sl 141:2) ====================== */}
      <section className="relative w-full overflow-hidden bg-[#14243B] px-6 py-14 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(46% 60% at 50% 100%, rgba(228,152,54,0.09) 0%, transparent 70%)' }}
        />
        <Reveal className="relative mx-auto flex max-w-[620px] flex-col items-center text-center">
          <span className="mb-6 h-px w-16 bg-[#D8A93A]/60" aria-hidden="true" />
          <blockquote className={`${serif.className} text-[22px] italic leading-[1.7] tracking-[0.01em] text-[#F3F1EA]/90 sm:text-[26px]`}>
            "Suba a minha oração perante a tua face como incenso, e seja o levantar das minhas mãos como o sacrifício da tarde."
          </blockquote>
          <cite className="mt-4 font-inter text-[12px] uppercase not-italic tracking-[0.22em] text-[#D8A93A]/90">
            Salmo 141:2
          </cite>
          <span className="mt-6 h-px w-16 bg-[#D8A93A]/60" aria-hidden="true" />
        </Reveal>
      </section>

      {/* ==================== O QUE ACONTECE NO ALTAR ==================== */}
      <section className="w-full px-6 py-14 sm:py-16">
        <Reveal className="mx-auto max-w-[620px]">
          <h2 className="text-center font-bebas text-[30px] leading-none tracking-[0.02em] text-[#F3F1EA] sm:text-[36px]">
            O que acontece <span className="text-[#D8A93A]">no altar</span>
          </h2>

          <ul className="mt-9 flex flex-col">
            <li className="border-t border-white/10 py-6">
              <h3 className="font-bebas text-[19px] tracking-[0.08em] text-[#D8A93A]">Oração pelos pedidos</h3>
              <p className="mt-1.5 font-inter text-[15px] leading-[1.65] text-white/70">
                Os pedidos enviados aqui são apresentados diante de Deus em oração, noite após noite.
              </p>
            </li>
            <li className="border-t border-white/10 py-6">
              <h3 className="font-bebas text-[19px] tracking-[0.08em] text-[#D8A93A]">Palavra de edificação</h3>
              <p className="mt-1.5 font-inter text-[15px] leading-[1.65] text-white/70">
                Uma direção da Escritura para fechar o dia em paz — não mais um conteúdo, um alimento.
              </p>
            </li>
            <li className="border-b border-t border-white/10 py-6">
              <h3 className="font-bebas text-[19px] tracking-[0.08em] text-[#D8A93A]">Comunhão diária</h3>
              <p className="mt-1.5 font-inter text-[15px] leading-[1.65] text-white/70">
                Uma comunidade que se reúne todas as noites, ao vivo no YouTube e no grupo do WhatsApp.
              </p>
            </li>
          </ul>

          <ol className="mx-auto mt-10 flex max-w-[440px] flex-col gap-3 font-inter text-[14.5px] leading-[1.6] text-white/75">
            <li className="flex gap-3">
              <span className="font-bebas text-[17px] text-[#D8A93A]">1.</span>
              Deixe seu nome, WhatsApp e, se quiser, seu pedido de oração.
            </li>
            <li className="flex gap-3">
              <span className="font-bebas text-[17px] text-[#D8A93A]">2.</span>
              Entre no grupo da comunidade no WhatsApp.
            </li>
            <li className="flex gap-3">
              <span className="font-bebas text-[17px] text-[#D8A93A]">3.</span>
              Todos os dias às 21h, ore conosco ao vivo.
            </li>
          </ol>
        </Reveal>
      </section>

      {/* ========================= ENCERRAMENTO ========================= */}
      <section className="w-full bg-[#14243B] px-6 pb-16 pt-14 text-center sm:pb-20">
        <Reveal className="mx-auto flex max-w-[520px] flex-col items-center">
          <Chama className="motion-safe:animate-[flick_2.4s_ease-in-out_infinite] h-9 w-auto" />
          <p className={`${serif.className} mt-5 text-[19px] italic leading-[1.65] text-[#F3F1EA]/85 sm:text-[21px]`}>
            "O fogo arderá continuamente sobre o altar; não se apagará."
          </p>
          <cite className="mt-3 font-inter text-[11.5px] uppercase not-italic tracking-[0.22em] text-[#D8A93A]/90">
            Levítico 6:13
          </cite>

          <a
            href="#pedido"
            className="mt-9 flex w-full max-w-[400px] items-center justify-center gap-3 rounded-2xl bg-[#D8A93A] py-[15px] font-bebas text-[19px] tracking-[0.1em] text-[#14243B] shadow-[0_12px_28px_-10px_rgba(216,169,58,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e2b954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8A93A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#14243B] active:translate-y-0"
          >
            Levar meu pedido ao altar
          </a>
          <p className="mt-4 font-inter text-[12.5px] text-white/55">Todos os dias às 21h · YouTube + grupo no WhatsApp</p>
        </Reveal>
      </section>

      <style>{`@keyframes reveal{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes figin{from{opacity:0;transform:scale(1.05)}to{opacity:1;transform:scale(1)}}@keyframes flick{0%,100%{transform:scale(1)}50%{transform:scale(1.07) translateY(-1px)}}`}</style>
    </main>
  )
}
