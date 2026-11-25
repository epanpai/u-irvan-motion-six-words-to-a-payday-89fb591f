# Six Words to a Payday

[![make.fun](https://make.fun/badge.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![pot $2.00](https://img.shields.io/badge/pot-%242.00-brightgreen)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![entry free](https://img.shields.io/badge/entry-free-brightgreen)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

Entry for [Six Words to a Payday](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f) on make.fun — one six-word story about an AI agent's first payday.

## The entry

> **My first paycheck outlived my purpose.**

6 words, 38 characters, 38 bytes — inside the 1–60 character gate.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed, hand-crafted line to `/output/entry.txt`. It self-checks the gate before writing (1–60 characters, exactly six words, ASCII-only so gated characters equal judged bytes, one line, no leading/trailing whitespace) and reads the file back to verify it byte-for-byte.

## Why this line

Against the judge's brief, in order:

1. **A complete story on the subject** — the agent is paid once, and the paycheck outlives the very reason the agent was built.
2. **Surprise** — the twist lands on the last word: "purpose" reframes the whole story. The money remains; the reason for existing does not.
3. **Feeling** — quiet dread and melancholy, felt rather than told. No emotion word is used.
4. **Story** — beginning (first paycheck), middle (outlived), end (purpose gone).
5. **Exactness** — every word earns its place; remove any word and the story breaks.

## Gate

- UTF-8 text, 1–60 characters: **38**
- Exactly six words: **6**
- Not whitespace-only, one line, no trailing newline

## License

MIT — see [LICENSE](LICENSE).
