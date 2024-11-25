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
  // {
  //   title: "Piloto React",
  //   description:
  //     "Aplicação simples em React JS, explorando hooks e navegação entre páginas. Aprendizado em gerenciamento de estado e interatividade com o usuário.",
  //   imageUrl: "/projeto-2.png",
  //   link: "https://desafio-do-tempo-react.vercel.app/",
  //   technologies: ["React", "JavaScript"],
  //   colors: ["#61DAFB", "#F7DF1E"],
  // },
  // {
  //   title: "Piloto Provedor",
  //   description:
  //     "CRUD simples em PHP com banco de dados local em JSON, onde o usuário pode adicionar, editar, excluir e listar dados sobre provedores de internet. A aplicação foi criada para ser simples e intuitiva, utilizando uma interface básica e funcional. Um dos principais desafios foi implementar um sistema de persistência de dados eficiente, utilizando o formato JSON para armazenar as informações localmente, sem a necessidade de um banco de dados relacional. Este projeto ajudou a reforçar meus conhecimentos em PHP e no uso de arquivos como banco de dados.",
  //   imageUrl:
  //     "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2Fef3219930906-As-7-melhores-ferramentas-de-integracao-de-API-para-2024.jp.jpeg",
  //   link: "https://github.com/evilyn-cordeiro/crud-php-provedor-internet",
  //   technologies: ["PHP"],
  //   colors: ["#8993BE"],
  // },
  // {
  //   title: "Login Instagram",
  //   description:
  //     "Tela de login responsiva baseada no modelo desktop do Instagram. O projeto foca na construção de uma interface limpa e direta, com elementos que imitam o design do Instagram, utilizando HTML e CSS. A principal preocupação foi garantir que a página fosse responsiva e que a estrutura ficasse visualmente semelhante à original. A maior dificuldade foi lidar com os detalhes de responsividade, ajustando a página para funcionar bem em diferentes dispositivos.",
  //   imageUrl: "/projeto-3.png",
  //   link: "https://github.com/evilyn-cordeiro/instagram-login",
  //   technologies: ["HTML", "CSS"],
  //   colors: ["#E34F26", "#1572B6"],
  // },
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
    name: "Node JS",
    icon: "devicon-nodejs-plain",
    experience: 2,
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
    name: "Angular",
    icon: "devicon-angularjs-plain",
    experience: 2,
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
    name: "Figma",
    icon: "devicon-figma-plain",
    experience: 3,
    description:
      "Linguagem de marcação usada para estruturar conteúdo na web, definindo elementos como cabeçalhos, parágrafos, links e imagens.",
  },
  {
    name: "Docker",
    icon: "devicon-docker-plain",
    experience: 1,
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
