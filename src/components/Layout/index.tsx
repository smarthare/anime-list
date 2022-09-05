import Head from "next/head";

import { ThemeProvider } from "@emotion/react";

import Header from "../Header";
import Footer from "../Footer";
import { ILayoutProps } from "../../types/components";
import { Container, theme } from "./styles";

function Layout({ children, showHeader }: ILayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Anime - {showHeader ? "Recommendations" : "Detail"}</title>
      </Head>

      {showHeader && <Header />}
      <Container>{children}</Container>
      {showHeader && <Footer />}
    </ThemeProvider>
  );
}

export default Layout;
