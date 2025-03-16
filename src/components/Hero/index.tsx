import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { KeyboardDoubleArrowDownIcon } from "../icons";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroProps {
  currentTheme: any;
  toggleTheme: () => void;
  scrollTo: React.RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ currentTheme, toggleTheme, scrollTo }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { t }: { t: any } = useTranslation();

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

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
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
            currentTheme.palette.mode === "dark" ? "brightness(0.4)" : "none",
        }}
      >
        <source src={"/heroDark.mp4"} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      <Box sx={{ maxWidth: "600px", padding: "20px", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{
              duration: 2.5,
              delay: 1,
            }}
          >
            <Typography
              variant="h3"
              color={"#fff"}
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.3rem",
                  lg: "3.5rem",
                  xl: "4rem",
                },
              }}
            >
              EVILYN CORDEIRO
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: 3,
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
                lg: "1.2rem",
                xl: "1.2rem",
              },
            }}
          >
            {t("descricao-cargo")}
          </Typography>
        </motion.div>
      </Box>

      <Button
        onClick={toggleTheme}
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
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

      <motion.div
        style={{
          position: "absolute",
          bottom: "80px",
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
