import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material";

export const Container = styled("main")`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});
