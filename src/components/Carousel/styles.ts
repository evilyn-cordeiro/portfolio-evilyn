import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden; // Esconder itens que saem do limite
  padding: 1rem;
`;

export const CarouselItemsContainer = styled.div<{
  translateX: number;
  itemsLengh: number;
}>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.5s ease;
`;

export const CarouselItem = styled.div`
  box-sizing: border-box; // Inclui padding e margin nas dimensões
  margin-right: 1rem; // Margem entre os itens

  &:last-child {
    margin-right: 0; // Remove margem do último item
  }
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%; // Garantir que os indicadores ocupem 100% da largura
`;

export const Indicator = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#590753" : "lightgray")};
  cursor: pointer;
  transition: background-color 0.3s;
`;
