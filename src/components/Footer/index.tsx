import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Language } from "@mui/icons-material";

interface FooterProps {
  currentTheme: any;
}

const Footer = ({ currentTheme }: FooterProps) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
