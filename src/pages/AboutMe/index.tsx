import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from "@mui/material";
import { FixedButton } from "../../components";
import { LinkedInIcon } from "../../components/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutMe = () => {
  const myInfo = {
    name: "Evilyn Cordeiro",
    description: "Analista e Desenvolvedora de Softwares",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFH-QQpjBeSuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729791032780?e=1736380800&v=beta&t=IzLImBXmv9U79a4YAisxEfasWTAgnq0QqVMLMmrSLYA",
    coverImage:
      "https://img.myloview.com.br/quadros/marsala-cor-3d-seamless-wallpaper-700-49367087.jpg",
  };

  const topics = [
    {
      title: "Objetivos Profissionais",
      description:
        "Quero aprimorar meus conhecimentos em Desenvolvimento Full Stack, completando a pós-graduação em desenvolvimento web full stack para consolidar minhas habilidades em front-end e back-end. Busco também desenvolver minha expertise na criação e integração de APIs, visando melhorar a comunicação entre sistemas e aplicações. Pretendo assumir papéis de liderança em projetos de desenvolvimento, contribuindo para discussões estratégicas e implementando melhorias significativas nas interfaces. Estou interessada em explorar e implementar arquiteturas de software modernas que promovam escalabilidade e eficiência. Quero participar ativamente de projetos open source para colaborar com a comunidade e expandir meus conhecimentos práticos. Além disso, planejo me manter atualizada com as últimas tendências e tecnologias em desenvolvimento de software por meio de cursos e projetos pessoais. Por fim, desejo compartilhar meus conhecimentos e experiências com outros desenvolvedores, seja através de mentoria ou pela criação de conteúdos educativos.",
    },
    {
      title: "Cursos de Interesse",
      description:
        "Pretendo iniciar uma nova graduação em Engenharia de Softwares e também um curso tecnólogo em Banco de Dados",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      {/* Área da Capa */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          backgroundImage: `url(${myInfo.coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 1,
          marginBottom: 2,
        }}
      >
        {/* Avatar centralizado */}
        <Avatar
          alt={myInfo.name}
          src={myInfo.avatar}
          sx={{
            width: 150,
            height: 150,
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid white",
          }}
        />
      </Box>

      {/* Informações pessoais */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
          marginTop: 10,
        }}
      >
        <Typography variant="h5">{myInfo.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {myInfo.description}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {topics.map((topic, index) => (
          <Grid item xs={12} key={index}>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{topic.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {topic.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>

      <FixedButton icon={<LinkedInIcon />} />
    </Box>
  );
};

export default AboutMe;
