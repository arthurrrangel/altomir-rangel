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
      {/* luz divina do alto */}
      <div
        className="pointer-events-none absolute left-1/2 -top-[8%] z-0 h-[640px] w-[1100px] max-w-[170vw] -translate-x-1/2 lg:left-[60%]"
        style={{ background: 'radial-gradient(ellipse 46% 60% at 50% 0%, rgba(216,169,58,0.16) 0%, transparent 68%)' }}
      />

      {/* ===== FOTO — full-bleed no mobile, grande na lateral no desktop ===== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex items-end justify-center lg:static lg:col-start-2 lg:row-start-1 lg:items-end lg:justify-end lg:self-end">
        <img
          src="/altomir-recorte.webp"
          alt="Pr. Altomir Rangel"
          className="h-[80vh] w-auto max-w-none select-none object-contain object-bottom sm:h-[86vh] lg:h-[100vh] xl:h-[106vh] lg:translate-x-[4%]"
        />
      </div>

      {/* ===== OVERLAY mobile (fade pra baixo) ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 lg:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(16,27,44,0.5) 0%, rgba(16,27,44,0.06) 20%, rgba(16,27,44,0.34) 42%, rgba(16,27,44,0.8) 62%, #16243B 80%)' }}
      />
      {/* ===== OVERLAY desktop (navy à esquerda, foto limpa à direita) ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        style={{ background: 'linear-gradient(to right, #16243B 0%, #16243B 28%, rgba(22,36,59,0.80) 44%, rgba(22,36,59,0.16) 60%, transparent 70%)' }}
      />
      {/* vinheta suave (ambos) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: 'radial-gradient(120% 80% at 50% 22%, transparent 44%, rgba(16,27,44,0.48) 100%)' }}
      />

      {/* ===== MARCA (topo) ===== */}
      <div className="absolute top-6 left-1/2 z-20 -translate-x-1/2 lg:left-[8%] lg:translate-x-0">
        <span className="font-bebas text-base tracking-[0.34em] text-white/90 sm:text-lg">ALTOMIR&nbsp;RANGEL</span>
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div className="relative z-10 col-start-1 row-start-1 flex min-h-screen flex-col items-center px-6 pt-[40vh] pb-12 text-center sm:pt-[44vh] lg:items-start lg:justify-center lg:pt-0 lg:pl-[8%] lg:pr-8 lg:text-left">
        <div className="flex w-full max-w-[600px] flex-col items-center lg:items-start">
          <h1 className="font-bebas leading-[0.83] text-white text-[clamp(54px,9vw,112px)] drop-shadow-[0_4px_30px_rgba(8,14,26,0.95)]">
            Altar de<br /><span className="text-[#D8A93A]">Oração</span>
          </h1>

          <p className="font-inter mt-4 max-w-[480px] text-[16px] leading-relaxed text-white/85 drop-shadow-[0_2px_18px_rgba(8,14,26,0.95)] sm:text-[19px]">
            Entre para a nossa comunidade e ore todos os dias com o Pr. Altomir. Deixe seu nome — a gente te leva pra dentro do grupo.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D8A93A]/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#D8A93A]/80" />
            <span className="h-px w-8 bg-[#D8A93A]/40" />
          </div>

          <div className="mt-6 w-full max-w-md text-left">
            <LeadForm />
          </div>
        </div>
      </div>
    </main>
  )
}
