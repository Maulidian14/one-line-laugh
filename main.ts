// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One funny line: the good intention defeated by its own workaround.
// The twist lands on the last three words — the desk changed, the habit did not.
const LINE =
  "I bought a standing desk to be healthier, so now I just sit on a taller chair.";

const here = dirname(fileURLToPath(import.meta.url));

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
} catch {
  mkdirSync(join(here, "out"), { recursive: true });
  writeFileSync(join(here, "out", "entry.txt"), LINE, "utf8");
}
