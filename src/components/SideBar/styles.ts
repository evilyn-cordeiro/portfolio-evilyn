import { AppBar, ListItem, ListItemIcon } from "@mui/material";
import styled from "styled-components";

export const ListItemStyled = styled(ListItem)`
  cursor: pointer;
  &:hover {
    background-color: rgb(68, 2, 30, 0.1);
  }

  &.selected {
    background-color: rgb(68, 2, 30, 0.2);
    color: #44021e;
  }
`;

export const AppBarStyled = styled(AppBar)``;
