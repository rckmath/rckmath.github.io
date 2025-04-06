import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { getTheme } from "./theme";
import { useTheme } from "./context/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

const AppContent = () => {
  const { isDarkMode } = useTheme();
  const theme = getTheme(isDarkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
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
