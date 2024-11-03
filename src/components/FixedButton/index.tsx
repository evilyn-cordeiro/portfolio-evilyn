import { StyledButton } from "./styles";

interface FixedButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

const FixedButton = ({ onClick, icon }: FixedButtonProps) => {
  return (
    <StyledButton variant="contained" color="secondary" onClick={onClick}>
      {icon}
    </StyledButton>
  );
};

export default FixedButton;
