import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — one voice, one line. The entry is built from
// four fragments split mid-sentence (after "tomorrow,", after "now.",
// after "hostage") instead of at sentence boundaries, so the wording
// is assembled from parts that only make sense together; the fragments
// are joined with single spaces so the result is exactly one line.
const opening = "3am. Your diet starts tomorrow,";
const callback = "you said. It is tomorrow now.";
const demand = "I am holding the cake hostage";
const deadline = "until you decide.";
const text = opening + " " + callback + " " + demand + " " + deadline;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
