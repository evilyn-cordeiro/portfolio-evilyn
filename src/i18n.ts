import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"; // Usando http-backend ao invés de xhr-backend

// Arquivos de tradução
import pt from "./locales/i18n-pt.json";
import en from "./locales/i18n-en.json";

// Configuração do i18n
i18n
  .use(LanguageDetector)
  .use(Backend) // Usando o backend correto
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: "pt", // idioma padrão
    fallbackLng: "pt", // caso não encontre a tradução
    interpolation: {
      escapeValue: false,
    },
    debug: true, // Habilite o modo de debug para ajudar a diagnosticar problemas
  });

export default i18n;
