// src/App.tsx
import "./App.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Home } from "./pages";

const theme = createTheme({
  palette: {
    primary: {
      main: "#830024",
    },
    secondary: {
      main: "#95003a",
    },
    info: {
      main: "#00aaff",
    },
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
