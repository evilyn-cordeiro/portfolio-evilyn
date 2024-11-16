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
    imageUrl: "/projeto-2.png",
    link: "https://desafio-do-tempo-react.vercel.app/",
    technologies: ["React", "JavaScript"],
    colors: ["#61DAFB", "#F7DF1E"],
  },
  {
    title: "Spotify",
    description:
      "Clone da landing page do Spotify, focado em layout e design responsivo.",
    imageUrl: "/projeto-1.png",
    link: "https://spotify-ivory-sigma.vercel.app/",
    technologies: ["HTML", "CSS"],
    colors: ["#E34F26", "#1572B6"],
  },
  {
    title: "Piloto Provedor",
    description: "CRUD simples em PHP com banco de dados local em JSON.",
    imageUrl:
      "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2Fef3219930906-As-7-melhores-ferramentas-de-integracao-de-API-para-2024.jp.jpeg",
    link: "https://github.com/evilyn-cordeiro/crud-php-provedor-internet",
    technologies: ["PHP"],
    colors: ["#8993BE"],
  },
  {
    title: "Login Instagram",
    description:
      "Tela de login responsiva baseada no modelo desktop do Instagram.",
    imageUrl: "/projeto-3.png",
    link: "https://github.com/evilyn-cordeiro/instagram-login",
    technologies: ["HTML", "CSS"],
    colors: ["#E34F26", "#1572B6"],
  },
  {
    title: "Vitta Clinic",
    description:
      "Sistema de gestão de clínicas médicas, desenvolvido em parceria com colegas de faculdade.",
    imageUrl: "/projeto-4.png",
    link: "https://github.com/thigodev/VittaClinic",
    technologies: ["PHP", "JavaScript", "Docker"],
    colors: ["#8993BE", "#F7DF1E", "#2496ED"],
  },
  {
    title: "Ponto da Comida",
    description:
      "Landinpage  projetada para restaurantes de comidas saudáveis.",
    imageUrl: "/projeto-5.png",
    link: "https://food-point-beryl.vercel.app/",
    technologies: ["HTML", "CSS"],
    colors: ["#E34F26", "#1572B6"],
  },
];

export const technologies = [
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    experience: 4,
    description:
      "Linguagem de programação essencial para o desenvolvimento web, usada tanto no lado do cliente (frontend) quanto no servidor (backend, com Node.js).",
  },
  {
    name: "React",
    icon: "devicon-react-plain",
    experience: 4,
    description:
      "Biblioteca JavaScript para construir interfaces de usuário dinâmicas e reativas, especialmente para Single Page Applications (SPA).",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    experience: 4,
    description:
      "Superset do JavaScript que adiciona tipagem estática e recursos de orientação a objetos, tornando o código mais seguro e escalável.",
  },
  {
    name: "CSS",
    icon: "devicon-css3-plain",
    experience: 4,
    description:
      "Linguagem de estilização usada para descrever a apresentação de um documento HTML, incluindo cores, layouts e fontes.",
  },
  {
    name: "HTML",
    icon: "devicon-html5-plain",
    experience: 4,
    description:
      "Linguagem de marcação usada para estruturar conteúdo na web, definindo elementos como cabeçalhos, parágrafos, links e imagens.",
  },
  {
    name: "PHP",
    icon: "devicon-php-plain",
    experience: 1,
    description:
      "Linguagem de programação amplamente utilizada no desenvolvimento web, especialmente no lado do servidor para criar sites dinâmicos e interativos.",
  },
  {
    name: "SQL",
    icon: "devicon-mysql-plain",
    experience: 1,
    description:
      "Linguagem de consulta estruturada usada para gerenciar e consultar dados em bancos de dados relacionais como MySQL, PostgreSQL e outros.",
  },
  {
    name: "Laravel",
    icon: "devicon-laravel-plain",
    experience: 1,
    description:
      "Framework PHP robusto para o desenvolvimento de aplicações web, com foco em simplicidade, elegância e uma estrutura de código limpa e modular.",
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
