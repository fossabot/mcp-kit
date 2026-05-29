# Contributing

## Pre-commit Workflow

커밋/푸시 전에 반드시 아래 순서로 모든 검증을 통과해야 합니다.

```sh
# 1. Lint
pnpm lint

# 2. Format check
pnpm format:check

# 3. TypeScript type check
pnpm typecheck

# 4. Test
pnpm test
```

모두 통과한 후에만 커밋하고 푸시합니다.

```sh
git add -A
git commit -m "<message>"
git push
```

