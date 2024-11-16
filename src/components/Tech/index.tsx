import { Box, Grid, Stack, Typography } from "@mui/material";
import { technologies } from "../../pages/LandingPage/const";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TechProps {
  currentTheme: any;
}

export default function Tech({ currentTheme }: TechProps) {
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);

  // Função para detectar rolagem
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Aplica a animação quando a página for rolada para baixo
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        padding: "5rem 5rem",
        backgroundColor: currentTheme.palette.background.default,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: currentTheme.palette.text.primary,
          position: "relative",
          textAlign: "center",
        }}
      >
        Principais Tecnologias
        <Box
          sx={{
            height: "4px",
            width: "200px",
            backgroundColor: currentTheme.palette.primary.main,
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Typography>

      {/* Aqui a animação para os itens da lista de tecnologias */}
      <Grid container spacing={4} justifyContent="center" marginTop={3}>
        {technologies.map((tech, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Início da animação (invisível e com deslocamento)
              animate={{
                opacity: scrollingDown ? 1 : 0, // Aparece quando rola para baixo
                y: scrollingDown ? 0 : 50, // Volta para o lugar quando rola para cima
              }}
              transition={{
                duration: 0.9, // Duração da animação
                delay: index * 0.1, // Delay para cada item aparecer um pouco após o outro
                ease: "easeOut", // Efeito suave
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box
                  sx={{
                    fontSize: 50,
                    color: currentTheme.palette.text.secondary,
                    backgroundColor: "transparent",
                    padding: "10px",
                    borderRadius: "50%",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <i className={`${tech.icon} colored`} />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: currentTheme.palette.text.primary,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {tech.name}
                </Typography>

                {tech.experience && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: currentTheme.palette.text.secondary,
                      textAlign: "center",
                      fontStyle: "italic",
                      fontSize: "0.875rem",
                    }}
                  >
                    {tech.experience} {tech.experience > 1 ? "anos" : "ano"} de
                    experiência
                  </Typography>
                )}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
