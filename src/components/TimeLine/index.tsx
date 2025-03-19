import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface TimelineItemProps {
  item: any;
  index: number;
  currentTheme: any;
  isEducation?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  currentTheme,
  isEducation = false,
}) => {
  const { t } = useTranslation();

  return (
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
          width: "20px",
          height: "20px",
          backgroundColor: currentTheme.palette.primary.main,
          borderRadius: "100px",
          marginLeft: 2,
          border: `1px solid ${currentTheme.palette.primary.dark}`,
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
          {t(item.title)}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: currentTheme.palette.text.secondary,
            marginBottom: "0.5rem",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          {isEducation ? t(item.school) : t(item.work)}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: currentTheme.palette.text.secondary,
            marginBottom: "0.5rem",
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
          }}
        >
          {t(item.date)}
        </Typography>
        {isEducation && (
          <Typography
            variant="body2"
            sx={{
              color: currentTheme.palette.text.secondary,
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
            }}
          >
            {t(item.city)}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};

interface TimelineProps {
  currentTheme: any;
  study: any[];
  experience: any[];
}

const Timeline: React.FC<TimelineProps> = ({
  currentTheme,
  study,
  experience,
}) => {
  const { t } = useTranslation();

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
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
        }}
      >
        {t("linha-do-tempo")}
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
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          gap: "4rem",
          marginTop: "3rem",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: currentTheme.palette.text.primary,
              position: "relative",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            {t("formacao-academica")}
          </Typography>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              left: "25px",
              width: "2px",
              height: "80%",
              backgroundColor: currentTheme.palette.primary.main,
            }}
          />
          {study.map((item, index) => (
            <Box
              key={index}
              sx={{ position: "relative", marginBottom: "2rem" }}
            >
              <TimelineItem
                item={item}
                index={index}
                currentTheme={currentTheme}
                isEducation={true}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: currentTheme.palette.text.primary,
              position: "relative",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            {t("experiencias-profissionais")}
          </Typography>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              left: "25px",
              width: "2px",
              height: "90%",
              backgroundColor: currentTheme.palette.primary.main,
            }}
          />

          {experience.map((item, index) => (
            <Box
              key={index}
              sx={{ position: "relative", marginBottom: "2rem" }}
            >
              <TimelineItem
                item={item}
                index={index}
                currentTheme={currentTheme}
                isEducation={false}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Timeline;
