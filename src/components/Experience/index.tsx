import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { experience } from "../../pages/LandingPage/const";

const Experiences = ({ currentTheme }: { currentTheme: any }) => {
  return (
    <Box
      sx={{
        padding: "2rem 5rem",
        marginTop: "5rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
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
        Experiências Profissionais
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

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            marginTop: "50px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              left: "30px",
              top: "0",
              width: "2px",
              height: "100%",
              backgroundColor: currentTheme.palette.primary.main,
            }}
          />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              style={{
                position: "relative",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "30px",
                  height: "30px",
                  backgroundColor: currentTheme.palette.primary.main,
                  borderRadius: "100px",
                  marginLeft: 2,
                  border: `3px solid ${currentTheme.palette.primary.dark}`,
                  zIndex: 1,
                  filter: "brightness(1.5)",
                  boxShadow: `0 0 10px ${currentTheme.palette.primary.main}`,
                }}
              />
              <Box sx={{ paddingLeft: "2rem", width: "80%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: currentTheme.palette.primary.main,
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: currentTheme.palette.text.secondary,
                    marginBottom: "0.5rem",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {item.work}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: currentTheme.palette.text.primary,
                    marginBottom: "0.5rem",
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  }}
                >
                  {item.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: currentTheme.palette.text.secondary,
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  }}
                >
                  {item.city}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experiences;
