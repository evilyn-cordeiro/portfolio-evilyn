// src/components/HeroStyles.ts
import styled, { createGlobalStyle } from "styled-components";
import { Box, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

// Define estilos globais para a animação de bounce
export const GlobalStyles = createGlobalStyle`
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px); /* Sobe */
    }
    100% {
      transform: translateY(0); /* Desce */
    }
  }
`;

// Componente HeroWrapper para o fundo dinâmico
export const HeroWrapper = styled(Box)<{ backgroundImage: string }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

// Componente FadeInText para o efeito de fade-in nos textos
export const FadeInText = styled(Typography)<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 1s ease-out, transform 1s ease-out;
`;

// Componente ScrollIndicator para o container da seta
export const ScrollIndicator = styled(Box)`
  position: absolute;
  bottom: 40px;
  z-index: 1;
  animation: bounce 2s ease-in-out infinite;
  cursor: pointer;
`;

// Componente BouncingArrow para o ícone da seta
export const BouncingArrow = styled(ArrowDownward)<{ textColor: string }>`
  font-size: 2.5rem;
  color: ${(props) => props.textColor};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
