import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import StudyPage from './pages/StudyPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-dvh bg-canvas">
          <Header />
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/study/:id"  element={<StudyPage />} />
            <Route path="/about"      element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}