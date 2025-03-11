import "devicon/devicon.min.css";
import {
  GitHubIcon,
  LinkedInIcon,
  LocationOnIcon,
  WorkIcon,
} from "../../components/icons";
export const projects = [
  {
    title: "projeto-vitta-clinic-titulo",
    description: "projeto-vitta-clinic-descricao",
    imageUrl: "/projeto-4.png",
    link: "https://github.com/thigodev/VittaClinic",
    technologies: ["PHP", "JavaScript", "Docker"],
    colors: ["#8993BE", "#F7DF1E", "#2496ED"],
  },
  {
    title: "projeto-ponto-da-comida-titulo",
    description: "projeto-ponto-da-comida-descricao",
    imageUrl: "/projeto-5.png",
    link: "https://food-point-beryl.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    colors: ["#E34F26", "#1572B6", "#F7DF1E"],
  },
  {
    title: "projeto-spotify-titulo",
    description: "projeto-spotify-descricao",
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
    title: "Senior-Sistemas.title",
    work: "Senior-Sistemas.work",
    date: "Senior-Sistemas.date",
    city: "Senior-Sistemas.city",
  },
  {
    title: "Konviva-Edtech-JrII.title",
    work: "Konviva-Edtech-JrII.work",
    date: "Konviva-Edtech-JrII.date",
    city: "Konviva-Edtech-JrII.city",
  },
  {
    title: "Konviva-Edtech-JrI.title",
    work: "Konviva-Edtech-JrI.work",
    date: "Konviva-Edtech-JrI.date",
    city: "Konviva-Edtech-JrI.city",
  },
  {
    title: "Toukio-Jr.title",
    work: "Toukio-Jr.work",
    date: "Toukio-Jr.date",
    city: "Toukio-Jr.city",
  },
  {
    title: "Toukio-Estagio.title",
    work: "Toukio-Estagio.work",
    date: "Toukio-Estagio.date",
    city: "Toukio-Estagio.city",
  },
  {
    title: "EEEP-Otilia.title",
    work: "EEEP-Otilia.work",
    date: "EEEP-Otilia.date",
    city: "EEEP-Otilia.city",
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
