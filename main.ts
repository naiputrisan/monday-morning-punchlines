import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Monday got to my desk before I did. It was already drinking my coffee, wearing my face, and answering my emails badly.";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The sealed scorer refuses anything over 200 characters, so fail loudly
// here instead of shipping an entry the gate would score 0.
if (JOKE.length > MAX_CHARS || JOKE.trim().length === 0) {
  throw new Error(`entry joke is ${JOKE.length} chars; must be 1-200`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
