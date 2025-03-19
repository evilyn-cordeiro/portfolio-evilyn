import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton"; // Para os ícones clicáveis

interface InfoProps {
  currentTheme: any;
  scrollTo: React.RefObject<HTMLElement>;
}

export default function Info({ currentTheme }: InfoProps) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: currentTheme.palette.background.default,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: { xs: "2rem", sm: "4rem", md: "4rem", lg: "8rem" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: currentTheme.palette.text.primary,
            position: "relative",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
          }}
        >
          {t("sobre-mim")}
          <Box
            sx={{
              height: "4px",
              width: "60px",
              backgroundColor: currentTheme.palette.primary.main,
              position: "absolute",
              bottom: "-10px",
            }}
          />
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "2rem",
            color: currentTheme.palette.text.secondary,
            lineHeight: "1.8",
            textAlign: "justify",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
          }}
        >
          {t("descricao-sobre-mim")}
          <strong style={{ color: `${currentTheme.palette.secondary.main}` }}>
            {t("autonomia-front-end")}
          </strong>
          , {t("descricao-back-end")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "1rem",
            color: currentTheme.palette.text.secondary,
            lineHeight: "1.8",
            textAlign: "justify",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
          }}
        >
          {t("atualmente-graduacao")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/evilyn-araujo-profiledev/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: currentTheme.palette.text.secondary }}
          >
            <LinkedInIcon fontSize={"large"} />
          </IconButton>

          <IconButton
            href="https://github.com/evilyn-cordeiro"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: currentTheme.palette.text.secondary }}
          >
            <GitHubIcon fontSize={"large"} />
          </IconButton>

          <IconButton
            href="https://www.behance.net/evilyndev"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: currentTheme.palette.text.secondary }}
          >
            <i
              className="devicon-behance-plain"
              style={{ fontSize: "26.5px" }}
            ></i>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
