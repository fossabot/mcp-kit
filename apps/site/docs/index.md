---
pageType: home
hero:
  name: MCP-Kit
  text: 명령어 한 줄로 시작하는 MCP 서버
  tagline: AI 어시스턴트가 바로 사용할 수 있는 MCP 서버를 npx 기반으로 쉽게 구현하고 배포하는 모노레포 키트
  actions:
    - theme: brand
      text: 프로젝트 개요
      link: /01-project-overview
    - theme: alt
      text: GitHub
      link: https://github.com/jl917/mcp-kit
features:
  - title: AI Agent Ready
    details: 각 패키지는 MCP(Model Context Protocol) 서버로 동작하며, AI 어시스턴트(Claude 등)가 도구를 직접 호출할 수 있습니다. npx로 즉시 실행 가능합니다.
  - title: npx 기반 배포
    details: 빌드 후 npm에 배포하기만 하면 `npx -y @julong/mono-rele2-utils` 한 줄로 모든 AI Agent가 즉시 사용할 수 있습니다. 별도 설치나 설정이 필요 없습니다.
  - title: 모노레포
    details: pnpm + Turborepo로 구성된 모노레포로, 여러 MCP 서버를 하나의 저장소에서 관리합니다. 공유 키트(@common)로 중복을 최소화했습니다.
  - title: 빠른 개발 경험
    details: Bun이 TypeScript를 직접 실행하여 README 문서를 자동 생성합니다. Rslint + Prettier로 코드 품질을 유지하고, Rstest로 테스트합니다.
---
