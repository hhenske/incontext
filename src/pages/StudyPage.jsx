import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getStudyById } from '../data/studies'
import ScriptureDisplay from '../components/study/ScriptureDisplay'
import QuestionCard from '../components/study/QuestionCard'

const STEPS = ['intro', 'reading', 'answering', 'complete']

export default function StudyPage() {
const { id } = useParams()
const study = getStudyById(id)
const questionsRef = useRef(null)
const [phase, setPhase] = useState('intro')
const [activeHint, setActiveHint] = useState({
  key: null,
  index: 0
})

if (!study) {
return ( <div className="max-w-3xl mx-auto px-4 py-20 text-center"> <p className="font-serif text-2xl text-ink-muted mb-4">Study not found</p> <Link to="/" className="btn-secondary">← Back to studies</Link> </div>
)
}

const stepIndex = STEPS.indexOf(phase)
const scrollToQuestions = () => {
  questionsRef.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

return ( <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12 pb-20">

```
  {/* Back */}
  <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-ink-light hover:text-ink font-sans mb-6 group transition-colors">
    <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    All studies
  </Link>

  {/* Progress */}
  <div className="flex items-center gap-1.5 mb-8">
    {STEPS.map((s, i) => (
      <div
        key={s}
        className={`step-dot ${
          i === stepIndex
            ? 'active bg-purple-600'
            : i < stepIndex
            ? 'bg-purple-300'
            : 'bg-ink-faint'
        }`}
      />
    ))}
  </div>

  {/* Header */}
  <header className="mb-8 animate-slide-up">
    <span className="text-xs font-sans font-medium text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
      {study.theme}
    </span>
    <h1 className="font-serif text-display-sm font-semibold text-ink mt-3 mb-1">
      {study.title}
    </h1>
    <p className="font-sans text-sm text-ink-muted">{study.teaser}</p>
  </header>

  {/* ── INTRO ── */}
  {phase === 'intro' && (
    <div className="space-y-6 animate-fade-in">

      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
        <p className="text-xs font-sans font-semibold text-purple-400 uppercase tracking-wider mb-3">
          The verse in question
        </p>
        <blockquote className="font-serif text-xl italic text-ink leading-relaxed">
          "{study.focusVerse.text}"
        </blockquote>
        <cite className="block font-sans text-sm text-purple-500 mt-3 not-italic font-medium">
          {study.focusVerse.reference}
        </cite>
      </div>

      <div className="card border border-ink/5 p-5">
        <h2 className="font-sans text-sm font-semibold text-ink mb-2">
          How to use this study
        </h2>
        <ul className="space-y-2 font-sans text-sm text-ink-muted">
          <li>Read the questions first</li>
          <li>Use hints to jump to key verses</li>
          <li>Answer in your own words, then compare</li>
        </ul>
      </div>

      <div className="card border border-ink/5 p-5 space-y-4">
        <h2 className="font-sans text-sm font-semibold text-ink">
          Questions to consider
        </h2>
        {study.questions.map((q, i) => (
          <div key={q.id} className="flex gap-3">
            <span className="text-purple-400">{i + 1}.</span>
            <p className="font-sans text-sm text-ink-muted">
              {q.text}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setPhase('reading')}
        className="btn-primary w-full py-3"
      >
        Start reading
      </button>
    </div>
  )}

  {(phase === 'reading' || phase === 'answering') && (
    <div className="grid md:grid-cols-2 gap-6">

      {/* LEFT COLUMN */}
      <div className="space-y-4">

        <div className="sticky top-28 z-30">
          <button
            onClick={scrollToQuestions}
            className="text-xs text-purple-600 hover:underline font-medium bg-[var(--bg)] px-2 py-1 rounded-md shadow-sm border border-[var(--border)]"
          >
            ↓ Jump to questions
          </button>
        </div>

        <ScriptureDisplay
          passages={study.passages}
          study={study}
          activeHighlightKey={activeHint.key}
          activeHighlightIndex={activeHint.index}
        />

        {phase === 'reading' && (
          <button
            onClick={() => {
              setPhase('answering')
              setTimeout(() => scrollToQuestions(), 100)
            }}
            className="btn-primary w-full py-3"
          >
            I'm ready to answer
          </button>
        )}
      </div>

      {/* RIGHT COLUMN (ALWAYS PRESENT) */}
      <div ref={questionsRef} className="space-y-6">

        {phase === 'answering' ? (
          <>
            <h2 className="font-serif text-xl font-semibold text-ink">
              Answer the questions
            </h2>

            {study.questions.map((q, i) => (
              <QuestionCard
                key={q.id}
                question={q}
                index={i}
                answer={study.answers[q.id]}
                study={study}
                activeHintKey={activeHint.key}
                activeHintIndex={activeHint.index}
                onHint={(hintKey) => {
                  setActiveHint(prev => {
                    if (!hintKey) return { key: null, index: 0 }

                    if (prev.key === hintKey) {
                      const total = study.highlightMap[hintKey]?.length || 0
                      return {
                        key: hintKey,
                        index: total > 0 ? (prev.index + 1) % total : 0
                      }
                    }

                    return { key: hintKey, index: 0 }
                  })
                }}
              />
            ))}

            <button
              onClick={() => setPhase('complete')}
              className="btn-primary w-full py-3"
            >
              Complete study
            </button>
          </>
        ) : (
          <div className="text-sm text-[var(--text)] opacity-60 italic">
            Questions will appear here once you're ready to answer.
          </div>
        )}

      </div>

    </div>
  )}



  {/* ── COMPLETE ── */}
  {phase === 'complete' && (
    <div className="text-center py-8 space-y-6 animate-slide-up">
      <h2 className="font-serif text-2xl font-semibold text-ink">
        Well done
      </h2>

      <button
        onClick={() => setPhase('intro')}
        className="btn-secondary"
      >
        Start over
      </button>

      <Link to="/" className="btn-primary">
        Browse studies
      </Link>
    </div>
  )}
</main>
)
}
