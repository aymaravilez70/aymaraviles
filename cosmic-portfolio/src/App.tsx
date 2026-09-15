import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { CustomCursor } from './components/ui/CustomCursor'
import { Navigation } from './components/layout/Navigation'
import { FloatingOrbs } from './components/ui/FloatingOrbs'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { usePageReset } from './hooks/usePageReset'

function AppContent({ sessionKey }: { sessionKey: number }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else if (location.pathname !== '/') {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <Navigation />
      <FloatingOrbs />
      <main className="relative">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-cosmic-void">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse at 30% 40%, rgba(61,90,128,0.12) 0%, transparent 55%), radial-gradient(ellipse at 70% 60%, rgba(74,85,104,0.08) 0%, transparent 50%)',
            }}
          />
        </div>

        <Routes>
          <Route path="/" element={<HomePage sessionKey={sessionKey} />} />
          <Route path="/proyecto/:id" element={<ProjectDetailPage />} />
        </Routes>
      </main>
    </>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [sessionKey] = useState(() => Date.now())
  const handleLoadComplete = useCallback(() => setLoaded(true), [])

  usePageReset()

  return (
    <BrowserRouter>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      {loaded && <CustomCursor />}
      {loaded && <AppContent sessionKey={sessionKey} />}
    </BrowserRouter>
  )
}
