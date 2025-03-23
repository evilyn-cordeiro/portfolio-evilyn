import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  CircularProgress,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { sendFormData } from "../../services/formService";

interface FormularioProps {
  currentTheme: any;
}

const Formulario = React.forwardRef<HTMLElement, FormularioProps>(
  ({ currentTheme }, ref) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
      nome: "",
      email: "",
      empresa: "",
      mensagem: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setMessage({ type: "", text: "" });

      const result = await sendFormData(formData);
      setLoading(false);

      if (result.success) {
        setMessage({ type: "success", text: t("successMessage") });
        setFormData({ nome: "", email: "", empresa: "", mensagem: "" });
      } else {
        setMessage({ type: "error", text: t("errorMessage") });
      }
    };

    return (
      <Box
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
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          {t("formTitle")}
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            padding: "2rem",
            maxWidth: "350px",
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label={t("name")}
            name="nome"
            variant="outlined"
            value={formData.nome}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label={t("email")}
            name="email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label={t("company")}
            name="empresa"
            variant="outlined"
            value={formData.empresa}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label={t("messageOptional")}
            name="mensagem"
            variant="outlined"
            value={formData.mensagem}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
          {message.text && (
            <Typography
              sx={{
                color:
                  message.type === "error"
                    ? currentTheme.palette.error.main
                    : currentTheme.palette.success.main,
                fontSize: "0.875rem",
                textAlign: "center",
              }}
            >
              {message.text}
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
            {t("submit")}
          </Button>
        </Box>
      </Box>
    );
  }
);

export default Formulario;
