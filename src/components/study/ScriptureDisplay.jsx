import { useEffect, useState, useRef } from 'react'
import { fetchMultiplePassages, DEFAULT_TRANSLATION } from '../../lib/bibleApi'
import TranslationSelector from './TranslationSelector'

export default function ScriptureDisplay({ passages, study, activeHighlightKey, activeHighlightIndex }) {
  const [translation, setTranslation] = useState(DEFAULT_TRANSLATION)
  const [data, setData]               = useState([])
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState(null)
  const highlightRef                  = useRef(null)


  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetchMultiplePassages(passages, translation)
      .then(results => { if (!cancelled) { setData(results); setLoading(false) } })
      .catch(err    => { if (!cancelled) { setError(err.message); setLoading(false) } })
    return () => { cancelled = true }
  }, [passages, translation])

  useEffect(() => {
    if (activeHighlightKey && highlightRef.current) {
      setTimeout(() => {
        highlightRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 150)
    }
  }, [activeHighlightKey, activeHighlightIndex])


  const highlightedVerses = study?.highlightMap?.[activeHighlightKey] || []
  const activeVerse = highlightedVerses[activeHighlightIndex]




  return (
    <div className="space-y-5">
      {/* Translation bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <TranslationSelector active={translation} onChange={setTranslation} />
        {loading && (
          <span className="text-xs text-[#C4BCAF] font-sans animate-pulse-soft">Loading…</span>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600 font-sans">
          Unable to load scripture. Please check your connection and try again.
        </div>
      )}

      {/* Passages */}
      {!loading && !error && data.map((passage, pi) => (
        <div key={pi} className="bg-white border border-black/5 rounded-xl overflow-hidden shadow-card">
          <div className="px-5 py-3 border-b border-black/5 bg-[#EFEDE8]/40 flex items-center justify-between">
            <span className="font-sans text-xs font-semibold text-[#4A4540] uppercase tracking-wider">
              {passage.reference}
            </span>
            <span className="text-xs text-[#C4BCAF] font-sans leading-snug">{passage.translation}</span>
          </div>
          <div className="px-5 py-5 space-y-2">
            {passage.verses.length > 0 ? (
              passage.verses.map((v, vi) => {
              const isHighlighted = String(v.verse) === String(activeVerse)

              return (
                <p
                  key={vi}
                  ref={isHighlighted ? highlightRef : null}
                  data-highlight={isHighlighted}
                  className={`font-serif text-[1.125rem] leading-snug transition ${
                    isHighlighted
                      ? 'bg-purple-100 dark:bg-purple-900/40 rounded px-1'
                      : 'text-[#1C1A18]'
                  }`}
                >
                  <sup className="text-xs text-[#C4BCAF] mr-1 not-italic select-none">
                    {v.verse}
                  </sup>
                  {v.text}
                </p>
              )
            })) : (
              <p className="text-[#1C1A18]">No verses to display.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}