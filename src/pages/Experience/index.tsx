import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "Tech Solutions",
      logo: "https://via.placeholder.com/56", // Imagem de exemplo
      location: "São Paulo, SP, Brasil",
      duration: "2 anos (2021 - 2023)",
      role: "Desenvolvedor Front-end",
      description:
        "Responsável pelo desenvolvimento de interfaces de usuário em aplicações web utilizando React.",
    },
    {
      company: "Inovações Ltda",
      logo: "https://via.placeholder.com/56", // Imagem de exemplo
      location: "Rio de Janeiro, RJ, Brasil",
      duration: "1 ano (2020 - 2021)",
      role: "Estagiário em Desenvolvimento de Software",
      description:
        "Auxiliei na manutenção de sistemas e no desenvolvimento de novas funcionalidades.",
    },
    {
      company: "StartUp XYZ",
      logo: "https://via.placeholder.com/56", // Imagem de exemplo
      location: "Belo Horizonte, MG, Brasil",
      duration: "6 meses (2019)",
      role: "Desenvolvedor Júnior",
      description:
        "Colaborei em projetos de desenvolvimento web, focando em soluções de back-end com Node.js.",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Experiências Profissionais
      </Typography>
      <Box sx={{ position: "relative", pl: 4, mt: 5 }}>
        {experiences.map((experience, index) => (
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
                src={experience.logo}
                alt={experience.company}
                sx={{
                  width: 56,
                  height: 56,
                  position: "absolute",
                  top: -28,
                  left: -28,
                }}
              />
              <Typography variant="h6">{experience.company}</Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.duration}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {experience.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceTimeline;
