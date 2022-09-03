import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)`
  min-height: 58px !important;
  padding: 0 20px !important;
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${(props) => props.theme.breakpoints.values.md}px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const StyledAppBar = styled(AppBar)`
  box-shadow: 1;
  height: 58px;
  display: flex;
  align-items: center;
`;
