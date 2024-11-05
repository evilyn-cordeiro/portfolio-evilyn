import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import { Title } from "../../components";

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "Senior Sistemas",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzOkBP-PqVY_0ft8ktYMfdL4XrozEFcPSiHpstOscS3p-jDfjADqpeMMQTPUg0Axbiwo&usqp=CAU", // Insira o logo real
      location: "Blumenau, SC, Brasil",
      duration: "8 meses (abr de 2024 - presente)",
      role: "Software Developer",
      description:
        "Contribuindo no time de Manutenção e Sustentação, focando na correção de bugs (front-end) de interfaces e funcionalidades, além de acompanhar as atividades do back-end e participar de reuniões.",
    },
    {
      company: "Konviva Edtech",
      logo: "https://play-lh.googleusercontent.com/CEU2wPARs7HLmbAQX98BpsnUC-dundhrQKhW6JY3yOaFjFEilVGhCUkDV2-s9cbGng=w240-h480-rw", // Insira o logo real
      location: "Santa Catarina, Brasil",
      duration: "5 meses (dez de 2023 - abr de 2024)",
      role: "Desenvolvedora Front-end Junior Nível II",
      description:
        "Desenvolvimento de interfaces e componentes, aplicando técnicas de design system e integrando APIs. Participação ativa em reuniões para alinhamento e colaboração com a equipe.",
    },
    {
      company: "Konviva Edtech",
      logo: "https://play-lh.googleusercontent.com/CEU2wPARs7HLmbAQX98BpsnUC-dundhrQKhW6JY3yOaFjFEilVGhCUkDV2-s9cbGng=w240-h480-rw", // Insira o logo real
      location: "Santa Catarina, Brasil",
      duration: "8 meses (mai de 2023 - dez de 2023)",
      role: "Desenvolvedora Front-end Junior Nível I",
      description:
        "Atuação no time de manutenção e, posteriormente, no desenvolvimento de interfaces e componentes. Aplicação de técnicas de design system e integração de APIs.",
    },
    {
      company: "Toukio",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFNIW9elaGPYQ/company-logo_200_200/company-logo_200_200/0/1630437758658/toukio_logo?e=1738800000&v=beta&t=z-dAOOX9q-IqgLylwlbhJ7QRvCO8H2Onaoe5boB-0Uc",
      location: "Barbalha, CE, Brasil",
      duration: "1 ano e 2 meses (mar de 2022 - abr de 2023)",
      role: "Desenvolvedora Front-End Junior",
      description:
        "Criação de componentes funcionais, páginas de sistemas e landing pages, consumo de APIs e desenvolvimento de protótipos de baixa fidelidade para UX/UI.",
    },
    {
      company: "Toukio",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFNIW9elaGPYQ/company-logo_200_200/company-logo_200_200/0/1630437758658/toukio_logo?e=1738800000&v=beta&t=z-dAOOX9q-IqgLylwlbhJ7QRvCO8H2Onaoe5boB-0Uc", // Insira o logo real
      location: "Barbalha, CE, Brasil",
      duration: "3 meses (dez de 2021 - fev de 2022)",
      role: "Desenvolvedora Front-end Estágio",
      description:
        "Aplicação de conhecimentos em desenvolvimento de software, lógica e algoritmos, além de aprendizado sobre tecnologias e arquiteturas voltadas para o desenvolvimento web.",
    },
    {
      company: "E.E.E.P Otília Correia Saraiva",
      logo: "https://yt3.googleusercontent.com/IrHk05f9p4IV7dJeces8uRt1bA33xdswWYkDJW9WNMs5H2dmgJof8hiLvr4gR3dGTVlvtQyc=s900-c-k-c0x00ffffff-no-rj",
      location: "Barbalha, CE, Brasil",
      duration: "3 anos e 1 mês (jan de 2019 - jan de 2022)",
      role: "Aluno Pesquisador",
      description:
        "Participação em equipes de pesquisa, desenvolvimento de softwares usando Android Studio, Delphi, HTML e CSS, e apresentação de projetos em feiras científicas.",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Title
        title={"Experiências Profissionais"}
        description={
          "Nesta seção, apresento minha trajetória profissional, destacando as experiências que vivi em diferentes empresas. Aqui, você encontrará detalhes sobre as funções que desempenhei, os projetos que participei e as habilidades que desenvolvi ao longo do caminho."
        }
      />
      <Box sx={{ position: "relative", pl: 4, mt: 5 }}>
        {experiences.map((experience, index) => (
          <Box key={index} sx={{ mb: 4, position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: 2,
                height: "100%",
                bgcolor: "grey.300",
              }}
            />
            <Paper
              elevation={3}
              sx={{ padding: 2, marginLeft: 4, position: "relative" }}
            >
              <Avatar
                src={experience.logo}
                alt={experience.company}
                sx={{
                  width: 40,
                  height: 40,
                  position: "absolute",
                  top: -28,
                  left: -28,
                }}
              />
              <Typography variant="h6">{experience.company}</Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.duration}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {experience.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceTimeline;
