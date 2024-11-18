import React from "react";
import { Carousel } from "primereact/carousel";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { ArrowBackIosIcon, ArrowForwardIosIcon } from "../icons";

interface Slide {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

interface CarouselProps {
  slides: Slide[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ slides }) => {
  const itemTemplate = (project: Slide) => {
    return (
      <Grid xs={12} sm={6} md={5} marginLeft={4} marginRight={4}>
        <Paper
          sx={{
            position: "relative",
            padding: 2,
            borderRadius: "10px",
            background: `url(${project.imageUrl}) no-repeat center center/cover`,
            height: 300,
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
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              <a target="_blank" href={project.link} style={{ color: "white" }}>
                {project.title}
              </a>
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {project.description}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        maxWidth: { lg: "90%", sm: "100%" },
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingTop: 5,
      }}
    >
      <Carousel
        value={slides}
        itemTemplate={itemTemplate}
        numVisible={3}
        numScroll={1}
        circular={true}
        prevIcon={<ArrowBackIosIcon color={"info"} />}
        nextIcon={<ArrowForwardIosIcon color={"info"} />}
        autoplayInterval={3000}
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "600px",
            numVisible: 1,
            numScroll: 1,
          },
        ]}
      />
    </Box>
  );
};

export default CarouselComponent;
