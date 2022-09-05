import { NextSeo } from "next-seo";

import { ThemeProvider } from "@emotion/react";

import Header from "../Header";
import Footer from "../Footer";
import { ILayoutProps } from "../../types/components";
import { Container, theme } from "./styles";

function Layout({ children, showHeader }: ILayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextSeo title={`Anime - ${showHeader ? "Recommendations" : "Detail"}`} />

      {showHeader && <Header />}
      <Container>{children}</Container>
      {showHeader && <Footer />}
    </ThemeProvider>
  );
}

export default Layout;
