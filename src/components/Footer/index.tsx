import { Box, Button, Grid, Typography } from "@mui/material";
import { GitHubIcon, LinkedInIcon } from "../icons";

interface FooterProps {
  currentTheme: any;
}

export default function Footer({ currentTheme }: FooterProps) {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: currentTheme.palette.background.paper,
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              color: currentTheme.palette.text.primary,
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Contato
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: currentTheme.palette.text.secondary }}
          >
            E-mail: evilyndeveloper@gmail.com
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: currentTheme.palette.text.secondary }}
          >
            Telefone: +55 (88) 9 9342-4748
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="mailto:evilyndeveloper@gmail.com"
              sx={{
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              Enviar E-mail
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
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
          <a
            style={{
              textTransform: "none",
              textDecoration: "none",
              color: currentTheme.palette.text.secondary,
            }}
            href="https://linkedin.com/in/evilynprofile-devhttps://www.linkedin.com/in/evilyn-araujo-profiledev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize={"large"} />
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
              fontSize={"large"}
            />
          </a>
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
        © 2024 Evilyn Cordeiro. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
