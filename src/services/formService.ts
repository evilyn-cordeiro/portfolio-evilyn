import i18n from "../i18n";

export const sendFormData = async (formData: {
  nome: string;
  email: string;
  empresa: string;
  mensagem?: string;
}) => {
  const idioma = i18n.language;
  try {
    const response = await fetch(
      "https://backend-portfolio-7x4q.onrender.com/api/form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          idioma,
        }),
      }
    );

    const result = await response.json();
    return response.ok
      ? { success: true, data: result }
      : { success: false, message: result.message };
  } catch (error) {
    return {
      success: false,
      message: "Erro ao enviar os dados. Tente novamente.",
    };
  }
};
