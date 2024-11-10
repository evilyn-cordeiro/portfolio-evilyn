import { Box, Grid, Typography, Avatar, Stack } from "@mui/material";
import { ProjectCard } from "../../components";
import { technologies, projects } from "./const";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationOnIcon,
  WorkIcon,
} from "../../components/icons";
import { Folder } from "@mui/icons-material";

interface AboutMeProps {
  currentTheme: any;
}

const AboutMe = ({ currentTheme }: AboutMeProps) => {
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
      <Grid container spacing={4}>
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
                letterSpacing={1}
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
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOnIcon
                  sx={{
                    fontSize: 24,
                    color: currentTheme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "15px",
                    color: currentTheme.palette.text.primary,
                  }}
                >
                  Juazeiro do Norte, Ceará, Brasil
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <WorkIcon
                  sx={{
                    fontSize: 24,
                    color: currentTheme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "15px",
                    color: currentTheme.palette.text.primary,
                  }}
                >
                  Senior Sistemas
                </Typography>
              </Stack>

              {/* GitHub */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <GitHubIcon
                  sx={{
                    fontSize: 24,
                    color: currentTheme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "15px",
                    color: currentTheme.palette.text.primary,
                  }}
                >
                  evilyn-cordeiro
                </Typography>
              </Stack>

              {/* LinkedIn */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <LinkedInIcon
                  sx={{
                    fontSize: 24,
                    color: currentTheme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "15px",
                    color: currentTheme.palette.text.primary,
                  }}
                >
                  evilynprofile-dev
                </Typography>
              </Stack>

              {/* E-mail */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <EmailIcon
                  sx={{
                    fontSize: 24,
                    color: currentTheme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "15px",
                    color: currentTheme.palette.text.primary,
                  }}
                >
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
                spacing={2}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {technologies.map((tech, index) => (
                  <Grid
                    item
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
            {/* Projetos */}
            {projects.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    padding: 3,
                    borderRadius: "10px",
                    boxShadow:
                      currentTheme.palette.mode === "dark"
                        ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
                        : "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    minHeight: "fit-content",
                    backgroundColor: currentTheme.palette.background.paper,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.5)",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Box>
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
                    <Typography
                      height={"100px"}
                      overflow={"hidden"}
                      textOverflow={"ellipsis"}
                      sx={{ color: currentTheme.palette.text.primary }}
                    >
                      {item.description}
                    </Typography>

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

      <Grid sx={{ marginTop: 2, color: currentTheme.palette.text.secondary }}>
        🟣 Portfólio Evilyn v1.0
      </Grid>
    </Box>
  );
};

export default AboutMe;
