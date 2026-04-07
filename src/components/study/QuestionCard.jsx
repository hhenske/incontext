import { useState } from 'react'

export default function QuestionCard({ question, index, answer, onHint, activeHintKey }) {
  const [userAnswer, setUserAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const isHintActive = activeHintKey === question.hintKey

  return (
    <div
      className={`card border p-5 transition-all duration-300 ${
        isHintActive ? 'border-purple-200 shadow-glow-purple' : 'border-black/5'
      }`}
    >
      {/* Question */}
      <div className="flex gap-3 mb-4">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs font-sans font-semibold flex items-center justify-center mt-0.5">
          {index + 1}
        </span>
        <p className="font-sans text-sm font-medium text-[#1C1A18] leading-relaxed">
          {question.text}
        </p>
      </div>

      {/* Text input */}
      <textarea
        rows={3}
        value={userAnswer}
        onChange={e => setUserAnswer(e.target.value)}
        placeholder="Write your thoughts here…"
        className="input-base mb-3"
      />

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onHint(isHintActive ? null : question.hintKey)}
          className={`btn-hint ${isHintActive ? 'ring-2 ring-purple-300' : ''}`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.75 3.75 0 01-1.065 2.59l-.196.197a1.5 1.5 0 01-2.122 0l-.196-.197a3.75 3.75 0 01-1.065-2.59L8.343 16.9z" />
          </svg>
          {isHintActive ? 'Hide hint' : 'Hint'}
        </button>

        <button onClick={() => setShowAnswer(v => !v)} className="btn-answer">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {showAnswer ? 'Hide answer' : 'Show answer'}
        </button>
      </div>

      {/* Revealed answer */}
      {showAnswer && (
        <div className="mt-4 p-4 bg-[#EEF2ED] border border-[#B8C9B4] rounded-xl animate-slide-up">
          <p className="text-xs font-sans font-semibold text-[#3F6639] mb-1.5 uppercase tracking-wider">
            Answer
          </p>
          <p className="font-sans text-sm text-[#4A4540] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}