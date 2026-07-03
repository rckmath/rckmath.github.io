import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider, useTheme } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { getTheme } from "./theme";

import Portfolio from "./pages/Portfolio";

const AppContent = () => {
  const { isDarkMode } = useTheme();
  const theme = getTheme(isDarkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeContextProvider>
  );
};

export default App;
