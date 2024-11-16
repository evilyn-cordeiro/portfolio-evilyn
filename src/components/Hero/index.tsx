import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { KeyboardDoubleArrowDownIcon } from "../icons";
import { motion } from "framer-motion";

interface HeroProps {
  currentTheme: any;
  scrollTo: React.RefObject<HTMLElement>; // Recebe a referência como prop
}

const Hero: React.FC<HeroProps> = ({ currentTheme, scrollTo }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const textColor = currentTheme.palette.mode === "dark" ? "#fff" : "#333";
  const subTextColor =
    currentTheme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(0, 0, 0, 0.8)";

  const backgroundImage =
    currentTheme.palette.mode === "dark" ? "/heroDark.mp4" : "/heroLigth.mp4";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Função para rolar até o componente de destino
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
        backgroundImage: `url(${backgroundImage})`,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Header
      <AppBar
        sx={{
          top: 0,
          left: 0,
          right: 0,
          background: "transparent",
          boxShadow: "none",
          zIndex: 100,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
            padding: "1rem 0",
            color: currentTheme.palette.primary.main,
          }}
        >
          <Button
            sx={{
              color: currentTheme.palette.primary.main,
              background: "transparent",
            }}
            href="#home"
          >
            Home
          </Button>
          <Button
            sx={{
              color: currentTheme.palette.primary.main,
              background: "transparent",
            }}
            href="#sobre"
          >
            Sobre Mim
          </Button>
          <Button
            sx={{
              color: currentTheme.palette.primary.main,
              background: "transparent",
            }}
            href="#experiencias"
          >
            Experiências
          </Button>
          <Button
            sx={{
              color: currentTheme.palette.primary.main,
              background: "transparent",
            }}
            href="#projetos"
          >
            Meus Projetos
          </Button>
          <Button
            sx={{
              color: currentTheme.palette.primary.main,
              background: "transparent",
            }}
            href="#contato"
          >
            Contatos
          </Button>
        </Toolbar>
      </AppBar> */}
      {currentTheme.palette.mode === "dark" ? (
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
            filter: "brightness(0.5)",
          }}
        >
          <source src={"/heroDark.mp4"} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      ) : (
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
          }}
        >
          <source src={"/heroLigth.mp4"} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      )}
      <Box sx={{ maxWidth: "600px", padding: "20px", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "3.1rem",
                lg: "3.2rem",
                xl: "3.3rem",
              },
              color: textColor,
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
            variant="h6"
            sx={{
              color: subTextColor,
              marginBottom: 3,
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
                lg: "1.2rem",
                xl: "1.2rem",
              },
            }}
            letterSpacing={3}
          >
            Analista e Desenvolvedora de Softwares
          </Typography>
        </motion.div>
      </Box>
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
            color: textColor,
            cursor: "pointer",
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
