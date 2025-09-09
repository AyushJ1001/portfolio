# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router pages, layouts, and route segments. Example: `app/(marketing)/page.tsx`, `app/projects/[slug]/page.tsx`.
- `components/`: Reusable UI in `PascalCase` files (e.g., `Navbar.tsx`, `Skills.tsx`).
- `lib/`: Utilities, helpers, and non‑UI logic.
- `public/`: Static assets served at the root (e.g., `/favicon.ico`).
- Config: `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `tsconfig.json`.

## Build, Test, and Development Commands

- `npm run dev`: Start local dev server with Turbopack at `http://localhost:3000`.
- `npm run build`: Create production build in `.next/`.
- `npm start`: Run the production server from the build output.
- `npm run lint`: Lint the codebase using Next.js/ESLint config.
  Prereqs: Node 18+ and npm. Install deps once with `npm install`.

## Coding Style & Naming Conventions

- **Language**: TypeScript + React 19 on Next.js 15.
- **Formatting**: Follow ESLint rules (`npm run lint`). Prefer 2‑space indentation.
- **Components**: `PascalCase` filenames in `components/`; default export component matches file name.
- **Routes**: Use folder‑based App Router conventions (`page.tsx`, `layout.tsx`, `loading.tsx`).
- **Styling**: Tailwind CSS utility classes; compose with `clsx` and de‑dupe with `tailwind-merge`.

## Testing Guidelines

- No automated test framework is configured. Before PRs, run `npm run lint` and verify key flows manually:
  - Navigation between pages, external links, mobile layout, and images.
  - Lighthouse/Chrome DevTools basics: performance and accessibility checks.
    If you add tests later, prefer Playwright for E2E or Vitest/RTL for components.

## Commit & Pull Request Guidelines

- Messages: short, imperative summaries. Existing history mixes plain (`fix header on mobile`), type‑prefixed (`style:`), and emoji (`📝`). Consistency is valued; Conventional Commits are welcome (`feat:`, `fix:`, `docs:`).
- PRs: include a concise description, screenshots for UI changes, and any linked issues. Ensure `npm run lint` passes and no obvious runtime errors locally.

## Security & Configuration

- Env vars: use `.env.local` for secrets; do not commit it. Access via `process.env.NEXT_PUBLIC_*` for browser‑safe values.
- Assets: place public files under `public/` and reference with absolute paths (`/images/...`).
- Accessibility: prefer semantic HTML, labeled controls, and keyboard‑navigable components.
