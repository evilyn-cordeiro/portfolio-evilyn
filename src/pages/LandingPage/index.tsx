import { Box } from "@mui/material";
import { Experiences, Form, Hero, Tech } from "../../components";
import Info from "../../components/AboutMe";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import { useRef } from "react";
import { experience, study } from "./const";
import FAQ from "../../components/Chatbot";

interface LandingPageProps {
  currentTheme: any;
  toggleTheme: () => void;
  changeLanguage: (lang: string) => void;
}

const LandingPage = ({
  currentTheme,
  toggleTheme,
  changeLanguage,
}: LandingPageProps) => {
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
        changeLanguage={changeLanguage}
      />
      <Info currentTheme={currentTheme} scrollTo={formRef} />
      <Projects currentTheme={currentTheme} ref={projectsRef} />
      <Experiences
        currentTheme={currentTheme}
        study={study}
        experience={experience}
      />
      <Tech currentTheme={currentTheme} />
      <FAQ currentTheme={currentTheme} />
      <Form currentTheme={currentTheme} />
    </Box>
  );
};

export default LandingPage;
