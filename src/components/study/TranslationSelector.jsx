import { TRANSLATIONS } from '../../lib/bibleApi'

export default function TranslationSelector({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-1.5 items-center">
      <span className="text-xs text-[#C4BCAF] font-sans mr-1">Translation:</span>
      {TRANSLATIONS.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          title={t.name}
          className={`translation-pill ${active === t.id ? 'active' : ''}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}