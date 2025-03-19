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
        backgroundColor: currentTheme.palette.background.default,
        color: "white",
      }}
    >
      {/* Vídeo de fundo minimalista */}
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
              background:
                "linear-gradient(45deg, #4169E1,#fff, #4169E1,#fff, #1E3A8A)", // Gradiente azul claro e escuro
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              animation: "gradientShift 8s ease infinite", // Animação suave para o gradiente
            }}
          >
            EVILYN CORDEIRO
          </Typography>
        </motion.div>

        {/* Animação para a descrição */}
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

      {/* Botão de alternância de tema */}
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

      {/* Ícone de rolagem */}
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
