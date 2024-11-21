import React from "react";
import { Box, Typography } from "@mui/material";
import { projects } from "../../pages/LandingPage/const";
import CarouselComponent from "../Carousel";

interface ProjectsProps {
  currentTheme: any;
}

const Projects = React.forwardRef<HTMLElement, ProjectsProps>(
  ({ currentTheme }, ref) => {
    return (
      <Box
        key={"project"}
        sx={{
          padding: { xs: "3rem 1rem", sm: "4rem", md: "5rem" },
          backgroundColor: currentTheme.palette.background.default,
        }}
        id="projetos"
        ref={ref}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: currentTheme.palette.text.primary,
            position: "relative",
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
          }}
        >
          Meus Projetos
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
        <CarouselComponent slides={projects} />
      </Box>
    );
  }
);

Projects.displayName = "Projects";

export default Projects;
