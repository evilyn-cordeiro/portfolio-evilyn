import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4169E1",
    },
    secondary: {
      main: "#607D8B",
    },
    info: {
      main: "#B0BEC5",
    },
    success: {
      main: "#4CAF50",
    },
    warning: {
      main: "#FFEB3B",
    },
    error: {
      main: "#F44336",
    },
    background: {
      default: "#121212",
      paper: "#212121",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#FFFFFF",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#4169E1",
    },
    h3: {
      fontFamily: "'Merriweather', serif",
    },
    h4: {
      fontFamily: "'Source Code Pro', monospace",
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: "1rem",
      color: "#E0E0E0",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
          color: "#E0E0E0",
          borderRadius: "18px",
          border: "2px solid #4169E1",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#4169E1",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#3651A5",
          },
        },
        text: {
          backgroundColor: "transparent",
          color: "#E0E0E0",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#4169E1",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#FFFFFF",
        },
        h2: {
          color: "#4169E1",
        },
        body1: {
          color: "#E0E0E0",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#4169E1",
          textDecoration: "none",
          "&:hover": {
            color: "#FFEB3B",
          },
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4169E1",
    },
    secondary: {
      main: "#607D8B",
    },
    info: {
      main: "#B0BEC5",
    },
    success: {
      main: "#4CAF50",
    },
    warning: {
      main: "#FFEB3B",
    },
    error: {
      main: "#F44336",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#212121",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#4169E1",
    },
    h3: {
      fontFamily: "'Merriweather', serif",
    },
    h4: {
      fontFamily: "'Source Code Pro', monospace",
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: "1rem",
      color: "#212121",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "2px solid #4169E1",
          color: "#212121",
          borderRadius: "18px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#4169E1",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#3651A5",
          },
        },
        text: {
          backgroundColor: "transparent",
          color: "#212121",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#4169E1",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#212121",
        },
        h2: {
          color: "#4169E1",
        },
        body1: {
          color: "#212121",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#4169E1",
          textDecoration: "none",
          "&:hover": {
            color: "#FFEB3B",
          },
        },
      },
    },
  },
});
