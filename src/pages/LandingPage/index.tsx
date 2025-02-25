import { Box } from "@mui/material";
import {
  EducationCertification,
  Experiences,
  Form,
  Hero,
  Tech,
} from "../../components";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import { useRef } from "react";
import { experience, study } from "./const";

interface LandingPageProps {
  currentTheme: any;
  toggleTheme: () => void;
}

const LandingPage = ({ currentTheme, toggleTheme }: LandingPageProps) => {
  const projectsRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLElement | null>(null);

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
      <Info currentTheme={currentTheme} scrollTo={formRef} />
      <Experiences
        currentTheme={currentTheme}
        study={study}
        experience={experience}
      />
      <EducationCertification currentTheme={currentTheme} />
      <Tech currentTheme={currentTheme} />
      <Footer currentTheme={currentTheme} />
    </Box>
  );
};

export default LandingPage;
