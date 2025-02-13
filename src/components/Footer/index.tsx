import { Box, Button, Grid, Typography } from "@mui/material";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../icons";

interface FooterProps {
  currentTheme: any;
}

export default function Footer({ currentTheme }: FooterProps) {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: currentTheme.palette.background.default,
      }}
    >
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              color: currentTheme.palette.text.primary,
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Redes Sociais
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <a
              style={{
                textTransform: "none",
                textDecoration: "none",
                color: currentTheme.palette.text.secondary,
              }}
              href="https://www.linkedin.com/in/evilyn-araujo-profiledev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              style={{
                textTransform: "none",
                textDecoration: "none",
                color: currentTheme.palette.text.secondary,
              }}
              href="https://github.com/evilyn-cordeiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                color={currentTheme.palette.text.secondary}
                fontSize="large"
              />
            </a>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{
          marginTop: 3,
          color: currentTheme.palette.text.secondary,
          textAlign: "center",
        }}
      >
        © 2025 Evilyn Cordeiro. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
