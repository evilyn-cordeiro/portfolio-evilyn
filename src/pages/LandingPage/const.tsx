import "devicon/devicon.min.css";
import {
  GitHubIcon,
  LinkedInIcon,
  LocationOnIcon,
  WorkIcon,
} from "../../components/icons";
export const projects = [
  {
    title: "Vitta Clinic",
    description:
      "Sistema de gestão para clínicas médicas, com módulos para pacientes, médicos e recepcionistas. Foi usado o Docker para escalabilidade e flexibilidade. Desafios incluem integração de módulos e criação de interface intuitiva.",
    imageUrl: "/projeto-4.png",
    link: "https://github.com/thigodev/VittaClinic",
    technologies: ["PHP", "JavaScript", "Docker"],
    colors: ["#8993BE", "#F7DF1E", "#2496ED"],
  },
  {
    title: "Ponto da Comida",
    description:
      "Landing page para restaurante saudável, com design simples e responsivo. Focada na experiência de usuário em dispositivos móveis, utilizando HTML e CSS.",
    imageUrl: "/projeto-5.png",
    link: "https://food-point-beryl.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    colors: ["#E34F26", "#1572B6", "#F7DF1E"],
  },
  {
    title: "Spotify",
    description:
      "Clone responsivo da landing page do Spotify, com animações CSS e design otimizado para SEO. Foco na adaptação para diferentes dispositivos.",
    imageUrl: "/projeto-1.png",
    link: "https://spotify-ivory-sigma.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    colors: ["#E34F26", "#1572B6", "#F7DF1E"],
  },
];

export const technologies = [
  {
    name: "tech-javascript",
    icon: "devicon-javascript-plain",
    experience: 5,
    description: "tech-javascript-description",
  },
  {
    name: "tech-nodejs",
    icon: "devicon-nodejs-plain",
    experience: 2,
    description: "tech-nodejs-description",
  },
  {
    name: "tech-react",
    icon: "devicon-react-plain",
    experience: 5,
    description: "tech-react-description",
  },
  {
    name: "tech-angular",
    icon: "devicon-angularjs-plain",
    experience: 3,
    description: "tech-angular-description",
  },
  {
    name: "tech-typescript",
    icon: "devicon-typescript-plain",
    experience: 5,
    description: "tech-typescript-description",
  },
  {
    name: "tech-css",
    icon: "devicon-css3-plain",
    experience: 5,
    description: "tech-css-description",
  },
  {
    name: "tech-html",
    icon: "devicon-html5-plain",
    experience: 5,
    description: "tech-html-description",
  },
  {
    name: "tech-figma",
    icon: "devicon-figma-plain",
    experience: 4,
    description: "tech-figma-description",
  },
  {
    name: "tech-docker",
    icon: "devicon-docker-plain",
    experience: 1,
    description: "tech-docker-description",
  },
  {
    name: "tech-php",
    icon: "devicon-php-plain",
    experience: 1,
    description: "tech-php-description",
  },
  {
    name: "tech-sql",
    icon: "devicon-mysql-plain",
    experience: 1,
    description: "tech-sql-description",
  },
  {
    name: "tech-laravel",
    icon: "devicon-laravel-plain",
    experience: 1,
    description: "tech-laravel-description",
  },
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
    title: "evilyn-cordeiro",
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
    title: "evilynprofile-dev",
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

export const experience = [
  {
    title: "Senior Sistemas",
    work: "Software Developer I",
    date: " 2024 até o momento",
    city: "Blumenau, Santa Catarina, Brasil",
  },
  {
    title: "Konviva Edtech",
    work: "Desenvolvedora Front-end Jr II",
    date: "2023 - 2024",
    city: "Florianópolis, Santa Catarina, Brasil",
  },
  {
    title: "Konviva Edtech",
    work: "Desenvolvedora Front-end Jr I",
    date: "2023 - 2024",
    city: "Florianópolis, Santa Catarina, Brasil",
  },
  {
    title: "Toukio",
    work: "Desenvolvedora Front-end Jr",
    date: "2022 - 2023",
    city: "Barbalha, Ceará, Brasil",
  },
  {
    title: "Toukio",
    work: "Desenvolvimento Front-end (Estágio)",
    date: "2021 - 2022",
    city: "Barbalha, Ceará, Brasil",
  },
  {
    title: "E.E.E.P Otília Correia Saraiva",
    work: "Aluna Pesquisadora",
    date: "2019 - 2021",
    city: "Barbalha, Ceará, Brasil",
  },
];

export const study = [
  {
    title: "Análises e Desenvolvimento de Sistemas (Tecnólogo)",
    school: "Centro Universitário Paraíso",
    date: "2023 - 2025",
  },
  {
    title: "Redes de Computadores (Técnico)",
    school: "E.E.E.P Otília Correia Saraiva",
    date: "2019 - 2021",
  },
];
