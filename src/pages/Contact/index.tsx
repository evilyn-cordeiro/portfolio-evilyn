import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const ContactSection = () => {
  const contactInfo = [
    {
      label: "E-mail",
      value: "seuemail@exemplo.com",
    },
    {
      label: "Telefone",
      value: "(99) 99999-9999",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/seu-perfil/",
    },
    {
      label: "GitHub",
      value: "https://github.com/seu-usuario/",
    },
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <Grid container spacing={2}>
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="h6">{info.label}</Typography>
            <Typography variant="body2" color="text.secondary">
              {info.label === "E-mail" || info.label === "Telefone" ? (
                info.value
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  href={info.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginTop: 1 }}
                >
                  Visitar
                </Button>
              )}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactSection;
