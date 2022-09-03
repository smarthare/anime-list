import { styled } from "@mui/material/styles";

export const StyledFooter = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: any }>`
  width: 100%;
  border-top: 2px solid #eee;
  display: flex;
  justify-content: center;
  background: #fff;
  height: 100px;
`;

export const StyledFooterContent = styled("div")`
  height: 100%;
  width: ${(props) => props.theme.breakpoints.values.md}px;
  padding: 0 20px;
  border-top: 2px solid @eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
