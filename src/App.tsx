import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { AboutMe } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
