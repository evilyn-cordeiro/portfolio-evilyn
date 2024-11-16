import { Box, Grid, Stack, Typography } from "@mui/material";
import { technologies } from "../../pages/LandingPage/const";

interface TechProps {
  currentTheme: any;
}

export default function Tech({ currentTheme }: TechProps) {
  return (
    <Box
      sx={{
        padding: "3rem 2rem",
        backgroundColor: currentTheme.palette.background.default,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: currentTheme.palette.text.primary,
          position: "relative",
          textAlign: "center",
        }}
      >
        Principais Tecnologias
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

      <Grid container spacing={4} justifyContent="center" marginTop={3}>
        {technologies.map((tech, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <Box
                sx={{
                  fontSize: 50,
                  color: currentTheme.palette.text.secondary,
                  backgroundColor: "transparent",
                  padding: "10px",
                  borderRadius: "50%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <i className={`${tech.icon} colored`} />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: currentTheme.palette.text.primary,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {tech.name}
              </Typography>

              {tech.experience && (
                <Typography
                  variant="body2"
                  sx={{
                    color: currentTheme.palette.text.secondary,
                    textAlign: "center",
                    fontStyle: "italic",
                    fontSize: "0.875rem",
                  }}
                >
                  {tech.experience} {tech.experience > 1 ? "anos" : "ano"} de
                  experiência
                </Typography>
              )}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
