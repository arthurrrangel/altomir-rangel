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

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center whitespace-nowrap py-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="mx-4 font-bebas text-[13px] tracking-[0.3em] text-[#16243B]">
          ORE TODOS OS DIAS COM A NOSSA COMUNIDADE
          <span className="mx-4 align-middle text-[#16243B]/45">●</span>
        </span>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* ===== FAIXA ROLANDO ===== */}
      <div className="relative z-30 flex overflow-hidden border-b border-[#16243B]/15 bg-[#D8A93A]">
        <div className="flex w-max animate-[arcmarquee_28s_linear_infinite]">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>

      <section className="relative min-h-screen w-full overflow-hidden lg:grid lg:grid-cols-[1fr_1fr] lg:items-stretch">
        {/* brilho dourado do alto */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-[440px] w-[760px] max-w-[155vw] -translate-x-1/2 lg:left-[52%] lg:h-[600px] lg:w-[1100px]"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(216,169,58,0.16) 0%, transparent 66%)' }}
        />
        {/* calor atrás do Altomir */}
        <div
          className="pointer-events-none absolute left-1/2 top-[8vh] z-0 h-[58vh] w-[82vw] max-w-[640px] -translate-x-1/2 lg:left-[40%] lg:right-auto lg:top-[12vh] lg:h-[74vh] lg:w-[48vw] lg:translate-x-0"
          style={{ background: 'radial-gradient(ellipse 52% 56% at 50% 46%, rgba(214,158,70,0.22) 0%, transparent 66%)' }}
        />

        {/* ===== FOTO MOBILE — herói nítido no topo ===== */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[53vh] items-end justify-center overflow-hidden lg:hidden">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="h-[55vh] w-auto max-w-none object-contain object-bottom"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(16,27,44,0.12) 0%, rgba(16,27,44,0) 34%, rgba(16,27,44,0) 50%, rgba(16,27,44,0.55) 76%, #16243B 97%)' }}
          />
        </div>

        {/* ===== FOTO DESKTOP — grande e mais ao centro/esquerda ===== */}
        <div className="pointer-events-none z-0 hidden lg:col-start-2 lg:row-start-1 lg:flex lg:items-end lg:justify-start lg:self-end">
          <img
            src="/altomir-recorte.webp"
            alt="Pr. Altomir Rangel"
            className="h-[108vh] w-auto max-w-none -translate-x-[7%] object-contain object-bottom drop-shadow-[0_28px_55px_rgba(0,0,0,0.5)] xl:h-[116vh]"
          />
        </div>
        {/* overlay desktop (navy à esquerda, foto limpa no meio) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #16243B 0%, #16243B 22%, rgba(22,36,59,0.78) 38%, rgba(22,36,59,0.12) 55%, transparent 66%)' }}
        />
        {/* vinheta na borda direita (some o vão) */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[26%] lg:block"
          style={{ background: 'linear-gradient(to left, #16243B 0%, rgba(22,36,59,0.55) 42%, transparent 100%)' }}
        />

        {/* ===== MARCA ===== */}
        <div className="absolute top-5 left-1/2 z-20 -translate-x-1/2 lg:left-[8%] lg:translate-x-0">
          <span className="font-bebas text-base tracking-[0.34em] text-white/90 sm:text-lg">ALTOMIR&nbsp;RANGEL</span>
        </div>

        {/* ===== CONTEÚDO ===== */}
        <div className="relative z-10 col-start-1 row-start-1 flex min-h-screen flex-col items-center px-6 pt-[44vh] pb-10 text-center sm:pt-[47vh] lg:items-start lg:justify-center lg:pt-0 lg:pb-0 lg:pl-[8%] lg:pr-6 lg:text-left">
          <div className="flex w-full max-w-[480px] flex-col items-center lg:max-w-[600px] lg:items-start">
            <h1 className="font-bebas leading-[0.8] text-white text-[clamp(54px,8.2vw,98px)] drop-shadow-[0_4px_30px_rgba(8,14,26,0.92)]">
              Altar de<br /><span className="text-[#D8A93A]">Oração</span>
            </h1>

            <p className="font-inter mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/85 drop-shadow-[0_2px_18px_rgba(8,14,26,0.9)] sm:text-[17px]">
              Entre para a nossa comunidade e ore todos os dias com o Pr. Altomir. Deixe seu nome — a gente te leva pra dentro do grupo.
            </p>

            <div className="mt-6 w-full max-w-[500px] text-left">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes arcmarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </main>
  )
}
