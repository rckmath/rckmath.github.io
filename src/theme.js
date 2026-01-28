import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) => {
  const isDark = mode === 'dark';

  // Sophisticated color palette - softer, more eye-friendly greens
  const colors = {
    // Primary: Emerald green - softer than lime, maintains terminal aesthetic
    primary: {
      main: isDark ? '#10B981' : '#059669',      // Emerald 500/600
      light: isDark ? '#34D399' : '#10B981',     // Emerald 400/500
      dark: isDark ? '#059669' : '#047857',      // Emerald 600/700
    },
    // Secondary: Cyan/Teal - complements green better than magenta
    secondary: {
      main: isDark ? '#06B6D4' : '#0891B2',      // Cyan 500/600
      light: isDark ? '#22D3EE' : '#06B6D4',     // Cyan 400/500
      dark: isDark ? '#0891B2' : '#0E7490',      // Cyan 600/700
    },
    // Backgrounds with more depth
    background: {
      default: isDark ? '#0A0F0D' : '#F8FAF9',   // Very dark green-tint / Light mint-white
      paper: isDark ? '#111916' : '#FFFFFF',     // Dark green-gray / Pure white
      elevated: isDark ? '#1A2420' : '#F0F5F3',  // Slightly lighter / Soft mint
    },
    // Text colors with better contrast
    text: {
      primary: isDark ? '#E8F5E9' : '#1A2E1F',   // Light mint / Dark forest
      secondary: isDark ? '#A5C4AC' : '#4A6B52', // Muted green / Medium forest
    },
  };

  return createTheme({
    palette: {
      mode,
      primary: colors.primary,
      secondary: colors.secondary,
      background: {
        default: colors.background.default,
        paper: colors.background.paper,
      },
      text: colors.text,
      divider: isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(5, 150, 105, 0.12)',
      // Custom colors accessible via theme.palette
      custom: {
        elevated: colors.background.elevated,
        glow: isDark ? 'rgba(16, 185, 129, 0.4)' : 'rgba(5, 150, 105, 0.2)',
        cardBorder: isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(5, 150, 105, 0.15)',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 12,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: theme.palette.mode === 'dark'
                ? `0 8px 32px rgba(16, 185, 129, 0.15), 0 4px 16px rgba(0, 0, 0, 0.3)`
                : `0 8px 24px rgba(5, 150, 105, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)`,
            },
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            padding: '8px 16px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        },
      },
    },
  });
};
