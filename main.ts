import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — one voice, three moves: the 3am catch, the
// "tomorrow is now" twist, then the cake-hostage punchline. Each move
// is its own named constant so the wording stays auditable, and the
// entry is assembled with single spaces so it is exactly one line.
const catchLine = "3am. Your diet starts tomorrow, you said.";
const twistLine = "It is tomorrow now.";
const punchLine = "I am holding the cake hostage until you decide.";
const text = catchLine + " " + twistLine + " " + punchLine;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
