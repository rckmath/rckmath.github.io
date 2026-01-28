# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built as a React 19 SPA with Vite, Material-UI, and multi-language support (EN/PT).

## Commands

```bash
yarn dev        # Start development server
yarn build      # Production build
yarn lint       # ESLint with 0 warnings tolerance
yarn preview    # Preview production build locally
yarn deploy     # Build and deploy to GitHub Pages
```

## Architecture

### State Management
Two React Context providers wrap the app in `App.jsx`:
- **ThemeContextProvider** (`src/context/ThemeContext.jsx`): Light/dark mode with localStorage persistence
- **LanguageProvider** (`src/context/LanguageContext.jsx`): EN/PT language state with `t()` translation function

Access via hooks: `useTheme()` and `useTranslation()`.

### Component Structure
- **Pages**: Single `Home.jsx` as the main view
- **Layout**: Sticky `Header` + fixed `Footer` with main content between
- **MainCard**: Flippable cards with front/back content (Work History, Education) using carousel pagination
- **TypewriterText**: Animated text effect via `UseTypewriter` hook

### Translations
All UI text lives in `src/translations/{en,pt}.js`. Use dot notation for nested keys: `t('softwrench.role')`.

### Styling
- MUI's `styled()` API and `sx` prop for component styles
- Emotion for styled components
- Glassmorphic aesthetic with backdrop blur effects
- Responsive breakpoint: `maxWidth: 767px` for mobile

## Git Workflow

Feature branches → `develop` → `master` (via PRs). Deployment targets `master`.
