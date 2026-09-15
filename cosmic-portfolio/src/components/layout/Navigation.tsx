import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PORTFOLIO } from '../../config/portfolio'

/** Navegación con React Router */
export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-xl font-bold text-gradient-cosmic md:text-2xl"
          data-cursor="hover"
        >
          {PORTFOLIO.name.split(' ')[0]}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {PORTFOLIO.nav.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="font-body text-sm tracking-wide text-white/70 transition-colors hover:text-accent-soft md:text-base"
                data-cursor="hover"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {!isHome && (
            <li>
              <Link
                to="/#projects"
                className="rounded-full border border-accent/40 px-4 py-1.5 font-body text-sm text-accent-soft hover:bg-accent/10"
                data-cursor="hover"
              >
                Portafolio
              </Link>
            </li>
          )}
        </ul>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          data-cursor="hover"
        >
          <span
            className={`block h-0.5 w-7 bg-accent-soft transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-7 bg-white/60 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-7 bg-accent transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="glass-panel border-t border-white/10 md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {PORTFOLIO.nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="font-body text-lg text-white/80"
                  data-cursor="hover"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
