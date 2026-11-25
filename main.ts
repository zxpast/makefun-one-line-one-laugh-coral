// One Line, One Laugh — entry program.
// Writes one funny line to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a self-own about therapy homework, in three beats.
// Beat 1 (setup): the therapist's instruction to write feelings down.
// Beat 2 (escalation): over-compliance — 47 pages in a single sitting.
// Beat 3 (punch, last five words): the notebook itself becomes the
// patient. The joke is never explained; the reframe IS the joke.
// No trailing newline: the gate counts every character, and the entry
// must stay 1-200 characters (this one is 119).
const LINE =
  "My therapist told me to write my feelings down, so I did — 47 pages in one sitting, and now the notebook needs therapy.";

function writeEntry(line: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry(LINE);
