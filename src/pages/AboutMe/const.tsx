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
    image: "/projeto-2.png",
    link: "https://desafio-do-tempo-react.vercel.app/",
    technologies: ["React", "JavaScript"],
    colors: ["#61DAFB", "#F7DF1E"],
  },
  {
    title: "Spotify",
    description:
      "Clone da landing page do Spotify, focado em layout e design responsivo.",
    image: "/projeto-1.png",
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
    colors: ["#8993BE"],
  },
  {
    title: "Login Instagram",
    description:
      "Tela de login responsiva baseada no modelo desktop do Instagram.",
    image: "/projeto-3.png",
    link: "https://github.com/evilyn-cordeiro/instagram-login",
    technologies: ["HTML", "CSS"],
    colors: ["#E34F26", "#1572B6"],
  },
  {
    title: "Vitta Clinic",
    description:
      "Sistema de gestão de clínicas médicas, desenvolvido em parceria com colegas de faculdade.",
    image: "/projeto-4.png",
    link: "https://github.com/thigodev/VittaClinic",
    technologies: ["PHP", "JavaScript", "Docker"],
    colors: ["#8993BE", "#F7DF1E", "#2496ED"],
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

export const experience = [
  {
    title: "Senior Sistemas",
    work: "Software Developer I",
    date: "até o momento",
    city: "Blumenau, Santa Catarina, Brasil",
  },
  {
    title: "Konviva Edtech",
    work: "Desenvolvedora Front-end Jr II",
    date: "Maio de 2023 à Agosto",
    city: "Florianópolis, Santa Catarina, Brasil",
  },
  {
    title: "Konviva Edtech",
    work: "Desenvolvedora Front-end Jr I",
    date: "Maio de 2023 à 2024",
    city: "Florianópolis, Santa Catarina, Brasil",
  },
  {
    title: "Toukio",
    work: "Desenvolvedora Front-end Jr",
    date: "Fevereiro de 2022 à 2023",
    city: "Barbalha, Ceará, Brasil",
  },
  {
    title: "Toukio",
    work: "Desenvolvimento Front-end (Estágio)",
    date: "Novembro de 2021 à 2022",
    city: "Barbalha, Ceará, Brasil",
  },
  {
    title: "E.E.E.P Otília Correia Saraiva",
    work: "Aluna Pesquisadora",
    date: "Junho de 2019 à 2021",
    city: "Barbalha, Ceará, Brasil",
  },
];

export const study = [
  {
    title: "Análises e Desenvolvimento de Sistemas",
    date: "2023 - 2025",
  },
  { title: "Redes de Computadores", date: "2019 - 2021" },
];
export const posts = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQFP0tM1_suZ5A/feedshare-shrink_800/feedshare-shrink_800/0/1729649041066?e=1733356800&v=beta&t=c1n0S0zMn6-yC4gO4lDwMl8KxhBgok35mn0MPhX683Q",
    description: "Apresentação do Resumo Expandido em 24 de Outubro de 2024",
    link: "https://www.linkedin.com/posts/evilyn-araujo-profiledev_hoje-apresentei-um-resumo-expandido-que-activity-7254673895348166656-lmY6?utm_source=share&utm_medium=member_desktop",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQHT_TwGtZjYLg/feedshare-shrink_800/feedshare-shrink_800/0/1729872979713?e=1733356800&v=beta&t=tZi323hEiiaX8_O8fM8CGx9w-i8_XkwsSylChYku_YQ",
    description: "Veja algumas reflexões sobre crescimento profissional!",
    link: "https://www.linkedin.com/posts/evilyn-araujo-profiledev_desenvolvimentopessoal-frontend-backend-activity-7258883622001098753-9",
  },
];
