import { Box } from "@mui/material";
import { Experiences, Hero, Tech } from "../../components";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import { useRef } from "react";

interface LandingPageProps {
  currentTheme: any;
}

const LandingPage = ({ currentTheme }: LandingPageProps) => {
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <Box
      sx={{
        backgroundColor: currentTheme.palette.background.default,
        overflowX: "hidden",
      }}
    >
      <Hero currentTheme={currentTheme} scrollTo={projectsRef} />
      <Tech currentTheme={currentTheme} />
      <Info currentTheme={currentTheme} />
      <Experiences currentTheme={currentTheme} />
      <Projects currentTheme={currentTheme} ref={projectsRef} />
      <Footer currentTheme={currentTheme} />
    </Box>
  );
};

export default LandingPage;