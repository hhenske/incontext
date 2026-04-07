import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getStudyById } from '../data/studies'
import ScriptureDisplay from '../components/study/ScriptureDisplay'
import QuestionCard from '../components/study/QuestionCard'

// Study phases:
// 'intro'     → Show focus verse + questions to consider, no answers yet
// 'reading'   → Scripture loaded, translation toggle, hint available, "I'm ready" button
// 'answering' → Questions with text inputs + hint + show answer
// 'complete'  → Encouragement / summary

const STEPS = ['intro', 'reading', 'answering', 'complete']

export default function StudyPage() {
  const { id }                          = useParams()
  const study                           = getStudyById(id)
  const [phase, setPhase]               = useState('intro')
  const [activeHintKey, setActiveHintKey] = useState(null)

  if (!study) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="font-serif text-2xl text-ink-muted mb-4">Study not found</p>
        <Link to="/" className="btn-secondary">← Back to studies</Link>
      </div>
    )
  }

  const stepIndex = STEPS.indexOf(phase)

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 sm:py-12 pb-20">
      {/* Back */}
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-ink-light hover:text-ink font-sans mb-6 group transition-colors">
        <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        All studies
      </Link>

      {/* Progress dots */}
      <div className="flex items-center gap-1.5 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className={`step-dot ${i === stepIndex ? 'active bg-purple-600' : i < stepIndex ? 'bg-purple-300' : 'bg-ink-faint'}`} />
        ))}
      </div>

      {/* Study header */}
      <header className="mb-8 animate-slide-up">
        <span className="text-xs font-sans font-medium text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
          {study.theme}
        </span>
        <h1 className="font-serif text-display-sm font-semibold text-ink mt-3 mb-1">
          {study.title}
        </h1>
        <p className="font-sans text-sm text-ink-muted">{study.teaser}</p>
      </header>

      {/* ── PHASE: INTRO ── */}
      {phase === 'intro' && (
        <div className="space-y-6 animate-fade-in">
          {/* Focus verse */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
            <p className="text-xs font-sans font-semibold text-purple-400 uppercase tracking-wider mb-3">
              The verse in question
            </p>
            <blockquote className="font-serif text-xl italic text-ink leading-relaxed">
              "{study.focusVerse.text}"
            </blockquote>
            <cite className="block font-sans text-sm text-purple-500 mt-3 not-italic font-medium">
              — {study.focusVerse.reference}
            </cite>
          </div>

          {/* Instructions */}
          <div className="card border border-ink/5 p-5">
            <h2 className="font-sans text-sm font-semibold text-ink mb-2">How to use this study</h2>
            <ul className="space-y-2 font-sans text-sm text-ink-muted">
              <li className="flex gap-2.5">
                <span className="text-purple-400 mt-0.5 flex-shrink-0">1.</span>
                Read the questions below. Keep them in mind as you read the passage.
              </li>
              <li className="flex gap-2.5">
                <span className="text-purple-400 mt-0.5 flex-shrink-0">2.</span>
                When you're ready, the full passage will load. Use hints to highlight key phrases.
              </li>
              <li className="flex gap-2.5">
                <span className="text-purple-400 mt-0.5 flex-shrink-0">3.</span>
                Answer the questions in your own words, then check the provided answers.
              </li>
            </ul>
          </div>

          {/* Questions preview */}
          <div className="card border border-ink/5 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-sans text-sm font-semibold text-ink">Questions to consider</h2>
              <span className="text-xs text-ink-faint font-sans">{study.passages.join(', ')}</span>
            </div>
            {study.questions.map((q, i) => (
              <div key={q.id} className="flex gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 text-purple-600 text-xs font-sans font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="font-sans text-sm text-ink-muted leading-relaxed">{q.text}</p>
              </div>
            ))}
          </div>

          {/* Context note */}
          <p className="text-xs text-ink-light font-sans italic text-center px-4">
            {study.contextNote}
          </p>

          <button onClick={() => setPhase('reading')} className="btn-primary w-full py-3">
            Load the passage — I'm ready to read
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      )}

      {/* ── PHASE: READING ── */}
      {phase === 'reading' && (
        <div className="space-y-6 animate-fade-in">
          {/* Remind them of questions */}
          <details className="card border border-ink/5 group" open>
            <summary className="px-5 py-3 flex items-center justify-between cursor-pointer list-none font-sans text-sm font-medium text-ink-muted hover:text-ink select-none">
              Questions to keep in mind
              <svg className="w-4 h-4 transition-transform group-open:rotate-180 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="px-5 pb-4 space-y-3 border-t border-ink/5 pt-3">
              {study.questions.map((q, i) => (
                <div key={q.id} className="flex gap-2.5">
                  <span className="flex-shrink-0 text-xs text-purple-400 font-sans font-semibold mt-0.5">{i+1}.</span>
                  <p className="font-sans text-sm text-ink-muted">{q.text}</p>
                </div>
              ))}
            </div>
          </details>

          {/* Scripture */}
          <ScriptureDisplay
            passages={study.passages}
            study={study}
            activeHighlightKey={activeHintKey}
          />

          <button
            onClick={() => { setPhase('answering'); setActiveHintKey(null) }}
            className="btn-primary w-full py-3"
          >
            I've read it — answer the questions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      )}

      {/* ── PHASE: ANSWERING ── */}
      {phase === 'answering' && (
        <div className="space-y-6 animate-fade-in">
          {/* Scripture still visible, collapsed */}
          <details className="card border border-ink/5 group">
            <summary className="px-5 py-3 flex items-center justify-between cursor-pointer list-none font-sans text-sm font-medium text-ink-muted hover:text-ink select-none">
              View passage ({study.passages.join(', ')})
              <svg className="w-4 h-4 transition-transform group-open:rotate-180 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <div className="border-t border-ink/5">
              <div className="p-4">
                <ScriptureDisplay
                  passages={study.passages}
                  study={study}
                  activeHighlightKey={activeHintKey}
                />
              </div>
            </div>
          </details>

          <h2 className="font-serif text-xl font-semibold text-ink">Answer the questions</h2>

          {study.questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={i}
              answer={study.answers[q.id]}
              onHint={setActiveHintKey}
              activeHintKey={activeHintKey}
            />
          ))}

          <button onClick={() => setPhase('complete')} className="btn-primary w-full py-3 mt-2">
            Complete this study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </button>
        </div>
      )}

      {/* ── PHASE: COMPLETE ── */}
      {phase === 'complete' && (
        <div className="text-center py-8 space-y-6 animate-slide-up">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto text-3xl">
            ✦
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink mb-2">Well done</h2>
            <p className="font-sans text-sm text-ink-muted max-w-sm mx-auto leading-relaxed">
              You've taken the time to read Scripture in context. That discipline is the foundation of faithful interpretation.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 text-left max-w-sm mx-auto">
            <p className="font-serif text-sm italic text-ink leading-relaxed">
              "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth."
            </p>
            <cite className="block font-sans text-xs text-purple-500 mt-2 not-italic">— 2 Timothy 2:15</cite>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button onClick={() => setPhase('intro')} className="btn-secondary">
              Start over
            </button>
            <Link to="/" className="btn-primary">
              Browse other studies
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}