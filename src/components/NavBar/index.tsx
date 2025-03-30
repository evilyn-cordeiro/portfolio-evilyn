import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Language,
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  currentTheme: any;
  scrollTo?: React.RefObject<HTMLElement>;
  toggleTheme: () => void;
  changeLanguage: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  toggleTheme,
  scrollTo,
  currentTheme,
  changeLanguage,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (lang: string) => {
    changeLanguage(lang);
    setAnchorEl(null);
  };

  const getButtonText = () =>
    i18n.language === "en" ? t("lang-ingles") : t("lang-portugues");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0",
        width: "100%",
        background: "none",
        zIndex: 999,
        padding: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1024px",
          flex: 1,
          padding: "0 10px", // Added padding for better spacing
        }}
      >
        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => scrollTo}
            sx={{ color: "#fff", textTransform: "none", marginRight: 2 }}
          >
            {t("section1")}
          </Button>
          <Button
            onClick={() => scrollTo}
            sx={{ color: "#fff", textTransform: "none", marginRight: 2 }}
          >
            {t("section2")}
          </Button>
          <Button
            onClick={() => scrollTo}
            sx={{ color: "#fff", textTransform: "none" }}
          >
            {t("section3")}
          </Button>
        </Box>

        {/* Menu Button (Mobile) */}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Language and Theme Button */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <Button
            variant="text"
            onClick={handleMenuClick}
            sx={{
              color: "#fff",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                background: "none",
                color: "#fff",
              },
            }}
          >
            <Language sx={{ marginRight: 1 }} />
            {getButtonText()}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleMenuClose("pt")}>
              {t("lang-portugues")}
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose("en")}>
              {t("lang-ingles")}
            </MenuItem>
          </Menu>

          <IconButton
            onClick={toggleTheme}
            sx={{ color: "#fff", marginLeft: 2 }}
          >
            {currentTheme.palette.mode === "dark" ? (
              <Brightness7 />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </Box>
      </Box>

      {/* Drawer (Mobile Menu) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem onClick={() => scrollTo}>
            <ListItemText primary={t("section1")} />
          </ListItem>
          <ListItem onClick={() => scrollTo}>
            <ListItemText primary={t("section2")} />
          </ListItem>
          <ListItem onClick={() => scrollTo}>
            <ListItemText primary={t("section3")} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
