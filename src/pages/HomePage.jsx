import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 sm:py-16">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-[#8C847A] hover:text-[#1C1A18] font-sans mb-8 group transition-colors">
        <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Back
      </Link>
      <header className="mb-10 animate-slide-up">
        <span className="text-purple-600 text-2xl">✦</span>
        <h1 className="font-serif text-[1.875rem] font-semibold text-[#1C1A18] mt-3 mb-4">About InContext</h1>
        <p className="font-sans text-base text-[#4A4540] leading-relaxed">
          InContext is a Scripture study tool built on a simple conviction: we should read God's Word
          to hear what God is saying — not to find verses that support what we've already decided.
        </p>
      </header>
      <div className="space-y-8 font-sans text-sm text-[#4A4540] leading-relaxed">
        <section>
          <h2 className="font-serif text-lg font-semibold text-[#1C1A18] mb-2">The problem with proof-texting</h2>
          <p>
            A single verse, lifted from its context, can be made to say almost anything. This is called
            "proof-texting" — the practice of selecting isolated passages to validate a pre-formed
            conclusion. It's widespread, often unintentional, and it quietly distorts how we understand Scripture.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-[#1C1A18] mb-2">What InContext does</h2>
          <p>
            Each study takes a widely recognized verse — one that is often quoted out of context — and
            asks you to read the surrounding passage carefully before interpreting it. Questions guide
            your reading. Hints point you to key phrases. Answers reflect what the original author was
            communicating to the original audience.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-[#1C1A18] mb-2">A note on translations</h2>
          <p>
            We pull live scripture from multiple translations so you can compare wording. No single
            translation is perfect; reading two or three together often clarifies meaning.
          </p>
        </section>
        <div className="border-t border-black/[0.08] pt-6 text-center">
          <p className="font-serif italic text-[#8C847A]">
            "The sum of your word is truth, and every one of your righteous rules endures forever."
          </p>
          <p className="text-xs text-[#C4BCAF] mt-1">— Psalm 119:160</p>
        </div>
      </div>
    </main>
  )
}