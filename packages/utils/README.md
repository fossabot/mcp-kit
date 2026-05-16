# @julong/mono-rele2-utils

Text utility tools for the mono-rele2 monorepo. Available as an MCP server and a standalone CLI.

## CLI

### Installation

```sh
npm install -g @julong/mono-rele2-utils
# or
npx @julong/mono-rele2-utils-cli <skillName> [...args]
```

### Usage

```sh
mono-rele2-utils-cli <skillName> [...args]
```

Run without arguments to list all available skills:

```sh
mono-rele2-utils-cli
```

```
Available skills:

  caseConvertTool
  Converts text to the specified case format
    input    Text to convert
    to       Target case format
  ...
```

### Skills

<!-- SKILLS:START -->

#### `cnTool`

Merges class names, filtering out falsy values.

```sh
mono-rele2-utils-cli cnTool <classes>
```

| arg | type | description |
|-----|------|-------------|
| `classes` | JSON string (array) | List of class names to merge |

```sh
mono-rele2-utils-cli cnTool '["btn","active","large"]'    # btn active large
```

#### `caseConvertTool`

Converts text to the specified case format.

```sh
mono-rele2-utils-cli caseConvertTool <input> <to>
```

| arg | type | description |
|-----|------|-------------|
| `input` | string | Text to convert |
| `to` | `upper` \| `lower` \| `capitalize` \| `camel` \| `snake` \| `kebab` | Target case format |

```sh
mono-rele2-utils-cli caseConvertTool "hello world" camel    # helloWorld
mono-rele2-utils-cli caseConvertTool "helloWorld" snake     # hello_world
mono-rele2-utils-cli caseConvertTool "hello world" kebab    # hello-world
```

#### `truncateTool`

Truncates text to a maximum length and appends a suffix.

```sh
mono-rele2-utils-cli truncateTool <input> <maxLength> [suffix]
```

| arg | type | description |
|-----|------|-------------|
| `input` | string | Text to truncate |
| `maxLength` | number | Maximum character length |
| `suffix` | string | Suffix to append when truncated (default: `...`) |

```sh
mono-rele2-utils-cli truncateTool "hello world long text" 10    # hello w...
mono-rele2-utils-cli truncateTool "hello world" 8 "…"           # hello w…
```

<!-- SKILLS:END -->

## MCP Server

```sh
npx -y @julong/mono-rele2-utils
```
