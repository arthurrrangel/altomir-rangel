import type { Metadata } from 'next'
import LeadForm from './LeadForm'

export const metadata: Metadata = {
  title: 'Altar de Oração | Altomir Rangel',
  description:
    'Entre para a comunidade de oração do Pr. Altomir Rangel. Juntos, todos os dias, buscando a presença de Deus.',
  openGraph: {
    title: 'Altar de Oração | Altomir Rangel',
    description: 'Entre para a nossa comunidade de oração e ore com a gente.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
      {/* brilho dourado do alto */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[440px] w-[760px] max-w-[155vw] -translate-x-1/2 lg:left-[62%] lg:h-[600px] lg:w-[1100px]"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(216,169,58,0.16) 0%, transparent 66%)' }}
      />

      {/* ===== FOTO MOBILE — herói nítido no topo ===== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[54vh] items-end justify-center overflow-hidden lg:hidden">
        <img
          src="/altomir-recorte.webp"
          alt="Pr. Altomir Rangel"
          className="h-[56vh] w-auto max-w-none object-contain object-bottom"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(16,27,44,0.16) 0%, rgba(16,27,44,0) 34%, rgba(16,27,44,0) 50%, rgba(16,27,44,0.55) 76%, #16243B 97%)' }}
        />
      </div>

      {/* ===== FOTO DESKTOP — grande na lateral ===== */}
      <div className="pointer-events-none z-0 hidden lg:col-start-2 lg:row-start-1 lg:flex lg:items-end lg:justify-end lg:self-end">
        <img
          src="/altomir-recorte.webp"
          alt="Pr. Altomir Rangel"
          className="h-[100vh] w-auto max-w-none translate-x-[4%] object-contain object-bottom drop-shadow-[0_28px_55px_rgba(0,0,0,0.5)] xl:h-[106vh]"
        />
      </div>
      {/* overlay desktop (navy à esquerda, foto limpa à direita) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        style={{ background: 'linear-gradient(to right, #16243B 0%, #16243B 25%, rgba(22,36,59,0.80) 43%, rgba(22,36,59,0.16) 60%, transparent 71%)' }}
      />

      {/* ===== MARCA ===== */}
      <div className="absolute top-6 left-1/2 z-20 -translate-x-1/2 lg:left-[8%] lg:translate-x-0">
        <span className="font-bebas text-base tracking-[0.34em] text-white/90 sm:text-lg">ALTOMIR&nbsp;RANGEL</span>
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div className="relative z-10 col-start-1 row-start-1 flex min-h-screen flex-col items-center px-6 pt-[45vh] pb-10 text-center sm:pt-[48vh] lg:items-start lg:justify-center lg:pt-0 lg:pb-0 lg:pl-[8%] lg:pr-8 lg:text-left">
        <div className="flex w-full max-w-[460px] flex-col items-center lg:max-w-[520px] lg:items-start">
          <h1 className="font-bebas leading-[0.82] text-white text-[clamp(48px,7vw,82px)] drop-shadow-[0_4px_30px_rgba(8,14,26,0.92)]">
            Altar de<br /><span className="text-[#D8A93A]">Oração</span>
          </h1>

          <p className="font-inter mt-3.5 max-w-[420px] text-[15px] leading-relaxed text-white/85 drop-shadow-[0_2px_18px_rgba(8,14,26,0.9)] sm:text-[17px]">
            Entre para a nossa comunidade e ore todos os dias com o Pr. Altomir. Deixe seu nome — a gente te leva pra dentro do grupo.
          </p>

          <div className="mt-6 w-full max-w-md text-left">
            <LeadForm />
          </div>
        </div>
      </div>
    </main>
  )
}
