# Contributing to SafeSpray

Thanks for your interest in contributing! This project promotes ethical, authorized security testing. Please follow these guidelines to keep contributions smooth and impactful.

## Development Setup
- Requirements: Node 18+, npm.
- Install: `npm install`
- Dev server: `npm run dev` → http://localhost:3000
- Build: `npm run build`

## Coding Standards
- TypeScript + React (App Router).
- 2-space indentation, no one-letter names.
- Keep business logic pure inside `src/app/_lib/`.
- UI state belongs in components.
- Lint before pushing: `npm run lint`.

## Tests & Coverage
- Test runner: Jest + React Testing Library.
- Add unit tests for `_lib/` and component behavior.
- Minimum coverage target: 80% (CI enforces coverage reporting).
- Run locally: `npm run test:coverage`.

## Git & Commits
- Use Conventional Commits (e.g., `feat: add team combos`).
- Keep PRs focused; one logical change per PR.
- Update docs for UI/behavior changes.

## Pull Requests
- Fill the PR template: summary, scope, tests, screenshots.
- Link related issues (e.g., `Closes #123`).
- Ensure CI passes (lint, tests, build, SonarCloud scan).

## Ethics & Security
- Never add network calls to process user inputs.
- Respect privacy; keep processing client-side.
- Features must reinforce ethical, authorized use.

## Questions?
Open an issue or reach out via GitHub.

