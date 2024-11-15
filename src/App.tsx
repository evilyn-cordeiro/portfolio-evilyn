import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <LandingPage currentTheme={currentTheme} />
    </ThemeProvider>
  );
}

export default App;
