import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface EnergyParticlesProps {
  count?: number
}

/** Floating energy motes with additive blending */
export function EnergyParticles({ count = 200 }: EnergyParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#ff2d95'),
      new THREE.Color('#00f5ff'),
      new THREE.Color('#b44dff'),
      new THREE.Color('#ff6b2b'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3

      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = Math.random() * 0.015 + 0.005
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01

      const color = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors, velocities }
  }, [count])

  useFrame(() => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]

      // Wrap around bounds
      if (pos[i * 3 + 1] > 8) pos[i * 3 + 1] = -8
      if (pos[i * 3] > 12) pos[i * 3] = -12
      if (pos[i * 3] < -12) pos[i * 3] = 12
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
