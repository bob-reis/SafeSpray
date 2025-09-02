# SafeSpray

Controlled generation of emails, usernames, and wordlists for learning, awareness, and authorized testing. All processing runs locally in your browser — no data is sent to servers.

## Features
- 100% client‑side: privacy by design, no telemetry.
- Generator: emails, usernames, and password wordlists with safety limits.
- Exports: download `.txt` lists.
- Ethics‑first: clear guidance, disclaimer, and mini‑lesson on pentest/OSINT.
- Pages: `/` (Tool), `/docs` (Tutorial), `/about` (Author/Disclaimer).

## Live
- App: https://safe-spray.vercel.app
- Repo: https://github.com/bob-reis/SafeSpray

## Quick Start
```
npm install
npm run dev
# open http://localhost:3000
```

## Scripts
- `npm run dev`: Next.js dev server with HMR
- `npm run build`: production build
- `npm start`: run built app
- `npm run lint`: lint with ESLint

## Project Structure
- `src/app/`: Next.js App Router pages
  - `page.tsx`: Tool (home)
  - `docs/page.tsx`: Tutorial & Documentation
  - `about/page.tsx`: Author and legal disclaimer
  - `_components/`: UI components (e.g., `EmailWordlistGenerator`, `Header`)
  - `_lib/`: core logic (`emailWordlist.ts`, `validation.ts`, `site.ts`)

## Ethical Use & Disclaimer
- Use only with formal authorization and defined scope.
- Respect laws, internal policies, and privacy at all times.
- The author and contributors are not responsible for misuse.

## Contributing
Contributions are welcome! Please:
- Open an issue describing the change.
- Use Conventional Commits (e.g., `feat: add team-based combos`).
- Include tests for logic changes in `_lib/` where applicable.
- See the PR template for checklist and guidelines.

## License
MIT

## Author
- LinkedIn: https://www.linkedin.com/in/bobreis/
- X/Twitter: https://x.com/xbobreis
- GitHub: https://github.com/bob-reis

