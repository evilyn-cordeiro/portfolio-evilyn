import { Box } from "@mui/material";
import {
  EducationCertification,
  Experiences,
  Hero,
  Tech,
} from "../../components";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import { useRef } from "react";
import { study } from "./const";

interface LandingPageProps {
  currentTheme: any;
  toggleTheme: () => void;
}

const LandingPage = ({ currentTheme, toggleTheme }: LandingPageProps) => {
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <Box
      sx={{
        backgroundColor: currentTheme.palette.background.default,
        overflowX: "hidden",
      }}
    >
      <Hero
        currentTheme={currentTheme}
        scrollTo={projectsRef}
        toggleTheme={toggleTheme}
      />
      <Projects currentTheme={currentTheme} ref={projectsRef} />
      <Info currentTheme={currentTheme} />
      <Experiences currentTheme={currentTheme} />
      <EducationCertification currentTheme={currentTheme} study={study} />
      <Tech currentTheme={currentTheme} />
      <Footer currentTheme={currentTheme} />
    </Box>
  );
};

export default LandingPage;
