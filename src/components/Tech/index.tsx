import { Box, Grid, Stack } from "@mui/material";
import { technologies } from "../../pages/LandingPage/const";

interface TechProps {
  currentTheme: any;
}

export default function Tech({ currentTheme }: TechProps) {
  return (
    <Box
      sx={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        backgroundColor: currentTheme.palette.primary.main,
        overflow: "hidden",
      }}
    >
      <Grid container spacing={5} justifyContent="center" gap={5}>
        {technologies.map((tech, index) => (
          <Grid item key={index}>
            <Stack direction="column" alignItems="center" spacing={5}>
              <Box
                sx={{
                  fontSize: 40,
                  color: currentTheme.palette.text.secondary,
                  "&:hover": {
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <i className={`${tech.icon}`} />
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
