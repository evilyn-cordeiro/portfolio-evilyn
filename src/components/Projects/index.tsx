import React, { ForwardedRef } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { projects } from "../../pages/LandingPage/const";

interface ProjectsProps {
  currentTheme: any;
}

// Passando a ref para o componente através de forwardRef
const Projects = React.forwardRef<HTMLElement, ProjectsProps>(
  ({ currentTheme }, ref) => {
    return (
      <Box
        key={"project"}
        sx={{
          padding: "5rem 2rem",
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
        <Grid container spacing={4} sx={{ marginTop: 3 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  position: "relative",
                  padding: 3,
                  borderRadius: "10px",
                  background: `url(${project.image}) no-repeat center center/cover`,
                  height: 300,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1rem",
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    {project.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
);

Projects.displayName = "Projects";

export default Projects;
