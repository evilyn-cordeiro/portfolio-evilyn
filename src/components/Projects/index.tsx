import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { projects } from "../../pages/LandingPage/const";
import CarouselComponent from "../Carousel";
import { useNavigate } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

interface ProjectsProps {
  currentTheme: any;
}

const Projects = React.forwardRef<HTMLElement, ProjectsProps>(
  ({ currentTheme }, ref) => {
    const navigate: any = useNavigate();
    return (
      <Box
        key={"project"}
        sx={{
          backgroundColor: currentTheme.palette.background.default,
          position: "relative",
          padding: { xs: "2rem", sm: "3rem", md: "3rem", lg: "5rem" },
        }}
        id="projetos"
        ref={ref}
      >
        <Box
          sx={{
            textAlign: "left",
            marginBottom: 4,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => navigate("/projects")}
            endIcon={<ArrowForward />}
          >
            Ver mais
          </Button>
        </Box>

        <CarouselComponent slides={projects} currentTheme={currentTheme} />
      </Box>
    );
  }
);

Projects.displayName = "Projects";

export default Projects;
