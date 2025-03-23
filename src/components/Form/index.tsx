import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  TextField,
  Box,
  Typography,
} from "@mui/material";

interface FormularioProps {
  currentTheme: any;
}

const Formulario = React.forwardRef<HTMLElement, FormularioProps>(
  ({ currentTheme }, ref) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      const data = { nome, email, empresa, mensagem };

      try {
        const response = await fetch(
          "https://backend-portfolio-7x4q.onrender.com/api/form",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const result = await response.json();
        if (response.ok) {
          setSuccessMessage(
            "Envio realizado. Logo receberá meu currículo por e-mail!"
          );
          setNome("");
          setEmail("");
          setEmpresa("");
          setMensagem("");
        } else {
          setErrorMessage(result.message);
        }
      } catch (error) {
        setErrorMessage("Erro ao enviar os dados. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <Box
        key={"form"}
        id={"form"}
        ref={ref}
        sx={{
          backgroundColor: currentTheme.palette.background.paper,
          padding: "5rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: currentTheme.palette.text.primary,
            position: "relative",
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
          }}
        >
          Formulário de Solicitação
          <Box
            sx={{
              height: "4px",
              width: "200px",
              backgroundColor: currentTheme.palette.primary.main,
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Typography>
        {/* Formulário */}
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            padding: "2rem",
            maxWidth: "350px",
            width: "100%",
            height: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Empresa"
            variant="outlined"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
            fullWidth
          />
          {/* Campo de mensagem - Opcional */}
          <TextField
            label="Mensagem (Opcional)"
            variant="outlined"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />

          {errorMessage && (
            <Typography
              sx={{
                color: currentTheme.palette.error.main,
                fontSize: "0.875rem",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </Typography>
          )}
          {successMessage && (
            <Typography
              sx={{
                color: currentTheme.palette.success.main,
                fontSize: "0.875rem",
                textAlign: "center",
              }}
            >
              {successMessage}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {loading && <CircularProgress size={24} sx={{ marginRight: 1 }} />}
            Solicitar Currículo
          </Button>
        </Box>
      </Box>
    );
  }
);

export default Formulario;
