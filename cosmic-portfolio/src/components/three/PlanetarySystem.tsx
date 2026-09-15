import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { MutableRefObject } from 'react'
import { Planet } from './Planet'
import { PLANETS, type PlanetConfig } from './planetConfig'

interface PlanetarySystemProps {
  mouse: MutableRefObject<{ x: number; y: number }>
  onPlanetSelect?: (planet: PlanetConfig) => void
  onPlanetHover?: (planet: PlanetConfig) => void
  onPlanetHoverEnd?: () => void
}

/** Planetas con parallax de mouse — el fondo queda fijo */
export function PlanetarySystem({
  mouse,
  onPlanetSelect,
  onPlanetHover,
  onPlanetHoverEnd,
}: PlanetarySystemProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    const group = groupRef.current
    if (!group) return

    const targetX = mouse.current.x * 1.1
    const targetY = mouse.current.y * 0.7
    const targetRotY = mouse.current.x * 0.15
    const targetRotX = mouse.current.y * 0.08

    group.position.x = THREE.MathUtils.lerp(group.position.x, targetX, 0.05)
    group.position.y = THREE.MathUtils.lerp(group.position.y, targetY, 0.05)
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetRotY, 0.04)
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRotX, 0.04)
  })

  return (
    <group ref={groupRef}>
      {PLANETS.map((planet) => (
        <Planet
          key={planet.id}
          config={planet}
          onClick={onPlanetSelect}
          onHover={onPlanetHover}
          onHoverEnd={onPlanetHoverEnd}
        />
      ))}
    </group>
  )
}

export { PLANETS }
