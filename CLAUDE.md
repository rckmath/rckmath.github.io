# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built as a React 19 SPA with Vite, Material-UI v7, and multi-language support (EN/PT).

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
```
src/components/
├── AboutMeContent/       # Bio, skills tags, contact button
├── Header.jsx            # Sticky header with TypewriterText
├── Footer.jsx            # Fixed footer with social links
├── LanguageToggle.jsx    # EN/PT toggle buttons
├── MainCard/             # Flippable cards (Work History, Education)
│   ├── Cards.jsx         # Card configuration
│   └── Contents/         # WorkHistoryContent, EducationContent
├── ProjectsSection/      # Icon-only project showcase with tooltips
├── ScrollIndicator/      # Animated scroll-to button with bounce effect
├── SectionDivider/       # Visual divider with decorative dots
└── TypewriterText/       # Animated typing effect
```

### Pages
- `src/pages/Home.jsx`: Main landing page with sections (About, Cards, Projects)

### Translations
All UI text lives in `src/translations/{en,pt}.js`. Use dot notation for nested keys: `t('softwrench.role')`.

### Assets
- Static images: `public/` (profile, icons, flags)
- Project images: `public/projects/` (imma-deploy.png, iron-rifas.png)

## Design System

### Color Palette (`src/theme.js`)
- **Primary**: Emerald green (`#10B981` dark / `#059669` light)
- **Secondary**: Cyan (`#06B6D4` dark / `#0891B2` light)
- **Background**: Dark green-tinted (`#0A0F0D`) / Light mint-white (`#F8FAF9`)

### Styling Patterns
- MUI's `styled()` API and `sx` prop for component styles
- Emotion for styled components
- Glassmorphic aesthetic: `backdropFilter: "blur(10px)"`, `alpha()` for transparency
- Gradient text: `WebkitBackgroundClip: "text"` + `WebkitTextFillColor: "transparent"`
- Hover effects: `translateY()`, `scale()`, box-shadow glow
- Transitions: `0.3s ease-in-out` or `cubic-bezier(0.4, 0, 0.2, 1)`
- Responsive breakpoint: `maxWidth: 767px` via `useMediaQuery` from react-responsive

### Animation Patterns
- CSS keyframes via `@mui/material/styles` keyframes
- Bounce animation for scroll indicators
- Pulse animation for attention-grabbing elements

## Adding New Projects

1. Add project image to `public/projects/`
2. Update `src/components/ProjectsSection/ProjectsSection.jsx`:
   ```jsx
   const projects = [
     { id: "project-id", image: "/projects/image.png", url: "https://...", nameKey: "projectKey.name" },
   ];
   ```
3. Add translation keys in `src/translations/{en,pt}.js`:
   ```js
   projectKey: { name: "Project Name" },
   ```

## Git Workflow

Feature branches → `develop` → `master` (via PRs). Deployment targets `master`.
