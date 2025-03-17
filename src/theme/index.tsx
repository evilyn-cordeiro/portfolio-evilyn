import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#673AB7",
    },
    secondary: {
      main: "#9575CD",
    },
    info: {
      main: "#BB86FC",
    },
    success: {
      main: "#8fe292",
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
    h1: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#FFFFFF",
    },
    h2: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#9575CD",
    },
    h3: {
      color: "#ffffff",
      fontFamily: "Nova Mono, monospace",
    },
    h4: {
      fontFamily: "Source Code Pro, monospace",
    },
    h6: {
      color: "#ffff",
      fontStyle: "italic",
    },
    body1: {
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
          border: "2px solid #673AB7",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#673AB7",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#512DA8",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          },
        },
        text: {
          backgroundColor: "transparent",
          color: "#E0E0E0",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#BB86FC",
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
          color: "#9575CD",
        },
        body1: {
          color: "#E0E0E0",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#BB86FC",
          textDecoration: "none",
          "&:hover": {
            color: "#4CAF50",
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
      main: "#9B4DCA",
    },
    secondary: {
      main: "#B39DDB",
    },
    info: {
      main: "#BB86FC",
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
      paper: "#E9E9E9",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    h1: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#212121",
    },
    h2: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#9B4DCA",
    },
    h3: {
      color: "#5E35B1",
      fontFamily: "Source Code Pro, monospace",
    },
    h4: {
      fontFamily: "Source Code Pro, monospace",
    },
    h6: {
      color: "#ffff",
      fontStyle: "italic",
    },
    body1: {
      fontSize: "1rem",
      color: "#212121",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "2px solid #9B4DCA",
          color: "#212121",
          borderRadius: "18px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#9B4DCA",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#7E3BA5",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          },
        },
        text: {
          backgroundColor: "transparent",
          color: "#212121",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#7E3BA5",
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
          color: "#9B4DCA",
        },
        body1: {
          color: "#212121",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#BB86FC",
          textDecoration: "none",
          "&:hover": {
            color: "#4CAF50",
          },
        },
      },
    },
  },
});
