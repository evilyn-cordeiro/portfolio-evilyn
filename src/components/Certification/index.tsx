import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircleOutline } from "@mui/icons-material";
import { certifications } from "./const";

interface EducationCertificationProps {
  currentTheme: any;
}

const EducationCertification: React.FC<EducationCertificationProps> = ({
  currentTheme,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding: "3rem 2rem",
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: currentTheme.palette.text.primary,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            position: "relative",
            marginBottom: 4,
            letterSpacing: "0.5px",
            textAlign: "center",
          }}
        >
          {t("titulo.certificacoes")}
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
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {certifications.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              maxWidth: "250px",
              textAlign: "center",
              alignItems: "center",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              margin: "2rem",
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
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: currentTheme.palette.background.paper,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: `1px solid ${currentTheme.palette.primary.main}`,
                  zIndex: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: `2px 5px 10px ${currentTheme.palette.primary.light}`,
                  },
                }}
              >
                <img
                  src={item.imgUrl}
                  alt={t(item.title)}
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: "250px",
                backgroundColor: currentTheme.palette.background.default,
                padding: "1rem",
                borderRadius: "12px",
                boxShadow: 2,
                flexGrow: 1,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <Box
                sx={{
                  paddingBottom: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                  borderBottom: `1px solid ${currentTheme.palette.primary.light}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: currentTheme.palette.text.primary,
                    fontSize: "1.1rem",
                    letterSpacing: "0.5px",
                    textAlign: "center",
                  }}
                >
                  {t(item.title)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: currentTheme.palette.text.secondary,
                    marginTop: "0.5rem",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    textAlign: "center",
                  }}
                >
                  {item.school}
                </Typography>
              </Box>

              <Box sx={{ marginTop: "1rem", textAlign: "left" }}>
                <List>
                  {item.skills.map((skill, index) => (
                    <ListItem key={index} sx={{ paddingLeft: "0" }}>
                      <ListItemIcon>
                        <CheckCircleOutline
                          sx={{ color: currentTheme.palette.primary.main }}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="body2"
                        sx={{ color: currentTheme.palette.text.secondary }}
                      >
                        {t(skill)}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default EducationCertification;
