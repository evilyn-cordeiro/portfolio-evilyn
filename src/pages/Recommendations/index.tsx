import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const Recommendations = () => {
  const recommendations = [
    {
      name: "João Silva",
      role: "Desenvolvedor Sênior",
      feedback:
        "O trabalho de [Seu Nome] é excepcional. Ele possui um conhecimento profundo em tecnologia e sempre entrega projetos de alta qualidade.",
      image: "https://link-da-imagem-1.jpg",
      relationship: "Colega de trabalho por 2 anos",
    },
    {
      name: "Maria Oliveira",
      role: "Professora de Computação",
      feedback:
        "Um aluno dedicado e talentoso. [Seu Nome] sempre busca aprender e se aprimorar, trazendo ideias inovadoras para o grupo.",
      image: "https://link-da-imagem-2.jpg",
      relationship: "Professora e mentora",
    },
    {
      name: "Carlos Pereira",
      role: "Gerente de Projetos",
      feedback:
        "[Seu Nome] foi fundamental para o sucesso do nosso projeto. Sua habilidade em trabalhar em equipe e sua determinação fazem a diferença.",
      image: "https://link-da-imagem-3.jpg",
      relationship: "Gerente de projeto em colaboração",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Recomendações
      </Typography>
      <Grid container spacing={4}>
        {recommendations.map((recommendation, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{ padding: 2, textAlign: "center", height: "100%" }}
            >
              <img
                src={recommendation.image}
                alt={recommendation.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: 16,
                }}
              />
              <Typography variant="h6">{recommendation.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {recommendation.role}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                "{recommendation.feedback}"
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {recommendation.relationship}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Recommendations;
