import { createTheme } from "@mui/material";

// Tema Escuro (Dark)
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BD93F9", // Roxo mais vibrante para destaque
    },
    secondary: {
      main: "#FF79C6", // Rosa vibrante
    },
    info: {
      main: "#8BE9FD", // Azul claro
    },
    success: {
      main: "#50FA7B", // Verde claro
    },
    warning: {
      main: "#F1FA8C", // Amarelo
    },
    error: {
      main: "#FF5555", // Vermelho
    },
    background: {
      default: "#282A36",
      paper: "#44475A",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#8692b6",
    },
  },
  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#F8F8F2",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#FF79C6",
    },
    body1: {
      fontSize: "1rem",
      color: "#F8F8F2",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#44475A",
          color: "#F8F8F2",
          borderRadius: "20px",
          border: "2px solid #BD93F9",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#BD93F9", // Roxo vibrante
          color: "#F8F8F2", // Texto claro
          borderRadius: "10px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#9E7DF7", // Roxo mais suave no hover
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#F8F8F2",
        },
        h2: {
          color: "#FF79C6",
        },
        body1: {
          color: "#F8F8F2",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#8BE9FD",
          textDecoration: "none",
          "&:hover": {
            color: "#50FA7B",
          },
        },
      },
    },
  },
});

// Tema Claro (Light)
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6A5ACD", // Cor roxa suave
    },
    secondary: {
      main: "#FF69B4", // Cor rosa suave
    },
    info: {
      main: "#00BFFF", // Azul claro
    },
    success: {
      main: "#32CD32", // Verde claro
    },
    warning: {
      main: "#FFD700", // Amarelo
    },
    error: {
      main: "#FF6347", // Tom mais claro de vermelho
    },
    background: {
      default: "#ffebff", // Fundo claro
      paper: "#FFFFFF", // Fundo branco para os cartões
    },
    text: {
      primary: "#333333", // Texto escuro
      secondary: "#666666", // Texto secundário
    },
  },
  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#333333",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#FF69B4",
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "2px solid #6A5ACD",
          color: "#333333",
          borderRadius: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#6A5ACD", // Roxo mais suave para o botão primário
          color: "#FFFFFF", // Texto claro
          borderRadius: "10px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#5A4BCF", // Roxo um pouco mais escuro no hover
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#333333",
        },
        h2: {
          color: "#FF69B4",
        },
        body1: {
          color: "#333333",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#00BFFF", // Azul claro
          textDecoration: "none",
          "&:hover": {
            color: "#32CD32", // Verde claro
          },
        },
      },
    },
  },
});
