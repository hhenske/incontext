// ============================================================
// InContext — Study Definitions
// ============================================================
// Each study has:
//   id, title, teaser, theme, focusVerse, passages (for API),
//   questions (asked before & after reading),
//   questionAnswers (answers keyed by question index),
//   questionHints (highlight keys keyed by question index),
//   highlightMap (key → phrase to highlight in scripture)
// ============================================================

export const studies = [
  // ──────────────────────────────────────────────────────────
  // 1. Know the Truth (John 8:32)
  // ──────────────────────────────────────────────────────────
  {
    id: 'know-the-truth',
    title: 'Know the Truth',
    teaser: '"The truth will set you free" — but free from what, exactly? The context reveals a very specific freedom.',
    theme: 'Freedom & Discipleship',
    themeColor: 'purple',
    icon: '✦',
    focusVerse: {
      reference: 'John 8:32',
      text: '"…and you will know the truth, and the truth will set you free."',
    },
    passages: ['John 8:31-47'],
    contextNote: 'Read the full exchange between Jesus and the Jewish leaders in John 8:31–47.',
    questions: [
      {
        id: 'q1',
        text: 'To whom is Jesus speaking in this passage? Is He addressing everyone, or a specific group?',
        hintKey: 'believed-in-him',
      },
      {
        id: 'q2',
        text: 'What condition does Jesus give before the promise of freedom? What must come first?',
        hintKey: 'abide-in-my-word',
      },
      {
        id: 'q3',
        text: 'What kind of slavery does Jesus say the people are in? What does He mean by "free"?',
        hintKey: 'slave-to-sin',
      },
    ],
    answers: {
      q1: 'Jesus is speaking specifically to "the Jews who had believed in him" (v. 31) — not a general crowd. This is a discipleship conversation, not an open invitation to all.',
      q2: 'The condition is abiding in His word: "If you abide in my word, you are truly my disciples" (v. 31). The promise of freedom follows discipleship — it is not offered apart from it.',
      q3: 'Jesus clarifies in verse 34: "everyone who practices sin is a slave to sin." The freedom He promises is freedom from the slavery of sin — a spiritual liberation, not political or personal autonomy.',
    },
    highlightMap: {
      'believed-in-him':  'the Jews who had believed him',
      'abide-in-my-word': 'If you abide in my word',
      'slave-to-sin':     'everyone who practices sin is a slave to sin',
    },
  },

  // ──────────────────────────────────────────────────────────
  // 2. I Can Do All Things (Philippians 4:13)
  // ──────────────────────────────────────────────────────────
  {
    id: 'i-can-do-all-things',
    title: 'I Can Do All Things',
    teaser: 'Athletes print it on gear. Students write it before exams. But Paul wrote it from prison about something far more specific.',
    theme: 'Contentment & Strength',
    themeColor: 'lavender',
    icon: '◈',
    focusVerse: {
      reference: 'Philippians 4:13',
      text: '"I can do all things through him who strengthens me."',
    },
    passages: ['Philippians 4:10-20'],
    contextNote: 'Read Philippians 4:10–20 — the paragraph in which this verse appears.',
    questions: [
      {
        id: 'q1',
        text: 'What specific situation is Paul describing in this passage? What circumstances prompted him to write this?',
        hintKey: 'learned-contentment',
      },
      {
        id: 'q2',
        text: 'What does Paul say he has "learned"? Is this something natural to him, or something acquired through experience?',
        hintKey: 'in-any-state',
      },
      {
        id: 'q3',
        text: 'Given the context, what does "all things" most naturally refer to? What is the strength for?',
        hintKey: 'abased-and-abound',
      },
    ],
    answers: {
      q1: 'Paul is writing from prison, thanking the Philippians for a gift they sent him (v. 10). He is addressing material circumstances — specifically having much and having little — not ambition or achievement.',
      q2: 'Paul says he has "learned, in whatever state I am, to be content" (v. 11). The word "learned" is key — contentment was not natural; it was a skill developed through both poverty and abundance.',
      q3: '"All things" refers to all circumstances of having much or little (v. 12). The strength is for contentment in every condition, not for accomplishing any goal one sets. It is strength to endure, not strength to achieve.',
    },
    highlightMap: {
      'learned-contentment': 'I have learned, in whatever state I am, to be content',
      'in-any-state':        'in any and every circumstance',
      'abased-and-abound':   'how to be brought low, and I know how to abound',
    },
  },

  // ──────────────────────────────────────────────────────────
  // 3. Because You Do Not Ask (James 4:2)
  // ──────────────────────────────────────────────────────────
  {
    id: 'because-you-do-not-ask',
    title: 'Because You Do Not Ask',
    teaser: '"You have not because you ask not" is often taught as a prayer strategy. James had something harder in mind.',
    theme: 'Prayer & Motives',
    themeColor: 'sage',
    icon: '◎',
    focusVerse: {
      reference: 'James 4:2-3',
      text: '"You do not have, because you do not ask. You ask and do not receive, because you ask wrongly, to spend it on your passions."',
    },
    passages: ['James 4:1-10'],
    contextNote: 'Read James 4:1–10 — James is diagnosing a specific spiritual problem, not giving a prayer formula.',
    questions: [
      {
        id: 'q1',
        text: 'What problem is James actually addressing at the start of chapter 4? What are these people doing?',
        hintKey: 'quarrels-and-fights',
      },
      {
        id: 'q2',
        text: 'James says "you do not have because you do not ask" — but then immediately qualifies this. What does he say happens even when they DO ask?',
        hintKey: 'ask-wrongly',
      },
      {
        id: 'q3',
        text: 'What does James call friendship with the world? How does this frame the passage\'s meaning?',
        hintKey: 'friendship-world',
      },
    ],
    answers: {
      q1: 'James opens by addressing quarrels, conflicts, murders, and coveting (v. 1–2). The people want things and are fighting for them. He traces this back to passions at war within them — this is not a teaching about quiet prayers; it is a rebuke of worldly desire.',
      q2: 'James immediately says in verse 3: even when they do ask, they "ask wrongly" — with wrong motives, to spend on their passions. So the "ask and you shall receive" principle is not promised here; it is undermined by corrupt desire.',
      q3: 'James calls friendship with the world "enmity with God" (v. 4). The whole passage is a call to humility and submission to God (v. 7–10), not a formula for answered prayer. The context is repentance, not confidence.',
    },
    highlightMap: {
      'quarrels-and-fights': 'What causes quarrels and what causes fights among you',
      'ask-wrongly':         'You ask and do not receive, because you ask wrongly',
      'friendship-world':    'friendship with the world is enmity with God',
    },
  },
]

export function getStudyById(id) {
  return studies.find(s => s.id === id) || null
}