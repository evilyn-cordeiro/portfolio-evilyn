import { Box, Grid, Typography, Avatar, Stack, Button } from "@mui/material";
import { ProjectCard } from "../../components";
import {
  technologies,
  projects,
  aboutMeInfo,
  experience,
  study,
  posts,
} from "./const";
import {
  DownloadIcon,
  EmailIcon,
  MoreVertIcon,
  WorkIcon,
} from "../../components/icons";
import { Folder, Timeline } from "@mui/icons-material";
import { useState } from "react";

interface AboutMeProps {
  currentTheme: any;
}

const AboutMe = ({ currentTheme }: AboutMeProps) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        alignItems: "center",
        backgroundColor: currentTheme.palette.background.default,
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={2.5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
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
                backgroundColor: currentTheme.palette.background.paper,
                boxShadow:
                  currentTheme.palette.mode === "dark"
                    ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
                    : "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Avatar
                sx={{ width: 150, height: 150, marginBottom: 1 }}
                src={
                  "https://media.licdn.com/dms/image/v2/D4D03AQGk5Vnqmzo7ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731494090840?e=1736985600&v=beta&t=RkU4gCeA29fCr0YBgjK9hZNao_oa_mmnXrIZg8KGjh4"
                }
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: currentTheme.palette.text.primary,
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
                  color: currentTheme.palette.text.secondary,
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
                backgroundColor: currentTheme.palette.background.paper,
                boxShadow:
                  currentTheme.palette.mode === "dark"
                    ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
                    : "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: currentTheme.palette.text.primary,
                }}
              >
                Sobre Mim
              </Typography>

              {aboutMeInfo(currentTheme).map((info, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  key={index}
                >
                  {info.icon}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      color: currentTheme.palette.text.primary,
                    }}
                  >
                    {info.title}
                  </Typography>
                </Stack>
              ))}
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
                spacing={2}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {technologies.map((tech, index) => (
                  <Grid
                    item
                    key={index}
                    sx={{
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <i
                      className={`devicon ${tech.icon}`}
                      style={{
                        color: currentTheme.palette.primary.main,
                        fontSize: "34px",
                        transition: "transform 0.3s ease",
                      }}
                    ></i>
                  </Grid>
                ))}
              </Grid>
            </ProjectCard>
          </Box>
          {/* Seção de Experiência Profissional */}
          <ProjectCard
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 4,
              borderRadius: "20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              marginTop: 4,
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
              Experiência Profissional
            </Typography>

            {/* Linha do Tempo */}
            <Stack
              direction="column"
              spacing={4}
              sx={{
                position: "relative",
                paddingLeft: "30px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "-10px",
                  bottom: 0,
                  width: "2px",
                  backgroundColor: currentTheme.palette.text.secondary,
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              ></Box>

              {/* Experiência 1 */}
              {experience.map((item, key) => (
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-5px",
                      left: "-50px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: currentTheme.palette.primary.main,
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WorkIcon sx={{ color: "white", fontSize: "20px" }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: currentTheme.palette.text.primary,
                      }}
                    ></Typography>
                    {item.work}
                    <Typography
                      variant="body2"
                      sx={{ color: currentTheme.palette.text.secondary }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: currentTheme.palette.text.secondary }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </ProjectCard>

          <ProjectCard
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 4,
              borderRadius: "20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              marginTop: 4,
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
              Formação Acadêmica
            </Typography>
            {study.map((item, key) => (
              <Stack spacing={3}>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: currentTheme.palette.text.primary,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: currentTheme.palette.text.secondary }}
                  >
                    {item.date}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </ProjectCard>
        </Grid>

        <Grid item xs={12} md={8.7}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "60px",
              gap: 2,
              padding: 2,
              backgroundColor: currentTheme.palette.background.paper,
              boxShadow:
                currentTheme.palette.mode === "dark"
                  ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
                  : "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: currentTheme.palette.text.primary,
              }}
            >
              Meus Projetos
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {projects.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    borderRadius: "10px",
                    height: "200px",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow:
                      currentTheme.palette.mode === "dark"
                        ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
                        : "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    minHeight: "fit-content",
                    backgroundColor: currentTheme.palette.background.paper,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      zIndex: 0, // A imagem deve ficar atrás do conteúdo
                    }}
                  />

                  {/* Conteúdo (Título, Descrição, Tecnologias) */}
                  <Box
                    sx={{
                      minHeight: "100%",
                      position: "relative",
                      padding: 4,
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      opacity: 0,
                      transition:
                        "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.5s ease",
                      "&:hover": {
                        opacity: 1,
                        background: "rgba(0, 0, 0, 0.9)",
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Folder
                        sx={{
                          fontSize: 24,
                          color: currentTheme.palette.primary.main,
                        }}
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
                          color={currentTheme.palette.primary.main}
                          sx={{ fontWeight: "bold", cursor: "pointer" }}
                        >
                          {item.title}
                        </Typography>
                      </a>
                    </Stack>

                    {/* Descrição do Projeto */}
                    <Typography
                      height={"100px"}
                      overflow={"hidden"}
                      textOverflow={"ellipsis"}
                      sx={{
                        color: "#fff",
                        zIndex: 1, // Garante que a descrição fique visível
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Tecnologias Usadas */}
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ display: "flex", zIndex: 1, marginTop: 2 }}
                    >
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              alignItems: "center",
              backgroundColor: currentTheme.palette.background.default,
            }}
          ></Box>
          <Grid container spacing={5}>
            {/* Botão flutuante */}
            <Box sx={{ position: "relative" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  position: "fixed",
                  bottom: "100px",
                  right: "20px",
                  padding: 3,
                  borderRadius: "50%",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  zIndex: 1000,
                  backgroundColor: currentTheme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: currentTheme.palette.primary.dark,
                    transform: "scale(1.1)",
                  },
                }}
                onClick={toggleMenu}
              >
                <MoreVertIcon />
              </Button>

              {open && (
                <Stack
                  direction="column"
                  spacing={2}
                  sx={{
                    position: "fixed",
                    bottom: "150px",
                    right: "50px",
                    transition: "all 0.3s ease",
                    zIndex: 999,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      (window.location.href =
                        "mailto:evilyndeveloper@gmail.com")
                    }
                    sx={{
                      padding: "1rem 2rem",
                      fontSize: "16px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                      "&:hover": {
                        transform: "scale(1.05)",
                        backgroundColor: currentTheme.palette.primary.dark,
                      },
                    }}
                  >
                    <EmailIcon />
                    Entre em contato
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    href="https://drive.google.com/file/d/1U47MRQlauKZROvWnm0vo1u_zdTFeK05p/view?usp=drive_link"
                    target="_blank"
                    sx={{
                      padding: "1rem 2rem",
                      fontSize: "16px",
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      justifyContent: "space-between",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                      "&:hover": {
                        transform: "scale(1.05)",
                        backgroundColor: currentTheme.palette.secondary.dark,
                      },
                    }}
                  >
                    <DownloadIcon />
                    Baixar Currículo
                  </Button>
                </Stack>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{
          marginTop: 2,
          color: currentTheme.palette.text.secondary,
        }}
      >
        🟣 Portfólio Evilyn v1.0
      </Grid>
    </Box>
  );
};

export default AboutMe;
