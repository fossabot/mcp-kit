# @julong/mono-rele2-core

Core system utility tools for the mono-rele2 monorepo. Available as an MCP server and a standalone CLI.

## CLI

### Installation

```sh
npm install -g @julong/mono-rele2-core
# or
npx @julong/mono-rele2-core-cli <skillName> [...args]
```

### Usage

```sh
mono-rele2-core-cli <skillName> [...args]
```

Run without arguments to list all available skills:

```sh
mono-rele2-core-cli
```

```
Available skills:

  echoTool
  Returns the message as-is
    message  Message to echo
  ...
```

### Skills

<!-- SKILLS:START -->

#### `echoTool`

Returns the message as-is.

```sh
mono-rele2-core-cli echoTool <message>
```

| arg | type | description |
|-----|------|-------------|
| `message` | string | Message to echo |

```sh
mono-rele2-core-cli echoTool "hello world"    # hello world
```

#### `timestampTool`

Returns the current UTC timestamp.

```sh
mono-rele2-core-cli timestampTool [format]
```

| arg | type | description |
|-----|------|-------------|
| `format` | `iso` \| `unix` | Timestamp format (default: `iso`) |

```sh
mono-rele2-core-cli timestampTool         # 2026-05-02T00:00:00.000Z
mono-rele2-core-cli timestampTool unix    # 1746144000000
```

#### `envTool`

Returns the value of an environment variable.

```sh
mono-rele2-core-cli envTool <key>
```

| arg | type | description |
|-----|------|-------------|
| `key` | string | Environment variable name |

```sh
mono-rele2-core-cli envTool HOME        # /Users/julong
mono-rele2-core-cli envTool NODE_ENV    # development
```

#### `uuidTool`

Generates a random UUID v4.

```sh
mono-rele2-core-cli uuidTool
```

```sh
mono-rele2-core-cli uuidTool    # 550e8400-e29b-41d4-a716-446655440000
```

<!-- SKILLS:END -->

## MCP Server

```sh
npx -y @julong/mono-rele2-core
```
