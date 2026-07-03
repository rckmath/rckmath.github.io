# Erick Pacheco | Commandfolio

A terminal-flavored personal portfolio with two faces: a clean GUI mode and a fully interactive terminal mode — one click (or `exit`) apart, with a smooth fade between them. Built with React 19, with dark/light theme support and full English/Portuguese localization.

![Portfolio Screenshot](screenshot.png)

## Features

- **Two modes, one page**: GUI portfolio and an interactive terminal, switched in-app with a smooth transition (no route change)
- **Real terminal**: prompt with Tab completion and ↑/↓ history, 35+ commands (`help`, `career`, `git log`, `neofetch`, `cowsay`, `fortune`, …)
- **Easter eggs**: playable snake, matrix rain, CRT scanline mode, phosphor color presets (`color amber`)
- **Multilingual**: full English/Portuguese support everywhere — including terminal output (`lang en|pt`) — persisted in localStorage
- **Theme support**: dark and light mode with persisted preference
- **Backward compatible**: old `/cmd` deep links boot straight into terminal mode

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 19, Vite |
| UI Library | Material-UI (MUI) v7 |
| Styling | Emotion, CSS variables (design tokens) |
| Typography | Space Grotesk, JetBrains Mono (@fontsource) |
| Deployment | GitHub Pages (gh-pages) |

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn 4.x

### Installation

```bash
# Clone the repository
git clone https://github.com/rckmath/rckmath.github.io.git
cd rckmath.github.io

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Create production build (also emits `404.html` SPA fallback) |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint with zero warnings tolerance |
| `yarn deploy` | Build and deploy to GitHub Pages |

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # GUI top bar: >_ terminal button, EN/PT, theme toggle
│   └── Footer.jsx       # Social links + "$ say hello"
├── context/             # React context providers (Theme, Language)
├── data/
│   └── portfolio.js     # Shared data: projects, socials, email
├── pages/
│   ├── Portfolio.jsx    # Mode orchestrator (gui ⇄ term) with fade transition
│   ├── Home.jsx         # GUI mode: hero, ~/now, ~/experience, ~/projects, …
│   └── Terminal.jsx     # Terminal mode: boot session, commands, games
├── translations/        # i18n files (en.js, pt.js)
├── theme.js             # MUI theme + Commandfolio design tokens
└── App.jsx              # Providers + Portfolio
```

## License

This project is licensed under the terms of the CC0 1.0 Universal license. See the [LICENSE](LICENSE) file for details.
