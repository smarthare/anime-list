import { styled } from "@mui/material/styles";

export const StyledFooter = styled("div")`
  width: 100%;
  height: 100px;
  border-top: 2px solid #eee;
  background: #fff;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledFooterContent = styled("div")`
  height: 100%;
  width: ${(props) => props.theme.breakpoints.values.md}px;
  padding: 0 20px;
  border-top: 2px solid @eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${(props) => props.theme.breakpoints.values.md}px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;
