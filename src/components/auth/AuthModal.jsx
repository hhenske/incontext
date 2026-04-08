import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export default function AuthModal({ isOpen, onClose }) {
  const { signIn, signUp } = useAuth()
  const [mode, setMode]         = useState('signin')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'signin') {
        await signIn(email, password)
        onClose()
      } else {
        await signUp(email, password)
        setSuccess(true)
      }
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-[#1C1A18]/40 backdrop-blur-sm animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-modal p-6 animate-slide-up">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-xl font-semibold text-[#1C1A18]">
              {mode === 'signin' ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="text-xs text-[#8C847A] mt-0.5 font-sans">
              {mode === 'signin' ? 'Sign in to track your studies' : 'Join to save your progress'}
            </p>
          </div>
          <button onClick={onClose} className="btn-ghost p-1.5 text-[#8C847A]">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Success state */}
        {success ? (
          <div className="text-center py-4">
            <div className="text-3xl mb-3">✉️</div>
            <p className="text-[#1C1A18] font-sans font-medium text-sm">Check your email</p>
            <p className="text-[#8C847A] text-xs mt-1">We sent you a confirmation link.</p>
            <button onClick={onClose} className="btn-primary w-full mt-5">Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#4A4540] mb-1.5 font-sans">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-base"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4A4540] mb-1.5 font-sans">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-base"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-sans bg-red-50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Create account'}
            </button>

            <p className="text-center text-xs text-[#8C847A] font-sans">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                onClick={() => { setMode(m => m === 'signin' ? 'signup' : 'signin'); setError('') }}
                className="text-purple-600 hover:underline font-medium"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}