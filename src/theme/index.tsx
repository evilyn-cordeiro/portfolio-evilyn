import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BD93F9",
    },
    secondary: {
      main: "#FF79C6",
    },
    info: {
      main: "#8BE9FD",
    },
    success: {
      main: "#50FA7B",
    },
    warning: {
      main: "#F1FA8C",
    },
    error: {
      main: "#FF5555",
    },
    background: {
      default: "#282A36",
      paper: "#44475A",
    },
    text: {
      primary: "#F8F8F2",
      secondary: "#6272A4",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
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
          width: "100%",
          minHeight: "300px",
          borderRadius: "20px",
          border: "2px solid #BD93F9",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#44475A",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FF79C6",
          color: "#F8F8F2",
          borderRadius: "10px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#FF55A5",
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
