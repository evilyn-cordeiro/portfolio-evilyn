import React from "react";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from "../../components";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationOnIcon,
  WorkIcon,
} from "../../components/icons";
import { theme } from "../../theme";
import { Folder } from "@mui/icons-material";
import { projects } from "./const";

const AboutMe: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={2.5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              padding: 2,
            }}
          >
            <ProjectCard
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{ width: 120, height: 120, marginBottom: 1 }}
                src={
                  "https://media.licdn.com/dms/image/v2/D4D03AQFK_HqDAC1Xrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730764970790?e=1736380800&v=beta&t=vZqX6TpnV-_ryJXao8r9Rnr5_GRIdbQ4xPmhoWZlYU0"
                }
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Evilyn Cordeiro
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "light",
                  fontSize: "16px",
                  marginTop: 1,
                }}
              >
                Software Developer Full-Stack
              </Typography>
            </ProjectCard>

            <ProjectCard
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Sobre Mim
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOnIcon sx={{ fontSize: 24 }} />
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                  Juazeiro do Norte, Ceará, Brasil
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <WorkIcon sx={{ fontSize: 24 }} />
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                  Senior Sistemas
                </Typography>
              </Stack>

              {/* GitHub */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <GitHubIcon sx={{ fontSize: 24 }} />
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                  evilyn-cordeiro
                </Typography>
              </Stack>

              {/* LinkedIn */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <LinkedInIcon sx={{ fontSize: 24 }} />
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                  evilynprofile-dev
                </Typography>
              </Stack>

              {/* E-mail */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <EmailIcon sx={{ fontSize: 24 }} />
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                  evilyndeveloper@gmail.com
                </Typography>
              </Stack>
            </ProjectCard>

            {/* ProjectCard com Tecnologias */}
            <ProjectCard
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 4,
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                Tecnologias
              </Typography>

              <Grid
                container
                spacing={1}
                sx={{ textAlign: "center", display: "flex", gap: "10px" }}
              >
                {[
                  "JAVASCRIPT",
                  "REACT",
                  "TYPESCRIPT",
                  "NODEJS",
                  "MATERIAL UI",
                  "GIT",
                  "CSS",
                  "HTML",
                  "NEXT.JS",
                  "SASS",
                  "PHP",
                  "PYTHON",
                  "API REST",
                  "STYLED-COMPONENT",
                  "ANT DESIGN",
                  "FIGMA",
                  "UX/UI DESIGN",
                  "SQL",
                ].map((tech, index) => (
                  <Grid
                    item
                    key={index}
                    sx={{
                      padding: "10px",
                      backgroundColor: theme.palette.primary.dark,
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "10px",
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                      }}
                    >
                      {tech}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </ProjectCard>
          </Box>
        </Grid>

        <Grid item xs={12} md={8.7}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "86px",
              padding: 2,
              backgroundColor: theme.palette.background.paper,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              marginTop: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Meus projetos
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            {/* Primeiro Repositório */}
            {projects.map((item, index) => (
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    padding: 3,
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    height: "200px",
                    backgroundColor: theme.palette.background.paper,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.5)",
                      transform: "scale(1.02)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Folder
                        sx={{ fontSize: 24, color: theme.palette.primary.main }}
                      />
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textTransform: "none",
                          textDecoration: "none",
                        }}
                      >
                        <Typography
                          variant="h6"
                          color={theme.palette.primary.main}
                          sx={{ fontWeight: "bold", cursor: "pointer" }}
                        >
                          {item.title}
                        </Typography>
                      </a>
                    </Stack>
                    <Typography
                      height={"100px"}
                      overflow={"hidden"}
                      textOverflow={"ellipsis"}
                    >
                      {item.description}
                    </Typography>

                    {/* Tecnologias Usadas */}
                    {/* Tecnologias Usadas */}
                    <Stack direction="row" spacing={1} sx={{ display: "flex" }}>
                      {item.technologies.map((textTec, index) => (
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                          key={index}
                        >
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              backgroundColor: item.colors[index],
                            }}
                          />
                          <Typography variant="body2" color="textSecondary">
                            {textTec}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
