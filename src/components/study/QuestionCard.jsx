import { useState } from 'react'

export default function QuestionCard({
question,
index,
answer,
onHint,
activeHintKey,
activeHintIndex,
study
}) {
const [userAnswer, setUserAnswer] = useState('')
const [showAnswer, setShowAnswer] = useState(false)

const isHintActive = activeHintKey === question.hintKey

const total = question.hintKey
? study?.highlightMap?.[question.hintKey]?.length || 0
: 0

return (
<div
className={`card border p-5 transition-all duration-300 ${
        isHintActive ? 'border-purple-200 shadow-glow-purple' : 'border-black/5'
      }`}
> <div className="flex gap-3 mb-4"> <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs font-sans font-semibold flex items-center justify-center mt-0.5">
{index + 1} </span> <p className="font-sans text-sm font-medium text-[#1C1A18] leading-relaxed">
{question.text} </p> </div>

  <textarea
    rows={3}
    value={userAnswer}
    onChange={e => setUserAnswer(e.target.value)}
    placeholder="Write your thoughts here…"
    className="input-base mb-3 p-2 w-full border-slate-300 bg-slate-100"
  />

  <p className="text-xs text-[var(--text)] opacity-70 mb-2">
    Tap “Hint” to see relevant verses highlighted in the scripture, and “Answer” to see one possible answer.
  </p>

  <div className="flex flex-wrap gap-2">
    <button
      onClick={() => onHint(question.hintKey)}
      className={`btn-hint ${isHintActive ? 'ring-2 ring-purple-300' : ''}`}
    >
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.75 3.75 0 01-1.065 2.59l-.196.197a1.5 1.5 0 01-2.122 0l-.196-.197a3.75 3.75 0 01-1.065-2.59L8.343 16.9z" />
      </svg>

      {isHintActive ? 'Next verse →' : 'Show hint'}

      {isHintActive && total > 0 && (
        <span className="text-xs opacity-60 ml-2">
          ({activeHintIndex + 1}/{total})
        </span>
      )}
    </button>

    <button onClick={() => setShowAnswer(v => !v)} className="btn-answer">
      Show answer
    </button>
  </div>

  {showAnswer && (
    <div className="mt-4 p-4 bg-[#EEF2ED] border border-[#B8C9B4] rounded-xl animate-slide-up">
      <p className="text-xs font-sans font-semibold text-[#3F6639] mb-1.5 uppercase tracking-wider">
        Answer
      </p>
      <p className="font-sans text-sm text-[#4A4540] leading-relaxed">
        {answer}
      </p>
    </div>
  )}
</div>
)
}
