# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Commandfolio" — a terminal-flavored personal portfolio built as a React 19 SPA with Vite 8 (Rolldown), Material-UI v9, and multi-language support (EN/PT). It has two modes rendered from a single page: a GUI portfolio and a fully interactive fake terminal, switched in-app (no routing library).

## Commands

```bash
yarn dev        # Start development server
yarn build      # Production build (also copies dist/index.html → dist/404.html for GH Pages SPA fallback)
yarn lint       # ESLint 10 (flat config: @eslint/js + @eslint-react + react-hooks + react-refresh), 0 warnings tolerance
yarn preview    # Preview production build locally
```

Deployment is automatic: pushes to `master` run `.github/workflows/deploy.yml` (lint → build → `actions/upload-pages-artifact` → `actions/deploy-pages`). There is no manual deploy script; Pages is configured with `build_type: workflow`.

## Architecture

### Mode switching (no router)
`src/pages/Portfolio.jsx` owns the `mode` state (`"gui"` | `"term"`). **Keep the two modes in separate files** — `Home.jsx` (GUI) and `Terminal.jsx` (terminal) — Portfolio only orchestrates.

- GUI → terminal: `>_` button in `Header.jsx` or the inline "$ boot rckmathOS" CTA at the bottom of Home (`onOpenTerminal` prop) → quick fade, then `components/BootScreen.jsx` plays a ~4s BIOS-style boot animation (click to skip) before the terminal mounts
- Terminal → GUI: `exit`/`gui`/`q` commands or the "← gui mode" button (`onExit` prop) → quick fade only
- Backward compat: loading `/cmd` (old external terminal repo path) boots directly into terminal mode and rewrites the URL to `/` via `history.replaceState`. The `404.html` build fallback makes this work on GitHub Pages.

### State Management
Two React Context providers wrap the app in `App.jsx`:
- **ThemeContextProvider** (`src/context/ThemeContext.jsx`): light/dark mode, localStorage persistence
- **LanguageProvider** (`src/context/LanguageContext.jsx`): EN/PT with `t()` dot-notation lookup, localStorage persistence; `t()` can return strings, arrays, or objects (used for structured content like experience entries)

Access via hooks: `useTheme()` and `useLanguage()` (or `useTranslation()` from `src/hooks/useTranslation.js`).

### Shared data
`src/data/portfolio.js` — projects, social links, email. Used by GUI (Home/Footer) and Terminal so they never drift.

### Terminal (`src/pages/Terminal.jsx`)
- Boot session (banner + pre-run commands) renders as JSX and re-translates live on language change; executed command history is stored as strings and intentionally keeps the language it was printed in
- Commands are dispatched in `runCmd`; outputs come from `term.cmd.*` translation keys with `{placeholder}` interpolation via `fill()`
- `lang en|pt` switches the app language; confirmation prints in the target language
- Games/effects (snake, matrix, CRT) use refs + window listeners; all timers/listeners are cleaned up on unmount
- Focus calls use `{ preventScroll: true }` so entering the mode doesn't jump to the bottom
- History entries carry stable ids (`entryIdRef`) — never key by array index
- `claude` command enters a chat sub-mode simulating the Claude Code TUI: orange `>` prompt in a bordered input, thinking spinner (Esc interrupts), keyword-matched mock answers (`hire`/`bug`/`ai` + fallback pool) and `/help` `/status` `/cost` `/exit` — strings under `term.claude.*`

## Design System (Commandfolio)

### Tokens (`src/theme.js`)
CSS variables injected on each page root:
- GUI: `--bg`, `--ink`, `--dim`, `--faint`, `--line`, `--accent` (`#5DDEA6` dark / `#1F7A52` light), `--accent-brd`
- Terminal (always dark, bg `#060908`): `--tacc` (mutable via `color` command), `--tink`, `--tdim`, `--tfaint`, `--tglow` (CRT)

### Typography
- Sans: Space Grotesk (`fonts.sans`) — headings/body
- Mono: JetBrains Mono (`fonts.mono`) — labels, terminal, metadata
- Loaded via `@fontsource` imports in `main.jsx`

### Patterns
- MUI `Box`/`Typography` with `sx`, referencing the CSS variables (`color: "var(--dim)"`)
- Section headers: `~/label` + hairline + right-aligned hint
- Keyframes `blink` and `crtflicker` live in `src/index.css`

## Translations

All UI text lives in `src/translations/{en,pt}.js` with mirrored key structure (`hero`, `now`, `experience`, `projects`, `awards`, `education`, `footer`, `term.*`). Any new user-facing string must be added to **both** files. Terminal command outputs are under `term.cmd.*`.

## Adding New Projects

1. Add project image to `public/projects/`
2. Add the entry to `src/data/portfolio.js` (`id`, `name`, `image`, `url`, `descKey`)
3. Add the one-liner description key in both `src/translations/{en,pt}.js` under `projects`
4. Mention it in the terminal `projects` command output (`term.cmd.projects` in both files)

## Git Workflow

Feature branches → `develop` → `master` (via PRs). Merging to `master` auto-deploys to GitHub Pages via the deploy workflow.
