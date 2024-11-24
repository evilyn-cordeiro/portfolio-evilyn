import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Importando o motion do framer-motion
import { School } from "@mui/icons-material"; // Ícone de formatura (capelo)

interface EducationCertificationProps {
  currentTheme: any;
  study: {
    title: string;
    school: string;
    date: string;
  }[];
}

export default function EducationCertification({
  currentTheme,
  study,
}: EducationCertificationProps) {
  return (
    <Box
      sx={{
        padding: { xs: "3rem 1rem", sm: "4rem", md: "5rem" },
        backgroundColor: currentTheme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: currentTheme.palette.text.primary,
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
            position: "relative",
            marginBottom: 3,
          }}
        >
          Certificações
          <Box
            sx={{
              height: "4px",
              width: "60px",
              backgroundColor: currentTheme.palette.primary.main,
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {study.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              maxWidth: "350px",
              textAlign: "center",
              marginBottom: "2rem", // Adicionando margem para espaçamento
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginBottom: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Círculo de fundo com sombra */}
              <Box
                sx={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  backgroundColor: currentTheme.palette.secondary.main,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: `0 6px 18px ${currentTheme.palette.secondary.main}`,
                  filter: "blur(6px)",
                  position: "absolute",
                  zIndex: 1,
                }}
              />
              {/* Círculo de ícone */}
              <Box
                sx={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  backgroundColor: currentTheme.palette.background.paper,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: `0 4px 12px ${currentTheme.palette.primary.main}`,
                  zIndex: 2,
                }}
              >
                <School
                  sx={{
                    fontSize: "60px",
                    color: currentTheme.palette.primary.main,
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: currentTheme.palette.background.default,
                padding: "2rem",
                minHeight: "fit-content",
                borderRadius: "8px",
                boxShadow: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: `0 12px 24px ${currentTheme.palette.primary.light}`,
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: currentTheme.palette.text.primary,
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: currentTheme.palette.text.secondary,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {item.school} ({item.date})
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
