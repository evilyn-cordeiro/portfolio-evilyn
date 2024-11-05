import { useState } from "react";
import { SideBar } from "../../components";
import { CodeIcon, AppsIcon, WorkIcon, HomeIcon } from "../../components/icons";
import Projects from "../Projetcs";
import { useMediaQuery } from "@mui/material";
import AboutMe from "../AboutMe";
import ExperienceTimeline from "../Experience";

export default function Home() {
  const [section, setSection] = useState("sobre");
  const isMobile = useMediaQuery("(max-width:600px)");

  const renderSection = () => {
    let title = "";

    switch (section) {
      case "sobre":
        title = "Sobre Mim";
        return <AboutMe />;
      case "projetos":
        return <Projects />;
      case "experiencias":
        return <ExperienceTimeline />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar
        buttons={[
          {
            text: "Início",
            icon: <HomeIcon />,
            onClick: () => setSection("sobre"),
          },
          {
            text: "Projetos",
            icon: <AppsIcon />,
            onClick: () => setSection("projetos"),
          },
          {
            text: "Experiências",
            icon: <WorkIcon />,
            onClick: () => setSection("experiencias"),
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
