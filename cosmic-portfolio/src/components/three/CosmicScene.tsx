import { Suspense, useLayoutEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import type { Points } from 'three'
import { Environment, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import type { MutableRefObject } from 'react'
import { NebulaBackground } from './NebulaBackground'
import { StarField } from './StarField'
import { PlanetarySystem } from './PlanetarySystem'
import type { PlanetConfig } from './planetConfig'

interface CosmicSceneProps {
  mouse: MutableRefObject<{ x: number; y: number }>
  onPlanetSelect?: (planet: PlanetConfig) => void
  onPlanetHover?: (planet: PlanetConfig) => void
  onPlanetHoverEnd?: () => void
  className?: string
}

/** Estrellas decorativas — no interceptan clics */
function BackgroundStars() {
  const starsRef = useRef<Points>(null)

  useLayoutEffect(() => {
    if (starsRef.current) starsRef.current.raycast = () => undefined
  }, [])

  return (
    <Stars
      ref={starsRef}
      radius={70}
      depth={40}
      count={800}
      factor={2}
      saturation={0}
      fade
      speed={0.3}
    />
  )
}

/** Escena hero con post-procesado suave */
export function CosmicScene({
  mouse,
  onPlanetSelect,
  onPlanetHover,
  onPlanetHoverEnd,
  className = '',
}: CosmicSceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.95,
        }}
        style={{ background: '#0a0e17', touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#0a0e17']} />
          <NebulaBackground />
          <StarField count={1800} />
          <BackgroundStars />

          <ambientLight intensity={0.25} color="#1a2030" />
          <directionalLight position={[8, 4, 6]} intensity={1.2} color="#c9d1e0" />
          <directionalLight position={[-6, -2, -4]} intensity={0.3} color="#4a5568" />
          <pointLight position={[0, 0, 4]} intensity={0.4} color="#8899b0" distance={20} />

          <PlanetarySystem
            mouse={mouse}
            onPlanetSelect={onPlanetSelect}
            onPlanetHover={onPlanetHover}
            onPlanetHoverEnd={onPlanetHoverEnd}
          />

          <Environment preset="night" />

          <EffectComposer multisampling={0}>
            <Bloom
              intensity={0.45}
              luminanceThreshold={0.65}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.25} darkness={0.55} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}
