import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme"; // Importando os temas
import { AboutMe } from "./pages";
import { BedtimeIcon, LightModeIcon } from "./components/icons";
import { FixedButton } from "./components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <FixedButton
        icon={isDarkMode ? <BedtimeIcon /> : <LightModeIcon />}
        onClick={toggleTheme}
      />
      <AboutMe currentTheme={currentTheme} />
    </ThemeProvider>
  );
}

export default App;
