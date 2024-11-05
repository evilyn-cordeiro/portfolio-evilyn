import { Typography } from "@mui/material";
import { TitleContainerStyled } from "./styles";
import { Description } from "@mui/icons-material";

interface TitleProps {
  title: string;
  description: string;
  width?: string;
  fontSize?: number;
}
export default function Title({
  title,
  description,
  width = "100%",
  fontSize = 30,
}: TitleProps) {
  return (
    <TitleContainerStyled>
      <Typography title={title} width={width} fontSize={fontSize}>
        {title}
      </Typography>
      <Typography fontSize={16}>{description}</Typography>
    </TitleContainerStyled>
  );
}
