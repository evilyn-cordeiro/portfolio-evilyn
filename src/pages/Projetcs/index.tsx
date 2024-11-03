import { Box, Grid, Typography } from "@mui/material";
import { Card } from "../../components";

const projects = [
  {
    title: "Vitta Clinic",
    description: "Descrição breve do projeto Vitta Clinic.",
    image: "https://i.imgur.com/3eXg0Rn.jpg", // Imagem de herói
    link: "https://link-do-projeto-1.com",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Agenda Corporativa",
    description: "Descrição breve do projeto Agenda Corporativa.",
    image: "https://i.imgur.com/l8n7ekH.jpg", // Imagem de herói
    link: "https://link-do-projeto-2.com",
    technologies: ["Angular", "Firebase"],
  },
  {
    title: "Landing Page Spotify",
    description: "Descrição breve do projeto Landing Page Spotify.",
    image: "https://i.imgur.com/WZ5O9Fc.jpg", // Imagem de herói
    link: "https://link-do-projeto-3.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Jogo da Velha",
    description: "Descrição breve do projeto Jogo da Velha.",
    image: "https://i.imgur.com/5a8Ep1E.jpg", // Imagem de herói
    link: "https://link-do-projeto-4.com",
    technologies: ["React"],
  },
  {
    title: "Login Instagram",
    description: "Descrição breve do projeto Login Instagram.",
    image: "https://i.imgur.com/TgqgY60.jpg", // Imagem de herói
    link: "https://link-do-projeto-5.com",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Site Pessoal",
    description: "Descrição breve do projeto Site Pessoal.",
    image: "https://i.imgur.com/8bxYwgr.jpg", // Imagem de herói
    link: "https://link-do-projeto-6.com",
    technologies: ["Next.js", "TypeScript"],
  },
  {
    title: "Galeria de Filmes",
    description: "Descrição breve do projeto Galeria de Filmes.",
    image: "https://i.imgur.com/6YZT8P0.jpg", // Imagem de herói
    link: "https://link-do-projeto-7.com",
    technologies: ["Vue.js", "Axios"],
  },
];
const Projects = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Meus Projetos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
