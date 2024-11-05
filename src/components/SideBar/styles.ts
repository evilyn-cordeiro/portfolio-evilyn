import { AppBar, List, ListItem } from "@mui/material";
import styled from "styled-components";

export const ListItemStyled = styled(ListItem)`
  cursor: pointer;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Corrigido para rgba */
  }

  &.selected {
    background-color: rgba(255, 255, 255, 0.2); /* Corrigido para rgba */
  }
`;

export const AppBarStyled = styled(AppBar)``;

export const VersionStyled = styled.div`
  text-align: center;
  font-size: 12px;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ListStyled = styled(List)`
  background: #95003a;
  height: 100%;
`;
