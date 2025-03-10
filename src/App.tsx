import "./i18n";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import LandingPage from "./pages/LandingPage";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <I18nextProvider i18n={i18n}>
        <LandingPage
          currentTheme={isDarkMode ? darkTheme : lightTheme}
          toggleTheme={toggleTheme}
          changeLanguage={changeLanguage}
        />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
