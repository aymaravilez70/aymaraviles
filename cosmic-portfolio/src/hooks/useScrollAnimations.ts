import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { MutableRefObject } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  enabled: boolean
  heroScrollProgress?: MutableRefObject<number>
}

/**
 * Animaciones de scroll: reveal, scale-on-scroll (scrub) y parallax.
 */
export function useScrollAnimations({ enabled, heroScrollProgress }: ScrollAnimationOptions) {
  useEffect(() => {
    if (!enabled) return

    const ctx = gsap.context(() => {
      window.scrollTo(0, 0)

      // Hero: escena 3D y texto reaccionan al scroll
      const hero = document.querySelector('#hero')
      const sceneWrap = document.querySelector('.hero-scene-wrap')
      const heroContent = document.querySelector('.hero-content')

      const warp = document.querySelector('.hero-warp')

      if (hero && sceneWrap) {
        ScrollTrigger.create({
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          onUpdate: (self) => {
            if (heroScrollProgress) heroScrollProgress.current = self.progress
          },
        })

        gsap.to(sceneWrap, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      }

      if (hero && warp) {
        gsap.to(warp, {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: '25% top',
            end: 'bottom top',
            scrub: 1,
          },
        })

        gsap.to('.hero-warp-line', {
          scaleX: 2.8,
          ease: 'power1.in',
          scrollTrigger: {
            trigger: hero,
            start: '35% top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      }

      if (hero && heroContent) {
        gsap.to(heroContent, {
          y: -120,
          scale: 0.88,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '60% top',
            scrub: 1,
          },
        })
      }

      // Secciones enteras crecen mientras haces scroll
      gsap.utils.toArray<HTMLElement>('.scroll-section-grow').forEach((section) => {
        gsap.fromTo(
          section,
          { scale: 0.82, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'center center',
              scrub: 1.5,
            },
          }
        )
      })

      // Tarjetas / bloques que crecen al entrar en viewport
      gsap.utils.toArray<HTMLElement>('.scroll-grow').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.7, opacity: 0.2, y: 60 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              end: 'top 35%',
              scrub: 1.2,
            },
          }
        )
      })

      // Parallax suave en capas
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? '0.3')
        gsap.to(el, {
          y: () => window.innerHeight * speed * -0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') ?? el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      // Reveal clásico (sin scrub)
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
        if (section.classList.contains('scroll-section-grow')) return
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Stagger en hijos
      gsap.utils.toArray<HTMLElement>('.reveal-stagger').forEach((container) => {
        const children = container.querySelectorAll('.reveal-item:not(.scroll-grow)')
        if (!children.length) return
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    })

    return () => ctx.revert()
  }, [enabled, heroScrollProgress])
}
