import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    frontend: [
      {
        title: "Desenvolvimento Web",
        description: "Experiência em HTML, CSS e JavaScript.",
        image: "https://via.placeholder.com/80",
        projects:
          "Criação de websites responsivos e aplicações web interativas.",
        experience: "3 anos",
      },
      {
        title: "React",
        description: "Construindo interfaces de usuário dinâmicas.",
        image: "https://via.placeholder.com/80",
        projects: "Desenvolvimento de SPAs com gerenciamento de estado.",
        experience: "2 anos",
      },
    ],
    backend: [
      {
        title: "Node.js",
        description: "Desenvolvimento de back-end eficiente.",
        image: "https://via.placeholder.com/80",
        projects: "API RESTful para aplicações web.",
        experience: "1 ano",
      },
    ],
    database: [
      {
        title: "MongoDB",
        description: "Banco de dados NoSQL para aplicações modernas.",
        image: "https://via.placeholder.com/80",
        projects: "Armazenamento de dados para aplicações web.",
        experience: "1 ano",
      },
    ],
    tools: [
      {
        title: "Git",
        description: "Controle de versão e colaboração em projetos.",
        image: "https://via.placeholder.com/80",
        projects: "Colaboração em projetos de código aberto.",
        experience: "4 anos",
      },
    ],
  };

  const renderSkillsSection = (title: string, skills: any) => (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill: any, index: number) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minHeight: "250px",
                }}
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginBottom: 16,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {skill.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 1 }}
                >
                  {skill.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 1 }}
                >
                  {skill.projects}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tempo de experiência: {skill.experience}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ padding: 2 }}>
      {renderSkillsSection("Desenvolvimento Web", skills.frontend)}
      {renderSkillsSection("Back-end", skills.backend)}
      {renderSkillsSection("Banco de Dados", skills.database)}
      {renderSkillsSection("Outras Ferramentas", skills.tools)}
    </Box>
  );
};

export default Skills;
