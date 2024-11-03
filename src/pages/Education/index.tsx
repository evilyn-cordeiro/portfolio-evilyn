import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";

const EducationTimeline = () => {
  const education = [
    {
      institution: "Universidade Federal do Brasil",
      logo: "https://via.placeholder.com/56", // Imagem de exemplo
      location: "São Paulo, SP, Brasil",
      duration: "Bacharelado em Ciência da Computação (2019 - 2023)",
      description:
        "Foco em desenvolvimento de software e inteligência artificial.",
      activities:
        "Participação em projetos de pesquisa em IA e desenvolvimento de aplicativos.",
    },
    {
      institution: "Colégio Técnico da Cidade",
      logo: "https://via.placeholder.com/56", // Imagem de exemplo
      location: "Rio de Janeiro, RJ, Brasil",
      duration: "Técnico em Informática (2017 - 2019)",
      description:
        "Aprendizado em programação, redes e manutenção de computadores.",
      activities:
        "Estágio em uma empresa de tecnologia, desenvolvendo pequenas aplicações.",
    },
    {
      institution: "Escola Secundária ABC",
      logo: "https://via.placeholder.com/56", // Imagem de exemplo
      location: "Belo Horizonte, MG, Brasil",
      duration: "Ensino Médio (2015 - 2017)",
      description: "Formação geral com ênfase em ciências exatas.",
      activities:
        "Participação em feiras de ciências e competições de matemática.",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Educação
      </Typography>
      <Box sx={{ position: "relative", pl: 4 }}>
        {education.map((edu, index) => (
          <Box key={index} sx={{ mb: 4, position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: 2,
                height: "100%",
                bgcolor: "grey.300",
              }}
            />
            <Paper
              elevation={3}
              sx={{ padding: 2, marginLeft: 4, position: "relative" }}
            >
              <Avatar
                src={edu.logo}
                alt={edu.institution}
                sx={{
                  width: 56,
                  height: 56,
                  position: "absolute",
                  top: -28,
                  left: -28,
                }}
              />
              <Typography variant="h6">{edu.institution}</Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.duration}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                {edu.description}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Atividades: {edu.activities}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EducationTimeline;
