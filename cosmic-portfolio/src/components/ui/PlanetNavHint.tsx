import type { PlanetConfig } from '../three/planetConfig'

interface PlanetNavHintProps {
  planet: PlanetConfig | null
}

/** Hint al hover: planeta → sección destino */
export function PlanetNavHint({ planet }: PlanetNavHintProps) {
  if (!planet) return null

  return (
    <div
      className="pointer-events-none fixed bottom-28 left-1/2 z-20 -translate-x-1/2 md:bottom-32"
      style={{ color: planet.atmosphereColor }}
    >
      <div
        className="glass-panel rounded-full border px-5 py-2.5 font-body text-xs tracking-wide md:text-sm"
        style={{
          borderColor: `${planet.atmosphereColor}44`,
          boxShadow: `0 0 24px ${planet.atmosphereColor}22`,
        }}
      >
        <span className="font-semibold text-white/90">{planet.name}</span>
        <span className="mx-2 text-white/30">→</span>
        <span className="text-white/70">{planet.destination.label}</span>
        <span className="mt-0.5 block text-center text-[10px] tracking-widest text-white/35 uppercase md:text-xs">
          {planet.destination.hint}
        </span>
      </div>
    </div>
  )
}
