import { useState } from "react";
import { ThemeProvider, Button } from "@mui/material";
import { darkTheme, lightTheme } from "./theme"; // Importando os temas
import { AboutMe } from "./pages";
import { BedtimeIcon, LightModeIcon } from "./components/icons";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Button
        color="primary"
        sx={{
          position: "fixed",
          bottom: "15px",
          right: "20px",
          borderRadius: "50%",
          padding: 3,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          zIndex: 1000,
          backgroundColor: currentTheme.palette.primary.main,
          "&:hover": {
            backgroundColor: currentTheme.palette.primary.dark,
            transform: "scale(1.1)",
          },
        }}
        onClick={toggleTheme}
      >
        {isDarkMode ? <BedtimeIcon /> : <LightModeIcon />}
      </Button>
      <AboutMe currentTheme={currentTheme} />
    </ThemeProvider>
  );
}

export default App;
