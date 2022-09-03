import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

import Header from "../Header";
import { ILayoutProps } from "../../types/components";
import { Container } from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function Layout({ children, showHeader }: ILayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      {showHeader && <Header />}
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

export default Layout;
