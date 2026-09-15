import { useCallback, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMouseParallax } from '../hooks/useMouseParallax'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'
import { Contact } from '../components/sections/Contact'

interface HomePageProps {
  sessionKey: number
}

export function HomePage({ sessionKey }: HomePageProps) {
  const mouse = useMouseParallax()
  const heroScrollProgress = useRef(0)
  const [scrollMotionEnabled, setScrollMotionEnabled] = useState(false)

  const handleIntroComplete = useCallback(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      setScrollMotionEnabled(true)
    })
  }, [])

  useScrollAnimations({ enabled: scrollMotionEnabled, heroScrollProgress })

  return (
    <>
      <Hero
        key={sessionKey}
        mouse={mouse}
        loaded
        onIntroComplete={handleIntroComplete}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  )
}
