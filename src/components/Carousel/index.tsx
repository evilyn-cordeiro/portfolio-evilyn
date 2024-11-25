import React from "react";
import { Carousel } from "primereact/carousel";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { ArrowBackIosIcon, ArrowForwardIosIcon } from "../icons";

interface Slide {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  technologies: string[];
  colors: string[];
}

interface CarouselProps {
  slides: Slide[];
  currentTheme: any;
}

const CarouselComponent: React.FC<CarouselProps> = ({
  slides,
  currentTheme,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  // Função para alterar a URL da imagem dependendo do tipo de dispositivo
  const getImageUrl = (imageUrl?: string) => {
    if (!imageUrl) return "";
    return isDesktop
      ? imageUrl.replace(/(\.)(jpg|jpeg|png|gif)$/i, "-desktop$1$2")
      : imageUrl.replace("-desktop", "");
  };

  const itemTemplate = (project: Slide) => {
    const imageUrl = getImageUrl(project.imageUrl);
    return (
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 1 }}
      >
        <Grid item xs={12} md={6}>
          {/* Imagem do projeto */}
          <Box
            sx={{
              height: { sm: 600, lg: "100%" },
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={imageUrl}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: currentTheme.palette.text.primary,
                position: "relative",
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
                marginBottom: 6,
              }}
            >
              {project.title}
              {project.link && (
                <IconButton
                  href={project.link}
                  target="_blank"
                  sx={{
                    color: currentTheme.palette.primary.main,
                    position: "absolute",
                    top: "50%",
                    right: "-15px",
                    transform: "translateY(-50%)",
                    padding: 0,
                  }}
                >
                  <LinkIcon />
                </IconButton>
              )}
              <Box
                sx={{
                  height: "4px",
                  width: "200px",
                  backgroundColor: currentTheme.palette.primary.main,
                  position: "absolute",
                  bottom: "-10px",
                }}
              />
            </Typography>
            <Typography
              sx={{
                marginTop: "2rem",
                color: currentTheme.palette.text.secondary,
                lineHeight: "1.8",
                textAlign: "justify",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              }}
            >
              {project.description}
            </Typography>

            <Box
              sx={{ display: "flex", gap: 2, flexWrap: "wrap", marginTop: 2 }}
            >
              {project.technologies.map((tech, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: currentTheme.palette.text.primary,
                  }}
                >
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: project.colors[index],
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: currentTheme.palette.text.primary,
                    }}
                  >
                    {tech}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingTop: 5,
      }}
    >
      <Carousel
        value={slides}
        numVisible={1}
        numScroll={1}
        circular={true}
        prevIcon={<ArrowBackIosIcon color="info" />}
        nextIcon={<ArrowForwardIosIcon color={"info"} />}
        autoplayInterval={2500}
        footer
        page={21}
        responsiveOptions={[
          { breakpoint: "1024px", numVisible: 1, numScroll: 1 },
          { breakpoint: "600px", numVisible: 1, numScroll: 1 },
        ]}
        itemTemplate={itemTemplate}
      />
    </Box>
  );
};

export default CarouselComponent;
