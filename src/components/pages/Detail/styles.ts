import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export const StyledGrid = styled(Grid)`
  padding: 0 10px;

  ${(props) => props.theme.breakpoints.up("md")} {
    margin-top: 100px;
    width: ${(props) => props.theme.breakpoints.values.md}px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    margin-top: 0;
    width: 100%;
  }
`;

export const StyledButton = styled("button")`
  background: none;
  border: 0;
  outline: 0;
  font-family: Inter;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;

  & svg {
    font-size: 16px;
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    margin-bottom: 50px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    margin-bottom: 25px;
  }
`;

export const ImageWrapper = styled("div")`
  width: 100%;
  height: 330px;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s;

  ${(props) => props.theme.breakpoints.up("sm")} {
    width: 270px;
    margin-right: 20px;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
    margin-bottom: 15px;
    margin-right: 0;
  }

  & img {
    border-radius: 10px;
  }
`;

export const ContentWrapper = styled(Grid)`
  flex-grow: 1;

  ${(props) => props.theme.breakpoints.up("sm")} {
    width: auto;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
  }

  & svg {
    margin-left: 10px;
    color: #20bf12;
  }

  & hr {
    flex-grow: 1;
    margin: 0 10px;
    bordercolor: #d9d9d9;
  }
`;
