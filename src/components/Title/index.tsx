import { Typography } from "@mui/material";
import { TitleContainerStyled } from "./styles";

interface TitleProps {
  title: string;
  width?: string;
  fontSize?: number;
}
export default function Title({
  title,
  width = "100%",
  fontSize = 30,
}: TitleProps) {
  return (
    <TitleContainerStyled>
      <Typography title={title} width={width} fontSize={fontSize}>
        {title}
      </Typography>
    </TitleContainerStyled>
  );
}
