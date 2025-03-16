import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "primereact/carousel";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { ArrowBackIosIcon, ArrowForwardIosIcon } from "../icons";
import { LinkOutlined } from "@mui/icons-material";

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
  const { t }: { t: any } = useTranslation();

  const getImageUrl = (imageUrl?: string) => {
    if (!imageUrl) return "";
    return isDesktop
      ? imageUrl.replace(/(\.)(jpg|jpeg|png|gif)$/i, "-desktop$1$2")
      : imageUrl.replace("-desktop", "");
  };

  const itemTemplate = (project: Slide) => {
    const imageUrl = getImageUrl(project.imageUrl);
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
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
                fontSize: { xs: "1.4rem", sm: "1.5rem", md: "2rem" },
                marginBottom: 2,
              }}
            >
              {t(project.title)}
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
                  <LinkOutlined />
                </IconButton>
              )}
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
              {t(project.description)}
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Carousel
        value={slides}
        numVisible={1}
        numScroll={1}
        circular={true}
        prevIcon={<ArrowBackIosIcon color="info" />}
        nextIcon={<ArrowForwardIosIcon color={"info"} />}
        autoplayInterval={3000}
        showIndicators={true}
        responsiveOptions={[
          { breakpoint: "1024px", numVisible: 1, numScroll: 1 },
          { breakpoint: "600px", numVisible: 1, numScroll: 1 },
        ]}
        itemTemplate={itemTemplate}
        pt={{
          indicators: {
            style: {
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              gap: "8px",
            },
          },
          indicator: ({ context }: any) => ({
            style: {
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: context.active
                ? currentTheme.palette.primary.main
                : "#ccc",
              transition: "background-color 0.3s",
              cursor: "pointer",
            },
          }),
        }}
      />
    </Box>
  );
};

export default CarouselComponent;
