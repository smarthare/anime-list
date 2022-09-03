import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled("main")`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled(Box)`
  width: 100%;
  border-radius: 10px;
  position: relative;

  ${(props) => props.theme.breakpoints.up("lg")} {
    height: calc(100vh / 3 - 64px);
  }
  ${(props) => props.theme.breakpoints.down("lg")} {
    height: calc(100vh / 2.5 - 64px);
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    height: calc(100vh / 2 - 64px);
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    height: calc(100vh / 1.5 - 64px);
  }

  transition: all 0.3s;
`;

export const TitleWrapper = styled(Box)`
  height: 110px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    180deg,
    #d9d9d9 0%,
    rgba(0, 0, 0, 0) 0.01%,
    rgba(0, 0, 0, 0.69) 100%
  );
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
