import React from "react";
import { Carousel } from "primereact/carousel";
import { Box, Typography, Grid, Paper } from "@mui/material";

interface Slide {
  title: string;
  description: string;
  imageUrl?: string;
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
            padding: 3,
            borderRadius: "10px",
            background: `url(${project.imageUrl}) no-repeat center center/cover`,
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
    );
  };

  return (
    <Box
      sx={{
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
        numVisible={2}
        numScroll={1}
        circular={true}
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
