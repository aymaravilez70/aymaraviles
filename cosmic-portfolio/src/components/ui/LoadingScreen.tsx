import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void
}

/** Pantalla de carga con planeta minimalista */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const planetRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const planet = planetRef.current
    const ring = ringRef.current
    const progress = progressRef.current
    const text = textRef.current
    if (!container || !planet || !ring || !progress || !text) return

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete,
        })
      },
    })

    gsap.to(planet, { rotation: 360, duration: 3, repeat: -1, ease: 'none' })
    gsap.to(ring, { rotation: -360, duration: 4, repeat: -1, ease: 'none' })

    tl.to(progress, { width: '100%', duration: 2.2, ease: 'power1.inOut' })
      .to(text, { opacity: 1, duration: 0.3 }, 0)
      .to(text, { textContent: 'Calibrando órbitas...', duration: 0.01 }, 0.9)
      .to(text, { textContent: 'Sincronizando planetas...', duration: 0.01 }, 1.5)
      .to(text, { textContent: 'Entrando al cosmos...', duration: 0.01 }, 2)

    return () => {
      tl.kill()
      gsap.killTweensOf([planet, ring, progress, text, container])
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-cosmic-void"
    >
      <div className="relative mb-10">
        <div
          ref={ringRef}
          className="absolute inset-0 -m-6 rounded-full border border-dashed border-accent/30"
          style={{ width: 80, height: 80 }}
        />
        <div
          ref={planetRef}
          className="relative h-16 w-16 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 35% 35%, #6b8cae, #3d5a80 55%, #0a0e17 100%)',
            boxShadow: '0 0 20px rgba(107,140,174,0.3), inset -4px -4px 12px rgba(0,0,0,0.5)',
          }}
        />
      </div>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-cosmic-deep">
        <div
          ref={progressRef}
          className="h-full w-0 rounded-full bg-accent/80"
        />
      </div>

      <p
        ref={textRef}
        className="mt-4 font-body text-sm tracking-widest text-accent-soft/70 uppercase opacity-0"
      >
        Cargando universo...
      </p>
    </div>
  )
}
