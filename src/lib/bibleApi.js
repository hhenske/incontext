// Bible API — using bible-api.com (free, no key required)
// Supported translations: kjv, web (World English Bible), asv, bbe, ylt, darby
// For NIV/ESV/NLT you would need a paid API key (API.Bible or Bolls.life)

const BASE_URL = 'https://bible-api.com'

// Map our UI translation labels to API identifiers
export const TRANSLATIONS = [
  { id: 'kjv', label: 'KJV', name: 'King James Version' },
  { id: 'web', label: 'WEB', name: 'World English Bible' },
  { id: 'asv', label: 'ASV', name: 'American Standard Version' },
  { id: 'bbe', label: 'BBE', name: 'Bible in Basic English' },
]

export const DEFAULT_TRANSLATION = 'kjv'

/**
 * Fetch a single passage from the Bible API
 * @param {string} reference - e.g. "Philippians 4:11-13" or "John 8:31-47"
 * @param {string} translation - one of the ids in TRANSLATIONS
 * @returns {Promise<{ reference: string, text: string, verses: Array, translation: string }>}
 */
export async function fetchPassage(reference, translation = DEFAULT_TRANSLATION) {
  const encoded = encodeURIComponent(reference)
  const url = `${BASE_URL}/${encoded}?translation=${translation}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Bible API error: ${response.status}`)
  }

  const data = await response.json()
  return {
    reference:   data.reference,
    text:        data.text,
    verses:      data.verses || [],
    translation: data.translation_name || translation,
  }
}

/**
 * Fetch multiple passages and return as an array
 * @param {string[]} references
 * @param {string} translation
 * @returns {Promise<Array>}
 */
export async function fetchMultiplePassages(references, translation = DEFAULT_TRANSLATION) {
  return Promise.all(references.map(ref => fetchPassage(ref, translation)))
}