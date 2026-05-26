import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { generateReadmeSkills } from "../kit/skill.ts";

const README_PATH = "./README.md";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));
const pkgName = pkg.name;
const pkgDesc = pkg.description;
const binCli = `${pkgName.split("/").pop()}-cli`;

const toolsUrl = pathToFileURL(join(process.cwd(), "src/tools/index.ts")).href;
const { tools } = await import(toolsUrl);

const toolsText = generateReadmeSkills({ binName: binCli, tools });

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

Run without arguments to list all available tools:

\`\`\`sh
${binCli}
\`\`\`

### Tools

${toolsText}

## MCP Server

\`\`\`sh
npx -y ${pkgName}
\`\`\`
`;

writeFileSync(README_PATH, readme);
console.log(`[update-readme] ${README_PATH} updated`);
