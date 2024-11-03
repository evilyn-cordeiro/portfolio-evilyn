import { useState } from "react";
import { SideBar } from "../../components";
import {
  FaceIcon,
  CodeIcon,
  AppsIcon,
  WorkIcon,
  SchoolIcon,
  StarIcon,
  ContactIcon,
} from "../../components/icons";
import Projects from "../Projetcs";
import { useMediaQuery } from "@mui/material";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Recommendations from "../Recommendations";
import ExperienceTimeline from "../Experience";
import EducationTimeline from "../Education";
import ContactSection from "../Contact";

export default function Home() {
  const [section, setSection] = useState("sobre");
  const isMobile = useMediaQuery("(max-width:600px)");

  const renderSection = () => {
    let title = "";

    switch (section) {
      case "sobre":
        title = "Sobre Mim";
        return <AboutMe />;
      case "habilidades":
        return <Skills />;
      case "projetos":
        title = "Projetos";
        return <Projects />;
      case "experiencias":
        title = "Experiências Profissionais";
        return <ExperienceTimeline />;
      case "educacao":
        title = "Educação";
        return <EducationTimeline />;
      case "recomendacoes":
        title = "Recomendações";
        return <Recommendations />;
      case "contato":
        title = "Contato";
        return <ContactSection />;
      default:
        return <div>Selecione uma seção</div>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar
        buttons={[
          {
            text: "Sobre Mim",
            icon: <FaceIcon />,
            onClick: () => setSection("sobre"),
          },
          {
            text: "Habilidades",
            icon: <CodeIcon />,
            onClick: () => setSection("habilidades"),
          },
          {
            text: "Projetos",
            icon: <AppsIcon />,
            onClick: () => setSection("projetos"),
          },
          {
            text: "Experiências Profissionais",
            icon: <WorkIcon />,
            onClick: () => setSection("experiencias"),
          },
          {
            text: "Educação",
            icon: <SchoolIcon />,
            onClick: () => setSection("educacao"),
          },
          {
            text: "Recomendações",
            icon: <StarIcon />,
            onClick: () => setSection("recomendacoes"),
          },
          {
            text: "Contato",
            icon: <ContactIcon />,
            onClick: () => setSection("contato"),
          },
        ]}
      />
      <div
        style={{
          flexGrow: 1,
          padding: "16px",
          marginTop: isMobile ? "80px" : "",
        }}
      >
        {renderSection()}
      </div>
    </div>
  );
}
