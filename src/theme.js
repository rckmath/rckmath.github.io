import { createTheme } from "@mui/material/styles";

// Commandfolio design tokens — injected as CSS variables on each page root
export const guiTokens = {
  dark: {
    "--bg": "#0B0E0C",
    "--ink": "#E8EDE9",
    "--dim": "#9AA69E",
    "--faint": "#5A655D",
    "--line": "rgba(232,237,233,.09)",
    "--accent": "#5DDEA6",
    "--accent-brd": "rgba(93,222,166,.5)",
  },
  light: {
    "--bg": "#F5F3ED",
    "--ink": "#171B18",
    "--dim": "#555D57",
    "--faint": "#899087",
    "--line": "rgba(23,27,24,.13)",
    "--accent": "#1F7A52",
    "--accent-brd": "rgba(31,122,82,.5)",
  },
};

export const fonts = {
  sans: "'Space Grotesk', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const getTheme = (mode) => {
  const isDark = mode === "dark";
  const tokens = guiTokens[isDark ? "dark" : "light"];

  return createTheme({
    palette: {
      mode,
      primary: { main: tokens["--accent"] },
      background: {
        default: tokens["--bg"],
        paper: isDark ? "#0C110E" : "#FFFFFF",
      },
      text: {
        primary: tokens["--ink"],
        secondary: tokens["--dim"],
      },
      divider: tokens["--line"],
    },
    typography: {
      fontFamily: fonts.sans,
    },
  });
};
