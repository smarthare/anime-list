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
  transition: all 0.3s;

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

  & span {
    border-radius: 10px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 30%),
      0px 0px 2px 0px rgb(0 0 0 / 14%), 0px 0px 5px 0px rgb(0 0 0 / 12%);
    transition: all 0.6s;

    & img {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }
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

  & p {
    ${(props) => props.theme.breakpoints.down("md")} {
      font-size: 24px;
    }

    ${(props) => props.theme.breakpoints.down("sm")} {
      font-size: 32px;
    }
  }
`;
