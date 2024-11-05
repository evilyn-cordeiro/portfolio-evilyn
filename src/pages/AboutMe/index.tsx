import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PostCard } from "../../components";
import "slick-carousel/slick/slick-theme.css";
import { posts, topics } from "./const";

const AboutMeWithEducation = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        {/* Seção de Postagens */}
        <Grid item xs={12}>
          <Typography variant="h4" marginBottom={2}>
            Recentes
          </Typography>
          <Grid container spacing={2}>
            {posts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PostCard
                  link={post.link}
                  description={post.description}
                  image={post.image}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Seção de Tópicos */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {topics.map((topic, index) => (
              <Grid item xs={12} key={index}>
                <Accordion defaultExpanded sx={{ marginBottom: 1 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{topic.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      {topic.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeWithEducation;
