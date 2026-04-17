import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import StudyPage from './pages/StudyPage'
import AboutPage from './pages/AboutPage'

function SpaRedirectHandler() {
  const navigate = useNavigate()
  useEffect(() => {
    const redirect = sessionStorage.getItem('spa_redirect')
    if (redirect && redirect !== '/') {
      sessionStorage.removeItem('spa_redirect')
      navigate(redirect, { replace: true })
    }
  }, [navigate])
  return null
}

export default function App() {




  return (
    <BrowserRouter>
      <SpaRedirectHandler />

      <div className="min-h-dvh bg-canvas text-main flex flex-col">

        <Header />
        
        {/* PAGE CONTENT */}
        <main className="flex-1">
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/study/:id"  element={<StudyPage />} />
            <Route path="/about"      element={<AboutPage />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
