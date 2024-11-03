import { AppBar, ListItem, ListItemIcon } from "@mui/material";
import styled from "styled-components";

export const ListItemStyled = styled(ListItem)`
  cursor: pointer;
  color: white;
  &:hover {
    background-color: rgb(255, 255, 255, 0.2);
  }

  &.selected {
    background-color: rgb(255, 255, 255, 0.2);
  }
`;

export const AppBarStyled = styled(AppBar)``;
