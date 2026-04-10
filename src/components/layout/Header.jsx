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
      <header className="border-b">
  <div className="flex justify-between items-center p-4">
    <div className="flex gap-2">
      <span>✦</span>
      <span>InContext</span>
    </div>
    <div className="debug">
  <div>A</div>
  <div>B</div>
</div>
    <nav className="flex gap-6 bg-yellow-200">
  <div className="bg-blue-200">Studies</div>
  <div className="bg-green-200">About</div>
  <div className="bg-red-200">Sign in</div>
</nav>
  </div>
</header>
    </>
    )}