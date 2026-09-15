import type { Vector3Tuple } from 'three'

export type PlanetSectionId = 'projects' | 'about' | 'skills' | 'contact'

export interface PlanetDestination {
  sectionId: PlanetSectionId
  label: string
  hint: string
}

export interface PlanetConfig {
  id: string
  name: string
  destination: PlanetDestination
  radius: number
  color: string
  atmosphereColor: string
  emissive: string
  emissiveIntensity: number
  position: Vector3Tuple
  orbitRadius: number
  orbitSpeed: number
  rotationSpeed: number
  floatAmplitude: number
  floatSpeed: number
  material: 'rocky' | 'gas' | 'ice'
  roughness: number
  metalness: number
  hasRing?: boolean
  ringColor?: string
}

/** Paleta sobria — tonos espaciales naturales */
export const PLANETS: PlanetConfig[] = [
  {
    id: 'azure-giant',
    name: 'Nebulon',
    destination: {
      sectionId: 'projects',
      label: 'Proyectos',
      hint: '7+ misiones en órbita',
    },
    radius: 1.35,
    color: '#3d5a80',
    atmosphereColor: '#6b8cae',
    emissive: '#2a4365',
    emissiveIntensity: 0.08,
    position: [-3.8, 0.8, -3],
    orbitRadius: 0.5,
    orbitSpeed: 0.18,
    rotationSpeed: 0.08,
    floatAmplitude: 0.15,
    floatSpeed: 0.5,
    material: 'gas',
    roughness: 0.55,
    metalness: 0.05,
  },
  {
    id: 'terracotta',
    name: 'Ares',
    destination: {
      sectionId: 'about',
      label: 'Sobre mí',
      hint: 'Full Stack Developer',
    },
    radius: 0.75,
    color: '#8b5e4a',
    atmosphereColor: '#c4956a',
    emissive: '#5c3d2e',
    emissiveIntensity: 0.06,
    position: [-1.5, -1.5, -1],
    orbitRadius: 0.9,
    orbitSpeed: 0.28,
    rotationSpeed: 0.12,
    floatAmplitude: 0.2,
    floatSpeed: 0.7,
    material: 'rocky',
    roughness: 0.92,
    metalness: 0.02,
  },
  {
    id: 'slate-moon',
    name: 'Luna',
    destination: {
      sectionId: 'contact',
      label: 'Contacto',
      hint: 'Guayaquil, Ecuador',
    },
    radius: 0.45,
    color: '#6b7280',
    atmosphereColor: '#9ca3af',
    emissive: '#374151',
    emissiveIntensity: 0.04,
    position: [4.2, 1.2, -2.5],
    orbitRadius: 0.6,
    orbitSpeed: 0.35,
    rotationSpeed: 0.05,
    floatAmplitude: 0.18,
    floatSpeed: 0.9,
    material: 'rocky',
    roughness: 0.98,
    metalness: 0.0,
  },
  {
    id: 'lavender-giant',
    name: 'Ophelia',
    destination: {
      sectionId: 'skills',
      label: 'Habilidades',
      hint: 'React · Next.js · TypeScript',
    },
    radius: 1.0,
    color: '#5b4b7a',
    atmosphereColor: '#8b7fad',
    emissive: '#3d3352',
    emissiveIntensity: 0.1,
    position: [2.5, 2.0, -4.5],
    orbitRadius: 0.4,
    orbitSpeed: 0.15,
    rotationSpeed: 0.1,
    floatAmplitude: 0.12,
    floatSpeed: 0.45,
    material: 'gas',
    roughness: 0.45,
    metalness: 0.08,
    hasRing: true,
    ringColor: '#7a6b8a',
  },
  {
    id: 'ice-world',
    name: 'Glacius',
    destination: {
      sectionId: 'projects',
      label: 'Proyectos IA',
      hint: 'Automatización & visión artificial',
    },
    radius: 0.65,
    color: '#7a9eb8',
    atmosphereColor: '#a8c4d9',
    emissive: '#4a667a',
    emissiveIntensity: 0.07,
    position: [1.2, -2.2, -2],
    orbitRadius: 0.7,
    orbitSpeed: 0.22,
    rotationSpeed: 0.15,
    floatAmplitude: 0.22,
    floatSpeed: 0.65,
    material: 'ice',
    roughness: 0.25,
    metalness: 0.15,
  },
]
