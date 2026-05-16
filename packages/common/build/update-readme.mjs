import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { generateReadmeSkills } from "../kit/skill.ts";

const README_PATH = "./README.md";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));
const pkgName = pkg.name;
const pkgDesc = pkg.description;
const binCli = `${pkgName.split("/").pop()}-cli`;

const distPath = resolve("./dist/index.js");
if (!existsSync(distPath)) {
  console.error(`[update-readme] dist not found at ${distPath} — run build first`);
  process.exit(1);
}

const { tools } = await import(pathToFileURL(distPath).href);
const skills = generateReadmeSkills({ binName: binCli, tools });

const readme = `# ${pkgName}

${pkgDesc}

## CLI

### Installation

\`\`\`sh
npm install -g ${pkgName}
# or
npx ${pkgName}-cli <toolName> [...args]
\`\`\`

### Usage

\`\`\`sh
${binCli} <toolName> [...args]
\`\`\`

Run without arguments to list all available skills:

\`\`\`sh
${binCli}
\`\`\`

### Skills

${skills}

## MCP Server

\`\`\`sh
npx -y ${pkgName}
\`\`\`
`;

writeFileSync(README_PATH, readme);
console.log(`[update-readme] ${README_PATH} updated`);
