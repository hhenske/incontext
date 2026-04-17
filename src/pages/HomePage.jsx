import { Link } from 'react-router-dom'
import { studies } from '../data/studies'

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">

      {/* INTRO */}
      <section className="mb-10 text-left">
        <h1 className="text-3xl font-semibold mb-4">
          Study Scripture in Context
        </h1>

        <p className="text-[var(--text)] max-w-2xl leading-relaxed">
          InContext helps you explore Bible verses the way they were meant to be understood:
          in their full context. Choose a study below to dive deeper into truth, strength,
          and God’s promises.
        </p>
      </section>

      {/* STUDY LIST */}
      <section className="grid gap-6 sm:grid-cols-2">

        {studies.map(study => (
          <Link
            key={study.id}
            to={`/study/${study.id}`}
            className="block p-5 rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-all hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-[var(--text-h)] mb-2">
              {study.title}
            </h2>

            <p className="text-sm text-[var(--text)]">
              {study.description}
            </p>
          </Link>
        ))}

      </section>

    </main>
  )
}