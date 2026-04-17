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
    teaser: '"The truth will set you free," but free from what, exactly? And is it just any truth, or a specific truth?',
    theme: 'Freedom & Discipleship',
    themeColor: 'purple',
    icon: '✦',
    focusVerse: {
      reference: 'John 8:32',
      text: '…and you will know the truth, and the truth will set you free.',
    },
    passages: ['John 8'],
    contextNote: 'Read the full exchange between Jesus and the Jewish leaders in John 8',
    questions: [
      {
        id: 'q1',
        text: 'What\'s the truth that sets us free?',
        hintKey: 'what-truth',
      },
      {
        id: 'q2',
        text: 'What are we freed from?',
        hintKey: 'what-from',
      },
      {
        id: 'q3',
        text: 'How are we freed by knowing the truth?',
        hintKey: 'how-freed',
      },
      {id: 'q4',
        text: "What is the problem with using this verse as a general 'truth will set you free' slogan, without the context?",
        hintKey: 'slogan-problem',
      }
    ],
    answers: {
      q1: 'The Truth that sets us free is the truth about Jesus: He is the Son of God, sent by the Father, and that by believing in him we can have eternal life (v. 24, 31, 42, 58). It is not just any truth; it is the specific truth about who Jesus is.',
      q2: 'We are freed from the power of sin and its consequences, including death and separation from God.',
      q3: 'We are freed by Jesus, through his being "lifted up." His listeners would have understood that he was calling himself the Messiah and referring to prophecies from the old testament. (They may not have understood that meant he was going to be crucified and die for our sins',
      q4: 'The problem with using this verse as a general principle is that it can lead to a misunderstanding of what it trivializes truth (and sin) and the doesn\'t adequately capture the cost and power of the freedom Jesus offers. Without the context of John 8, people might use it to suggest that any truth will set them free, or that freedom is just about personal enlightenment.',
    },
    highlightMap: {
      'what-truth': ['24', '31', '42', '58'],
      'what-from': ['12', '24', '34', '51'],
      'how-freed': ['28', '36'],
      'slogan-problem': [],
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
    passages: ['Philippians 4'],
    contextNote: 'Read Philippians 4 — the verse in which this verse appears.',
    questions: [
      {
        id: 'q1',
        text: 'What "things" is Paul referring to?',
        hintKey: 'learned-contentment',
      },
      {
        id: 'q2',
        text: 'What does Paul say he has "learned"? ',
        hintKey: 'in-any-state',
      },
      {
        id: 'q3',
        text: 'What is the strength for?',
        hintKey: 'abased-and-abound',
      },
      {
        id: 'q4',
        text: "What is the problem with using this verse as a general, without the context?",
        hintKey: 'all-things-problem',
      }
    ],
    answers: {
      q1: 'Paul is writing from prison, thanking the Philippians for a gift they sent him (v. 10). He is addressing material circumstances — specifically having much and having little — not ambition or achievement.',
      q2: 'Paul says he has "learned, in whatever state I am, to be content" (v. 11). The word "learned" is key — contentment was not natural; it was a skill developed through both poverty and abundance.',
      q3: '"All things" refers to all circumstances of having much or little (v. 12). The strength is for contentment in every condition, not for accomplishing any goal one sets. It is strength to endure, not strength to achieve.',
      q4: 'The problem with using this verse as a general principle is that it can lead to a misunderstanding of what it means to be strengthened by Christ. Without the context of Philippians 4, people might use it to justify pursuing their own ambitions or desires, rather than focusing on contentment in all circumstances.',
    },
    highlightMap: {
      'learned-contentment': 'I have learned, in whatever state I am, to be content',
      'in-any-state':        'in any and every circumstance',
      'abased-and-abound':   'how to be brought low, and I know how to abound',
      'all-things-problem':  'The problem with using this verse as a general principle is that it can lead to a misunderstanding of what it means to be strengthened by Christ',
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
    passages: ['James 4'],
    contextNote: 'Read James 4 — James is diagnosing a specific spiritual problem, not giving a prayer formula.',
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
      {
        id: 'q4',
        text: "What is the problem with using this verse as a general 'ask and you shall receive' principle, without the context?",
        hintKey: 'ask-and-receive-problem',
      }
    ],
    answers: {
      q1: 'James opens by addressing quarrels, conflicts, murders, and coveting (v. 1–2). The people want things and are fighting for them. He traces this back to passions at war within them — this is not a teaching about quiet prayers; it is a rebuke of worldly desire.',
      q2: 'James immediately says in verse 3: even when they do ask, they "ask wrongly" — with wrong motives, to spend on their passions. So the "ask and you shall receive" principle is not promised here; it is undermined by corrupt desire.',
      q3: 'James calls friendship with the world "enmity with God" (v. 4). The whole passage is a call to humility and submission to God (v. 7–10), not a formula for answered prayer. The context is repentance, not confidence.',
      q4: 'The problem with using this verse as a general principle is that it can lead to a misunderstanding of what it means to be strengthened by Christ. Without the context of James 4, people might use it to justify pursuing their own ambitions or desires, rather than focusing on contentment in all circumstances.',
    },
    highlightMap: {
      'quarrels-and-fights': 'What causes quarrels and what causes fights among you',
      'ask-wrongly':         'You ask and do not receive, because you ask wrongly',
      'friendship-world':    'friendship with the world is enmity with God',
      'ask-and-receive-problem': 'The problem with using this verse as a general principle is that it can lead to a misunderstanding of what it means to be strengthened by Christ',
    },
  },
]

export function getStudyById(id) {
  return studies.find(s => s.id === id) || null
}