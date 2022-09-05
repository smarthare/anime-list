import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { IButtonProps } from "types/components";
import { StyledButton } from "./styles";

function AnimeButton({ buttonType, ...rest }: IButtonProps) {
  return (
    <StyledButton buttonType={buttonType} {...rest}>
      {buttonType === "next" ? (
        <ArrowForwardIcon />
      ) : buttonType === "prev" ? (
        <ArrowBackIcon />
      ) : (
        <KeyboardArrowUpIcon />
      )}
    </StyledButton>
  );
}

export default AnimeButton;
