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
          padding: { xs: "3rem 1rem", sm: "2rem", md: "5rem" },
          backgroundColor: currentTheme.palette.background.default,
        }}
        id="projetos"
        ref={ref}
      >
        <CarouselComponent slides={projects} currentTheme={currentTheme} />
      </Box>
    );
  }
);

Projects.displayName = "Projects";

export default Projects;
