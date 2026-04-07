# InContext

> Discerning God's message to us — rather than using God's Word to support ours.

A mobile-first React application for contextual Scripture study. Each study takes a commonly misquoted verse and walks users through the surrounding passage, guiding them with questions, live Bible API text, translation toggles, hints, and answers.

---

## Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | React 18 + Vite                   |
| Styling     | Tailwind CSS (custom design system)|
| Routing     | React Router v6                   |
| Auth        | Supabase                          |
| Bible Data  | bible-api.com (free, no key needed)|
| Fonts       | Playfair Display + DM Sans        |

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Supabase
```bash
cp .env.example .env
```
Fill in your Supabase project URL and anon key from [app.supabase.com](https://app.supabase.com).

> **Note:** Auth is optional for browsing studies. Users can complete all studies without signing in.

### 3. Run the dev server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── AuthModal.jsx         # Sign in / sign up modal
│   ├── layout/
│   │   └── Header.jsx            # Sticky nav with mobile hamburger
│   └── study/
│       ├── QuestionCard.jsx      # Question with hint/answer reveal
│       ├── ScriptureDisplay.jsx  # Bible API fetcher + verse renderer
│       └── TranslationSelector.jsx
├── data/
│   └── studies.js                # ← ADD YOUR NEW STUDIES HERE
├── hooks/
│   └── useAuth.jsx               # Supabase auth context
├── lib/
│   ├── bibleApi.js               # Bible API utility
│   └── supabase.js               # Supabase client
├── pages/
│   ├── AboutPage.jsx
│   ├── HomePage.jsx
│   └── StudyPage.jsx
├── App.jsx
├── index.css                     # Tailwind + design tokens
└── main.jsx
```

---

## Adding a New Study

Open `src/data/studies.js` and add a new object to the `studies` array:

```js
{
  id: 'your-study-id',           // URL slug: /study/your-study-id
  title: 'Study Title',
  teaser: 'One-line hook...',
  theme: 'Theme Label',
  themeColor: 'purple',          // 'purple' | 'lavender' | 'sage'
  icon: '◆',                     // Unicode symbol for the card
  focusVerse: {
    reference: 'Romans 8:28',
    text: '"All things work together for good..."',
  },
  passages: ['Romans 8:28-39'],  // Passed to Bible API
  contextNote: 'Read Romans 8:28–39...',
  questions: [
    { id: 'q1', text: 'Your question?', hintKey: 'highlight-key' },
    // ...
  ],
  answers: {
    q1: 'The answer text shown when user clicks Show Answer.',
    // ...
  },
  highlightMap: {
    'highlight-key': 'exact phrase in scripture to highlight',
    // ...
  },
}
```

---

## Bible API

Uses [bible-api.com](https://bible-api.com) — free, no API key required.

**Supported translations:** KJV, WEB (World English Bible), ASV, BBE

To add NIV, ESV, or NLT, you'll need an [API.Bible](https://scripture.api.bible) key. Update `src/lib/bibleApi.js` to switch providers.

---

## Design System

Defined in `tailwind.config.js` and `src/index.css`:

- **Canvas:** `#F7F6F3` warm off-white
- **Ink:** `#1C1A18` near-black + muted/light/faint steps
- **Purple:** Primary accent — `purple-600` (#563F94)
- **Lavender:** Secondary accent
- **Sage:** Tertiary / answer reveal
- **Serif font:** Playfair Display — scripture & headings
- **Sans font:** DM Sans — UI & body text

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
