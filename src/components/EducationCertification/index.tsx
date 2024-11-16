import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Importando o motion do framer-motion
import { School } from "@mui/icons-material"; // Ícone de formatura (capelo)

interface EducationCertificationProps {
  currentTheme: any;
  study: {
    title: string;
    school: string;
    date: string;
  }[]; // Tipando o array de formação acadêmica
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
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            position: "relative",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          Formação Acadêmica
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
          justifyContent: "space-between",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {/* Mapeando as formações acadêmicas */}
        {study.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }} // Inicia invisível e deslocado para a esquerda
            whileInView={{ opacity: 1, x: 0 }} // Aparece com o scroll
            transition={{ duration: 1 }}
            viewport={{ once: true }} // A animação dispara uma vez quando entra em vista
            style={{ width: "100%", maxWidth: "350px", textAlign: "center" }}
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
              <Box
                sx={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: currentTheme.palette.primary.main,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: `0 4px 12px ${currentTheme.palette.secondary.main}`,
                  filter: "blur(6px)",
                  position: "absolute",
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: currentTheme.palette.background.paper,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: `0 4px 12px ${currentTheme.palette.primary.main}`, // Sombra no círculo
                  zIndex: 2,
                }}
              >
                <School
                  sx={{
                    fontSize: "50px",
                    color: currentTheme.palette.primary.main,
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: currentTheme.palette.background.default,
                padding: "2rem",
                height: "80px",
                minHeight: "fit-content",
                borderRadius: "8px",
                boxShadow: 2,
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
