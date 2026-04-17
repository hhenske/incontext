import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import AuthModal from '../auth/AuthModal'
import logo from '../../assets/logo.png'

export default function Header() {
  const { user, signOut } = useAuth()
  const location = useLocation()

  const [authOpen, setAuthOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  const isHome = location.pathname === '/'

  const [darkMode, setDarkMode] = useState(() => {
  try {
    return localStorage.getItem('theme') === 'dark'
  } catch {
    return false
  }
})
  

  // 🌙 Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  console.log('App starting...')

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] shadow-sm isolate">
        
        <div className="max-w-5xl mx-auto px-6 h-24 md:h-28 flex items-center justify-between">
        
          {/* LEFT */}
          <Link to="/" className="flex items-center">
            <div className="p-2 rounded-md bg-[var(--bg)] dark:bg-[#1f2128]">
              <img
                src={logo}
                alt="InContext logo"
                className="h-16 w-auto rounded-xl"
              />
            </div>

            <span className="text-[var(--text-h)] font-semibold text-xl md:text-2xl tracking-tight">
                          InContext
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden sm:flex items-center gap-6 text-sm">

            <Link
              to="/"
              className={`transition ${
                isHome ? 'text-[var(--text-h)]' : 'text-[var(--text)]'
              } hover:text-[var(--accent)]`}
            >
              Studies
            </Link>

            <Link
              to="/about"
              className="text-[var(--text)] hover:text-[var(--accent)]"
            >
              About
            </Link>

            {/* 🌙 Dark toggle */}
            <button
              onClick={() => setDarkMode(v => !v)}
              className="btn-ghost text-xs"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {user ? (
              <>
                <span className="text-xs opacity-70 truncate max-w-[120px]">
                  {user.email}
                </span>

                <button onClick={signOut} className="btn-secondary">
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="btn-primary"
              >
                Sign in
              </button>
            )}

          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="sm:hidden btn-ghost p-2"
            onClick={() => setMenuOpen(v => !v)}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-px bg-[var(--text-h)] transition ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-px bg-[var(--text-h)] transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px bg-[var(--text-h)] transition ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        {menuOpen && (
          <div className="sm:hidden border-t border-[var(--border)] bg-[var(--bg)]">
            <div className="px-6 py-4 flex flex-col gap-3">

              <Link to="/" onClick={() => setMenuOpen(false)} className="btn-ghost text-left">
                Studies
              </Link>

              <Link to="/about" onClick={() => setMenuOpen(false)} className="btn-ghost text-left">
                About
              </Link>

              <button
                onClick={() => setDarkMode(v => !v)}
                className="btn-ghost text-left"
              >
                {darkMode ? 'Light mode ☀️' : 'Dark mode 🌙'}
              </button>

              {user ? (
                <button
                  onClick={() => { signOut(); setMenuOpen(false) }}
                  className="btn-secondary text-left"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => { setAuthOpen(true); setMenuOpen(false) }}
                  className="btn-primary"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  )
}