import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Language } from "@mui/icons-material";

interface FooterProps {
  currentTheme: any;
  changeLanguage: (lang: string) => void;
}

const Footer = ({ currentTheme, changeLanguage }: FooterProps) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleMenuClose = (lang: string) => {
    changeLanguage(lang);
    setAnchorEl(null);
  };

  const getButtonText = () =>
    i18n.language === "en" ? t("lang-ingles") : t("lang-portugues");

  return (
    <Box
      sx={{
        padding: "1rem",
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
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="text"
              onClick={handleMenuClick}
              sx={{
                color: currentTheme.palette.text.secondary,
                textTransform: "none",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Language sx={{ marginRight: 1 }} />
              {getButtonText()}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              PaperProps={{
                sx: {
                  backgroundColor: currentTheme.palette.background.paper,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                },
              }}
            >
              <MenuItem onClick={() => handleMenuClose("pt")}>
                {t("lang-portugues")}
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose("en")}>
                {t("lang-ingles")}
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
            {t("copywriter")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
