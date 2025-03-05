import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Language } from "@mui/icons-material";

interface FooterProps {
  currentTheme: any;
  changeLanguage: (lang: string) => void;
}

export default function Footer({ currentTheme, changeLanguage }: FooterProps) {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: currentTheme.palette.background.paper,
      }}
    >
      <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{
              color: currentTheme.palette.text.primary,
              fontWeight: "bold",
              marginBottom: 1,
            }}
          >
            {t("footer.rede-social")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              LinkedIn
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
              GitHub
            </a>
            <Button
              type="button"
              variant="text"
              startIcon={
                <Language sx={{ color: currentTheme.palette.text.secondary }} />
              }
              onClick={handleClick}
              sx={{
                color: currentTheme.palette.text.secondary,
                textTransform: "none",
                padding: 0,
              }}
            >
              {i18n.language === "en"
                ? t("footer.lang-ingles")
                : t("footer.lang-portugues")}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleClose("pt")}>
                {t("footer.lang-portugues")}
              </MenuItem>
              <MenuItem onClick={() => handleClose("en")}>
                {t("footer.lang-ingles")}
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: currentTheme.palette.text.secondary,
              marginTop: 2,
            }}
          >
            {t("footer.copywriter")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
