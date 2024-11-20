import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#673AB7", // Roxo escuro como cor primária
    },
    secondary: {
      main: "#9575CD", // Roxo mais claro para a cor secundária
    },
    info: {
      main: "#BB86FC", // Roxo suave para info
    },
    success: {
      main: "#4CAF50", // Verde mais sóbrio
    },
    warning: {
      main: "#FFEB3B", // Amarelo suave e discreto
    },
    error: {
      main: "#F44336", // Vermelho mais suave
    },
    background: {
      default: "#212121", // Fundo muito escuro, quase preto
      paper: "#424242", // Fundo de cartões mais suave
    },
    text: {
      primary: "#E0E0E0", // Texto claro
      secondary: "#B0BEC5", // Texto secundário mais suave
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
      color: "#9575CD", // Roxo mais claro
    },
    h3: {
      fontFamily: "Source Code Pro, monospace",
    },
    h4: {
      fontFamily: "Source Code Pro, monospace",
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
          backgroundColor: "#424242", // Fundo de cartão suave
          color: "#E0E0E0", // Texto claro
          borderRadius: "20px",
          border: "2px solid #673AB7", // Roxo escuro no border
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#673AB7", // Roxo escuro
          color: "#FFFFFF", // Texto branco
          borderRadius: "10px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#512DA8", // Roxo mais escuro no hover
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
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#212121",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#9575CD", // Roxo mais claro
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
          border: "2px solid #673AB7", // Roxo escuro no border
          color: "#212121", // Texto escuro
          borderRadius: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#673AB7", // Roxo escuro
          color: "#FFFFFF", // Texto branco
          borderRadius: "10px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#512DA8", // Roxo mais escuro no hover
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
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
          color: "#9575CD",
        },
        body1: {
          color: "#212121",
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
