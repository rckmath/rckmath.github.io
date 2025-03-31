import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6", // Modern blue
      light: "#60a5fa",
      dark: "#2563eb",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8b5cf6", // Modern purple
      light: "#a78bfa",
      dark: "#7c3aed",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    subtitle2: {
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    body1: {
      letterSpacing: "0.01em",
    },
    body2: {
      letterSpacing: "0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    caption: {
      letterSpacing: "0.02em",
    },
    overline: {
      letterSpacing: "0.05em",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(30, 41, 59, 0.9)",
          backdropFilter: "blur(8px)",
          borderRadius: 8,
          padding: "8px 12px",
          fontSize: "0.875rem",
        },
        arrow: {
          color: "rgba(30, 41, 59, 0.9)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(30, 41, 59, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
});

export default theme;
