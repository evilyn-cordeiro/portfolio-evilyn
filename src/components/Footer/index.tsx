import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";

interface FooterProps {
  currentTheme: any;
}

const Footer = ({ currentTheme }: FooterProps) => {
  const { t } = useTranslation();

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
