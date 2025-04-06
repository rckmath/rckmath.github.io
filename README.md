# Personal Website

This is my personal website built with React and Vite. The website features a modern, responsive design using Material-UI components and is deployed using GitHub Pages.

## Tech Stack

- React 19
- Vite
- Material-UI (MUI)
- React Router
- Emotion (for styled components)
- React Responsive (for responsive design)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── utils/         # Utility functions
├── theme.js       # MUI theme configuration
└── App.jsx        # Main application component
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. Build for production:
   ```bash
   yarn build
   ```
5. Deploy to GitHub Pages:
   ```bash
   yarn deploy
   ```

## Development

The project uses ESLint for code linting. Run the linter with:
```bash
yarn lint
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by the `gh-pages` package.

## License

This project is licensed under the terms of the CC0 1.0 Universal license. See the [LICENSE](LICENSE) file for details.
