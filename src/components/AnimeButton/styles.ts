import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

export const StyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "buttonType",
})<{ buttonType: any }>`
  min-width: 32px;
  width: 32px;
  height: 32px;
  margin: 0 12px;
  border: 0;
  border-radius: 5px;
  background: #ebebeb;
  color: ${(props) => (props.buttonType === "up" ? "#000" : "#666666")};

  & svg {
    font-size: ${(props) => (props.buttonType === "up" ? "24px" : "16px")};
  }

  &:hover {
    background: #cbcbcb;
  }
`;
