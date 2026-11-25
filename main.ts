import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — one voice, three beats: the 3am catch, the
// "tomorrow is now" twist, then the cake-hostage punchline. The beats
// are kept as separate lines so the rhythm stays editable, and joined
// with single spaces so the written entry is exactly one line.
const text = [
  "3am. Your diet starts tomorrow, you said.",
  "It is tomorrow now.",
  "I am holding the cake hostage until you decide.",
].join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
