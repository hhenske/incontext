import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import AuthModal from '../auth/AuthModal'

export default function Header() {
  const { user, signOut } = useAuth()
  const location = useLocation()
  const [authOpen, setAuthOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F7F6F3]/90 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-purple-600 text-lg leading-none select-none">✦</span>
            <span className="font-serif font-semibold text-lg tracking-tight text-[#1C1A18] group-hover:text-purple-700 transition-colors">
              InContext
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            <Link
              to="/"
              className={`btn-ghost text-sm ${isHome ? 'text-[#1C1A18]' : 'text-[#8C847A]'}`}
            >
              Studies
            </Link>
            <Link to="/about" className="btn-ghost text-sm text-[#8C847A]">
              About
            </Link>
            {user ? (
              <div className="flex items-center gap-2 ml-2">
                <span className="text-xs text-[#8C847A] font-sans truncate max-w-[120px]">
                  {user.email}
                </span>
                <button onClick={signOut} className="btn-secondary text-xs px-3 py-1.5">
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="btn-primary text-xs px-4 py-2 ml-2"
              >
                Sign in
              </button>
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden btn-ghost p-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-[#4A4540] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-[#4A4540] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-[#4A4540] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-black/[0.06] bg-[#F7F6F3] animate-fade-in">
            <div className="max-w-3xl mx-auto px-4 py-3 flex flex-col gap-1">
              <Link
                to="/"
                className="btn-ghost justify-start"
                onClick={() => setMenuOpen(false)}
              >
                Studies
              </Link>
              <Link
                to="/about"
                className="btn-ghost justify-start"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              {user ? (
                <button
                  onClick={() => { signOut(); setMenuOpen(false) }}
                  className="btn-ghost justify-start text-[#8C847A]"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => { setAuthOpen(true); setMenuOpen(false) }}
                  className="btn-primary mt-1 justify-center"
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