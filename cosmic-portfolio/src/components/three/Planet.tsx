import { useRef, useState } from 'react'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import type { PlanetConfig } from './planetConfig'
import { PlanetAtmosphere } from './PlanetAtmosphere'

interface PlanetProps {
  config: PlanetConfig
  onClick?: (config: PlanetConfig) => void
  onHover?: (config: PlanetConfig) => void
  onHoverEnd?: () => void
}

/** Planeta con atmósfera fresnel, anillos opcionales y materiales naturales */
export function Planet({ config, onClick, onHover, onHoverEnd }: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null)
  const bodyRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const scaleRef = useRef(1)

  const targetScale = hovered ? 1.08 : clicked ? 1.12 : 1

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const group = groupRef.current
    const body = bodyRef.current
    const ring = ringRef.current
    if (!group || !body) return

    const orbitX = Math.cos(t * config.orbitSpeed) * config.orbitRadius
    const orbitZ = Math.sin(t * config.orbitSpeed) * config.orbitRadius
    const floatY = Math.sin(t * config.floatSpeed) * config.floatAmplitude

    group.position.set(
      config.position[0] + orbitX,
      config.position[1] + floatY,
      config.position[2] + orbitZ
    )

    body.rotation.y = t * config.rotationSpeed

    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 0.06)
    body.scale.setScalar(scaleRef.current)

    if (ring) {
      ring.rotation.z = t * 0.05
      ring.scale.setScalar(scaleRef.current)
    }

    const mat = body.material as THREE.MeshStandardMaterial
    if (mat?.emissiveIntensity !== undefined) {
      const targetEmissive = hovered ? config.emissiveIntensity * 2 : config.emissiveIntensity
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetEmissive, 0.08)
    }
  })

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setClicked(true)
    onClick?.(config)
    setTimeout(() => setClicked(false), 600)
  }

  const renderBody = () => {
    if (config.material === 'gas') {
      return (
        <MeshDistortMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={config.emissiveIntensity}
          roughness={config.roughness}
          metalness={config.metalness}
          distort={0.12}
          speed={0.8}
        />
      )
    }

    if (config.material === 'ice') {
      return (
        <meshPhysicalMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={config.emissiveIntensity}
          roughness={config.roughness}
          metalness={config.metalness}
          clearcoat={0.6}
          clearcoatRoughness={0.3}
          envMapIntensity={0.8}
        />
      )
    }

    return (
      <meshStandardMaterial
        color={config.color}
        emissive={config.emissive}
        emissiveIntensity={config.emissiveIntensity}
        roughness={config.roughness}
        metalness={config.metalness}
      />
    )
  }

  return (
    <group ref={groupRef}>
      {/* Área de clic ampliada — invisible */}
      <Sphere
        args={[config.radius * 1.45, 16, 16]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          onHover?.(config)
          document.body.dataset.cursorPlanet = 'true'
        }}
        onPointerOut={() => {
          setHovered(false)
          onHoverEnd?.()
          delete document.body.dataset.cursorPlanet
        }}
        onPointerDown={handlePointerDown}
      >
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </Sphere>

      <Sphere ref={bodyRef} args={[config.radius, 64, 64]}>
        {renderBody()}
      </Sphere>

      <PlanetAtmosphere
        radius={config.radius}
        color={config.atmosphereColor}
        intensity={hovered ? 0.45 : 0.28}
      />

      {config.hasRing && (
        <mesh ref={ringRef} rotation={[Math.PI / 2.8, 0.2, 0.1]} raycast={() => null}>
          <torusGeometry args={[config.radius * 1.75, config.radius * 0.06, 2, 80]} />
          <meshStandardMaterial
            color={config.ringColor ?? '#6b7280'}
            transparent
            opacity={0.45}
            side={THREE.DoubleSide}
            roughness={0.9}
            metalness={0.1}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  )
}
