import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "3am. Your diet starts tomorrow, you said. It is tomorrow now. I am holding the cake hostage until you decide.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
