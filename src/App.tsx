import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/Search";
import { useTranslation } from "react-i18next";
import { Footer } from "./components";

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  currentTheme={isDarkMode ? darkTheme : lightTheme}
                  toggleTheme={toggleTheme}
                  changeLanguage={changeLanguage}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  currentTheme={isDarkMode ? darkTheme : lightTheme}
                />
              }
            />
          </Routes>
        </Router>
        <Footer currentTheme={isDarkMode ? darkTheme : lightTheme} />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
