import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { Language, Brightness4, Brightness7 } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { KeyboardDoubleArrowDownIcon } from "../icons";

interface HeroProps {
  currentTheme: any;
  toggleTheme: () => void;
  scrollTo: React.RefObject<HTMLElement>;
  changeLanguage: (lang: string) => void;
}

const Hero: React.FC<HeroProps> = ({
  currentTheme,
  toggleTheme,
  scrollTo,
  changeLanguage,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTarget = () => {
    if (scrollTo.current) {
      scrollTo.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (lang: string) => {
    changeLanguage(lang);
    setAnchorEl(null);
  };

  const getButtonText = () =>
    i18n.language === "en" ? t("lang-ingles") : t("lang-portugues");

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        backgroundColor: currentTheme.palette.background.default,
        color: "white",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter:
            currentTheme.palette.mode === "dark"
              ? "brightness(0.4)"
              : "brightness(0.6)",
        }}
      >
        <source src={"/heroDark.mp4"} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      <Box
        sx={{
          zIndex: 1,
          padding: "0 20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            className="hero-title"
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: 600,
              textTransform: "uppercase",
              display: "inline-block",
              background: "linear-gradient(45deg, #768fda, #1E3A8A, #9eb4ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            EVILYN CORDEIRO
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: 3,
              fontSize: "1rem",
              fontWeight: 400,
            }}
          >
            {t("descricao-cargo")}
          </Typography>
        </motion.div>
      </Box>

      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        position={"absolute"}
        alignItems={"center"}
        top={"0"}
        padding={2}
      >
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
        <Button
          onClick={toggleTheme}
          sx={{
            color: "#fff",
            background: "transparent",
            padding: "0.5rem",
            "&:hover": {
              background: "none",
              color: "#fff",
            },
          }}
        >
          {currentTheme.palette.mode === "dark" ? (
            <Brightness7 />
          ) : (
            <Brightness4 />
          )}
        </Button>
      </Box>

      <motion.div
        style={{
          position: "absolute",
          bottom: "40px",
          zIndex: 1,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <KeyboardDoubleArrowDownIcon
          sx={{
            fontSize: "4rem",
            cursor: "pointer",
            color: "#fff",
            transition: "color 0.3s ease",
            "&:hover": {
              color: currentTheme.palette.primary.main,
            },
          }}
          onClick={scrollToTarget}
        />
      </motion.div>
    </Box>
  );
};

export default Hero;
