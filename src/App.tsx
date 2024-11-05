// src/App.tsx
import "./App.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Home } from "./pages";

// Tema escuro
const theme = createTheme({
  palette: {
    mode: "dark", // Modo escuro
    primary: {
      main: "#ab80db",
    },
    secondary: {
      main: "#deb0f3",
    },
    info: {
      main: "#00aaff",
    },
    background: {
      default: "#121212", // Cor de fundo geral
      paper: "#1e1e1e", // Cor de fundo dos papéis (ex: cards, menus)
    },
    text: {
      primary: "#ffffff", // Cor do texto principal
      secondary: "#b0b0b0", // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif", // Definindo Poppins como fonte padrão
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
