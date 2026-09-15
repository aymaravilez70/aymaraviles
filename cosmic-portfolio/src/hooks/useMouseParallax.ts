import { useEffect, useRef } from 'react'

/** Normalized mouse position in range [-1, 1] for 3D parallax */
export function useMouseParallax() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return mouse
}
