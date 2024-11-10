import "devicon/devicon.min.css";
import {
  GitHubIcon,
  LinkedInIcon,
  LocationOnIcon,
  WorkIcon,
} from "../../components/icons";
export const projects = [
  {
    title: "Piloto React",
    description:
      "Projeto inicial em React JS, usando hooks e explorando novas funcionalidades.",
    image: "https://i.imgur.com/3eXg0Rn.jpg",
    link: "https://desafio-do-tempo-react.vercel.app/",
    technologies: ["React", "JavaScript"],
    colors: ["#61DAFB", "#F7DF1E"],
  },
  {
    title: "Spotify",
    description:
      "Clone da landing page do Spotify, focado em layout e design responsivo.",
    image: "https://i.imgur.com/l8n7ekH.jpg",
    link: "https://spotify-ivory-sigma.vercel.app/",
    technologies: ["HTML", "CSS"],
    colors: ["#E34F26", "#1572B6"],
  },
  {
    title: "Piloto Provedor",
    description: "CRUD simples em PHP com banco de dados local em JSON.",
    image: "https://i.imgur.com/l8n7ekH.jpg",
    link: "https://github.com/evilyn-cordeiro/crud-php-provedor-internet",
    technologies: ["PHP"],
    colors: ["#8A2F34"],
  },
  {
    title: "Login Instagram",
    description:
      "Tela de login responsiva baseada no modelo desktop do Instagram.",
    image: "https://i.imgur.com/l8n7ekH.jpg",
    link: "https://github.com/evilyn-cordeiro/instagram-login",
    technologies: ["HTML", "CSS"],
    colors: ["#E34F26", "#1572B6"],
  },
];

export const technologies = [
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "React", icon: "devicon-react-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "NodeJS", icon: "devicon-nodejs-plain" },
  { name: "Material UI", icon: "devicon-materialui-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "SASS", icon: "devicon-sass-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Ant Design", icon: "devicon-antdesign-plain" },
  { name: "Figma", icon: "devicon-figma-plain" },
  { name: "SQL", icon: "devicon-mysql-plain" },
];

interface AboutMeItem {
  title: string;
  icon: JSX.Element;
}

export const aboutMeInfo = (currentTheme: any): AboutMeItem[] => [
  {
    title: "Ceará, Brasil",
    icon: (
      <LocationOnIcon
        sx={{
          fontSize: 24,
          color: currentTheme.palette.primary.main,
        }}
      />
    ),
  },
  {
    title: "Senior Sistemas",
    icon: (
      <WorkIcon
        sx={{
          fontSize: 24,
          color: currentTheme.palette.primary.main,
        }}
      />
    ),
  },
  {
    title: "evilyn-cordeiro", // Nome do usuário no GitHub
    icon: (
      <GitHubIcon
        sx={{
          fontSize: 24,
          color: currentTheme.palette.primary.main,
        }}
      />
    ),
  },
  {
    title: "evilynprofile-dev", // Nome do usuário no LinkedIn
    icon: (
      <LinkedInIcon
        sx={{
          fontSize: 24,
          color: currentTheme.palette.primary.main,
        }}
      />
    ),
  },
];
