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
      main: "#4CAF50",
    },
    warning: {
      main: "#FFEB3B",
    },
    error: {
      main: "#F44336",
    },
    background: {
      default: "#212121",
      paper: "#424242",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#B0BEC5",
    },
  },
  typography: {
    h1: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#E0E0E0",
    },
    h2: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#9575CD",
    },
    h3: {
      color: "#fffff",
      fontFamily: "Source Code Pro, monospace",
    },
    h4: {
      fontFamily: "Source Code Pro, monospace",
    },
    h6: {
      color: "#ead9ff",
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
          backgroundColor: "#424242",
          color: "#E0E0E0",
          borderRadius: "20px",
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
          borderRadius: "10px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#512DA8",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#E0E0E0",
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
          color: "#BB86FC", // Roxo suave
          textDecoration: "none",
          "&:hover": {
            color: "#4CAF50", // Verde discreto no hover
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
      default: "#F5F5F5", // Fundo mais claro
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000", // Texto escuro
      secondary: "#757575", // Texto secundário mais suave
    },
  },
  typography: {
    h1: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#212121", // Texto escuro para h1
    },
    h2: {
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#B39DDB", // Roxo mais claro e suave para h2
    },
    h3: {
      color: "#D1C4E9", // Roxo pastel muito suave para h3
      fontFamily: "Source Code Pro, monospace",
    },
    h4: {
      fontFamily: "Source Code Pro, monospace",
    },
    h6: {
      color: "#D1C4E9", // Roxo pastel suave para h6
    },
    body1: {
      fontSize: "1rem",
      color: "#212121", // Texto escuro
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF", // Cor branca para o fundo
          border: "2px solid #9B4DCA", // Bordas roxas mais suaves
          color: "#212121", // Texto escuro
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra mais suave
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#9B4DCA", // Roxo mais suave para os botões
          color: "#FFFFFF", // Texto branco
          borderRadius: "10px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#7E3BA5", // Roxo mais suave no hover
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#212121", // Texto principal escuro
        },
        h2: {
          color: "#B39DDB", // Roxo suave para h2
        },
        body1: {
          color: "#212121", // Texto principal escuro
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#BB86FC", // Roxo suave para links
          textDecoration: "none",
          "&:hover": {
            color: "#4CAF50", // Verde claro no hover
          },
        },
      },
    },
  },
});
