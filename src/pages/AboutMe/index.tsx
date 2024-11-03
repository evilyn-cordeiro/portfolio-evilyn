import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const AboutMe = () => {
  const topics = [
    {
      title: "Quem Sou Eu",
      description: "Sou um desenvolvedor apaixonado por tecnologia e inovação.",
      image:
        "https://designcomcafe.com.br/wp-content/uploads/2023/10/como-criar-prompts-para-geracao-de-imagens-com-ia.jpg",
    },
    {
      title: "Universidades Desejadas",
      description: "Quero me inscrever em universidades como XYZ e ABC.",
      image: "https://link-da-imagem-2.jpg",
    },
    {
      title: "Cursos de Interesse",
      description:
        "Pretendo fazer cursos de Desenvolvimento Web e Ciência da Computação.",
      image: "https://link-da-imagem-3.jpg",
    },
    {
      title: "Meus Objetivos",
      description:
        "Meu objetivo é me tornar um especialista em tecnologia e contribuir para projetos inovadores.",
      image: "https://link-da-imagem-4.jpg",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Sobre Mim
      </Typography>
      <Grid container spacing={4}>
        {topics.map((topic, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }} // Animação ao passar o mouse
              whileTap={{ scale: 0.95 }} // Animação ao clicar
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column" },
                  alignItems: "center",
                  padding: 2,
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  boxShadow: 2,
                  marginBottom: 2,
                }}
              >
                <img
                  src={topic.image}
                  alt={topic.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                  }}
                />
                <Box>
                  <Typography variant="h6">{topic.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {topic.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutMe;
