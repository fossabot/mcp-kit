import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { generateReadmeSkills } from "../kit/skill.ts";

const START = "<!-- SKILLS:START -->";
const END = "<!-- SKILLS:END -->";
const README_PATH = "./README.md";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));
const binName = `${pkg.name.split("/").pop()}-cli`;

const distPath = resolve("./dist/index.js");
if (!existsSync(distPath)) {
  console.error(`[update-readme] dist not found at ${distPath} — run build first`);
  process.exit(1);
}

const { tools } = await import(pathToFileURL(distPath).href);
const skills = generateReadmeSkills({ binName, tools });

const readme = readFileSync(README_PATH, "utf-8");
const re = new RegExp(`(${START})[\\s\\S]*?(${END})`);
if (!re.test(readme)) {
  console.error(`[update-readme] markers not found in ${README_PATH} — add ${START} ... ${END}`);
  process.exit(1);
}
const updated = readme.replace(re, `$1\n\n${skills}\n\n$2`);

writeFileSync(README_PATH, updated);
