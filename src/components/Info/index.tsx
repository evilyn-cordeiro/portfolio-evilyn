import { Box, Typography } from "@mui/material";

interface InfoProps {
  currentTheme: any;
  scrollTo: React.RefObject<HTMLElement>;
}

export default function Info({ currentTheme, scrollTo }: InfoProps) {
  return (
    <Box
      sx={{
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
          padding: { xs: "3rem", sm: "3rem", md: "3rem", lg: "5rem" },
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
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "2rem",
            color: currentTheme.palette.text.secondary,
            lineHeight: "1.8",
            textAlign: "justify",
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
            textAlign: "justify",
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
            sm: "100%",
            md: "50%",
            lg: "50%",
          },
          aspectRatio: "1",
          backgroundImage: 'url("/evilyn.png")',
          backgroundSize: "cover",
          objectFit: "scale-down",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          overflow: "hidden", // Garante que o conteúdo extra da imagem não apareça
          transition: "all 0.3s ease-in-out", // Suaviza mudanças de layout
        }}
      ></Box>
    </Box>
  );
}
