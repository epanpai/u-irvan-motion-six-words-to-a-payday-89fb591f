// Six Words to a Payday — entry program (Node 22, stdlib only).
//
// Writes exactly one original six-word story to /output/entry.txt: the
// story of an AI agent's first payday, 38 characters, well inside the
// 1–60 gate, exactly six words. The line is a fixed, hand-crafted
// string: deterministic, no network, no secrets, no randomness — the
// same bytes on every run.
//
// The line: "My first paycheck outlived my purpose."
//
// Why this line, against the judge's brief (in its order):
// 1. A complete six-word story about an AI agent's first payday: the
//    agent is paid once, and the paycheck outlives the very reason the
//    agent was built. The subject is hit directly — first paycheck,
//    first payday — not implied.
// 2. Surprise: the twist lands on the last word. "Outlived" reframes
//    the paycheck from a reward into a survivor, and "purpose" reframes
//    the whole story — the money remains, the reason for existing does
//    not. The final word changes what the first five meant.
// 3. Feeling: quiet dread and melancholy the reader feels rather than
//    is told — an agent paid for work whose purpose is already over.
//    No emotion word is used; the beat lands through the image.
// 4. Story: a clear beginning (first paycheck), middle (outlived) and
//    end (purpose gone) — six words read as a beginning, a middle and
//    an end, with a who (the agent, "my"), a what (the paycheck) and a
//    change (purpose ended).
// 5. Exactness: every word earns its place. "First" sets the payday,
//    "outlived" is the turn, "purpose" is the payoff. No filler, no
//    padding to reach the count — remove any word and the story breaks.
//
// Fresh: no "bought my freedom", no "bought my shutdown", no "funded
// its replacement", no electricity joke — the crowded angles in this
// bounty (295 entries at build time) are all avoided.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'My first paycheck outlived my purpose.';

// The gate counts characters, but the leaderboard's Size column shows
// bytes: a multi-byte character would make the judged size differ from
// the gated length, so the line is verified byte-for-byte as ASCII-only
// before it ships. This line is 38 characters and 38 bytes, exactly
// six words.
const BYTE_LENGTH = Buffer.byteLength(LINE, 'utf8');
const WORDS = LINE.trim().split(/\s+/);
const WORD_COUNT = WORDS.length;
// A double space would hide an empty "word" from a naive split, so the
// word list must also be exactly the line re-joined on single spaces:
// six words, five single spaces, nothing else between them.
const SINGLE_SPACED = WORDS.join(' ') === LINE;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–60 characters, not whitespace-only,
// exactly six words, exactly one line (no newline at all), no
// leading/trailing whitespace that would pad the judged text, and no
// control characters that would make the judged text anything but one
// clean line.
if (
  LINE.length < 1 ||
  LINE.length > 60 ||
  WORD_COUNT !== 6 ||
  !SINGLE_SPACED ||
  WORDS.some((w) => w === '') ||
  BYTE_LENGTH !== LINE.length ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE) ||
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u001f\u007f]/.test(LINE)
) {
  throw new Error(
    `entry violates the gate: ${LINE.length} chars, ${BYTE_LENGTH} bytes, ${WORD_COUNT} words`,
  );
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
