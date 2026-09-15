import { useMemo } from 'react'
import * as THREE from 'three'

interface PlanetAtmosphereProps {
  radius: number
  color: string
  intensity?: number
}

/** Fresnel atmosphere — suave, sin halos planos */
export function PlanetAtmosphere({ radius, color, intensity = 0.3 }: PlanetAtmosphereProps) {
  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color(color) },
      intensity: { value: intensity },
    }),
    [color, intensity]
  )

  return (
    <mesh scale={1.08} raycast={() => null}>
      <sphereGeometry args={[radius, 48, 48]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={/* glsl */ `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={/* glsl */ `
          uniform vec3 glowColor;
          uniform float intensity;
          varying vec3 vNormal;
          void main() {
            float fresnel = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
            gl_FragColor = vec4(glowColor, fresnel * intensity);
          }
        `}
      />
    </mesh>
  )
}
