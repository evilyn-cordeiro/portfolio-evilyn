import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

// Lista de cores personalizadas
const colors = [
  "#9c27b0", // Roxo
  "#e91e63", // Rosa
  "#000000", // Preto
  "#f44336", // Vermelho
  "#2196f3", // Azul
  "#4caf50", // Verde Musgo
];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  technologies,
}) => {
  return (
    <Card>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ margin: "8px 0" }}>
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{
                marginRight: 0.5,
                backgroundColor: getRandomColor(),
                color: "#fff", // Ajusta a cor do texto para ser legível
              }}
            />
          ))}
        </Box>
        <Button
          size="small"
          color="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Projeto
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
