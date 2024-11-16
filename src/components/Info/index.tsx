import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Importando o motion do framer-motion

interface InfoProps {
  currentTheme: any;
}

export default function Info({ currentTheme }: InfoProps) {
  return (
    <Box
      sx={{
        height: { sm: "fit-content", md: "fit-content", lg: "850px" },
        padding: { xs: "3rem 1rem", sm: "3rem", md: "3rem", lg: "5rem" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: currentTheme.palette.background.paper,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: currentTheme.palette.text.primary,
            position: "relative",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
          }}
        >
          Sobre Mim
          <Box
            sx={{
              height: "4px",
              width: "60px",
              backgroundColor: currentTheme.palette.primary.main,
              position: "absolute",
              bottom: "-10px",
            }}
          />
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "2rem",
            color: currentTheme.palette.text.secondary,
            lineHeight: "1.8",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          Como desenvolvedora de software experiente, refinei minhas habilidades
          em desenvolvimento, organização e arquitetura de software através de
          uma diversidade de projetos.{" "}
          <strong style={{ color: `${currentTheme.palette.secondary.main}` }}>
            Possuo autonomia consolidada no front-end
          </strong>
          , contribuindo efetivamente em discussões e implementando melhorias
          significativas nas interfaces. No back-end e bancos de dados, estou em
          constante busca por aprimoramento, com foco especial na criação e
          integração de APIs.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "1rem",
            color: currentTheme.palette.text.secondary,
            lineHeight: "1.8",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          Atualmente, estou concluindo minha graduação e me preparando para uma
          pós-graduação em desenvolvimento web full stack, além de desenvolver
          projetos pessoais que impulsionam minha evolução técnica.
        </Typography>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "65%",
            md: "55%",
            lg: "35%",
          },
          marginTop: { xs: "2rem", md: "0" },
          backgroundImage: 'url("/evilyn.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: {
            xs: "300px",
            sm: "500px",
            md: "660px",
            lg: "600px",
          },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
}
