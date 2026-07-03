import { createContext, use, useState, useEffect, useCallback } from "react";
import en from "../translations/en";
import pt from "../translations/pt";

const LanguageContext = createContext();
const translations = { en, pt };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved === "pt" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations[language];

      for (const k of keys) {
        if (value && typeof value === "object") {
          value = value[k];
        } else {
          return key;
        }
      }

      return value ?? key;
    },
    [language]
  );

  const changeLanguage = (lang) => {
    if (lang === "en" || lang === "pt") setLanguage(lang);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <LanguageContext value={{ language, setLanguage: changeLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext>
  );
};

export const useLanguage = () => {
  const context = use(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
